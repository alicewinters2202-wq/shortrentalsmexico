import Link from 'next/link';
import { getT } from '@/lib/lang';
import LangToggle from '@/components/layout/LangToggle';

export const metadata = {
  title: 'Mejores colonias de Cancún para vivir | ShortStayMX',
  description: 'Guía completa de las mejores zonas de Cancún para expatriados y nómadas digitales: Zona Hotelera y Puerto Cancún con todo lo que necesitas saber.',
};

export default async function MejoresColoniasCancun() {
  const { lang } = await getT();
  const es = lang !== 'en';
  return (
    <div style={{ backgroundColor: 'var(--cream)', minHeight: '100vh' }}>
      <nav className="sticky top-0 z-40 backdrop-blur-md" style={{ backgroundColor: 'rgba(28,28,30,0.9)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-4">
          <Link href="/blog" className="text-sm transition-colors hover:opacity-80" style={{ color: 'var(--muted)' }}>← Blog</Link>
          <span style={{ color: 'var(--border)' }}>|</span>
          <Link href="/" className="font-serif font-medium" style={{ color: 'var(--ink)' }}>ShortStayMX</Link>
          <div className="ml-auto"><LangToggle currentLang={lang} className="text-[--muted] hover:text-[--ink]" /></div>
        </div>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-xs tracking-widest uppercase font-medium mb-4" style={{ color: 'var(--gold)' }}>Cancún</p>
        <h1 className="font-serif text-4xl sm:text-5xl mb-6 leading-tight" style={{ color: 'var(--ink)' }}>
          {es ? 'Mejores colonias de Cancún para vivir' : 'Best neighborhoods in Cancun to live'}
        </h1>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Cancún es mucho más que un destino de vacaciones. Cada vez más personas eligen vivir aquí de forma permanente, atraídas por su clima tropical excepcional, playas paradisíacas del Caribe, infraestructura moderna en constante crecimiento y excelentes conexiones aéreas internacionales. La ciudad tiene varias zonas muy diferentes entre sí, y elegir la correcta puede hacer toda la diferencia.' : 'Cancun is much more than a vacation destination. More and more people are choosing to live here permanently, attracted by its exceptional tropical climate, Caribbean paradise beaches, constantly growing modern infrastructure and excellent international air connections. The city has several very different areas, and choosing the right one can make all the difference.'}
          </p>

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Por qué vivir en Cancún' : 'Why live in Cancun'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Cancún tiene varias ventajas competitivas como lugar para vivir. El aeropuerto internacional tiene conexiones directas con más de 100 destinos en América y Europa, lo que facilita los viajes frecuentes. El clima tropical es soleado casi todo el año. Y la infraestructura de servicios — hospitales privados, colegios internacionales, centros comerciales modernos — es de primer nivel.' : 'Cancun has several competitive advantages as a place to live. The international airport has direct connections to more than 100 destinations in the Americas and Europe, facilitating frequent travel. The tropical climate is sunny almost year-round. And the service infrastructure — private hospitals, international schools, modern shopping centers — is first-class.'}
          </p>

          {[
            {
              name: es ? 'Zona Hotelera' : 'Hotel Zone', emoji: '🏖️',
              es_desc: 'La franja costera más icónica de Cancún, de 23 kilómetros de largo, rodeada por el Mar Caribe turquesa y la Laguna Nichupté. Es el corazón turístico y cosmopolita de la ciudad. Sus condominios de lujo ofrecen acceso directo a las mejores playas del Caribe mexicano, vistas panorámicas al mar, albercas infinitas y acceso inmediato a restaurantes, centros comerciales y vida nocturna del Boulevard Kukulcán.',
              en_desc: 'The most iconic coastal strip of Cancun, 23 kilometers long, surrounded by turquoise Caribbean Sea and Nichupte Lagoon. It is the tourist and cosmopolitan heart of the city. Its luxury condominiums offer direct access to the best beaches of the Mexican Caribbean, panoramic sea views, infinity pools and immediate access to restaurants, shopping centers and nightlife on Kukulcan Boulevard.',
            },
            {
              name: 'Puerto Cancún', emoji: '⛵',
              es_desc: 'El desarrollo residencial más moderno y exclusivo de Cancún, diseñado específicamente para residentes de alto poder adquisitivo que buscan privacidad, exclusividad y amenidades de clase mundial. Con marina capaz de albergar yates de hasta 200 pies, campo de golf diseñado por Tom Weiskopf, torres residenciales con acabados de lujo y acceso controlado 24 horas, es la opción premium para quienes no quieren comprometer nada.',
              en_desc: 'The most modern and exclusive residential development in Cancun, designed specifically for high-net-worth residents seeking privacy, exclusivity and world-class amenities. With a marina capable of accommodating yachts up to 200 feet, a golf course designed by Tom Weiskopf, residential towers with luxury finishes and 24-hour controlled access, it is the premium option for those who do not want to compromise on anything.',
            },
          ].map(item => (
            <div key={item.name} className="rounded-2xl p-6 my-4" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
              <span className="text-3xl mb-3 block">{item.emoji}</span>
              <h3 className="font-serif text-xl mb-3" style={{ color: 'var(--ink)' }}>{item.name}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{es ? item.es_desc : item.en_desc}</p>
            </div>
          ))}

          <div className="rounded-2xl p-8 mt-12 text-center" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <p className="font-serif text-2xl mb-3" style={{ color: 'var(--ink)' }}>{es ? 'Ver propiedades en Cancún' : 'View properties in Cancun'}</p>
            <Link href="/properties?city=Canc%C3%BAn" className="inline-block px-8 py-3 rounded-full text-sm font-medium text-white" style={{ backgroundColor: 'var(--gold)' }}>
              {es ? 'Ver propiedades' : 'View properties'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
