import { getServerLang } from '@/lib/lang';
import ViviriEnMeridaContent from '@/components/pages/ViviriEnMeridaContent';

export const metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/blog/vivir-en-merida',
    languages: {
      'es-MX': 'https://shortstaymx.com/blog/vivir-en-merida',
      'en-US': 'https://shortstaymx.com/en/blog/vivir-en-merida',
      'x-default': 'https://shortstaymx.com/blog/vivir-en-merida',
    },
  },
  title: 'Vivir en Mérida: Guía completa para expatriados | ShortStayMX',
  description: 'Todo lo que necesitas saber sobre vivir en Mérida, Yucatán: mejores colonias, costos de vida, clima, seguridad y la comunidad de expatriados.',
};

export default async function ViviriEnMerida() {
  const lang = await getServerLang();
  return <ViviriEnMeridaContent lang={lang} />;
}
