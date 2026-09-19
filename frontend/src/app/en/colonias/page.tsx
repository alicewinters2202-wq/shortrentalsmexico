import type { Metadata } from 'next';
import ColoniasContent from '@/components/pages/ColoniasContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/en/colonias',
    languages: {
      'es-MX': 'https://shortstaymx.com/colonias',
      'en-US': 'https://shortstaymx.com/en/colonias',
      'x-default': 'https://shortstaymx.com/colonias',
    },
  },
  title: "Furnished rentals by neighborhood in Mexico | ShortStayMX",
  description: "Find furnished apartments in the best neighborhoods in Mexico: Polanco, Roma Norte, Condesa, Cancun, Tulum, Puerto Vallarta and more.",
};

export default function EnglishColoniasPage() {
  return <ColoniasContent lang="en" />;
}
