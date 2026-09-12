'use client';

import { useRouter } from 'next/navigation';

interface Props {
  cityParam?: string;
  guestsParam?: number;
  sortParam?: string;
  minPriceParam?: number;
  maxPriceParam?: number;
  bedroomsParam?: number;
  lang: 'en' | 'es';
  accentColor: string;
}

export default function BedroomsFilter({
  cityParam,
  guestsParam,
  sortParam,
  minPriceParam,
  maxPriceParam,
  bedroomsParam,
  lang,
  accentColor,
}: Props) {
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const bedrooms = e.target.value;
    const params = new URLSearchParams();
    if (cityParam) params.set('city', cityParam);
    if (guestsParam !== undefined) params.set('guests', String(guestsParam));
    if (sortParam) params.set('sort', sortParam);
    if (minPriceParam !== undefined) params.set('minPrice', String(minPriceParam));
    if (maxPriceParam !== undefined) params.set('maxPrice', String(maxPriceParam));
    if (bedrooms) params.set('bedrooms', bedrooms);
    const qs = params.toString();
    router.push(`/properties${qs ? `?${qs}` : ''}`);
  };

  const placeholder = lang === 'en' ? 'Bedrooms' : 'Recámaras';
  const suffix = lang === 'en' ? '+' : '+';

  return (
    <select
      value={bedroomsParam !== undefined ? String(bedroomsParam) : ''}
      onChange={handleChange}
      className="text-sm rounded-full px-4 py-2 outline-none cursor-pointer"
      style={{
        backgroundColor: 'var(--card)',
        border: `1px solid ${bedroomsParam !== undefined ? accentColor : 'var(--border)'}`,
        color: bedroomsParam !== undefined ? accentColor : 'var(--muted)',
      }}
    >
      <option value="" style={{ backgroundColor: 'var(--card)', color: 'var(--muted)' }}>{placeholder}</option>
      {[1, 2, 3, 4, 5].map((n) => (
        <option key={n} value={n} style={{ backgroundColor: 'var(--card)', color: 'var(--ink)' }}>
          {n}{suffix}
        </option>
      ))}
    </select>
  );
}
