'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { readCompareIds, writeCompareIds, COMPARE_CHANGED_EVENT } from './CompareButton';

interface Props {
  lang: 'en' | 'es';
  accentColor: string;
}

export default function CompareBar({ lang, accentColor }: Props) {
  const router = useRouter();
  const [ids, setIds] = useState<number[]>([]);

  useEffect(() => {
    function refresh() {
      setIds(readCompareIds());
    }
    refresh();
    window.addEventListener(COMPARE_CHANGED_EVENT, refresh);
    return () => window.removeEventListener(COMPARE_CHANGED_EVENT, refresh);
  }, []);

  if (ids.length < 2) return null;

  const countLabel = lang === 'en' ? `${ids.length} selected` : `${ids.length} seleccionadas`;
  const compareLabel = lang === 'en' ? 'Compare' : 'Comparar';
  const clearLabel = lang === 'en' ? 'Clear' : 'Limpiar';

  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4 px-5 py-3 rounded-full shadow-2xl"
      style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}
    >
      <span className="text-sm font-medium" style={{ color: 'var(--ink)' }}>{countLabel}</span>
      <button
        type="button"
        onClick={() => writeCompareIds([])}
        className="text-sm underline"
        style={{ color: 'var(--muted)' }}
      >
        {clearLabel}
      </button>
      <button
        type="button"
        onClick={() => router.push(`/properties/compare?ids=${ids.join(',')}`)}
        className="text-sm font-semibold px-4 py-2 rounded-full"
        style={{ backgroundColor: accentColor, color: '#fff' }}
      >
        {compareLabel} →
      </button>
    </div>
  );
}
