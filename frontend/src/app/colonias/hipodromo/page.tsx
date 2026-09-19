import { getServerLang } from '@/lib/lang';
import HipodromoContent from '@/components/pages/HipodromoContent';

export const metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/colonias/hipodromo',
    languages: {
      'es-MX': 'https://shortstaymx.com/colonias/hipodromo',
      'en-US': 'https://shortstaymx.com/en/colonias/hipodromo',
      'x-default': 'https://shortstaymx.com/colonias/hipodromo',
    },
  },
  title: "Rentas amuebladas en Hipodromo Condesa, CDMX | ShortStayMX",
  description: "Departamentos amueblados en el Hipodromo y Hipodromo Condesa, Ciudad de México. Edificios modernos con alberca, gimnasio y roof garden a mejor precio que Polanco.",
};

export default async function HipodromoPage() {
  const lang = await getServerLang();
  return <HipodromoContent lang={lang} />;
}
