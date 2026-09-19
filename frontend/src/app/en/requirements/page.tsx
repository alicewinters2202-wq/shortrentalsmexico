import type { Metadata } from 'next';
import RequirementsContent from '@/components/pages/RequirementsContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/en/requirements',
    languages: {
      'es-MX': 'https://shortstaymx.com/requirements',
      'en-US': 'https://shortstaymx.com/en/requirements',
      'x-default': 'https://shortstaymx.com/requirements',
    },
  },
  title: 'Our requirements | ShortStayMX',
  description: 'To book any of our properties at ShortStayMX, you need to meet these requirements.',
};

export default function EnglishRequirementsPage() {
  return <RequirementsContent lang="en" />;
}
