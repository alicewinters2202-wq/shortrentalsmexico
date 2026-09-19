import { getServerLang } from '@/lib/lang';
import ViviriEnPuertoVallartaContent from '@/components/pages/ViviriEnPuertoVallartaContent';

export const metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/blog/vivir-en-puerto-vallarta',
    languages: {
      'es-MX': 'https://shortstaymx.com/blog/vivir-en-puerto-vallarta',
      'en-US': 'https://shortstaymx.com/en/blog/vivir-en-puerto-vallarta',
      'x-default': 'https://shortstaymx.com/blog/vivir-en-puerto-vallarta',
    },
  },
  title: 'Vivir en Puerto Vallarta: Guía para expatriados | ShortStayMX',
  description: 'Todo lo que necesitas saber sobre vivir en Puerto Vallarta: mejores zonas, costos, estilo de vida y consejos para expatriados en el Pacífico mexicano.',
};

export default async function ViviriEnPuertoVallarta() {
  const lang = await getServerLang();
  return <ViviriEnPuertoVallartaContent lang={lang} />;
}
