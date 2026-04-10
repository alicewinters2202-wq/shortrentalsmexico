import { fetchPreview } from '@/types/preview';

export default async function sitemap() {
  const properties = await fetchPreview();

  const propertyUrls = properties.map((p) => ({
    url: `https://shortstaymx.com/properties/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const staticUrls = [
    { url: 'https://shortstaymx.com', lastModified: new Date(), changeFrequency: 'daily' as const, priority: 1.0 },
    { url: 'https://shortstaymx.com/properties', lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.9 },
    { url: 'https://shortstaymx.com/about', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: 'https://shortstaymx.com/faq', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: 'https://shortstaymx.com/requirements', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: 'https://shortstaymx.com/agents', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.4 },
  ];

  return [...staticUrls, ...propertyUrls];
}