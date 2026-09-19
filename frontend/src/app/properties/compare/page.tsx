import { getServerLang } from '@/lib/lang';
import CompareContent from '@/components/pages/CompareContent';

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  return {
    alternates: {
      canonical: 'https://shortstaymx.com/properties/compare',
      languages: {
        'es-MX': 'https://shortstaymx.com/properties/compare',
        'en-US': 'https://shortstaymx.com/en/properties/compare',
        'x-default': 'https://shortstaymx.com/properties/compare',
      },
    },
    title: 'Comparar propiedades | ShortStayMX',
    description: 'Compara hasta 3 propiedades lado a lado: precio, recámaras, amenidades y disponibilidad.',
  };
}

export default async function ComparePage({
  searchParams,
}: {
  searchParams: Promise<{ ids?: string }>;
}) {
  const lang = await getServerLang();
  return <CompareContent lang={lang} searchParams={searchParams} />;
}
