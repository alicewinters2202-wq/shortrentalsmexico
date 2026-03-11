import Link from 'next/link';
import LangToggle from '@/components/layout/LangToggle';
import { getT } from '@/lib/lang';

export default async function RequirementsPage() {
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
            <Link href="/about" className="text-xs transition-colors hover:opacity-80" style={{ color: 'var(--muted)' }}>
              {t.aboutNav}
            </Link>
            <LangToggle currentLang={lang} className="text-[--muted] hover:text-[--ink]" />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-12 text-center">
        <p className="text-xs tracking-widest uppercase font-medium mb-4" style={{ color: 'var(--gold)' }}>
          {t.reqNav}
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl mb-4" style={{ color: 'var(--ink)' }}>
          {t.reqTitle}
        </h1>
        <p className="text-base" style={{ color: 'var(--muted)' }}>
          {t.reqSub}
        </p>
      </section>

      {/* Sections */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <div className="space-y-4">
          {t.reqSections.map((section) => (
            <div
              key={section.title}
              className="rounded-2xl p-6"
              style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">{section.icon}</span>
                <div className="flex-1">
                  <h2 className="font-serif text-xl mb-3" style={{ color: 'var(--ink)' }}>
                    {section.title}
                  </h2>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--muted)' }}>
                        <span className="mt-1 flex-shrink-0" style={{ color: 'var(--gold)' }}>·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
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
              © {new Date().getFullYear()} ShortStayMX S.A. de C.V. · {t.footerTagline}
            </p>
          </div>
          <div className="flex items-center gap-5 text-xs" style={{ color: 'var(--muted)' }}>
            <Link href="/properties" className="hover:opacity-80 transition-opacity">{t.allProperties}</Link>
            <Link href="/about" className="hover:opacity-80 transition-opacity">{t.aboutNav}</Link>
            <Link href="/requirements" className="hover:opacity-80 transition-opacity">{t.reqNav}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
