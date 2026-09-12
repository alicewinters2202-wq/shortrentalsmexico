'use client';

import { useRouter } from 'next/navigation';

interface Props {
  cityParam?: string;
  guestsParam?: number;
  sortParam?: string;
  minPriceParam?: number;
  maxPriceParam?: number;
  bedroomsParam?: number;
  viewParam: 'list' | 'map';
  lang: 'en' | 'es';
  accentColor: string;
}

export default function ViewToggle({
  cityParam,
  guestsParam,
  sortParam,
  minPriceParam,
  maxPriceParam,
  bedroomsParam,
  viewParam,
  lang,
  accentColor,
}: Props) {
  const router = useRouter();

  function go(view: 'list' | 'map') {
    const params = new URLSearchParams();
    if (cityParam) params.set('city', cityParam);
    if (guestsParam !== undefined) params.set('guests', String(guestsParam));
    if (sortParam) params.set('sort', sortParam);
    if (minPriceParam !== undefined) params.set('minPrice', String(minPriceParam));
    if (maxPriceParam !== undefined) params.set('maxPrice', String(maxPriceParam));
    if (bedroomsParam !== undefined) params.set('bedrooms', String(bedroomsParam));
    if (view === 'map') params.set('view', 'map');
    const qs = params.toString();
    router.push(`/properties${qs ? `?${qs}` : ''}`);
  }

  const listLabel = lang === 'en' ? 'List' : 'Lista';
  const mapLabel = lang === 'en' ? 'Map' : 'Mapa';

  const btnStyle = (active: boolean) => ({
    backgroundColor: active ? accentColor : 'var(--card)',
    color: active ? '#fff' : 'var(--muted)',
    border: `1px solid ${active ? accentColor : 'var(--border)'}`,
  });

  return (
    <div className="inline-flex rounded-full overflow-hidden" style={{ border: '1px solid var(--border)' }}>
      <button
        type="button"
        onClick={() => go('list')}
        className="text-sm px-4 py-2 transition-colors"
        style={btnStyle(viewParam === 'list')}
      >
        {listLabel}
      </button>
      <button
        type="button"
        onClick={() => go('map')}
        className="text-sm px-4 py-2 transition-colors"
        style={btnStyle(viewParam === 'map')}
      >
        🗺️ {mapLabel}
      </button>
    </div>
  );
}
