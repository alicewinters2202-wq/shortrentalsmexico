import Link from 'next/link';
import { getT } from '@/lib/lang';
import LangToggle from '@/components/layout/LangToggle';

export const metadata = {
  title: 'Mérida vs Ciudad de México para expatriados: ¿Cuál elegir? | ShortStayMX',
  description: 'Comparamos Mérida y Ciudad de México para expatriados: costos de vida, seguridad, clima, comunidad internacional y calidad de vida en ambas ciudades.',
};

export default async function MeridaVsCdmx() {
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
        <p className="text-xs tracking-widest uppercase font-medium mb-4" style={{ color: 'var(--gold)' }}>México</p>
        <h1 className="font-serif text-4xl sm:text-5xl mb-6 leading-tight" style={{ color: 'var(--ink)' }}>
          {es ? 'Mérida vs Ciudad de México para expatriados' : 'Merida vs Mexico City for expats'}
        </h1>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Mérida y Ciudad de México son los dos destinos más contrastantes que puedes encontrar en México. Una es una metrópoli de 22 millones de personas, caótica, vibrante e inagotable. La otra es una ciudad colonial de medio millón de habitantes, tranquila, segura y con un ritmo de vida completamente diferente. Ambas son extraordinarias para vivir, pero para perfiles de expatriados muy distintos.' : 'Merida and Mexico City are the two most contrasting destinations you can find in Mexico. One is a metropolis of 22 million people, chaotic, vibrant and inexhaustible. The other is a colonial city of half a million inhabitants, quiet, safe and with a completely different pace of life. Both are extraordinary places to live, but for very different expat profiles.'}
          </p>

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Ciudad de México: energía y oportunidades' : 'Mexico City: energy and opportunities'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'CDMX es una ciudad que nunca deja de sorprender. Con más de 150 museos, una escena gastronómica que rivaliza con las mejores ciudades del mundo, una vida cultural y nocturna extraordinariamente activa, y oportunidades profesionales sin igual en México, es la opción natural para quienes buscan dinamismo, conexiones profesionales y vida urbana intensa.' : 'CDMX is a city that never stops surprising. With more than 150 museums, a gastronomic scene that rivals the best cities in the world, an extraordinarily active cultural and nightlife scene, and unmatched professional opportunities in Mexico, it is the natural option for those seeking dynamism, professional connections and intense urban life.'}
          </p>

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Mérida: calidad de vida y tranquilidad' : 'Merida: quality of life and tranquility'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Mérida es la antítesis de CDMX en el mejor sentido. Con el menor índice de criminalidad de México, un costo de vida muy accesible, una arquitectura colonial extraordinariamente bien conservada y una comunidad de expatriados en constante crecimiento, Mérida ofrece una calidad de vida que pocas ciudades del mundo pueden igualar a su precio.' : 'Merida is the antithesis of CDMX in the best sense. With the lowest crime rate in Mexico, a very accessible cost of living, extraordinarily well-preserved colonial architecture and a constantly growing expat community, Merida offers a quality of life that few cities in the world can match at its price.'}
          </p>

          <div className="rounded-2xl overflow-hidden my-8" style={{ border: '1px solid var(--border)' }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: 'var(--card)', borderBottom: '1px solid var(--border)' }}>
                  <th className="px-4 py-3 text-left text-xs tracking-widest uppercase font-medium" style={{ color: 'var(--muted)' }}>{es ? 'Aspecto' : 'Aspect'}</th>
                  <th className="px-4 py-3 text-center text-xs tracking-widest uppercase font-medium" style={{ color: 'var(--muted)' }}>CDMX</th>
                  <th className="px-4 py-3 text-center text-xs tracking-widest uppercase font-medium" style={{ color: 'var(--muted)' }}>Mérida</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { aspect: es ? 'Costo de vida' : 'Cost of living', cdmx: es ? 'Medio-alto' : 'Medium-high', merida: es ? 'Bajo-medio' : 'Low-medium' },
                  { aspect: es ? 'Seguridad' : 'Security', cdmx: es ? 'Variable por zona' : 'Varies by area', merida: es ? 'La más alta de México' : 'Highest in Mexico' },
                  { aspect: es ? 'Clima' : 'Climate', cdmx: es ? 'Templado, 15-22°C' : 'Temperate, 15-22°C', merida: es ? 'Cálido, 20-38°C' : 'Warm, 20-38°C' },
                  { aspect: es ? 'Vuelos internacionales' : 'International flights', cdmx: '✅✅✅', merida: '✅✅' },
                  { aspect: es ? 'Vida cultural' : 'Cultural life', cdmx: '✅✅✅', merida: '✅✅' },
                  { aspect: es ? 'Gastronomía' : 'Gastronomy', cdmx: '✅✅✅', merida: '✅✅✅' },
                  { aspect: es ? 'Ritmo de vida' : 'Pace of life', cdmx: es ? 'Muy activo' : 'Very active', merida: es ? 'Tranquilo' : 'Peaceful' },
                  { aspect: es ? 'Comunidad expat' : 'Expat community', cdmx: es ? 'Enorme' : 'Huge', merida: es ? 'Grande y creciendo' : 'Large and growing' },
                  { aspect: es ? 'Oportunidades laborales' : 'Job opportunities', cdmx: '✅✅✅', merida: '✅' },
                ].map(row => (
                  <tr key={row.aspect} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--muted)' }}>{row.aspect}</td>
                    <td className="px-4 py-3 text-center text-xs" style={{ color: 'var(--ink)' }}>{row.cdmx}</td>
                    <td className="px-4 py-3 text-center text-xs" style={{ color: 'var(--ink)' }}>{row.merida}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-2xl p-8 mt-12 text-center" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <p className="font-serif text-2xl mb-3" style={{ color: 'var(--ink)' }}>{es ? 'Ver propiedades' : 'View properties'}</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/properties?city=Ciudad%20de%20M%C3%A9xico" className="inline-block px-6 py-3 rounded-full text-sm font-medium text-white" style={{ backgroundColor: 'var(--gold)' }}>CDMX</Link>
              <Link href="/properties?city=M%C3%A9rida" className="inline-block px-6 py-3 rounded-full text-sm font-medium border" style={{ color: 'var(--ink)', borderColor: 'var(--border)' }}>Mérida</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
