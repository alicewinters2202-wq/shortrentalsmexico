import type { Metadata } from 'next';
import ZonaHoteleraPVContent from '@/components/pages/ZonaHoteleraPVContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/en/colonias/puerto-vallarta/zona-hotelera',
    languages: {
      'es-MX': 'https://shortstaymx.com/colonias/puerto-vallarta/zona-hotelera',
      'en-US': 'https://shortstaymx.com/en/colonias/puerto-vallarta/zona-hotelera',
      'x-default': 'https://shortstaymx.com/colonias/puerto-vallarta/zona-hotelera',
    },
  },
  title: "Furnished rentals in Zona Hotelera, Puerto Vallarta | ShortStayMX",
  description: "Furnished apartments in Zona Hotelera, Puerto Vallarta. Beachfront living on Banderas Bay with panoramic ocean views and easy access to the city.",
};

export default function EnglishZonaHoteleraPVPage() {
  return <ZonaHoteleraPVContent lang="en" />;
}
