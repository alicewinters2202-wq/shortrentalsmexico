import Link from 'next/link';
import { getT } from '@/lib/lang';
import LangToggle from '@/components/layout/LangToggle';

export const metadata = {
  title: 'Vivir en Tulum: Guía completa para expatriados | ShortStayMX',
  description: 'Todo lo que necesitas saber sobre vivir en Tulum: las mejores zonas, costos de vida, estilo de vida y consejos prácticos para expatriados y nómadas digitales.',
};

export default async function ViviriEnTulum() {
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
        <p className="text-xs tracking-widest uppercase font-medium mb-4" style={{ color: 'var(--gold)' }}>Tulum</p>
        <h1 className="font-serif text-4xl sm:text-5xl mb-6 leading-tight" style={{ color: 'var(--ink)' }}>
          {es ? 'Vivir en Tulum: Guía completa para expatriados' : 'Living in Tulum: Complete guide for expats'}
        </h1>
        <p className="text-sm mb-12" style={{ color: 'var(--muted)' }}>{es ? '18 de febrero de 2024 · 8 min de lectura' : 'February 18, 2024 · 8 min read'}</p>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Tulum ha pasado de ser un pequeño pueblo de pescadores a convertirse en uno de los destinos más codiciados del mundo. Con su combinación única de naturaleza, cultura maya, gastronomía de lujo y una comunidad internacional vibrante, vivir en Tulum es una experiencia completamente diferente.' : 'Tulum has gone from being a small fishing village to becoming one of the most coveted destinations in the world. With its unique combination of nature, Mayan culture, luxury gastronomy and a vibrant international community, living in Tulum is a completely different experience.'}
          </p>
          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Las mejores zonas de Tulum' : 'Best areas in Tulum'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Aldea Zama es el desarrollo residencial más exclusivo, ubicado entre la zona hotelera y el pueblo. La Veleta es más tranquila y accesible. Ambas ofrecen departamentos modernos rodeados de selva con albercas y amenidades completas.' : 'Aldea Zama is the most exclusive residential development, located between the hotel zone and the town. La Veleta is more peaceful and accessible. Both offer modern apartments surrounded by jungle with pools and full amenities.'}
          </p>
          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Estilo de vida en Tulum' : 'Lifestyle in Tulum'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Tulum tiene un ritmo de vida muy particular. Los días comienzan con yoga o meditación, hay cenotes para nadar a pocos minutos, restaurantes de cocina consciente en cada esquina y una vida nocturna sofisticada pero relajada. Es el lugar perfecto para quienes buscan un equilibrio entre trabajo remoto y bienestar.' : 'Tulum has a very particular rhythm of life. Days begin with yoga or meditation, there are cenotes to swim in just minutes away, conscious cuisine restaurants on every corner and a sophisticated yet relaxed nightlife. It is the perfect place for those seeking a balance between remote work and wellness.'}
          </p>
          <div className="rounded-2xl p-8 mt-12 text-center" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <p className="font-serif text-2xl mb-3" style={{ color: 'var(--ink)' }}>{es ? 'Ver propiedades en Tulum' : 'View properties in Tulum'}</p>
            <Link href="/properties?city=Tulum" className="inline-block px-8 py-3 rounded-full text-sm font-medium text-white" style={{ backgroundColor: 'var(--gold)' }}>
              {es ? 'Ver propiedades' : 'View properties'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
