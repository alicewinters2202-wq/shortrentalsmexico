'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { readSavedIds, SAVED_CHANGED_EVENT } from './SaveButton';

interface Props {
  active: boolean;
  lang: 'en' | 'es';
  accentColor: string;
}

export default function SavedLink({ active, lang, accentColor }: Props) {
  const router = useRouter();
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    function refresh() {
      setCount(readSavedIds().length);
    }
    refresh();
    window.addEventListener(SAVED_CHANGED_EVENT, refresh);
    window.addEventListener('storage', refresh);
    return () => {
      window.removeEventListener(SAVED_CHANGED_EVENT, refresh);
      window.removeEventListener('storage', refresh);
    };
  }, []);

  function handleClick() {
    if (active) {
      router.push('/properties');
      return;
    }
    const ids = readSavedIds();
    const qs = ids.length ? `?ids=${ids.join(',')}` : '';
    router.push(`/properties${qs}`);
  }

  // Nothing saved yet and not currently on the saved view: no point showing it.
  if (count === null || (count === 0 && !active)) return null;

  const label = lang === 'en' ? 'Saved' : 'Guardadas';

  return (
    <button
      type="button"
      onClick={handleClick}
      className="px-4 py-2 rounded-full text-sm transition-colors flex items-center gap-1"
      style={active
        ? { backgroundColor: accentColor, color: '#fff', border: `1px solid ${accentColor}` }
        : { border: '1px solid var(--border)', color: 'var(--muted)' }}
    >
      ❤ {label} {count !== null && count > 0 ? `(${count})` : ''}
    </button>
  );
}
