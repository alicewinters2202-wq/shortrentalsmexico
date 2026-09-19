import type { Metadata } from 'next';
import RomaNorteContent from '@/components/pages/RomaNorteContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/en/colonias/roma-norte',
    languages: {
      'es-MX': 'https://shortstaymx.com/colonias/roma-norte',
      'en-US': 'https://shortstaymx.com/en/colonias/roma-norte',
      'x-default': 'https://shortstaymx.com/colonias/roma-norte',
    },
  },
  title: "Furnished rentals in Roma Norte, CDMX | ShortStayMX",
  description: "Furnished apartments in Roma Norte, the most vibrant neighborhood in Mexico City. Specialty cafes, award-winning restaurants, Parque Mexico and cultural life at your door.",
};

export default function EnglishRomaNortePage() {
  return <RomaNorteContent lang="en" />;
}
