import Link from 'next/link';
import { getT } from '@/lib/lang';
import LangToggle from '@/components/layout/LangToggle';

export const metadata = {
  title: 'Nuevo Vallarta vs Puerto Vallarta: ¿Cuál elegir? | ShortStayMX',
  description: 'Comparamos Nuevo Vallarta y Puerto Vallarta para ayudarte a elegir el mejor destino para vivir en la costa del Pacífico mexicano. Diferencias, costos y estilo de vida.',
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
        <div className="space-y-6">
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'La Bahía de Banderas alberga dos destinos muy populares para expatriados: Puerto Vallarta en Jalisco y Nuevo Vallarta en Nayarit. Separados por apenas 20 kilómetros y el río Ameca — que marca la frontera entre los dos estados — ofrecen experiencias de vida muy diferentes. Esta guía te ayuda a elegir cuál se adapta mejor a tu perfil y estilo de vida.' : 'Banderas Bay is home to two very popular destinations for expats: Puerto Vallarta in Jalisco and Nuevo Vallarta in Nayarit. Separated by just 20 kilometers and the Ameca River — which marks the border between the two states — they offer very different living experiences. This guide helps you choose which one best suits your profile and lifestyle.'}
          </p>

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>Puerto Vallarta</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Puerto Vallarta tiene alma de ciudad auténtica. Con su malecón icónico a lo largo de la Bahía de Banderas, su centro histórico de calles empedradas con arquitectura colonial, la Zona Romántica bohemia con galerías de arte y restaurantes premiados, y una comunidad de expatriados de décadas de antigüedad, PV ofrece una experiencia genuinamente urbana y cultural.' : 'Puerto Vallarta has the soul of an authentic city. With its iconic malecón along Banderas Bay, its historic center of cobblestone streets with colonial architecture, the bohemian Romantic Zone with art galleries and award-winning restaurants, and an expat community decades old, PV offers a genuinely urban and cultural experience.'}
          </p>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'La Marina Vallarta es la zona más moderna y exclusiva, con su marina de clase mundial, campo de golf y condominios frente al mar. El aeropuerto internacional está a 5 minutos en coche, lo que hace muy cómodos los viajes frecuentes.' : 'Marina Vallarta is the most modern and exclusive area, with its world-class marina, golf course and oceanfront condominiums. The international airport is just 5 minutes by car, making frequent travel very convenient.'}
          </p>

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>Nuevo Vallarta</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Nuevo Vallarta es más tranquilo, ordenado y residencial. Sus desarrollos privados de lujo — como los condominios de Flamingos — ofrecen playas menos concurridas, marinas modernas y campos de golf en un entorno más exclusivo y controlado. Es ideal para familias con niños y jubilados que buscan tranquilidad y privacidad sin renunciar al lujo.' : 'Nuevo Vallarta is more peaceful, orderly and residential. Its luxury private developments — like the Flamingos condominiums — offer less crowded beaches, modern marinas and golf courses in a more exclusive and controlled setting. It is ideal for families with children and retirees seeking tranquility and privacy without giving up luxury.'}
          </p>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Bucerías y Cruz de Huanacaxtle, pueblos costeros a pocos kilómetros de Nuevo Vallarta, ofrecen una experiencia más auténtica y accesible, con malecones locales, restaurantes de mariscos y una comunidad de expatriados más íntima y establecida.' : 'Bucerias and Cruz de Huanacaxtle, coastal towns a few kilometers from Nuevo Vallarta, offer a more authentic and accessible experience, with local malecóns, seafood restaurants and a more intimate and established expat community.'}
          </p>

          <div className="rounded-2xl p-6 my-8" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <h3 className="font-serif text-xl mb-4" style={{ color: 'var(--ink)' }}>{es ? '¿Cuál es para ti?' : 'Which one is for you?'}</h3>
            <div className="space-y-3">
              {[
                { profile: es ? 'Amas la vida urbana y cultural' : 'Love urban and cultural life', choice: 'Puerto Vallarta' },
                { profile: es ? 'Buscas tranquilidad y privacidad' : 'Seeking tranquility and privacy', choice: 'Nuevo Vallarta' },
                { profile: es ? 'Familia con niños' : 'Family with children', choice: 'Nuevo Vallarta' },
                { profile: es ? 'Jubilado activo' : 'Active retiree', choice: es ? 'Puerto Vallarta o Nuevo Vallarta' : 'Puerto Vallarta or Nuevo Vallarta' },
                { profile: es ? 'Amante de la gastronomía' : 'Food lover', choice: 'Puerto Vallarta' },
                { profile: es ? 'Aficionado al golf o la marina' : 'Golf or marina enthusiast', choice: 'Nuevo Vallarta' },
              ].map(item => (
                <div key={item.profile} className="flex justify-between py-2" style={{ borderBottom: '1px solid var(--border)' }}>
                  <span className="text-sm" style={{ color: 'var(--muted)' }}>{item.profile}</span>
                  <span className="text-sm font-semibold" style={{ color: 'var(--gold)' }}>{item.choice}</span>
                </div>
              ))}
            </div>
          </div>

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
