import Link from 'next/link';
import { getT } from '@/lib/lang';
import LangToggle from '@/components/layout/LangToggle';

export const metadata = {
  title: 'Condesa CDMX: Guía completa para vivir | ShortStayMX',
  description: 'Todo sobre vivir en la Condesa, Ciudad de México: parques, restaurantes, arquitectura art déco, costos y las mejores propiedades amuebladas.',
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
        <p className="text-sm mb-12" style={{ color: 'var(--muted)' }}>{es ? '4 de junio de 2024 · 8 min de lectura' : 'June 4, 2024 · 8 min read'}</p>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'La Condesa es una de las colonias más queridas de Ciudad de México. Con su arquitectura art déco única, calles circulares, parques icónicos y una excelente oferta gastronómica, es el lugar ideal para quienes buscan calidad de vida, tranquilidad y acceso a todo lo que CDMX tiene para ofrecer.' : 'Condesa is one of the most beloved neighborhoods in Mexico City. With its unique art deco architecture, circular streets, iconic parks and an excellent gastronomic offering, it is the ideal place for those seeking quality of life, tranquility and access to everything CDMX has to offer.'}
          </p>
          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'El Parque México' : 'Parque Mexico'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'El Parque México es el corazón de la Condesa y uno de los parques más icónicos de CDMX. Rodeado de cafés y restaurantes, es el punto de encuentro social de la colonia. Por las mañanas está lleno de personas haciendo ejercicio, los fines de semana hay mercados artesanales, y siempre hay un ambiente agradable y seguro.' : 'Parque Mexico is the heart of Condesa and one of the most iconic parks in CDMX. Surrounded by cafes and restaurants, it is the social meeting point of the neighborhood. In the mornings it is full of people exercising, on weekends there are artisan markets, and there is always a pleasant and safe atmosphere.'}
          </p>
          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Avenida Amsterdam' : 'Avenida Amsterdam'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'La Avenida Amsterdam es una calle circular que rodea el Parque México con camellones arbolados. Es perfecta para correr, andar en bicicleta o simplemente caminar. Esta avenida es uno de los elementos más distintivos de la Condesa y una razón más para enamorarse de vivir aquí.' : 'Avenida Amsterdam is a circular street that surrounds Parque Mexico with tree-lined medians. It is perfect for running, cycling or simply walking. This avenue is one of the most distinctive elements of Condesa and another reason to fall in love with living here.'}
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
