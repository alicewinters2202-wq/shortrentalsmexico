'use client';

import { useState } from 'react';
import { PropertyPreview, formatMXN } from '@/types/preview';
import { useLang } from '@/store/lang.store';
import { useT } from '@/lib/i18n';
import AgentModal from '@/components/AgentModal';

const MIN_NIGHTS = 10;
const WA_NUMBER  = '525572716417';

function addDays(date: string, days: number): string {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d.toISOString().split('T')[0];
}

function today(): string {
  return new Date().toISOString().split('T')[0];
}

export default function BookingPanelPreview({ property }: { property: PropertyPreview }) {
  const { lang }   = useLang();
  const t          = useT(lang);
  const dailyRate  = property.pricePerMonth / 30;

  const [checkIn,  setCheckIn]  = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests,   setGuests]   = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [withCleaning, setWithCleaning] = useState(true);

  const nights =
    checkIn && checkOut
      ? Math.max(0, Math.round((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86_400_000))
      : 0;

  const tooShort    = nights > 0 && nights < MIN_NIGHTS;
  const validStay   = nights >= MIN_NIGHTS;
  const rentTotal   = validStay ? Math.round(dailyRate * nights) : null;
  const cleaningFee = validStay && withCleaning ? Math.ceil(nights / 7) * 500 : 0;
  const total       = rentTotal !== null ? rentTotal + cleaningFee : null;

  function handleCheckInChange(val: string) {
    setCheckIn(val);
    if (checkOut && val) {
      const minOut = addDays(val, MIN_NIGHTS);
      if (checkOut < minOut) setCheckOut(minOut);
    }
  }

  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    lang === 'en'
      ? 'Hello! I need to rent a property for more than 1 month. Could you give me more information?'
      : 'Hola, me interesa rentar una propiedad por más de 1 mes. ¿Podrían darme más información?'
  )}`;

  const badges = [
    property.balcony      && { label: t.balcony,             icon: '🌿' },
    property.petFriendlyNegotiable
      ? { label: t.petFriendlyNeg, icon: '🐾' }
      : property.petFriendly && { label: t.petFriendly, icon: '🐾' },
    property.parkingSpots > 0 && { label: t.parking(property.parkingSpots), icon: '🚗' },
    property.sqMeters     > 0 && { label: `${property.sqMeters} m²`,        icon: '📐' },
  ].filter(Boolean) as { label: string; icon: string }[];

  return (
    <>
      <div
        className="sticky top-24 rounded-3xl p-6 shadow-2xl space-y-5"
        style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}
      >
        {/* Precio */}
        <div>
          <span className="font-serif text-3xl" style={{ color: 'var(--ink)' }}>
            {formatMXN(Math.round(dailyRate))}
          </span>
          <span className="text-sm ml-1" style={{ color: 'var(--muted)' }}>{t.perDay}</span>
          <p className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>
            ({formatMXN(property.pricePerMonth + 2000)} {t.perMonth} · 🧹 {t.cleaningFee})
          </p>
        </div>

        {/* Fechas */}
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: t.arrival,   value: checkIn,  min: today(),                         setter: handleCheckInChange },
            { label: t.departure, value: checkOut, min: checkIn ? addDays(checkIn, MIN_NIGHTS) : today(), setter: setCheckOut },
          ].map(({ label, value, min, setter }) => (
            <div
              key={label}
              className="rounded-xl p-3"
              style={{ border: '1px solid var(--border)' }}
            >
              <p className="text-[10px] uppercase tracking-widest font-semibold mb-1" style={{ color: 'var(--muted)' }}>
                {label}
              </p>
              <input
                type="date"
                value={value}
                min={min}
                onChange={(e) => setter(e.target.value)}
                className="text-sm bg-transparent outline-none w-full"
                style={{ color: 'var(--ink)' }}
              />
            </div>
          ))}
        </div>

        {/* Advertencia mínimo */}
        {tooShort && (
          <p className="text-xs rounded-xl px-3 py-2 bg-red-900/30 text-red-400">
            {t.minWarning}
          </p>
        )}

        {/* Huéspedes */}
        <div className="rounded-xl p-3" style={{ border: '1px solid var(--border)' }}>
          <p className="text-[10px] uppercase tracking-widest font-semibold mb-2" style={{ color: 'var(--muted)' }}>
            {t.guestsLabel}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-sm" style={{ color: 'var(--ink)' }}>
              {guests} {guests !== 1 ? t.guestsPlural : t.guestSingular}
            </span>
            <div className="flex items-center gap-3">
              {[
                { icon: '−', action: () => setGuests((g) => Math.max(1, g - 1)) },
                { icon: '+', action: () => setGuests((g) => Math.min(property.maxGuests, g + 1)) },
              ].map(({ icon, action }) => (
                <button
                  key={icon}
                  onClick={action}
                  className="w-7 h-7 rounded-full flex items-center justify-center transition-colors"
                  style={{ border: '1px solid var(--border)', color: 'var(--muted)' }}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>
          <p className="text-xs mt-1" style={{ color: 'var(--muted)' }}>{t.maxGuests(property.maxGuests)}</p>
        </div>

        {/* Toggle limpieza */}
        <div
          className="rounded-xl p-3 flex items-center justify-between gap-3"
          style={{ border: '1px solid var(--border)' }}
        >
          <div>
            <p className="text-sm font-medium" style={{ color: 'var(--ink)' }}>🧹 {t.cleaningFee}</p>
            <p className="text-[10px] mt-0.5" style={{ color: 'var(--muted)' }}>
              $500 {lang === 'en' ? 'per week · towel & sheet change' : 'por semana · cambio de toallas y sábanas'}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setWithCleaning((v) => !v)}
            className="flex-shrink-0 w-11 h-6 rounded-full transition-colors duration-200 relative"
            style={{ backgroundColor: withCleaning ? 'var(--gold)' : 'var(--border)' }}
          >
            <span
              className="absolute top-[2px] w-5 h-5 rounded-full bg-white shadow transition-all duration-200"
              style={{ left: withCleaning ? '22px' : '2px' }}
            />
          </button>
        </div>

        {/* Desglose */}
        {total !== null && rentTotal !== null && (
          <div className="rounded-xl p-4 space-y-2" style={{ border: '1px solid var(--border)' }}>
            <div className="flex justify-between text-sm">
              <span style={{ color: 'var(--muted)' }}>{formatMXN(Math.round(dailyRate))} × {nights} {t.nightsLabel}</span>
              <span style={{ color: 'var(--ink)' }}>{formatMXN(rentTotal)}</span>
            </div>
            {withCleaning && cleaningFee > 0 && (
              <div className="flex justify-between text-sm">
                <span style={{ color: 'var(--muted)' }}>🧹 {t.cleaningFee} ({Math.ceil(nights / 7)} sem)</span>
                <span style={{ color: 'var(--ink)' }}>{formatMXN(cleaningFee)}</span>
              </div>
            )}
            <div className="flex justify-between font-semibold pt-2" style={{ borderTop: '1px solid var(--border)' }}>
              <span style={{ color: 'var(--ink)' }}>Total</span>
              <span className="font-serif text-lg" style={{ color: 'var(--gold)' }}>{formatMXN(total)}</span>
            </div>
          </div>
        )}

        {/* Botón Reservar / Ocupada */}
        {property.available ? (
          <>
            <button
              style={{ backgroundColor: validStay ? 'var(--gold)' : '#444' }}
              disabled={!validStay}
              onClick={() => validStay && setShowModal(true)}
              className="w-full py-4 rounded-full text-white font-semibold tracking-wide transition-opacity hover:opacity-90 disabled:cursor-not-allowed"
            >
              {validStay ? t.reserveBtn(nights) : t.selectDates}
            </button>
            <p className="text-center text-xs" style={{ color: 'var(--muted)' }}>{t.noCharge}</p>
          </>
        ) : (
          <div className="rounded-2xl p-4 text-center" style={{ backgroundColor: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)' }}>
            <p className="font-semibold text-sm text-red-400">{t.occupiedBanner}</p>
            {property.availableFrom && (
              <p className="text-xs mt-1" style={{ color: 'var(--muted)' }}>
                {t.occupiedRange(
                  new Date((property.occupiedSince ?? property.availableFrom!) + 'T12:00:00').toLocaleDateString(lang === 'en' ? 'en-US' : 'es-MX', { month: 'long' }),
                  new Date(property.availableFrom + 'T12:00:00').toLocaleDateString(lang === 'en' ? 'en-US' : 'es-MX', { month: 'long', year: 'numeric' }),
                )}
              </p>
            )}
          </div>
        )}

        {/* Contacto especial — 3+ meses */}
        <a
          href={`https://wa.me/525662548748?text=${encodeURIComponent(
            lang === 'en'
              ? `Hello, I'm interested in a long-term stay (3+ months) at ${property.address}. Could you give me more information about special conditions?`
              : `Hola, me interesa una estancia larga (más de 3 meses) en ${property.address}. ¿Me pueden dar información sobre las condiciones especiales?`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-2xl p-4 transition-colors hover:opacity-90"
          style={{ backgroundColor: 'rgba(180,130,255,0.08)', border: '1px solid rgba(180,130,255,0.25)' }}
        >
          <span className="text-2xl">🏠</span>
          <div className="flex-1">
            <p className="text-xs font-semibold" style={{ color: 'var(--ink)' }}>{t.longStayPanelTitle}</p>
            <p className="text-[10px] mt-0.5" style={{ color: 'var(--muted)' }}>{t.longStayPanelSub}</p>
          </div>
          <span className="text-xs font-semibold whitespace-nowrap" style={{ color: 'var(--gold)' }}>{t.writeUs}</span>
        </a>

        {/* Badges */}
        {badges.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1" style={{ borderTop: '1px solid var(--border)' }}>
            {badges.map((b) => (
              <span
                key={b.label}
                className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-full"
                style={{ color: 'var(--ink)', backgroundColor: 'var(--cream)', border: '1px solid var(--border)' }}
              >
                {b.icon} {b.label}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Modal agentes */}
      {showModal && total !== null && (
        <AgentModal
          quote={{
            address:  property.address,
            checkIn,
            checkOut,
            nights,
            total,
            guests,
            city: property.city,
          }}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}
