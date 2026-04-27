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
        <p className="text-sm mb-12" style={{ color: 'var(--muted)' }}>{es ? '12 de marzo de 2024 · 7 min de lectura' : 'March 12, 2024 · 7 min read'}</p>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Guadalajara es la segunda ciudad más grande de México y una de las más dinámicas. Con una escena cultural y gastronómica en auge, clima primaveral todo el año y costos de vida más bajos que CDMX, la Perla Tapatía se ha convertido en un destino cada vez más popular para expatriados.' : 'Guadalajara is the second largest city in Mexico and one of the most dynamic. With a booming cultural and gastronomic scene, spring-like weather year-round and lower cost of living than CDMX, the Pearl of Jalisco has become an increasingly popular destination for expats.'}
          </p>
          {[
            { name: 'Puerta de Hierro', emoji: '🏢', es_desc: 'La zona más exclusiva de Zapopan. Torres residenciales de lujo, el centro comercial Andares, hospitales privados de primer nivel y una excelente conectividad. Es la opción preferida por ejecutivos corporativos y familias que buscan lo mejor de Guadalajara.', en_desc: 'The most exclusive area of Zapopan. Luxury residential towers, the Andares shopping center, top-tier private hospitals and excellent connectivity. It is the preferred option for corporate executives and families looking for the best of Guadalajara.' },
            { name: 'Colonia Americana', emoji: '☕', es_desc: 'El corazón bohemio de Guadalajara. Con la famosa Avenida Chapultepec llena de restaurantes y bares, cafés de especialidad, galerías de arte y una vibrante escena cultural, es la favorita de jóvenes profesionales y creativos.', en_desc: 'The bohemian heart of Guadalajara. With the famous Avenida Chapultepec full of restaurants and bars, specialty cafes, art galleries and a vibrant cultural scene, it is the favorite of young professionals and creatives.' },
            { name: 'Providencia', emoji: '🌳', es_desc: 'Una de las colonias más tranquilas y elegantes de la ciudad. Calles arboladas, excelentes restaurantes y una ubicación privilegiada entre el centro y las zonas empresariales del norte. Perfecta para familias y profesionales.', en_desc: 'One of the most peaceful and elegant neighborhoods in the city. Tree-lined streets, excellent restaurants and a privileged location between the downtown and the business areas to the north. Perfect for families and professionals.' },
          ].map(item => (
            <div key={item.name} className="rounded-2xl p-6 my-6" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
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
