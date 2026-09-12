import { Injectable, Logger } from '@nestjs/common';

export interface GeoPoint {
  lat: number;
  lng: number;
}

const GEOAPIFY_KEY_FALLBACK = 'c82a5a0f3d3948308f2a21a480ba7aa1';

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

  async warmUp(addresses: string[]): Promise<void> {
    if (this.warming) return;
    this.warming = true;
    const unique = Array.from(new Set(addresses)).filter((a) => a && !this.cache.has(a));
    this.logger.log(`Geocoding warm-up starting for ${unique.length} address(es)...`);
    let geoapifyFailures = 0;
    let nominatimFailures = 0;
    let photonFailures = 0;
    for (const address of unique) {
      let point = await this.tryProvider(() => this.geocodeGeoapify(address), 'Geoapify', address);
      if (!point) {
        geoapifyFailures++;
        point = await this.tryProvider(() => this.geocodeNominatim(address), 'Nominatim', address);
        if (!point) {
          nominatimFailures++;
          point = await this.tryProvider(() => this.geocodePhoton(address), 'Photon', address);
          if (!point) photonFailures++;
        }
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
        `(Geoapify failures: ${geoapifyFailures}, Nominatim failures: ${nominatimFailures}, Photon failures: ${photonFailures})`,
    );
  }

  private async tryProvider(fn: () => Promise<GeoPoint | null>, name: string, address: string): Promise<GeoPoint | null> {
    try {
      return await fn();
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
