import { Injectable, Logger } from '@nestjs/common';

export interface GeoPoint {
  lat: number;
  lng: number;
}

export interface AddressToGeocode {
  address: string;
  city: string;
}

const GEOAPIFY_KEY_FALLBACK = 'c82a5a0f3d3948308f2a21a480ba7aa1';

/**
 * Rough bounding box per city this business operates in. Used purely as a
 * sanity check on geocoding results -- catches cases where a provider
 * confidently returns a point in the wrong city entirely (this happened for
 * real: a Guadalajara address once resolved to Mazatlán, hundreds of km
 * away). A result outside its own city's box is treated as a failed
 * geocode rather than accepted and silently shown in the wrong place.
 * Margins are generous (covers the metro area, not just downtown) so
 * legitimate results near the edge of a city aren't rejected.
 */
const CITY_BOUNDS: Record<string, { minLat: number; maxLat: number; minLng: number; maxLng: number }> = {
  'Ciudad de México': { minLat: 18.9, maxLat: 19.65, minLng: -99.35, maxLng: -98.95 },
  'Guadalajara': { minLat: 20.55, maxLat: 20.8, minLng: -103.5, maxLng: -103.2 },
  'Chapala': { minLat: 20.25, maxLat: 20.38, minLng: -103.25, maxLng: -103.15 },
  'Cancún': { minLat: 21.0, maxLat: 21.25, minLng: -86.95, maxLng: -86.7 },
  'Tulum': { minLat: 20.1, maxLat: 20.35, minLng: -87.55, maxLng: -87.4 },
  'Playa del Carmen': { minLat: 20.55, maxLat: 20.75, minLng: -87.15, maxLng: -86.95 },
  'Puerto Vallarta': { minLat: 20.55, maxLat: 20.72, minLng: -105.3, maxLng: -105.15 },
  'Nuevo Vallarta': { minLat: 20.68, maxLat: 20.8, minLng: -105.35, maxLng: -105.23 },
  'San Miguel de Allende': { minLat: 20.88, maxLat: 20.95, minLng: -100.78, maxLng: -100.68 },
  'Mérida': { minLat: 20.9, maxLat: 21.05, minLng: -89.7, maxLng: -89.55 },
  'Monterrey': { minLat: 25.55, maxLat: 25.8, minLng: -100.45, maxLng: -100.2 },
  'Santiago': { minLat: 25.35, maxLat: 25.48, minLng: -100.2, maxLng: -100.05 },
};

/**
 * Resolves property addresses to map coordinates.
 *
 * Primary provider is Geoapify (free, no credit card, and its terms
 * explicitly permit commercial use — unlike some alternatives). Nominatim
 * and Photon (both OSM-based, free, no key) are kept as fallbacks in case
 * Geoapify's key is missing or its free quota is ever hit.
 *
 * Results are cached in memory indefinitely — addresses don't move. Warm-up
 * runs once in the background after the server boots; until it finishes,
 * getPreview() just returns whatever has been resolved so far.
 */
@Injectable()
export class GeocodingService {
  private readonly logger = new Logger(GeocodingService.name);
  private cache = new Map<string, GeoPoint | null>();
  private warmed = false;
  private warming = false;

  get(address: string): GeoPoint | null {
    return this.cache.get(address) ?? null;
  }

  isWarmedUp(): boolean {
    return this.warmed;
  }

  private isWithinExpectedCity(city: string, point: GeoPoint): boolean {
    const bounds = CITY_BOUNDS[city.trim()];
    if (!bounds) return true; // unknown city name -- can't validate, don't block it
    return (
      point.lat >= bounds.minLat &&
      point.lat <= bounds.maxLat &&
      point.lng >= bounds.minLng &&
      point.lng <= bounds.maxLng
    );
  }

