import { getServerLang } from '@/lib/lang';
import ViviriEnNuevoVallartaContent from '@/components/pages/ViviriEnNuevoVallartaContent';

export const metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/blog/vivir-en-nuevo-vallarta',
    languages: {
      'es-MX': 'https://shortstaymx.com/blog/vivir-en-nuevo-vallarta',
      'en-US': 'https://shortstaymx.com/en/blog/vivir-en-nuevo-vallarta',
      'x-default': 'https://shortstaymx.com/blog/vivir-en-nuevo-vallarta',
    },
  },
  title: 'Vivir en Nuevo Vallarta: Guía para expatriados | ShortStayMX',
  description: 'Todo sobre vivir en Nuevo Vallarta y la Riviera Nayarit: Flamingos, Bucerías, Cruz de Huanacaxtle. Guía completa de zonas, costos y estilo de vida en el Pacífico.',
};

export default async function ViviriEnNuevoVallarta() {
  const lang = await getServerLang();
  return <ViviriEnNuevoVallartaContent lang={lang} />;
}
