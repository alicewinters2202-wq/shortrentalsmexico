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
    for (const address of unique) {
      try {
        const point = await this.geocodeOne(address);
        this.cache.set(address, point);
      } catch (e) {
        this.logger.warn(`Geocoding failed for "${address}": ${e}`);
        this.cache.set(address, null);
      }
      // Nominatim usage policy: absolute max 1 request/second.
      await new Promise((r) => setTimeout(r, 1100));
    }
    this.warmed = true;
    this.warming = false;
    const resolved = Array.from(this.cache.values()).filter(Boolean).length;
    this.logger.log(`Geocoding warm-up complete: ${resolved}/${this.cache.size} resolved`);
  }

  private async geocodeOne(address: string): Promise<GeoPoint | null> {
    const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=mx&q=${encodeURIComponent(address)}`;
    const res = await fetch(url, {
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
}
