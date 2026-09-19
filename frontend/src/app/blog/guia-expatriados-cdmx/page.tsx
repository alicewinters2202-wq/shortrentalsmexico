import { getServerLang } from '@/lib/lang';
import GuiaExpatriadosCDMXContent from '@/components/pages/GuiaExpatriadosCDMXContent';

export const metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/blog/guia-expatriados-cdmx',
    languages: {
      'es-MX': 'https://shortstaymx.com/blog/guia-expatriados-cdmx',
      'en-US': 'https://shortstaymx.com/en/blog/guia-expatriados-cdmx',
      'x-default': 'https://shortstaymx.com/blog/guia-expatriados-cdmx',
    },
  },
  title: 'Guía completa para expatriados en Ciudad de México | ShortStayMX',
  description: 'Todo lo que necesitas saber para mudarte a CDMX: mejores colonias, costos de vida, transporte, seguridad y consejos prácticos para expatriados.',
};

export default async function GuiaExpatriadosCDMX() {
  const lang = await getServerLang();
  return <GuiaExpatriadosCDMXContent lang={lang} />;
}
