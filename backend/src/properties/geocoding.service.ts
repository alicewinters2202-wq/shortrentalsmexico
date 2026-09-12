import { Injectable, Logger } from '@nestjs/common';

export interface GeoPoint {
  lat: number;
  lng: number;
}

/**
 * Resolves property addresses to map coordinates.
 *
 * Uses OpenStreetMap's free Nominatim geocoder (no API key/account needed).
 * Results are cached in memory indefinitely — addresses don't move — and
 * requests are throttled to respect Nominatim's usage policy (max ~1/sec).
 * Warm-up runs once in the background after the server boots; until it
 * finishes, getMapPoints() just returns whatever has been resolved so far.
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
    let nominatimFailures = 0;
    let photonFailures = 0;
    for (const address of unique) {
      let point = await this.tryProvider(() => this.geocodeNominatim(address), 'Nominatim', address);
      if (!point) {
        nominatimFailures++;
        point = await this.tryProvider(() => this.geocodePhoton(address), 'Photon', address);
        if (!point) photonFailures++;
      }
      this.cache.set(address, point);
      // Respect Nominatim's usage policy: absolute max 1 request/second.
      await new Promise((r) => setTimeout(r, 1100));
    }
    this.warmed = true;
    this.warming = false;
    const resolved = Array.from(this.cache.values()).filter(Boolean).length;
    this.logger.log(
      `Geocoding warm-up complete: ${resolved}/${this.cache.size} resolved ` +
        `(Nominatim failures: ${nominatimFailures}, Photon failures: ${photonFailures})`,
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
    // Fallback provider: different infrastructure than Nominatim (also free,
    // OSM-based, no API key), in case Nominatim's servers are unreachable
    // from this host.
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
