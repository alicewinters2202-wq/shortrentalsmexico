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
        <div className="space-y-6">
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Tulum ha pasado de ser un pequeño pueblo de pescadores a convertirse en uno de los destinos más codiciados del mundo. Con su combinación única de naturaleza extraordinaria, cultura maya ancestral, gastronomía de lujo consciente y una comunidad internacional vibrante, vivir en Tulum es una experiencia completamente diferente a cualquier otra ciudad de México.' : 'Tulum has gone from being a small fishing village to becoming one of the most coveted destinations in the world. With its unique combination of extraordinary nature, ancestral Mayan culture, conscious luxury gastronomy and a vibrant international community, living in Tulum is a completely different experience from any other city in Mexico.'}
          </p>

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'El estilo de vida único de Tulum' : 'Tulum\'s unique lifestyle'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Tulum tiene un ritmo de vida muy particular que no encontrarás en ningún otro lugar. Los días comienzan temprano con sesiones de yoga o meditación en cenotes o en la selva. Hay cenotes para nadar a pocos minutos en todas direcciones. Los restaurantes sirven cocina consciente y orgánica con ingredientes locales. La vida nocturna es sofisticada pero relajada, con música en vivo y eventos en la selva.' : 'Tulum has a very particular rhythm of life that you won\'t find anywhere else. Days start early with yoga or meditation sessions in cenotes or in the jungle. There are cenotes to swim in just minutes away in every direction. Restaurants serve conscious and organic cuisine with local ingredients. The nightlife is sophisticated yet relaxed, with live music and events in the jungle.'}
          </p>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'La comunidad de Tulum es extraordinariamente internacional. Encontrarás personas de decenas de países viviendo aquí de forma permanente: artistas, escritores, coaches, empresarios, nómadas digitales y jubilados que han encontrado en Tulum su paraíso personal. Esta mezcla crea una energía única y muy estimulante.' : 'The Tulum community is extraordinarily international. You\'ll find people from dozens of countries living here permanently: artists, writers, coaches, entrepreneurs, digital nomads and retirees who have found their personal paradise in Tulum. This mix creates a unique and very stimulating energy.'}
          </p>

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Las mejores zonas de Tulum' : 'Best areas in Tulum'}</h2>
          {[
            {
              name: 'Aldea Zama', emoji: '🌿',
              es_desc: 'El desarrollo residencial más exclusivo de Tulum, ubicado estratégicamente entre la zona hotelera y el pueblo. Condominios modernos de lujo rodeados de selva, con albercas, gimnasios, jardines tropicales y la mayor concentración de restaurantes y cafés de calidad. Es la primera elección para expatriados que buscan comodidad moderna sin renunciar al ambiente de Tulum.',
              en_desc: 'The most exclusive residential development in Tulum, strategically located between the hotel zone and the town. Modern luxury condominiums surrounded by jungle, with pools, gyms, tropical gardens and the highest concentration of quality restaurants and cafes. It is the first choice for expats who want modern comfort without giving up the Tulum atmosphere.',
            },
            {
              name: 'La Veleta', emoji: '🌴',
              es_desc: 'Zona residencial en crecimiento con un ambiente más tranquilo y precios más accesibles que Aldea Zama. Perfecta para quienes buscan el auténtico ambiente de Tulum — selva, tranquilidad, comunidad local — sin pagar los precios premium de la zona hotelera.',
              en_desc: 'Growing residential area with a more peaceful atmosphere and more accessible prices than Aldea Zama. Perfect for those seeking the authentic Tulum atmosphere — jungle, tranquility, local community — without paying hotel zone premium prices.',
            },
          ].map(item => (
            <div key={item.name} className="rounded-2xl p-6 my-4" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
              <span className="text-3xl mb-3 block">{item.emoji}</span>
              <h3 className="font-serif text-xl mb-3" style={{ color: 'var(--ink)' }}>{item.name}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{es ? item.es_desc : item.en_desc}</p>
            </div>
          ))}

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Costo de vida en Tulum' : 'Cost of living in Tulum'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Tulum ha experimentado una inflación significativa en los últimos años, especialmente desde la pandemia. Los precios de los departamentos han aumentado considerablemente y los restaurantes de la zona hotelera pueden ser tan caros como en ciudades europeas. Sin embargo, en el pueblo de Tulum y en zonas como La Veleta, los precios son más razonables.' : 'Tulum has experienced significant inflation in recent years, especially since the pandemic. Apartment prices have increased considerably and restaurants in the hotel zone can be as expensive as in European cities. However, in the town of Tulum and in areas like La Veleta, prices are more reasonable.'}
          </p>
          <div className="rounded-2xl p-6 my-6" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <div className="space-y-3">
              {[
                { item: es ? 'Renta mensual (depa amueblado, Aldea Zama)' : 'Monthly rent (furnished apt, Aldea Zama)', cost: '$25,000 – $80,000 MXN' },
                { item: es ? 'Renta mensual (La Veleta)' : 'Monthly rent (La Veleta)', cost: '$15,000 – $40,000 MXN' },
                { item: es ? 'Comida en restaurante zona hotelera' : 'Restaurant meal hotel zone', cost: '$300 – $800 MXN' },
                { item: es ? 'Transporte (bicicleta o moto recomendable)' : 'Transportation (bike or scooter recommended)', cost: '$500 – $1,500 MXN/mes' },
              ].map(item => (
                <div key={item.item} className="flex justify-between py-2" style={{ borderBottom: '1px solid var(--border)' }}>
                  <span className="text-sm" style={{ color: 'var(--muted)' }}>{item.item}</span>
                  <span className="text-sm font-semibold" style={{ color: 'var(--ink)' }}>{item.cost}</span>
                </div>
              ))}
            </div>
          </div>

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
