import Link from 'next/link';
import { getT } from '@/lib/lang';
import LangToggle from '@/components/layout/LangToggle';

export const metadata = {
  title: 'Polanco vs Roma Norte: ¿Cuál es la mejor colonia para vivir en CDMX? | ShortStayMX',
  description: 'Comparamos Polanco y Roma Norte, las dos colonias más populares de Ciudad de México, para ayudarte a elegir dónde vivir según tu estilo de vida y presupuesto.',
};

export default async function PolancoVsRomaPost() {
  const { lang } = await getT();
  const es = lang !== 'en';

  return (
    <div style={{ backgroundColor: 'var(--cream)', minHeight: '100vh' }}>
      <nav className="sticky top-0 z-40 backdrop-blur-md" style={{ backgroundColor: 'rgba(28,28,30,0.9)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-4">
          <Link href="/blog" className="text-sm transition-colors hover:opacity-80" style={{ color: 'var(--muted)' }}>
            {es ? '← Blog' : '← Blog'}
          </Link>
          <span style={{ color: 'var(--border)' }}>|</span>
          <Link href="/" className="font-serif font-medium" style={{ color: 'var(--ink)' }}>ShortStayMX</Link>
          <div className="ml-auto"><LangToggle currentLang={lang} className="text-[--muted] hover:text-[--ink]" /></div>
        </div>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-xs tracking-widest uppercase font-medium mb-4" style={{ color: 'var(--gold)' }}>
          {es ? 'Ciudad de México' : 'Mexico City'}
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl mb-6 leading-tight" style={{ color: 'var(--ink)' }}>
          {es ? 'Polanco vs Roma Norte: ¿Cuál es la mejor colonia para vivir en CDMX?' : 'Polanco vs Roma Norte: Which is the best neighborhood to live in Mexico City?'}
        </h1>
        <p className="text-sm mb-12" style={{ color: 'var(--muted)' }}>
          {es ? '15 de enero de 2024 · 8 min de lectura' : 'January 15, 2024 · 8 min read'}
        </p>

        <div className="prose max-w-none space-y-6">
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es
              ? 'Si estás buscando rentar en Ciudad de México, es muy probable que Polanco y Roma Norte estén en tu lista de opciones. Ambas colonias son las favoritas de expatriados, nómadas digitales y ejecutivos internacionales — pero son muy diferentes entre sí. En este artículo te ayudamos a elegir cuál es la mejor para ti.'
              : 'If you are looking to rent in Mexico City, Polanco and Roma Norte are probably on your list of options. Both neighborhoods are favorites among expats, digital nomads and international executives — but they are very different from each other. In this article we help you choose which one is best for you.'}
          </p>

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>
            {es ? 'Polanco: exclusividad y comodidad' : 'Polanco: exclusivity and comfort'}
          </h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es
              ? 'Polanco es la colonia más exclusiva de Ciudad de México. Sus calles llevan nombres de filósofos y científicos, y están flanqueadas por embajadas, hoteles de cinco estrellas, boutiques internacionales y algunos de los mejores restaurantes de América Latina. Es la zona preferida por ejecutivos corporativos, diplomáticos y familias que buscan seguridad y comodidad sin compromisos.'
              : 'Polanco is the most exclusive neighborhood in Mexico City. Its streets bear the names of philosophers and scientists, and are flanked by embassies, five-star hotels, international boutiques and some of the best restaurants in Latin America. It is the preferred area for corporate executives, diplomats and families who seek security and comfort without compromise.'}
          </p>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es
              ? 'Vivir en Polanco significa acceso inmediato al Bosque de Chapultepec, el Museo Soumaya, el Museo Jumex y el Paseo de la Reforma. La zona es también conocida por su alta seguridad y por ser una de las áreas más vigiladas de la capital.'
              : 'Living in Polanco means immediate access to Chapultepec Forest, the Soumaya Museum, the Jumex Museum and Paseo de la Reforma. The area is also known for its high security and for being one of the most monitored areas of the capital.'}
          </p>

          <div className="rounded-2xl p-6 my-8" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <h3 className="font-serif text-xl mb-4" style={{ color: 'var(--ink)' }}>
              {es ? 'Polanco en números' : 'Polanco by the numbers'}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: es ? 'Precio promedio/mes' : 'Avg price/month', value: '$45,000 – $120,000 MXN' },
                { label: es ? 'Seguridad' : 'Security', value: es ? 'Muy alta' : 'Very high' },
                { label: es ? 'Vida nocturna' : 'Nightlife', value: es ? 'Moderada' : 'Moderate' },
                { label: es ? 'Cafes y restaurantes' : 'Cafes and restaurants', value: es ? 'Excelentes' : 'Excellent' },
              ].map(item => (
                <div key={item.label}>
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--muted)' }}>{item.label}</p>
                  <p className="font-semibold text-sm" style={{ color: 'var(--ink)' }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>
            {es ? 'Roma Norte: bohemia y cultura' : 'Roma Norte: bohemian and cultural'}
          </h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es
              ? 'Roma Norte es la colonia más vibrante y creativa de Ciudad de México. Con sus edificios art déco, calles arboladas, cafés de especialidad, galerías de arte y una escena gastronómica de primer nivel, es el hogar perfecto para creativos, artistas, nómadas digitales y jóvenes profesionales que valoran la cultura por encima de todo.'
              : 'Roma Norte is the most vibrant and creative neighborhood in Mexico City. With its art deco buildings, tree-lined streets, specialty cafes, art galleries and a top-tier gastronomic scene, it is the perfect home for creatives, artists, digital nomads and young professionals who value culture above all.'}
          </p>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es
              ? 'La colonia fue el escenario de la película Roma de Alfonso Cuarón y desde entonces ha ganado fama internacional. El Parque México y el Parque Río de Janeiro son sus pulmones verdes, y la Avenida Álvaro Obregón es el corazón social de la zona.'
              : 'The neighborhood was the setting for Alfonso Cuarón\'s film Roma and has since gained international fame. Parque México and Parque Río de Janeiro are its green lungs, and Avenida Álvaro Obregón is the social heart of the area.'}
          </p>

          <div className="rounded-2xl p-6 my-8" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <h3 className="font-serif text-xl mb-4" style={{ color: 'var(--ink)' }}>
              {es ? 'Roma Norte en números' : 'Roma Norte by the numbers'}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: es ? 'Precio promedio/mes' : 'Avg price/month', value: '$25,000 – $65,000 MXN' },
                { label: es ? 'Seguridad' : 'Security', value: es ? 'Buena' : 'Good' },
                { label: es ? 'Vida nocturna' : 'Nightlife', value: es ? 'Muy activa' : 'Very active' },
                { label: es ? 'Cafes y restaurantes' : 'Cafes and restaurants', value: es ? 'Los mejores de CDMX' : 'Best in CDMX' },
              ].map(item => (
                <div key={item.label}>
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--muted)' }}>{item.label}</p>
                  <p className="font-semibold text-sm" style={{ color: 'var(--ink)' }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>
            {es ? '¿Cuál es mejor para ti?' : 'Which one is better for you?'}
          </h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es
              ? 'La respuesta depende de tu estilo de vida. Si buscas exclusividad, seguridad máxima y no te importa pagar más, Polanco es tu colonia. Si prefieres una vida más bohemia, rodeado de cultura, cafés y vida nocturna vibrante, Roma Norte es la opción perfecta.'
              : 'The answer depends on your lifestyle. If you are looking for exclusivity, maximum security and do not mind paying more, Polanco is your neighborhood. If you prefer a more bohemian life, surrounded by culture, cafes and vibrant nightlife, Roma Norte is the perfect choice.'}
          </p>

          <div className="rounded-2xl p-6 my-8" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <h3 className="font-serif text-xl mb-6" style={{ color: 'var(--ink)' }}>
              {es ? 'Resumen' : 'Summary'}
            </h3>
            <div className="space-y-3">
              {[
                { profile: es ? 'Ejecutivo / diplomático' : 'Executive / diplomat', choice: 'Polanco' },
                { profile: es ? 'Nómada digital / creativo' : 'Digital nomad / creative', choice: 'Roma Norte' },
                { profile: es ? 'Familia con hijos' : 'Family with children', choice: 'Polanco' },
                { profile: es ? 'Joven profesional' : 'Young professional', choice: 'Roma Norte' },
                { profile: es ? 'Amante de la gastronomía' : 'Food lover', choice: 'Roma Norte' },
                { profile: es ? 'Busca máxima seguridad' : 'Seeks maximum security', choice: 'Polanco' },
              ].map(item => (
                <div key={item.profile} className="flex justify-between items-center py-2" style={{ borderBottom: '1px solid var(--border)' }}>
                  <span className="text-sm" style={{ color: 'var(--muted)' }}>{item.profile}</span>
                  <span className="text-sm font-semibold" style={{ color: 'var(--gold)' }}>{item.choice}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl p-8 mt-12 text-center" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <p className="font-serif text-2xl mb-3" style={{ color: 'var(--ink)' }}>
              {es ? '¿Listo para encontrar tu depa?' : 'Ready to find your apartment?'}
            </p>
            <p className="text-sm mb-6" style={{ color: 'var(--muted)' }}>
              {es ? 'Tenemos propiedades en Polanco, Roma Norte y todas las colonias de CDMX.' : 'We have properties in Polanco, Roma Norte and all neighborhoods of CDMX.'}
            </p>
            <Link href="/properties?city=Ciudad%20de%20M%C3%A9xico"
              className="inline-block px-8 py-3 rounded-full text-sm font-medium text-white"
              style={{ backgroundColor: 'var(--gold)' }}>
              {es ? 'Ver propiedades en CDMX' : 'View properties in CDMX'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
