'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLang, type Lang } from '@/store/lang.store';

interface Props {
  currentLang: Lang;
  className?: string;
}

function FlagUS({ style }: { style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 16" width="22" height="15" style={style} aria-hidden="true">
      <rect width="24" height="16" fill="#B22234" />
      {[1, 3, 5, 7, 9, 11, 13].map((y) => (
        <rect key={y} y={y} width="24" height="1.23" fill="#fff" />
      ))}
      <rect width="10.5" height="8.62" fill="#3C3B6E" />
    </svg>
  );
}

function FlagMX({ style }: { style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 16" width="22" height="15" style={style} aria-hidden="true">
      <rect width="8" height="16" fill="#006847" />
      <rect x="8" width="8" height="16" fill="#fff" />
      <rect x="16" width="8" height="16" fill="#CE1126" />
      <circle cx="12" cy="8" r="2" fill="#8B5E34" />
    </svg>
  );
}

export default function LangToggle({ currentLang, className = '' }: Props) {
  const { lang, set } = useLang();
  const router = useRouter();

  // Sincroniza el store con lo que leyó el servidor
  useEffect(() => {
    set(currentLang);
  }, [currentLang, set]);

  const switchTo = (next: Lang) => {
    if (next === lang) return;
    set(next);
    document.cookie = `lang=${next};path=/;max-age=31536000`;
    router.refresh(); // re-renderiza los server components con el nuevo idioma
  };

  return (
    <div className={`flex items-center gap-1.5 ${className}`} role="group" aria-label="Language / Idioma">
      <button
        onClick={() => switchTo('en')}
        aria-label="English"
        aria-pressed={lang === 'en'}
        className="leading-none transition-all rounded-sm overflow-hidden"
        style={{ opacity: lang === 'en' ? 1 : 0.4, transform: lang === 'en' ? 'scale(1.12)' : 'scale(1)' }}
      >
        <FlagUS />
      </button>
      <button
        onClick={() => switchTo('es')}
        aria-label="Español"
        aria-pressed={lang === 'es'}
        className="leading-none transition-all rounded-sm overflow-hidden"
        style={{ opacity: lang === 'es' ? 1 : 0.4, transform: lang === 'es' ? 'scale(1.12)' : 'scale(1)' }}
      >
        <FlagMX />
      </button>
    </div>
  );
}
