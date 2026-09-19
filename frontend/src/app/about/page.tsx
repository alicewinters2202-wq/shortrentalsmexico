import { getServerLang } from '@/lib/lang';
import AboutContent from '@/components/pages/AboutContent';

export async function generateMetadata() {
  return {
    alternates: {
      canonical: 'https://shortstaymx.com/about',
      languages: {
        'es-MX': 'https://shortstaymx.com/about',
        'en-US': 'https://shortstaymx.com/en/about',
        'x-default': 'https://shortstaymx.com/about',
      },
    },
    title: 'Sobre nosotros | ShortStayMX',
    description: 'Conoce a ShortStayMX: hospitalidad profesional en los mejores destinos de México.',
  };
}

export default async function AboutPage() {
  const lang = await getServerLang();
  return <AboutContent lang={lang} />;
}
