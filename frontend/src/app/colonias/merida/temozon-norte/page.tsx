import { getServerLang } from '@/lib/lang';
import TemozonNorteContent from '@/components/pages/TemozonNorteContent';

export const metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/colonias/merida/temozon-norte',
    languages: {
      'es-MX': 'https://shortstaymx.com/colonias/merida/temozon-norte',
      'en-US': 'https://shortstaymx.com/en/colonias/merida/temozon-norte',
      'x-default': 'https://shortstaymx.com/colonias/merida/temozon-norte',
    },
  },
  title: "Furnished rentals in Temozon Norte, Merida | ShortStayMX",
  description: "Furnished apartments in Temozon Norte, Merida. The most exclusive area north of Merida with luxury gated communities, golf course and Yucatan Country Club.",
};

export default async function TemozonNortePage() {
  const lang = await getServerLang();
  return <TemozonNorteContent lang={lang} />;
}
