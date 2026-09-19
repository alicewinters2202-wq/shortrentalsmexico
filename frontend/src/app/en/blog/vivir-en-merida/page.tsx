import type { Metadata } from 'next';
import ViviriEnMeridaContent from '@/components/pages/ViviriEnMeridaContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/en/blog/vivir-en-merida',
    languages: {
      'es-MX': 'https://shortstaymx.com/blog/vivir-en-merida',
      'en-US': 'https://shortstaymx.com/en/blog/vivir-en-merida',
      'x-default': 'https://shortstaymx.com/blog/vivir-en-merida',
    },
  },
  title: 'Living in Merida: Complete guide for expats | ShortStayMX',
  description: 'The safest city in Mexico with colonial architecture, Yucatecan gastronomy and international community.',
};

export default function EnglishViviriEnMerida() {
  return <ViviriEnMeridaContent lang="en" />;
}
