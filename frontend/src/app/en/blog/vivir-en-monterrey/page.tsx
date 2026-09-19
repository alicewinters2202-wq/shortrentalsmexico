import type { Metadata } from 'next';
import ViviriEnMonterreyContent from '@/components/pages/ViviriEnMonterreyContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/en/blog/vivir-en-monterrey',
    languages: {
      'es-MX': 'https://shortstaymx.com/blog/vivir-en-monterrey',
      'en-US': 'https://shortstaymx.com/en/blog/vivir-en-monterrey',
      'x-default': 'https://shortstaymx.com/blog/vivir-en-monterrey',
    },
  },
  title: 'Living in Monterrey: Guide for executives and expats | ShortStayMX',
  description: 'Mexico\'s industrial capital is experiencing a nearshoring boom. Complete guide for international executives.',
};

export default function EnglishViviriEnMonterrey() {
  return <ViviriEnMonterreyContent lang="en" />;
}
