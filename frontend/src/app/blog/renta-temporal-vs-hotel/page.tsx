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
        <p className="text-sm mb-12" style={{ color: 'var(--muted)' }}>{es ? '25 de febrero de 2024 · 6 min de lectura' : 'February 25, 2024 · 6 min read'}</p>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Si planeas quedarte en México por más de 10 días, la pregunta es inevitable: ¿hotel o departamento amueblado? La respuesta casi siempre es la misma para estancias medianas y largas: el departamento amueblado gana en prácticamente todos los aspectos.' : 'If you plan to stay in Mexico for more than 10 days, the question is inevitable: hotel or furnished apartment? The answer is almost always the same for medium and long stays: the furnished apartment wins in practically every aspect.'}
          </p>
          <div className="rounded-2xl overflow-hidden my-8" style={{ border: '1px solid var(--border)' }}>
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
                  { aspect: es ? 'Precio (10+ noches)' : 'Price (10+ nights)', apt: '✅', hotel: '❌' },
                  { aspect: es ? 'Cocina propia' : 'Own kitchen', apt: '✅', hotel: '❌' },
                  { aspect: es ? 'Privacidad' : 'Privacy', apt: '✅', hotel: '⚠️' },
                  { aspect: es ? 'Espacio' : 'Space', apt: '✅', hotel: '❌' },
                  { aspect: es ? 'Ambiente de hogar' : 'Home atmosphere', apt: '✅', hotel: '❌' },
                  { aspect: es ? 'Servicio diario' : 'Daily service', apt: '⚠️', hotel: '✅' },
                  { aspect: es ? 'Cancelación flexible' : 'Flexible cancellation', apt: '⚠️', hotel: '✅' },
                ].map(row => (
                  <tr key={row.aspect} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--muted)' }}>{row.aspect}</td>
                    <td className="px-4 py-3 text-center">{row.apt}</td>
                    <td className="px-4 py-3 text-center">{row.hotel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rounded-2xl p-8 mt-12 text-center" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <p className="font-serif text-2xl mb-3" style={{ color: 'var(--ink)' }}>{es ? 'Encuentra tu depa ideal' : 'Find your ideal apartment'}</p>
            <Link href="/properties" className="inline-block px-8 py-3 rounded-full text-sm font-medium text-white" style={{ backgroundColor: 'var(--gold)' }}>
              {es ? 'Ver propiedades' : 'View properties'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
