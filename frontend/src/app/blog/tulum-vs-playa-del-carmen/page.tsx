import { getServerLang } from '@/lib/lang';
import TulumVsPlayaContent from '@/components/pages/TulumVsPlayaContent';

export const metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/blog/tulum-vs-playa-del-carmen',
    languages: {
      'es-MX': 'https://shortstaymx.com/blog/tulum-vs-playa-del-carmen',
      'en-US': 'https://shortstaymx.com/en/blog/tulum-vs-playa-del-carmen',
      'x-default': 'https://shortstaymx.com/blog/tulum-vs-playa-del-carmen',
    },
  },
  title: 'Tulum vs Playa del Carmen: ¿Dónde vivir? | ShortStayMX',
  description: 'Comparamos Tulum y Playa del Carmen para ayudarte a elegir el mejor destino para vivir en la Riviera Maya. Costos, estilo de vida, comunidad y más.',
};

export default async function TulumVsPlaya() {
  const lang = await getServerLang();
  return <TulumVsPlayaContent lang={lang} />;
}
