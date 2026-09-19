import { getServerLang } from '@/lib/lang';
import LaVeletaContent from '@/components/pages/LaVeletaContent';

export const metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/colonias/tulum/la-veleta',
    languages: {
      'es-MX': 'https://shortstaymx.com/colonias/tulum/la-veleta',
      'en-US': 'https://shortstaymx.com/en/colonias/tulum/la-veleta',
      'x-default': 'https://shortstaymx.com/colonias/tulum/la-veleta',
    },
  },
  title: "Furnished rentals in La Veleta, Tulum | ShortStayMX",
  description: "Furnished apartments in La Veleta, Tulum. Peaceful residential neighborhood with jungle atmosphere, modern properties and easy access to beaches and cenotes.",
};

export default async function LaVeletaPage() {
  const lang = await getServerLang();
  return <LaVeletaContent lang={lang} />;
}
