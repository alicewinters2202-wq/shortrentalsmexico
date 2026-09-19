import { getServerLang } from '@/lib/lang';
import NomadasDigitalesMexicoContent from '@/components/pages/NomadasDigitalesMexicoContent';

export const metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/blog/nomadas-digitales-mexico',
    languages: {
      'es-MX': 'https://shortstaymx.com/blog/nomadas-digitales-mexico',
      'en-US': 'https://shortstaymx.com/en/blog/nomadas-digitales-mexico',
      'x-default': 'https://shortstaymx.com/blog/nomadas-digitales-mexico',
    },
  },
  title: 'Las mejores ciudades de México para nómadas digitales | ShortStayMX',
  description: 'México es uno de los destinos favoritos para trabajar de forma remota. Descubre las mejores ciudades para nómadas digitales: CDMX, Tulum, Mérida y más.',
};

export default async function NomadasDigitalesMexico() {
  const lang = await getServerLang();
  return <NomadasDigitalesMexicoContent lang={lang} />;
}
