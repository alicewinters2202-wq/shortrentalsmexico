import type { PropertyReview } from '@/types/preview';

function Stars({ count, size = 14 }: { count: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} width={size} height={size} viewBox="0 0 24 24"
          fill={s <= count ? 'var(--gold)' : 'none'}
          stroke={s <= count ? 'var(--gold)' : 'var(--border)'}
          strokeWidth="1.5"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function formatDate(iso: string, lang: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString(lang === 'en' ? 'en-US' : 'es-MX', { day: 'numeric', month: 'long', year: 'numeric' });
}

interface Props {
  slug: string;
  initialReviews: PropertyReview[];
  lang: string;
}

export default function PropertyReviews({ initialReviews, lang }: Props) {
  const reviews = initialReviews;

  const avg = reviews.length > 0
    ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)
    : null;

  if (reviews.length === 0) return null;

  return (
    <div>
      <div className="mb-6">
        <h2 className="font-serif text-2xl mb-1" style={{ color: 'var(--ink)' }}>
          {lang === 'en' ? 'Guest reviews' : 'Reseñas de huéspedes'}
        </h2>
        {avg && (
          <div className="flex items-center gap-2">
            <Stars count={Math.round(Number(avg))} size={15} />
            <span className="font-semibold text-sm" style={{ color: 'var(--ink)' }}>{avg}</span>
            <span className="text-sm" style={{ color: 'var(--muted)' }}>
              · {reviews.length} {lang === 'en' ? (reviews.length === 1 ? 'review' : 'reviews') : (reviews.length === 1 ? 'reseña' : 'reseñas')}
            </span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {reviews.map((r) => (
          <div key={r.id} className="rounded-2xl p-4" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <Stars count={r.rating} />
            <p className="text-sm leading-relaxed my-2" style={{ color: 'var(--ink)' }}>&ldquo;{r.comment}&rdquo;</p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium" style={{ color: 'var(--ink)' }}>{r.name}</span>
              <span className="text-xs" style={{ color: 'var(--muted)' }}>· {formatDate(r.createdAt, lang)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
