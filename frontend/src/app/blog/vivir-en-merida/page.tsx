import Link from 'next/link';
import { getT } from '@/lib/lang';
import LangToggle from '@/components/layout/LangToggle';

export const metadata = {
  title: 'Vivir en Mérida: Guía completa para expatriados | ShortStayMX',
  description: 'Todo lo que necesitas saber sobre vivir en Mérida, Yucatán: mejores colonias, costos de vida, clima, seguridad y consejos para expatriados.',
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
        <p className="text-sm mb-12" style={{ color: 'var(--muted)' }}>{es ? '19 de marzo de 2024 · 8 min de lectura' : 'March 19, 2024 · 8 min read'}</p>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Mérida es conocida como la Ciudad Blanca y es considerada la ciudad más segura de México. Con su arquitectura colonial, gastronomía yucateca única, clima cálido y una comunidad de expatriados en constante crecimiento, Mérida se ha convertido en uno de los destinos más atractivos para quienes buscan calidad de vida en México.' : 'Merida is known as the White City and is considered the safest city in Mexico. With its colonial architecture, unique Yucatecan gastronomy, warm climate and a constantly growing expat community, Merida has become one of the most attractive destinations for those seeking quality of life in Mexico.'}
          </p>
          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Las mejores zonas para vivir' : 'Best areas to live'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'El Centro Histórico es perfecto para quienes buscan inmersión cultural total, con sus casonas coloniales y mercados tradicionales. Altabrisa es la zona moderna por excelencia, con centros comerciales, hospitales privados y excelente infraestructura. Temozon Norte es la zona más exclusiva, con fraccionamientos privados de lujo y el Yucatan Country Club.' : 'The Historic Center is perfect for those seeking total cultural immersion, with its colonial mansions and traditional markets. Altabrisa is the modern area par excellence, with shopping centers, private hospitals and excellent infrastructure. Temozon Norte is the most exclusive area, with luxury private developments and the Yucatan Country Club.'}
          </p>
          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Costo de vida' : 'Cost of living'}</h2>
          <div className="rounded-2xl p-6 my-6" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <div className="space-y-3">
              {[
                { item: es ? 'Renta mensual (depa amueblado)' : 'Monthly rent (furnished apt)', cost: '$15,000 – $60,000 MXN' },
                { item: es ? 'Comida en restaurante' : 'Restaurant meal', cost: '$100 – $400 MXN' },
                { item: es ? 'Transporte' : 'Transportation', cost: '$150 – $300 MXN/día' },
                { item: es ? 'Seguridad' : 'Security', cost: es ? 'La más alta de México' : 'Highest in Mexico' },
              ].map(item => (
                <div key={item.item} className="flex justify-between py-2" style={{ borderBottom: '1px solid var(--border)' }}>
                  <span className="text-sm" style={{ color: 'var(--muted)' }}>{item.item}</span>
                  <span className="text-sm font-semibold" style={{ color: 'var(--ink)' }}>{item.cost}</span>
                </div>
              ))}
            </div>
          </div>
          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Clima y estilo de vida' : 'Climate and lifestyle'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Mérida tiene un clima tropical cálido todo el año. Las temperaturas oscilan entre 20°C y 38°C. La temporada de lluvias es de junio a octubre. A pesar del calor, la ciudad tiene una vida cultural muy activa con festivales, conciertos y eventos gastronómicos durante todo el año.' : 'Merida has a warm tropical climate year-round. Temperatures range from 20°C to 38°C. The rainy season is from June to October. Despite the heat, the city has a very active cultural life with festivals, concerts and gastronomic events throughout the year.'}
          </p>
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
