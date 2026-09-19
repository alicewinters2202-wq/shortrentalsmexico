import { getServerLang } from '@/lib/lang';
import CondesaContent from '@/components/pages/CondesaContent';

export const metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/colonias/condesa',
    languages: {
      'es-MX': 'https://shortstaymx.com/colonias/condesa',
      'en-US': 'https://shortstaymx.com/en/colonias/condesa',
      'x-default': 'https://shortstaymx.com/colonias/condesa',
    },
  },
  title: "Rentas amuebladas en Condesa, CDMX | ShortStayMX",
  description: "Departamentos amueblados en la Condesa, Ciudad de México. Arquitectura art deco, Parque México, Avenida Amsterdam y la mejor calidad de vida en CDMX.",
};

export default async function CondesaPage() {
  const lang = await getServerLang();
  return <CondesaContent lang={lang} />;
}
