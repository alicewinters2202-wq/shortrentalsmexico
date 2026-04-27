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
          <Link href="/blog" className="text-sm transition-colors hover:opacity-80" style={{ color: 'var(--muted)' }}>← Blog</Link>
          <span style={{ color: 'var(--border)' }}>|</span>
          <Link href="/" className="font-serif font-medium" style={{ color: 'var(--ink)' }}>ShortStayMX</Link>
          <div className="ml-auto"><LangToggle currentLang={lang} className="text-[--muted] hover:text-[--ink]" /></div>
        </div>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-xs tracking-widest uppercase font-medium mb-4" style={{ color: 'var(--gold)' }}>{es ? 'Ciudad de México' : 'Mexico City'}</p>
        <h1 className="font-serif text-4xl sm:text-5xl mb-6 leading-tight" style={{ color: 'var(--ink)' }}>
          {es ? 'Polanco vs Roma Norte: ¿Cuál es la mejor colonia para vivir en CDMX?' : 'Polanco vs Roma Norte: Which is the best neighborhood to live in Mexico City?'}
        </h1>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Si estás buscando rentar en Ciudad de México, es muy probable que Polanco y Roma Norte estén en tu lista de opciones. Ambas colonias son las favoritas de expatriados, nómadas digitales y ejecutivos internacionales — pero son muy diferentes entre sí. En este artículo te ayudamos a elegir cuál es la mejor para ti.' : 'If you are looking to rent in Mexico City, Polanco and Roma Norte are probably on your list of options. Both neighborhoods are favorites among expats, digital nomads and international executives — but they are very different from each other. In this article we help you choose which one is best for you.'}
          </p>

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Polanco: exclusividad y comodidad' : 'Polanco: exclusivity and comfort'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Polanco es la colonia más exclusiva de Ciudad de México. Sus calles llevan nombres de filósofos y científicos, y están flanqueadas por embajadas, hoteles de cinco estrellas, boutiques internacionales y algunos de los mejores restaurantes de América Latina. Es la zona preferida por ejecutivos corporativos, diplomáticos y familias que buscan seguridad y comodidad sin compromisos.' : 'Polanco is the most exclusive neighborhood in Mexico City. Its streets bear the names of philosophers and scientists, and are flanked by embassies, five-star hotels, international boutiques and some of the best restaurants in Latin America. It is the preferred area for corporate executives, diplomats and families who seek security and comfort without compromise.'}
          </p>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'La Avenida Presidente Masaryk es el epicentro del lujo en Polanco. Conocida como el Rodeo Drive mexicano, concentra boutiques como Louis Vuitton, Hermès, Cartier y Tiffany, además de restaurantes como Pujol y Quintonil — dos de los mejores de América Latina según la lista The World\'s 50 Best Restaurants.' : 'Avenida Presidente Masaryk is the epicenter of luxury in Polanco. Known as the Mexican Rodeo Drive, it concentrates boutiques like Louis Vuitton, Hermès, Cartier and Tiffany, plus restaurants like Pujol and Quintonil — two of the best in Latin America according to The World\'s 50 Best Restaurants list.'}
          </p>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Vivir en Polanco significa acceso inmediato al Bosque de Chapultepec, el parque urbano más grande de Ciudad de México con más de 680 hectáreas. El Museo Soumaya, con su icónica fachada plateada, y el Museo Jumex son dos de los mejores museos de arte contemporáneo del país, ambos a pasos de cualquier departamento en la zona.' : 'Living in Polanco means immediate access to Chapultepec Forest, the largest urban park in Mexico City with more than 680 hectares. The Soumaya Museum, with its iconic silver facade, and the Jumex Museum are two of the best contemporary art museums in the country, both steps away from any apartment in the area.'}
          </p>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'En términos de seguridad, Polanco es consistentemente una de las zonas más seguras de la capital. Cuenta con vigilancia privada en la mayoría de los edificios residenciales, cámaras de seguridad en toda la colonia y una presencia policial visible. Esto la convierte en la opción preferida de familias con hijos y ejecutivos que viajan frecuentemente.' : 'In terms of security, Polanco is consistently one of the safest areas of the capital. It has private security in most residential buildings, security cameras throughout the neighborhood and a visible police presence. This makes it the preferred option for families with children and executives who travel frequently.'}
          </p>

          <div className="rounded-2xl p-6 my-8" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <h3 className="font-serif text-xl mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Polanco en números' : 'Polanco by the numbers'}</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: es ? 'Precio promedio/mes' : 'Avg price/month', value: '$45,000 – $120,000 MXN' },
                { label: es ? 'Seguridad' : 'Security', value: es ? 'Muy alta' : 'Very high' },
                { label: es ? 'Vida nocturna' : 'Nightlife', value: es ? 'Moderada' : 'Moderate' },
                { label: es ? 'Restaurantes de lujo' : 'Luxury restaurants', value: es ? 'Excelentes' : 'Excellent' },
              ].map(item => (
                <div key={item.label}>
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--muted)' }}>{item.label}</p>
                  <p className="font-semibold text-sm" style={{ color: 'var(--ink)' }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Roma Norte: bohemia y cultura' : 'Roma Norte: bohemian and cultural'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Roma Norte es la colonia más vibrante y creativa de Ciudad de México. Con sus edificios art déco, calles arboladas, cafés de especialidad, galerías de arte y una escena gastronómica de primer nivel, es el hogar perfecto para creativos, artistas, nómadas digitales y jóvenes profesionales que valoran la cultura por encima de todo.' : 'Roma Norte is the most vibrant and creative neighborhood in Mexico City. With its art deco buildings, tree-lined streets, specialty cafes, art galleries and a top-tier gastronomic scene, it is the perfect home for creatives, artists, digital nomads and young professionals who value culture above all.'}
          </p>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'La colonia fue inmortalizada en la película Roma de Alfonso Cuarón, ganadora del Oscar, y desde entonces ha ganado fama internacional. El Parque México y el Parque Río de Janeiro son sus pulmones verdes y puntos de encuentro social. La Avenida Álvaro Obregón, con su camellón arbolado, es el corazón social de la zona.' : 'The neighborhood was immortalized in Alfonso Cuarón\'s Oscar-winning film Roma, and has since gained international fame. Parque México and Parque Río de Janeiro are its green lungs and social meeting points. Avenida Álvaro Obregón, with its tree-lined median, is the social heart of the area.'}
          </p>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'La escena gastronómica de Roma Norte es sin duda la mejor de Ciudad de México. Hay decenas de cafés de especialidad, restaurantes creativos que aparecen constantemente en las listas de los mejores de América Latina, y mercados de productores los fines de semana. Bares con coctelería de autor, cervecerías artesanales y restaurantes de todas las cocinas del mundo conviven en pocas cuadras.' : 'Roma Norte\'s gastronomic scene is undoubtedly the best in Mexico City. There are dozens of specialty cafes, creative restaurants that constantly appear on the lists of the best in Latin America, and producer markets on weekends. Bars with craft cocktails, artisan breweries and restaurants from all world cuisines coexist within a few blocks.'}
          </p>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'En cuanto a precios, Roma Norte es más accesible que Polanco. Puedes encontrar departamentos de 1 recámara desde $18,000 MXN al mes, y estudios bien ubicados desde $12,000 MXN. Esto la hace especialmente atractiva para nómadas digitales y profesionales jóvenes que quieren vivir en el corazón de CDMX sin pagar los precios de Polanco.' : 'In terms of prices, Roma Norte is more accessible than Polanco. You can find 1-bedroom apartments from $18,000 MXN per month, and well-located studios from $12,000 MXN. This makes it especially attractive for digital nomads and young professionals who want to live in the heart of CDMX without paying Polanco prices.'}
          </p>

          <div className="rounded-2xl p-6 my-8" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <h3 className="font-serif text-xl mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Roma Norte en números' : 'Roma Norte by the numbers'}</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: es ? 'Precio promedio/mes' : 'Avg price/month', value: '$18,000 – $65,000 MXN' },
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

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Diferencias clave entre Polanco y Roma Norte' : 'Key differences between Polanco and Roma Norte'}</h2>
          <div className="rounded-2xl overflow-hidden my-6" style={{ border: '1px solid var(--border)' }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: 'var(--card)', borderBottom: '1px solid var(--border)' }}>
                  <th className="px-4 py-3 text-left text-xs tracking-widest uppercase font-medium" style={{ color: 'var(--muted)' }}>{es ? 'Aspecto' : 'Aspect'}</th>
                  <th className="px-4 py-3 text-center text-xs tracking-widest uppercase font-medium" style={{ color: 'var(--muted)' }}>Polanco</th>
                  <th className="px-4 py-3 text-center text-xs tracking-widest uppercase font-medium" style={{ color: 'var(--muted)' }}>Roma Norte</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { aspect: es ? 'Precio promedio' : 'Avg price', polanco: '$45k–$120k MXN', roma: '$18k–$65k MXN' },
                  { aspect: es ? 'Ambiente' : 'Atmosphere', polanco: es ? 'Exclusivo' : 'Exclusive', roma: es ? 'Bohemio' : 'Bohemian' },
                  { aspect: es ? 'Seguridad' : 'Security', polanco: es ? 'Muy alta' : 'Very high', roma: es ? 'Buena' : 'Good' },
                  { aspect: es ? 'Vida nocturna' : 'Nightlife', polanco: es ? 'Moderada' : 'Moderate', roma: es ? 'Muy activa' : 'Very active' },
                  { aspect: es ? 'Cafes de especialidad' : 'Specialty cafes', polanco: '⚠️', roma: '✅✅✅' },
                  { aspect: es ? 'Museos' : 'Museums', polanco: '✅✅✅', roma: '✅' },
                  { aspect: es ? 'Para familias' : 'For families', polanco: '✅✅✅', roma: '✅' },
                  { aspect: es ? 'Para nómadas digitales' : 'For digital nomads', polanco: '✅', roma: '✅✅✅' },
                ].map(row => (
                  <tr key={row.aspect} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--muted)' }}>{row.aspect}</td>
                    <td className="px-4 py-3 text-center" style={{ color: 'var(--ink)' }}>{row.polanco}</td>
                    <td className="px-4 py-3 text-center" style={{ color: 'var(--ink)' }}>{row.roma}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? '¿Cuál es mejor para ti?' : 'Which one is better for you?'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'La respuesta depende completamente de tu estilo de vida y prioridades. Si buscas exclusividad, seguridad máxima, estás en México por trabajo corporativo o diplomático, y no te importa pagar más por la comodidad, Polanco es tu colonia sin duda.' : 'The answer depends entirely on your lifestyle and priorities. If you seek exclusivity, maximum security, are in Mexico for corporate or diplomatic work, and do not mind paying more for comfort, Polanco is definitely your neighborhood.'}
          </p>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Si prefieres una vida más bohemia, rodeado de cultura, cafés increíbles y vida nocturna vibrante, con un presupuesto más accesible y en una comunidad creativa e internacional, Roma Norte es la opción perfecta. Es especialmente recomendable para nómadas digitales, artistas, escritores y profesionales creativos.' : 'If you prefer a more bohemian life, surrounded by culture, incredible cafes and vibrant nightlife, with a more accessible budget and in a creative and international community, Roma Norte is the perfect choice. It is especially recommended for digital nomads, artists, writers and creative professionals.'}
          </p>

          <div className="rounded-2xl p-6 my-8" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <h3 className="font-serif text-xl mb-6" style={{ color: 'var(--ink)' }}>{es ? 'Resumen por perfil' : 'Summary by profile'}</h3>
            <div className="space-y-3">
              {[
                { profile: es ? 'Ejecutivo / diplomático' : 'Executive / diplomat', choice: 'Polanco' },
                { profile: es ? 'Nómada digital / creativo' : 'Digital nomad / creative', choice: 'Roma Norte' },
                { profile: es ? 'Familia con hijos' : 'Family with children', choice: 'Polanco' },
                { profile: es ? 'Joven profesional' : 'Young professional', choice: 'Roma Norte' },
                { profile: es ? 'Amante de la gastronomía' : 'Food lover', choice: 'Roma Norte' },
                { profile: es ? 'Busca máxima seguridad' : 'Seeks maximum security', choice: 'Polanco' },
                { profile: es ? 'Presupuesto ajustado' : 'Tight budget', choice: 'Roma Norte' },
                { profile: es ? 'Cerca de museos y arte' : 'Near museums and art', choice: 'Polanco' },
              ].map(item => (
                <div key={item.profile} className="flex justify-between items-center py-2" style={{ borderBottom: '1px solid var(--border)' }}>
                  <span className="text-sm" style={{ color: 'var(--muted)' }}>{item.profile}</span>
                  <span className="text-sm font-semibold" style={{ color: 'var(--gold)' }}>{item.choice}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl p-8 mt-12 text-center" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <p className="font-serif text-2xl mb-3" style={{ color: 'var(--ink)' }}>{es ? '¿Listo para encontrar tu depa?' : 'Ready to find your apartment?'}</p>
            <p className="text-sm mb-6" style={{ color: 'var(--muted)' }}>{es ? 'Tenemos propiedades verificadas en Polanco, Roma Norte y todas las colonias de CDMX.' : 'We have verified properties in Polanco, Roma Norte and all neighborhoods of CDMX.'}</p>
            <Link href="/properties?city=Ciudad%20de%20M%C3%A9xico" className="inline-block px-8 py-3 rounded-full text-sm font-medium text-white" style={{ backgroundColor: 'var(--gold)' }}>
              {es ? 'Ver propiedades en CDMX' : 'View properties in CDMX'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
