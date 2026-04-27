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
        <p className="text-sm mb-12" style={{ color: 'var(--muted)' }}>{es ? '14 de mayo de 2024 · 8 min de lectura' : 'May 14, 2024 · 8 min read'}</p>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'La Riviera Maya tiene dos grandes destinos para vivir: Tulum y Playa del Carmen. Ambos tienen playas increíbles, comunidades internacionales y una calidad de vida excepcional, pero son muy diferentes en carácter y estilo de vida. Te ayudamos a elegir.' : 'The Riviera Maya has two major destinations to live in: Tulum and Playa del Carmen. Both have incredible beaches, international communities and exceptional quality of life, but they are very different in character and lifestyle. We help you choose.'}
          </p>
          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>Tulum</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Tulum es bohemio, espiritual y conectado con la naturaleza. Sus playas son de las más hermosas del mundo, hay cenotes por todos lados, y el ambiente es relajado y consciente. Es el lugar perfecto para nómadas digitales, artistas y quienes buscan bienestar y conexión con la naturaleza. El lado negativo: está más alejado de todo y los precios han subido mucho en los últimos años.' : 'Tulum is bohemian, spiritual and connected with nature. Its beaches are among the most beautiful in the world, there are cenotes everywhere, and the atmosphere is relaxed and conscious. It is the perfect place for digital nomads, artists and those seeking wellness and connection with nature. The downside: it is more remote and prices have risen significantly in recent years.'}
          </p>
          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>Playa del Carmen</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Playa del Carmen es más urbana y cosmopolita. La famosa Quinta Avenida concentra restaurantes, tiendas y vida nocturna. Tiene mejor infraestructura, más opciones de servicios y está mejor conectada. Playacar y Mayakoba ofrecen opciones residenciales de lujo para quienes buscan exclusividad cerca de la playa.' : 'Playa del Carmen is more urban and cosmopolitan. The famous Fifth Avenue concentrates restaurants, shops and nightlife. It has better infrastructure, more service options and is better connected. Playacar and Mayakoba offer luxury residential options for those seeking exclusivity near the beach.'}
          </p>
          <div className="rounded-2xl p-6 my-8" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <h3 className="font-serif text-xl mb-4" style={{ color: 'var(--ink)' }}>{es ? '¿Cuál es para ti?' : 'Which one is for you?'}</h3>
            <div className="space-y-3">
              {[
                { profile: es ? 'Nómada digital / bohemio' : 'Digital nomad / bohemian', choice: 'Tulum' },
                { profile: es ? 'Familia con niños' : 'Family with children', choice: 'Playa del Carmen' },
                { profile: es ? 'Busca naturaleza y cenotes' : 'Seeks nature and cenotes', choice: 'Tulum' },
                { profile: es ? 'Quiere vida urbana y servicios' : 'Wants urban life and services', choice: 'Playa del Carmen' },
                { profile: es ? 'Lujo frente al mar' : 'Luxury by the sea', choice: 'Mayakoba / Playacar' },
              ].map(item => (
                <div key={item.profile} className="flex justify-between py-2" style={{ borderBottom: '1px solid var(--border)' }}>
                  <span className="text-sm" style={{ color: 'var(--muted)' }}>{item.profile}</span>
                  <span className="text-sm font-semibold" style={{ color: 'var(--gold)' }}>{item.choice}</span>
                </div>
              ))}
            </div>
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
