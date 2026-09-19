import { getServerLang } from '@/lib/lang';
import NuevoVallartaVsPuertoVallartaContent from '@/components/pages/NuevoVallartaVsPuertoVallartaContent';

export const metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/blog/nuevo-vallarta-vs-puerto-vallarta',
    languages: {
      'es-MX': 'https://shortstaymx.com/blog/nuevo-vallarta-vs-puerto-vallarta',
      'en-US': 'https://shortstaymx.com/en/blog/nuevo-vallarta-vs-puerto-vallarta',
      'x-default': 'https://shortstaymx.com/blog/nuevo-vallarta-vs-puerto-vallarta',
    },
  },
  title: 'Nuevo Vallarta vs Puerto Vallarta: ¿Cuál elegir? | ShortStayMX',
  description: 'Comparamos Nuevo Vallarta y Puerto Vallarta para ayudarte a elegir el mejor destino para vivir en la costa del Pacífico mexicano. Diferencias, costos y estilo de vida.',
};

export default async function NuevoVallartaVsPuertoVallarta() {
  const lang = await getServerLang();
  return <NuevoVallartaVsPuertoVallartaContent lang={lang} />;
}
