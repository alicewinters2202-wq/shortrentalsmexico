import type { Metadata } from 'next';
import SmaCentroContent from '@/components/pages/SmaCentroContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/en/colonias/san-miguel/centro',
    languages: {
      'es-MX': 'https://shortstaymx.com/colonias/san-miguel/centro',
      'en-US': 'https://shortstaymx.com/en/colonias/san-miguel/centro',
      'x-default': 'https://shortstaymx.com/colonias/san-miguel/centro',
    },
  },
  title: "Furnished rentals in Centro Historico, San Miguel de Allende | ShortStayMX",
  description: "Furnished apartments in the Historic Center of San Miguel de Allende. UNESCO World Heritage Site with cobblestone streets, colonial architecture and world-class restaurants.",
};

export default function EnglishSmaCentroPage() {
  return <SmaCentroContent lang="en" />;
}
