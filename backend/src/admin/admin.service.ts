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
    await supabase.from('overrides').upsert({
      id,
      available: override.available,
      available_from: override.availableFrom,
      occupied_since: override.occupiedSince,
      price_per_month: override.pricePerMonth,
    });
  }

  async clearOverride(id: number): Promise<void> {
    await supabase.from('overrides').delete().eq('id', id);
  }
}
