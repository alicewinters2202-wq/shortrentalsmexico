import Link from 'next/link';
import { getT } from '@/lib/lang';
import LangToggle from '@/components/layout/LangToggle';

export const metadata = {
  title: 'Vivir en Puerto Vallarta: Guía para expatriados | ShortStayMX',
  description: 'Todo lo que necesitas saber sobre vivir en Puerto Vallarta: mejores zonas, costos, estilo de vida y consejos para expatriados en el Pacífico mexicano.',
};

export default async function ViviriEnPuertoVallarta() {
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
        <p className="text-xs tracking-widest uppercase font-medium mb-4" style={{ color: 'var(--gold)' }}>Puerto Vallarta</p>
        <h1 className="font-serif text-4xl sm:text-5xl mb-6 leading-tight" style={{ color: 'var(--ink)' }}>
          {es ? 'Vivir en Puerto Vallarta: Guía para expatriados' : 'Living in Puerto Vallarta: Guide for expats'}
        </h1>
        <p className="text-sm mb-12" style={{ color: 'var(--muted)' }}>{es ? '5 de marzo de 2024 · 8 min de lectura' : 'March 5, 2024 · 8 min read'}</p>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Puerto Vallarta es uno de los destinos más queridos por expatriados estadounidenses y canadienses en México. Con su mezcla perfecta de ciudad colonial, playa, gastronomía de primer nivel y una comunidad internacional muy establecida, PV tiene todo para enamorarte.' : 'Puerto Vallarta is one of the most beloved destinations for American and Canadian expats in Mexico. With its perfect blend of colonial city, beach, top-tier gastronomy and a very established international community, PV has everything to fall in love with.'}
          </p>
          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Las mejores zonas para vivir' : 'Best areas to live'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Marina Vallarta es la zona más moderna y exclusiva, con su marina de clase mundial y campo de golf. La Zona Romántica es el corazón bohemio de la ciudad, con calles empedradas, galerías de arte y la famosa Playa los Muertos. La Zona Hotelera ofrece acceso directo al mar con todas las comodidades.' : 'Marina Vallarta is the most modern and exclusive area, with its world-class marina and golf course. The Romantic Zone is the bohemian heart of the city, with cobblestone streets, art galleries and the famous Playa los Muertos. The Hotel Zone offers direct sea access with all the amenities.'}
          </p>
          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Comunidad de expatriados' : 'Expat community'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Puerto Vallarta tiene una de las comunidades de expatriados más grandes y consolidadas de México. Hay grupos de inglés, eventos culturales internacionales, restaurantes de todas las cocinas del mundo y una infraestructura completamente adaptada para quienes vienen del extranjero.' : 'Puerto Vallarta has one of the largest and most established expat communities in Mexico. There are English-speaking groups, international cultural events, restaurants from every cuisine in the world and an infrastructure completely adapted for those coming from abroad.'}
          </p>
          <div className="rounded-2xl p-8 mt-12 text-center" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <p className="font-serif text-2xl mb-3" style={{ color: 'var(--ink)' }}>{es ? 'Ver propiedades en Puerto Vallarta' : 'View properties in Puerto Vallarta'}</p>
            <Link href="/properties?city=Puerto%20Vallarta" className="inline-block px-8 py-3 rounded-full text-sm font-medium text-white" style={{ backgroundColor: 'var(--gold)' }}>
              {es ? 'Ver propiedades' : 'View properties'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
