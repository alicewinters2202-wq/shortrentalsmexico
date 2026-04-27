import Link from 'next/link';
import { getT } from '@/lib/lang';
import LangToggle from '@/components/layout/LangToggle';

export const metadata = {
  title: 'Mejores zonas de Tulum para vivir | ShortStayMX',
  description: 'Guía de las mejores zonas de Tulum para expatriados y nómadas digitales: Aldea Zama, La Veleta y la zona hotelera. Todo lo que necesitas saber.',
};

export default async function MejoresZonasTulum() {
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
          {es ? 'Mejores zonas de Tulum para vivir' : 'Best areas in Tulum to live'}
        </h1>
        <p className="text-sm mb-12" style={{ color: 'var(--muted)' }}>{es ? '23 de abril de 2024 · 7 min de lectura' : 'April 23, 2024 · 7 min read'}</p>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Tulum tiene varias zonas muy diferentes entre sí. La elección de dónde vivir depende de tu presupuesto, estilo de vida y qué tanto valoras la playa vs la selva. Te explicamos las principales opciones.' : 'Tulum has several very different areas. The choice of where to live depends on your budget, lifestyle and how much you value the beach vs the jungle. We explain the main options.'}
          </p>
          {[
            { name: 'Aldea Zama', emoji: '🌿', es_desc: 'El desarrollo residencial más exclusivo de Tulum. Condominios modernos de lujo rodeados de selva, con albercas, gimnasios y jardines tropicales. Perfecta ubicación entre la zona hotelera y el pueblo.', en_desc: 'The most exclusive residential development in Tulum. Modern luxury condominiums surrounded by jungle, with pools, gyms and tropical gardens. Perfect location between the hotel zone and the town.' },
            { name: 'La Veleta', emoji: '🌴', es_desc: 'Zona residencial en crecimiento con ambiente más tranquilo y precios más accesibles que Aldea Zama. Ideal para quienes buscan el ambiente de Tulum sin pagar precios de zona hotelera.', en_desc: 'Growing residential area with a more peaceful atmosphere and more accessible prices than Aldea Zama. Ideal for those seeking the Tulum atmosphere without paying hotel zone prices.' },
            { name: es ? 'Zona Hotelera' : 'Hotel Zone', emoji: '🏖️', es_desc: 'La franja costera con acceso directo a las famosas playas de Tulum. Perfecta para quienes priorizan el mar, aunque los precios son más elevados y el ambiente más turístico.', en_desc: 'The coastal strip with direct access to Tulum\'s famous beaches. Perfect for those who prioritize the sea, although prices are higher and the atmosphere more touristy.' },
          ].map(item => (
            <div key={item.name} className="rounded-2xl p-6 my-6" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
              <span className="text-3xl mb-3 block">{item.emoji}</span>
              <h3 className="font-serif text-xl mb-3" style={{ color: 'var(--ink)' }}>{item.name}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{es ? item.es_desc : item.en_desc}</p>
            </div>
          ))}
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
