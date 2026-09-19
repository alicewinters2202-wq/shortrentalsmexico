import type { Metadata } from 'next';
import MejoresColoniasCancunContent from '@/components/pages/MejoresColoniasCancunContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/en/blog/mejores-colonias-cancun',
    languages: {
      'es-MX': 'https://shortstaymx.com/blog/mejores-colonias-cancun',
      'en-US': 'https://shortstaymx.com/en/blog/mejores-colonias-cancun',
      'x-default': 'https://shortstaymx.com/blog/mejores-colonias-cancun',
    },
  },
  title: 'Best neighborhoods in Cancun to live | ShortStayMX',
  description: 'Hotel Zone vs Puerto Cancun: which is the best option to live in the Mexican Caribbean.',
};

export default function EnglishMejoresColoniasCancun() {
  return <MejoresColoniasCancunContent lang="en" />;
}
