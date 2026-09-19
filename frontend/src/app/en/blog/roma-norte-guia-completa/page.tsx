import type { Metadata } from 'next';
import RomaNorteGuiaContent from '@/components/pages/RomaNorteGuiaContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/en/blog/roma-norte-guia-completa',
    languages: {
      'es-MX': 'https://shortstaymx.com/blog/roma-norte-guia-completa',
      'en-US': 'https://shortstaymx.com/en/blog/roma-norte-guia-completa',
      'x-default': 'https://shortstaymx.com/blog/roma-norte-guia-completa',
    },
  },
  title: 'Roma Norte CDMX: Complete living guide | ShortStayMX',
  description: 'The most vibrant neighborhood in CDMX: cafes, parks, gastronomy and everything about living in Roma Norte.',
};

export default function EnglishRomaNorteGuia() {
  return <RomaNorteGuiaContent lang="en" />;
}
