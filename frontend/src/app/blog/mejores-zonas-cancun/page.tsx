import Link from 'next/link';
import { getT } from '@/lib/lang';
import LangToggle from '@/components/layout/LangToggle';

export const metadata = {
  title: 'Mejores zonas para rentar en Cancún: Zona Hotelera vs Puerto Cancún | ShortStayMX',
  description: 'Descubre las diferencias entre la Zona Hotelera y Puerto Cancún para encontrar la mejor opción para tu estancia en el Caribe mexicano.',
};

export default async function MejoresZonasCancun() {
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
          {es ? 'Mejores zonas para rentar en Cancún: Zona Hotelera vs Puerto Cancún' : 'Best areas to rent in Cancun: Hotel Zone vs Puerto Cancun'}
        </h1>
        <p className="text-sm mb-12" style={{ color: 'var(--muted)' }}>{es ? '1 de febrero de 2024 · 7 min de lectura' : 'February 1, 2024 · 7 min read'}</p>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Cancún es mucho más que un destino turístico. Cada vez más expatriados y nómadas digitales eligen vivir aquí permanentemente, atraídos por su clima, playas y calidad de vida. Pero elegir la zona correcta es clave. Te explicamos las diferencias entre las dos principales opciones.' : 'Cancun is much more than a tourist destination. More and more expats and digital nomads are choosing to live here permanently, attracted by its climate, beaches and quality of life. But choosing the right area is key. We explain the differences between the two main options.'}
          </p>
          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Zona Hotelera: vida frente al mar' : 'Hotel Zone: beachfront living'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'La Zona Hotelera es una franja de tierra rodeada por el Mar Caribe y la Laguna Nichupté. Es la zona más turística de Cancún, con acceso directo a las mejores playas, el Boulevard Kukulcán con restaurantes y vida nocturna, y una vista al mar desde casi cualquier punto.' : 'The Hotel Zone is a strip of land surrounded by the Caribbean Sea and Nichupte Lagoon. It is the most touristy area of Cancun, with direct access to the best beaches, Kukulcan Boulevard with restaurants and nightlife, and a sea view from almost any point.'}
          </p>
          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Puerto Cancún: exclusividad y marina' : 'Puerto Cancun: exclusivity and marina'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Puerto Cancún es el desarrollo residencial más moderno y exclusivo de la ciudad. Con una marina de clase mundial, campo de golf de 18 hoyos, torres residenciales de lujo y acceso controlado, es la opción preferida por ejecutivos y familias que buscan privacidad y exclusividad.' : 'Puerto Cancun is the most modern and exclusive residential development in the city. With a world-class marina, 18-hole golf course, luxury residential towers and controlled access, it is the preferred option for executives and families seeking privacy and exclusivity.'}
          </p>
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
