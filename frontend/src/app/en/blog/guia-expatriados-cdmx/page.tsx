import type { Metadata } from 'next';
import GuiaExpatriadosCDMXContent from '@/components/pages/GuiaExpatriadosCDMXContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/en/blog/guia-expatriados-cdmx',
    languages: {
      'es-MX': 'https://shortstaymx.com/blog/guia-expatriados-cdmx',
      'en-US': 'https://shortstaymx.com/en/blog/guia-expatriados-cdmx',
      'x-default': 'https://shortstaymx.com/blog/guia-expatriados-cdmx',
    },
  },
  title: 'Complete guide for expats in Mexico City | ShortStayMX',
  description: 'Everything you need to know to move to CDMX: neighborhoods, costs, transportation and daily life.',
};

export default function EnglishGuiaExpatriadosCDMX() {
  return <GuiaExpatriadosCDMXContent lang="en" />;
}
