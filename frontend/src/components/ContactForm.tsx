'use client';

import { useState } from 'react';
import { useLang } from '@/store/lang.store';
import { useT } from '@/lib/i18n';

export default function ContactForm() {
  const { lang } = useLang();
  const t = useT(lang);

  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus]   = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contact, message }),
      });
      if (!res.ok) throw new Error();
      setStatus('sent');
      setContact('');
      setMessage('');
    } catch {
      setStatus('error');
    }
  };

  const inputStyle = {
    backgroundColor: 'var(--cream)',
    border: '1px solid var(--border)',
    color: 'var(--ink)',
  };

  if (status === 'sent') {
    return (
      <div className="rounded-2xl p-6 text-center" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
        <p className="font-serif text-lg mb-1" style={{ color: 'var(--ink)' }}>
          {lang === 'en' ? 'Message sent' : 'Mensaje enviado'}
        </p>
        <p className="text-sm" style={{ color: 'var(--muted)' }}>
          {lang === 'en' ? "We'll get back to you soon." : 'Te responderemos pronto.'}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="text-xs uppercase tracking-widest font-semibold block mb-1.5" style={{ color: 'var(--muted)' }}>
          {lang === 'en' ? 'Your email or phone (optional)' : 'Tu correo o teléfono (opcional)'}
        </label>
        <input
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className="w-full rounded-xl px-4 py-3 text-sm outline-none"
          style={inputStyle}
        />
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

      {status === 'error' && (
        <p className="text-xs" style={{ color: '#ef4444' }}>
          {lang === 'en' ? 'Could not send your message. Please try again.' : 'No se pudo enviar tu mensaje. Intenta de nuevo.'}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending' || !message.trim()}
        className="px-8 py-3 rounded-full text-sm font-semibold tracking-wide text-white transition-opacity hover:opacity-90 disabled:opacity-40"
        style={{ backgroundColor: 'var(--gold)' }}
      >
        {status === 'sending' ? (lang === 'en' ? 'Sending...' : 'Enviando...') : t.sendBtn}
      </button>
    </form>
  );
}
