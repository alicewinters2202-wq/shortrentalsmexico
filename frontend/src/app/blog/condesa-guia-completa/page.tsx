import Link from 'next/link';
import { getT } from '@/lib/lang';
import LangToggle from '@/components/layout/LangToggle';

export const metadata = {
  title: 'Condesa CDMX: Guía completa para vivir | ShortStayMX',
  description: 'Todo sobre vivir en la Condesa, Ciudad de México: Parque México, arquitectura art déco, Avenida Amsterdam, restaurantes y las mejores propiedades amuebladas.',
};

export default async function CondesaGuia() {
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
          {es ? 'Condesa: Guía completa para vivir' : 'Condesa: Complete living guide'}
        </h1>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'La Condesa es una de las colonias más queridas y codiciadas de Ciudad de México. Con su arquitectura art déco única en México, sus calles circulares flanqueadas por jacarandas, el icónico Parque México, la Avenida Amsterdam para correr y andar en bicicleta, y una excelente oferta gastronómica, es el lugar ideal para quienes buscan calidad de vida, tranquilidad y acceso a todo lo mejor de CDMX.' : 'Condesa is one of the most beloved and coveted neighborhoods in Mexico City. With its art deco architecture unique in Mexico, its circular streets flanked by jacaranda trees, the iconic Parque Mexico, Avenida Amsterdam for running and cycling, and an excellent gastronomic offering, it is the ideal place for those seeking quality of life, tranquility and access to the best of CDMX.'}
          </p>

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'La arquitectura art déco' : 'The art deco architecture'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'La Condesa tiene la mayor concentración de arquitectura art déco de Ciudad de México. En los años 30 y 40, la colonia fue diseñada por arquitectos influenciados por las corrientes europeas de la época, creando edificios de apartamentos con fachadas curvas, ventanas porthole, frisos decorativos y detalles geométricos únicos. Muchos de estos edificios han sido cuidadosamente restaurados y convertidos en departamentos de lujo.' : 'Condesa has the highest concentration of art deco architecture in Mexico City. In the 1930s and 1940s, the neighborhood was designed by architects influenced by European currents of the time, creating apartment buildings with curved facades, porthole windows, decorative friezes and unique geometric details. Many of these buildings have been carefully restored and converted into luxury apartments.'}
          </p>

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'El Parque México y la Avenida Amsterdam' : 'Parque Mexico and Avenida Amsterdam'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'El Parque México es el corazón de la Condesa y uno de los parques más icónicos de CDMX. Con sus fuentes, jardines bien cuidados, una pequeña laguna con patos y una arquitectura que refleja el estilo art déco de la colonia, es el punto de encuentro social por excelencia. Por las mañanas está lleno de corredores y personas paseando perros. Los fines de semana hay tianguis de productores orgánicos.' : 'Parque Mexico is the heart of Condesa and one of the most iconic parks in CDMX. With its fountains, well-maintained gardens, a small duck pond and architecture that reflects the neighborhood\'s art deco style, it is the social meeting point par excellence. In the mornings it is full of runners and dog walkers. On weekends there are organic producer markets.'}
          </p>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'La Avenida Amsterdam es una calle circular que rodea el Parque México con amplios camellones arbolados. Es perfecta para correr, andar en bicicleta o simplemente caminar bajo la sombra. Junto con la Avenida Ámsterdam y otras calles de la colonia, forma uno de los circuitos de running más populares de CDMX.' : 'Avenida Amsterdam is a circular street that surrounds Parque Mexico with wide tree-lined medians. It is perfect for running, cycling or simply walking in the shade. Together with Avenida Amsterdam and other streets in the neighborhood, it forms one of the most popular running circuits in CDMX.'}
          </p>

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Gastronomía y vida de barrio' : 'Gastronomy and neighborhood life'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'La Condesa tiene una escena gastronómica excelente, aunque más tranquila que Roma Norte. Hay restaurantes de cocina mediterránea, japonesa, mexicana contemporánea y cafés de especialidad. La vida de barrio es muy activa: hay mercados locales, boutiques independientes, librerías y galerías de arte pequeñas que dan carácter a la colonia.' : 'Condesa has an excellent gastronomic scene, although more peaceful than Roma Norte. There are Mediterranean, Japanese, contemporary Mexican cuisine restaurants and specialty cafes. The neighborhood life is very active: there are local markets, independent boutiques, bookstores and small art galleries that give character to the neighborhood.'}
          </p>

          <div className="rounded-2xl p-8 mt-12 text-center" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <p className="font-serif text-2xl mb-3" style={{ color: 'var(--ink)' }}>{es ? 'Ver propiedades en Condesa' : 'View properties in Condesa'}</p>
            <Link href="/colonias/condesa" className="inline-block px-8 py-3 rounded-full text-sm font-medium text-white" style={{ backgroundColor: 'var(--gold)' }}>
              {es ? 'Ver propiedades' : 'View properties'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
