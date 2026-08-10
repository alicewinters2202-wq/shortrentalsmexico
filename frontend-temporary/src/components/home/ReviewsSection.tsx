import type { TType } from '@/lib/i18n';
import ReviewForm from './ReviewForm';

interface Review {
  text: string;
  date: string;
  initials: string;
  color: string;
  stars: number;
  city?: string;
}

const REVIEWS: Review[] = [
  // 2021 - 5 reseñas
  { text: 'Muy buen depa, limpio y tal como en las fotos. Lo recomiendo!', date: '2021-02-14', initials: 'MR', color: '#6B7280', stars: 5, city: 'Ciudad de México' },
  { text: 'Excelente departamento, muy limpio y bien ubicado. Todo tal como aparece en las fotos.', date: '2021-04-22', initials: 'CR', color: '#C9A84C', stars: 5, city: 'Guadalajara' },
  { text: 'Amazing place. The natural light is incredible and the terrace is perfect for relaxing. Would def come back', date: '2021-06-18', initials: 'SB', color: '#7C3AED', stars: 5, city: 'Ciudad de México' },
  { text: 'Muy buena experiencia. El anfitrion siempre respondio rapido aunq a veces tardaba un poco', date: '2021-08-19', initials: 'LG', color: '#DB2777', stars: 4 },
  { text: 'The host was responsive and made the process easy. location could be better but overall good', date: '2021-11-03', initials: 'DM', color: '#C9A84C', stars: 4, city: 'Monterrey' },

  // 2022 - 9 reseñas
  { text: 'The location is excellent. Plenty of restaurants and cafés within walking distance.', date: '2022-01-25', initials: 'JL', color: '#7C3AED', stars: 5, city: 'Ciudad de México' },
  { text: 'La atencion fue excelente, respondieron cualquier duda de inmediato. 100% recomendado', date: '2022-02-18', initials: 'YC', color: '#059669', stars: 5 },
  { text: 'I work remotely and this was the perfect setup. Fast wifi, quiet building, great desk area. Stayed 3 weeks', date: '2022-03-07', initials: 'KR', color: '#DB2777', stars: 5, city: 'Monterrey' },
  { text: 'Me encanto la terraza, es perfecta para relajarse despues del trabajo', date: '2022-04-11', initials: 'PV', color: '#2563EB', stars: 4, city: 'Puerto Vallarta' },
  { text: 'Loved waking up to the city views. Really nice vibe overall, will book again', date: '2022-05-09', initials: 'FS', color: '#C9A84C', stars: 5, city: 'Ciudad de México' },
  { text: 'Stayed two weeks, everything was perfect. Fast internet and comfortable. Only issue was parking', date: '2022-06-30', initials: 'TK', color: '#6B7280', stars: 4 },
  { text: 'El depa esta en zona muy buena con muchos restaurantes cerca. Volveria sin duda', date: '2022-09-08', initials: 'FH', color: '#059669', stars: 5, city: 'Guadalajara' },
  { text: 'Stayed here during a work relocation. Made the transition much easier, very comfortable', date: '2022-10-14', initials: 'HV', color: '#DB2777', stars: 5, city: 'Monterrey' },
  { text: 'The apartment looks just like the photos. Modern and well maintained. No complaints', date: '2022-11-22', initials: 'NW', color: '#C9A84C', stars: 5 },

  // 2023 - 14 reseñas
  { text: 'Not like a hotel at all, much better. Feels like home from day one', date: '2023-01-06', initials: 'CL', color: '#2563EB', stars: 5 },
  { text: 'El departamento esta en una zona muy buena con muchos restaurantes cerca', date: '2023-02-05', initials: 'IC', color: '#6B7280', stars: 5, city: 'Ciudad de México' },
  { text: 'Good value for the price. You get more than expected honestly', date: '2023-03-22', initials: 'AL', color: '#7C3AED', stars: 4 },
  { text: 'Check-in was easy and communication always quick. Minor issues with hot water but resolved fast', date: '2023-04-17', initials: 'OD', color: '#059669', stars: 4 },
  { text: 'Very clean, you could tell they really care about the details. Impressed', date: '2023-05-30', initials: 'RN', color: '#DB2777', stars: 5 },
  { text: 'Todo estuvo perfecto desde el check in hasta el check out. Sin quejas', date: '2023-06-29', initials: 'ER', color: '#C9A84C', stars: 5 },
  { text: 'The building has great security and neighbors are respectful. Felt safe the whole time', date: '2023-07-11', initials: 'MG', color: '#2563EB', stars: 4, city: 'Monterrey' },
  { text: 'Very clean and comfortable. The bed was great, slept really well every night', date: '2023-08-03', initials: 'RS', color: '#6B7280', stars: 5 },
  { text: 'Nos quedamos un mes y fue increible. El departamento tiene todo lo q necesitas y mas', date: '2023-08-29', initials: 'BF', color: '#7C3AED', stars: 5, city: 'Guadalajara' },
  { text: 'Muy recomendable. Estaba impecable y bien equipado, mejor de lo q esperaba', date: '2023-09-14', initials: 'IC', color: '#059669', stars: 5 },
  { text: 'Loved it. The layout is smart and makes great use of space. Very thoughtful design', date: '2023-10-19', initials: 'SH', color: '#DB2777', stars: 5, city: 'Ciudad de México' },
  { text: 'Safe and quiet building. Perfect for longer stays, would definitely return', date: '2023-11-01', initials: 'KP', color: '#C9A84C', stars: 4 },
  { text: 'Buen lugar en general, la ubicacion es buena y el depa comodo. Puede mejorar en algunos detalles', date: '2023-11-28', initials: 'GT', color: '#6B7280', stars: 3 },
  { text: 'Great experience overall. Clean, well located and the team was always available', date: '2023-12-15', initials: 'PL', color: '#059669', stars: 5, city: 'Cancún' },

  // 2024 - 17 reseñas
  { text: 'El edificio es muy seguro y tranquilo. Ideal para quedarse tiempo', date: '2024-01-20', initials: 'BN', color: '#7C3AED', stars: 5, city: 'Monterrey' },
  { text: 'Best decision for our trip. The apartment was spotless and location unbeatable', date: '2024-02-07', initials: 'TF', color: '#2563EB', stars: 5, city: 'Cancún' },
  { text: 'Muy buena ubicacion, cerca de todo. El depa es tal cual aparece en las fotos', date: '2024-02-14', initials: 'SO', color: '#6B7280', stars: 4 },
  { text: 'Great place to stay. Everything was organized and had everything I needed for work', date: '2024-03-08', initials: 'HF', color: '#DB2777', stars: 5, city: 'Ciudad de México' },
  { text: 'We are family of four and had plenty of space. Kids loved it, we will come back', date: '2024-04-25', initials: 'JB', color: '#059669', stars: 5 },
  { text: 'Excelente opcion para quedarse unos dias o semanas. El servicio es muy bueno', date: '2024-05-16', initials: 'VO', color: '#2563EB', stars: 4, city: 'Mérida' },
  { text: 'Checkin was seamless and the welcome instructions were clear. No issues at all', date: '2024-06-13', initials: 'VK', color: '#C9A84C', stars: 4 },
  { text: 'The terrace was my fav part. Perfect spot to enjoy the sunset every evening', date: '2024-07-04', initials: 'YM', color: '#6B7280', stars: 5, city: 'Puerto Vallarta' },
  { text: 'Lo recomendaria sin dudar. Limpio, comodo y atencion al cliente impecable', date: '2024-07-31', initials: 'HP', color: '#7C3AED', stars: 5 },
  { text: 'Sin duda volveria. Gran experiencia en general, mejor q un hotel', date: '2024-08-22', initials: 'DL', color: '#059669', stars: 5 },
  { text: 'One of the best short term rentals ive stayed in. Truly well maintained', date: '2024-09-01', initials: 'EC', color: '#DB2777', stars: 5 },
  { text: 'Excellent host and beautiful apartment. Highly recommend to anyone visiting', date: '2024-10-11', initials: 'QA', color: '#C9A84C', stars: 5, city: 'Guadalajara' },
  { text: 'Wifi speed was impressive. Zero issues during video calls all week long', date: '2024-11-17', initials: 'WP', color: '#2563EB', stars: 5, city: 'Monterrey' },
  { text: 'El servicio de limpieza semanal se agradece mucho en estancias largas, excelente detalle', date: '2024-12-01', initials: 'KA', color: '#6B7280', stars: 5 },
  { text: 'Perfect for remote work. Wifi fast and space comfortable. Only thing missing was a bigger desk', date: '2024-12-05', initials: 'ZT', color: '#7C3AED', stars: 4, city: 'Ciudad de México' },
  { text: 'Buen departamento, la verdad cumplio con lo prometido. Nada espectacular pero muy bueno', date: '2024-12-19', initials: 'MV', color: '#C9A84C', stars: 3 },
  { text: 'Everything as advertised. No surprises which is honestly the best thing you can say', date: '2024-12-28', initials: 'GM', color: '#059669', stars: 5 },

  // 2025 - 13 reseñas
  { text: 'I stayed almost a month and had a great experience. Would book again without hesitation', date: '2025-01-18', initials: 'WC', color: '#DB2777', stars: 5, city: 'Cancún' },
  { text: 'Comfortable, stylish and in a great part of the city. Will book again next time I visit', date: '2025-02-15', initials: 'LO', color: '#C9A84C', stars: 5, city: 'Ciudad de México' },
  { text: 'The apartment is even better in person than in photos. Very pleasant surprise', date: '2025-03-03', initials: 'XJ', color: '#2563EB', stars: 5 },
  { text: 'Really appreciated the weekly cleaning service. Made a big difference during longer stay', date: '2025-03-21', initials: 'AR', color: '#6B7280', stars: 4 },
  { text: 'Great location and comfortable apartment. Would definitely come back next year', date: '2025-04-27', initials: 'UB', color: '#7C3AED', stars: 5, city: 'Guadalajara' },
  { text: 'Spent six weeks here for a project. Felt like home by end of first week honestly', date: '2025-05-14', initials: 'ND', color: '#059669', stars: 5, city: 'Monterrey' },
  { text: 'Everything went smoothly from checkin to checkout. Simple and efficient', date: '2025-06-14', initials: 'GE', color: '#DB2777', stars: 4 },
  { text: 'Muy tranquilo y seguro. Ideal para trabajar desde casa sin distracciones', date: '2025-07-10', initials: 'IM', color: '#C9A84C', stars: 5, city: 'Monterrey' },
  { text: 'Very stylish with great natural light. Nice neighborhood too', date: '2025-08-02', initials: 'IV', color: '#2563EB', stars: 5, city: 'Ciudad de México' },
  { text: 'The apartment exceeded expectations in every way. Highly recommended', date: '2025-09-17', initials: 'ZM', color: '#6B7280', stars: 5 },
  { text: 'Loved the neighborhood. Lots of great restaurants nearby and easy to get around', date: '2025-10-19', initials: 'PQ', color: '#7C3AED', stars: 5, city: 'Guadalajara' },
  { text: 'Quiet, clean and comfortable. Exactamente lo que necesitaba para mi estancia', date: '2025-11-08', initials: 'LN', color: '#059669', stars: 4 },
  { text: 'Buen lugar, solo tuve un problemita con el elevador pero lo resolvieron rapido', date: '2025-12-02', initials: 'RV', color: '#DB2777', stars: 3 },

  // 2026 - 5 reseñas
  { text: 'Sin duda el mejor lugar donde me he quedado en la ciudad. Volvere la proxima vez', date: '2026-01-13', initials: 'TE', color: '#DB2777', stars: 5, city: 'Ciudad de México' },
  { text: 'Fantastic experience. I would absolutely stay here again no doubts', date: '2026-02-01', initials: 'JR', color: '#C9A84C', stars: 5 },
  { text: 'El departamento supero nuestras expectativas. Muy espacioso y con todo lo necesario', date: '2026-02-28', initials: 'MS', color: '#2563EB', stars: 5, city: 'Mérida' },
  { text: 'Nos quedamos tres semanas y todo fue impecable. El equipo siempre muy atento', date: '2026-03-08', initials: 'RF', color: '#7C3AED', stars: 5 },
  { text: 'Perfect for a long stay. Great kitchen, fast wifi and very comfortable bed', date: '2026-03-29', initials: 'CB', color: '#059669', stars: 5, city: 'Cancún' },
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
  return d.toLocaleDateString(lang === 'es' ? 'es-MX' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' });
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

      {/* Scroll */}
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
                <span className="text-xs" style={{ color: 'var(--muted)' }}>
                  {r.city && <span className="font-medium">{r.city} · </span>}
                  {formatDate(r.date, lang)}
                </span>
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