import type { Metadata } from 'next';
import ZonaHoteleraContent from '@/components/pages/ZonaHoteleraContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/en/colonias/cancun/zona-hotelera',
    languages: {
      'es-MX': 'https://shortstaymx.com/colonias/cancun/zona-hotelera',
      'en-US': 'https://shortstaymx.com/en/colonias/cancun/zona-hotelera',
      'x-default': 'https://shortstaymx.com/colonias/cancun/zona-hotelera',
    },
  },
  title: "Furnished rentals in Zona Hotelera, Cancun | ShortStayMX",
  description: "Furnished apartments in Zona Hotelera, Cancun. Beachfront living with turquoise Caribbean Sea, luxury restaurants and vibrant nightlife on Kukulcan Boulevard.",
};

export default function EnglishZonaHoteleraPage() {
  return <ZonaHoteleraContent lang="en" />;
}
