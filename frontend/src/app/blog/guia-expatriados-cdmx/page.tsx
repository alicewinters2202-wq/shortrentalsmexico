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
        <p className="text-sm mb-12" style={{ color: 'var(--muted)' }}>{es ? '22 de enero de 2024 · 10 min de lectura' : 'January 22, 2024 · 10 min read'}</p>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Ciudad de México se ha convertido en uno de los destinos más populares para expatriados en el mundo. Con una oferta cultural inigualable, gastronomía de clase mundial, costos de vida razonables y una comunidad internacional muy activa, CDMX tiene todo para enamorarte. Esta guía te dice todo lo que necesitas saber para mudarte.' : 'Mexico City has become one of the most popular destinations for expats in the world. With an unmatched cultural offering, world-class gastronomy, reasonable cost of living and a very active international community, CDMX has everything to fall in love with. This guide tells you everything you need to know to move there.'}
          </p>
          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Las mejores colonias para expatriados' : 'Best neighborhoods for expats'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Las colonias más populares entre expatriados son Polanco, Roma Norte, Condesa e Hipódromo Condesa. Polanco ofrece máxima exclusividad y seguridad. Roma Norte y Condesa tienen la mejor escena cultural y gastronómica. Juárez es la opción más accesible cerca de Reforma.' : 'The most popular neighborhoods among expats are Polanco, Roma Norte, Condesa and Hipódromo Condesa. Polanco offers maximum exclusivity and security. Roma Norte and Condesa have the best cultural and gastronomic scene. Juárez is the most accessible option near Reforma.'}
          </p>
          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Costo de vida en CDMX' : 'Cost of living in CDMX'}</h2>
          <div className="rounded-2xl p-6 my-6" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <div className="space-y-3">
              {[
                { item: es ? 'Renta mensual (depa amueblado)' : 'Monthly rent (furnished apt)', cost: '$20,000 – $80,000 MXN' },
                { item: es ? 'Comida en restaurante' : 'Restaurant meal', cost: '$150 – $500 MXN' },
                { item: es ? 'Transporte (Uber/día)' : 'Transportation (Uber/day)', cost: '$200 – $400 MXN' },
                { item: es ? 'Gimnasio/mes' : 'Gym/month', cost: '$600 – $1,500 MXN' },
                { item: es ? 'Internet fibra óptica' : 'Fiber optic internet', cost: '$400 – $700 MXN' },
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
            {es ? 'CDMX tiene una red de transporte extensa. El Metro es el más económico pero puede ser muy concurrido. Uber y DiDi son seguros, confiables y económicos. Ecobici (sistema de bicicletas) es perfecto para distancias cortas en colonias como Roma, Condesa y Polanco.' : 'CDMX has an extensive transportation network. The Metro is the most economical but can be very crowded. Uber and DiDi are safe, reliable and affordable. Ecobici (bike-sharing system) is perfect for short distances in neighborhoods like Roma, Condesa and Polanco.'}
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
