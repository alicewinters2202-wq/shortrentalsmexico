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
        <div className="space-y-6">
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Puerto Vallarta es uno de los destinos más queridos por expatriados estadounidenses y canadienses en México. Con su mezcla perfecta de ciudad colonial con carácter, playas espectaculares de la Bahía de Banderas, gastronomía de primer nivel y una comunidad internacional muy consolidada, PV tiene todo para convertirse en tu hogar.' : 'Puerto Vallarta is one of the most beloved destinations for American and Canadian expats in Mexico. With its perfect blend of a colonial city with character, spectacular beaches of Banderas Bay, top-tier gastronomy and a very established international community, PV has everything to become your home.'}
          </p>

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Las mejores zonas para vivir' : 'Best areas to live'}</h2>
          {[
            {
              name: 'Marina Vallarta', emoji: '⛵',
              es_desc: 'La zona más moderna y exclusiva de Puerto Vallarta. Con su marina de clase mundial capaz de albergar yates de gran calado, campo de golf de 18 hoyos, hoteles de lujo y condominios frente al mar, es la primera opción para ejecutivos y familias que buscan comodidad y exclusividad. A solo 5 minutos del aeropuerto internacional.',
              en_desc: 'The most modern and exclusive area of Puerto Vallarta. With its world-class marina capable of accommodating large yachts, 18-hole golf course, luxury hotels and oceanfront condominiums, it is the first choice for executives and families seeking comfort and exclusivity. Just 5 minutes from the international airport.',
            },
            {
              name: 'Zona Romántica', emoji: '🎨',
              es_desc: 'El corazón bohemio y cultural de Puerto Vallarta. Con calles empedradas, galerías de arte, la famosa Playa los Muertos y algunos de los mejores restaurantes de la ciudad, es perfecta para artistas, creativos y amantes de la cultura que quieren vivir en el corazón auténtico de PV.',
              en_desc: 'The bohemian and cultural heart of Puerto Vallarta. With cobblestone streets, art galleries, the famous Playa los Muertos and some of the best restaurants in the city, it is perfect for artists, creatives and culture lovers who want to live in the authentic heart of PV.',
            },
            {
              name: 'Zona Hotelera', emoji: '🌅',
              es_desc: 'El boulevard Francisco Medina Ascencio concentra hoteles de lujo, restaurantes y acceso directo a las playas de la bahía. Ideal para quienes priorizan la playa y la comodidad de tener todo a la mano, con departamentos que ofrecen vistas panorámicas al Océano Pacífico.',
              en_desc: 'Francisco Medina Ascencio boulevard concentrates luxury hotels, restaurants and direct access to the bay\'s beaches. Ideal for those who prioritize the beach and the convenience of having everything nearby, with apartments offering panoramic views of the Pacific Ocean.',
            },
          ].map(item => (
            <div key={item.name} className="rounded-2xl p-6 my-4" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
              <span className="text-3xl mb-3 block">{item.emoji}</span>
              <h3 className="font-serif text-xl mb-3" style={{ color: 'var(--ink)' }}>{item.name}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{es ? item.es_desc : item.en_desc}</p>
            </div>
          ))}

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'La comunidad de expatriados' : 'The expat community'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Puerto Vallarta tiene una de las comunidades de expatriados más grandes y consolidadas de México, con una fuerte presencia de estadounidenses y canadienses que llevan décadas viviendo aquí. Hay grupos sociales en inglés, eventos culturales internacionales, restaurantes de todas las cocinas del mundo, y médicos y abogados que hablan inglés. Puedes vivir cómodamente en PV sin hablar español.' : 'Puerto Vallarta has one of the largest and most established expat communities in Mexico, with a strong presence of Americans and Canadians who have been living here for decades. There are English-speaking social groups, international cultural events, restaurants from all world cuisines, and English-speaking doctors and lawyers. You can live comfortably in PV without speaking Spanish.'}
          </p>

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Clima y temporadas' : 'Climate and seasons'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Puerto Vallarta tiene un clima tropical con dos temporadas bien definidas. La temporada seca (noviembre a mayo) es la más popular, con días soleados, temperaturas de 25-30°C y mínima humedad. La temporada de lluvias (junio a octubre) trae lluvias intensas por las tardes, pero las mañanas suelen ser soleadas y la vegetación se vuelve exuberante y verde.' : 'Puerto Vallarta has a tropical climate with two well-defined seasons. The dry season (November to May) is the most popular, with sunny days, temperatures of 25-30°C and minimal humidity. The rainy season (June to October) brings intense afternoon rains, but mornings are usually sunny and the vegetation becomes lush and green.'}
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
