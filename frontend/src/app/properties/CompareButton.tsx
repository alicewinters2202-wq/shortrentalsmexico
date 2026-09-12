'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'ssmx_compare_properties';
export const COMPARE_CHANGED_EVENT = 'ssmx-compare-changed';
export const MAX_COMPARE = 3;

export function readCompareIds(): number[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function writeCompareIds(ids: number[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    window.dispatchEvent(new Event(COMPARE_CHANGED_EVENT));
  } catch {
    // localStorage unavailable — fail silently.
  }
}

interface Props {
  propertyId: number;
  lang: 'en' | 'es';
  accentColor: string;
}

export default function CompareButton({ propertyId, lang, accentColor }: Props) {
  const [selected, setSelected] = useState(false);
  const [atLimit, setAtLimit] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    function refresh() {
      const ids = readCompareIds();
      setSelected(ids.includes(propertyId));
      setAtLimit(ids.length >= MAX_COMPARE && !ids.includes(propertyId));
    }
    refresh();
    window.addEventListener(COMPARE_CHANGED_EVENT, refresh);
    return () => window.removeEventListener(COMPARE_CHANGED_EVENT, refresh);
  }, [propertyId]);

  function toggle(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    const current = readCompareIds();
    if (current.includes(propertyId)) {
      writeCompareIds(current.filter((id) => id !== propertyId));
      return;
    }
    if (current.length >= MAX_COMPARE) return; // at limit, no-op
    writeCompareIds([...current, propertyId]);
  }

  if (!mounted) return <div style={{ width: 32, height: 32 }} />;

  const label = lang === 'en' ? 'Compare' : 'Comparar';
  const limitTitle = lang === 'en' ? `Up to ${MAX_COMPARE} at a time` : `Máximo ${MAX_COMPARE} a la vez`;

  return (
    <button
      type="button"
      onClick={toggle}
      disabled={atLimit}
      title={atLimit ? limitTitle : label}
      aria-pressed={selected}
      className="rounded-full flex items-center justify-center gap-1 px-2.5 h-8 text-[11px] font-semibold transition-transform active:scale-95"
      style={{
        backgroundColor: selected ? accentColor : 'rgba(0,0,0,0.45)',
        color: '#fff',
        opacity: atLimit ? 0.5 : 1,
        cursor: atLimit ? 'not-allowed' : 'pointer',
        backdropFilter: 'blur(4px)',
      }}
    >
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {selected ? <path d="M20 6 9 17l-5-5" /> : <path d="M12 5v14M5 12h14" />}
      </svg>
      {label}
    </button>
  );
}
