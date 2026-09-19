import { getServerLang } from '@/lib/lang';
import VillaFrailesContent from '@/components/pages/VillaFrailesContent';

export const metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/colonias/san-miguel/villa-de-los-frailes',
    languages: {
      'es-MX': 'https://shortstaymx.com/colonias/san-miguel/villa-de-los-frailes',
      'en-US': 'https://shortstaymx.com/en/colonias/san-miguel/villa-de-los-frailes',
      'x-default': 'https://shortstaymx.com/colonias/san-miguel/villa-de-los-frailes',
    },
  },
  title: "Furnished rentals in Villa de los Frailes, San Miguel de Allende | ShortStayMX",
  description: "Furnished apartments in Villa de los Frailes and Arcos de San Miguel. Quiet residential area close to the historic center of San Miguel de Allende.",
};

export default async function VillaFrailesPage() {
  const lang = await getServerLang();
  return <VillaFrailesContent lang={lang} />;
}
