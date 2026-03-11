'use client';

import { useState } from 'react';
import { useLang } from '@/store/lang.store';
import { useT } from '@/lib/i18n';

export default function ContactForm() {
  const { lang } = useLang();
  const t = useT(lang);

  const [name,    setName]    = useState('');
  const [email,   setEmail]   = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [sent,    setSent]    = useState(false);
  const [error,   setError]   = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error();
      setSent(true);
    } catch {
      setError(lang === 'es' ? 'Error al enviar. Intenta de nuevo.' : 'Failed to send. Please try again.');
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="text-center py-10">
        <p className="text-4xl mb-3">✉️</p>
        <p className="font-serif text-xl" style={{ color: 'var(--ink)' }}>{t.contactSent}</p>
      </div>
    );
  }

  const inputStyle = {
    backgroundColor: 'var(--cream)',
    border: '1px solid var(--border)',
    color: 'var(--ink)',
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs uppercase tracking-widest font-semibold block mb-1.5" style={{ color: 'var(--muted)' }}>
            {t.nameLabel}
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl px-4 py-3 text-sm outline-none"
            style={inputStyle}
          />
        </div>
        <div>
          <label className="text-xs uppercase tracking-widest font-semibold block mb-1.5" style={{ color: 'var(--muted)' }}>
            {t.emailLabel}
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl px-4 py-3 text-sm outline-none"
            style={inputStyle}
          />
        </div>
      </div>

      <div>
        <label className="text-xs uppercase tracking-widest font-semibold block mb-1.5" style={{ color: 'var(--muted)' }}>
          {t.messageLabel}
        </label>
        <textarea
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-xl px-4 py-3 text-sm outline-none resize-none"
          style={inputStyle}
        />
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <button
        type="submit"
        disabled={sending}
        className="px-8 py-3 rounded-full text-sm font-semibold tracking-wide text-white transition-opacity hover:opacity-90 disabled:opacity-50"
        style={{ backgroundColor: 'var(--gold)' }}
      >
        {sending ? '...' : t.sendBtn}
      </button>
    </form>
  );
}
