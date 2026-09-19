import { getServerLang } from '@/lib/lang';
import JuarezContent from '@/components/pages/JuarezContent';

export const metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/colonias/juarez',
    languages: {
      'es-MX': 'https://shortstaymx.com/colonias/juarez',
      'en-US': 'https://shortstaymx.com/en/colonias/juarez',
      'x-default': 'https://shortstaymx.com/colonias/juarez',
    },
  },
  title: "Rentas amuebladas en Juarez, CDMX | ShortStayMX",
  description: "Departamentos amueblados en la colonia Juarez, Ciudad de México. Zona centrica en auge a pasos de Reforma, Chapultepec y la Zona Rosa.",
};

export default async function JuarezPage() {
  const lang = await getServerLang();
  return <JuarezContent lang={lang} />;
}
