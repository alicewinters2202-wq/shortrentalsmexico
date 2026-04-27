import Link from 'next/link';
import { getT } from '@/lib/lang';
import LangToggle from '@/components/layout/LangToggle';

export const metadata = {
  title: 'Vivir en Monterrey: Guía para ejecutivos y expatriados | ShortStayMX',
  description: 'Todo sobre vivir en Monterrey: San Pedro Garza García, Valle Oriente, costos de vida, seguridad y la comunidad de expatriados en la capital industrial de México.',
};

export default async function ViviriEnMonterrey() {
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
        <p className="text-xs tracking-widest uppercase font-medium mb-4" style={{ color: 'var(--gold)' }}>Monterrey</p>
        <h1 className="font-serif text-4xl sm:text-5xl mb-6 leading-tight" style={{ color: 'var(--ink)' }}>
          {es ? 'Vivir en Monterrey: Guía para ejecutivos y expatriados' : 'Living in Monterrey: Guide for executives and expats'}
        </h1>
        <p className="text-sm mb-12" style={{ color: 'var(--muted)' }}>{es ? '26 de marzo de 2024 · 8 min de lectura' : 'March 26, 2024 · 8 min read'}</p>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Monterrey es la capital industrial y empresarial de México. Con el mayor ingreso per cápita del país, una infraestructura de primer nivel y una comunidad de negocios muy activa, es el destino preferido por ejecutivos internacionales y profesionales que vienen a trabajar en las grandes empresas del norte.' : 'Monterrey is the industrial and business capital of Mexico. With the highest per capita income in the country, first-class infrastructure and a very active business community, it is the preferred destination for international executives and professionals who come to work at the major companies of the north.'}
          </p>
          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Las mejores zonas para ejecutivos' : 'Best areas for executives'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'San Pedro Garza García es el municipio más exclusivo y próspero del área metropolitana. Valle Oriente es el corredor empresarial más moderno, con torres corporativas, hoteles de lujo y centros comerciales premium. Ambas zonas ofrecen la mejor calidad de vida del norte de México.' : 'San Pedro Garza Garcia is the most exclusive and prosperous municipality in the metropolitan area. Valle Oriente is the most modern business corridor, with corporate towers, luxury hotels and premium shopping centers. Both areas offer the best quality of life in northern Mexico.'}
          </p>
          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Nearshoring y oportunidades de negocio' : 'Nearshoring and business opportunities'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Monterrey vive un boom de nearshoring sin precedentes. Cientos de empresas internacionales han establecido operaciones en la ciudad, atrayendo a miles de ejecutivos y profesionales extranjeros. Esto ha generado una demanda muy alta de rentas temporales de calidad en las mejores zonas de la ciudad.' : 'Monterrey is experiencing an unprecedented nearshoring boom. Hundreds of international companies have established operations in the city, attracting thousands of foreign executives and professionals. This has generated very high demand for quality short-term rentals in the best areas of the city.'}
          </p>
          <div className="rounded-2xl p-8 mt-12 text-center" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <p className="font-serif text-2xl mb-3" style={{ color: 'var(--ink)' }}>{es ? 'Ver propiedades en Monterrey' : 'View properties in Monterrey'}</p>
            <Link href="/properties?city=Monterrey" className="inline-block px-8 py-3 rounded-full text-sm font-medium text-white" style={{ backgroundColor: 'var(--gold)' }}>
              {es ? 'Ver propiedades' : 'View properties'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
