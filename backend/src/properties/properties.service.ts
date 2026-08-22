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
  coverThumb: string | null;
  coverThumb2: string | null;
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
    'nuevo leon 104',
    'lope de vega 324',
    'moliere 101',
    'galileo 350',
    'reforma 222',
    'baja california 280',
    'avenida bonampak',
    'mza 27',
    'kukulcan boulevard',
    'marina puerto cancun',
    'real de acueducto',
    'dolores hidalgo',
    'francisco medina ascencio 2485',
    'paseo de la marina 121',
    'san luis potosi 44',
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

  /**
   * Stable ID based on (city folder, folder number) — NOT a running counter.
   * Adding, removing, or reordering properties in OTHER cities never shifts
   * this property's id, slug, or any admin-set overrides tied to it.
   * Stability only breaks if this property's OWN row is moved within its
   * city's spreadsheet (i.e. always append new rows at the end).
   */
  private generateStableId(cityFolder: string, folderNumber: number): number {
    const str = `${cityFolder}#${folderNumber}`;
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash);
  }

  private getOverrides(): Record<string, { available?: boolean; availableFrom?: string | null; occupiedSince?: string | null; pricePerMonth?: number }> {
    return {};
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
occupiedSince: o.occupiedSince !== undefined ? o.occupiedSince : p.occupiedSince,
pricePerMonth: (o.pricePerMonth !== undefined && o.pricePerMonth !== null) ? o.pricePerMonth : p.pricePerMonth,
      };
    });
  }

  /**
   * Frozen availability snapshot, captured from the true original data
   * (before Lope de Vega / Moliere were added). Occupied-property dates were
   * re-anchored to 2026-08-22 (preserving each property's original relative
   * timing -- same days-occupied-so-far, same days-until-available) so nothing
   * appears already expired. Keyed by cityFolder#folderNumber (stable, never
   * changes). Properties not found here (added after this snapshot) use live
   * computation.
   */
  private readonly FROZEN_AVAILABILITY: Record<string, {
    available: boolean;
    availableFrom: string | null;
    occupiedSince: string | null;
    minStay: number;
  }> = {
    'CDMX#2': { available: false, availableFrom: '2027-01-17', occupiedSince: '2026-06-13', minStay: 14 },
    'CDMX#3': { available: false, availableFrom: '2027-03-02', occupiedSince: '2026-05-23', minStay: 14 },
    'CDMX#4': { available: false, availableFrom: '2026-10-02', occupiedSince: '2026-05-02', minStay: 14 },
    'CDMX#5': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'CDMX#6': { available: false, availableFrom: '2026-12-29', occupiedSince: '2026-08-11', minStay: 14 },
    'CDMX#7': { available: false, availableFrom: '2027-02-11', occupiedSince: '2026-07-20', minStay: 14 },
    'CDMX#8': { available: false, availableFrom: '2026-09-14', occupiedSince: '2026-06-29', minStay: 14 },
    'CDMX#9': { available: false, availableFrom: '2026-10-28', occupiedSince: '2026-06-08', minStay: 14 },
    'CDMX#10': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'CDMX#11': { available: false, availableFrom: '2027-01-24', occupiedSince: '2026-04-27', minStay: 14 },
    'CDMX#12': { available: false, availableFrom: '2027-03-09', occupiedSince: '2026-04-06', minStay: 14 },
    'CDMX#13': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'CDMX#14': { available: false, availableFrom: '2026-11-22', occupiedSince: '2026-07-16', minStay: 14 },
    'CDMX#15': { available: false, availableFrom: '2027-01-05', occupiedSince: '2026-06-25', minStay: 10 },
    'CDMX#16': { available: false, availableFrom: '2027-02-18', occupiedSince: '2026-06-04', minStay: 10 },
    'CDMX#17': { available: false, availableFrom: '2026-09-20', occupiedSince: '2026-05-14', minStay: 10 },
    'CDMX#18': { available: false, availableFrom: '2026-11-03', occupiedSince: '2026-04-22', minStay: 10 },
    'CDMX#19': { available: false, availableFrom: '2026-12-17', occupiedSince: '2026-04-01', minStay: 10 },
    'CDMX#20': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'CDMX#21': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'CDMX#22': { available: false, availableFrom: '2026-10-15', occupiedSince: '2026-06-20', minStay: 10 },
    'CDMX#23': { available: false, availableFrom: '2026-11-28', occupiedSince: '2026-05-30', minStay: 10 },
    'CDMX#24': { available: false, availableFrom: '2027-01-12', occupiedSince: '2026-05-09', minStay: 10 },
    'CDMX#25': { available: false, availableFrom: '2027-02-25', occupiedSince: '2026-04-18', minStay: 10 },
    'CDMX#26': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'CDMX#27': { available: false, availableFrom: '2026-11-10', occupiedSince: '2026-07-28', minStay: 10 },
    'CDMX#28': { available: false, availableFrom: '2026-12-24', occupiedSince: '2026-07-06', minStay: 10 },
    'CDMX#29': { available: false, availableFrom: '2027-02-06', occupiedSince: '2026-06-15', minStay: 10 },
    'CDMX#30': { available: false, availableFrom: '2026-09-08', occupiedSince: '2026-05-25', minStay: 10 },
    'CDMX#31': { available: false, availableFrom: '2026-10-22', occupiedSince: '2026-05-04', minStay: 10 },
    'CDMX#32': { available: false, availableFrom: '2026-12-05', occupiedSince: '2026-04-13', minStay: 10 },
    'CDMX#33': { available: false, availableFrom: '2027-01-18', occupiedSince: '2026-08-13', minStay: 10 },
    'CDMX#34': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'CDMX#35': { available: false, availableFrom: '2026-10-03', occupiedSince: '2026-07-02', minStay: 10 },
    'Cancun Quintana Roo#2': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Cancun Quintana Roo#3': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Cancun Quintana Roo#4': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Cancun Quintana Roo#5': { available: false, availableFrom: '2026-09-14', occupiedSince: '2026-04-08', minStay: 10 },
    'Cancun Quintana Roo#6': { available: false, availableFrom: '2026-10-29', occupiedSince: '2026-08-08', minStay: 10 },
    'Cancun Quintana Roo#7': { available: false, availableFrom: '2026-12-12', occupiedSince: '2026-07-18', minStay: 10 },
    'Cancun Quintana Roo#8': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Cancun Quintana Roo#9': { available: false, availableFrom: '2027-03-10', occupiedSince: '2026-06-06', minStay: 10 },
    'Cancun Quintana Roo#10': { available: false, availableFrom: '2026-10-10', occupiedSince: '2026-05-16', minStay: 10 },
    'Cancun Quintana Roo#11': { available: false, availableFrom: '2026-11-23', occupiedSince: '2026-04-25', minStay: 10 },
    'Cancun Quintana Roo#12': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Cancun Quintana Roo#13': { available: false, availableFrom: '2027-02-19', occupiedSince: '2026-08-04', minStay: 10 },
    'Cancun Quintana Roo#14': { available: false, availableFrom: '2026-09-21', occupiedSince: '2026-07-14', minStay: 10 },
    'Chalapa Jalisco#2': { available: false, availableFrom: '2026-11-04', occupiedSince: '2026-06-23', minStay: 10 },
    'Chalapa Jalisco#3': { available: false, availableFrom: '2026-12-18', occupiedSince: '2026-06-01', minStay: 10 },
    'Chalapa Jalisco#4': { available: false, availableFrom: '2027-01-31', occupiedSince: '2026-05-11', minStay: 10 },
    'Chalapa Jalisco#5': { available: false, availableFrom: '2027-03-16', occupiedSince: '2026-04-20', minStay: 10 },
    'Chalapa Jalisco#6': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Chalapa Jalisco#7': { available: false, availableFrom: '2026-11-29', occupiedSince: '2026-07-30', minStay: 10 },
    'Chalapa Jalisco#8': { available: false, availableFrom: '2027-01-12', occupiedSince: '2026-07-09', minStay: 10 },
    'Chalapa Jalisco#9': { available: false, availableFrom: '2027-02-25', occupiedSince: '2026-06-18', minStay: 10 },
    'Guadalajara#2': { available: false, availableFrom: '2026-09-28', occupiedSince: '2026-05-28', minStay: 10 },
    'Guadalajara#3': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Guadalajara#4': { available: false, availableFrom: '2026-12-25', occupiedSince: '2026-04-16', minStay: 10 },
    'Guadalajara#5': { available: false, availableFrom: '2027-02-07', occupiedSince: '2026-08-15', minStay: 10 },
    'Guadalajara#6': { available: false, availableFrom: '2026-09-09', occupiedSince: '2026-07-25', minStay: 10 },
    'Guadalajara#7': { available: false, availableFrom: '2026-10-23', occupiedSince: '2026-07-04', minStay: 10 },
    'Guadalajara#8': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Guadalajara#9': { available: false, availableFrom: '2027-01-19', occupiedSince: '2026-05-23', minStay: 10 },
    'Guadalajara#10': { available: false, availableFrom: '2027-03-04', occupiedSince: '2026-05-02', minStay: 30 },
    'Guadalajara#11': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Guadalajara#12': { available: false, availableFrom: '2026-11-17', occupiedSince: '2026-08-11', minStay: 30 },
    'Guadalajara#13': { available: false, availableFrom: '2026-12-31', occupiedSince: '2026-07-21', minStay: 30 },
    'Guanajuato#2': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Guanajuato#3': { available: false, availableFrom: '2026-09-15', occupiedSince: '2026-06-09', minStay: 30 },
    'Guanajuato#4': { available: false, availableFrom: '2026-10-29', occupiedSince: '2026-05-18', minStay: 30 },
    'Guanajuato#5': { available: false, availableFrom: '2026-12-12', occupiedSince: '2026-04-27', minStay: 30 },
    'Guanajuato#6': { available: false, availableFrom: '2027-01-26', occupiedSince: '2026-04-06', minStay: 14 },
    'Guanajuato#7': { available: true, availableFrom: null, occupiedSince: null, minStay: 14 },
    'Guanajuato#8': { available: false, availableFrom: '2026-10-11', occupiedSince: '2026-07-16', minStay: 14 },
    'Guanajuato#9': { available: false, availableFrom: '2026-11-24', occupiedSince: '2026-06-25', minStay: 14 },
    'Guanajuato#10': { available: false, availableFrom: '2027-01-07', occupiedSince: '2026-06-04', minStay: 14 },
    'Guanajuato#11': { available: false, availableFrom: '2027-02-20', occupiedSince: '2026-05-14', minStay: 14 },
    'Guanajuato#12': { available: true, availableFrom: null, occupiedSince: null, minStay: 14 },
    'Guanajuato#13': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Guanajuato#14': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Merida Yucatan#2': { available: false, availableFrom: '2027-02-01', occupiedSince: '2026-07-11', minStay: 14 },
    'Merida Yucatan#3': { available: false, availableFrom: '2027-03-17', occupiedSince: '2026-06-20', minStay: 14 },
    'Merida Yucatan#4': { available: false, availableFrom: '2026-10-17', occupiedSince: '2026-05-30', minStay: 14 },
    'Merida Yucatan#5': { available: true, availableFrom: null, occupiedSince: null, minStay: 14 },
    'Merida Yucatan#6': { available: false, availableFrom: '2027-01-13', occupiedSince: '2026-04-18', minStay: 14 },
    'Merida Yucatan#7': { available: false, availableFrom: '2027-02-26', occupiedSince: '2026-03-28', minStay: 14 },
    'Merida Yucatan#8': { available: false, availableFrom: '2026-09-28', occupiedSince: '2026-07-28', minStay: 14 },
    'Merida Yucatan#9': { available: false, availableFrom: '2026-11-12', occupiedSince: '2026-07-07', minStay: 14 },
    'Merida Yucatan#10': { available: true, availableFrom: null, occupiedSince: null, minStay: 14 },
    'Merida Yucatan#11': { available: false, availableFrom: '2027-02-08', occupiedSince: '2026-05-26', minStay: 14 },
    'Merida Yucatan#12': { available: false, availableFrom: '2026-09-10', occupiedSince: '2026-05-04', minStay: 14 },
    'Merida Yucatan#13': { available: false, availableFrom: '2026-10-24', occupiedSince: '2026-04-13', minStay: 14 },
    'Merida Yucatan#14': { available: false, availableFrom: '2026-12-07', occupiedSince: '2026-08-13', minStay: 14 },
    'Merida Yucatan#15': { available: true, availableFrom: null, occupiedSince: null, minStay: 14 },
    'Merida Yucatan#16': { available: false, availableFrom: '2027-03-05', occupiedSince: '2026-07-02', minStay: 14 },
    'Merida Yucatan#17': { available: false, availableFrom: '2026-10-05', occupiedSince: '2026-06-11', minStay: 14 },
    'Monterrey#2': { available: false, availableFrom: '2026-11-18', occupiedSince: '2026-05-21', minStay: 10 },
    'Monterrey#3': { available: false, availableFrom: '2027-01-01', occupiedSince: '2026-04-30', minStay: 10 },
    'Monterrey#4': { available: false, availableFrom: '2027-02-14', occupiedSince: '2026-04-09', minStay: 10 },
    'Monterrey#5': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Monterrey#6': { available: false, availableFrom: '2026-10-30', occupiedSince: '2026-07-19', minStay: 10 },
    'Monterrey#7': { available: false, availableFrom: '2026-12-13', occupiedSince: '2026-06-27', minStay: 10 },
    'Monterrey#8': { available: false, availableFrom: '2027-01-26', occupiedSince: '2026-06-06', minStay: 10 },
    'Monterrey#9': { available: false, availableFrom: '2027-03-12', occupiedSince: '2026-05-16', minStay: 10 },
    'Monterrey#10': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Monterrey#11': { available: false, availableFrom: '2026-11-25', occupiedSince: '2026-04-04', minStay: 10 },
    'Monterrey#12': { available: false, availableFrom: '2027-01-08', occupiedSince: '2026-08-04', minStay: 10 },
    'Monterrey#13': { available: false, availableFrom: '2027-02-21', occupiedSince: '2026-07-14', minStay: 10 },
    'Monterrey#14': { available: false, availableFrom: '2026-09-23', occupiedSince: '2026-06-23', minStay: 10 },
    'Nuevo Vallarta#2': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Nuevo Vallarta#3': { available: false, availableFrom: '2026-12-20', occupiedSince: '2026-05-12', minStay: 10 },
    'Nuevo Vallarta#4': { available: false, availableFrom: '2027-02-02', occupiedSince: '2026-04-21', minStay: 10 },
    'Nuevo Vallarta#5': { available: false, availableFrom: '2027-03-18', occupiedSince: '2026-03-30', minStay: 10 },
    'Nuevo Vallarta#6': { available: false, availableFrom: '2026-10-18', occupiedSince: '2026-07-30', minStay: 10 },
    'Nuevo Vallarta#7': { available: false, availableFrom: '2026-12-01', occupiedSince: '2026-07-09', minStay: 10 },
    'Nuevo Vallarta#8': { available: false, availableFrom: '2027-01-14', occupiedSince: '2026-06-18', minStay: 10 },
    'Nuevo Vallarta#9': { available: false, availableFrom: '2027-02-27', occupiedSince: '2026-05-28', minStay: 10 },
    'Nuevo Vallarta#10': { available: false, availableFrom: '2026-09-29', occupiedSince: '2026-05-07', minStay: 10 },
    'Nuevo Vallarta#11': { available: false, availableFrom: '2026-11-12', occupiedSince: '2026-04-16', minStay: 10 },
    'Nuevo Vallarta#12': { available: false, availableFrom: '2026-12-26', occupiedSince: '2026-03-26', minStay: 10 },
    'Nuevo Vallarta#13': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Nuevo Vallarta#14': { available: false, availableFrom: '2026-09-11', occupiedSince: '2026-07-05', minStay: 10 },
    'Nuevo Vallarta#15': { available: false, availableFrom: '2026-10-25', occupiedSince: '2026-06-14', minStay: 10 },
    'Nuevo Vallarta#16': { available: false, availableFrom: '2026-12-08', occupiedSince: '2026-05-23', minStay: 10 },
    'Nuevo Vallarta#17': { available: false, availableFrom: '2027-01-21', occupiedSince: '2026-05-02', minStay: 10 },
    'Nuevo Vallarta#18': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Nuevo Vallarta#19': { available: false, availableFrom: '2026-10-06', occupiedSince: '2026-08-11', minStay: 10 },
    'Nuevo Vallarta#20': { available: false, availableFrom: '2026-11-19', occupiedSince: '2026-07-21', minStay: 10 },
    'Nuevo Vallarta#21': { available: false, availableFrom: '2027-01-02', occupiedSince: '2026-06-30', minStay: 10 },
    'Nuevo Vallarta#22': { available: false, availableFrom: '2027-02-15', occupiedSince: '2026-06-09', minStay: 10 },
    'Playa del Carmen#2': { available: false, availableFrom: '2026-09-17', occupiedSince: '2026-05-19', minStay: 10 },
    'Playa del Carmen#3': { available: false, availableFrom: '2026-10-31', occupiedSince: '2026-04-28', minStay: 10 },
    'Playa del Carmen#4': { available: false, availableFrom: '2026-12-14', occupiedSince: '2026-04-07', minStay: 10 },
    'Playa del Carmen#5': { available: false, availableFrom: '2027-01-27', occupiedSince: '2026-08-06', minStay: 10 },
    'Playa del Carmen#6': { available: false, availableFrom: '2027-03-12', occupiedSince: '2026-07-16', minStay: 10 },
    'Playa del Carmen#7': { available: false, availableFrom: '2026-10-12', occupiedSince: '2026-06-25', minStay: 10 },
    'Playa del Carmen#8': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Playa del Carmen#9': { available: false, availableFrom: '2027-01-09', occupiedSince: '2026-05-14', minStay: 10 },
    'Playa del Carmen#10': { available: false, availableFrom: '2027-02-22', occupiedSince: '2026-04-23', minStay: 10 },
    'Playa del Carmen#11': { available: false, availableFrom: '2026-09-24', occupiedSince: '2026-04-02', minStay: 10 },
    'Puerto Vallarta Jalisco#2': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Puerto Vallarta Jalisco#3': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Puerto Vallarta Jalisco#4': { available: false, availableFrom: '2027-02-03', occupiedSince: '2026-06-21', minStay: 10 },
    'Puerto Vallarta Jalisco#5': { available: false, availableFrom: '2027-03-19', occupiedSince: '2026-05-31', minStay: 10 },
    'Puerto Vallarta Jalisco#6': { available: false, availableFrom: '2026-10-19', occupiedSince: '2026-05-09', minStay: 10 },
    'Puerto Vallarta Jalisco#7': { available: false, availableFrom: '2026-12-02', occupiedSince: '2026-04-18', minStay: 10 },
    'Puerto Vallarta Jalisco#8': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Puerto Vallarta Jalisco#9': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Puerto Vallarta Jalisco#10': { available: false, availableFrom: '2026-09-30', occupiedSince: '2026-07-07', minStay: 30 },
    'Puerto Vallarta Jalisco#11': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Puerto Vallarta Jalisco#12': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Puerto Vallarta Jalisco#13': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Puerto Vallarta Jalisco#14': { available: true, availableFrom: null, occupiedSince: null, minStay: 30 },
    'Puerto Vallarta Jalisco#15': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Puerto Vallarta Jalisco#16': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Puerto Vallarta Jalisco#17': { available: false, availableFrom: '2027-01-22', occupiedSince: '2026-07-02', minStay: 14 },
    'Puerto Vallarta Jalisco#18': { available: false, availableFrom: '2027-03-07', occupiedSince: '2026-06-11', minStay: 14 },
    'Puerto Vallarta Jalisco#19': { available: true, availableFrom: null, occupiedSince: null, minStay: 14 },
    'Puerto Vallarta Jalisco#20': { available: false, availableFrom: '2026-11-20', occupiedSince: '2026-04-30', minStay: 14 },
    'Puerto Vallarta Jalisco#21': { available: false, availableFrom: '2027-01-03', occupiedSince: '2026-04-09', minStay: 14 },
    'Puerto Vallarta Jalisco#22': { available: false, availableFrom: '2027-02-16', occupiedSince: '2026-08-09', minStay: 14 },
    'Puerto Vallarta Jalisco#23': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Santiago Nuevo Leon#2': { available: true, availableFrom: null, occupiedSince: null, minStay: 14 },
    'Santiago Nuevo Leon#3': { available: false, availableFrom: '2026-12-15', occupiedSince: '2026-06-07', minStay: 14 },
    'Tulum Quintana Roo#2': { available: false, availableFrom: '2027-01-28', occupiedSince: '2026-05-17', minStay: 14 },
    'Tulum Quintana Roo#3': { available: false, availableFrom: '2027-03-13', occupiedSince: '2026-04-25', minStay: 14 },
    'Tulum Quintana Roo#4': { available: false, availableFrom: '2026-10-13', occupiedSince: '2026-04-04', minStay: 14 },
    'Tulum Quintana Roo#5': { available: false, availableFrom: '2026-11-26', occupiedSince: '2026-08-04', minStay: 14 },
    'Tulum Quintana Roo#6': { available: true, availableFrom: null, occupiedSince: null, minStay: 14 },
    'Tulum Quintana Roo#7': { available: false, availableFrom: '2027-02-23', occupiedSince: '2026-06-23', minStay: 14 },
    'Tulum Quintana Roo#8': { available: false, availableFrom: '2026-09-25', occupiedSince: '2026-06-02', minStay: 14 },
    'Tulum Quintana Roo#9': { available: false, availableFrom: '2026-11-08', occupiedSince: '2026-05-12', minStay: 14 },
    'Tulum Quintana Roo#10': { available: false, availableFrom: '2026-12-22', occupiedSince: '2026-04-21', minStay: 14 },
    'Tulum Quintana Roo#11': { available: true, availableFrom: null, occupiedSince: null, minStay: 14 },
    'Tulum Quintana Roo#12': { available: false, availableFrom: '2026-09-06', occupiedSince: '2026-07-31', minStay: 14 },
    'Tulum Quintana Roo#13': { available: false, availableFrom: '2026-10-20', occupiedSince: '2026-07-10', minStay: 14 },
    'Tulum Quintana Roo#14': { available: false, availableFrom: '2026-12-03', occupiedSince: '2026-06-18', minStay: 14 },
    'Tulum Quintana Roo#15': { available: false, availableFrom: '2027-01-16', occupiedSince: '2026-05-28', minStay: 14 },
    'Tulum Quintana Roo#16': { available: true, availableFrom: null, occupiedSince: null, minStay: 14 },
    'Tulum Quintana Roo#17': { available: false, availableFrom: '2026-10-01', occupiedSince: '2026-04-16', minStay: 10 },
    'Tulum Quintana Roo#18': { available: false, availableFrom: '2026-11-14', occupiedSince: '2026-03-26', minStay: 10 },
    // New units added after the original snapshot, always-available, disambiguated by
    // folder number since they share an address with an existing (different) unit.
    'CDMX#39': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
  };

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
    for (const cityFolder of cities) {
      const cityPath = path.join(this.imagenesRoot, cityFolder);
      const xlsxFile = this.findXlsx(cityPath);
      if (!xlsxFile) continue;

      const rows = this.readXlsx(xlsxFile);

      rows.forEach((row, dataIndex) => {
        const folderNumber = dataIndex + 2;
        const images = this.getImages(cityFolder, folderNumber);
        const id = this.generateStableId(cityFolder, folderNumber);
        const address = String(row[1] ?? '').trim();
        const city = this.normalizeCity(String(row[0] ?? '').trim());
        const frozenKey = `${cityFolder}#${folderNumber}`;
        const avail = this.FROZEN_AVAILABILITY[frozenKey] ?? this.getAvailability(id, address);

        properties.push({
          id,
          slug: this.generateSlug(city, address, id),
          city,
          address,
          pricePerMonth: this.parseNum(row[2]),
          bedrooms: this.parseNum(row[3]),
          bathrooms: this.parseNum(row[4]),
          parkingSpots: this.parseNum(row[5]),
          maxGuests: this.parseNum(row[6]),
          amenities: this.parseAmenities(row[7]),
          sqMeters: this.parseNum(row[8]),
          balcony: String(row[9] ?? '').toLowerCase() === 'si',
          petFriendly: String(row[10] ?? '').toLowerCase() === 'si',
          petFriendlyNegotiable: String(row[10] ?? '').toLowerCase() === 'negociable',
          coordinates: row[11] ? String(row[11]) : null,
          images,
          coverThumb: this.getCoverThumb(cityFolder, folderNumber),
          coverThumb2: this.getCoverThumb2(cityFolder, folderNumber),
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
      .filter((f) => imageExts.includes(path.extname(f).toLowerCase()) && !f.toLowerCase().includes('.thumb.') && !f.toLowerCase().includes('.thumb2.'))
      .sort()
      .map((f) => `/imagenes/${cityFolder.replace(/ /g, '%20')}/${folderNumber}/${encodeURIComponent(f)}`);
  }

  private getCoverThumb(cityFolder: string, folderNumber: number): string | null {
    const folderPath = path.join(this.imagenesRoot, cityFolder, String(folderNumber));
    if (!fs.existsSync(folderPath)) return null;
    const thumb = fs.readdirSync(folderPath).find((f) => f.toLowerCase().includes('.thumb.webp'));
    if (!thumb) return null;
    return `/imagenes/${cityFolder.replace(/ /g, '%20')}/${folderNumber}/${encodeURIComponent(thumb)}`;
  }

  /** Same as getCoverThumb, but for the second photo -- used by temporaryrentalsmexico.com's card grid. */
  private getCoverThumb2(cityFolder: string, folderNumber: number): string | null {
    const folderPath = path.join(this.imagenesRoot, cityFolder, String(folderNumber));
    if (!fs.existsSync(folderPath)) return null;
    const thumb = fs.readdirSync(folderPath).find((f) => f.toLowerCase().includes('.thumb2.webp'));
    if (!thumb) return null;
    return `/imagenes/${cityFolder.replace(/ /g, '%20')}/${folderNumber}/${encodeURIComponent(thumb)}`;
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

  private parseNum(raw: unknown): number {
    if (typeof raw === 'number') return raw;
    if (raw === null || raw === undefined) return 0;
    const match = String(raw).match(/[\d.]+/);
    return match ? parseFloat(match[0]) : 0;
  }

  private parseAmenities(raw: unknown): string[] {
    if (!raw) return [];
    const str = String(raw).trim();
    if (!str) return [];
    const NON_ANSWERS = ['no', 'n/a', 'na', 'ninguna', 'ninguno', 'none', 'no aplica'];
    return str
      .split(',')
      .map((a) => a.trim())
      .filter((a) => a.length > 0 && !NON_ANSWERS.includes(a.toLowerCase()));
  }
}
