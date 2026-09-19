import { getServerLang } from '@/lib/lang';
import ValleOrienteContent from '@/components/pages/ValleOrienteContent';

export const metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/colonias/monterrey/valle-oriente',
    languages: {
      'es-MX': 'https://shortstaymx.com/colonias/monterrey/valle-oriente',
      'en-US': 'https://shortstaymx.com/en/colonias/monterrey/valle-oriente',
      'x-default': 'https://shortstaymx.com/colonias/monterrey/valle-oriente',
    },
  },
  title: "Furnished rentals in Valle Oriente, Monterrey | ShortStayMX",
  description: "Furnished apartments in Valle Oriente, Monterrey. The most modern business corridor in northern Mexico with corporate towers, luxury hotels and premium shopping.",
};

export default async function ValleOrientePage() {
  const lang = await getServerLang();
  return <ValleOrienteContent lang={lang} />;
}
