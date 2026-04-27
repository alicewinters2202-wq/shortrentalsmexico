import Link from 'next/link';
import { getT } from '@/lib/lang';
import LangToggle from '@/components/layout/LangToggle';

export const metadata = {
  title: 'Vivir en Nuevo Vallarta: Guía para expatriados | ShortStayMX',
  description: 'Todo sobre vivir en Nuevo Vallarta y la Riviera Nayarit: Flamingos, Bucerías, Cruz de Huanacaxtle. Guía completa de zonas, costos y estilo de vida.',
};

export default async function ViviriEnNuevoVallarta() {
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
        <p className="text-xs tracking-widest uppercase font-medium mb-4" style={{ color: 'var(--gold)' }}>Nuevo Vallarta</p>
        <h1 className="font-serif text-4xl sm:text-5xl mb-6 leading-tight" style={{ color: 'var(--ink)' }}>
          {es ? 'Vivir en Nuevo Vallarta: Guía para expatriados' : 'Living in Nuevo Vallarta: Guide for expats'}
        </h1>
        <p className="text-sm mb-12" style={{ color: 'var(--muted)' }}>{es ? '9 de abril de 2024 · 7 min de lectura' : 'April 9, 2024 · 7 min read'}</p>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Nuevo Vallarta y la Riviera Nayarit se han convertido en una de las zonas de mayor crecimiento para expatriados en México. A solo 20 minutos del aeropuerto de Puerto Vallarta, esta zona ofrece playas del Pacífico, marinas de lujo, campos de golf y una calidad de vida excepcional.' : 'Nuevo Vallarta and the Riviera Nayarit have become one of the fastest-growing areas for expats in Mexico. Just 20 minutes from Puerto Vallarta airport, this area offers Pacific beaches, luxury marinas, golf courses and an exceptional quality of life.'}
          </p>
          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Flamingos vs Bucerías' : 'Flamingos vs Bucerias'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Flamingos es la zona más exclusiva, con condominios de lujo frente al mar, marina Grand Marina y el campo de golf Flamingos. Bucerías y Cruz de Huanacaxtle son pueblos costeros más auténticos y accesibles, perfectos para quienes buscan vida de playa tranquila sin el turismo masivo.' : 'Flamingos is the most exclusive area, with luxury oceanfront condominiums, Grand Marina and the Flamingos golf course. Bucerias and Cruz de Huanacaxtle are more authentic and accessible coastal towns, perfect for those seeking quiet beach life without mass tourism.'}
          </p>
          <div className="rounded-2xl p-8 mt-12 text-center" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <p className="font-serif text-2xl mb-3" style={{ color: 'var(--ink)' }}>{es ? 'Ver propiedades en Nuevo Vallarta' : 'View properties in Nuevo Vallarta'}</p>
            <Link href="/properties?city=Nuevo%20Vallarta" className="inline-block px-8 py-3 rounded-full text-sm font-medium text-white" style={{ backgroundColor: 'var(--gold)' }}>
              {es ? 'Ver propiedades' : 'View properties'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
