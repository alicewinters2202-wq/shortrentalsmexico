import type { Metadata } from 'next';
import AmericanaContent from '@/components/pages/AmericanaContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/en/colonias/guadalajara/americana',
    languages: {
      'es-MX': 'https://shortstaymx.com/colonias/guadalajara/americana',
      'en-US': 'https://shortstaymx.com/en/colonias/guadalajara/americana',
      'x-default': 'https://shortstaymx.com/colonias/guadalajara/americana',
    },
  },
  title: "Furnished rentals in Colonia Americana, Guadalajara | ShortStayMX",
  description: "Furnished apartments in Colonia Americana, Guadalajara. Bohemian neighborhood with specialty cafes, Avenida Chapultepec restaurants and vibrant cultural life.",
};

export default function EnglishAmericanaPage() {
  return <AmericanaContent lang="en" />;
}
