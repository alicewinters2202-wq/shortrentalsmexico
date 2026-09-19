import { getServerLang } from '@/lib/lang';
import ViviriEnSanMiguelContent from '@/components/pages/ViviriEnSanMiguelContent';

export const metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/blog/vivir-en-san-miguel-de-allende',
    languages: {
      'es-MX': 'https://shortstaymx.com/blog/vivir-en-san-miguel-de-allende',
      'en-US': 'https://shortstaymx.com/en/blog/vivir-en-san-miguel-de-allende',
      'x-default': 'https://shortstaymx.com/blog/vivir-en-san-miguel-de-allende',
    },
  },
  title: 'Vivir en San Miguel de Allende: Guía completa | ShortStayMX',
  description: 'Todo sobre vivir en San Miguel de Allende: el paraíso colonial de México favorito de expatriados y jubilados internacionales. Guía completa de zonas, costos y estilo de vida.',
};

export default async function ViviriEnSanMiguel() {
  const lang = await getServerLang();
  return <ViviriEnSanMiguelContent lang={lang} />;
}
