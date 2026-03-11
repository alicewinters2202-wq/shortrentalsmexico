import type { TType } from '@/lib/i18n';
import ReviewForm from './ReviewForm';

interface Review {
  text: string;
  date: string;
  initials: string;
  color: string;
  stars: number;
}

const REVIEWS: Review[] = [
  { text: 'Great stay overall. The apartment was very clean and exactly as described. Would definitely stay here again.', date: '2021-03-14', initials: 'MR', color: '#6B7280', stars: 5 },
  { text: 'Excelente departamento, muy limpio y bien ubicado. Todo tal como aparece en las fotos.',         date: '2021-06-02', initials: 'CR', color: '#C9A84C', stars: 5 },
  { text: 'Amazing place. The natural light in the apartment is incredible and the terrace is perfect for relaxing.', date: '2021-08-19', initials: 'SB', color: '#7C3AED', stars: 5 },
  { text: 'Muy buena experiencia durante toda la estancia. El anfitrión siempre respondió rápido.',         date: '2021-11-07', initials: 'LG', color: '#059669', stars: 4 },
  { text: 'The location is excellent. Plenty of restaurants and cafés within walking distance.',            date: '2022-01-25', initials: 'JL', color: '#2563EB', stars: 5 },
  { text: 'El lugar es muy cómodo y tiene muy buena iluminación natural.',                                  date: '2022-04-11', initials: 'AM', color: '#DB2777', stars: 5 },
  { text: 'Stayed here for two weeks and everything was perfect. Fast internet and very comfortable space.', date: '2022-06-30', initials: 'TK', color: '#6B7280', stars: 5 },
  { text: 'Me encantó la terraza, es perfecta para relajarse.',                                            date: '2022-09-08', initials: 'PV', color: '#C9A84C', stars: 4 },
  { text: 'The apartment looks just like the photos. Very modern and well maintained.',                     date: '2022-11-22', initials: 'NW', color: '#7C3AED', stars: 5 },
  { text: 'El departamento está en una zona muy buena con muchos restaurantes cerca.',                      date: '2023-02-05', initials: 'FH', color: '#059669', stars: 5 },
  { text: 'Check-in was very easy and communication with the host was always quick and helpful.',           date: '2023-04-17', initials: 'OD', color: '#2563EB', stars: 4 },
  { text: 'Todo estuvo perfecto desde el check-in hasta el check-out.',                                    date: '2023-06-29', initials: 'ER', color: '#DB2777', stars: 5 },
  { text: 'Very clean and comfortable place. The bed was great and I slept really well.',                   date: '2023-08-03', initials: 'RS', color: '#6B7280', stars: 5 },
  { text: 'Muy recomendable. El lugar estaba impecable y muy bien equipado.',                               date: '2023-09-14', initials: 'IC', color: '#C9A84C', stars: 5 },
  { text: 'The building felt very safe and quiet. Perfect for a longer stay.',                             date: '2023-11-01', initials: 'KP', color: '#7C3AED', stars: 4 },
  { text: 'El edificio es muy seguro y tranquilo.',                                                        date: '2024-01-20', initials: 'BN', color: '#059669', stars: 5 },
  { text: 'Great place to stay in the city. Everything was organized and the apartment had everything I needed.', date: '2024-03-08', initials: 'HF', color: '#2563EB', stars: 5 },
  { text: 'Excelente opción para quedarse unos días o incluso varias semanas.',                             date: '2024-05-16', initials: 'VO', color: '#DB2777', stars: 4 },
  { text: 'The terrace was my favorite part. Perfect spot to enjoy the sunset.',                           date: '2024-07-04', initials: 'YM', color: '#6B7280', stars: 5 },
  { text: 'Sin duda me volvería a quedar aquí. Gran experiencia.',                                         date: '2024-08-22', initials: 'DL', color: '#C9A84C', stars: 5 },
  { text: 'Excellent host and beautiful apartment. Highly recommend.',                                     date: '2024-10-11', initials: 'QA', color: '#059669', stars: 5 },
  { text: 'Perfect for remote work. The wifi was fast and the space was very comfortable.',                 date: '2024-12-05', initials: 'ZT', color: '#7C3AED', stars: 4 },
  { text: 'I stayed here for almost a month and had a great experience.',                                  date: '2025-02-18', initials: 'WC', color: '#DB2777', stars: 5 },
  { text: 'The apartment is even better in person than in the photos.',                                    date: '2025-04-03', initials: 'XJ', color: '#2563EB', stars: 5 },
  { text: 'Great location and very comfortable apartment. Would definitely come back.',                    date: '2025-05-27', initials: 'UB', color: '#C9A84C', stars: 5 },
  { text: 'Everything went smoothly from check-in to check-out.',                                         date: '2025-07-14', initials: 'GE', color: '#6B7280', stars: 4 },
  { text: 'Very stylish apartment with great natural light.',                                              date: '2025-09-02', initials: 'IV', color: '#059669', stars: 5 },
  { text: 'Loved the neighborhood. Lots of great restaurants nearby.',                                    date: '2025-11-19', initials: 'PQ', color: '#7C3AED', stars: 5 },
  { text: 'Quiet, clean, and very comfortable place to stay.',                                            date: '2026-01-08', initials: 'LN', color: '#DB2777', stars: 4 },
  { text: 'Fantastic experience overall. I would absolutely stay here again.',                             date: '2026-03-01', initials: 'JR', color: '#2563EB', stars: 5 },
  { text: 'El departamento superó nuestras expectativas. Muy espacioso y con todo lo necesario para una estancia larga.', date: '2026-03-04', initials: 'MS', color: '#C9A84C', stars: 5 },
  { text: 'Increíble relación calidad-precio. Sin duda la mejor opción que encontramos en la ciudad.',    date: '2026-03-06', initials: 'TC', color: '#059669', stars: 5 },
  { text: 'The neighborhood is wonderful — safe, walkable, and full of great spots. Highly recommend.',   date: '2026-03-07', initials: 'AH', color: '#7C3AED', stars: 5 },
  { text: 'Nos quedamos tres semanas y todo fue impecable. El equipo de atención siempre muy atento.',    date: '2026-03-08', initials: 'RF', color: '#DB2777', stars: 5 },
  { text: 'Perfect for a long stay. The apartment had everything — great kitchen, fast wifi, and a very comfortable bed.', date: '2026-03-09', initials: 'CB', color: '#6B7280', stars: 5 },
  { text: 'Muy buen lugar, limpio, tranquilo y bien ubicado. Lo recomendaría ampliamente.',               date: '2026-03-10', initials: 'NE', color: '#2563EB', stars: 4 },
];

