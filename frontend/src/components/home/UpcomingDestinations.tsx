import type { TType } from '@/lib/i18n';

const UPCOMING = [
  { city: 'Los Cabos',              bg: 'linear-gradient(135deg,#b45309,#7c2d12)',  emoji: '🐋' },
  { city: 'Puerto Escondido',       bg: 'linear-gradient(135deg,#0e7490,#1e3a5f)',  emoji: '🌊' },
  { city: 'San Miguel de Allende',  bg: 'linear-gradient(135deg,#9a3412,#881337)',  emoji: '⛪' },
  { city: 'Tulum',                  bg: 'linear-gradient(135deg,#065f46,#134e4a)',  emoji: '🌴' },
  { city: 'Oaxaca',                 bg: 'linear-gradient(135deg,#9f1239,#7f1d1d)',  emoji: '🏛️' },
  { city: 'Playa del Carmen',       bg: 'linear-gradient(135deg,#0f766e,#064e3b)',  emoji: '🐠' },
  { city: 'Tijuana',                bg: 'linear-gradient(135deg,#334155,#18181b)',  emoji: '🌆' },
  { city: 'Ensenada',               bg: 'linear-gradient(135deg,#1d4ed8,#312e81)',  emoji: '⚓' },
  { city: 'Rosarito',               bg: 'linear-gradient(135deg,#6d28d9,#4c1d95)',  emoji: '🌅' },
  { city: 'Nayarit',                bg: 'linear-gradient(135deg,#15803d,#134e4a)',  emoji: '🌿' },
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
            className="relative rounded-2xl aspect-[3/2] overflow-hidden flex flex-col items-center justify-center gap-2 cursor-not-allowed"
            style={{ background: d.bg }}
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
