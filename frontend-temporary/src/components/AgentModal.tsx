'use client';

import { useEffect } from 'react';
import { formatMXN } from '@/types/preview';
import { useT } from '@/lib/i18n';
import { useLang } from '@/store/lang.store';
import { AGENTS } from '@/lib/agents';

interface Quote {
  address: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  total: number;
  guests: number;
  city?: string;
}

interface Props {
  quote: Quote;
  onClose: () => void;
}

function buildWaMessage(agent: typeof AGENTS[0], quote: Quote, lang: 'es' | 'en') {
  if (lang === 'en') {
    return encodeURIComponent(
      `Hello ${agent.name}! I'm interested in the property at:\n📍 ${quote.address}\n\n` +
      `📅 Check-in: ${quote.checkIn}\n📅 Check-out: ${quote.checkOut}\n` +
      `🌙 Nights: ${quote.nights}\n💰 Estimated total: $${quote.total.toLocaleString()} MXN\n` +
      `👥 Guests: ${quote.guests}\n\nCould you help me with availability?`
    );
  }
  return encodeURIComponent(
    `Hola ${agent.name}, me interesa la propiedad en:\n📍 ${quote.address}\n\n` +
    `📅 Entrada: ${quote.checkIn}\n📅 Salida: ${quote.checkOut}\n` +
    `🌙 Noches: ${quote.nights}\n💰 Total estimado: $${quote.total.toLocaleString()} MXN\n` +
    `👥 Huéspedes: ${quote.guests}\n\n¿Pueden confirmar disponibilidad?`
  );
}

export default function AgentModal({ quote, onClose }: Props) {
  const { lang } = useLang();
  const t = useT(lang);

  // Filtrar agentes según la ciudad de la propiedad
  const agents = quote.city
    ? AGENTS.filter((a) => a.cities.includes(quote.city!))
    : AGENTS;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      <div
        className="relative w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden"
        style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b" style={{ borderColor: 'var(--border)' }}>
          <div>
            <h2 className="font-serif text-2xl" style={{ color: 'var(--ink)' }}>{t.modalTitle}</h2>
            <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>{t.modalSub}</p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center text-lg transition-colors hover:opacity-70"
            style={{ color: 'var(--muted)', backgroundColor: 'var(--cream)' }}
          >
            ×
          </button>
        </div>

        {/* Resumen */}
        <div className="px-6 pt-5 pb-4">
          <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: 'var(--muted)' }}>
            {t.quoteLabel}
          </p>
          <div className="rounded-2xl p-4 grid grid-cols-2 gap-3 text-sm" style={{ backgroundColor: 'var(--cream)' }}>
            <div>
              <p className="text-xs" style={{ color: 'var(--muted)' }}>{t.checkInLabel}</p>
              <p className="font-semibold mt-0.5" style={{ color: 'var(--ink)' }}>{quote.checkIn}</p>
            </div>
            <div>
              <p className="text-xs" style={{ color: 'var(--muted)' }}>{t.checkOutLabel}</p>
              <p className="font-semibold mt-0.5" style={{ color: 'var(--ink)' }}>{quote.checkOut}</p>
            </div>
            <div>
              <p className="text-xs" style={{ color: 'var(--muted)' }}>{t.nightsLabel}</p>
              <p className="font-semibold mt-0.5" style={{ color: 'var(--ink)' }}>{quote.nights}</p>
            </div>
            <div>
              <p className="text-xs" style={{ color: 'var(--muted)' }}>{t.guestsModal}</p>
              <p className="font-semibold mt-0.5" style={{ color: 'var(--ink)' }}>{quote.guests}</p>
            </div>
            <div className="col-span-2 pt-2 border-t" style={{ borderColor: 'var(--border)' }}>
              <p className="text-xs" style={{ color: 'var(--muted)' }}>{t.totalLabel}</p>
              <p className="font-serif text-xl font-semibold mt-0.5" style={{ color: 'var(--gold)' }}>
                {formatMXN(quote.total)}
              </p>
            </div>
          </div>
        </div>

        {/* Agentes */}
        <div className="px-6 pb-6">
          <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: 'var(--muted)' }}>
            {t.agentsTitle}
          </p>
          <div className={`grid gap-3 ${agents.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
            {agents.map((agent) => {
              const msg = buildWaMessage(agent, quote, lang);
              const url = `https://wa.me/${agent.wa}?text=${msg}`;
              return (
                <a
                  key={agent.id}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl p-4 flex flex-col items-center gap-3 transition-colors hover:opacity-90"
                  style={{ backgroundColor: 'var(--cream)', border: '1px solid var(--border)' }}
                >
                  {agent.photo ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img src={agent.photo} alt={agent.name} className="w-16 h-16 rounded-full object-cover" />
                  ) : (
                    <div className="w-16 h-16 rounded-full flex items-center justify-center font-serif text-xl font-bold text-white"
                      style={{ backgroundColor: agent.color }}>
                      {agent.initials}
                    </div>
                  )}
                  <div className="text-center">
                    <p className="font-semibold text-sm" style={{ color: 'var(--ink)' }}>{agent.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>{t.agentRole}</p>
                    <p className="text-[10px] mt-1 font-semibold tracking-widest uppercase" style={{ color: 'var(--gold)' }}>📍 {agent.zone}</p>
                  </div>
                  <div className="w-full flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-semibold text-white"
                    style={{ backgroundColor: '#25D366' }}>
                    <span>💬</span>
                    <span>{t.sendQuote}</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
