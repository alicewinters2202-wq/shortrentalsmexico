'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'ssmx_saved_properties';
export const SAVED_CHANGED_EVENT = 'ssmx-saved-changed';

export function readSavedIds(): number[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeSavedIds(ids: number[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    window.dispatchEvent(new Event(SAVED_CHANGED_EVENT));
  } catch {
    // localStorage unavailable (private browsing, etc.) — fail silently.
  }
}

interface Props {
  propertyId: number;
  size?: 'sm' | 'md';
  variant?: 'overlay' | 'card';
}

export default function SaveButton({ propertyId, size = 'md', variant = 'overlay' }: Props) {
  const [saved, setSaved] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setSaved(readSavedIds().includes(propertyId));
    function onChange() {
      setSaved(readSavedIds().includes(propertyId));
    }
    window.addEventListener(SAVED_CHANGED_EVENT, onChange);
    return () => window.removeEventListener(SAVED_CHANGED_EVENT, onChange);
  }, [propertyId]);

  function toggle(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    const current = readSavedIds();
    const next = current.includes(propertyId)
      ? current.filter((id) => id !== propertyId)
      : [...current, propertyId];
    writeSavedIds(next);
    setSaved(!saved);
  }

  // Avoid a flash of the wrong state before hydration reads localStorage.
  if (!mounted) return <div style={{ width: size === 'sm' ? 32 : 36, height: size === 'sm' ? 32 : 36 }} />;

  const dim = size === 'sm' ? 32 : 36;
  const bg = variant === 'card' ? 'var(--card)' : 'rgba(0,0,0,0.45)';
  const border = variant === 'card' ? '1px solid var(--border)' : 'none';
  const strokeColor = saved ? '#E0245E' : variant === 'card' ? 'var(--muted)' : '#fff';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={saved ? 'Remove from favorites' : 'Add to favorites'}
      aria-pressed={saved}
      className="rounded-full flex items-center justify-center transition-transform active:scale-90"
      style={{ width: dim, height: dim, backgroundColor: bg, border, backdropFilter: variant === 'overlay' ? 'blur(4px)' : undefined }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill={saved ? '#E0245E' : 'none'} stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    </button>
  );
}
