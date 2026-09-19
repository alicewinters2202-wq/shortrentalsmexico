import PropertiesContent from '@/components/properties/PropertiesContent';
import { getServerLang } from '@/lib/lang';

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ city?: string }> }) {
  let city: string | undefined;
  try { const sp = await searchParams; city = sp?.city; } catch { city = undefined; }
  const title = city ? `Propiedades en ${city} | ShortStayMX` : 'Todas las propiedades | ShortStayMX';
  const description = city ? `Encuentra departamentos y casas amuebladas para renta temporal en ${city}. Propiedades verificadas con todo incluido.` : 'Explora departamentos y casas amuebladas para renta temporal en Ciudad de México, Guadalajara, Monterrey, Cancún, Mérida y más ciudades de México.';
  const canonical = city ? `https://shortstaymx.com/properties?city=${encodeURIComponent(city)}` : 'https://shortstaymx.com/properties';
  const enUrl = city ? `https://shortstaymx.com/en/properties?city=${encodeURIComponent(city)}` : 'https://shortstaymx.com/en/properties';
  return {
    alternates: {
      canonical,
      languages: { 'es-MX': canonical, 'en-US': enUrl, 'x-default': canonical },
    },
    title,
    description,
    openGraph: { title, description, url: canonical },
  };
}

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: Promise<{ city?: string; guests?: string; sort?: string; page?: string; minPrice?: string; maxPrice?: string; bedrooms?: string; view?: string; ids?: string; checkIn?: string }>;
}) {
  const lang = await getServerLang();
  return <PropertiesContent lang={lang} searchParams={searchParams} />;
}
