import { Injectable } from '@nestjs/common';
import * as xlsx from 'xlsx';
import * as fs from 'fs';
import * as path from 'path';

export interface PropertyPreview {
  id: number;
  slug: string;
  city: string;
  address: string;
  pricePerMonth: number;
  bedrooms: number;
  bathrooms: number;
  parkingSpots: number;
  maxGuests: number;
  amenities: string[];
  sqMeters: number;
  balcony: boolean;
  petFriendly: boolean;
  petFriendlyNegotiable: boolean;
  coordinates: string | null;
  images: string[];
  wifiSpeed: number;
  available: boolean;
  availableFrom: string | null;
  occupiedSince: string | null;
  minStay: number;
}

@Injectable()
export class PropertiesService {
  private readonly imagenesRoot = path.join(__dirname, '..', '..', 'imagenes');
  private readonly WIFI_SPEEDS = [150, 250, 350, 500];

  private readonly ALWAYS_AVAILABLE = [
    'choapan 45',
    'culiacan 40',
    'amsterdam 289',
    'amsterdam 119',
    'celaya 4',
    'avenida bonampak',
    'mza 27',
    'kukulcan boulevard',
    'marina puerto cancun',
    'real de acueducto',
    'dolores hidalgo',
    'francisco medina ascencio 2485',
    'paseo de la marina 121',
  ];

  private readonly NEVER_AVAILABLE: string[] = [];

  private seededRandom(seed: number): () => number {
    let s = seed;
    return () => {
      s = (s * 1664525 + 1013904223) & 0xffffffff;
      return (s >>> 0) / 0xffffffff;
    };
  }

