'use client';

import { useState } from 'react';

interface Props {
  url: string;
  title: string;
  lang: 'en' | 'es';
}

export default function ShareButton({ url, title, lang }: Props) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareLabel = lang === 'en' ? 'Share' : 'Compartir';
  const whatsappLabel = 'WhatsApp';
  const telegramLabel = 'Telegram';
  const facebookLabel = 'Facebook';
  const xLabel = 'X';
  const copyLabel = copied ? (lang === 'en' ? 'Copied!' : '¡Copiado!') : (lang === 'en' ? 'Copy link' : 'Copiar enlace');

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable — silently ignore.
    }
  }

  const waText = encodeURIComponent(`${title} — ${url}`);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="rounded-full flex items-center gap-1.5 px-3 h-9 text-sm font-medium"
        style={{ border: '1px solid var(--border)', color: 'var(--ink)', backgroundColor: 'var(--card)' }}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
        {shareLabel}
      </button>

      {open && (
        <div
          className="absolute z-20 mt-2 right-0 w-48 rounded-xl p-2 shadow-xl"
          style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}
        >
          <a
            href={`https://wa.me/?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm hover:opacity-80"
            style={{ color: 'var(--ink)' }}
          >
            🟢 {whatsappLabel}
          </a>
          <a
            href={`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm hover:opacity-80"
            style={{ color: 'var(--ink)' }}
          >
            ✈️ {telegramLabel}
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm hover:opacity-80"
            style={{ color: 'var(--ink)' }}
          >
            🔵 {facebookLabel}
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm hover:opacity-80"
            style={{ color: 'var(--ink)' }}
          >
            ⚫ {xLabel}
          </a>
          <button
            type="button"
            onClick={handleCopy}
            className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-lg text-sm hover:opacity-80"
            style={{ color: 'var(--ink)' }}
          >
            🔗 {copyLabel}
          </button>
        </div>
      )}
    </div>
  );
}
