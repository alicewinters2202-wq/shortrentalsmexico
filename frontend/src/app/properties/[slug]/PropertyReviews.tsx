'use client';

import { useState } from 'react';
import { BACKEND, type PropertyReview } from '@/types/preview';

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

export default function PropertyReviews({ slug, initialReviews, lang }: Props) {
  const [reviews, setReviews] = useState<PropertyReview[]>(initialReviews);
  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const avg = reviews.length > 0
    ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)
    : null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rating || !comment.trim()) return;
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch(`${BACKEND}/api/reviews/${encodeURIComponent(slug)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), rating, comment: comment.trim() }),
      });
      if (!res.ok) throw new Error();
      const newReview: PropertyReview = await res.json();
      setReviews((prev) => [newReview, ...prev]);
      setRating(0);
      setName('');
      setComment('');
      setShowForm(false);
    } catch {
      setError(lang === 'en' ? 'Could not submit your review. Please try again.' : 'No se pudo enviar tu reseña. Intenta de nuevo.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
        <div>
          <h2 className="font-serif text-2xl mb-1" style={{ color: 'var(--ink)' }}>
            {lang === 'en' ? 'Guest reviews' : 'Reseñas de huéspedes'}
          </h2>
          {avg ? (
            <div className="flex items-center gap-2">
              <Stars count={Math.round(Number(avg))} size={15} />
              <span className="font-semibold text-sm" style={{ color: 'var(--ink)' }}>{avg}</span>
              <span className="text-sm" style={{ color: 'var(--muted)' }}>
                · {reviews.length} {lang === 'en' ? (reviews.length === 1 ? 'review' : 'reviews') : (reviews.length === 1 ? 'reseña' : 'reseñas')}
              </span>
            </div>
          ) : (
            <p className="text-sm" style={{ color: 'var(--muted)' }}>
              {lang === 'en' ? 'No reviews yet — be the first to share your stay.' : 'Aún no hay reseñas — sé el primero en compartir tu estancia.'}
            </p>
          )}
        </div>
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="px-5 py-2.5 rounded-full text-sm font-medium border transition-colors"
            style={{ borderColor: 'var(--border)', color: 'var(--ink)' }}
          >
            {lang === 'en' ? 'Write a review' : 'Escribir reseña'}
          </button>
        )}
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="rounded-2xl p-6 mb-6" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
          <div className="flex gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((s) => (
              <button
                key={s}
                type="button"
                onMouseEnter={() => setHovered(s)}
                onMouseLeave={() => setHovered(0)}
                onClick={() => setRating(s)}
                className="transition-transform hover:scale-110"
              >
                <svg width="26" height="26" viewBox="0 0 24 24"
                  fill={(hovered || rating) >= s ? 'var(--gold)' : 'none'}
                  stroke={(hovered || rating) >= s ? 'var(--gold)' : 'var(--border)'}
                  strokeWidth="1.5"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </button>
            ))}
          </div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={lang === 'en' ? 'Your name (optional)' : 'Tu nombre (opcional)'}
            className="w-full rounded-xl px-4 py-3 text-sm mb-3 outline-none"
            style={{ backgroundColor: 'var(--cream)', border: '1px solid var(--border)', color: 'var(--ink)' }}
          />
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder={lang === 'en' ? 'Tell us about your stay in this property...' : 'Cuéntanos tu experiencia en esta propiedad...'}
            rows={4}
            className="w-full rounded-xl px-4 py-3 text-sm mb-3 outline-none resize-none"
            style={{ backgroundColor: 'var(--cream)', border: '1px solid var(--border)', color: 'var(--ink)' }}
          />
          {error && <p className="text-xs mb-3" style={{ color: '#ef4444' }}>{error}</p>}
          <div className="flex gap-3">
            <button
              type="submit"
              disabled={!rating || !comment.trim() || submitting}
              className="px-6 py-2.5 rounded-full text-sm font-semibold text-white disabled:opacity-30 transition-opacity"
              style={{ backgroundColor: 'var(--gold)' }}
            >
              {submitting ? (lang === 'en' ? 'Submitting...' : 'Enviando...') : (lang === 'en' ? 'Submit review' : 'Enviar reseña')}
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="px-6 py-2.5 rounded-full text-sm font-medium"
              style={{ color: 'var(--muted)' }}
            >
              {lang === 'en' ? 'Cancel' : 'Cancelar'}
            </button>
          </div>
        </form>
      )}

      {reviews.length > 0 && (
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
      )}
    </div>
  );
}
