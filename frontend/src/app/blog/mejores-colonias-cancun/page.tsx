import Link from 'next/link';
import { getT } from '@/lib/lang';
import LangToggle from '@/components/layout/LangToggle';

export const metadata = {
  title: 'Mejores colonias de Cancún para vivir | ShortStayMX',
  description: 'Guía de las mejores zonas de Cancún para expatriados y nómadas digitales: Zona Hotelera, Puerto Cancún y sus diferencias.',
};

export default async function MejoresColoniasCancun() {
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
        <p className="text-xs tracking-widest uppercase font-medium mb-4" style={{ color: 'var(--gold)' }}>Cancún</p>
        <h1 className="font-serif text-4xl sm:text-5xl mb-6 leading-tight" style={{ color: 'var(--ink)' }}>
          {es ? 'Mejores colonias de Cancún para vivir' : 'Best neighborhoods in Cancun to live'}
        </h1>
        <p className="text-sm mb-12" style={{ color: 'var(--muted)' }}>{es ? '16 de abril de 2024 · 7 min de lectura' : 'April 16, 2024 · 7 min read'}</p>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Cancún es mucho más que un destino de vacaciones. Cada vez más personas eligen vivir aquí de forma permanente, atraídas por su clima, playas paradisíacas, infraestructura moderna y conexiones aéreas internacionales. Pero elegir la zona correcta es fundamental.' : 'Cancun is much more than a vacation destination. More and more people are choosing to live here permanently, attracted by its climate, paradise beaches, modern infrastructure and international air connections. But choosing the right area is essential.'}
          </p>
          {[
            { name: 'Zona Hotelera', emoji: '🏖️', es_desc: 'La franja costera más famosa de Cancún. Rodeada por el Mar Caribe y la Laguna Nichupté, ofrece acceso directo a las mejores playas, restaurantes de lujo y vida nocturna vibrante en el Boulevard Kukulcán.', en_desc: 'The most famous coastal strip of Cancun. Surrounded by the Caribbean Sea and Nichupte Lagoon, it offers direct access to the best beaches, luxury restaurants and vibrant nightlife on Kukulcan Boulevard.' },
            { name: 'Puerto Cancún', emoji: '⛵', es_desc: 'El desarrollo residencial más exclusivo y moderno de Cancún. Con marina de clase mundial, campo de golf de 18 hoyos y torres residenciales de lujo, es la opción preferida por ejecutivos y familias que buscan privacidad y exclusividad.', en_desc: 'The most exclusive and modern residential development in Cancun. With a world-class marina, 18-hole golf course and luxury residential towers, it is the preferred option for executives and families seeking privacy and exclusivity.' },
          ].map(item => (
            <div key={item.name} className="rounded-2xl p-6 my-6" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
              <span className="text-3xl mb-3 block">{item.emoji}</span>
              <h3 className="font-serif text-xl mb-3" style={{ color: 'var(--ink)' }}>{item.name}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{es ? item.es_desc : item.en_desc}</p>
            </div>
          ))}
          <div className="rounded-2xl p-8 mt-12 text-center" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <p className="font-serif text-2xl mb-3" style={{ color: 'var(--ink)' }}>{es ? 'Ver propiedades en Cancún' : 'View properties in Cancun'}</p>
            <Link href="/properties?city=Canc%C3%BAn" className="inline-block px-8 py-3 rounded-full text-sm font-medium text-white" style={{ backgroundColor: 'var(--gold)' }}>
              {es ? 'Ver propiedades' : 'View properties'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
