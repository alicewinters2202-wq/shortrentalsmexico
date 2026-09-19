import { getServerLang } from '@/lib/lang';
import PuertoCancunContent from '@/components/pages/PuertoCancunContent';

export const metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/colonias/cancun/puerto-cancun',
    languages: {
      'es-MX': 'https://shortstaymx.com/colonias/cancun/puerto-cancun',
      'en-US': 'https://shortstaymx.com/en/colonias/cancun/puerto-cancun',
      'x-default': 'https://shortstaymx.com/colonias/cancun/puerto-cancun',
    },
  },
  title: "Furnished rentals in Puerto Cancun | ShortStayMX",
  description: "Furnished apartments in Puerto Cancun. The most exclusive marina development in Cancun with world-class golf course, luxury towers and 24-hour security.",
};

export default async function PuertoCancunPage() {
  const lang = await getServerLang();
  return <PuertoCancunContent lang={lang} />;
}