  private generateSlug(city: string, address: string, id: number): string {
    const normalize = (s: string) =>
      s.toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9\s]/g, '')
        .trim()
        .replace(/\s+/g, '-');
    const citySlug = normalize(city);
    const parts = address.split(',');
    const streetSlug = normalize(parts[0] ?? address).slice(0, 40);
    return `${citySlug}-${streetSlug}-${id}`;
  }

  private getOverrides(): Record<string, { available?: boolean; availableFrom?: string | null; pricePerMonth?: number }> {
    try {
      const overridesPath = path.join(__dirname, '..', '..', 'overrides.json');
      if (!fs.existsSync(overridesPath)) return {};
      return JSON.parse(fs.readFileSync(overridesPath, 'utf-8'));
    } catch {
      return {};
    }
  }

  private applyOverrides(properties: PropertyPreview[]): PropertyPreview[] {
    const overrides = this.getOverrides();
    return properties.map(p => {
      const o = overrides[String(p.id)];
      if (!o) return p;
      return {
        ...p,
        available: o.available !== undefined ? o.available : p.available,
        availableFrom: o.availableFrom !== undefined ? o.availableFrom : p.availableFrom,
               pricePerMonth: o.pricePerMonth !== undefined ? o.pricePerMonth : p.pricePerMonth,
      };
    });
  }

  private getAvailability(id: number, address: string): {
    available: boolean;
    availableFrom: string | null;
    occupiedSince: string | null;
    minStay: number;
  } {
    const norm = (s: string) =>
      s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const normalizedAddr = norm(address);

    if (this.ALWAYS_AVAILABLE.some((p) => normalizedAddr.includes(norm(p)))) {
      return { available: true, availableFrom: null, occupiedSince: null, minStay: 10 };
    }

    if (this.NEVER_AVAILABLE.some((p) => normalizedAddr.includes(norm(p)))) {
      const rng = this.seededRandom(id * 7 + 3);
      const days = 15 + Math.floor(rng() * 210);
      const d = new Date(2026, 3, 2);
      d.setDate(d.getDate() + days);
      return {
        available: false,
        availableFrom: d.toISOString().split('T')[0],
        occupiedSince: null,
        minStay: 10,
      };
    }

    const rng = this.seededRandom(id * 31 + 17);
    const r0 = rng();
    const minStay = r0 < 0.10 ? 30 : r0 < 0.40 ? 14 : 10;
    const available = rng() < 0.15;

    if (available) {
      return { available: true, availableFrom: null, occupiedSince: null, minStay };
    }

    const r2 = rng();
    const days = 15 + Math.floor(r2 * 195);
    const until = new Date(2026, 3, 2);
    until.setDate(until.getDate() + days);

    const r3 = rng();
    const pastDays = 7 + Math.floor(r3 * 143);
    const since = new Date(2026, 3, 2);
    since.setDate(since.getDate() - pastDays);

    return {
      available: false,
      availableFrom: until.toISOString().split('T')[0],
      occupiedSince: since.toISOString().split('T')[0],
      minStay,
    };
  }

  getPreview(): PropertyPreview[] {
    const IGNORE = ['Agentes'];
    const cities = fs
      .readdirSync(this.imagenesRoot)
      .filter((f) =>
        fs.statSync(path.join(this.imagenesRoot, f)).isDirectory() &&
        !IGNORE.includes(f),
      );

    const properties: PropertyPreview[] = [];
    let globalId = 1;

    for (const cityFolder of cities) {
      const cityPath = path.join(this.imagenesRoot, cityFolder);
      const xlsxFile = this.findXlsx(cityPath);
      if (!xlsxFile) continue;

      const rows = this.readXlsx(xlsxFile);

      rows.forEach((row, dataIndex) => {
        const folderNumber = dataIndex + 2;
        const images = this.getImages(cityFolder, folderNumber);
        const id = globalId++;
        const address = String(row[1] ?? '').trim();
        const city = this.normalizeCity(String(row[0] ?? '').trim());
        const avail = this.getAvailability(id, address);

        properties.push({
          id,
          slug: this.generateSlug(city, address, id),
          city,
          address,
          pricePerMonth: Number(row[2]) || 0,
          bedrooms: Number(row[3]) || 0,
          bathrooms: Number(row[4]) || 0,
          parkingSpots: Number(row[5]) || 0,
          maxGuests: Number(row[6]) || 0,
          amenities: this.parseAmenities(row[7]),
          sqMeters: Number(row[8]) || 0,
          balcony: String(row[9] ?? '').toLowerCase() === 'si',
          petFriendly: String(row[10] ?? '').toLowerCase() === 'si',
          petFriendlyNegotiable: String(row[10] ?? '').toLowerCase() === 'negociable',
          coordinates: row[11] ? String(row[11]) : null,
          images,
          wifiSpeed: this.WIFI_SPEEDS[id % this.WIFI_SPEEDS.length],
          available: avail.available || (avail.availableFrom !== null && new Date(avail.availableFrom) <= new Date()),
          availableFrom: (avail.availableFrom !== null && new Date(avail.availableFrom) <= new Date()) ? null : avail.availableFrom,
          occupiedSince: (avail.availableFrom !== null && new Date(avail.availableFrom) <= new Date()) ? null : avail.occupiedSince,
          minStay: avail.minStay,
        });
      });
    }

    return this.applyOverrides(properties);
  }

  randomizeAvailability(): { randomized: number } {
    const props = this.getPreview();
    return { randomized: props.length };
  }

  getOne(id: number): PropertyPreview | null {
    return this.getPreview().find((p) => p.id === id) || null;
  }

  getBySlug(slug: string): PropertyPreview | null {
    return this.getPreview().find((p) => p.slug === slug) || null;
  }

  remove(id: number): { deleted: boolean } {
    return { deleted: true };
  }

  private findXlsx(cityPath: string): string | null {
    const folder1 = path.join(cityPath, '1');
    if (!fs.existsSync(folder1)) return null;
    const files = fs.readdirSync(folder1).filter((f) => f.endsWith('.xlsx'));
    return files.length ? path.join(folder1, files[0]) : null;
  }

  private readXlsx(filePath: string): unknown[][] {
    const wb = xlsx.readFile(filePath);
    const ws = wb.Sheets[wb.SheetNames[0]];
    const all = xlsx.utils.sheet_to_json<unknown[]>(ws, { header: 1 });
    return all.slice(1).filter((r) => r && (r as unknown[]).some((c) => c !== null && c !== undefined && c !== ''));
  }

  private getImages(cityFolder: string, folderNumber: number): string[] {
    const folderPath = path.join(this.imagenesRoot, cityFolder, String(folderNumber));
    if (!fs.existsSync(folderPath)) return [];
    const imageExts = ['.webp', '.jpg', '.jpeg', '.png', '.gif'];
    return fs
      .readdirSync(folderPath)
      .filter((f) => imageExts.includes(path.extname(f).toLowerCase()))
      .sort()
      .map((f) => `/imagenes/${cityFolder.replace(/ /g, '%20')}/${folderNumber}/${encodeURIComponent(f)}`);
  }

  private normalizeCity(raw: string): string {
    const lower = ['de', 'del', 'la', 'las', 'los', 'el', 'y', 'e'];
    return raw
      .split(/\s+/)
      .map((w, i) =>
        i === 0 || !lower.includes(w.toLowerCase())
          ? w.charAt(0).toUpperCase() + w.slice(1)
          : w.toLowerCase(),
      )
      .join(' ');
  }

  private parseAmenities(raw: unknown): string[] {
    if (!raw) return [];
    const str = String(raw).trim();
    if (!str) return [];
    return str.split(',').map((a) => a.trim()).filter((a) => a.length > 0);
  }
}

