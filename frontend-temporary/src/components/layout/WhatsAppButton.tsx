'use client';
import { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { FaWhatsapp } from 'react-icons/fa';
import { trackWhatsAppClick } from '@/lib/analytics';
import { AGENTS, CAMILA } from '@/lib/agents';
import { useCityStore } from '@/store/city.store';

export default function WhatsAppButton() {
  const [isEn, setIsEn] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const storedCity = useCityStore((s) => s.city);

  useEffect(() => {
    const check = () => {
      const cookies = document.cookie.split(';').map(c => c.trim());
      const langCookie = cookies.find(c => c.startsWith('lang='));
      setIsEn(langCookie === 'lang=en');
    };
    check();
    const interval = setInterval(check, 500);
    return () => clearInterval(interval);
  }, []);

  // Route to the right city-specialist agent when relevant, falling back
  // to Camila (main agent, Ciudad de México) everywhere else. Only two
  // contexts carry a specific city: the listings page filtered by city
  // (read straight from the URL, so it's never stale), and a property
  // detail page (synced into the store by that page's CitySync).
  let agent = CAMILA;
  if (pathname === '/properties') {
    const cityParam = searchParams.get('city');
    if (cityParam) {
      const match = AGENTS.find((a) => a.cities.includes(cityParam));
      if (match) agent = match;
    }
  } else if (pathname?.startsWith('/properties/') && pathname !== '/properties/compare') {
    if (storedCity) {
      const match = AGENTS.find((a) => a.cities.includes(storedCity));
      if (match) agent = match;
    }
  }

  const message = isEn
    ? 'Hi, I saw your site, temporaryrentalsmexico.com, and I would like information about your available properties.'
    : 'Hola, vi su sitio, temporaryrentalsmexico.com, y quisiera información sobre sus propiedades disponibles.';

  const url = `https://wa.me/${agent.wa}?text=${encodeURIComponent(message)}`;

  return (
    <a href={url} target='_blank' rel='noopener noreferrer' onClick={() => trackWhatsAppClick('floating_button')} className='fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-110' style={{ backgroundColor: '#25D366' }} aria-label='WhatsApp'>
      <FaWhatsapp size={30} color='white' />
    </a>
  );
}
