import type { Metadata } from 'next';
import PlayacarContent from '@/components/pages/PlayacarContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/en/colonias/playa-del-carmen/playacar',
    languages: {
      'es-MX': 'https://shortstaymx.com/colonias/playa-del-carmen/playacar',
      'en-US': 'https://shortstaymx.com/en/colonias/playa-del-carmen/playacar',
      'x-default': 'https://shortstaymx.com/colonias/playa-del-carmen/playacar',
    },
  },
  title: "Furnished rentals in Playacar, Playa del Carmen | ShortStayMX",
  description: "Furnished apartments in Playacar, Playa del Carmen. Private gated community steps from Fifth Avenue and the Caribbean beach with golf course access.",
};

export default function EnglishPlayacarPage() {
  return <PlayacarContent lang="en" />;
}
