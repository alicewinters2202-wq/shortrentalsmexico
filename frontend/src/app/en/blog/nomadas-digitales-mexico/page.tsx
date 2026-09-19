import type { Metadata } from 'next';
import NomadasDigitalesMexicoContent from '@/components/pages/NomadasDigitalesMexicoContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/en/blog/nomadas-digitales-mexico',
    languages: {
      'es-MX': 'https://shortstaymx.com/blog/nomadas-digitales-mexico',
      'en-US': 'https://shortstaymx.com/en/blog/nomadas-digitales-mexico',
      'x-default': 'https://shortstaymx.com/blog/nomadas-digitales-mexico',
    },
  },
  title: 'The best cities in Mexico for digital nomads | ShortStayMX',
  description: 'Mexico has become one of the favorite destinations for remote work.',
};

export default function EnglishNomadasDigitalesMexico() {
  return <NomadasDigitalesMexicoContent lang="en" />;
}
