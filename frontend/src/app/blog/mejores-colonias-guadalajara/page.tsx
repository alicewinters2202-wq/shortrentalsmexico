import { getServerLang } from '@/lib/lang';
import MejoresColoniasGuadalajaraContent from '@/components/pages/MejoresColoniasGuadalajaraContent';

export const metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/blog/mejores-colonias-guadalajara',
    languages: {
      'es-MX': 'https://shortstaymx.com/blog/mejores-colonias-guadalajara',
      'en-US': 'https://shortstaymx.com/en/blog/mejores-colonias-guadalajara',
      'x-default': 'https://shortstaymx.com/blog/mejores-colonias-guadalajara',
    },
  },
  title: 'Las mejores colonias de Guadalajara para expatriados | ShortStayMX',
  description: 'Guía completa de las mejores zonas de Guadalajara para vivir: Puerta de Hierro, Colonia Americana y Providencia. Todo lo que necesitas saber como expatriado.',
};

export default async function MejoresColoniasGuadalajara() {
  const lang = await getServerLang();
  return <MejoresColoniasGuadalajaraContent lang={lang} />;
}
