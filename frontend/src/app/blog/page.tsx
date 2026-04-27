import Link from 'next/link';
import { getT } from '@/lib/lang';
import LangToggle from '@/components/layout/LangToggle';

export const metadata = {
  title: 'Blog | ShortStayMX — Guías para vivir en México',
  description: 'Guías, consejos y recursos para expatriados, nómadas digitales y viajeros que quieren vivir en México.',
};

const POSTS = [
  { slug: 'polanco-vs-roma-norte', title_es: 'Polanco vs Roma Norte: ¿Cuál es la mejor colonia para vivir en CDMX?', title_en: 'Polanco vs Roma Norte: Which is the best neighborhood to live in Mexico City?', desc_es: 'Comparamos las dos colonias más populares de Ciudad de México para ayudarte a elegir dónde vivir.', desc_en: 'We compare the two most popular neighborhoods in Mexico City to help you choose where to live.', emoji: '🏛️', date: '2024-01-15' },
  { slug: 'guia-expatriados-cdmx', title_es: 'Guía completa para expatriados en Ciudad de México', title_en: 'Complete guide for expats in Mexico City', desc_es: 'Todo lo que necesitas saber para mudarte a CDMX: colonias, costos, transporte y vida cotidiana.', desc_en: 'Everything you need to know to move to CDMX: neighborhoods, costs, transportation and daily life.', emoji: '🌆', date: '2024-01-22' },
  { slug: 'mejores-zonas-cancun', title_es: 'Mejores zonas para rentar en Cancún: Zona Hotelera vs Puerto Cancún', title_en: 'Best areas to rent in Cancun: Hotel Zone vs Puerto Cancun', desc_es: 'Descubre las diferencias entre las principales zonas de Cancún para encontrar la que mejor se adapta a ti.', desc_en: 'Discover the differences between the main areas of Cancun to find the one that best suits you.', emoji: '🏖️', date: '2024-02-01' },
  { slug: 'nomadas-digitales-mexico', title_es: 'Las mejores ciudades de México para nómadas digitales', title_en: 'The best cities in Mexico for digital nomads', desc_es: 'México se ha convertido en uno de los destinos favoritos para trabajar de forma remota.', desc_en: 'Mexico has become one of the favorite destinations for remote work.', emoji: '💻', date: '2024-02-10' },
  { slug: 'vivir-en-tulum', title_es: 'Vivir en Tulum: Guía completa para expatriados', title_en: 'Living in Tulum: Complete guide for expats', desc_es: 'Todo lo que necesitas saber sobre vivir en Tulum: zonas, costos, estilo de vida y consejos prácticos.', desc_en: 'Everything you need to know about living in Tulum: areas, costs, lifestyle and practical tips.', emoji: '🌿', date: '2024-02-18' },
  { slug: 'renta-temporal-vs-hotel', title_es: 'Renta temporal vs hotel en México: ¿Qué conviene más?', title_en: 'Short-term rental vs hotel in Mexico: Which is better?', desc_es: 'Analizamos las ventajas y desventajas de rentar un departamento amueblado vs quedarse en un hotel.', desc_en: 'We analyze the pros and cons of renting a furnished apartment vs staying in a hotel.', emoji: '🏨', date: '2024-02-25' },
  { slug: 'vivir-en-puerto-vallarta', title_es: 'Vivir en Puerto Vallarta: Guía para expatriados', title_en: 'Living in Puerto Vallarta: Guide for expats', desc_es: 'Puerto Vallarta es uno de los destinos más queridos por expatriados. Te contamos todo sobre vivir ahí.', desc_en: 'Puerto Vallarta is one of the most beloved destinations for expats. We tell you everything about living there.', emoji: '🌊', date: '2024-03-05' },
  { slug: 'mejores-colonias-guadalajara', title_es: 'Las mejores colonias de Guadalajara para vivir como expatriado', title_en: 'The best neighborhoods in Guadalajara to live as an expat', desc_es: 'Guía completa de las mejores zonas de Guadalajara: Puerta de Hierro, Colonia Americana y Providencia.', desc_en: 'Complete guide to the best areas of Guadalajara: Puerta de Hierro, Colonia Americana and Providencia.', emoji: '🌺', date: '2024-03-12' },
  { slug: 'vivir-en-merida', title_es: 'Vivir en Mérida: Guía completa para expatriados', title_en: 'Living in Merida: Complete guide for expats', desc_es: 'La ciudad más segura de México con arquitectura colonial, gastronomía yucateca y comunidad internacional.', desc_en: 'The safest city in Mexico with colonial architecture, Yucatecan gastronomy and international community.', emoji: '🏛️', date: '2024-03-19' },
  { slug: 'vivir-en-monterrey', title_es: 'Vivir en Monterrey: Guía para ejecutivos y expatriados', title_en: 'Living in Monterrey: Guide for executives and expats', desc_es: 'La capital industrial de México vive un boom de nearshoring. Guía completa para ejecutivos internacionales.', desc_en: 'Mexico\'s industrial capital is experiencing a nearshoring boom. Complete guide for international executives.', emoji: '🏢', date: '2024-03-26' },
  { slug: 'vivir-en-san-miguel-de-allende', title_es: 'Vivir en San Miguel de Allende: Guía completa', title_en: 'Living in San Miguel de Allende: Complete guide', desc_es: 'El paraíso colonial favorito de expatriados y jubilados internacionales. Patrimonio UNESCO.', desc_en: 'The colonial paradise favorite of expats and international retirees. UNESCO Heritage.', emoji: '⛪', date: '2024-04-02' },
  { slug: 'vivir-en-nuevo-vallarta', title_es: 'Vivir en Nuevo Vallarta: Guía para expatriados', title_en: 'Living in Nuevo Vallarta: Guide for expats', desc_es: 'La Riviera Nayarit ofrece playas, marinas de lujo y campos de golf a 20 minutos del aeropuerto de PV.', desc_en: 'The Riviera Nayarit offers beaches, luxury marinas and golf courses 20 minutes from PV airport.', emoji: '🌴', date: '2024-04-09' },
  { slug: 'mejores-colonias-cancun', title_es: 'Mejores colonias de Cancún para vivir', title_en: 'Best neighborhoods in Cancun to live', desc_es: 'Zona Hotelera vs Puerto Cancún: cuál es la mejor opción para vivir en el Caribe mexicano.', desc_en: 'Hotel Zone vs Puerto Cancun: which is the best option to live in the Mexican Caribbean.', emoji: '🏖️', date: '2024-04-16' },
  { slug: 'mejores-zonas-tulum', title_es: 'Mejores zonas de Tulum para vivir', title_en: 'Best areas in Tulum to live', desc_es: 'Aldea Zama, La Veleta y zona hotelera: cuál es la mejor zona de Tulum para ti.', desc_en: 'Aldea Zama, La Veleta and hotel zone: which is the best area of Tulum for you.', emoji: '🌿', date: '2024-04-23' },
  { slug: 'polanco-guia-completa', title_es: 'Polanco CDMX: Guía completa para vivir', title_en: 'Polanco CDMX: Complete living guide', desc_es: 'La zona más exclusiva de CDMX: restaurantes, museos, seguridad y todo lo que necesitas saber.', desc_en: 'The most exclusive area of CDMX: restaurants, museums, security and everything you need to know.', emoji: '🏛️', date: '2024-04-30' },
  { slug: 'roma-norte-guia-completa', title_es: 'Roma Norte CDMX: Guía completa para vivir', title_en: 'Roma Norte CDMX: Complete living guide', desc_es: 'La colonia más vibrante de CDMX: cafés, parques, gastronomía y todo sobre vivir en Roma Norte.', desc_en: 'The most vibrant neighborhood in CDMX: cafes, parks, gastronomy and everything about living in Roma Norte.', emoji: '☕', date: '2024-05-07' },
  { slug: 'tulum-vs-playa-del-carmen', title_es: 'Tulum vs Playa del Carmen: ¿Dónde vivir?', title_en: 'Tulum vs Playa del Carmen: Where to live?', desc_es: 'Comparamos los dos grandes destinos de la Riviera Maya para ayudarte a elegir dónde vivir.', desc_en: 'We compare the two major destinations of the Riviera Maya to help you choose where to live.', emoji: '🌊', date: '2024-05-14' },
  { slug: 'nuevo-vallarta-vs-puerto-vallarta', title_es: 'Nuevo Vallarta vs Puerto Vallarta: ¿Cuál elegir?', title_en: 'Nuevo Vallarta vs Puerto Vallarta: Which to choose?', desc_es: 'Diferencias, costos y estilo de vida en los dos destinos más populares de la Bahía de Banderas.', desc_en: 'Differences, costs and lifestyle in the two most popular destinations of Banderas Bay.', emoji: '⛵', date: '2024-05-21' },
  { slug: 'merida-vs-cdmx', title_es: 'Mérida vs Ciudad de México para expatriados', title_en: 'Merida vs Mexico City for expats', desc_es: 'Comparamos las dos ciudades más populares para expatriados en México: costos, clima, seguridad y más.', desc_en: 'We compare the two most popular cities for expats in Mexico: costs, climate, security and more.', emoji: '⚖️', date: '2024-05-28' },
  { slug: 'condesa-guia-completa', title_es: 'Condesa CDMX: Guía completa para vivir', title_en: 'Condesa CDMX: Complete living guide', desc_es: 'Arquitectura art déco, Parque México, Avenida Amsterdam y todo sobre vivir en la Condesa.', desc_en: 'Art deco architecture, Parque Mexico, Avenida Amsterdam and everything about living in Condesa.', emoji: '🌳', date: '2024-06-04' },
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
        <h1 className="font-serif text-4xl sm:text-5xl mb-4" style={{ color: 'var(--ink)' }}>Blog</h1>
        <p className="text-base mb-16" style={{ color: 'var(--muted)' }}>
          {es ? 'Guías, consejos y recursos para vivir y rentar en México.' : 'Guides, tips and resources for living and renting in Mexico.'}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {POSTS.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <div className="rounded-2xl p-8 h-full transition-colors hover:border-[var(--gold)]" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
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
