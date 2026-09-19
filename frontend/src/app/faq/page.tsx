import { getServerLang } from '@/lib/lang';
import FaqContent from '@/components/pages/FaqContent';

export async function generateMetadata() {
  return {
    alternates: {
      canonical: 'https://shortstaymx.com/faq',
      languages: {
        'es-MX': 'https://shortstaymx.com/faq',
        'en-US': 'https://shortstaymx.com/en/faq',
        'x-default': 'https://shortstaymx.com/faq',
      },
    },
    title: 'Preguntas frecuentes | ShortStayMX',
    description: 'Todo lo que necesitas saber antes de reservar con ShortStayMX.',
  };
}

export default async function FaqPage() {
  const lang = await getServerLang();
  return <FaqContent lang={lang} />;
}
