import Link from 'next/link';
import { AGENTS } from '@/lib/agents';
import type { TType } from '@/lib/i18n';

export default function AgentsSection({ t }: { t: TType }) {
  return (
    <section style={{ backgroundColor: 'var(--card)' }} className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-3xl mb-2" style={{ color: 'var(--ink)' }}>
          {t.agentsSectionTitle}
        </h2>
        <p className="text-sm mb-10" style={{ color: 'var(--muted)' }}>
          {t.agentsSectionSub}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {AGENTS.map((agent) => {
            const city = agent.cities[0] === 'Ciudad de México' ? 'Ciudad de México' : agent.cities[0];
            return (
              <Link
                key={agent.id}
                href={`/properties?city=${encodeURIComponent(city)}`}
                className="group rounded-2xl p-5 flex flex-col items-center gap-3 transition-all hover:scale-[1.02]"
                style={{ backgroundColor: 'var(--cream)', border: '1px solid var(--border)' }}
              >
                {agent.photo ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={agent.photo}
                    alt={agent.name}
                    className="w-16 h-16 rounded-full object-cover ring-2 ring-transparent group-hover:ring-[var(--gold)] transition-all"
                    draggable="false"
                    style={{ pointerEvents: 'none', userSelect: 'none' }}
                  />
                ) : (
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center font-serif text-xl font-bold text-white"
                    style={{ backgroundColor: agent.color }}
                  >
                    {agent.initials}
                  </div>
                )}
                <div className="text-center">
                  <p className="font-semibold text-sm" style={{ color: 'var(--ink)' }}>{agent.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>{t.agentRole}</p>
                  <p className="text-[10px] mt-1 font-semibold tracking-widest uppercase" style={{ color: 'var(--gold)' }}>
                    📍 {agent.zone}
                  </p>
                  <div className="flex items-center justify-center gap-0.5 mt-1">
                    {agent.languages.map((flag) => (
                      <span key={flag} className="text-sm">{flag}</span>
                    ))}
                  </div>
                </div>
                <span className="text-[10px] font-semibold px-3 py-1 rounded-full transition-colors"
                  style={{ backgroundColor: 'var(--border)', color: 'var(--muted)' }}>
                  {t.agentsViewProps} →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
