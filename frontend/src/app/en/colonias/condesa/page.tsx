import type { Metadata } from 'next';
import CondesaContent from '@/components/pages/CondesaContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/en/colonias/condesa',
    languages: {
      'es-MX': 'https://shortstaymx.com/colonias/condesa',
      'en-US': 'https://shortstaymx.com/en/colonias/condesa',
      'x-default': 'https://shortstaymx.com/colonias/condesa',
    },
  },
  title: "Furnished rentals in Condesa, CDMX | ShortStayMX",
  description: "Furnished apartments in Condesa, Mexico City. Art deco architecture, Parque Mexico, Avenida Amsterdam and the best quality of life in CDMX.",
};

export default function EnglishCondesaPage() {
  return <CondesaContent lang="en" />;
}
