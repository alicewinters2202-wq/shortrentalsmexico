import { getServerLang } from '@/lib/lang';
import ViviriEnMonterreyContent from '@/components/pages/ViviriEnMonterreyContent';

export const metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/blog/vivir-en-monterrey',
    languages: {
      'es-MX': 'https://shortstaymx.com/blog/vivir-en-monterrey',
      'en-US': 'https://shortstaymx.com/en/blog/vivir-en-monterrey',
      'x-default': 'https://shortstaymx.com/blog/vivir-en-monterrey',
    },
  },
  title: 'Vivir en Monterrey: Guía para ejecutivos y expatriados | ShortStayMX',
  description: 'Todo sobre vivir en Monterrey: San Pedro Garza García, Valle Oriente, nearshoring, costos y la comunidad de expatriados en la capital industrial de México.',
};

export default async function ViviriEnMonterrey() {
  const lang = await getServerLang();
  return <ViviriEnMonterreyContent lang={lang} />;
}
