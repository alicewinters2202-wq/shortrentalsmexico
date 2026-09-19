import { fetchPreview, parseAddress, imageUrl } from '@/types/preview';
import PropertyDetailContent from '@/components/property-detail/PropertyDetailContent';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const properties = await fetchPreview();
  const property = properties.find((p) => p.slug === slug) ?? properties.find((p) => p.id === Number(slug));
  if (!property) return {};

  const { street } = parseAddress(property.address);
  const canonical = `https://shortstaymx.com/en/properties/${property.slug}`;
  const esUrl = `https://shortstaymx.com/properties/${property.slug}`;

  return {
    alternates: {
      canonical,
      languages: { 'es-MX': esUrl, 'en-US': canonical, 'x-default': esUrl },
    },
    title: `Furnished rental in ${street}, ${property.city} | ShortStayMX`,
    description: `${property.bedrooms} bedroom${property.bedrooms > 1 ? 's' : ''}, ${property.bathrooms} bathroom${property.bathrooms > 1 ? 's' : ''}, ${property.sqMeters}m² in ${property.city}. Monthly rent from ${Math.round(property.pricePerMonth).toLocaleString('en-US')} MXN. Available on ShortStayMX.`,
    openGraph: {
      title: `${street} — ${property.city} | ShortStayMX`,
      description: `Furnished short and mid-term rental in ${property.city}. ${property.bedrooms} bd, ${property.bathrooms} ba, WiFi ${property.wifiSpeed} Mbps.`,
      images: property.images[0] ? [{ url: imageUrl(property.images[0]) }] : [],
    },
  };
}

export default async function EnglishPropertyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <PropertyDetailContent slug={slug} lang="en" />;
}
