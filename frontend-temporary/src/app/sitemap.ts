import { fetchPreview } from '@/types/preview';

const COLONIAS_SLUGS = [
  '', 'condesa', 'hipodromo', 'juarez', 'polanco', 'roma-norte',
  'cancun/puerto-cancun', 'cancun/zona-hotelera',
  'guadalajara/americana', 'guadalajara/providencia', 'guadalajara/puerta-de-hierro',
  'merida/altabrisa', 'merida/centro', 'merida/temozon-norte',
  'monterrey/san-pedro', 'monterrey/valle-oriente',
  'nuevo-vallarta/bucerias', 'nuevo-vallarta/flamingos',
  'playa-del-carmen/mayakoba', 'playa-del-carmen/playacar',
  'puerto-vallarta/marina-vallarta', 'puerto-vallarta/zona-hotelera', 'puerto-vallarta/zona-romantica',
  'san-miguel/centro', 'san-miguel/villa-de-los-frailes',
  'tulum/aldea-zama', 'tulum/la-veleta',
];

const BLOG_SLUGS = [
  'polanco-vs-roma-norte', 'guia-expatriados-cdmx', 'mejores-zonas-cancun', 'nomadas-digitales-mexico',
  'vivir-en-tulum', 'renta-temporal-vs-hotel', 'vivir-en-puerto-vallarta', 'mejores-colonias-guadalajara',
  'vivir-en-merida', 'vivir-en-monterrey', 'vivir-en-san-miguel-de-allende', 'vivir-en-nuevo-vallarta',
  'mejores-colonias-cancun', 'mejores-zonas-tulum', 'polanco-guia-completa', 'roma-norte-guia-completa',
  'tulum-vs-playa-del-carmen', 'nuevo-vallarta-vs-puerto-vallarta', 'merida-vs-cdmx', 'condesa-guia-completa',
];

export default async function sitemap() {
  const properties = await fetchPreview();

  const propertyUrls = properties.map((p) => ({
    url: `https://temporaryrentalsmexico.com/properties/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const colonasUrls = COLONIAS_SLUGS.map((slug) => ({
    url: `https://temporaryrentalsmexico.com/colonias${slug ? `/${slug}` : ''}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: slug ? 0.6 : 0.7,
  }));

  const blogUrls = BLOG_SLUGS.map((slug) => ({
    url: `https://temporaryrentalsmexico.com/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  const staticUrls = [
    { url: 'https://temporaryrentalsmexico.com', lastModified: new Date(), changeFrequency: 'daily' as const, priority: 1.0 },
    { url: 'https://temporaryrentalsmexico.com/properties', lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.9 },
    { url: 'https://temporaryrentalsmexico.com/blog', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.6 },
    { url: 'https://temporaryrentalsmexico.com/about', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: 'https://temporaryrentalsmexico.com/why-us', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: 'https://temporaryrentalsmexico.com/como-funciona', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: 'https://temporaryrentalsmexico.com/contact', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.4 },
    { url: 'https://temporaryrentalsmexico.com/faq', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: 'https://temporaryrentalsmexico.com/requirements', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: 'https://temporaryrentalsmexico.com/agents', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.4 },
  ];

  return [...staticUrls, ...propertyUrls, ...colonasUrls, ...blogUrls];
}
