import type { Metadata } from 'next';
import JuarezContent from '@/components/pages/JuarezContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/en/colonias/juarez',
    languages: {
      'es-MX': 'https://shortstaymx.com/colonias/juarez',
      'en-US': 'https://shortstaymx.com/en/colonias/juarez',
      'x-default': 'https://shortstaymx.com/colonias/juarez',
    },
  },
  title: "Furnished rentals in Juarez, CDMX | ShortStayMX",
  description: "Furnished apartments in Colonia Juarez, Mexico City. Up-and-coming central area steps from Reforma, Chapultepec and Zona Rosa.",
};

export default function EnglishJuarezPage() {
  return <JuarezContent lang="en" />;
}
