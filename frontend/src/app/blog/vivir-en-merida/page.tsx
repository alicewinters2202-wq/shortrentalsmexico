import Link from 'next/link';
import { getT } from '@/lib/lang';
import LangToggle from '@/components/layout/LangToggle';

export const metadata = {
  title: 'Vivir en Mérida: Guía completa para expatriados | ShortStayMX',
  description: 'Todo lo que necesitas saber sobre vivir en Mérida, Yucatán: mejores colonias, costos de vida, clima, seguridad y la comunidad de expatriados.',
};

export default async function ViviriEnMerida() {
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
        <p className="text-xs tracking-widest uppercase font-medium mb-4" style={{ color: 'var(--gold)' }}>Mérida</p>
        <h1 className="font-serif text-4xl sm:text-5xl mb-6 leading-tight" style={{ color: 'var(--ink)' }}>
          {es ? 'Vivir en Mérida: Guía completa para expatriados' : 'Living in Merida: Complete guide for expats'}
        </h1>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Mérida, conocida como la Ciudad Blanca, es considerada la ciudad más segura de México y una de las más agradables para vivir en toda América Latina. Con su arquitectura colonial perfectamente conservada, gastronomía yucateca única en el mundo, clima cálido y una comunidad de expatriados en constante crecimiento, Mérida se ha convertido en uno de los destinos más atractivos para quienes buscan calidad de vida en México.' : 'Merida, known as the White City, is considered the safest city in Mexico and one of the most pleasant to live in throughout Latin America. With its perfectly preserved colonial architecture, unique Yucatecan gastronomy, warm climate and a constantly growing expat community, Merida has become one of the most attractive destinations for those seeking quality of life in Mexico.'}
          </p>

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'La Ciudad Blanca: historia y cultura' : 'The White City: history and culture'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Mérida fue fundada en 1542 sobre las ruinas de la ciudad maya de T\'Hó. Su centro histórico, con la Plaza Grande, la Catedral de San Ildefonso y el Paseo de Montejo — conocido como el Champs-Élysées mexicano — es uno de los más hermosos y mejor conservados de México. Las casonas coloniales del centro están siendo restauradas y transformadas en boutique hotels, restaurantes y galerías.' : 'Merida was founded in 1542 on the ruins of the Mayan city of T\'Hó. Its historic center, with Plaza Grande, the Cathedral of San Ildefonso and Paseo de Montejo — known as the Mexican Champs-Élysées — is one of the most beautiful and best preserved in Mexico. The colonial mansions in the center are being restored and transformed into boutique hotels, restaurants and galleries.'}
          </p>

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Las mejores zonas para vivir' : 'Best areas to live'}</h2>
          {[
            {
              name: es ? 'Centro Histórico' : 'Historic Center', emoji: '🏛️',
              es_desc: 'El corazón colonial de Mérida. Casonas restauradas, mercados tradicionales, el mejor ambiente cultural y todo a distancia caminable. Perfecto para quienes quieren inmersión cultural total. Los precios han subido por la alta demanda, pero siguen siendo muy accesibles comparados con otras ciudades.',
              en_desc: 'The colonial heart of Merida. Restored mansions, traditional markets, the best cultural atmosphere and everything within walking distance. Perfect for those who want total cultural immersion. Prices have risen due to high demand, but remain very accessible compared to other cities.',
            },
            {
              name: 'Altabrisa', emoji: '🏬',
              es_desc: 'La zona moderna por excelencia. Plaza Altabrisa con las mejores tiendas y restaurantes, hospitales privados de primer nivel, colegios internacionales y excelente infraestructura vial. La preferida por familias con niños que buscan todas las comodidades modernas.',
              en_desc: 'The modern area par excellence. Plaza Altabrisa with the best stores and restaurants, top-tier private hospitals, international schools and excellent road infrastructure. The favorite for families with children who want all modern conveniences.',
            },
            {
              name: 'Temozon Norte', emoji: '⛳',
              es_desc: 'La zona más exclusiva al norte de Mérida. Fraccionamientos privados de lujo, el Yucatan Country Club con campo de golf de 18 hoyos, residencias amplias con jardín y alberca. La opción premium para quienes buscan exclusividad, espacio y el mejor estilo de vida de Mérida.',
              en_desc: 'The most exclusive area north of Merida. Luxury private developments, the Yucatan Country Club with an 18-hole golf course, spacious homes with garden and pool. The premium option for those seeking exclusivity, space and the best lifestyle in Merida.',
            },
          ].map(item => (
            <div key={item.name} className="rounded-2xl p-6 my-4" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
              <span className="text-3xl mb-3 block">{item.emoji}</span>
              <h3 className="font-serif text-xl mb-3" style={{ color: 'var(--ink)' }}>{item.name}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{es ? item.es_desc : item.en_desc}</p>
            </div>
          ))}

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Costo de vida' : 'Cost of living'}</h2>
          <div className="rounded-2xl p-6 my-6" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <div className="space-y-3">
              {[
                { item: es ? 'Renta mensual (depa amueblado Centro)' : 'Monthly rent (furnished apt, Centro)', cost: '$12,000 – $35,000 MXN' },
                { item: es ? 'Renta mensual (Temozon Norte)' : 'Monthly rent (Temozon Norte)', cost: '$25,000 – $60,000 MXN' },
                { item: es ? 'Comida en restaurante' : 'Restaurant meal', cost: '$100 – $400 MXN' },
                { item: es ? 'Seguridad' : 'Security', cost: es ? 'La más alta de México' : 'Highest in Mexico' },
                { item: es ? 'Clima' : 'Climate', cost: es ? 'Cálido tropical, 20-38°C' : 'Warm tropical, 20-38°C' },
              ].map(item => (
                <div key={item.item} className="flex justify-between py-2" style={{ borderBottom: '1px solid var(--border)' }}>
                  <span className="text-sm" style={{ color: 'var(--muted)' }}>{item.item}</span>
                  <span className="text-sm font-semibold" style={{ color: 'var(--ink)' }}>{item.cost}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl p-8 mt-12 text-center" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <p className="font-serif text-2xl mb-3" style={{ color: 'var(--ink)' }}>{es ? 'Ver propiedades en Mérida' : 'View properties in Merida'}</p>
            <Link href="/properties?city=M%C3%A9rida" className="inline-block px-8 py-3 rounded-full text-sm font-medium text-white" style={{ backgroundColor: 'var(--gold)' }}>
              {es ? 'Ver propiedades' : 'View properties'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
