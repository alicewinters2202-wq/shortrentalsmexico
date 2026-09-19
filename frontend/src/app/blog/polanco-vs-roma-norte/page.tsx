import { getServerLang } from '@/lib/lang';
import PolancoVsRomaPostContent from '@/components/pages/PolancoVsRomaPostContent';

export const metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/blog/polanco-vs-roma-norte',
    languages: {
      'es-MX': 'https://shortstaymx.com/blog/polanco-vs-roma-norte',
      'en-US': 'https://shortstaymx.com/en/blog/polanco-vs-roma-norte',
      'x-default': 'https://shortstaymx.com/blog/polanco-vs-roma-norte',
    },
  },
  title: 'Polanco vs Roma Norte: ¿Cuál es la mejor colonia para vivir en CDMX? | ShortStayMX',
  description: 'Comparamos Polanco y Roma Norte, las dos colonias más populares de Ciudad de México, para ayudarte a elegir dónde vivir según tu estilo de vida y presupuesto.',
};

export default async function PolancoVsRomaPost() {
  const lang = await getServerLang();
  return <PolancoVsRomaPostContent lang={lang} />;
}
