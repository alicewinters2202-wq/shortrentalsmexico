import { getServerLang } from '@/lib/lang';
import WhyUsContent from '@/components/pages/WhyUsContent';

export async function generateMetadata() {
  return {
    alternates: {
      canonical: 'https://shortstaymx.com/why-us',
      languages: {
        'es-MX': 'https://shortstaymx.com/why-us',
        'en-US': 'https://shortstaymx.com/en/why-us',
        'x-default': 'https://shortstaymx.com/why-us',
      },
    },
    title: 'Por que elegirnos | ShortStayMX',
    description: 'Conoce por que ShortStayMX es la mejor opción para tu renta temporal en México. Mas de 3 años de experiencia, equipo de +40 personas y mejores precios que Airbnb.',
  };
}

export default async function WhyUsPage() {
  const lang = await getServerLang();
  return <WhyUsContent lang={lang} />;
}
