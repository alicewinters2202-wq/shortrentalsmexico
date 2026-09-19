import PropertiesContent from '@/components/properties/PropertiesContent';

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ city?: string }> }) {
  let city: string | undefined;
  try { const sp = await searchParams; city = sp?.city; } catch { city = undefined; }
  const title = city ? `Properties in ${city} | ShortStayMX` : 'All Properties | ShortStayMX';
  const description = city ? `Find furnished apartments and houses for short and mid-term rental in ${city}. Verified properties, everything included.` : 'Explore furnished apartments and houses for short and mid-term rental in Mexico City, Guadalajara, Monterrey, Cancún, Mérida and more cities across Mexico.';
  const canonical = city ? `https://shortstaymx.com/en/properties?city=${encodeURIComponent(city)}` : 'https://shortstaymx.com/en/properties';
  const esUrl = city ? `https://shortstaymx.com/properties?city=${encodeURIComponent(city)}` : 'https://shortstaymx.com/properties';
  return {
    alternates: {
      canonical,
      languages: { 'es-MX': esUrl, 'en-US': canonical, 'x-default': esUrl },
    },
    title,
    description,
    openGraph: { title, description, url: canonical },
  };
}

export default async function EnglishPropertiesPage({
  searchParams,
}: {
  searchParams: Promise<{ city?: string; guests?: string; sort?: string; page?: string; minPrice?: string; maxPrice?: string; bedrooms?: string; view?: string; ids?: string; checkIn?: string }>;
}) {
  return <PropertiesContent lang="en" searchParams={searchParams} />;
}