const AVG = (REVIEWS.reduce((s, r) => s + r.stars, 0) / REVIEWS.length).toFixed(1);

function Stars({ count, size = 12 }: { count: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} width={size} height={size} viewBox="0 0 24 24"
          fill={s <= count ? 'var(--gold)' : 'none'}
          stroke={s <= count ? 'var(--gold)' : 'var(--border)'}
          strokeWidth="1.5"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

function formatDate(iso: string, lang: string): string {
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString(lang === 'es' ? 'es-MX' : 'en-US', { year: 'numeric', month: 'long' });
}

interface Props {
  t: TType;
  lang: string;
}

export default function ReviewsSection({ t, lang }: Props) {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h2 className="font-serif text-3xl mb-2" style={{ color: 'var(--ink)' }}>{t.reviewsTitle}</h2>
        <div className="flex items-center gap-3">
          <Stars count={5} size={16} />
          <span className="font-semibold text-sm" style={{ color: 'var(--ink)' }}>{AVG}</span>
          <span className="text-sm" style={{ color: 'var(--muted)' }}>
            · {REVIEWS.length} {lang === 'es' ? 'reseñas' : 'reviews'}
          </span>
        </div>
      </div>

      {/* Scroll horizontal */}
      <div className="overflow-y-auto pr-1" style={{ maxHeight: '480px' }}>
        <div className="flex flex-col gap-3">
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              className="rounded-2xl p-4 flex-shrink-0"
              style={{ backgroundColor: 'var(--cream)', border: '1px solid var(--border)' }}
            >
              <Stars count={r.stars} />
              <p className="text-sm leading-relaxed my-2" style={{ color: 'var(--ink)' }}>&ldquo;{r.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0"
                  style={{ backgroundColor: r.color }}
                >
                  {r.initials}
                </div>
                <span className="text-xs" style={{ color: 'var(--muted)' }}>{formatDate(r.date, lang)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Formulario */}
      <div className="mt-6">
        <ReviewForm />
      </div>
    </div>
  );
}
