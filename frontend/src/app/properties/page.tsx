import Link from 'next/link';
import { fetchPreview, imageUrl, coverImageUrl, parseAddress, formatMXN } from '@/types/preview';
import LangToggle from '@/components/layout/LangToggle';
import { getT } from '@/lib/lang';

const CITIES = ['Ciudad de México', 'Guadalajara', 'Monterrey', 'Santiago', 'Chapala', 'Puerto Vallarta', 'San Miguel de Allende', 'Mérida', 'Cancún', 'Nuevo Vallarta', 'Tulum', 'Playa del Carmen'];
export const dynamic = 'force-dynamic';

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ city?: string }> }) {
  let city: string | undefined;
  try { const sp = await searchParams; city = sp?.city; } catch { city = undefined; }
  const title = city ? `Propiedades en ${city} | ShortStayMX` : 'Todas las propiedades | ShortStayMX';
  const description = city ? `Encuentra departamentos y casas amuebladas para renta temporal en ${city}. Propiedades verificadas con todo incluido.` : 'Explora departamentos y casas amuebladas para renta temporal en Ciudad de México, Guadalajara, Monterrey, Cancún, Mérida y más ciudades de México.';
  return { alternates: { canonical: city ? `https://temporaryrentalsmexico.com/properties?city=${encodeURIComponent(city)}` : 'https://temporaryrentalsmexico.com/properties' }, title, description, openGraph: { title, description, url: city ? `https://shortstaymx.com/properties?city=${encodeURIComponent(city)}` : 'https://shortstaymx.com/properties' } };
}

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: Promise<{ city?: string }>;
}) {
  let cityParam: string | undefined;
  try { const sp = await searchParams; cityParam = sp?.city; } catch { cityParam = undefined; }
  const { t, lang } = await getT();
  const properties = await fetchPreview();
  const filtered = cityParam
    ? properties.filter((p) => p.city.trim() === cityParam!.trim())
    : properties;

  return (
    <div style={{ backgroundColor: 'var(--cream)', minHeight: '100vh' }}>
      <nav className="sticky top-0 z-40 backdrop-blur-md" style={{ backgroundColor: 'rgba(28,28,30,0.9)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-serif font-medium tracking-wide" style={{ color: 'var(--ink)' }}>
            ShortStayMX
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/about" className="text-xs transition-colors hover:opacity-80" style={{ color: 'var(--muted)' }}>{t.aboutNav}</Link>
            <Link href="/requirements" className="text-xs transition-colors hover:opacity-80" style={{ color: 'var(--muted)' }}>{t.reqNav}</Link>
            <LangToggle currentLang={lang} className="text-[--muted] hover:text-[--ink]" />
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="mb-10">
          <p className="text-[11px] tracking-[0.3em] uppercase font-medium mb-3" style={{ color: 'var(--ochre)' }}>
            {lang === 'en' ? 'The collection' : 'La colección'}
          </p>
          <h1
            className="italic mb-3 leading-[0.95] text-5xl sm:text-6xl"
            style={{ color: 'var(--ink)', fontFamily: 'var(--font-display), serif' }}
          >
            {cityParam ?? t.allProperties}
          </h1>
          <p className="text-sm mb-7" style={{ color: 'var(--muted)' }}>
            {t.propertiesCount(filtered.length)}
          </p>
          <div className="flex flex-wrap gap-2">
            <Link href="/properties" className="px-4 py-2 rounded-full text-sm transition-colors"
              style={!cityParam
                ? { backgroundColor: 'var(--ochre)', color: 'var(--plaster)', border: '1px solid var(--ochre)' }
                : { border: '1px solid var(--border)', color: 'var(--muted)' }}>
              {t.allFilter}
            </Link>
            {CITIES.map((c) => (
              <Link key={c} href={`/properties?city=${encodeURIComponent(c)}`}
                className="px-4 py-2 rounded-full text-sm transition-colors"
                style={cityParam === c
                  ? { backgroundColor: 'var(--ochre)', color: 'var(--plaster)', border: '1px solid var(--ochre)' }
                  : { border: '1px solid var(--border)', color: 'var(--muted)' }}>
                {c}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p) => {
            const { street, neighborhood } = parseAddress(p.address);
            const mainImage = p.images[0];
            return (
              <Link key={p.id} href={`/properties/${p.slug}`} className="group block hover-float">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden" style={{ backgroundColor: 'var(--card)' }}>
                  {mainImage ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img src={coverImageUrl(p) ?? imageUrl(mainImage)} alt={street} loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-sm" style={{ color: 'var(--muted)' }}>{t.noImage}</span>
                    </div>
                  )}
                  <div className="absolute top-3 right-3 flex flex-col items-end gap-1">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ backgroundColor: 'var(--ochre)', color: 'var(--plaster)' }}>
                      {p.city.trim() === 'Ciudad de México' ? 'CDMX' : p.city.trim()}
                    </span>
                    {!p.available && p.availableFrom && (
                      <span className="text-[10px] font-semibold px-2 py-1 rounded-full bg-red-600/90 text-white">
                        {t.occupiedRange(
                          new Date((p.occupiedSince ?? p.availableFrom!) + 'T12:00:00').toLocaleDateString(lang === 'en' ? 'en-US' : 'es-MX', { month: 'short' }),
                          new Date(p.availableFrom + 'T12:00:00').toLocaleDateString(lang === 'en' ? 'en-US' : 'es-MX', { month: 'short', year: 'numeric' }),
                        )}
                      </span>
                    )}
                  </div>
                  {p.amenities.length > 0 && (
                    <div className="absolute bottom-3 left-3 flex gap-1">
                      {p.amenities.slice(0, 2).map((a) => (
                        <span key={a} className="text-white text-[10px] px-2 py-0.5 rounded-full capitalize"
                          style={{ backgroundColor: 'rgba(0,0,0,0.55)' }}>{a}</span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="mt-4">
                  <p
                    className="text-2xl leading-tight italic"
                    style={{ color: 'var(--ink)', fontFamily: 'var(--font-display), serif' }}
                  >
                    {street}
                  </p>
                  <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>{neighborhood}</p>
                  <p className="text-xs mt-1" style={{ color: 'var(--muted)' }}>
                    {p.bedrooms} {t.rec} · {p.bathrooms} {t.baths} · {p.maxGuests} {t.guestsPlural} · {p.sqMeters} {t.sqm}
                  </p>
                  <div className="flex gap-1 mt-2 flex-wrap">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-violet-900/30 text-violet-400">🛜 {p.wifiSpeed} Mbps</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-stone-700/40 text-stone-400">🧹 {t.cleaningFee}</span>
                    {p.petFriendlyNegotiable
                      ? <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-900/30 text-amber-400">🐾 {t.petFriendlyNeg}</span>
                      : p.petFriendly && <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-900/30 text-amber-400">🐾</span>
                    }
                    {p.balcony && <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-900/30 text-emerald-400">🌿</span>}
                  </div>
                  <div className="mt-3 pt-3 flex items-end justify-between" style={{ borderTop: '1px solid var(--border)' }}>
                    <div>
                      <span className="font-semibold" style={{ color: 'var(--ink)' }}>{formatMXN(Math.round(p.pricePerMonth / 30))}</span>
                      <span className="text-xs ml-1" style={{ color: 'var(--muted)' }}>{lang === 'en' ? '/ night' : '/ noche'}</span>
                      <span className="text-xs mx-1" style={{ color: 'var(--muted)' }}>·</span>
                      <span className="font-semibold" style={{ color: 'var(--ink)' }}>{formatMXN(p.pricePerMonth)}</span>
                      <span className="text-xs ml-1" style={{ color: 'var(--muted)' }}>{t.perMonth}</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
