import { getServerLang } from '@/lib/lang';
import PuertaDeHierroContent from '@/components/pages/PuertaDeHierroContent';

export const metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/colonias/guadalajara/puerta-de-hierro',
    languages: {
      'es-MX': 'https://shortstaymx.com/colonias/guadalajara/puerta-de-hierro',
      'en-US': 'https://shortstaymx.com/en/colonias/guadalajara/puerta-de-hierro',
      'x-default': 'https://shortstaymx.com/colonias/guadalajara/puerta-de-hierro',
    },
  },
  title: "Furnished rentals in Puerta de Hierro, Guadalajara | ShortStayMX",
  description: "Furnished apartments in Puerta de Hierro, Zapopan. The most exclusive area in Guadalajara with Andares shopping center, private hospitals and luxury amenities.",
};

export default async function PuertaDeHierroPage() {
  const lang = await getServerLang();
  return <PuertaDeHierroContent lang={lang} />;
}
