'use client';

import { useState } from 'react';

interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({ items }: { items: readonly FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-2xl overflow-hidden transition-all"
          style={{ backgroundColor: 'rgba(28,28,30,0.85)', border: '1px solid var(--border)', backdropFilter: 'blur(12px)' }}
        >
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
          >
            <span className="font-serif text-base sm:text-lg" style={{ color: 'var(--ink)' }}>
              {item.q}
            </span>
            <span
              className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold transition-transform duration-300"
              style={{
                backgroundColor: open === i ? 'var(--gold)' : 'rgba(255,255,255,0.08)',
                color: open === i ? '#fff' : 'var(--muted)',
                transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
              }}
            >
              +
            </span>
          </button>

          <div
            className="overflow-hidden transition-all duration-300"
            style={{ maxHeight: open === i ? '600px' : '0px' }}
          >
            <div className="px-6 pb-6" style={{ borderTop: '1px solid var(--border)' }}>
              {item.a.split('\n\n').map((para, j) => (
                <p key={j} className="text-sm leading-relaxed mt-4" style={{ color: 'var(--muted)' }}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
