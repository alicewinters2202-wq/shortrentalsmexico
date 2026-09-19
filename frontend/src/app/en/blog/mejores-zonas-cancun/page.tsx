import type { Metadata } from 'next';
import MejoresZonasCancunContent from '@/components/pages/MejoresZonasCancunContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/en/blog/mejores-zonas-cancun',
    languages: {
      'es-MX': 'https://shortstaymx.com/blog/mejores-zonas-cancun',
      'en-US': 'https://shortstaymx.com/en/blog/mejores-zonas-cancun',
      'x-default': 'https://shortstaymx.com/blog/mejores-zonas-cancun',
    },
  },
  title: 'Best areas to rent in Cancun: Hotel Zone vs Puerto Cancun | ShortStayMX',
  description: 'Discover the differences between the main areas of Cancun to find the one that best suits you.',
};

export default function EnglishMejoresZonasCancun() {
  return <MejoresZonasCancunContent lang="en" />;
}
