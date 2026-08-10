'use client';

import { useState } from 'react';
import { Property, calcPrice, formatMXN } from '@/data/properties';

export default function BookingPanel({ property }: { property: Property }) {
  const [checkIn,  setCheckIn]  = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests,   setGuests]   = useState(1);

  const nights = checkIn && checkOut
    ? Math.max(0, Math.round((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86_400_000))
    : 0;

  const total = nights > 0 ? calcPrice(property.pricePerNight, nights) : null;
  const disc  = nights >= 15 ? 12 : nights >= 10 ? 7 : nights >= 7 ? 4 : 0;

  return (
    <div className="sticky top-24 bg-white border border-[--border] rounded-3xl p-6 shadow-xl space-y-5">
      <div>
        <span className="font-serif text-2xl text-[--ink]">{formatMXN(property.pricePerNight)}</span>
        <span className="text-[--muted] text-sm"> / noche</span>
      </div>

      {property.isAvailable ? (
        <>
          {/* Fechas */}
          <div className="grid grid-cols-2 gap-2">
            <div className="border border-[--border] rounded-xl p-3">
              <p className="text-[10px] uppercase tracking-widest text-[--muted] font-semibold mb-1">Llegada</p>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="text-sm text-[--ink] bg-transparent outline-none w-full"
              />
            </div>
            <div className="border border-[--border] rounded-xl p-3">
              <p className="text-[10px] uppercase tracking-widest text-[--muted] font-semibold mb-1">Salida</p>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="text-sm text-[--ink] bg-transparent outline-none w-full"
              />
            </div>
          </div>

          {/* Huéspedes */}
          <div className="border border-[--border] rounded-xl p-3">
            <p className="text-[10px] uppercase tracking-widest text-[--muted] font-semibold mb-2">Huéspedes</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-[--ink]">{guests} huésped{guests !== 1 ? 'es' : ''}</span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setGuests((g) => Math.max(1, g - 1))}
                  className="w-7 h-7 rounded-full border border-[--border] flex items-center justify-center text-[--muted] hover:border-[--gold] hover:text-[--gold] transition-colors"
                >−</button>
                <button
                  onClick={() => setGuests((g) => Math.min(property.maxGuests, g + 1))}
                  className="w-7 h-7 rounded-full border border-[--border] flex items-center justify-center text-[--muted] hover:border-[--gold] hover:text-[--gold] transition-colors"
                >+</button>
              </div>
            </div>
            <p className="text-xs text-[--muted] mt-1">Máximo {property.maxGuests} huéspedes</p>
          </div>

          {/* Desglose de precio */}
          {total !== null && nights > 0 && (
            <div className="border border-[--border] rounded-xl p-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-[--muted]">{formatMXN(property.pricePerNight)} × {nights} noches</span>
                <span className="text-[--ink]">{formatMXN(property.pricePerNight * nights)}</span>
              </div>
              {disc > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-emerald-600">Descuento estancia larga (-{disc}%)</span>
                  <span className="text-emerald-600">-{formatMXN(property.pricePerNight * nights - total)}</span>
                </div>
              )}
              <div className="border-t border-[--border] pt-2 flex justify-between font-semibold">
                <span className="text-[--ink]">Total</span>
                <span style={{ color: 'var(--gold)' }} className="text-lg">{formatMXN(total)}</span>
              </div>
            </div>
          )}

          {/* Botón reservar */}
          <button
            style={{ backgroundColor: total ? 'var(--gold)' : '#D1D5DB' }}
            className="w-full py-4 rounded-full text-white font-semibold tracking-wide transition-opacity hover:opacity-90 disabled:cursor-not-allowed"
            disabled={!total}
          >
            {total ? `Reservar ${nights} noche${nights !== 1 ? 's' : ''}` : 'Selecciona las fechas'}
          </button>

          <p className="text-center text-xs text-[--muted]">No se realizará ningún cargo todavía</p>
        </>
      ) : (
        <div className="text-center py-6">
          <p className="font-serif text-xl text-[--ink] mb-2">Actualmente ocupado</p>
          <p className="text-[--muted] text-sm mb-6">Esta propiedad no está disponible en este momento.</p>
          <a
            href={`tel:${property.contactPhone.replace(/\s|-/g, '')}`}
            style={{ backgroundColor: 'var(--gold)' }}
            className="inline-block px-6 py-3 rounded-full text-white text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Consultar disponibilidad
          </a>
        </div>
      )}
    </div>
  );
}
