import type { Metadata } from 'next';
import MarinaVallartaContent from '@/components/pages/MarinaVallartaContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/en/colonias/puerto-vallarta/marina-vallarta',
    languages: {
      'es-MX': 'https://shortstaymx.com/colonias/puerto-vallarta/marina-vallarta',
      'en-US': 'https://shortstaymx.com/en/colonias/puerto-vallarta/marina-vallarta',
      'x-default': 'https://shortstaymx.com/colonias/puerto-vallarta/marina-vallarta',
    },
  },
  title: "Furnished rentals in Marina Vallarta, Puerto Vallarta | ShortStayMX",
  description: "Furnished apartments in Marina Vallarta, Puerto Vallarta. World-class marina, 18-hole golf course and luxury condominiums just 5 minutes from the international airport.",
};

export default function EnglishMarinaVallartaPage() {
  return <MarinaVallartaContent lang="en" />;
}
