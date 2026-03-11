import Link from 'next/link';
import LangToggle from '@/components/layout/LangToggle';
import { getT } from '@/lib/lang';
import { AGENTS } from '@/lib/agents';

export default async function AgentsPage() {
  const { t, lang } = await getT();

  return (
    <div style={{ backgroundColor: 'var(--cream)', minHeight: '100vh' }}>
      {/* Navbar */}
      <nav className="sticky top-0 z-40 backdrop-blur-md"
        style={{ backgroundColor: 'rgba(28,28,30,0.9)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-serif font-medium tracking-wide" style={{ color: 'var(--ink)' }}>
            ShortStayMX
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/properties" className="text-xs hover:opacity-80" style={{ color: 'var(--muted)' }}>
              {t.allProperties}
            </Link>
            <LangToggle currentLang={lang} className="text-[--muted] hover:text-[--ink]" />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-12 text-center">
        <p className="text-xs tracking-widest uppercase font-medium mb-4" style={{ color: 'var(--gold)' }}>
          {t.agentsSectionTitle}
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl mb-4" style={{ color: 'var(--ink)' }}>
          {t.agentsSectionTitle}
        </h1>
        <p className="text-base" style={{ color: 'var(--muted)' }}>
          {t.agentsSectionSub}
        </p>
      </section>

      {/* Agente especializada */}
      {(() => {
        const camila = AGENTS.find((a) => a.specialist);
        if (!camila) return null;
        return (
          <section className="max-w-4xl mx-auto px-6 pb-8">
            <div className="rounded-3xl p-10 flex flex-col sm:flex-row items-center gap-8"
              style={{ backgroundColor: 'var(--card)', border: '1px solid rgba(180,130,255,0.3)', background: 'linear-gradient(135deg, var(--card) 80%, rgba(180,130,255,0.07))' }}>
              {camila.photo ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img src={camila.photo} alt={camila.name}
                  className="w-32 h-32 rounded-full object-cover ring-4 ring-[var(--gold)] flex-shrink-0"
                  draggable="false"
                  style={{ pointerEvents: 'none', userSelect: 'none' }} />
              ) : (
                <div className="w-32 h-32 rounded-full flex items-center justify-center font-serif text-3xl font-bold text-white flex-shrink-0"
                  style={{ backgroundColor: camila.color }}>
                  {camila.initials}
                </div>
              )}
              <div className="text-center sm:text-left flex-1">
                <p className="text-xs tracking-widest uppercase font-semibold mb-1" style={{ color: 'var(--gold)' }}>
                  {lang === 'en' ? 'Specialized agent' : 'Agente especializada'}
                </p>
                <p className="font-serif text-3xl" style={{ color: 'var(--ink)' }}>{camila.name}</p>
                <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>{t.agentRole}</p>
                <div className="flex items-center gap-1 mt-2 justify-center sm:justify-start">
                  {camila.languages.map((flag) => (
                    <span key={flag} className="text-xl">{flag}</span>
                  ))}
                </div>
              </div>
              <a
                href={`https://wa.me/${camila.wa}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 px-7 py-3 rounded-full text-sm font-semibold tracking-wide text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: 'var(--gold)' }}
              >
                {lang === 'en' ? 'Contact' : 'Contactar'} →
              </a>
            </div>
          </section>
        );
      })()}

      {/* Equipo */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {AGENTS.filter((a) => !a.specialist).map((agent) => {
            const city = agent.cities[0];
            return (
              <div key={agent.id} className="rounded-3xl p-8 flex flex-col items-center gap-5"
                style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
                {agent.photo ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img src={agent.photo} alt={agent.name}
                    className="w-24 h-24 rounded-full object-cover ring-2 ring-[var(--gold)]"
                    draggable="false"
                    style={{ pointerEvents: 'none', userSelect: 'none' }} />
                ) : (
                  <div className="w-24 h-24 rounded-full flex items-center justify-center font-serif text-2xl font-bold text-white"
                    style={{ backgroundColor: agent.color }}>
                    {agent.initials}
                  </div>
                )}
                <div className="text-center">
                  <p className="font-serif text-2xl" style={{ color: 'var(--ink)' }}>{agent.name}</p>
                  <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>{t.agentRole}</p>
                  <p className="text-xs mt-2 font-semibold tracking-widest uppercase" style={{ color: 'var(--gold)' }}>
                    📍 {agent.zone}
                  </p>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    {agent.languages.map((flag) => (
                      <span key={flag} className="text-lg">{flag}</span>
                    ))}
                  </div>
                </div>
                <Link
                  href={`/properties?city=${encodeURIComponent(city)}`}
                  className="w-full text-center py-3 rounded-full text-sm font-semibold tracking-wide text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: 'var(--gold)' }}
                >
                  {t.agentsViewProps} →
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--border)' }} className="py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-serif font-medium text-sm" style={{ color: 'var(--ink)' }}>ShortStayMX</p>
          <div className="flex items-center gap-5 text-xs" style={{ color: 'var(--muted)' }}>
            <Link href="/properties" className="hover:opacity-80">{t.allProperties}</Link>
            <Link href="/about" className="hover:opacity-80">{t.aboutNav}</Link>
            <Link href="/agents" className="hover:opacity-80">{t.agentsSectionTitle}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
