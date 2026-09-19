import { getServerLang } from '@/lib/lang';
import RomaNorteGuiaContent from '@/components/pages/RomaNorteGuiaContent';

export const metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/blog/roma-norte-guia-completa',
    languages: {
      'es-MX': 'https://shortstaymx.com/blog/roma-norte-guia-completa',
      'en-US': 'https://shortstaymx.com/en/blog/roma-norte-guia-completa',
      'x-default': 'https://shortstaymx.com/blog/roma-norte-guia-completa',
    },
  },
  title: 'Roma Norte CDMX: Guía completa para vivir | ShortStayMX',
  description: 'Todo sobre vivir en Roma Norte, Ciudad de México: cafés, restaurantes, parques, costos y las mejores propiedades amuebladas en la colonia más vibrante de CDMX.',
};

export default async function RomaNorteGuia() {
  const lang = await getServerLang();
  return <RomaNorteGuiaContent lang={lang} />;
}
