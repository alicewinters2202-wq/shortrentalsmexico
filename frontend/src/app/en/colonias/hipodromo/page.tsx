import type { Metadata } from 'next';
import HipodromoContent from '@/components/pages/HipodromoContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/en/colonias/hipodromo',
    languages: {
      'es-MX': 'https://shortstaymx.com/colonias/hipodromo',
      'en-US': 'https://shortstaymx.com/en/colonias/hipodromo',
      'x-default': 'https://shortstaymx.com/colonias/hipodromo',
    },
  },
  title: "Furnished rentals in Hipodromo Condesa, CDMX | ShortStayMX",
  description: "Furnished apartments in Hipodromo and Hipodromo Condesa, Mexico City. Modern buildings with pool, gym and roof garden at a better price than Polanco.",
};

export default function EnglishHipodromoPage() {
  return <HipodromoContent lang="en" />;
}
