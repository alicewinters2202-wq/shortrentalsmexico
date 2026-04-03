import { Injectable } from '@nestjs/common';
import * as xlsx from 'xlsx';
import * as fs from 'fs';
import * as path from 'path';

export interface PropertyPreview {
  id: number;
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

  // Siempre disponibles
  private readonly ALWAYS_AVAILABLE = [
    'homero 1507',
    'choapan 45',
    'culiacan 40',
    'amsterdam 289',
    'celaya 4',
    'amsterdam 119',
    'donato guerra 22',
    'puerta de hierro 2065',
    'washington 1414',
    'notredame 126',
    'notre dame 126',
    'paseo de la marina 121',
    'francisco medina ascencio 2485',
    'francisco medina ascencio 2495',
  ];

  // Siempre ocupadas
  private readonly NEVER_AVAILABLE: string[] = [];

  // Seed determinista basado en id � siempre produce el mismo n�mero para el mismo id
  private seededRandom(seed: number): () => number {
    let s = seed;
    return () => {
      s = (s * 1664525 + 1013904223) & 0xffffffff;
      return (s >>> 0) / 0xffffffff;
    };
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

    // Pinned: siempre disponible
    if (this.ALWAYS_AVAILABLE.some((p) => normalizedAddr.includes(norm(p)))) {
      return { available: true, availableFrom: null, occupiedSince: null, minStay: 10 };
    }

    // Never available: siempre ocupada
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

    // minStay determinista
    const r0 = rng();
    const minStay = r0 < 0.10 ? 30 : r0 < 0.40 ? 14 : 10;

    // disponibilidad: 15% disponible, 85% ocupada
    const available = rng() < 0.15;

    if (available) {
      return { available: true, availableFrom: null, occupiedSince: null, minStay };
    }

    // Fecha disponible: entre 15 días y 7 meses (210 días) — rango amplio
    const r2 = rng();
    const days = 15 + Math.floor(r2 * 195);
    const until = new Date(2026, 3, 2);
    until.setDate(until.getDate() + days);

    // Ocupada desde: entre 1 semana y 5 meses atrás
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
        const avail = this.getAvailability(id, address);

        properties.push({
          id,
          city: this.normalizeCity(String(row[0] ?? '').trim()),
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
          ...avail,
        });
      });
    }

    return properties;
  }

  // Mantenemos el endpoint pero ya no hace nada da�ino
  randomizeAvailability(): { randomized: number } {
    const props = this.getPreview();
    return { randomized: props.length };
  }

  getOne(id: number): PropertyPreview | null {
    return this.getPreview().find((p) => p.id === id) || null;
  }

  remove(id: number): { deleted: boolean } {
    // Sin archivo, no hay nada que borrar del JSON
    // Retornamos true para no romper el contrato del endpoint
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
