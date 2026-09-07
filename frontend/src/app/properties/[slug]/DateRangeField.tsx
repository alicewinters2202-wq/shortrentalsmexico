'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  checkIn: string;
  checkOut: string;
  minStay: number;
  lang: 'en' | 'es';
  labelArrival: string;
  labelDeparture: string;
  onChange: (checkIn: string, checkOut: string) => void;
};

function toISO(d: Date): string {
  return d.toISOString().split('T')[0];
}

function addDays(iso: string, days: number): string {
  const d = new Date(iso + 'T12:00:00');
  d.setDate(d.getDate() + days);
  return toISO(d);
}

function formatShort(iso: string, locale: string): string {
  return new Date(iso + 'T12:00:00').toLocaleDateString(locale, { day: 'numeric', month: 'short' });
}

export default function DateRangeField({
  checkIn,
  checkOut,
  minStay,
  lang,
  labelArrival,
  labelDeparture,
  onChange,
}: Props) {
  const [open, setOpen] = useState(false);
  const [viewMonth, setViewMonth] = useState(() => {
    const d = checkIn ? new Date(checkIn + 'T12:00:00') : new Date();
    return new Date(d.getFullYear(), d.getMonth(), 1);
  });
  const [hovered, setHovered] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const locale = lang === 'en' ? 'en-US' : 'es-MX';
  const todayISO = toISO(new Date());
  const minCheckOut = checkIn ? addDays(checkIn, minStay) : null;

  const weekdayLabels = Array.from({ length: 7 }, (_, i) => {
    // 2023-01-01 was a Sunday — use it as a stable reference week
    const d = new Date(2023, 0, 1 + i);
    return d.toLocaleDateString(locale, { weekday: 'short' }).replace('.', '');
  });

  const year = viewMonth.getFullYear();
  const month = viewMonth.getMonth();
  const firstOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startOffset = firstOfMonth.getDay(); // 0 = Sunday

  const cells: Array<{ iso: string; day: number } | null> = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let day = 1; day <= daysInMonth; day++) {
    const iso = toISO(new Date(year, month, day));
    cells.push({ iso, day });
  }

  function isDisabled(iso: string): boolean {
    if (iso < todayISO) return true;
    if (checkIn && !checkOut && minCheckOut && iso > checkIn && iso < minCheckOut) return true;
    return false;
  }

  function isInRange(iso: string): boolean {
    const end = checkOut || (hovered && hovered > (checkIn || '') ? hovered : null);
    if (!checkIn || !end) return false;
    return iso > checkIn && iso < end;
  }

  function handleDayClick(iso: string) {
    if (isDisabled(iso)) return;
    if (!checkIn || checkOut) {
      onChange(iso, '');
      return;
    }
    if (iso <= checkIn) {
      onChange(iso, '');
      return;
    }
    onChange(checkIn, iso);
    setOpen(false);
  }

  function changeMonth(delta: number) {
    setViewMonth(new Date(year, month + delta, 1));
  }

  const monthLabel = viewMonth.toLocaleDateString(locale, { month: 'long', year: 'numeric' });
  const minStayHint =
    lang === 'en' ? `${minStay}-night minimum stay` : `Estancia mínima de ${minStay} noches`;
  const clearLabel = lang === 'en' ? 'Clear dates' : 'Borrar fechas';
  const selectLabel = lang === 'en' ? 'Select check-out' : 'Selecciona la salida';

  return (
    <div ref={rootRef} className="relative">
      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="rounded-xl p-3 text-left"
          style={{ border: '1px solid var(--border)' }}
        >
          <p className="text-[10px] uppercase tracking-widest font-semibold mb-1" style={{ color: 'var(--muted)' }}>
            {labelArrival}
          </p>
          <span className="text-sm" style={{ color: checkIn ? 'var(--ink)' : 'var(--muted)' }}>
            {checkIn ? formatShort(checkIn, locale) : '—'}
          </span>
        </button>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="rounded-xl p-3 text-left"
          style={{ border: '1px solid var(--border)' }}
        >
          <p className="text-[10px] uppercase tracking-widest font-semibold mb-1" style={{ color: 'var(--muted)' }}>
            {labelDeparture}
          </p>
          <span className="text-sm" style={{ color: checkOut ? 'var(--ink)' : 'var(--muted)' }}>
            {checkOut ? formatShort(checkOut, locale) : '—'}
          </span>
        </button>
      </div>

      {open && (
        <div
          className="absolute z-20 mt-2 w-full rounded-2xl p-4 shadow-2xl"
          style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}
        >
          <div className="flex items-center justify-between mb-3">
            <button
              type="button"
              onClick={() => changeMonth(-1)}
              className="w-7 h-7 rounded-full flex items-center justify-center transition-colors"
              style={{ border: '1px solid var(--border)', color: 'var(--muted)' }}
              aria-label={lang === 'en' ? 'Previous month' : 'Mes anterior'}
            >
              ‹
            </button>
            <span className="font-serif text-sm capitalize" style={{ color: 'var(--ink)' }}>
              {monthLabel}
            </span>
            <button
              type="button"
              onClick={() => changeMonth(1)}
              className="w-7 h-7 rounded-full flex items-center justify-center transition-colors"
              style={{ border: '1px solid var(--border)', color: 'var(--muted)' }}
              aria-label={lang === 'en' ? 'Next month' : 'Mes siguiente'}
            >
              ›
            </button>
          </div>

          <div className="grid grid-cols-7 gap-y-1 mb-1">
            {weekdayLabels.map((w) => (
              <span
                key={w}
                className="text-center text-[10px] font-semibold uppercase"
                style={{ color: 'var(--muted)' }}
              >
                {w}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-y-1">
            {cells.map((cell, idx) => {
              if (!cell) return <span key={`blank-${idx}`} />;
              const { iso, day } = cell;
              const disabled = isDisabled(iso);
              const isStart = iso === checkIn;
              const isEnd = iso === checkOut;
              const inRange = isInRange(iso);

              let bg = 'transparent';
              let color = 'var(--ink)';
              if (disabled) color = 'var(--border)';
              if (inRange) bg = 'rgba(201,168,76,0.16)';
              if (isStart || isEnd) {
                bg = 'var(--gold)';
                color = '#1C1C1E';
              }

              return (
                <button
                  key={iso}
                  type="button"
                  disabled={disabled}
                  onClick={() => handleDayClick(iso)}
                  onMouseEnter={() => setHovered(iso)}
                  className="h-8 mx-auto w-8 rounded-full text-xs font-medium transition-colors"
                  style={{
                    backgroundColor: bg,
                    color,
                    cursor: disabled ? 'not-allowed' : 'pointer',
                  }}
                >
                  {day}
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between mt-3 pt-3" style={{ borderTop: '1px solid var(--border)' }}>
            <span className="text-[11px]" style={{ color: 'var(--muted)' }}>
              {checkIn && !checkOut ? selectLabel : minStayHint}
            </span>
            {(checkIn || checkOut) && (
              <button
                type="button"
                onClick={() => onChange('', '')}
                className="text-[11px] font-semibold"
                style={{ color: 'var(--gold)' }}
              >
                {clearLabel}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