  async warmUp(entries: AddressToGeocode[]): Promise<void> {
    if (this.warming) return;
    this.warming = true;
    const seen = new Set<string>();
    const unique = entries.filter((e) => {
      if (!e.address || this.cache.has(e.address) || seen.has(e.address)) return false;
      seen.add(e.address);
      return true;
    });
    this.logger.log(`Geocoding warm-up starting for ${unique.length} address(es)...`);
    let geoapifyFailures = 0;
    let nominatimFailures = 0;
    let photonFailures = 0;
    let wrongCityRejections = 0;

    for (const { address, city } of unique) {
      let point = await this.tryProvider(() => this.geocodeGeoapify(address), 'Geoapify', address, city);
      if (!point) {
        geoapifyFailures++;
        point = await this.tryProvider(() => this.geocodeNominatim(address), 'Nominatim', address, city);
        if (!point) {
          nominatimFailures++;
          point = await this.tryProvider(() => this.geocodePhoton(address), 'Photon', address, city);
          if (!point) photonFailures++;
        }
      }
      if (point && !this.isWithinExpectedCity(city, point)) {
        this.logger.warn(
          `Rejected geocoding result for "${address}" (expected city: ${city}) -- ` +
            `resolved point (${point.lat}, ${point.lng}) falls outside that city's expected area.`,
        );
        wrongCityRejections++;
        point = null;
      }
      this.cache.set(address, point);
      // Geoapify's free plan allows ~5 req/sec; this stays well under that
      // while still respecting Nominatim's 1/sec policy on fallback calls.
      await new Promise((r) => setTimeout(r, 300));
    }
    this.warmed = true;
    this.warming = false;
    const resolved = Array.from(this.cache.values()).filter(Boolean).length;
    this.logger.log(
      `Geocoding warm-up complete: ${resolved}/${this.cache.size} resolved ` +
        `(Geoapify failures: ${geoapifyFailures}, Nominatim failures: ${nominatimFailures}, ` +
        `Photon failures: ${photonFailures}, wrong-city rejections: ${wrongCityRejections})`,
    );
  }

  private async tryProvider(
    fn: () => Promise<GeoPoint | null>,
    name: string,
    address: string,
    city: string,
  ): Promise<GeoPoint | null> {
    try {
      const point = await fn();
      if (point && !this.isWithinExpectedCity(city, point)) {
        // Don't accept it from this provider, but don't log/count it as a
        // final rejection here either -- warmUp() re-checks and logs once
        // after all providers have been tried, to avoid duplicate warnings.
        return null;
      }
      return point;
    } catch (e) {
      const cause = e instanceof Error && e.cause ? ` — cause: ${String(e.cause)}` : '';
      this.logger.warn(`${name} geocoding failed for "${address}": ${e}${cause}`);
      return null;
    }
  }

  private async geocodeGeoapify(address: string): Promise<GeoPoint | null> {
    const apiKey = process.env.GEOAPIFY_API_KEY || GEOAPIFY_KEY_FALLBACK;
    const url = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(address)}&filter=countrycode:mx&limit=1&apiKey=${apiKey}`;
    const res = await fetch(url, { signal: AbortSignal.timeout(8000) });
    if (!res.ok) return null;
    const data = (await res.json()) as { features?: Array<{ geometry?: { coordinates?: [number, number] } }> };
    const coords = data.features?.[0]?.geometry?.coordinates;
    if (!coords || coords.length !== 2) return null;
    const [lng, lat] = coords;
    if (isNaN(lat) || isNaN(lng)) return null;
    return { lat, lng };
  }

  private async geocodeNominatim(address: string): Promise<GeoPoint | null> {
    const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=mx&q=${encodeURIComponent(address)}`;
    const res = await fetch(url, {
      signal: AbortSignal.timeout(8000),
      headers: {
        // Nominatim's usage policy requires a valid identifying User-Agent.
        'User-Agent': 'ShortStayMX-PropertyMap/1.0 (contact: hola@shortstaymx.com)',
      },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as Array<{ lat: string; lon: string }>;
    if (!Array.isArray(data) || data.length === 0) return null;
    const lat = parseFloat(data[0].lat);
    const lng = parseFloat(data[0].lon);
    if (isNaN(lat) || isNaN(lng)) return null;
    return { lat, lng };
  }

  private async geocodePhoton(address: string): Promise<GeoPoint | null> {
    const url = `https://photon.komoot.io/api/?limit=1&q=${encodeURIComponent(address)}`;
    const res = await fetch(url, { signal: AbortSignal.timeout(8000) });
    if (!res.ok) return null;
    const data = (await res.json()) as { features?: Array<{ geometry?: { coordinates?: [number, number] } }> };
    const coords = data.features?.[0]?.geometry?.coordinates;
    if (!coords || coords.length !== 2) return null;
    const [lng, lat] = coords;
    if (isNaN(lat) || isNaN(lng)) return null;
    return { lat, lng };
  }
}
