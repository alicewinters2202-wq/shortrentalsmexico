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
  coordinates: string | null;
  images: string[];
  wifiSpeed: number;
  available: boolean;
  availableFrom: string | null;
}

const BACKEND = process.env.NEXT_PUBLIC_BACKEND_URL ?? 'http://localhost:3001';

export async function fetchPreview(): Promise<PropertyPreview[]> {
  try {
    const res = await fetch(`${BACKEND}/api/properties/preview`, {
      cache: 'no-store',
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export function imageUrl(path: string): string {
  return `${BACKEND}${path.replace(/ /g, '%20')}`;
}

export function parseAddress(address: string): { street: string; neighborhood: string } {
  const parts = address.split(',').map((s) => s.trim());
  const raw = parts[0] ?? address;
  const street = raw
    .replace(/^Calle\s+/i, '')
    .replace(/^C\.\s+/i, '')
    .replace(/\.$/,'')
    .trim();
  const neighborhood = parts[1] ?? '';
  return { street, neighborhood };
}

export function formatMXN(amount: number): string {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    maximumFractionDigits: 0,
  }).format(amount);
}
