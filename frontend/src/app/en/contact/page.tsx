import type { Metadata } from 'next';
import ContactContent from '@/components/pages/ContactContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/en/contact',
    languages: {
      'es-MX': 'https://shortstaymx.com/contact',
      'en-US': 'https://shortstaymx.com/en/contact',
      'x-default': 'https://shortstaymx.com/contact',
    },
  },
  title: 'Contact | ShortStayMX',
  description: 'Contact us on WhatsApp or through our form. We respond within 24 hours.',
};

export default function EnglishContactPage() {
  return <ContactContent lang="en" />;
}
