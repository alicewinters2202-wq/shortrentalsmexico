'use client';

import { useState } from 'react';
import { useLang } from '@/store/lang.store';
import { useT } from '@/lib/i18n';

export default function ReviewForm() {
  const { lang } = useLang();
  const t = useT(lang);

  const [stars, setStars]     = useState(0);
  const [hovered, setHovered] = useState(0);
  const [name, setName]       = useState('');
  const [text, setText]       = useState('');
  const [sent, setSent]       = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stars || !text.trim()) return;
    try {
      await fetch('/api/review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, stars, text }),
      });
    } catch { /* silencioso */ }
    setSent(true);
  };

  if (sent) {
    return (
      <div
        className="rounded-2xl p-8 text-center"
        style={{ backgroundColor: 'var(--cream)', border: '1px solid var(--border)' }}
      >
        <p className="text-3xl mb-3">🙏</p>
        <p className="font-serif text-xl mb-1" style={{ color: 'var(--ink)' }}>
          {lang === 'es' ? '¡Gracias por tu reseña!' : 'Thank you for your review!'}
        </p>
        <p className="text-sm" style={{ color: 'var(--muted)' }}>
          {lang === 'es' ? 'Tu opinión nos ayuda a mejorar.' : 'Your feedback helps us improve.'}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl p-6"
      style={{ backgroundColor: 'var(--cream)', border: '1px solid var(--border)' }}
    >
      <p className="font-serif text-xl mb-5" style={{ color: 'var(--ink)' }}>
        {lang === 'es' ? 'Deja tu reseña' : 'Leave a review'}
      </p>

      {/* Stars selector */}
      <div className="flex gap-1 mb-5">
        {[1, 2, 3, 4, 5].map((s) => (
          <button
            key={s}
            type="button"
            onMouseEnter={() => setHovered(s)}
            onMouseLeave={() => setHovered(0)}
            onClick={() => setStars(s)}
            className="transition-transform hover:scale-110"
          >
            <svg width="28" height="28" viewBox="0 0 24 24"
              fill={(hovered || stars) >= s ? 'var(--gold)' : 'none'}
              stroke={(hovered || stars) >= s ? 'var(--gold)' : 'var(--border)'}
              strokeWidth="1.5"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </button>
        ))}
        {stars > 0 && (
          <span className="ml-2 text-sm self-center" style={{ color: 'var(--muted)' }}>
            {['', '😕', '😐', '🙂', '😊', '🤩'][stars]}
          </span>
        )}
      </div>

      {/* Name */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={lang === 'es' ? 'Tu nombre (opcional)' : 'Your name (optional)'}
        className="w-full rounded-xl px-4 py-3 text-sm mb-3 outline-none transition-colors"
        style={{
          backgroundColor: 'var(--card)',
          border: '1px solid var(--border)',
          color: 'var(--ink)',
        }}
      />

      {/* Text */}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={lang === 'es' ? 'Cuéntanos tu experiencia...' : 'Tell us about your stay...'}
        rows={4}
        className="w-full rounded-xl px-4 py-3 text-sm mb-4 outline-none resize-none transition-colors"
        style={{
          backgroundColor: 'var(--card)',
          border: '1px solid var(--border)',
          color: 'var(--ink)',
        }}
      />

      <button
        type="submit"
        disabled={!stars || !text.trim()}
        className="w-full py-3 rounded-full text-sm font-semibold tracking-wide transition-opacity disabled:opacity-30"
        style={{ backgroundColor: 'var(--gold)', color: '#fff' }}
      >
        {lang === 'es' ? 'Enviar reseña' : 'Submit review'}
      </button>
    </form>
  );
}
