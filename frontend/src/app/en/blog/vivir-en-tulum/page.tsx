import type { Metadata } from 'next';
import ViviriEnTulumContent from '@/components/pages/ViviriEnTulumContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/en/blog/vivir-en-tulum',
    languages: {
      'es-MX': 'https://shortstaymx.com/blog/vivir-en-tulum',
      'en-US': 'https://shortstaymx.com/en/blog/vivir-en-tulum',
      'x-default': 'https://shortstaymx.com/blog/vivir-en-tulum',
    },
  },
  title: 'Living in Tulum: Complete guide for expats | ShortStayMX',
  description: 'Everything you need to know about living in Tulum: areas, costs, lifestyle and practical tips.',
};

export default function EnglishViviriEnTulum() {
  return <ViviriEnTulumContent lang="en" />;
}
