import { getServerLang } from '@/lib/lang';
import ColoniasContent from '@/components/pages/ColoniasContent';

export const metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/colonias',
    languages: {
      'es-MX': 'https://shortstaymx.com/colonias',
      'en-US': 'https://shortstaymx.com/en/colonias',
      'x-default': 'https://shortstaymx.com/colonias',
    },
  },
  title: "Rentas amuebladas por colonia en México | ShortStayMX",
  description: "Encuentra departamentos amueblados en las mejores colonias de México: Polanco, Roma Norte, Condesa, Cancun, Tulum, Puerto Vallarta y más.",
};

export default async function ColoniasPage() {
  const lang = await getServerLang();
  return <ColoniasContent lang={lang} />;
}
