import Link from 'next/link';
import { getT } from '@/lib/lang';
import LangToggle from '@/components/layout/LangToggle';

export const metadata = {
  title: 'Blog | ShortStayMX — Guías para vivir en México',
  description: 'Guías, consejos y recursos para expatriados, nómadas digitales y viajeros que quieren vivir en México. Información sobre las mejores colonias, ciudades y tips para rentar.',
};

const POSTS = [
  {
    slug: 'polanco-vs-roma-norte',
    title_es: 'Polanco vs Roma Norte: ¿Cuál es la mejor colonia para vivir en CDMX?',
    title_en: 'Polanco vs Roma Norte: Which is the best neighborhood to live in Mexico City?',
    desc_es: 'Comparamos las dos colonias más populares de Ciudad de México para ayudarte a elegir dónde vivir.',
    desc_en: 'We compare the two most popular neighborhoods in Mexico City to help you choose where to live.',
    emoji: '🏛️',
    date: '2024-01-15',
  },
  {
    slug: 'guia-expatriados-cdmx',
    title_es: 'Guía completa para expatriados en Ciudad de México',
    title_en: 'Complete guide for expats in Mexico City',
    desc_es: 'Todo lo que necesitas saber para mudarte a CDMX: colonias, costos, transporte y vida cotidiana.',
    desc_en: 'Everything you need to know to move to CDMX: neighborhoods, costs, transportation and daily life.',
    emoji: '🌆',
    date: '2024-01-22',
  },
  {
    slug: 'mejores-zonas-cancun',
    title_es: 'Mejores zonas para rentar en Cancún: Zona Hotelera vs Puerto Cancún',
    title_en: 'Best areas to rent in Cancun: Hotel Zone vs Puerto Cancun',
    desc_es: 'Descubre las diferencias entre las principales zonas de Cancún para encontrar la que mejor se adapta a ti.',
    desc_en: 'Discover the differences between the main areas of Cancun to find the one that best suits you.',
    emoji: '🏖️',
    date: '2024-02-01',
  },
  {
    slug: 'nomadas-digitales-mexico',
    title_es: 'Las mejores ciudades de México para nómadas digitales en 2024',
    title_en: 'The best cities in Mexico for digital nomads in 2024',
    desc_es: 'México se ha convertido en uno de los destinos favoritos para trabajar de forma remota. Te contamos cuáles son las mejores ciudades.',
    desc_en: 'Mexico has become one of the favorite destinations for remote work. We tell you which are the best cities.',
    emoji: '💻',
    date: '2024-02-10',
  },
  {
    slug: 'vivir-en-tulum',
    title_es: 'Vivir en Tulum: Guía completa para expatriados',
    title_en: 'Living in Tulum: Complete guide for expats',
    desc_es: 'Todo lo que necesitas saber sobre vivir en Tulum: zonas, costos, estilo de vida y consejos prácticos.',
    desc_en: 'Everything you need to know about living in Tulum: areas, costs, lifestyle and practical tips.',
    emoji: '🌿',
    date: '2024-02-18',
  },
  {
    slug: 'renta-temporal-vs-hotel',
    title_es: 'Renta temporal vs hotel en México: ¿Qué conviene más?',
    title_en: 'Short-term rental vs hotel in Mexico: Which is better?',
    desc_es: 'Analizamos las ventajas y desventajas de rentar un departamento amueblado vs quedarse en un hotel.',
    desc_en: 'We analyze the pros and cons of renting a furnished apartment vs staying in a hotel.',
    emoji: '🏨',
    date: '2024-02-25',
  },
  {
    slug: 'vivir-en-puerto-vallarta',
    title_es: 'Vivir en Puerto Vallarta: Guía para expatriados',
    title_en: 'Living in Puerto Vallarta: Guide for expats',
    desc_es: 'Puerto Vallarta es uno de los destinos más queridos por expatriados. Te contamos todo sobre vivir ahí.',
    desc_en: 'Puerto Vallarta is one of the most beloved destinations for expats. We tell you everything about living there.',
    emoji: '🌊',
    date: '2024-03-05',
  },
  {
    slug: 'mejores-colonias-guadalajara',
    title_es: 'Las mejores colonias de Guadalajara para vivir como expatriado',
    title_en: 'The best neighborhoods in Guadalajara to live as an expat',
    desc_es: 'Guía completa de las mejores zonas de Guadalajara: Puerta de Hierro, Colonia Americana y Providencia.',
    desc_en: 'Complete guide to the best areas of Guadalajara: Puerta de Hierro, Colonia Americana and Providencia.',
    emoji: '🌺',
    date: '2024-03-12',
  },
];

export default async function BlogPage() {
  const { lang } = await getT();
  const es = lang !== 'en';

  return (
    <div style={{ backgroundColor: 'var(--cream)', minHeight: '100vh' }}>
      <nav className="sticky top-0 z-40 backdrop-blur-md" style={{ backgroundColor: 'rgba(28,28,30,0.9)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-4">
          <Link href="/" className="font-serif font-medium" style={{ color: 'var(--ink)' }}>ShortStayMX</Link>
          <div className="ml-auto"><LangToggle currentLang={lang} className="text-[--muted] hover:text-[--ink]" /></div>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-xs tracking-widest uppercase font-medium mb-3" style={{ color: 'var(--gold)' }}>
          {es ? 'Recursos y guías' : 'Resources and guides'}
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl mb-4" style={{ color: 'var(--ink)' }}>
          {es ? 'Blog' : 'Blog'}
        </h1>
        <p className="text-base mb-16" style={{ color: 'var(--muted)' }}>
          {es
            ? 'Guías, consejos y recursos para vivir y rentar en México.'
            : 'Guides, tips and resources for living and renting in Mexico.'}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {POSTS.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <div className="rounded-2xl p-8 h-full transition-colors hover:border-[var(--gold)]"
                style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
                <span className="text-4xl mb-4 block">{post.emoji}</span>
                <p className="text-xs mb-2" style={{ color: 'var(--muted)' }}>
                  {new Date(post.date).toLocaleDateString(es ? 'es-MX' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                <h2 className="font-serif text-xl mb-3 leading-snug" style={{ color: 'var(--ink)' }}>
                  {es ? post.title_es : post.title_en}
                </h2>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
                  {es ? post.desc_es : post.desc_en}
                </p>
                <span className="text-xs font-semibold" style={{ color: 'var(--gold)' }}>
                  {es ? 'Leer más →' : 'Read more →'}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
