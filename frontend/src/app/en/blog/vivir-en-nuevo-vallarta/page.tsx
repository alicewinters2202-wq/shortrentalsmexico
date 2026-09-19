import type { Metadata } from 'next';
import ViviriEnNuevoVallartaContent from '@/components/pages/ViviriEnNuevoVallartaContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/en/blog/vivir-en-nuevo-vallarta',
    languages: {
      'es-MX': 'https://shortstaymx.com/blog/vivir-en-nuevo-vallarta',
      'en-US': 'https://shortstaymx.com/en/blog/vivir-en-nuevo-vallarta',
      'x-default': 'https://shortstaymx.com/blog/vivir-en-nuevo-vallarta',
    },
  },
  title: 'Living in Nuevo Vallarta: Guide for expats | ShortStayMX',
  description: 'The Riviera Nayarit offers beaches, luxury marinas and golf courses 20 minutes from PV airport.',
};

export default function EnglishViviriEnNuevoVallarta() {
  return <ViviriEnNuevoVallartaContent lang="en" />;
}
