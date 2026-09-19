import type { Metadata } from 'next';
import ZonaRomanticaContent from '@/components/pages/ZonaRomanticaContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/en/colonias/puerto-vallarta/zona-romantica',
    languages: {
      'es-MX': 'https://shortstaymx.com/colonias/puerto-vallarta/zona-romantica',
      'en-US': 'https://shortstaymx.com/en/colonias/puerto-vallarta/zona-romantica',
      'x-default': 'https://shortstaymx.com/colonias/puerto-vallarta/zona-romantica',
    },
  },
  title: "Furnished rentals in Zona Romantica, Puerto Vallarta | ShortStayMX",
  description: "Furnished apartments in Zona Romantica, Puerto Vallarta. Cobblestone streets, art galleries, Playa los Muertos and the best restaurants in the most beloved neighborhood.",
};

export default function EnglishZonaRomanticaPage() {
  return <ZonaRomanticaContent lang="en" />;
}
