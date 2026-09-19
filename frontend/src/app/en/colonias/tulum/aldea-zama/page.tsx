import type { Metadata } from 'next';
import AldeaZamaContent from '@/components/pages/AldeaZamaContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/en/colonias/tulum/aldea-zama',
    languages: {
      'es-MX': 'https://shortstaymx.com/colonias/tulum/aldea-zama',
      'en-US': 'https://shortstaymx.com/en/colonias/tulum/aldea-zama',
      'x-default': 'https://shortstaymx.com/colonias/tulum/aldea-zama',
    },
  },
  title: "Furnished rentals in Aldea Zama, Tulum | ShortStayMX",
  description: "Furnished apartments in Aldea Zama, Tulum. The most exclusive residential development in Tulum with biophilic architecture, luxury amenities and cenote access.",
};

export default function EnglishAldeaZamaPage() {
  return <AldeaZamaContent lang="en" />;
}
