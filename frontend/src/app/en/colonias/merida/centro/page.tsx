import type { Metadata } from 'next';
import MeridaCentroContent from '@/components/pages/MeridaCentroContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/en/colonias/merida/centro',
    languages: {
      'es-MX': 'https://shortstaymx.com/colonias/merida/centro',
      'en-US': 'https://shortstaymx.com/en/colonias/merida/centro',
      'x-default': 'https://shortstaymx.com/colonias/merida/centro',
    },
  },
  title: "Furnished rentals in Centro, Merida | ShortStayMX",
  description: "Furnished apartments in Centro, Merida. Colonial architecture, traditional markets, Yucatecan gastronomy and the best cultural life in the White City.",
};

export default function EnglishMeridaCentroPage() {
  return <MeridaCentroContent lang="en" />;
}
