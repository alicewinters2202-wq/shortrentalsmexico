'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLang } from '@/store/lang.store';
import { useT } from '@/lib/i18n';

const CITIES = [
  { name: 'Ciudad de México', label: 'CDMX' },
  { name: 'Guadalajara',      label: 'Guadalajara' },
  { name: 'Monterrey',        label: 'Monterrey' },
  { name: 'Santiago',         label: 'Santiago' },
  { name: 'Chapala',          label: 'Chapala' },
];

export default function SearchBar() {
  const router = useRouter();
  const { lang }  = useLang();
  const t         = useT(lang);

  const [destination, setDestination] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [checkIn,  setCheckIn]  = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests,   setGuests]   = useState(1);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSelect = (name: string) => {
    setDestination(name);
    setShowDropdown(false);
  };

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (destination) params.set('city', destination);
    if (guests > 1)  params.set('guests', String(guests));
    router.push(`/properties?${params.toString()}`);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Barra */}
      <div
        className="rounded-full shadow-2xl flex items-stretch divide-x overflow-visible"
        style={{ backgroundColor: '#fff', divideColor: 'var(--border)' } as React.CSSProperties}
      >
        {/* Destino */}
        <button
          type="button"
          className="flex-1 flex flex-col items-start px-6 py-3 hover:bg-gray-50 transition-colors rounded-l-full min-w-0"
          onClick={() => { setShowDropdown((v) => !v); inputRef.current?.focus(); }}
        >
          <span className="text-[10px] font-semibold tracking-widest uppercase text-gray-400">{t.destinationLabel}</span>
          <span className={`text-sm truncate ${destination ? 'text-gray-800 font-medium' : 'text-gray-400'}`}>
            {destination || t.chooseCity}
          </span>
        </button>

        {/* Check-in */}
        <div className="flex flex-col items-start px-6 py-3 hover:bg-gray-50 transition-colors min-w-[130px]">
          <span className="text-[10px] font-semibold tracking-widest uppercase text-gray-400">{t.arrival}</span>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="text-sm text-gray-800 bg-transparent outline-none w-full cursor-pointer"
            style={{ colorScheme: 'light' }}
          />
        </div>

        {/* Check-out */}
        <div className="flex flex-col items-start px-6 py-3 hover:bg-gray-50 transition-colors min-w-[130px]">
          <span className="text-[10px] font-semibold tracking-widest uppercase text-gray-400">{t.departure}</span>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="text-sm text-gray-800 bg-transparent outline-none w-full cursor-pointer"
            style={{ colorScheme: 'light' }}
          />
        </div>

        {/* Huéspedes + botón */}
        <div className="flex items-center gap-3 px-4 py-2 rounded-r-full">
          <div className="flex flex-col items-start">
            <span className="text-[10px] font-semibold tracking-widest uppercase text-gray-400">{t.guestsLabel}</span>
            <div className="flex items-center gap-2">
              <button type="button" onClick={() => setGuests((g) => Math.max(1, g - 1))}
                className="w-5 h-5 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-yellow-500 hover:text-yellow-500 transition-colors text-sm">−</button>
              <span className="text-sm font-medium w-4 text-center text-gray-800">{guests}</span>
              <button type="button" onClick={() => setGuests((g) => Math.min(20, g + 1))}
                className="w-5 h-5 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-yellow-500 hover:text-yellow-500 transition-colors text-sm">+</button>
            </div>
          </div>
          <button
            type="button"
            onClick={handleSearch}
            style={{ backgroundColor: 'var(--gold)' }}
            className="ml-2 px-5 py-3 rounded-full text-white text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            {t.searchBtn}
          </button>
        </div>
      </div>

      {/* Dropdown */}
      {showDropdown && (
        <div className="absolute top-full left-0 mt-3 w-full max-w-sm bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden">
          <p className="px-5 pt-4 pb-2 text-[11px] font-semibold tracking-widest uppercase text-gray-400">
            {t.popularDests}
          </p>
          {CITIES.map((c) => (
            <button
              key={c.name}
              type="button"
              onClick={() => handleSelect(c.name)}
              className="w-full flex items-center gap-4 px-5 py-3 hover:bg-gray-50 transition-colors text-left"
            >
              <span style={{ color: 'var(--gold)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </span>
              <div>
                <p className="text-sm font-medium text-gray-800">{c.label}</p>
                <p className="text-xs text-gray-400">{t.cityTagline(c.name)}</p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
