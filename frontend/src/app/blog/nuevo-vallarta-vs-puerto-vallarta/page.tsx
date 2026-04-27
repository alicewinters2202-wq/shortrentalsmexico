import Link from 'next/link';
import { getT } from '@/lib/lang';
import LangToggle from '@/components/layout/LangToggle';

export const metadata = {
  title: 'Nuevo Vallarta vs Puerto Vallarta: ¿Cuál elegir? | ShortStayMX',
  description: 'Comparamos Nuevo Vallarta y Puerto Vallarta para ayudarte a elegir el mejor destino para vivir en la costa del Pacífico mexicano.',
};

export default async function NuevoVallartaVsPuertoVallarta() {
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
        <p className="text-xs tracking-widest uppercase font-medium mb-4" style={{ color: 'var(--gold)' }}>{es ? 'Pacífico Mexicano' : 'Mexican Pacific'}</p>
        <h1 className="font-serif text-4xl sm:text-5xl mb-6 leading-tight" style={{ color: 'var(--ink)' }}>
          {es ? 'Nuevo Vallarta vs Puerto Vallarta: ¿Cuál elegir?' : 'Nuevo Vallarta vs Puerto Vallarta: Which to choose?'}
        </h1>
        <p className="text-sm mb-12" style={{ color: 'var(--muted)' }}>{es ? '21 de mayo de 2024 · 7 min de lectura' : 'May 21, 2024 · 7 min read'}</p>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'La bahía de Banderas alberga dos destinos muy populares para expatriados: Puerto Vallarta y Nuevo Vallarta. Separados por apenas 20 kilómetros, ofrecen experiencias muy diferentes. Te explicamos las diferencias para que puedas elegir el que mejor se adapta a ti.' : 'Banderas Bay is home to two very popular destinations for expats: Puerto Vallarta and Nuevo Vallarta. Separated by just 20 kilometers, they offer very different experiences. We explain the differences so you can choose the one that best suits you.'}
          </p>
          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>Puerto Vallarta</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Puerto Vallarta tiene alma de ciudad. Con su malecón, centro histórico de calles empedradas, Zona Romántica bohemia y una comunidad de expatriados muy establecida, PV ofrece una experiencia más urbana y cultural. Tiene más opciones de restaurantes, vida nocturna y servicios.' : 'Puerto Vallarta has the soul of a city. With its malecón, historic center of cobblestone streets, bohemian Romantic Zone and a very established expat community, PV offers a more urban and cultural experience. It has more restaurant options, nightlife and services.'}
          </p>
          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>Nuevo Vallarta</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Nuevo Vallarta es más tranquilo y residencial. Con sus desarrollos privados de lujo, marinas, campos de golf y playas menos concurridas, es la opción preferida por familias y jubilados que buscan exclusividad y tranquilidad. Los precios pueden ser más accesibles que en Puerto Vallarta para propiedades de lujo.' : 'Nuevo Vallarta is more peaceful and residential. With its luxury private developments, marinas, golf courses and less crowded beaches, it is the preferred option for families and retirees seeking exclusivity and tranquility. Prices can be more accessible than in Puerto Vallarta for luxury properties.'}
          </p>
          <div className="rounded-2xl p-8 mt-12 text-center" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <p className="font-serif text-2xl mb-3" style={{ color: 'var(--ink)' }}>{es ? 'Ver propiedades en la Bahía de Banderas' : 'View properties in Banderas Bay'}</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/properties?city=Puerto%20Vallarta" className="inline-block px-6 py-3 rounded-full text-sm font-medium text-white" style={{ backgroundColor: 'var(--gold)' }}>Puerto Vallarta</Link>
              <Link href="/properties?city=Nuevo%20Vallarta" className="inline-block px-6 py-3 rounded-full text-sm font-medium border" style={{ color: 'var(--ink)', borderColor: 'var(--border)' }}>Nuevo Vallarta</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
