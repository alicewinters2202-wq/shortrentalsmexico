import { getServerLang } from '@/lib/lang';
import SanPedroContent from '@/components/pages/SanPedroContent';

export const metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/colonias/monterrey/san-pedro',
    languages: {
      'es-MX': 'https://shortstaymx.com/colonias/monterrey/san-pedro',
      'en-US': 'https://shortstaymx.com/en/colonias/monterrey/san-pedro',
      'x-default': 'https://shortstaymx.com/colonias/monterrey/san-pedro',
    },
  },
  title: "Furnished rentals in San Pedro Garza Garcia, Monterrey | ShortStayMX",
  description: "Furnished apartments in San Pedro Garza Garcia, the most exclusive municipality in Mexico. Corporate headquarters, luxury shopping and the best quality of life in northern Mexico.",
};

export default async function SanPedroPage() {
  const lang = await getServerLang();
  return <SanPedroContent lang={lang} />;
}
