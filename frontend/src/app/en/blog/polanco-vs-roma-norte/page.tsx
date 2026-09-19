import type { Metadata } from 'next';
import PolancoVsRomaPostContent from '@/components/pages/PolancoVsRomaPostContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/en/blog/polanco-vs-roma-norte',
    languages: {
      'es-MX': 'https://shortstaymx.com/blog/polanco-vs-roma-norte',
      'en-US': 'https://shortstaymx.com/en/blog/polanco-vs-roma-norte',
      'x-default': 'https://shortstaymx.com/blog/polanco-vs-roma-norte',
    },
  },
  title: 'Polanco vs Roma Norte: Which is the best neighborhood to live in Mexico City? | ShortStayMX',
  description: 'We compare the two most popular neighborhoods in Mexico City to help you choose where to live.',
};

export default function EnglishPolancoVsRomaPost() {
  return <PolancoVsRomaPostContent lang="en" />;
}
