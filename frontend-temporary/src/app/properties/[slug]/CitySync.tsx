'use client';

import { useEffect } from 'react';
import { useCityStore } from '@/store/city.store';

/** Renders nothing — just syncs the current property's city into the
 * global store so the floating WhatsApp button can route to the right
 * city-specialist agent. Re-syncs whenever `city` changes (e.g.
 * navigating from one property page directly to another). */
export default function CitySync({ city }: { city: string }) {
  const setCity = useCityStore((s) => s.setCity);
  useEffect(() => {
    setCity(city);
  }, [city, setCity]);
  return null;
}
