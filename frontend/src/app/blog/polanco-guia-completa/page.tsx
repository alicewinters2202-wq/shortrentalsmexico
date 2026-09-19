import { getServerLang } from '@/lib/lang';
import PolancoGuiaContent from '@/components/pages/PolancoGuiaContent';

export const metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/blog/polanco-guia-completa',
    languages: {
      'es-MX': 'https://shortstaymx.com/blog/polanco-guia-completa',
      'en-US': 'https://shortstaymx.com/en/blog/polanco-guia-completa',
      'x-default': 'https://shortstaymx.com/blog/polanco-guia-completa',
    },
  },
  title: 'Polanco CDMX: Guía completa para vivir | ShortStayMX',
  description: 'Todo sobre vivir en Polanco, Ciudad de México: restaurantes, museos, costos, seguridad y las mejores propiedades amuebladas en la zona más exclusiva de CDMX.',
};

export default async function PolancoGuia() {
  const lang = await getServerLang();
  return <PolancoGuiaContent lang={lang} />;
}
