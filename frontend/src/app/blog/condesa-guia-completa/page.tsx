import { getServerLang } from '@/lib/lang';
import CondesaGuiaContent from '@/components/pages/CondesaGuiaContent';

export const metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/blog/condesa-guia-completa',
    languages: {
      'es-MX': 'https://shortstaymx.com/blog/condesa-guia-completa',
      'en-US': 'https://shortstaymx.com/en/blog/condesa-guia-completa',
      'x-default': 'https://shortstaymx.com/blog/condesa-guia-completa',
    },
  },
  title: 'Condesa CDMX: Guía completa para vivir | ShortStayMX',
  description: 'Todo sobre vivir en la Condesa, Ciudad de México: Parque México, arquitectura art déco, Avenida Amsterdam, restaurantes y las mejores propiedades amuebladas.',
};

export default async function CondesaGuia() {
  const lang = await getServerLang();
  return <CondesaGuiaContent lang={lang} />;
}
