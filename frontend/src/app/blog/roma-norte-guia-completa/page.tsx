import Link from 'next/link';
import { getT } from '@/lib/lang';
import LangToggle from '@/components/layout/LangToggle';

export const metadata = {
  title: 'Roma Norte CDMX: Guía completa para vivir | ShortStayMX',
  description: 'Todo sobre vivir en Roma Norte, Ciudad de México: cafés, restaurantes, parques, costos y las mejores propiedades amuebladas en la colonia más vibrante de CDMX.',
};

export default async function RomaNorteGuia() {
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
          {es ? 'Roma Norte: Guía completa para vivir' : 'Roma Norte: Complete living guide'}
        </h1>
        <p className="text-sm mb-12" style={{ color: 'var(--muted)' }}>{es ? '7 de mayo de 2024 · 8 min de lectura' : 'May 7, 2024 · 8 min read'}</p>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Roma Norte se ha convertido en la colonia más deseada de Ciudad de México. Famosa mundialmente gracias a la película Roma de Alfonso Cuarón, esta colonia combina arquitectura art déco, calles arboladas, la mejor escena gastronómica de la ciudad y una vibrante comunidad creativa e internacional.' : 'Roma Norte has become the most desired neighborhood in Mexico City. Famously known worldwide thanks to Alfonso Cuarón\'s film Roma, this neighborhood combines art deco architecture, tree-lined streets, the best gastronomic scene in the city and a vibrant creative and international community.'}
          </p>
          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'La escena gastronómica' : 'The gastronomic scene'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Roma Norte es la capital del café de especialidad en CDMX. Hay decenas de cafés independientes de primer nivel, restaurantes que aparecen constantemente en las listas de los mejores de América Latina, y mercados de productores los fines de semana. Es el paraíso para los amantes de la buena comida.' : 'Roma Norte is the specialty coffee capital of CDMX. There are dozens of top-tier independent cafes, restaurants that constantly appear on the lists of the best in Latin America, and producer markets on weekends. It is paradise for food lovers.'}
          </p>
          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Los parques' : 'The parks'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'El Parque México y el Parque Río de Janeiro son los pulmones verdes de Roma Norte. El Parque México especialmente es un punto de encuentro social impresionante, lleno de personas haciendo ejercicio, paseando perros, leyendo y disfrutando del aire libre en cualquier momento del día.' : 'Parque México and Parque Río de Janeiro are the green lungs of Roma Norte. Parque México especially is an impressive social meeting point, full of people exercising, walking dogs, reading and enjoying the outdoors at any time of day.'}
          </p>
          <div className="rounded-2xl p-8 mt-12 text-center" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <p className="font-serif text-2xl mb-3" style={{ color: 'var(--ink)' }}>{es ? 'Ver propiedades en Roma Norte' : 'View properties in Roma Norte'}</p>
            <Link href="/colonias/roma-norte" className="inline-block px-8 py-3 rounded-full text-sm font-medium text-white" style={{ backgroundColor: 'var(--gold)' }}>
              {es ? 'Ver propiedades' : 'View properties'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
