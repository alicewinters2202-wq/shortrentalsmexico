import Link from 'next/link';
import { getT } from '@/lib/lang';
import LangToggle from '@/components/layout/LangToggle';

export const metadata = {
  title: 'Las mejores ciudades de México para nómadas digitales | ShortStayMX',
  description: 'México es uno de los destinos favoritos para trabajar de forma remota. Descubre las mejores ciudades para nómadas digitales: CDMX, Tulum, Oaxaca y más.',
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
        <p className="text-sm mb-12" style={{ color: 'var(--muted)' }}>{es ? '10 de febrero de 2024 · 9 min de lectura' : 'February 10, 2024 · 9 min read'}</p>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'México se ha convertido en uno de los destinos más populares para nómadas digitales en el mundo. Clima agradable, costos de vida razonables, internet de alta velocidad, cultura rica y comunidades internacionales muy activas hacen de México el lugar perfecto para trabajar de forma remota.' : 'Mexico has become one of the most popular destinations for digital nomads in the world. Pleasant climate, reasonable cost of living, high-speed internet, rich culture and very active international communities make Mexico the perfect place to work remotely.'}
          </p>
          {[
            { city: 'Ciudad de México', emoji: '🌆', es_desc: 'La capital es la opción número uno para nómadas digitales. Tiene la mejor infraestructura, más espacios de coworking, mayor variedad de restaurantes y cafés con WiFi, y una comunidad internacional enorme. Roma Norte y Condesa son los barrios favoritos.', en_desc: 'The capital is the number one option for digital nomads. It has the best infrastructure, more coworking spaces, greater variety of restaurants and cafes with WiFi, and a huge international community. Roma Norte and Condesa are the favorite neighborhoods.', link: '/properties?city=Ciudad%20de%20M%C3%A9xico' },
            { city: 'Tulum', emoji: '🌿', es_desc: 'Tulum ha explotado como destino de nómadas digitales en los últimos años. Su ambiente bohemio, naturaleza única con cenotes y selva, y su creciente infraestructura tech la hacen irresistible. Aldea Zama es el desarrollo residencial favorito.', en_desc: 'Tulum has exploded as a digital nomad destination in recent years. Its bohemian atmosphere, unique nature with cenotes and jungle, and its growing tech infrastructure make it irresistible. Aldea Zama is the favorite residential development.', link: '/properties?city=Tulum' },
            { city: 'Mérida', emoji: '🏛️', es_desc: 'Mérida es la ciudad más segura de México y una de las más agradables para vivir. Con costos de vida bajos, arquitectura colonial hermosa y una escena gastronómica en auge, es perfecta para quienes buscan tranquilidad.', en_desc: 'Merida is the safest city in Mexico and one of the most pleasant to live in. With low cost of living, beautiful colonial architecture and a booming gastronomic scene, it is perfect for those seeking tranquility.', link: '/properties?city=M%C3%A9rida' },
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
        </div>
      </div>
    </div>
  );
}
