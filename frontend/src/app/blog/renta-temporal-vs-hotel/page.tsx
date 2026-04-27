import Link from 'next/link';
import { getT } from '@/lib/lang';
import LangToggle from '@/components/layout/LangToggle';

export const metadata = {
  title: 'Renta temporal vs hotel en México: ¿Qué conviene más? | ShortStayMX',
  description: 'Analizamos las ventajas y desventajas de rentar un departamento amueblado versus quedarse en un hotel para estancias largas en México.',
};

export default async function RentaVsHotel() {
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
        <p className="text-xs tracking-widest uppercase font-medium mb-4" style={{ color: 'var(--gold)' }}>México</p>
        <h1 className="font-serif text-4xl sm:text-5xl mb-6 leading-tight" style={{ color: 'var(--ink)' }}>
          {es ? 'Renta temporal vs hotel: ¿Qué conviene más?' : 'Short-term rental vs hotel: Which is better?'}
        </h1>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Si planeas quedarte en México por más de 10 días, la pregunta es inevitable: ¿hotel o departamento amueblado? Para estancias cortas de 1-3 noches, el hotel tiene sentido. Pero para estancias de 10 días o más — que es la especialidad de ShortStayMX — la respuesta casi siempre favorece al departamento amueblado en prácticamente todos los aspectos.' : 'If you plan to stay in Mexico for more than 10 days, the question is inevitable: hotel or furnished apartment? For short stays of 1-3 nights, the hotel makes sense. But for stays of 10 days or more — which is ShortStayMX\'s specialty — the answer almost always favors the furnished apartment in practically every aspect.'}
          </p>

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'El factor precio: la diferencia es enorme' : 'The price factor: the difference is huge'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Para estancias de un mes, la diferencia de precio entre un hotel y un departamento amueblado equivalente puede ser de 3 a 5 veces. Un hotel de 4 estrellas en Polanco cuesta entre $3,000 y $6,000 MXN por noche, lo que equivale a $90,000 – $180,000 MXN al mes. Un departamento amueblado de lujo en la misma zona cuesta entre $45,000 y $80,000 MXN al mes, con más espacio, cocina propia y mayor privacidad.' : 'For a month-long stay, the price difference between a hotel and an equivalent furnished apartment can be 3 to 5 times. A 4-star hotel in Polanco costs between $3,000 and $6,000 MXN per night, which equals $90,000 – $180,000 MXN per month. A luxury furnished apartment in the same area costs between $45,000 and $80,000 MXN per month, with more space, your own kitchen and greater privacy.'}
          </p>

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Comparación detallada' : 'Detailed comparison'}</h2>
          <div className="rounded-2xl overflow-hidden my-6" style={{ border: '1px solid var(--border)' }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: 'var(--card)', borderBottom: '1px solid var(--border)' }}>
                  <th className="px-4 py-3 text-left text-xs tracking-widest uppercase font-medium" style={{ color: 'var(--muted)' }}>{es ? 'Aspecto' : 'Aspect'}</th>
                  <th className="px-4 py-3 text-center text-xs tracking-widest uppercase font-medium" style={{ color: 'var(--muted)' }}>{es ? 'Depa amueblado' : 'Furnished apt'}</th>
                  <th className="px-4 py-3 text-center text-xs tracking-widest uppercase font-medium" style={{ color: 'var(--muted)' }}>Hotel</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { aspect: es ? 'Precio (10+ noches)' : 'Price (10+ nights)', apt: '✅ Mucho mejor', hotel: '❌ Muy caro' },
                  { aspect: es ? 'Cocina propia' : 'Own kitchen', apt: '✅ Siempre', hotel: '❌ No incluida' },
                  { aspect: es ? 'Privacidad' : 'Privacy', apt: '✅ Total', hotel: '⚠️ Limitada' },
                  { aspect: es ? 'Espacio' : 'Space', apt: '✅ Mucho más', hotel: '❌ Habitación pequeña' },
                  { aspect: es ? 'Ambiente de hogar' : 'Home atmosphere', apt: '✅ Sí', hotel: '❌ No' },
                  { aspect: es ? 'Lavandería' : 'Laundry', apt: '✅ En el depa', hotel: '⚠️ Servicio extra caro' },
                  { aspect: es ? 'Servicio diario' : 'Daily service', apt: '⚠️ Limpieza semanal', hotel: '✅ Diario' },
                  { aspect: es ? 'Cancelación flexible' : 'Flexible cancellation', apt: '⚠️ Variable', hotel: '✅ Generalmente sí' },
                  { aspect: es ? 'Internet rápido' : 'Fast internet', apt: '✅ Verificado', hotel: '⚠️ Variable' },
                  { aspect: es ? 'Espacio de trabajo' : 'Work space', apt: '✅ Escritorio propio', hotel: '⚠️ Limitado' },
                ].map(row => (
                  <tr key={row.aspect} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--muted)' }}>{row.aspect}</td>
                    <td className="px-4 py-3 text-center text-xs" style={{ color: 'var(--ink)' }}>{row.apt}</td>
                    <td className="px-4 py-3 text-center text-xs" style={{ color: 'var(--ink)' }}>{row.hotel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? '¿Cuándo tiene sentido el hotel?' : 'When does a hotel make sense?'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'El hotel tiene ventajas claras para estancias muy cortas (1-5 noches), cuando necesitas cancelación de último minuto, cuando llegas a una ciudad nueva y quieres orientarte antes de comprometerte con un departamento, o cuando el servicio y la atención personalizados son prioritarios sobre el precio y el espacio.' : 'The hotel has clear advantages for very short stays (1-5 nights), when you need last-minute cancellation, when you arrive in a new city and want to get oriented before committing to an apartment, or when personalized service and attention are a priority over price and space.'}
          </p>

          <div className="rounded-2xl p-8 mt-12 text-center" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <p className="font-serif text-2xl mb-3" style={{ color: 'var(--ink)' }}>{es ? 'Encuentra tu depa ideal' : 'Find your ideal apartment'}</p>
            <p className="text-sm mb-6" style={{ color: 'var(--muted)' }}>{es ? 'Propiedades amuebladas verificadas desde 10 noches en las mejores ciudades de México.' : 'Verified furnished properties from 10 nights in the best cities in Mexico.'}</p>
            <Link href="/properties" className="inline-block px-8 py-3 rounded-full text-sm font-medium text-white" style={{ backgroundColor: 'var(--gold)' }}>
              {es ? 'Ver propiedades' : 'View properties'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
