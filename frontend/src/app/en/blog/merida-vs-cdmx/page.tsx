import type { Metadata } from 'next';
import MeridaVsCdmxContent from '@/components/pages/MeridaVsCdmxContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/en/blog/merida-vs-cdmx',
    languages: {
      'es-MX': 'https://shortstaymx.com/blog/merida-vs-cdmx',
      'en-US': 'https://shortstaymx.com/en/blog/merida-vs-cdmx',
      'x-default': 'https://shortstaymx.com/blog/merida-vs-cdmx',
    },
  },
  title: 'Merida vs Mexico City for expats | ShortStayMX',
  description: 'We compare the two most popular cities for expats in Mexico: costs, climate, security and more.',
};

export default function EnglishMeridaVsCdmx() {
  return <MeridaVsCdmxContent lang="en" />;
}
