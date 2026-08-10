import { fetchPreview } from '@/types/preview';

export default async function sitemap() {
  const properties = await fetchPreview();

  const propertyUrls = properties.map((p) => ({
    url: `https://temporaryrentalsmexico.com/properties/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: 'https://temporaryrentalsmexico.com',
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: 'https://temporaryrentalsmexico.com/properties',
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: 'https://temporaryrentalsmexico.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: 'https://temporaryrentalsmexico.com/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: 'https://temporaryrentalsmexico.com/faq',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    ...propertyUrls,
  ];
}