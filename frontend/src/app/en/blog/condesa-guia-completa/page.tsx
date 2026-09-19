import type { Metadata } from 'next';
import CondesaGuiaContent from '@/components/pages/CondesaGuiaContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/en/blog/condesa-guia-completa',
    languages: {
      'es-MX': 'https://shortstaymx.com/blog/condesa-guia-completa',
      'en-US': 'https://shortstaymx.com/en/blog/condesa-guia-completa',
      'x-default': 'https://shortstaymx.com/blog/condesa-guia-completa',
    },
  },
  title: 'Condesa CDMX: Complete living guide | ShortStayMX',
  description: 'Art deco architecture, Parque Mexico, Avenida Amsterdam and everything about living in Condesa.',
};

export default function EnglishCondesaGuia() {
  return <CondesaGuiaContent lang="en" />;
}
