import type { Metadata } from 'next';
import FaqContent from '@/components/pages/FaqContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/en/faq',
    languages: {
      'es-MX': 'https://shortstaymx.com/faq',
      'en-US': 'https://shortstaymx.com/en/faq',
      'x-default': 'https://shortstaymx.com/faq',
    },
  },
  title: 'Frequently Asked Questions | ShortStayMX',
  description: 'Everything you need to know before booking with ShortStayMX.',
};

export default function EnglishFaqPage() {
  return <FaqContent lang="en" />;
}
