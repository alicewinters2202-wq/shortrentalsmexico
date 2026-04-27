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
        <div className="space-y-6">
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Roma Norte se ha convertido en la colonia más deseada y vibrante de Ciudad de México. Inmortalizada por la película Roma de Alfonso Cuarón — ganadora del Oscar — esta colonia ha ganado fama internacional mientras mantiene su autenticidad y carácter único. Una mezcla perfecta de arquitectura art déco, calles arboladas, la mejor escena gastronómica de la ciudad y una comunidad creativa e internacional extraordinariamente activa.' : 'Roma Norte has become the most desired and vibrant neighborhood in Mexico City. Immortalized by Alfonso Cuarón\'s Oscar-winning film Roma, this neighborhood has gained international fame while maintaining its authenticity and unique character. A perfect blend of art deco architecture, tree-lined streets, the best gastronomic scene in the city and an extraordinarily active creative and international community.'}
          </p>

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'La escena gastronómica' : 'The gastronomic scene'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Roma Norte es, sin duda, la capital gastronómica de Ciudad de México. Hay decenas de cafés de especialidad de primer nivel — Quentin, Buna, Cardinal, Blend Station — con granos de origen single y métodos de preparación alternativos. Los restaurantes son extraordinarios: desde cocina mexicana contemporánea hasta italiana, japonesa, peruana y de fusión, muchos con presencia en las mejores listas gastronómicas internacionales.' : 'Roma Norte is, without a doubt, the gastronomic capital of Mexico City. There are dozens of top-tier specialty cafes — Quentin, Buna, Cardinal, Blend Station — with single-origin beans and alternative brewing methods. The restaurants are extraordinary: from contemporary Mexican cuisine to Italian, Japanese, Peruvian and fusion, many featured on the best international gastronomic lists.'}
          </p>

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Los parques y la vida de barrio' : 'The parks and neighborhood life'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'El Parque México es el corazón de Roma Norte y uno de los iconos más reconocidos de CDMX. Con sus fuentes art déco, jardines bien cuidados y caminos arbolados, es el punto de encuentro social de la colonia. Rodeado de cafés con terraza, es perfecta para comenzar el día con un buen café mientras observas la vida del barrio. Los fines de semana hay mercados de productores y artesanales.' : 'Parque Mexico is the heart of Roma Norte and one of the most recognized icons of CDMX. With its art deco fountains, well-maintained gardens and tree-lined paths, it is the social meeting point of the neighborhood. Surrounded by cafes with terraces, it is perfect for starting the day with a good coffee while watching neighborhood life. On weekends there are producer and artisan markets.'}
          </p>

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Precios y opciones de vivienda' : 'Prices and housing options'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Roma Norte ofrece una gran variedad de opciones de vivienda. Hay estudios modernos desde $12,000 MXN al mes, departamentos de 1 recámara bien ubicados desde $18,000 MXN, y departamentos de 2-3 recámaras en edificios con amenidades desde $35,000 MXN. Los lofts en edificios art déco restaurados son especialmente populares entre creativos y nómadas digitales.' : 'Roma Norte offers a wide variety of housing options. There are modern studios from $12,000 MXN per month, well-located 1-bedroom apartments from $18,000 MXN, and 2-3 bedroom apartments in buildings with amenities from $35,000 MXN. Lofts in restored art deco buildings are especially popular among creatives and digital nomads.'}
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
