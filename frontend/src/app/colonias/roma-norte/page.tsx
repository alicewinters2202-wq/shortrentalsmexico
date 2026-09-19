import { getServerLang } from '@/lib/lang';
import RomaNorteContent from '@/components/pages/RomaNorteContent';

export const metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/colonias/roma-norte',
    languages: {
      'es-MX': 'https://shortstaymx.com/colonias/roma-norte',
      'en-US': 'https://shortstaymx.com/en/colonias/roma-norte',
      'x-default': 'https://shortstaymx.com/colonias/roma-norte',
    },
  },
  title: "Rentas amuebladas en Roma Norte, CDMX | ShortStayMX",
  description: "Departamentos amueblados en Roma Norte, la colonia más vibrante de Ciudad de México. Cafes de especialidad, restaurantes premiados, Parque México y vida cultural a tu puerta.",
};

export default async function RomaNortePage() {
  const lang = await getServerLang();
  return <RomaNorteContent lang={lang} />;
}
