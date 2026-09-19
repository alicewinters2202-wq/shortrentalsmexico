import type { Metadata } from 'next';
import MejoresColoniasGuadalajaraContent from '@/components/pages/MejoresColoniasGuadalajaraContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/en/blog/mejores-colonias-guadalajara',
    languages: {
      'es-MX': 'https://shortstaymx.com/blog/mejores-colonias-guadalajara',
      'en-US': 'https://shortstaymx.com/en/blog/mejores-colonias-guadalajara',
      'x-default': 'https://shortstaymx.com/blog/mejores-colonias-guadalajara',
    },
  },
  title: 'The best neighborhoods in Guadalajara to live as an expat | ShortStayMX',
  description: 'Complete guide to the best areas of Guadalajara: Puerta de Hierro, Colonia Americana and Providencia.',
};

export default function EnglishMejoresColoniasGuadalajara() {
  return <MejoresColoniasGuadalajaraContent lang="en" />;
}
