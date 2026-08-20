import Link from 'next/link';
import { fetchPreview, imageUrl, coverImageUrl } from '@/types/preview';
import LangToggle from '@/components/layout/LangToggle';
import { getT } from '@/lib/lang';

const ALL_CITIES = [
  { name: 'Ciudad de México', label: 'CDMX' },
  { name: 'Guadalajara',      label: 'Guadalajara' },
  { name: 'Monterrey',        label: 'Monterrey' },
  { name: 'Santiago',         label: 'Santiago' },
  { name: 'Chapala',          label: 'Chapala' },
  { name: 'Puerto Vallarta',  label: 'Puerto Vallarta' },
  { name: 'San Miguel de Allende', label: 'San Miguel' },
  { name: 'Mérida',          label: 'Mérida' },
  { name: 'Cancún',          label: 'Cancún' },
  { name: 'Nuevo Vallarta',   label: 'Nuevo Vallarta' },
  { name: 'Tulum',            label: 'Tulum' },
  { name: 'Playa del Carmen', label: 'Playa del Carmen' },
];

export async function generateMetadata() {
  return {
    alternates: { canonical: 'https://temporaryrentalsmexico.com/destinations' },
    title: 'Destinos | ShortStayMX',
    description: 'Explora todas las ciudades donde ShortStayMX tiene propiedades disponibles para renta temporal en México.',
  };
}

export default async function DestinationsPage() {
  const { t, lang } = await getT();
  const properties = await fetchPreview();

  return (
    <div style={{ backgroundColor: 'var(--cream)', minHeight: '100vh' }}>
      <nav className="sticky top-0 z-40 backdrop-blur-md" style={{ backgroundColor: 'rgba(28,28,30,0.9)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-serif font-medium tracking-wide" style={{ color: 'var(--ink)' }}>
            ShortStayMX
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/properties" className="text-xs transition-colors hover:opacity-80" style={{ color: 'var(--muted)' }}>{t.allProperties}</Link>
            <LangToggle currentLang={lang} className="text-[--muted] hover:text-[--ink]" />
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-14">
        <p className="text-[11px] tracking-[0.3em] uppercase font-medium mb-3" style={{ color: 'var(--ochre)' }}>
          {lang === 'en' ? 'Explore' : 'Explora'}
        </p>
        <h1
          className="italic mb-3 leading-[0.95] text-5xl sm:text-6xl"
          style={{ color: 'var(--ink)', fontFamily: 'var(--font-display), serif' }}
        >
          {lang === 'en' ? 'Select your zone' : 'Elige tu zona'}
        </h1>
        <p className="text-sm mb-10" style={{ color: 'var(--muted)' }}>
          {lang === 'en' ? 'Explore all cities where we operate' : 'Explora todas las ciudades donde operamos'}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ALL_CITIES.map((c) => {
            const cityProps = properties.filter((p) => p.city.trim() === c.name);
            const coverImg  = cityProps.find((p) => p.images.length > 0);
            const count     = cityProps.length;
            return (
              <Link key={c.name} href={`/properties?city=${encodeURIComponent(c.name)}`}
                className="group relative overflow-hidden rounded-2xl aspect-[3/2]">
                {coverImg ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img src={coverImageUrl(coverImg) ?? imageUrl(coverImg.images[0])} alt={c.label} loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-600" />
                )}
                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors" />
                <div className="absolute top-3 right-3 text-[10px] font-semibold px-2.5 py-1 rounded-full" style={{ backgroundColor: 'var(--ochre)', color: 'var(--plaster)' }}>
                  {t.properties(count)}
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <p className="text-white font-serif text-2xl font-medium">{c.label}</p>
                  <p className="text-white/70 text-sm mt-1">{t.cityTagline(c.name)}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
