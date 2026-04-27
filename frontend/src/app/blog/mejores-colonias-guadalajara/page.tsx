import Link from 'next/link';
import { getT } from '@/lib/lang';
import LangToggle from '@/components/layout/LangToggle';

export const metadata = {
  title: 'Las mejores colonias de Guadalajara para expatriados | ShortStayMX',
  description: 'Guía completa de las mejores zonas de Guadalajara para vivir: Puerta de Hierro, Colonia Americana y Providencia. Todo lo que necesitas saber como expatriado.',
};

export default async function MejoresColoniasGuadalajara() {
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
        <p className="text-xs tracking-widest uppercase font-medium mb-4" style={{ color: 'var(--gold)' }}>Guadalajara</p>
        <h1 className="font-serif text-4xl sm:text-5xl mb-6 leading-tight" style={{ color: 'var(--ink)' }}>
          {es ? 'Las mejores colonias de Guadalajara para vivir como expatriado' : 'The best neighborhoods in Guadalajara to live as an expat'}
        </h1>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Guadalajara es la segunda ciudad más grande de México y una de las más dinámicas del país. Con una escena cultural y gastronómica en auge, clima primaveral casi todo el año, costos de vida más bajos que CDMX y una comunidad de negocios muy activa impulsada por el nearshoring, la Perla Tapatía se ha convertido en un destino cada vez más popular para expatriados de todo el mundo.' : 'Guadalajara is the second largest city in Mexico and one of the most dynamic in the country. With a booming cultural and gastronomic scene, spring-like weather almost year-round, lower cost of living than CDMX and a very active business community driven by nearshoring, the Pearl of Jalisco has become an increasingly popular destination for expats from around the world.'}
          </p>

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Por qué elegir Guadalajara' : 'Why choose Guadalajara'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Guadalajara ofrece una combinación única de factores que la hacen muy atractiva. El clima es considerado uno de los mejores de México, con temperaturas entre 15°C y 28°C durante todo el año y sin la extrema humedad de las ciudades costeras. Los costos de vida son entre 20% y 30% más bajos que en CDMX manteniendo una calidad de vida comparable. Y la ciudad está en pleno boom tecnológico, con cientos de empresas internacionales estableciendo operaciones aquí.' : 'Guadalajara offers a unique combination of factors that make it very attractive. The climate is considered one of the best in Mexico, with temperatures between 15°C and 28°C year-round and without the extreme humidity of coastal cities. The cost of living is 20% to 30% lower than in CDMX while maintaining a comparable quality of life. And the city is in full technological boom, with hundreds of international companies establishing operations here.'}
          </p>

          {[
            {
              name: 'Puerta de Hierro', emoji: '🏢',
              es_desc: 'La zona más exclusiva de Zapopan y una de las más prestigiosas de todo el área metropolitana. Torres residenciales de lujo, el centro comercial Andares con las mejores tiendas internacionales, hospitales privados de primer nivel como el Hospital Country 2000, colegios internacionales y una excelente conectividad. Es la primera elección para ejecutivos corporativos, empresarios y familias que buscan lo mejor.',
              en_desc: 'The most exclusive area of Zapopan and one of the most prestigious in the entire metropolitan area. Luxury residential towers, the Andares shopping center with the best international stores, top-tier private hospitals like Country 2000 Hospital, international schools and excellent connectivity. It is the first choice for corporate executives, entrepreneurs and families seeking the best.',
            },
            {
              name: 'Colonia Americana', emoji: '☕',
              es_desc: 'El corazón bohemio y creativo de Guadalajara. La famosa Avenida Chapultepec concentra decenas de restaurantes, bares y cafés de especialidad. Hay galerías de arte, teatros, espacios de coworking y una comunidad creativa e internacional muy activa. Es la favorita de nómadas digitales, artistas y jóvenes profesionales que valoran la cultura y la vida de barrio.',
              en_desc: 'The bohemian and creative heart of Guadalajara. The famous Avenida Chapultepec concentrates dozens of restaurants, bars and specialty cafes. There are art galleries, theaters, coworking spaces and a very active creative and international community. It is the favorite of digital nomads, artists and young professionals who value culture and neighborhood life.',
            },
            {
              name: 'Providencia', emoji: '🌳',
              es_desc: 'Una de las colonias más tranquilas, elegantes y consolidadas de Guadalajara. Calles arboladas, excelentes restaurantes, supermercados de calidad y una ubicación privilegiada entre el centro histórico y las zonas empresariales del norte. Perfecta para familias y profesionales que buscan tranquilidad y calidad de vida sin alejarse de todo.',
              en_desc: 'One of the most peaceful, elegant and established neighborhoods in Guadalajara. Tree-lined streets, excellent restaurants, quality supermarkets and a privileged location between the historic center and the business areas to the north. Perfect for families and professionals seeking tranquility and quality of life without being far from everything.',
            },
          ].map(item => (
            <div key={item.name} className="rounded-2xl p-6 my-4" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
              <span className="text-3xl mb-3 block">{item.emoji}</span>
              <h3 className="font-serif text-xl mb-3" style={{ color: 'var(--ink)' }}>{item.name}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{es ? item.es_desc : item.en_desc}</p>
            </div>
          ))}

          <div className="rounded-2xl p-8 mt-12 text-center" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <p className="font-serif text-2xl mb-3" style={{ color: 'var(--ink)' }}>{es ? 'Ver propiedades en Guadalajara' : 'View properties in Guadalajara'}</p>
            <Link href="/properties?city=Guadalajara" className="inline-block px-8 py-3 rounded-full text-sm font-medium text-white" style={{ backgroundColor: 'var(--gold)' }}>
              {es ? 'Ver propiedades' : 'View properties'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
