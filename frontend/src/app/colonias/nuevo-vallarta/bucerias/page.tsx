import { getServerLang } from '@/lib/lang';
import BuceriasContent from '@/components/pages/BuceriasContent';

export const metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/colonias/nuevo-vallarta/bucerias',
    languages: {
      'es-MX': 'https://shortstaymx.com/colonias/nuevo-vallarta/bucerias',
      'en-US': 'https://shortstaymx.com/en/colonias/nuevo-vallarta/bucerias',
      'x-default': 'https://shortstaymx.com/colonias/nuevo-vallarta/bucerias',
    },
  },
  title: "Furnished rentals in Bucerias, Nuevo Vallarta | ShortStayMX",
  description: "Furnished apartments in Bucerias and Cruz de Huanacaxtle, Riviera Nayarit. Authentic coastal towns with calm beaches, local restaurants and a strong expat community.",
};

export default async function BuceriasPage() {
  const lang = await getServerLang();
  return <BuceriasContent lang={lang} />;
}
