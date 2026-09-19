'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLang, type Lang } from '@/store/lang.store';
import { FlagUS, FlagMX } from '@/components/Flags';

interface Props {
  currentLang: Lang;
  className?: string;
}

// Pages that have a dedicated, separately-crawlable English URL (under /en/...)
// rather than just rendering a different language at the same URL. Extend this
// as more pages get real /en counterparts.
const BILINGUAL_PATHS = new Set(['/', '/properties']);

export default function LangToggle({ currentLang, className = '' }: Props) {
  const { lang, set } = useLang();
  const router = useRouter();
  const pathname = usePathname();

  // Sincroniza el store con lo que leyó el servidor
  useEffect(() => {
    set(currentLang);
  }, [currentLang, set]);

  const switchTo = (next: Lang) => {
    if (next === lang) return;

    // If this path has a real bilingual URL pair, navigate there instead of
    // just re-rendering the same URL in a different language -- keeps the
    // URL and the rendered language consistent for both users and crawlers.
    // Query string is read directly from window.location (click-time only)
    // rather than via useSearchParams(), so this component doesn't force a
    // Suspense boundary requirement onto every page that renders it.
    const isEnglishUrl = pathname === '/en' || pathname.startsWith('/en/');
    const basePath = isEnglishUrl ? (pathname === '/en' ? '/' : pathname.slice(3)) : pathname;
    if (BILINGUAL_PATHS.has(basePath)) {
      set(next);
      document.cookie = `lang=${next};path=/;max-age=31536000`;
      const targetPath = next === 'en' ? (basePath === '/' ? '/en' : `/en${basePath}`) : basePath;
      const qs = typeof window !== 'undefined' ? window.location.search : '';
      router.push(qs ? `${targetPath}${qs}` : targetPath);
      return;
    }

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
