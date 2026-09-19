import { getServerLang } from '@/lib/lang';
import MarinaVallartaContent from '@/components/pages/MarinaVallartaContent';

export const metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/colonias/puerto-vallarta/marina-vallarta',
    languages: {
      'es-MX': 'https://shortstaymx.com/colonias/puerto-vallarta/marina-vallarta',
      'en-US': 'https://shortstaymx.com/en/colonias/puerto-vallarta/marina-vallarta',
      'x-default': 'https://shortstaymx.com/colonias/puerto-vallarta/marina-vallarta',
    },
  },
  title: "Furnished rentals in Marina Vallarta, Puerto Vallarta | ShortStayMX",
  description: "Furnished apartments in Marina Vallarta, Puerto Vallarta. World-class marina, 18-hole golf course and luxury condominiums just 5 minutes from the international airport.",
};

export default async function MarinaVallartaPage() {
  const lang = await getServerLang();
  return <MarinaVallartaContent lang={lang} />;
}
