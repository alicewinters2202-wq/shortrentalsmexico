import type { Metadata } from 'next';
import TulumVsPlayaContent from '@/components/pages/TulumVsPlayaContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/en/blog/tulum-vs-playa-del-carmen',
    languages: {
      'es-MX': 'https://shortstaymx.com/blog/tulum-vs-playa-del-carmen',
      'en-US': 'https://shortstaymx.com/en/blog/tulum-vs-playa-del-carmen',
      'x-default': 'https://shortstaymx.com/blog/tulum-vs-playa-del-carmen',
    },
  },
  title: 'Tulum vs Playa del Carmen: Where to live? | ShortStayMX',
  description: 'We compare the two major destinations of the Riviera Maya to help you choose where to live.',
};

export default function EnglishTulumVsPlaya() {
  return <TulumVsPlayaContent lang="en" />;
}
