import { getServerLang } from '@/lib/lang';
import ViviriEnTulumContent from '@/components/pages/ViviriEnTulumContent';

export const metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/blog/vivir-en-tulum',
    languages: {
      'es-MX': 'https://shortstaymx.com/blog/vivir-en-tulum',
      'en-US': 'https://shortstaymx.com/en/blog/vivir-en-tulum',
      'x-default': 'https://shortstaymx.com/blog/vivir-en-tulum',
    },
  },
  title: 'Vivir en Tulum: Guía completa para expatriados | ShortStayMX',
  description: 'Todo lo que necesitas saber sobre vivir en Tulum: las mejores zonas, costos de vida, estilo de vida y consejos prácticos para expatriados y nómadas digitales.',
};

export default async function ViviriEnTulum() {
  const lang = await getServerLang();
  return <ViviriEnTulumContent lang={lang} />;
}
