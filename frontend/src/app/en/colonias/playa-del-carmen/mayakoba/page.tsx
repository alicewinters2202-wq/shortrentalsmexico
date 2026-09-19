import type { Metadata } from 'next';
import MayakobaContent from '@/components/pages/MayakobaContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/en/colonias/playa-del-carmen/mayakoba',
    languages: {
      'es-MX': 'https://shortstaymx.com/colonias/playa-del-carmen/mayakoba',
      'en-US': 'https://shortstaymx.com/en/colonias/playa-del-carmen/mayakoba',
      'x-default': 'https://shortstaymx.com/colonias/playa-del-carmen/mayakoba',
    },
  },
  title: "Furnished rentals in Mayakoba, Playa del Carmen | ShortStayMX",
  description: "Furnished apartments in Mayakoba and Corasol, Playa del Carmen. Ultra-luxury living in the Riviera Maya with Rosewood, Banyan Tree and world-class golf.",
};

export default function EnglishMayakobaPage() {
  return <MayakobaContent lang="en" />;
}
