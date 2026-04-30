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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;
    const text = lang === 'es'
      ? `Hola, me contacto desde ShortStayMX.\n\nNombre: ${name}\nEmail: ${email}\nMensaje: ${message}`
      : `Hello, I'm contacting from ShortStayMX.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const url = `https://wa.me/5215662548748?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

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

      <button
        type="submit"
        className="px-8 py-3 rounded-full text-sm font-semibold tracking-wide text-white transition-opacity hover:opacity-90"
        style={{ backgroundColor: 'var(--gold)' }}
      >
        {t.sendBtn}
      </button>
    </form>
  );
}
