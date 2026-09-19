import HomeContent from '@/components/home/HomeContent';
import { getT } from '@/lib/lang';

export async function generateMetadata() {
  return {
    alternates: {
      canonical: 'https://shortstaymx.com/',
      languages: {
        'es-MX': 'https://shortstaymx.com/',
        'en-US': 'https://shortstaymx.com/en',
        'x-default': 'https://shortstaymx.com/',
      },
    },
  };
}

export default async function Home() {
  const { lang } = await getT();
  return <HomeContent lang={lang} />;
}
