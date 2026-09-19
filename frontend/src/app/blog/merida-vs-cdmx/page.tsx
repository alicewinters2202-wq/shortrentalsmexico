import { getServerLang } from '@/lib/lang';
import MeridaVsCdmxContent from '@/components/pages/MeridaVsCdmxContent';

export const metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/blog/merida-vs-cdmx',
    languages: {
      'es-MX': 'https://shortstaymx.com/blog/merida-vs-cdmx',
      'en-US': 'https://shortstaymx.com/en/blog/merida-vs-cdmx',
      'x-default': 'https://shortstaymx.com/blog/merida-vs-cdmx',
    },
  },
  title: 'Mérida vs Ciudad de México para expatriados: ¿Cuál elegir? | ShortStayMX',
  description: 'Comparamos Mérida y Ciudad de México para expatriados: costos de vida, seguridad, clima, comunidad internacional y calidad de vida en ambas ciudades.',
};

export default async function MeridaVsCdmx() {
  const lang = await getServerLang();
  return <MeridaVsCdmxContent lang={lang} />;
}
