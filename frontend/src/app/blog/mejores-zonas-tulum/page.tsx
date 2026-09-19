import { getServerLang } from '@/lib/lang';
import MejoresZonasTulumContent from '@/components/pages/MejoresZonasTulumContent';

export const metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/blog/mejores-zonas-tulum',
    languages: {
      'es-MX': 'https://shortstaymx.com/blog/mejores-zonas-tulum',
      'en-US': 'https://shortstaymx.com/en/blog/mejores-zonas-tulum',
      'x-default': 'https://shortstaymx.com/blog/mejores-zonas-tulum',
    },
  },
  title: 'Mejores zonas de Tulum para vivir | ShortStayMX',
  description: 'Guía completa de las mejores zonas de Tulum para expatriados y nómadas digitales: Aldea Zama, La Veleta y zona hotelera. Todo lo que necesitas saber para elegir.',
};

export default async function MejoresZonasTulum() {
  const lang = await getServerLang();
  return <MejoresZonasTulumContent lang={lang} />;
}
