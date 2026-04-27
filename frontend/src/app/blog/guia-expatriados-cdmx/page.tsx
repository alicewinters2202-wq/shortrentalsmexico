import Link from 'next/link';
import { getT } from '@/lib/lang';
import LangToggle from '@/components/layout/LangToggle';

export const metadata = {
  title: 'Guía completa para expatriados en Ciudad de México | ShortStayMX',
  description: 'Todo lo que necesitas saber para mudarte a CDMX: mejores colonias, costos de vida, transporte, seguridad y consejos prácticos para expatriados.',
};

export default async function GuiaExpatriadosCDMX() {
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
        <p className="text-xs tracking-widest uppercase font-medium mb-4" style={{ color: 'var(--gold)' }}>{es ? 'Ciudad de México' : 'Mexico City'}</p>
        <h1 className="font-serif text-4xl sm:text-5xl mb-6 leading-tight" style={{ color: 'var(--ink)' }}>
          {es ? 'Guía completa para expatriados en Ciudad de México' : 'Complete guide for expats in Mexico City'}
        </h1>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Ciudad de México se ha convertido en uno de los destinos más populares para expatriados en el mundo. Con una oferta cultural inigualable, gastronomía de clase mundial, costos de vida razonables y una comunidad internacional muy activa, CDMX tiene todo para enamorarte. Esta guía te dice todo lo que necesitas saber para mudarte.' : 'Mexico City has become one of the most popular destinations for expats in the world. With an unmatched cultural offering, world-class gastronomy, reasonable cost of living and a very active international community, CDMX has everything to fall in love with. This guide tells you everything you need to know to move there.'}
          </p>

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Por qué los expatriados eligen CDMX' : 'Why expats choose CDMX'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Ciudad de México ofrece una combinación única de factores que la hacen irresistible para expatriados. El costo de vida es significativamente más bajo que en ciudades comparables de Estados Unidos o Europa. Un departamento amueblado de lujo en Polanco cuesta lo mismo que un estudio modesto en Nueva York o Londres.' : 'Mexico City offers a unique combination of factors that make it irresistible for expats. The cost of living is significantly lower than in comparable cities in the United States or Europe. A luxury furnished apartment in Polanco costs the same as a modest studio in New York or London.'}
          </p>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'La oferta cultural es extraordinaria. CDMX tiene más de 150 museos, una escena gastronómica que rivaliza con París y Tokio, una vida nocturna vibrante y una comunidad creativa e intelectual muy activa. Es una ciudad que nunca deja de sorprender.' : 'The cultural offering is extraordinary. CDMX has more than 150 museums, a gastronomic scene that rivals Paris and Tokyo, vibrant nightlife and a very active creative and intellectual community. It is a city that never stops surprising.'}
          </p>

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Las mejores colonias para expatriados' : 'Best neighborhoods for expats'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'La elección de colonia es fundamental. Cada una tiene su propio carácter y se adapta mejor a diferentes perfiles de expatriados.' : 'The choice of neighborhood is fundamental. Each one has its own character and is better suited to different expat profiles.'}
          </p>
          {[
            { name: 'Polanco', emoji: '🏛️', es_desc: 'La más exclusiva. Ideal para ejecutivos, diplomáticos y familias que priorizan seguridad y comodidad. Precios más altos pero calidad incomparable.', en_desc: 'The most exclusive. Ideal for executives, diplomats and families who prioritize security and comfort. Higher prices but incomparable quality.' },
            { name: 'Roma Norte', emoji: '☕', es_desc: 'La más vibrante. Perfecta para nómadas digitales, creativos y jóvenes profesionales. Mejor escena de cafés y restaurantes de la ciudad.', en_desc: 'The most vibrant. Perfect for digital nomads, creatives and young professionals. Best cafe and restaurant scene in the city.' },
            { name: 'Condesa', emoji: '🌳', es_desc: 'La más tranquila de las tres. Arquitectura art déco, Parque México y vida de barrio. Ideal para parejas y familias pequeñas.', en_desc: 'The most peaceful of the three. Art deco architecture, Parque Mexico and neighborhood life. Ideal for couples and small families.' },
            { name: 'Juárez', emoji: '🏙️', es_desc: 'La más accesible cerca de Reforma. En pleno auge con nuevos desarrollos. Perfecta para quienes buscan centralidad a menor precio.', en_desc: 'The most accessible near Reforma. In full boom with new developments. Perfect for those seeking centrality at a lower price.' },
          ].map(item => (
            <div key={item.name} className="rounded-2xl p-5 my-3" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{item.emoji}</span>
                <h3 className="font-serif text-lg" style={{ color: 'var(--ink)' }}>{item.name}</h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{es ? item.es_desc : item.en_desc}</p>
            </div>
          ))}

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Costo de vida en CDMX' : 'Cost of living in CDMX'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'El costo de vida en CDMX varía enormemente según la colonia y el estilo de vida. Un expatriado puede vivir cómodamente desde $2,500 USD al mes incluyendo renta, comida, transporte y entretenimiento. En el extremo más alto, con departamento de lujo en Polanco y vida social activa, el presupuesto puede superar los $6,000 USD.' : 'The cost of living in CDMX varies enormously depending on the neighborhood and lifestyle. An expat can live comfortably from $2,500 USD per month including rent, food, transportation and entertainment. At the higher end, with a luxury apartment in Polanco and active social life, the budget can exceed $6,000 USD.'}
          </p>
          <div className="rounded-2xl p-6 my-6" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <h3 className="font-serif text-lg mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Costos aproximados mensuales' : 'Approximate monthly costs'}</h3>
            <div className="space-y-3">
              {[
                { item: es ? 'Renta (depa amueblado 1 rec, Roma/Condesa)' : 'Rent (furnished 1bed, Roma/Condesa)', cost: '$18,000 – $35,000 MXN' },
                { item: es ? 'Renta (depa amueblado 2 rec, Polanco)' : 'Rent (furnished 2bed, Polanco)', cost: '$45,000 – $90,000 MXN' },
                { item: es ? 'Comida en restaurante (por persona)' : 'Restaurant meal (per person)', cost: '$150 – $500 MXN' },
                { item: es ? 'Uber (trayecto promedio)' : 'Uber (average ride)', cost: '$80 – $200 MXN' },
                { item: es ? 'Gimnasio/mes' : 'Gym/month', cost: '$600 – $1,500 MXN' },
                { item: es ? 'Internet fibra óptica' : 'Fiber optic internet', cost: '$400 – $700 MXN' },
                { item: es ? 'Servicio doméstico (por visita)' : 'Cleaning service (per visit)', cost: '$400 – $700 MXN' },
              ].map(item => (
                <div key={item.item} className="flex justify-between py-2" style={{ borderBottom: '1px solid var(--border)' }}>
                  <span className="text-sm" style={{ color: 'var(--muted)' }}>{item.item}</span>
                  <span className="text-sm font-semibold" style={{ color: 'var(--ink)' }}>{item.cost}</span>
                </div>
              ))}
            </div>
          </div>

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Transporte en CDMX' : 'Transportation in CDMX'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'CDMX tiene una red de transporte extensa. El Metro es el más económico pero puede ser muy concurrido en horas pico. Uber y DiDi son seguros, confiables y económicos — la mayoría de los expatriados los prefieren. Ecobici, el sistema de bicicletas compartidas, es perfecto para distancias cortas en colonias como Roma, Condesa y Polanco.' : 'CDMX has an extensive transportation network. The Metro is the most economical but can be very crowded during rush hours. Uber and DiDi are safe, reliable and affordable — most expats prefer them. Ecobici, the bike-sharing system, is perfect for short distances in neighborhoods like Roma, Condesa and Polanco.'}
          </p>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Tener coche en CDMX no es necesario si vives en Roma, Condesa, Polanco o Juárez. De hecho, puede ser un problema por el tráfico y la dificultad para estacionar. La mayoría de los expatriados prefieren vivir sin coche y usar Uber para salidas más largas.' : 'Having a car in CDMX is not necessary if you live in Roma, Condesa, Polanco or Juárez. In fact, it can be a problem due to traffic and parking difficulties. Most expats prefer to live without a car and use Uber for longer outings.'}
          </p>

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Visa y aspectos legales' : 'Visa and legal aspects'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Los ciudadanos de la mayoría de los países pueden entrar a México sin visa por hasta 180 días como turistas. Para estancias más largas, existen varias opciones: la visa de residencia temporal (ideal para nómadas digitales con ingresos del extranjero) y la visa de residencia permanente para quienes planean quedarse indefinidamente.' : 'Citizens of most countries can enter Mexico without a visa for up to 180 days as tourists. For longer stays, there are several options: the temporary residency visa (ideal for digital nomads with foreign income) and the permanent residency visa for those planning to stay indefinitely.'}
          </p>

          <div className="rounded-2xl p-8 mt-12 text-center" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <p className="font-serif text-2xl mb-3" style={{ color: 'var(--ink)' }}>{es ? 'Encuentra tu depa en CDMX' : 'Find your apartment in CDMX'}</p>
            <p className="text-sm mb-6" style={{ color: 'var(--muted)' }}>{es ? 'Propiedades amuebladas verificadas en las mejores colonias.' : 'Verified furnished properties in the best neighborhoods.'}</p>
            <Link href="/properties?city=Ciudad%20de%20M%C3%A9xico" className="inline-block px-8 py-3 rounded-full text-sm font-medium text-white" style={{ backgroundColor: 'var(--gold)' }}>
              {es ? 'Ver propiedades' : 'View properties'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
