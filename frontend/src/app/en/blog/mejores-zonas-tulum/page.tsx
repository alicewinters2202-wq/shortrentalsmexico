import type { Metadata } from 'next';
import MejoresZonasTulumContent from '@/components/pages/MejoresZonasTulumContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/en/blog/mejores-zonas-tulum',
    languages: {
      'es-MX': 'https://shortstaymx.com/blog/mejores-zonas-tulum',
      'en-US': 'https://shortstaymx.com/en/blog/mejores-zonas-tulum',
      'x-default': 'https://shortstaymx.com/blog/mejores-zonas-tulum',
    },
  },
  title: 'Best areas in Tulum to live | ShortStayMX',
  description: 'Aldea Zama, La Veleta and hotel zone: which is the best area of Tulum for you.',
};

export default function EnglishMejoresZonasTulum() {
  return <MejoresZonasTulumContent lang="en" />;
}
