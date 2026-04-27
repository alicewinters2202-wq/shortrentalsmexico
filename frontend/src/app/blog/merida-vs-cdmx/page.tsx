import Link from 'next/link';
import { getT } from '@/lib/lang';
import LangToggle from '@/components/layout/LangToggle';

export const metadata = {
  title: 'Mérida vs Ciudad de México para expatriados: ¿Cuál elegir? | ShortStayMX',
  description: 'Comparamos Mérida y Ciudad de México para expatriados: costos, seguridad, clima, comunidad internacional y calidad de vida.',
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
        <p className="text-sm mb-12" style={{ color: 'var(--muted)' }}>{es ? '28 de mayo de 2024 · 9 min de lectura' : 'May 28, 2024 · 9 min read'}</p>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Mérida y Ciudad de México son dos de los destinos más populares para expatriados en México, pero no podrían ser más diferentes. Una es una metrópoli de 22 millones de personas llena de energía y oportunidades. La otra es una ciudad colonial tranquila, segura y con un ritmo de vida completamente diferente.' : 'Merida and Mexico City are two of the most popular destinations for expats in Mexico, but they could not be more different. One is a metropolis of 22 million people full of energy and opportunities. The other is a quiet, safe colonial city with a completely different pace of life.'}
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
                  { aspect: es ? 'Costo de vida' : 'Cost of living', cdmx: es ? 'Alto' : 'High', merida: es ? 'Medio-bajo' : 'Medium-low' },
                  { aspect: es ? 'Seguridad' : 'Security', cdmx: es ? 'Variable' : 'Variable', merida: es ? 'Muy alta' : 'Very high' },
                  { aspect: es ? 'Clima' : 'Climate', cdmx: es ? 'Templado' : 'Temperate', merida: es ? 'Cálido tropical' : 'Warm tropical' },
                  { aspect: es ? 'Vuelos internacionales' : 'International flights', cdmx: '✅✅✅', merida: '✅' },
                  { aspect: es ? 'Vida cultural' : 'Cultural life', cdmx: '✅✅✅', merida: '✅✅' },
                  { aspect: es ? 'Comunidad expat' : 'Expat community', cdmx: es ? 'Enorme' : 'Huge', merida: es ? 'Grande y creciendo' : 'Large and growing' },
                  { aspect: es ? 'Ritmo de vida' : 'Pace of life', cdmx: es ? 'Muy activo' : 'Very active', merida: es ? 'Tranquilo' : 'Peaceful' },
                ].map(row => (
                  <tr key={row.aspect} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--muted)' }}>{row.aspect}</td>
                    <td className="px-4 py-3 text-center text-sm" style={{ color: 'var(--ink)' }}>{row.cdmx}</td>
                    <td className="px-4 py-3 text-center text-sm" style={{ color: 'var(--ink)' }}>{row.merida}</td>
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
