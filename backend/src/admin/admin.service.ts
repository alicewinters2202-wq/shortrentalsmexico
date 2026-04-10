import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

export interface PropertyOverride {
  available?: boolean;
  availableFrom?: string | null;
  pricePerMonth?: number;
}

@Injectable()
export class AdminService {
  private readonly overridesPath = path.join(__dirname, '..', '..', 'overrides.json');

  getOverrides(): Record<string, PropertyOverride> {
    try {
      if (!fs.existsSync(this.overridesPath)) return {};
      return JSON.parse(fs.readFileSync(this.overridesPath, 'utf-8'));
    } catch {
      return {};
    }
  }

  setOverride(id: number, override: PropertyOverride): void {
    const overrides = this.getOverrides();
    overrides[String(id)] = { ...overrides[String(id)], ...override };
    fs.writeFileSync(this.overridesPath, JSON.stringify(overrides, null, 2));
  }

  clearOverride(id: number): void {
    const overrides = this.getOverrides();
    delete overrides[String(id)];
    fs.writeFileSync(this.overridesPath, JSON.stringify(overrides, null, 2));
  }
}
