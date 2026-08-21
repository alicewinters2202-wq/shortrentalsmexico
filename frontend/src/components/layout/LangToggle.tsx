'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLang, type Lang } from '@/store/lang.store';

interface Props {
  currentLang: Lang;
  className?: string;
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
        className="leading-none transition-all"
        style={{ fontSize: '1.15rem', opacity: lang === 'en' ? 1 : 0.4, transform: lang === 'en' ? 'scale(1.12)' : 'scale(1)' }}
      >
        🇺🇸
      </button>
      <button
        onClick={() => switchTo('es')}
        aria-label="Español"
        aria-pressed={lang === 'es'}
        className="leading-none transition-all"
        style={{ fontSize: '1.15rem', opacity: lang === 'es' ? 1 : 0.4, transform: lang === 'es' ? 'scale(1.12)' : 'scale(1)' }}
      >
        🇲🇽
      </button>
    </div>
  );
}
