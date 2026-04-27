import Link from 'next/link';
import { getT } from '@/lib/lang';
import LangToggle from '@/components/layout/LangToggle';

export const metadata = {
  title: 'Las mejores ciudades de México para nómadas digitales | ShortStayMX',
  description: 'México es uno de los destinos favoritos para trabajar de forma remota. Descubre las mejores ciudades para nómadas digitales: CDMX, Tulum, Mérida y más.',
};

export default async function NomadasDigitalesMexico() {
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
          {es ? 'Las mejores ciudades de México para nómadas digitales' : 'The best cities in Mexico for digital nomads'}
        </h1>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'México se ha convertido en uno de los destinos más populares para nómadas digitales en el mundo. Clima agradable casi todo el año, costos de vida razonables, internet de alta velocidad disponible en la mayoría de las ciudades principales, cultura rica y diversa, y comunidades internacionales muy activas hacen de México el lugar perfecto para trabajar de forma remota.' : 'Mexico has become one of the most popular destinations for digital nomads in the world. Pleasant weather almost year-round, reasonable cost of living, high-speed internet available in most major cities, rich and diverse culture, and very active international communities make Mexico the perfect place to work remotely.'}
          </p>

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Por qué México es perfecto para nómadas digitales' : 'Why Mexico is perfect for digital nomads'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'México tiene varias ventajas competitivas como destino para trabajar remotamente. La zona horaria es compatible con la mayoría de las empresas estadounidenses y canadienses, lo que facilita las reuniones virtuales. El costo de vida permite ahorrar dinero significativo comparado con vivir en EE.UU. o Europa. Y la calidad de vida — con gastronomía increíble, cultura vibrante y naturaleza extraordinaria — es difícil de superar.' : 'Mexico has several competitive advantages as a destination for remote work. The time zone is compatible with most American and Canadian companies, making virtual meetings easier. The cost of living allows significant savings compared to living in the US or Europe. And the quality of life — with incredible gastronomy, vibrant culture and extraordinary nature — is hard to beat.'}
          </p>

          {[
            {
              city: 'Ciudad de México', emoji: '🌆', link: '/properties?city=Ciudad%20de%20M%C3%A9xico',
              es_desc: 'La capital es la opción número uno para nómadas digitales en México. Tiene la mejor infraestructura tecnológica del país, la mayor cantidad de espacios de coworking, la más amplia variedad de restaurantes y cafés con WiFi rápido, y una comunidad internacional enorme y muy activa. Roma Norte y Condesa son los barrios favoritos, con decenas de cafés de especialidad con excelente conexión a internet.',
              en_desc: 'The capital is the number one option for digital nomads in Mexico. It has the best technological infrastructure in the country, the largest number of coworking spaces, the widest variety of restaurants and cafes with fast WiFi, and a huge and very active international community. Roma Norte and Condesa are the favorite neighborhoods, with dozens of specialty cafes with excellent internet connection.',
            },
            {
              city: 'Tulum', emoji: '🌿', link: '/properties?city=Tulum',
              es_desc: 'Tulum ha explotado como destino de nómadas digitales en los últimos años. Su combinación única de naturaleza extraordinaria — cenotes, selva maya, playas de arena blanca — con una infraestructura tech en rápido crecimiento la hace irresistible. Aldea Zama tiene la mayor concentración de espacios de coworking y cafés con buena conexión. El precio a pagar es que internet puede ser menos estable que en CDMX.',
              en_desc: 'Tulum has exploded as a digital nomad destination in recent years. Its unique combination of extraordinary nature — cenotes, Mayan jungle, white sand beaches — with a rapidly growing tech infrastructure makes it irresistible. Aldea Zama has the highest concentration of coworking spaces and cafes with good connection. The trade-off is that internet can be less stable than in CDMX.',
            },
            {
              city: 'Mérida', emoji: '🏛️', link: '/properties?city=M%C3%A9rida',
              es_desc: 'Mérida es una revelación para muchos nómadas digitales. La ciudad más segura de México tiene costos de vida muy accesibles, una comunidad de expatriados en crecimiento, excelente infraestructura de internet y una calidad de vida extraordinaria. Su arquitectura colonial, gastronomía yucateca única y ritmo de vida tranquilo la hacen perfecta para quienes buscan un equilibrio entre trabajo y bienestar.',
              en_desc: 'Merida is a revelation for many digital nomads. Mexico\'s safest city has very accessible costs of living, a growing expat community, excellent internet infrastructure and extraordinary quality of life. Its colonial architecture, unique Yucatecan gastronomy and peaceful pace of life make it perfect for those seeking a balance between work and wellness.',
            },
            {
              city: 'Guadalajara', emoji: '🌺', link: '/properties?city=Guadalajara',
              es_desc: 'Guadalajara es el Silicon Valley de México y una ciudad en pleno auge tecnológico. Con una comunidad tech muy activa, numerosos espacios de coworking, excelente infraestructura y la mejor escena cultural del occidente del país, es una opción cada vez más popular para nómadas digitales que buscan algo diferente a CDMX.',
              en_desc: 'Guadalajara is the Silicon Valley of Mexico and a city in full technological boom. With a very active tech community, numerous coworking spaces, excellent infrastructure and the best cultural scene in western Mexico, it is an increasingly popular option for digital nomads looking for something different from CDMX.',
            },
          ].map(item => (
            <div key={item.city} className="rounded-2xl p-6 my-6" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
              <span className="text-3xl mb-3 block">{item.emoji}</span>
              <h3 className="font-serif text-xl mb-3" style={{ color: 'var(--ink)' }}>{item.city}</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>{es ? item.es_desc : item.en_desc}</p>
              <Link href={item.link} className="text-xs font-semibold" style={{ color: 'var(--gold)' }}>
                {es ? 'Ver propiedades →' : 'View properties →'}
              </Link>
            </div>
          ))}

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Consejos para nómadas digitales en México' : 'Tips for digital nomads in Mexico'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Antes de mudarte a México como nómada digital, ten en cuenta estos consejos. Primero, verifica siempre la velocidad de internet antes de confirmar un departamento. La mayoría de los propietarios en ShortStayMX especifican la velocidad de WiFi. Segundo, considera usar un hotspot móvil como respaldo, especialmente en Tulum donde la conexión puede ser irregular.' : 'Before moving to Mexico as a digital nomad, keep these tips in mind. First, always verify internet speed before confirming an apartment. Most landlords on ShortStayMX specify WiFi speed. Second, consider using a mobile hotspot as backup, especially in Tulum where the connection can be irregular.'}
          </p>

          <div className="rounded-2xl p-8 mt-12 text-center" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <p className="font-serif text-2xl mb-3" style={{ color: 'var(--ink)' }}>{es ? 'Encuentra tu base en México' : 'Find your base in Mexico'}</p>
            <p className="text-sm mb-6" style={{ color: 'var(--muted)' }}>{es ? 'Departamentos amueblados con WiFi rápido verificado en las mejores ciudades.' : 'Furnished apartments with verified fast WiFi in the best cities.'}</p>
            <Link href="/properties" className="inline-block px-8 py-3 rounded-full text-sm font-medium text-white" style={{ backgroundColor: 'var(--gold)' }}>
              {es ? 'Ver propiedades' : 'View properties'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
