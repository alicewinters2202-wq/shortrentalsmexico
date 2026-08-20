'use client';

import { useState } from 'react';
import { useLang } from '@/store/lang.store';
import { useT } from '@/lib/i18n';

export default function ContactForm() {
  const { lang } = useLang();
  const t = useT(lang);

  const [name,    setName]    = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus]   = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) return;
    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, contact, message }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErrorMsg(data?.error || '');
        throw new Error();
      }
      setStatus('sent');
      setName('');
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
            {lang === 'en' ? 'Your email or phone' : 'Tu correo o teléfono'}
          </label>
          <input
            type="text"
            required
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="w-full rounded-xl px-4 py-3 text-sm outline-none"
            style={inputStyle}
          />
        </div>
      </div>

      <div>
        <label className="text-xs uppercase tracking-widest font-semibold block mb-1.5" style={{ color: 'var(--muted)' }}>
          {t.messageLabel} <span style={{ opacity: 0.6, textTransform: 'none', letterSpacing: 0 }}>({lang === 'en' ? 'optional' : 'opcional'})</span>
        </label>
        <textarea
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={lang === 'en' ? 'I want more info' : 'Quiero más información'}
          className="w-full rounded-xl px-4 py-3 text-sm outline-none resize-none"
          style={inputStyle}
        />
      </div>

      {status === 'error' && (
        <p className="text-xs" style={{ color: '#ef4444' }}>
          {lang === 'en' ? 'Could not send your message. Please try again.' : 'No se pudo enviar tu mensaje. Intenta de nuevo.'}
          {errorMsg ? ` (${errorMsg})` : ''}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending' || !name.trim() || !contact.trim()}
        className="px-8 py-3 rounded-full text-sm font-semibold tracking-wide text-white transition-opacity hover:opacity-90 disabled:opacity-40"
        style={{ backgroundColor: 'var(--gold)' }}
      >
        {status === 'sending' ? (lang === 'en' ? 'Sending...' : 'Enviando...') : t.sendBtn}
      </button>
    </form>
  );
}
