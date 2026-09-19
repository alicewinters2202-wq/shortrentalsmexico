import type { Metadata } from 'next';
import ViviriEnPuertoVallartaContent from '@/components/pages/ViviriEnPuertoVallartaContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/en/blog/vivir-en-puerto-vallarta',
    languages: {
      'es-MX': 'https://shortstaymx.com/blog/vivir-en-puerto-vallarta',
      'en-US': 'https://shortstaymx.com/en/blog/vivir-en-puerto-vallarta',
      'x-default': 'https://shortstaymx.com/blog/vivir-en-puerto-vallarta',
    },
  },
  title: 'Living in Puerto Vallarta: Guide for expats | ShortStayMX',
  description: 'Puerto Vallarta is one of the most beloved destinations for expats. We tell you everything about living there.',
};

export default function EnglishViviriEnPuertoVallarta() {
  return <ViviriEnPuertoVallartaContent lang="en" />;
}
