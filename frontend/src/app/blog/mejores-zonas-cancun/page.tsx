import { getServerLang } from '@/lib/lang';
import MejoresZonasCancunContent from '@/components/pages/MejoresZonasCancunContent';

export const metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/blog/mejores-zonas-cancun',
    languages: {
      'es-MX': 'https://shortstaymx.com/blog/mejores-zonas-cancun',
      'en-US': 'https://shortstaymx.com/en/blog/mejores-zonas-cancun',
      'x-default': 'https://shortstaymx.com/blog/mejores-zonas-cancun',
    },
  },
  title: 'Mejores zonas para rentar en Cancún: Zona Hotelera vs Puerto Cancún | ShortStayMX',
  description: 'Descubre las diferencias entre la Zona Hotelera y Puerto Cancún para encontrar la mejor opción para tu estancia en el Caribe mexicano.',
};

export default async function MejoresZonasCancun() {
  const lang = await getServerLang();
  return <MejoresZonasCancunContent lang={lang} />;
}
