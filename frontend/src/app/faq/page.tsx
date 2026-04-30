import Link from 'next/link';
import LangToggle from '@/components/layout/LangToggle';
import { getT } from '@/lib/lang';
import FaqAccordion from './FaqAccordion';

export default async function FaqPage() {
  const { t, lang } = await getT();

  return (
    <div style={{ backgroundColor: 'var(--cream)', minHeight: '100vh' }}>
      {/* Navbar */}
      <nav
        className="sticky top-0 z-40 backdrop-blur-md"
        style={{ backgroundColor: 'rgba(28,28,30,0.9)', borderBottom: '1px solid var(--border)' }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-serif font-medium tracking-wide" style={{ color: 'var(--ink)' }}>
            ShortStayMX
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/properties" className="text-xs transition-colors hover:opacity-80" style={{ color: 'var(--muted)' }}>
              {t.allProperties}
            </Link>
            <Link href="/requirements" className="text-xs transition-colors hover:opacity-80" style={{ color: 'var(--muted)' }}>
              {t.reqNav}
            </Link>
            <LangToggle currentLang={lang} className="text-[--muted] hover:text-[--ink]" />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-12 text-center">
        <p className="text-xs tracking-widest uppercase font-medium mb-4" style={{ color: 'var(--gold)' }}>
          {t.faqNav}
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl mb-4" style={{ color: 'var(--ink)' }}>
          {t.faqTitle}
        </h1>
        <p className="text-base" style={{ color: 'var(--muted)' }}>
          {t.faqSub}
        </p>
      </section>

      {/* Accordion */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <FaqAccordion items={t.faqItems} />

        <div className="text-center mt-14">
          <Link
            href="/properties"
            className="inline-block px-10 py-4 rounded-full text-sm font-semibold tracking-wide text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: 'var(--gold)' }}
          >
            {t.allProperties} →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--border)' }} className="py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left">
            <p className="font-serif font-medium text-sm" style={{ color: 'var(--ink)' }}>ShortStayMX</p>
            <p className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>
              © 2021–{new Date().getFullYear()} ShortStayMX S.A. de C.V. · {t.footerTagline}
            </p>
          </div>
          <div className="flex items-center gap-5 text-xs" style={{ color: 'var(--muted)' }}>
            <Link href="/properties" className="hover:opacity-80 transition-opacity">{t.allProperties}</Link>
            <Link href="/requirements" className="hover:opacity-80 transition-opacity">{t.reqNav}</Link>
            <Link href="/faq" className="hover:opacity-80 transition-opacity">{t.faqNav}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
