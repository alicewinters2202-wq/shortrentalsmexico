import type { Metadata } from 'next';
import AboutContent from '@/components/pages/AboutContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/en/about',
    languages: {
      'es-MX': 'https://shortstaymx.com/about',
      'en-US': 'https://shortstaymx.com/en/about',
      'x-default': 'https://shortstaymx.com/about',
    },
  },
  title: 'About us | ShortStayMX',
  description: 'Meet ShortStayMX: professional hospitality at the best destinations in Mexico.',
};

export default function EnglishAboutPage() {
  return <AboutContent lang="en" />;
}
