'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Props {
  cityParam?: string;
  guestsParam?: number;
  sortParam?: string;
  minBound: number;
  maxBound: number;
  minPrice?: number;
  maxPrice?: number;
  usdRate: number;
  lang: 'en' | 'es';
  accentColor: string;
}

const STEP = 1000;

function formatMXNShort(n: number): string {
  return `$${Math.round(n).toLocaleString('es-MX')}`;
}

function formatUSDShort(n: number, rate: number): string {
  return `$${Math.round(n / rate).toLocaleString('en-US')}`;
}

export default function PriceRangeFilter({
  cityParam,
  guestsParam,
  sortParam,
  minBound,
  maxBound,
  minPrice,
  maxPrice,
  usdRate,
  lang,
  accentColor,
}: Props) {
  const router = useRouter();
  const [localMin, setLocalMin] = useState(minPrice ?? minBound);
  const [localMax, setLocalMax] = useState(maxPrice ?? maxBound);

  function commit(newMin: number, newMax: number) {
    const params = new URLSearchParams();
    if (cityParam) params.set('city', cityParam);
    if (guestsParam !== undefined) params.set('guests', String(guestsParam));
    if (sortParam) params.set('sort', sortParam);
    if (newMin > minBound) params.set('minPrice', String(newMin));
    if (newMax < maxBound) params.set('maxPrice', String(newMax));
    const qs = params.toString();
    router.push(`/properties${qs ? `?${qs}` : ''}`);
  }

  function handleMinChange(e: React.ChangeEvent<HTMLInputElement>) {
    const v = Math.min(Number(e.target.value), localMax - STEP);
    setLocalMin(v);
  }

  function handleMaxChange(e: React.ChangeEvent<HTMLInputElement>) {
    const v = Math.max(Number(e.target.value), localMin + STEP);
    setLocalMax(v);
  }

  const minPct = maxBound > minBound ? ((localMin - minBound) / (maxBound - minBound)) * 100 : 0;
  const maxPct = maxBound > minBound ? ((localMax - minBound) / (maxBound - minBound)) * 100 : 100;

  const label = lang === 'en' ? 'Monthly budget' : 'Presupuesto mensual';

  return (
    <div className="mt-5 max-w-md">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs" style={{ color: 'var(--muted)' }}>
          {label} (MXN)
        </span>
        <span className="text-xs font-semibold" style={{ color: 'var(--ink)' }}>
          {formatMXNShort(localMin)} – {formatMXNShort(localMax)}
        </span>
      </div>

      <div className="relative h-5 flex items-center">
        <div className="absolute w-full h-1.5 rounded-full" style={{ backgroundColor: 'var(--border)' }} />
        <div
          className="absolute h-1.5 rounded-full"
          style={{ backgroundColor: accentColor, left: `${minPct}%`, right: `${100 - maxPct}%` }}
        />
        <input
          type="range"
          min={minBound}
          max={maxBound}
          step={STEP}
          value={localMin}
          onChange={handleMinChange}
          onMouseUp={() => commit(localMin, localMax)}
          onTouchEnd={() => commit(localMin, localMax)}
          onKeyUp={() => commit(localMin, localMax)}
          aria-label={lang === 'en' ? 'Minimum monthly budget' : 'Presupuesto mensual mínimo'}
          className="range-thumb"
          style={{ ['--thumb-color' as string]: accentColor }}
        />
        <input
          type="range"
          min={minBound}
          max={maxBound}
          step={STEP}
          value={localMax}
          onChange={handleMaxChange}
          onMouseUp={() => commit(localMin, localMax)}
          onTouchEnd={() => commit(localMin, localMax)}
          onKeyUp={() => commit(localMin, localMax)}
          aria-label={lang === 'en' ? 'Maximum monthly budget' : 'Presupuesto mensual máximo'}
          className="range-thumb"
          style={{ ['--thumb-color' as string]: accentColor }}
        />
      </div>

      <p className="text-[11px] mt-1" style={{ color: 'var(--muted)' }}>
        ≈ {formatUSDShort(localMin, usdRate)} – {formatUSDShort(localMax, usdRate)} USD
      </p>

      <style jsx>{`
        input[type='range'].range-thumb {
          -webkit-appearance: none;
          appearance: none;
          pointer-events: none;
          position: absolute;
          left: 0;
          width: 100%;
          height: 0;
          background: transparent;
          margin: 0;
        }
        input[type='range'].range-thumb::-webkit-slider-thumb {
          -webkit-appearance: none;
          pointer-events: auto;
          width: 16px;
          height: 16px;
          border-radius: 9999px;
          background: var(--thumb-color);
          border: 2px solid var(--cream);
          cursor: pointer;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        }
        input[type='range'].range-thumb::-moz-range-thumb {
          pointer-events: auto;
          width: 16px;
          height: 16px;
          border-radius: 9999px;
          background: var(--thumb-color);
          border: 2px solid var(--cream);
          cursor: pointer;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        }
        input[type='range'].range-thumb::-moz-range-track {
          background: transparent;
        }
      `}</style>
    </div>
  );
}
