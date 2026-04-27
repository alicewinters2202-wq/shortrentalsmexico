import Link from 'next/link';
import { getT } from '@/lib/lang';
import LangToggle from '@/components/layout/LangToggle';

export const metadata = {
  title: 'Vivir en San Miguel de Allende: Guía completa | ShortStayMX',
  description: 'Todo sobre vivir en San Miguel de Allende: el paraíso colonial de México favorito de expatriados y jubilados internacionales. Guía completa de zonas, costos y estilo de vida.',
};

export default async function ViviriEnSanMiguel() {
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
        <p className="text-xs tracking-widest uppercase font-medium mb-4" style={{ color: 'var(--gold)' }}>San Miguel de Allende</p>
        <h1 className="font-serif text-4xl sm:text-5xl mb-6 leading-tight" style={{ color: 'var(--ink)' }}>
          {es ? 'Vivir en San Miguel de Allende: Guía completa' : 'Living in San Miguel de Allende: Complete guide'}
        </h1>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'San Miguel de Allende es uno de los pueblos más hermosos del mundo y el favorito indiscutible de expatriados y jubilados internacionales en México. Declarado Patrimonio de la Humanidad por la UNESCO, su centro histórico de calles empedradas, arquitectura colonial del siglo XVII y XVIII, y una vibrante escena artística y cultural lo convierten en un lugar único en el mundo.' : 'San Miguel de Allende is one of the most beautiful towns in the world and the undisputed favorite of international expats and retirees in Mexico. Declared a UNESCO World Heritage Site, its historic center of cobblestone streets, 17th and 18th century colonial architecture, and a vibrant artistic and cultural scene make it a unique place in the world.'}
          </p>

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'La comunidad internacional' : 'The international community'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'San Miguel tiene una de las comunidades de expatriados más grandes y consolidadas de México en relación a su tamaño. Se estima que entre el 10% y el 15% de la población residente es extranjera, principalmente estadounidenses y canadienses, muchos de ellos jubilados que buscan calidad de vida, seguridad y belleza. Hay grupos de inglés, clubes sociales, eventos culturales internacionales, clases de español y toda la infraestructura necesaria para vivir cómodamente.' : 'San Miguel has one of the largest and most established expat communities in Mexico relative to its size. It is estimated that between 10% and 15% of the resident population is foreign, mainly Americans and Canadians, many of them retirees seeking quality of life, security and beauty. There are English-speaking groups, social clubs, international cultural events, Spanish classes and all the infrastructure needed to live comfortably.'}
          </p>

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Arte, cultura y gastronomía' : 'Art, culture and gastronomy'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'San Miguel tiene una escena artística extraordinaria. Hay más de 30 galerías de arte en el centro histórico, el famoso Festival de Jazz y Blues, el Festival Internacional de Cine y docenas de talleres de pintura, escultura y cerámica. La gastronomía ha evolucionado enormemente: hay restaurantes de cocina contemporánea mexicana, italiana, francesa y asiática de primer nivel, además de los tradicionales mercados con cocina yucateca, oaxaqueña y de la región.' : 'San Miguel has an extraordinary artistic scene. There are more than 30 art galleries in the historic center, the famous Jazz and Blues Festival, the International Film Festival and dozens of painting, sculpture and ceramics workshops. The gastronomy has evolved enormously: there are first-class restaurants serving contemporary Mexican, Italian, French and Asian cuisine, in addition to traditional markets with Yucatecan, Oaxacan and regional food.'}
          </p>

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Zonas para vivir' : 'Areas to live'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'El Centro Histórico es la zona más demandada, con casas coloniales restauradas a pasos de la icónica Parroquia de San Miguel Arcángel, todos los restaurantes y galerías. Villa de los Frailes y Arcos de San Miguel son zonas residenciales más tranquilas pero igualmente cercanas al centro, con jardines y más espacio. Los fraccionamientos en las afueras ofrecen casas más modernas con jardín a precios más accesibles.' : 'The Historic Center is the most sought-after area, with restored colonial homes steps from the iconic Parroquia de San Miguel Arcángel, all the restaurants and galleries. Villa de los Frailes and Arcos de San Miguel are quieter residential areas but equally close to the center, with gardens and more space. Developments on the outskirts offer more modern homes with gardens at more accessible prices.'}
          </p>

          <div className="rounded-2xl p-8 mt-12 text-center" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <p className="font-serif text-2xl mb-3" style={{ color: 'var(--ink)' }}>{es ? 'Ver propiedades en San Miguel' : 'View properties in San Miguel'}</p>
            <Link href="/properties?city=San%20Miguel%20de%20Allende" className="inline-block px-8 py-3 rounded-full text-sm font-medium text-white" style={{ backgroundColor: 'var(--gold)' }}>
              {es ? 'Ver propiedades' : 'View properties'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
