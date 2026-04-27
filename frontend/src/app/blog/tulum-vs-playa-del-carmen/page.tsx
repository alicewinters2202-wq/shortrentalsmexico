import Link from 'next/link';
import { getT } from '@/lib/lang';
import LangToggle from '@/components/layout/LangToggle';

export const metadata = {
  title: 'Tulum vs Playa del Carmen: ¿Dónde vivir? | ShortStayMX',
  description: 'Comparamos Tulum y Playa del Carmen para ayudarte a elegir el mejor destino para vivir en la Riviera Maya. Costos, estilo de vida, comunidad y más.',
};

export default async function TulumVsPlaya() {
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
        <p className="text-xs tracking-widest uppercase font-medium mb-4" style={{ color: 'var(--gold)' }}>Riviera Maya</p>
        <h1 className="font-serif text-4xl sm:text-5xl mb-6 leading-tight" style={{ color: 'var(--ink)' }}>
          {es ? 'Tulum vs Playa del Carmen: ¿Dónde vivir?' : 'Tulum vs Playa del Carmen: Where to live?'}
        </h1>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'La Riviera Maya tiene dos grandes destinos para vivir que atraen a expatriados de todo el mundo: Tulum y Playa del Carmen. Ambos tienen playas del Caribe de ensueño, comunidades internacionales muy activas y una calidad de vida excepcional. Pero son radicalmente diferentes en carácter, estilo de vida y tipo de persona que atraen. Esta guía te ayuda a elegir cuál es el tuyo.' : 'The Riviera Maya has two major destinations that attract expats from around the world: Tulum and Playa del Carmen. Both have dream Caribbean beaches, very active international communities and exceptional quality of life. But they are radically different in character, lifestyle and the type of person they attract. This guide helps you choose which one is yours.'}
          </p>

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>Tulum</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Tulum es bohemio, espiritual y profundamente conectado con la naturaleza. Sus playas son de las más fotografiadas del mundo, con aguas turquesas cristalinas y ruinas mayas sobre los acantilados. La selva está por todas partes. Los cenotes — pozas naturales de agua cristalina conectadas por ríos subterráneos — son accesibles en minutos. El ambiente es meditativo, consciente y muy creativo.' : 'Tulum is bohemian, spiritual and deeply connected with nature. Its beaches are among the most photographed in the world, with crystal-clear turquoise waters and Mayan ruins on the cliffs. The jungle is everywhere. The cenotes — natural pools of crystal-clear water connected by underground rivers — are accessible in minutes. The atmosphere is meditative, conscious and very creative.'}
          </p>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'El lado negativo de Tulum es que los precios han aumentado significativamente en los últimos años. Internet puede ser menos estable que en otras ciudades. Y la distancia al aeropuerto más cercano (Cancún) es de aproximadamente 130 kilómetros, lo que complica los viajes frecuentes.' : 'The downside of Tulum is that prices have increased significantly in recent years. Internet can be less stable than in other cities. And the distance to the nearest airport (Cancun) is approximately 130 kilometers, which complicates frequent travel.'}
          </p>

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>Playa del Carmen</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Playa del Carmen es más urbana, cosmopolita y práctica. La famosa Quinta Avenida — una de las calles peatonales más largas del mundo — concentra cientos de restaurantes, tiendas, bares y entretenimiento. La infraestructura de servicios es excelente. El aeropuerto de Cancún está a solo 68 kilómetros. Y los precios, aunque han subido, son generalmente más accesibles que en Tulum.' : 'Playa del Carmen is more urban, cosmopolitan and practical. The famous Fifth Avenue — one of the longest pedestrian streets in the world — concentrates hundreds of restaurants, shops, bars and entertainment. The service infrastructure is excellent. Cancun airport is just 68 kilometers away. And prices, although they have risen, are generally more accessible than in Tulum.'}
          </p>

          <div className="rounded-2xl overflow-hidden my-8" style={{ border: '1px solid var(--border)' }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: 'var(--card)', borderBottom: '1px solid var(--border)' }}>
                  <th className="px-4 py-3 text-left text-xs tracking-widest uppercase font-medium" style={{ color: 'var(--muted)' }}>{es ? 'Aspecto' : 'Aspect'}</th>
                  <th className="px-4 py-3 text-center text-xs tracking-widest uppercase font-medium" style={{ color: 'var(--muted)' }}>Tulum</th>
                  <th className="px-4 py-3 text-center text-xs tracking-widest uppercase font-medium" style={{ color: 'var(--muted)' }}>Playa del Carmen</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { aspect: es ? 'Ambiente' : 'Atmosphere', tulum: es ? 'Bohemio/espiritual' : 'Bohemian/spiritual', playa: es ? 'Urbano/cosmopolita' : 'Urban/cosmopolitan' },
                  { aspect: es ? 'Precio' : 'Price', tulum: es ? 'Alto' : 'High', playa: es ? 'Medio-alto' : 'Medium-high' },
                  { aspect: es ? 'Internet' : 'Internet', tulum: es ? 'Variable' : 'Variable', playa: es ? 'Estable' : 'Stable' },
                  { aspect: es ? 'Distancia aeropuerto' : 'Airport distance', tulum: '130 km', playa: '68 km' },
                  { aspect: es ? 'Naturaleza' : 'Nature', tulum: '✅✅✅', playa: '✅✅' },
                  { aspect: es ? 'Servicios urbanos' : 'Urban services', tulum: '✅', playa: '✅✅✅' },
                  { aspect: es ? 'Para familias' : 'For families', tulum: '⚠️', playa: '✅✅' },
                  { aspect: es ? 'Para nómadas digitales' : 'For digital nomads', tulum: '✅✅', playa: '✅✅✅' },
                ].map(row => (
                  <tr key={row.aspect} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--muted)' }}>{row.aspect}</td>
                    <td className="px-4 py-3 text-center text-xs" style={{ color: 'var(--ink)' }}>{row.tulum}</td>
                    <td className="px-4 py-3 text-center text-xs" style={{ color: 'var(--ink)' }}>{row.playa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-2xl p-8 mt-12 text-center" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <p className="font-serif text-2xl mb-3" style={{ color: 'var(--ink)' }}>{es ? 'Ver propiedades en la Riviera Maya' : 'View properties in the Riviera Maya'}</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/properties?city=Tulum" className="inline-block px-6 py-3 rounded-full text-sm font-medium text-white" style={{ backgroundColor: 'var(--gold)' }}>Tulum</Link>
              <Link href="/properties?city=Playa%20del%20Carmen" className="inline-block px-6 py-3 rounded-full text-sm font-medium border" style={{ color: 'var(--ink)', borderColor: 'var(--border)' }}>Playa del Carmen</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
