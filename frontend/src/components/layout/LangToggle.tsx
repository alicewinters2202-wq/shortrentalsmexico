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

  const handleToggle = () => {
    const next: Lang = lang === 'es' ? 'en' : 'es';
    set(next);
    document.cookie = `lang=${next};path=/;max-age=31536000`;
    router.refresh(); // re-renderiza los server components con el nuevo idioma
  };

  return (
    <button
      onClick={handleToggle}
      className={`text-xs tracking-widest uppercase font-semibold transition-opacity hover:opacity-70 ${className}`}
      aria-label="Cambiar idioma / Change language"
    >
      {lang === 'es' ? 'EN' : 'ES'}
    </button>
  );
}
