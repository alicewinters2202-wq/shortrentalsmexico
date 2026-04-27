import Link from 'next/link';
import { getT } from '@/lib/lang';
import LangToggle from '@/components/layout/LangToggle';

export const metadata = {
  title: 'Polanco CDMX: Guía completa para vivir | ShortStayMX',
  description: 'Todo sobre vivir en Polanco, Ciudad de México: restaurantes, museos, costos, seguridad y las mejores propiedades amuebladas en la zona más exclusiva de CDMX.',
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
        <div className="space-y-6">
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Polanco es sinónimo de lujo, exclusividad y sofisticación en Ciudad de México. Sus calles con nombres de filósofos y científicos — Homero, Arquímedes, Newton, Goldsmith — albergan embajadas de decenas de países, hoteles de cinco estrellas como el Presidente InterContinental y el Four Seasons, boutiques internacionales y algunos de los mejores restaurantes de América Latina. Es, sin duda, el corazón cosmopolita de CDMX.' : 'Polanco is synonymous with luxury, exclusivity and sophistication in Mexico City. Its streets named after philosophers and scientists — Homer, Archimedes, Newton, Goldsmith — house embassies from dozens of countries, five-star hotels like the Presidente InterContinental and Four Seasons, international boutiques and some of the best restaurants in Latin America. It is, without a doubt, the cosmopolitan heart of CDMX.'}
          </p>

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'La Avenida Presidente Masaryk' : 'Avenida Presidente Masaryk'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'La Avenida Presidente Masaryk es el epicentro del lujo en Polanco, conocida popularmente como el Rodeo Drive mexicano. En sus pocas cuadras se concentran boutiques de las marcas más exclusivas del mundo: Louis Vuitton, Hermès, Cartier, Tiffany, Bottega Veneta, Porsche y decenas más. Restaurantes como Pujol — reconocido como uno de los mejores del mundo — y Quintonil son destinos gastronómicos internacionales.' : 'Avenida Presidente Masaryk is the epicenter of luxury in Polanco, popularly known as the Mexican Rodeo Drive. In just a few blocks, boutiques of the world\'s most exclusive brands are concentrated: Louis Vuitton, Hermès, Cartier, Tiffany, Bottega Veneta, Porsche and dozens more. Restaurants like Pujol — recognized as one of the best in the world — and Quintonil are international gastronomic destinations.'}
          </p>

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Museos de clase mundial' : 'World-class museums'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Polanco concentra algunos de los mejores museos de México. El Museo Soumaya, con su icónica fachada plateada diseñada por el arquitecto Fernando Romero, alberga más de 66,000 obras de arte de todas las épocas. El Museo Jumex es uno de los museos de arte contemporáneo más importantes de América Latina. Y el Museo Nacional de Antropología, en el límite con Chapultepec, es considerado uno de los mejores del mundo.' : 'Polanco concentrates some of the best museums in Mexico. The Soumaya Museum, with its iconic silver facade designed by architect Fernando Romero, houses more than 66,000 works of art from all periods. The Jumex Museum is one of the most important contemporary art museums in Latin America. And the National Museum of Anthropology, on the border with Chapultepec, is considered one of the best in the world.'}
          </p>

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Seguridad y calidad de vida' : 'Security and quality of life'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Polanco es consistentemente una de las colonias más seguras de Ciudad de México. Cuenta con vigilancia privada en la mayoría de los edificios residenciales de lujo, cámaras de seguridad en toda la colonia, presencia policial visible y una comunidad activa que cuida su entorno. Los edificios residenciales suelen tener portero 24 horas, acceso con tarjeta y circuito cerrado de televisión.' : 'Polanco is consistently one of the safest neighborhoods in Mexico City. It has private security in most luxury residential buildings, security cameras throughout the neighborhood, visible police presence and an active community that takes care of its environment. Residential buildings usually have a 24-hour doorman, card access and closed-circuit television.'}
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
