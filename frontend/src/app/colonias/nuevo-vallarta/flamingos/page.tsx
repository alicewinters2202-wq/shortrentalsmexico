import { getServerLang } from '@/lib/lang';
import FlamingosContent from '@/components/pages/FlamingosContent';

export const metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/colonias/nuevo-vallarta/flamingos',
    languages: {
      'es-MX': 'https://shortstaymx.com/colonias/nuevo-vallarta/flamingos',
      'en-US': 'https://shortstaymx.com/en/colonias/nuevo-vallarta/flamingos',
      'x-default': 'https://shortstaymx.com/colonias/nuevo-vallarta/flamingos',
    },
  },
  title: "Furnished rentals in Flamingos, Nuevo Vallarta | ShortStayMX",
  description: "Furnished apartments in Flamingos, Nuevo Vallarta. Beachfront living with Grand Marina, world-class golf course and luxury condominiums on the Mexican Pacific.",
};

export default async function FlamingosPage() {
  const lang = await getServerLang();
  return <FlamingosContent lang={lang} />;
}
