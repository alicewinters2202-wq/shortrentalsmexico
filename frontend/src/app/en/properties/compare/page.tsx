import type { Metadata } from 'next';
import CompareContent from '@/components/pages/CompareContent';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/en/properties/compare',
    languages: {
      'es-MX': 'https://shortstaymx.com/properties/compare',
      'en-US': 'https://shortstaymx.com/en/properties/compare',
      'x-default': 'https://shortstaymx.com/properties/compare',
    },
  },
  title: 'Compare properties | ShortStayMX',
  description: 'Compare up to 3 properties side by side: price, bedrooms, amenities and availability.',
};

export default async function EnglishComparePage({
  searchParams,
}: {
  searchParams: Promise<{ ids?: string }>;
}) {
  return <CompareContent lang="en" searchParams={searchParams} />;
}
