import Link from 'next/link';
import { getT } from '@/lib/lang';

export default async function NotFound() {
  const { lang } = await getT();

  return (
    <div style={{ backgroundColor: 'var(--cream)', minHeight: '100vh' }} className="flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="text-[11px] tracking-[0.3em] uppercase font-medium mb-4" style={{ color: 'var(--gold)' }}>
          404
        </p>
        <h1 className="italic text-5xl sm:text-6xl mb-4 leading-[0.95]" style={{ color: 'var(--ink)' }}>
          {lang === 'en' ? 'Page not found' : 'Página no encontrada'}
        </h1>
        <p className="text-sm mb-10" style={{ color: 'var(--muted)' }}>
          {lang === 'en'
            ? "This page doesn't exist, or it may have moved. Let's get you back to something real."
            : 'Esta página no existe, o puede que se haya movido. Vamos a llevarte a algo real.'}
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/"
            className="px-6 py-3 rounded-full text-sm font-semibold text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: 'var(--gold)' }}
          >
            {lang === 'en' ? 'Go home' : 'Ir al inicio'}
          </Link>
          <Link
            href="/properties"
            className="px-6 py-3 rounded-full text-sm font-medium transition-colors hover:opacity-80"
            style={{ border: '1px solid var(--border)', color: 'var(--ink)' }}
          >
            {lang === 'en' ? 'Browse properties' : 'Ver propiedades'}
          </Link>
        </div>
      </div>
    </div>
  );
}
