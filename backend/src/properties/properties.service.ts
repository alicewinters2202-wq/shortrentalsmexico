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
}

interface AvailabilityEntry {
  available: boolean;
  availableFrom: string | null;
}

@Injectable()
export class PropertiesService {
  private readonly imagenesRoot = path.join(
    __dirname,
    '..',
    '..',
    'imagenes',
  );

  private readonly availabilityPath = path.join(
    __dirname,
    '..',
    '..',
    'data',
    'availability.json',
  );

  private readonly WIFI_SPEEDS = [150, 250, 350, 500];

  // Estas propiedades siempre se muestran disponibles sin importar el randomizador
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
  ];

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
        // folder N → data row N-1, so data row at index i → folder i+2
        const folderNumber = dataIndex + 2;
        const images = this.getImages(cityFolder, folderNumber);

        properties.push({
          id: globalId++,
          city: String(row[0] ?? '').trim(),
          address: String(row[1] ?? '').trim(),
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
          wifiSpeed: this.WIFI_SPEEDS[globalId % this.WIFI_SPEEDS.length],
          available: true,
          availableFrom: null,
        });
      });
    }

    // Merge availability state
    const availability = this.loadAvailability();

    // If no availability file yet, initialize with ~67% available
    if (Object.keys(availability).length === 0) {
      const addrMap: Record<number, string> = {};
      properties.forEach((p) => { addrMap[p.id] = p.address; });
      const generated = this.generateAvailability(properties.map((p) => p.id), addrMap);
      this.saveAvailability(generated);
      properties.forEach((p) => {
        const entry = generated[String(p.id)];
        if (entry) {
          p.available = entry.available;
          p.availableFrom = entry.availableFrom;
        }
      });
    } else {
      properties.forEach((p) => {
        if (this.isPinned(p.address)) return; // siempre disponible
        const entry = availability[String(p.id)];
        if (entry) {
          p.available = entry.available;
          p.availableFrom = entry.availableFrom;
        }
      });
    }

    return properties;
  }

  randomizeAvailability(): { randomized: number } {
    const { ids, addresses } = this.getPreviewIds();
    const generated = this.generateAvailability(ids, addresses);
    this.saveAvailability(generated);
    return { randomized: ids.length };
  }

  private getPreviewIds(): { ids: number[]; addresses: Record<number, string> } {
    const IGNORE = ['Agentes'];
    const cities = fs
      .readdirSync(this.imagenesRoot)
      .filter((f) =>
        fs.statSync(path.join(this.imagenesRoot, f)).isDirectory() &&
        !IGNORE.includes(f),
      );

    const ids: number[] = [];
    const addresses: Record<number, string> = {};
    let globalId = 1;

    for (const cityFolder of cities) {
      const cityPath = path.join(this.imagenesRoot, cityFolder);
      const xlsxFile = this.findXlsx(cityPath);
      if (!xlsxFile) continue;

      const rows = this.readXlsx(xlsxFile);
      rows.forEach((row) => {
        ids.push(globalId);
        addresses[globalId] = String(row[1] ?? '').trim();
        globalId++;
      });
    }

    return { ids, addresses };
  }

  private generateAvailability(ids: number[], addresses?: Record<number, string>): Record<string, AvailabilityEntry> {
    const result: Record<string, AvailabilityEntry> = {};
    ids.forEach((id) => {
      // Si la dirección está en la lista de siempre disponibles, no tocarla
      if (addresses && this.isPinned(addresses[id] ?? '')) {
        result[String(id)] = { available: true, availableFrom: null };
        return;
      }
      const available = Math.random() < 0.67;
      if (available) {
        result[String(id)] = { available: true, availableFrom: null };
      } else {
        const days = 7 + Math.floor(Math.random() * 84);
        const d = new Date();
        d.setDate(d.getDate() + days);
        result[String(id)] = {
          available: false,
          availableFrom: d.toISOString().split('T')[0],
        };
      }
    });
    return result;
  }

  private isPinned(address: string): boolean {
    const normalize = (s: string) =>
      s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const normalized = normalize(address);
    return this.ALWAYS_AVAILABLE.some((pin) => normalized.includes(normalize(pin)));
  }

  private loadAvailability(): Record<string, AvailabilityEntry> {
    try {
      if (!fs.existsSync(this.availabilityPath)) return {};
      const raw = fs.readFileSync(this.availabilityPath, 'utf-8');
      return JSON.parse(raw) as Record<string, AvailabilityEntry>;
    } catch {
      return {};
    }
  }

  private saveAvailability(data: Record<string, AvailabilityEntry>): void {
    try {
      const dir = path.dirname(this.availabilityPath);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(this.availabilityPath, JSON.stringify(data, null, 2));
    } catch {
      // non-fatal
    }
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
    // row 0 = headers, rows 1+ = data
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

  private parseAmenities(raw: unknown): string[] {
    if (!raw) return [];
    return String(raw)
      .split(',')
      .map((a) => a.trim())
      .filter((a) => a && a.toLowerCase() !== 'no');
  }
}
