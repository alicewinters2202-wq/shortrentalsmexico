import type { Metadata } from 'next';
import ViviriEnSanMiguelContent from '@/components/pages/ViviriEnSanMiguelContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/en/blog/vivir-en-san-miguel-de-allende',
    languages: {
      'es-MX': 'https://shortstaymx.com/blog/vivir-en-san-miguel-de-allende',
      'en-US': 'https://shortstaymx.com/en/blog/vivir-en-san-miguel-de-allende',
      'x-default': 'https://shortstaymx.com/blog/vivir-en-san-miguel-de-allende',
    },
  },
  title: 'Living in San Miguel de Allende: Complete guide | ShortStayMX',
  description: 'The colonial paradise favorite of expats and international retirees. UNESCO Heritage.',
};

export default function EnglishViviriEnSanMiguel() {
  return <ViviriEnSanMiguelContent lang="en" />;
}
