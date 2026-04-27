import Link from 'next/link';
import { getT } from '@/lib/lang';
import LangToggle from '@/components/layout/LangToggle';

export const metadata = {
  title: 'Mejores zonas de Tulum para vivir | ShortStayMX',
  description: 'Guía completa de las mejores zonas de Tulum para expatriados y nómadas digitales: Aldea Zama, La Veleta y zona hotelera. Todo lo que necesitas saber para elegir.',
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
        <div className="space-y-6">
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Tulum tiene varias zonas muy diferentes entre sí, y la elección de dónde vivir es una de las decisiones más importantes que tomarás. La zona hotelera frente al mar, el pueblo de Tulum y los desarrollos residenciales como Aldea Zama y La Veleta ofrecen experiencias completamente distintas en términos de precio, ambiente, comodidades y estilo de vida.' : 'Tulum has several very different areas, and the choice of where to live is one of the most important decisions you will make. The beachfront hotel zone, the town of Tulum and residential developments like Aldea Zama and La Veleta offer completely different experiences in terms of price, atmosphere, amenities and lifestyle.'}
          </p>

          {[
            {
              name: 'Aldea Zama', emoji: '🌿',
              es_desc: 'El desarrollo residencial más exclusivo y completo de Tulum. Ubicado estratégicamente entre la zona hotelera y el pueblo, Aldea Zama concentra la mayor cantidad de condominios modernos de lujo, restaurantes de calidad, cafés con buen WiFi y espacios de coworking. Sus residencias combinan arquitectura biofílica — integrada con la naturaleza — con amenidades modernas completas: albercas, gimnasios, jardines tropicales, seguridad privada. Es la primera elección para expatriados y nómadas digitales que quieren lo mejor de Tulum sin sacrificar comodidades.',
              en_desc: 'The most exclusive and complete residential development in Tulum. Strategically located between the hotel zone and the town, Aldea Zama concentrates the largest number of modern luxury condominiums, quality restaurants, cafes with good WiFi and coworking spaces. Its residences combine biophilic architecture — integrated with nature — with complete modern amenities: pools, gyms, tropical gardens, private security. It is the first choice for expats and digital nomads who want the best of Tulum without sacrificing comforts.',
            },
            {
              name: 'La Veleta', emoji: '🌴',
              es_desc: 'La zona residencial de mayor crecimiento en Tulum. Con calles rodeadas de selva, un ambiente más tranquilo y auténtico que Aldea Zama, y precios considerablemente más accesibles, La Veleta es perfecta para quienes buscan el espíritu genuino de Tulum — naturaleza, tranquilidad, comunidad local — sin pagar los precios premium de la zona hotelera o Aldea Zama.',
              en_desc: 'The fastest-growing residential area in Tulum. With jungle-lined streets, a more peaceful and authentic atmosphere than Aldea Zama, and considerably more accessible prices, La Veleta is perfect for those seeking the genuine spirit of Tulum — nature, tranquility, local community — without paying the premium prices of the hotel zone or Aldea Zama.',
            },
            {
              name: es ? 'Zona Hotelera' : 'Hotel Zone', emoji: '🏖️',
              es_desc: 'La franja costera con acceso directo a las famosas playas de Tulum, consideradas entre las más hermosas del mundo. El precio a pagar es el más alto de la zona y un ambiente más turístico. Ideal para quienes priorizan absolutamente la playa y no les importa el ruido y el movimiento de la temporada alta.',
              en_desc: 'The coastal strip with direct access to Tulum\'s famous beaches, considered among the most beautiful in the world. The trade-off is the highest prices in the area and a more touristy atmosphere. Ideal for those who absolutely prioritize the beach and don\'t mind the noise and movement of high season.',
            },
          ].map(item => (
            <div key={item.name} className="rounded-2xl p-6 my-4" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
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
