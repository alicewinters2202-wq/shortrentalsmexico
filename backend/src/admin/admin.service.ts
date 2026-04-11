import { Injectable } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL || '',
  process.env.SUPABASE_KEY || '',
);

export interface PropertyOverride {
  available?: boolean;
  availableFrom?: string | null;
  occupiedSince?: string | null;
  pricePerMonth?: number;
}

@Injectable()
export class AdminService {

  async getOverrides(): Promise<Record<string, PropertyOverride>> {
    const { data } = await supabase.from('overrides').select('*');
    if (!data) return {};
    const result: Record<string, PropertyOverride> = {};
    for (const row of data) {
      result[String(row.id)] = {
        available: row.available,
        availableFrom: row.available_from,
        occupiedSince: row.occupied_since,
        pricePerMonth: row.price_per_month,
      };
    }
    return result;
  }

  async setOverride(id: number, override: PropertyOverride): Promise<void> {
    const row: Record<string, unknown> = { id };
    if (override.available !== undefined) row.available = override.available;
    if (override.available === true) {
      row.available_from = null;
      row.occupied_since = null;
    } else {
      if (override.availableFrom !== undefined) row.available_from = override.availableFrom;
      if (override.occupiedSince !== undefined) row.occupied_since = override.occupiedSince;
    }
    if (override.pricePerMonth !== undefined) row.price_per_month = override.pricePerMonth;
    await supabase.from('overrides').upsert(row);
  }

  async clearOverride(id: number): Promise<void> {
    await supabase.from('overrides').delete().eq('id', id);
  }
}
