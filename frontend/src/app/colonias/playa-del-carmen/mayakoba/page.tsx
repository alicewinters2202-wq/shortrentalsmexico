import { getServerLang } from '@/lib/lang';
import MayakobaContent from '@/components/pages/MayakobaContent';

export const metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/colonias/playa-del-carmen/mayakoba',
    languages: {
      'es-MX': 'https://shortstaymx.com/colonias/playa-del-carmen/mayakoba',
      'en-US': 'https://shortstaymx.com/en/colonias/playa-del-carmen/mayakoba',
      'x-default': 'https://shortstaymx.com/colonias/playa-del-carmen/mayakoba',
    },
  },
  title: "Furnished rentals in Mayakoba, Playa del Carmen | ShortStayMX",
  description: "Furnished apartments in Mayakoba and Corasol, Playa del Carmen. Ultra-luxury living in the Riviera Maya with Rosewood, Banyan Tree and world-class golf.",
};

export default async function MayakobaPage() {
  const lang = await getServerLang();
  return <MayakobaContent lang={lang} />;
}
