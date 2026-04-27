import Link from 'next/link';
import { getT } from '@/lib/lang';
import LangToggle from '@/components/layout/LangToggle';

export const metadata = {
  title: 'Polanco CDMX: Guía completa para vivir | ShortStayMX',
  description: 'Todo sobre vivir en Polanco, Ciudad de México: qué ver, restaurantes, costos, seguridad y las mejores propiedades amuebladas en la zona más exclusiva de CDMX.',
};

export default async function PolancoGuia() {
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
          {es ? 'Polanco: Guía completa para vivir' : 'Polanco: Complete living guide'}
        </h1>
        <p className="text-sm mb-12" style={{ color: 'var(--muted)' }}>{es ? '30 de abril de 2024 · 8 min de lectura' : 'April 30, 2024 · 8 min read'}</p>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Polanco es sinónimo de lujo, exclusividad y sofisticación en Ciudad de México. Sus calles con nombres de filósofos y científicos albergan embajadas, hoteles de cinco estrellas, boutiques internacionales y algunos de los mejores restaurantes de América Latina. Es el corazón cosmopolita de CDMX.' : 'Polanco is synonymous with luxury, exclusivity and sophistication in Mexico City. Its streets named after philosophers and scientists house embassies, five-star hotels, international boutiques and some of the best restaurants in Latin America. It is the cosmopolitan heart of CDMX.'}
          </p>
          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Qué hace especial a Polanco' : 'What makes Polanco special'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'La Avenida Presidente Masaryk es el epicentro del lujo tapatío, con boutiques como Louis Vuitton, Hermès y Tiffany. El Bosque de Chapultepec está a minutos caminando. El Museo Soumaya y el Museo Jumex son dos de los mejores museos de arte contemporáneo de México. Y la oferta gastronómica incluye restaurantes como Pujol, Quintonil y otros con reconocimiento internacional.' : 'Avenida Presidente Masaryk is the epicenter of luxury, with boutiques like Louis Vuitton, Hermès and Tiffany. Chapultepec Forest is minutes away on foot. The Soumaya Museum and the Jumex Museum are two of the best contemporary art museums in Mexico. And the gastronomic offering includes restaurants like Pujol, Quintonil and others with international recognition.'}
          </p>
          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Para quién es Polanco' : 'Who is Polanco for'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Polanco es la primera opción para ejecutivos corporativos, diplomáticos, familias con hijos en colegios internacionales y expatriados que buscan máxima comodidad y seguridad. Si el presupuesto no es limitante y valoras la exclusividad, Polanco es tu colonia.' : 'Polanco is the first choice for corporate executives, diplomats, families with children in international schools and expats who seek maximum comfort and security. If budget is not a constraint and you value exclusivity, Polanco is your neighborhood.'}
          </p>
          <div className="rounded-2xl p-8 mt-12 text-center" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <p className="font-serif text-2xl mb-3" style={{ color: 'var(--ink)' }}>{es ? 'Ver propiedades en Polanco' : 'View properties in Polanco'}</p>
            <Link href="/colonias/polanco" className="inline-block px-8 py-3 rounded-full text-sm font-medium text-white" style={{ backgroundColor: 'var(--gold)' }}>
              {es ? 'Ver propiedades' : 'View properties'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
