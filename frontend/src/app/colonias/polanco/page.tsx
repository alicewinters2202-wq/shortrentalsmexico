import { getServerLang } from '@/lib/lang';
import PolancoContent from '@/components/pages/PolancoContent';

export const metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/colonias/polanco',
    languages: {
      'es-MX': 'https://shortstaymx.com/colonias/polanco',
      'en-US': 'https://shortstaymx.com/en/colonias/polanco',
      'x-default': 'https://shortstaymx.com/colonias/polanco',
    },
  },
  title: "Rentas amuebladas en Polanco, CDMX | ShortStayMX",
  description: "Departamentos amueblados en Polanco, la zona más exclusiva de Ciudad de México. Cerca de Reforma, Chapultepec, el Museo Soumaya y los mejores restaurantes de America Latina.",
};

export default async function PolancoPage() {
  const lang = await getServerLang();
  return <PolancoContent lang={lang} />;
}
