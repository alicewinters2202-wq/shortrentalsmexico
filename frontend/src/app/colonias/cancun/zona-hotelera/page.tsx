import { getServerLang } from '@/lib/lang';
import ZonaHoteleraContent from '@/components/pages/ZonaHoteleraContent';

export const metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/colonias/cancun/zona-hotelera',
    languages: {
      'es-MX': 'https://shortstaymx.com/colonias/cancun/zona-hotelera',
      'en-US': 'https://shortstaymx.com/en/colonias/cancun/zona-hotelera',
      'x-default': 'https://shortstaymx.com/colonias/cancun/zona-hotelera',
    },
  },
  title: "Furnished rentals in Zona Hotelera, Cancun | ShortStayMX",
  description: "Furnished apartments in Zona Hotelera, Cancun. Beachfront living with turquoise Caribbean Sea, luxury restaurants and vibrant nightlife on Kukulcan Boulevard.",
};

export default async function ZonaHoteleraPage() {
  const lang = await getServerLang();
  return <ZonaHoteleraContent lang={lang} />;
}
