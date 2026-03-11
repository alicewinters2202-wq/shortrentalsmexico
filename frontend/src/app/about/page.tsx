import Link from 'next/link';
import LangToggle from '@/components/layout/LangToggle';
import { getT } from '@/lib/lang';

export default async function AboutPage() {
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
            <LangToggle currentLang={lang} className="text-[--muted] hover:text-[--ink]" />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <p className="text-xs tracking-widest uppercase font-medium mb-4" style={{ color: 'var(--gold)' }}>
          {t.aboutNav}
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl mb-6" style={{ color: 'var(--ink)' }}>
          {t.aboutTitle}
        </h1>
        <p className="text-lg" style={{ color: 'var(--muted)' }}>
          {t.aboutSub}
        </p>
      </section>

      {/* Pillars */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {t.aboutPillars.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl p-6"
              style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}
            >
              <span className="text-3xl">{p.icon}</span>
              <p className="font-serif text-lg mt-3 mb-2" style={{ color: 'var(--ink)' }}>{p.title}</p>
              <p className="text-sm" style={{ color: 'var(--muted)' }}>{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Texto */}
        <div className="max-w-2xl mx-auto space-y-6">
          {[t.aboutP1, t.aboutP2, t.aboutP3, t.aboutP4].map((p, i) => (
            <p key={i} className="text-base leading-relaxed" style={{ color: 'var(--ink)' }}>
              {p}
            </p>
          ))}

          {/* Quote */}
          <blockquote
            className="border-l-4 pl-6 py-2 my-10 font-serif text-2xl italic"
            style={{ borderColor: 'var(--gold)', color: 'var(--ink)' }}
          >
            "{t.aboutP5}"
          </blockquote>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/properties"
            className="inline-block px-10 py-4 rounded-full text-sm font-semibold tracking-wide text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: 'var(--gold)' }}
          >
            {t.aboutCTA} →
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
          </div>
        </div>
      </footer>
    </div>
  );
}
