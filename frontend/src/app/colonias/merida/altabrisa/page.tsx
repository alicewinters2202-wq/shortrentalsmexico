import { getServerLang } from '@/lib/lang';
import AltabrisaContent from '@/components/pages/AltabrisaContent';

export const metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/colonias/merida/altabrisa',
    languages: {
      'es-MX': 'https://shortstaymx.com/colonias/merida/altabrisa',
      'en-US': 'https://shortstaymx.com/en/colonias/merida/altabrisa',
      'x-default': 'https://shortstaymx.com/colonias/merida/altabrisa',
    },
  },
  title: "Furnished rentals in Altabrisa, Merida | ShortStayMX",
  description: "Furnished apartments in Altabrisa and Montecristo, Merida. Modern residential area with Plaza Altabrisa, private hospitals and excellent infrastructure.",
};

export default async function AltabrisaPage() {
  const lang = await getServerLang();
  return <AltabrisaContent lang={lang} />;
}
