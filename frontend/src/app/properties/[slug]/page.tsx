import { fetchPreview, parseAddress, imageUrl } from '@/types/preview';
import { getServerLang } from '@/lib/lang';
import PropertyDetailContent from '@/components/property-detail/PropertyDetailContent';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const properties = await fetchPreview();
  const property = properties.find((p) => p.slug === slug) ?? properties.find((p) => p.id === Number(slug));
  if (!property) return {};

  const { street, neighborhood } = parseAddress(property.address);
  const canonical = `https://shortstaymx.com/properties/${property.slug}`;
  const enUrl = `https://shortstaymx.com/en/properties/${property.slug}`;

  return {
    alternates: {
      canonical,
      languages: { 'es-MX': canonical, 'en-US': enUrl, 'x-default': canonical },
    },
    title: `Renta amueblada en ${street}, ${property.city} | ShortStayMX`,
    description: `${property.bedrooms} recámaras, ${property.bathrooms} baños, ${property.sqMeters}m² en ${neighborhood}, ${property.city}. Renta mensual desde ${Math.round(property.pricePerMonth).toLocaleString('es-MX')} MXN. Disponible en ShortStayMX.`,
    openGraph: {
      title: `${street} — ${property.city} | ShortStayMX`,
      description: `Renta temporal amueblada en ${property.city}. ${property.bedrooms} rec, ${property.bathrooms} baños, WiFi ${property.wifiSpeed} Mbps.`,
      images: property.images[0] ? [{ url: imageUrl(property.images[0]) }] : [],
    },
  };
}

export default async function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lang = await getServerLang();
  return <PropertyDetailContent slug={slug} lang={lang} />;
}
