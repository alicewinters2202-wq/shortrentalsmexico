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
        <p className="text-sm mb-12" style={{ color: 'var(--muted)' }}>{es ? '2 de abril de 2024 · 9 min de lectura' : 'April 2, 2024 · 9 min read'}</p>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'San Miguel de Allende es uno de los pueblos más hermosos del mundo y el favorito indiscutible de expatriados y jubilados internacionales. Declarado Patrimonio de la Humanidad por la UNESCO, su centro histórico de calles empedradas, arquitectura colonial y una vibrante escena artística lo hacen único en México.' : 'San Miguel de Allende is one of the most beautiful towns in the world and the undisputed favorite of international expats and retirees. Declared a UNESCO World Heritage Site, its historic center of cobblestone streets, colonial architecture and a vibrant artistic scene make it unique in Mexico.'}
          </p>
          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'La comunidad de expatriados' : 'The expat community'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'San Miguel tiene una de las comunidades de expatriados más grandes de México en relación a su tamaño. Se estima que entre el 10% y el 15% de la población es extranjera, principalmente estadounidenses y canadienses. Hay grupos de inglés, clubes sociales, eventos culturales internacionales y toda la infraestructura necesaria para vivir cómodamente sin hablar español.' : 'San Miguel has one of the largest expat communities in Mexico relative to its size. It is estimated that between 10% and 15% of the population is foreign, mainly Americans and Canadians. There are English-speaking groups, social clubs, international cultural events and all the infrastructure needed to live comfortably without speaking Spanish.'}
          </p>
          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Zonas para vivir' : 'Areas to live'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'El Centro Histórico es la zona más demandada, con casas coloniales a pasos de la Parroquia y todos los restaurantes y galerías. Villa de los Frailes y Arcos de San Miguel son zonas residenciales más tranquilas pero igualmente cercanas al centro.' : 'The Historic Center is the most sought-after area, with colonial homes steps from the Parroquia and all the restaurants and galleries. Villa de los Frailes and Arcos de San Miguel are quieter residential areas but equally close to the center.'}
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
