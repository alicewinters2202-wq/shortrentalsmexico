import { getServerLang } from '@/lib/lang';
import MejoresColoniasCancunContent from '@/components/pages/MejoresColoniasCancunContent';

export const metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/blog/mejores-colonias-cancun',
    languages: {
      'es-MX': 'https://shortstaymx.com/blog/mejores-colonias-cancun',
      'en-US': 'https://shortstaymx.com/en/blog/mejores-colonias-cancun',
      'x-default': 'https://shortstaymx.com/blog/mejores-colonias-cancun',
    },
  },
  title: 'Mejores colonias de Cancún para vivir | ShortStayMX',
  description: 'Guía completa de las mejores zonas de Cancún para expatriados y nómadas digitales: Zona Hotelera y Puerto Cancún con todo lo que necesitas saber.',
};

export default async function MejoresColoniasCancun() {
  const lang = await getServerLang();
  return <MejoresColoniasCancunContent lang={lang} />;
}
