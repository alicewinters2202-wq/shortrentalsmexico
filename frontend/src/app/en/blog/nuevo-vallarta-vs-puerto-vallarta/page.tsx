import type { Metadata } from 'next';
import NuevoVallartaVsPuertoVallartaContent from '@/components/pages/NuevoVallartaVsPuertoVallartaContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/en/blog/nuevo-vallarta-vs-puerto-vallarta',
    languages: {
      'es-MX': 'https://shortstaymx.com/blog/nuevo-vallarta-vs-puerto-vallarta',
      'en-US': 'https://shortstaymx.com/en/blog/nuevo-vallarta-vs-puerto-vallarta',
      'x-default': 'https://shortstaymx.com/blog/nuevo-vallarta-vs-puerto-vallarta',
    },
  },
  title: 'Nuevo Vallarta vs Puerto Vallarta: Which to choose? | ShortStayMX',
  description: 'Differences, costs and lifestyle in the two most popular destinations of Banderas Bay.',
};

export default function EnglishNuevoVallartaVsPuertoVallarta() {
  return <NuevoVallartaVsPuertoVallartaContent lang="en" />;
}
