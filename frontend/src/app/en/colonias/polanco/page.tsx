import type { Metadata } from 'next';
import PolancoContent from '@/components/pages/PolancoContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/en/colonias/polanco',
    languages: {
      'es-MX': 'https://shortstaymx.com/colonias/polanco',
      'en-US': 'https://shortstaymx.com/en/colonias/polanco',
      'x-default': 'https://shortstaymx.com/colonias/polanco',
    },
  },
  title: "Furnished rentals in Polanco, CDMX | ShortStayMX",
  description: "Furnished apartments in Polanco, Mexico City's most exclusive area. Close to Reforma, Chapultepec, Museo Soumaya and the best restaurants in Latin America.",
};

export default function EnglishPolancoPage() {
  return <PolancoContent lang="en" />;
}
