import { getServerLang } from '@/lib/lang';
import RequirementsContent from '@/components/pages/RequirementsContent';

export async function generateMetadata() {
  return {
    alternates: {
      canonical: 'https://shortstaymx.com/requirements',
      languages: {
        'es-MX': 'https://shortstaymx.com/requirements',
        'en-US': 'https://shortstaymx.com/en/requirements',
        'x-default': 'https://shortstaymx.com/requirements',
      },
    },
    title: 'Nuestros requisitos | ShortStayMX',
    description: 'Para reservar cualquiera de nuestras propiedades en ShortStayMX, necesitas cumplir con estos requisitos.',
  };
}

export default async function RequirementsPage() {
  const lang = await getServerLang();
  return <RequirementsContent lang={lang} />;
}
