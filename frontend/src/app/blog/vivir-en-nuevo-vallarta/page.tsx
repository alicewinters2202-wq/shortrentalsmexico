import Link from 'next/link';
import { getT } from '@/lib/lang';
import LangToggle from '@/components/layout/LangToggle';

export const metadata = {
  title: 'Vivir en Nuevo Vallarta: Guía para expatriados | ShortStayMX',
  description: 'Todo sobre vivir en Nuevo Vallarta y la Riviera Nayarit: Flamingos, Bucerías, Cruz de Huanacaxtle. Guía completa de zonas, costos y estilo de vida en el Pacífico.',
};

export default async function ViviriEnNuevoVallarta() {
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
        <p className="text-xs tracking-widest uppercase font-medium mb-4" style={{ color: 'var(--gold)' }}>Nuevo Vallarta</p>
        <h1 className="font-serif text-4xl sm:text-5xl mb-6 leading-tight" style={{ color: 'var(--ink)' }}>
          {es ? 'Vivir en Nuevo Vallarta: Guía para expatriados' : 'Living in Nuevo Vallarta: Guide for expats'}
        </h1>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Nuevo Vallarta y la Riviera Nayarit se han convertido en una de las zonas de mayor crecimiento para expatriados en México. A solo 20 minutos del aeropuerto internacional de Puerto Vallarta, esta área ofrece una combinación perfecta de playas del Pacífico, marinas de lujo, campos de golf de clase mundial y una calidad de vida excepcional a precios más accesibles que otras zonas costeras de lujo en México.' : 'Nuevo Vallarta and the Riviera Nayarit have become one of the fastest-growing areas for expats in Mexico. Just 20 minutes from Puerto Vallarta international airport, this area offers a perfect combination of Pacific beaches, luxury marinas, world-class golf courses and an exceptional quality of life at more accessible prices than other luxury coastal areas in Mexico.'}
          </p>

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Las principales zonas' : 'The main areas'}</h2>
          {[
            {
              name: 'Flamingos', emoji: '🏖️',
              es_desc: 'La zona más exclusiva de Nuevo Vallarta, con condominios de lujo frente al mar, la Grand Marina con acceso directo al agua, el campo de golf Flamingos de clase mundial y resorts de cinco estrellas. Sus torres residenciales ofrecen vistas panorámicas al Océano Pacífico con albercas infinitas, gimnasios y roof gardens. La primera elección para quienes buscan lo mejor.',
              en_desc: 'The most exclusive area of Nuevo Vallarta, with luxury oceanfront condominiums, the Grand Marina with direct water access, the world-class Flamingos golf course and five-star resorts. Its residential towers offer panoramic views of the Pacific Ocean with infinity pools, gyms and roof gardens. The first choice for those seeking the best.',
            },
            {
              name: 'Bucerías', emoji: '🌊',
              es_desc: 'Pueblo costero auténtico con mucho carácter, a 10 minutos de Nuevo Vallarta. Con su malecón, mercado local, restaurantes marisqueros y una comunidad de expatriados muy activa, Bucerías ofrece vida de playa tranquila y auténtica a precios más accesibles. Nuevos desarrollos residenciales modernos de lujo están transformando la zona.',
              en_desc: 'Authentic coastal town with a lot of character, 10 minutes from Nuevo Vallarta. With its malecón, local market, seafood restaurants and a very active expat community, Bucerias offers quiet and authentic beach life at more accessible prices. New modern luxury residential developments are transforming the area.',
            },
            {
              name: 'Cruz de Huanacaxtle', emoji: '🌴',
              es_desc: 'El pueblo más tranquilo y menos turístico de la zona, con playas de aguas tranquilas perfectas para nadar. Nuevos desarrollos de lujo están llegando aquí, ofreciendo una combinación única de autenticidad y modernidad. La opción preferida por quienes buscan alejarse del turismo masivo sin renunciar a las comodidades.',
              en_desc: 'The most peaceful and least touristy town in the area, with calm water beaches perfect for swimming. New luxury developments are arriving here, offering a unique combination of authenticity and modernity. The preferred option for those seeking to escape mass tourism without giving up amenities.',
            },
          ].map(item => (
            <div key={item.name} className="rounded-2xl p-6 my-4" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
              <span className="text-3xl mb-3 block">{item.emoji}</span>
              <h3 className="font-serif text-xl mb-3" style={{ color: 'var(--ink)' }}>{item.name}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{es ? item.es_desc : item.en_desc}</p>
            </div>
          ))}

          <div className="rounded-2xl p-8 mt-12 text-center" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <p className="font-serif text-2xl mb-3" style={{ color: 'var(--ink)' }}>{es ? 'Ver propiedades en Nuevo Vallarta' : 'View properties in Nuevo Vallarta'}</p>
            <Link href="/properties?city=Nuevo%20Vallarta" className="inline-block px-8 py-3 rounded-full text-sm font-medium text-white" style={{ backgroundColor: 'var(--gold)' }}>
              {es ? 'Ver propiedades' : 'View properties'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
