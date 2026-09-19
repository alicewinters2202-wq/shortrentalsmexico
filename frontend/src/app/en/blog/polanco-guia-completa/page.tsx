import type { Metadata } from 'next';
import PolancoGuiaContent from '@/components/pages/PolancoGuiaContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/en/blog/polanco-guia-completa',
    languages: {
      'es-MX': 'https://shortstaymx.com/blog/polanco-guia-completa',
      'en-US': 'https://shortstaymx.com/en/blog/polanco-guia-completa',
      'x-default': 'https://shortstaymx.com/blog/polanco-guia-completa',
    },
  },
  title: 'Polanco CDMX: Complete living guide | ShortStayMX',
  description: 'The most exclusive area of CDMX: restaurants, museums, security and everything you need to know.',
};

export default function EnglishPolancoGuia() {
  return <PolancoGuiaContent lang="en" />;
}
