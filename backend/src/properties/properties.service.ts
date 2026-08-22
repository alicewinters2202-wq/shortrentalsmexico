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
   * Frozen availability snapshot, captured right before switching to stable IDs.
   * Keyed by cityFolder#folderNumber (stable identifiers) so every EXISTING property
   * keeps exactly the availability state it had before, permanently -- it will never
   * re-randomize again, no matter what gets added elsewhere. Properties not found here
   * (i.e. added after this snapshot) fall through to live computation as normal.
   */
  private readonly FROZEN_AVAILABILITY: Record<string, {
    available: boolean;
    availableFrom: string | null;
    occupiedSince: string | null;
    minStay: number;
  }> = {
    'CDMX#2': { available: false, availableFrom: '2026-08-28', occupiedSince: '2026-01-22', minStay: 14 },
    'CDMX#3': { available: false, availableFrom: '2026-10-11', occupiedSince: '2026-01-01', minStay: 14 },
    'CDMX#4': { available: false, availableFrom: '2026-05-13', occupiedSince: '2025-12-11', minStay: 14 },
    'CDMX#5': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'CDMX#6': { available: false, availableFrom: '2026-08-09', occupiedSince: '2026-03-22', minStay: 14 },
    'CDMX#7': { available: false, availableFrom: '2026-09-22', occupiedSince: '2026-02-28', minStay: 14 },
    'CDMX#8': { available: false, availableFrom: '2026-04-25', occupiedSince: '2026-02-07', minStay: 14 },
    'CDMX#9': { available: false, availableFrom: '2026-06-08', occupiedSince: '2026-01-17', minStay: 14 },
    'CDMX#10': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'CDMX#11': { available: false, availableFrom: '2026-09-04', occupiedSince: '2025-12-06', minStay: 14 },
    'CDMX#12': { available: false, availableFrom: '2026-10-18', occupiedSince: '2025-11-15', minStay: 14 },
    'CDMX#13': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'CDMX#14': { available: false, availableFrom: '2026-07-03', occupiedSince: '2026-02-24', minStay: 14 },
    'CDMX#15': { available: false, availableFrom: '2026-08-16', occupiedSince: '2026-02-03', minStay: 10 },
    'CDMX#16': { available: false, availableFrom: '2026-09-29', occupiedSince: '2026-01-13', minStay: 10 },
    'CDMX#17': { available: false, availableFrom: '2026-05-01', occupiedSince: '2025-12-23', minStay: 10 },
    'CDMX#18': { available: false, availableFrom: '2026-06-14', occupiedSince: '2025-12-01', minStay: 10 },
    'CDMX#19': { available: false, availableFrom: '2026-07-28', occupiedSince: '2025-11-10', minStay: 10 },
    'CDMX#20': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'CDMX#21': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'CDMX#22': { available: false, availableFrom: '2026-05-26', occupiedSince: '2026-01-29', minStay: 10 },
    'CDMX#23': { available: false, availableFrom: '2026-07-09', occupiedSince: '2026-01-08', minStay: 10 },
    'CDMX#24': { available: false, availableFrom: '2026-08-23', occupiedSince: '2025-12-18', minStay: 10 },
    'CDMX#25': { available: false, availableFrom: '2026-10-06', occupiedSince: '2025-11-27', minStay: 10 },
    'CDMX#26': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'CDMX#27': { available: false, availableFrom: '2026-06-21', occupiedSince: '2026-03-08', minStay: 10 },
    'CDMX#28': { available: false, availableFrom: '2026-08-04', occupiedSince: '2026-02-14', minStay: 10 },
    'CDMX#29': { available: false, availableFrom: '2026-09-17', occupiedSince: '2026-01-24', minStay: 10 },
    'CDMX#30': { available: false, availableFrom: '2026-04-19', occupiedSince: '2026-01-03', minStay: 10 },
    'CDMX#31': { available: false, availableFrom: '2026-06-02', occupiedSince: '2025-12-13', minStay: 10 },
    'CDMX#32': { available: false, availableFrom: '2026-07-16', occupiedSince: '2025-11-22', minStay: 10 },
    'CDMX#33': { available: false, availableFrom: '2026-08-29', occupiedSince: '2026-03-24', minStay: 10 },
    'CDMX#34': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'CDMX#35': { available: false, availableFrom: '2026-05-14', occupiedSince: '2026-02-10', minStay: 10 },
    'CDMX#36': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'CDMX#37': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Cancun Quintana Roo#2': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Cancun Quintana Roo#3': { available: false, availableFrom: '2026-04-25', occupiedSince: '2025-11-17', minStay: 10 },
    'Cancun Quintana Roo#4': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Cancun Quintana Roo#5': { available: false, availableFrom: '2026-07-23', occupiedSince: '2026-02-26', minStay: 10 },
    'Cancun Quintana Roo#6': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Cancun Quintana Roo#7': { available: false, availableFrom: '2026-10-19', occupiedSince: '2026-01-15', minStay: 10 },
    'Cancun Quintana Roo#8': { available: false, availableFrom: '2026-05-21', occupiedSince: '2025-12-25', minStay: 10 },
    'Cancun Quintana Roo#9': { available: false, availableFrom: '2026-07-04', occupiedSince: '2025-12-04', minStay: 10 },
    'Cancun Quintana Roo#10': { available: false, availableFrom: '2026-08-17', occupiedSince: '2025-11-13', minStay: 10 },
    'Cancun Quintana Roo#11': { available: false, availableFrom: '2026-09-30', occupiedSince: '2026-03-15', minStay: 10 },
    'Cancun Quintana Roo#12': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Cancun Quintana Roo#13': { available: false, availableFrom: '2026-06-15', occupiedSince: '2026-02-01', minStay: 10 },
    'Cancun Quintana Roo#14': { available: false, availableFrom: '2026-07-29', occupiedSince: '2026-01-10', minStay: 10 },
    'Chalapa Jalisco#2': { available: false, availableFrom: '2026-09-11', occupiedSince: '2025-12-20', minStay: 10 },
    'Chalapa Jalisco#3': { available: false, availableFrom: '2026-10-25', occupiedSince: '2025-11-29', minStay: 10 },
    'Chalapa Jalisco#4': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Chalapa Jalisco#5': { available: false, availableFrom: '2026-07-10', occupiedSince: '2026-03-10', minStay: 10 },
    'Chalapa Jalisco#6': { available: false, availableFrom: '2026-08-23', occupiedSince: '2026-02-17', minStay: 10 },
    'Chalapa Jalisco#7': { available: false, availableFrom: '2026-10-06', occupiedSince: '2026-01-27', minStay: 10 },
    'Chalapa Jalisco#8': { available: false, availableFrom: '2026-05-09', occupiedSince: '2026-01-06', minStay: 10 },
    'Chalapa Jalisco#9': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Guadalajara#2': { available: false, availableFrom: '2026-08-05', occupiedSince: '2025-11-25', minStay: 10 },
    'Guadalajara#3': { available: false, availableFrom: '2026-09-18', occupiedSince: '2026-03-26', minStay: 10 },
    'Guadalajara#4': { available: false, availableFrom: '2026-04-20', occupiedSince: '2026-03-05', minStay: 10 },
    'Guadalajara#5': { available: false, availableFrom: '2026-06-03', occupiedSince: '2026-02-12', minStay: 10 },
    'Guadalajara#6': { available: false, availableFrom: '2026-07-17', occupiedSince: '2026-01-22', minStay: 10 },
    'Guadalajara#7': { available: false, availableFrom: '2026-08-30', occupiedSince: '2026-01-01', minStay: 10 },
    'Guadalajara#8': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Guadalajara#9': { available: false, availableFrom: '2026-05-15', occupiedSince: '2025-11-20', minStay: 30 },
    'Guadalajara#10': { available: false, availableFrom: '2026-06-28', occupiedSince: '2026-03-22', minStay: 30 },
    'Guadalajara#11': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Guadalajara#12': { available: true, availableFrom: null, occupiedSince: null, minStay: 30 },
    'Guadalajara#13': { available: false, availableFrom: '2026-04-26', occupiedSince: '2026-01-18', minStay: 30 },
    'Guanajuato#2': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Guanajuato#3': { available: false, availableFrom: '2026-07-23', occupiedSince: '2025-12-06', minStay: 30 },
    'Guanajuato#4': { available: false, availableFrom: '2026-09-06', occupiedSince: '2025-11-15', minStay: 14 },
    'Guanajuato#5': { available: true, availableFrom: null, occupiedSince: null, minStay: 14 },
    'Guanajuato#6': { available: false, availableFrom: '2026-05-22', occupiedSince: '2026-02-24', minStay: 14 },
    'Guanajuato#7': { available: false, availableFrom: '2026-07-05', occupiedSince: '2026-02-03', minStay: 14 },
    'Guanajuato#8': { available: false, availableFrom: '2026-08-18', occupiedSince: '2026-01-13', minStay: 14 },
    'Guanajuato#9': { available: false, availableFrom: '2026-10-01', occupiedSince: '2025-12-23', minStay: 14 },
    'Guanajuato#10': { available: true, availableFrom: null, occupiedSince: null, minStay: 14 },
    'Guanajuato#11': { available: false, availableFrom: '2026-06-16', occupiedSince: '2025-11-11', minStay: 14 },
    'Guanajuato#12': { available: false, availableFrom: '2026-07-30', occupiedSince: '2026-03-13', minStay: 14 },
    'Guanajuato#13': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Guanajuato#14': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Merida Yucatan#2': { available: false, availableFrom: '2026-05-28', occupiedSince: '2026-01-08', minStay: 14 },
    'Merida Yucatan#3': { available: true, availableFrom: null, occupiedSince: null, minStay: 14 },
    'Merida Yucatan#4': { available: false, availableFrom: '2026-08-24', occupiedSince: '2025-11-27', minStay: 14 },
    'Merida Yucatan#5': { available: false, availableFrom: '2026-10-07', occupiedSince: '2025-11-06', minStay: 14 },
    'Merida Yucatan#6': { available: false, availableFrom: '2026-05-09', occupiedSince: '2026-03-08', minStay: 14 },
    'Merida Yucatan#7': { available: false, availableFrom: '2026-06-23', occupiedSince: '2026-02-15', minStay: 14 },
    'Merida Yucatan#8': { available: true, availableFrom: null, occupiedSince: null, minStay: 14 },
    'Merida Yucatan#9': { available: false, availableFrom: '2026-09-19', occupiedSince: '2026-01-04', minStay: 14 },
    'Merida Yucatan#10': { available: false, availableFrom: '2026-04-21', occupiedSince: '2025-12-13', minStay: 14 },
    'Merida Yucatan#11': { available: false, availableFrom: '2026-06-04', occupiedSince: '2025-11-22', minStay: 14 },
    'Merida Yucatan#12': { available: false, availableFrom: '2026-07-18', occupiedSince: '2026-03-24', minStay: 14 },
    'Merida Yucatan#13': { available: true, availableFrom: null, occupiedSince: null, minStay: 14 },
    'Merida Yucatan#14': { available: false, availableFrom: '2026-10-14', occupiedSince: '2026-02-10', minStay: 14 },
    'Merida Yucatan#15': { available: false, availableFrom: '2026-05-16', occupiedSince: '2026-01-20', minStay: 14 },
    'Merida Yucatan#16': { available: false, availableFrom: '2026-06-29', occupiedSince: '2025-12-30', minStay: 10 },
    'Merida Yucatan#17': { available: false, availableFrom: '2026-08-12', occupiedSince: '2025-12-09', minStay: 10 },
    'Monterrey#2': { available: false, availableFrom: '2026-09-25', occupiedSince: '2025-11-18', minStay: 10 },
    'Monterrey#3': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Monterrey#4': { available: false, availableFrom: '2026-06-10', occupiedSince: '2026-02-27', minStay: 10 },
    'Monterrey#5': { available: false, availableFrom: '2026-07-24', occupiedSince: '2026-02-05', minStay: 10 },
    'Monterrey#6': { available: false, availableFrom: '2026-09-06', occupiedSince: '2026-01-15', minStay: 10 },
    'Monterrey#7': { available: false, availableFrom: '2026-10-21', occupiedSince: '2025-12-25', minStay: 10 },
    'Monterrey#8': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Monterrey#9': { available: false, availableFrom: '2026-07-06', occupiedSince: '2025-11-13', minStay: 10 },
    'Monterrey#10': { available: false, availableFrom: '2026-08-19', occupiedSince: '2026-03-15', minStay: 10 },
    'Monterrey#11': { available: false, availableFrom: '2026-10-02', occupiedSince: '2026-02-22', minStay: 10 },
    'Monterrey#12': { available: false, availableFrom: '2026-05-04', occupiedSince: '2026-02-01', minStay: 10 },
    'Monterrey#13': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Monterrey#14': { available: false, availableFrom: '2026-07-31', occupiedSince: '2025-12-21', minStay: 10 },
    'Nuevo Vallarta#2': { available: false, availableFrom: '2026-09-13', occupiedSince: '2025-11-30', minStay: 10 },
    'Nuevo Vallarta#3': { available: false, availableFrom: '2026-10-27', occupiedSince: '2025-11-08', minStay: 10 },
    'Nuevo Vallarta#4': { available: false, availableFrom: '2026-05-29', occupiedSince: '2026-03-10', minStay: 10 },
    'Nuevo Vallarta#5': { available: false, availableFrom: '2026-07-12', occupiedSince: '2026-02-17', minStay: 10 },
    'Nuevo Vallarta#6': { available: false, availableFrom: '2026-08-25', occupiedSince: '2026-01-27', minStay: 10 },
    'Nuevo Vallarta#7': { available: false, availableFrom: '2026-10-08', occupiedSince: '2026-01-06', minStay: 10 },
    'Nuevo Vallarta#8': { available: false, availableFrom: '2026-05-10', occupiedSince: '2025-12-16', minStay: 10 },
    'Nuevo Vallarta#9': { available: false, availableFrom: '2026-06-23', occupiedSince: '2025-11-25', minStay: 10 },
    'Nuevo Vallarta#10': { available: false, availableFrom: '2026-08-06', occupiedSince: '2025-11-04', minStay: 10 },
    'Nuevo Vallarta#11': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Nuevo Vallarta#12': { available: false, availableFrom: '2026-04-22', occupiedSince: '2026-02-13', minStay: 10 },
    'Nuevo Vallarta#13': { available: false, availableFrom: '2026-06-05', occupiedSince: '2026-01-23', minStay: 10 },
    'Nuevo Vallarta#14': { available: false, availableFrom: '2026-07-19', occupiedSince: '2026-01-01', minStay: 10 },
    'Nuevo Vallarta#15': { available: false, availableFrom: '2026-09-01', occupiedSince: '2025-12-11', minStay: 10 },
    'Nuevo Vallarta#16': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Nuevo Vallarta#17': { available: false, availableFrom: '2026-05-17', occupiedSince: '2026-03-22', minStay: 10 },
    'Nuevo Vallarta#18': { available: false, availableFrom: '2026-06-30', occupiedSince: '2026-03-01', minStay: 10 },
    'Nuevo Vallarta#19': { available: false, availableFrom: '2026-08-13', occupiedSince: '2026-02-08', minStay: 10 },
    'Nuevo Vallarta#20': { available: false, availableFrom: '2026-09-26', occupiedSince: '2026-01-18', minStay: 10 },
    'Nuevo Vallarta#21': { available: false, availableFrom: '2026-04-28', occupiedSince: '2025-12-28', minStay: 10 },
    'Nuevo Vallarta#22': { available: false, availableFrom: '2026-06-11', occupiedSince: '2025-12-07', minStay: 10 },
    'Playa del Carmen#2': { available: false, availableFrom: '2026-07-25', occupiedSince: '2025-11-16', minStay: 10 },
    'Playa del Carmen#3': { available: false, availableFrom: '2026-09-07', occupiedSince: '2026-03-17', minStay: 10 },
    'Playa del Carmen#4': { available: false, availableFrom: '2026-10-21', occupiedSince: '2026-02-24', minStay: 10 },
    'Playa del Carmen#5': { available: false, availableFrom: '2026-05-23', occupiedSince: '2026-02-03', minStay: 10 },
    'Playa del Carmen#6': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Playa del Carmen#7': { available: false, availableFrom: '2026-08-20', occupiedSince: '2025-12-23', minStay: 10 },
    'Playa del Carmen#8': { available: false, availableFrom: '2026-10-03', occupiedSince: '2025-12-02', minStay: 10 },
    'Playa del Carmen#9': { available: false, availableFrom: '2026-05-05', occupiedSince: '2025-11-11', minStay: 10 },
    'Playa del Carmen#10': { available: false, availableFrom: '2026-06-18', occupiedSince: '2026-03-13', minStay: 10 },
    'Playa del Carmen#11': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Puerto Vallarta Jalisco#2': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Puerto Vallarta Jalisco#3': { available: false, availableFrom: '2026-10-28', occupiedSince: '2026-01-09', minStay: 10 },
    'Puerto Vallarta Jalisco#4': { available: false, availableFrom: '2026-05-30', occupiedSince: '2025-12-18', minStay: 10 },
    'Puerto Vallarta Jalisco#5': { available: false, availableFrom: '2026-07-13', occupiedSince: '2025-11-27', minStay: 10 },
    'Puerto Vallarta Jalisco#6': { available: false, availableFrom: '2026-08-26', occupiedSince: '2025-11-06', minStay: 30 },
    'Puerto Vallarta Jalisco#7': { available: false, availableFrom: '2026-10-09', occupiedSince: '2026-03-08', minStay: 30 },
    'Puerto Vallarta Jalisco#8': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Puerto Vallarta Jalisco#9': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Puerto Vallarta Jalisco#10': { available: false, availableFrom: '2026-08-07', occupiedSince: '2026-01-04', minStay: 30 },
    'Puerto Vallarta Jalisco#11': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Puerto Vallarta Jalisco#12': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Puerto Vallarta Jalisco#13': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Puerto Vallarta Jalisco#14': { available: false, availableFrom: '2026-07-20', occupiedSince: '2026-03-04', minStay: 14 },
    'Puerto Vallarta Jalisco#15': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Puerto Vallarta Jalisco#16': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Puerto Vallarta Jalisco#17': { available: true, availableFrom: null, occupiedSince: null, minStay: 14 },
    'Puerto Vallarta Jalisco#18': { available: false, availableFrom: '2026-07-01', occupiedSince: '2025-12-09', minStay: 14 },
    'Puerto Vallarta Jalisco#19': { available: false, availableFrom: '2026-08-14', occupiedSince: '2025-11-18', minStay: 14 },
    'Puerto Vallarta Jalisco#20': { available: false, availableFrom: '2026-09-27', occupiedSince: '2026-03-20', minStay: 14 },
    'Puerto Vallarta Jalisco#21': { available: false, availableFrom: '2026-04-29', occupiedSince: '2026-02-27', minStay: 14 },
    'Puerto Vallarta Jalisco#22': { available: true, availableFrom: null, occupiedSince: null, minStay: 14 },
    'Puerto Vallarta Jalisco#23': { available: true, availableFrom: null, occupiedSince: null, minStay: 10 },
    'Santiago Nuevo Leon#2': { available: false, availableFrom: '2026-09-08', occupiedSince: '2025-12-26', minStay: 14 },
    'Santiago Nuevo Leon#3': { available: false, availableFrom: '2026-10-22', occupiedSince: '2025-12-04', minStay: 14 },
    'Tulum Quintana Roo#2': { available: false, availableFrom: '2026-05-24', occupiedSince: '2025-11-13', minStay: 14 },
    'Tulum Quintana Roo#3': { available: false, availableFrom: '2026-07-07', occupiedSince: '2026-03-15', minStay: 14 },
    'Tulum Quintana Roo#4': { available: true, availableFrom: null, occupiedSince: null, minStay: 14 },
    'Tulum Quintana Roo#5': { available: false, availableFrom: '2026-10-04', occupiedSince: '2026-02-01', minStay: 14 },
    'Tulum Quintana Roo#6': { available: false, availableFrom: '2026-05-06', occupiedSince: '2026-01-11', minStay: 14 },
    'Tulum Quintana Roo#7': { available: false, availableFrom: '2026-06-19', occupiedSince: '2025-12-21', minStay: 14 },
    'Tulum Quintana Roo#8': { available: false, availableFrom: '2026-08-02', occupiedSince: '2025-11-30', minStay: 14 },
    'Tulum Quintana Roo#9': { available: true, availableFrom: null, occupiedSince: null, minStay: 14 },
    'Tulum Quintana Roo#10': { available: false, availableFrom: '2026-04-17', occupiedSince: '2026-03-11', minStay: 14 },
    'Tulum Quintana Roo#11': { available: false, availableFrom: '2026-05-31', occupiedSince: '2026-02-18', minStay: 14 },
    'Tulum Quintana Roo#12': { available: false, availableFrom: '2026-07-14', occupiedSince: '2026-01-27', minStay: 14 },
    'Tulum Quintana Roo#13': { available: false, availableFrom: '2026-08-27', occupiedSince: '2026-01-06', minStay: 14 },
    'Tulum Quintana Roo#14': { available: true, availableFrom: null, occupiedSince: null, minStay: 14 },
    'Tulum Quintana Roo#15': { available: false, availableFrom: '2026-05-12', occupiedSince: '2025-11-25', minStay: 10 },
    'Tulum Quintana Roo#16': { available: false, availableFrom: '2026-06-25', occupiedSince: '2025-11-04', minStay: 10 },
    'Tulum Quintana Roo#17': { available: false, availableFrom: '2026-08-08', occupiedSince: '2026-03-06', minStay: 10 },
    'Tulum Quintana Roo#18': { available: false, availableFrom: '2026-09-21', occupiedSince: '2026-02-13', minStay: 10 },
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
      .filter((f) => imageExts.includes(path.extname(f).toLowerCase()) && !f.toLowerCase().includes('.thumb.'))
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
