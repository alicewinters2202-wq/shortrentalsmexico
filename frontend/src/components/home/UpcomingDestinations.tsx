import type { TType } from '@/lib/i18n';

const UPCOMING = [
  { city: 'Los Cabos',              gradient: 'from-amber-700 to-orange-900',   emoji: '🏜️' },
  { city: 'Puerto Escondido',       gradient: 'from-cyan-800 to-blue-900',      emoji: '🌊' },
  { city: 'San Miguel de Allende',  gradient: 'from-orange-800 to-rose-900',    emoji: '⛪' },
  { city: 'Tulum',                  gradient: 'from-emerald-800 to-teal-900',   emoji: '🌴' },
  { city: 'Cancún',                 gradient: 'from-sky-700 to-cyan-900',       emoji: '🏖️' },
  { city: 'Oaxaca',                 gradient: 'from-rose-800 to-red-900',       emoji: '🏛️' },
  { city: 'Playa del Carmen',       gradient: 'from-teal-700 to-emerald-900',   emoji: '🐠' },
  { city: 'Mérida',                 gradient: 'from-yellow-700 to-amber-900',   emoji: '🌺' },
  { city: 'Tijuana',                gradient: 'from-slate-700 to-zinc-900',     emoji: '🌆' },
  { city: 'Ensenada',               gradient: 'from-blue-800 to-indigo-900',    emoji: '⚓' },
  { city: 'Rosarito',               gradient: 'from-violet-800 to-purple-900',  emoji: '🌅' },
  { city: 'Nayarit',                gradient: 'from-green-700 to-teal-900',     emoji: '🌿' },
];

interface Props {
  t: TType;
}

export default function UpcomingDestinations({ t }: Props) {
  return (
    <section style={{ backgroundColor: 'var(--cream)' }} className="px-6 py-20 max-w-7xl mx-auto">
      <h2 className="font-serif text-3xl mb-2" style={{ color: 'var(--ink)' }}>{t.upcomingTitle}</h2>
      <p className="text-sm mb-10" style={{ color: 'var(--muted)' }}>{t.upcomingSub}</p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {UPCOMING.map((d) => (
          <div
            key={d.city}
            className={`relative rounded-2xl aspect-[3/2] overflow-hidden bg-gradient-to-br ${d.gradient} flex flex-col items-center justify-center gap-2 cursor-not-allowed`}
          >
            <span className="text-4xl">{d.emoji}</span>
            <p className="text-white font-serif text-lg font-medium">{d.city}</p>
            <span
              className="text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
              style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)' }}
            >
              {t.comingSoon}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
