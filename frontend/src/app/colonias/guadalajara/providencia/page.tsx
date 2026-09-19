import { getServerLang } from '@/lib/lang';
import ProvidenciaContent from '@/components/pages/ProvidenciaContent';

export const metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/colonias/guadalajara/providencia',
    languages: {
      'es-MX': 'https://shortstaymx.com/colonias/guadalajara/providencia',
      'en-US': 'https://shortstaymx.com/en/colonias/guadalajara/providencia',
      'x-default': 'https://shortstaymx.com/colonias/guadalajara/providencia',
    },
  },
  title: "Furnished rentals in Providencia, Guadalajara | ShortStayMX",
  description: "Furnished apartments in Providencia, Guadalajara. Quiet and elegant neighborhood with tree-lined streets, great restaurants and central location.",
};

export default async function ProvidenciaPage() {
  const lang = await getServerLang();
  return <ProvidenciaContent lang={lang} />;
}
