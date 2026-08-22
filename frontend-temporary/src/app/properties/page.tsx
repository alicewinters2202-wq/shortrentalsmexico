import Link from 'next/link';
import { fetchPreview, imageUrl, coverImageUrl, parseAddress, formatMXN } from '@/types/preview';
import LangToggle from '@/components/layout/LangToggle';
import { getT } from '@/lib/lang';

const CITIES = ['Ciudad de México', 'Guadalajara', 'Monterrey', 'Santiago', 'Chapala', 'Puerto Vallarta', 'San Miguel de Allende', 'Mérida', 'Cancún', 'Nuevo Vallarta', 'Tulum', 'Playa del Carmen'];
export const dynamic = 'force-dynamic';

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ city?: string }> }) {
  let city: string | undefined;
  try { const sp = await searchParams; city = sp?.city; } catch { city = undefined; }
  const title = city ? `Propiedades en ${city} | TemporaryRentalsMexico` : 'Todas las propiedades | TemporaryRentalsMexico';
  const description = city ? `Encuentra departamentos y casas amuebladas para renta temporal en ${city}. Propiedades verificadas con todo incluido.` : 'Explora departamentos y casas amuebladas para renta temporal en Ciudad de México, Guadalajara, Monterrey, Cancún, Mérida y más ciudades de México.';
  return { title, description, openGraph: { title, description, url: city ? `https://temporaryrentalsmexico.com/properties?city=${encodeURIComponent(city)}` : 'https://temporaryrentalsmexico.com/properties' } };
}

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: Promise<{ city?: string; guests?: string; sort?: string }>;
}) {
  let cityParam: string | undefined;
  let guestsParam: number | undefined;
  let sortParam: string | undefined;
  try {
    const sp = await searchParams;
    cityParam = sp?.city;
    guestsParam = sp?.guests ? parseInt(sp.guests, 10) : undefined;
    if (guestsParam !== undefined && (isNaN(guestsParam) || guestsParam < 1)) guestsParam = undefined;
    sortParam = ['price_asc', 'price_desc', 'bedrooms', 'size'].includes(sp?.sort ?? '') ? sp!.sort : undefined;
  } catch {
    cityParam = undefined;
    guestsParam = undefined;
    sortParam = undefined;
  }
  const { t, lang } = await getT();
  const properties = await fetchPreview();
  let filtered = cityParam
    ? properties.filter((p) => p.city.trim() === cityParam!.trim())
    : properties;
  const beforeGuestFilterCount = filtered.length;

  if (guestsParam !== undefined) {
    filtered = filtered.filter((p) => p.maxGuests >= guestsParam! && p.available);
  }
  const hiddenByFilterCount = beforeGuestFilterCount - filtered.length;

  const sorted = [...filtered];
  if (sortParam === 'price_asc') sorted.sort((a, b) => a.pricePerMonth - b.pricePerMonth);
  else if (sortParam === 'price_desc') sorted.sort((a, b) => b.pricePerMonth - a.pricePerMonth);
  else if (sortParam === 'bedrooms') sorted.sort((a, b) => b.bedrooms - a.bedrooms);
  else if (sortParam === 'size') sorted.sort((a, b) => b.sqMeters - a.sqMeters);
  sorted.sort((a, b) => (b.available ? 1 : 0) - (a.available ? 1 : 0));

  const SORT_OPTIONS: { value: string; label: string }[] = [
    { value: 'price_asc',  label: lang === 'en' ? 'Price: low to high' : 'Precio: menor a mayor' },
    { value: 'price_desc', label: lang === 'en' ? 'Price: high to low' : 'Precio: mayor a menor' },
    { value: 'bedrooms',   label: lang === 'en' ? 'Most bedrooms' : 'Más recámaras' },
    { value: 'size',       label: lang === 'en' ? 'Largest size' : 'Tamaño mayor' },
  ];
  const buildUrl = (sort?: string) => {
    const params = new URLSearchParams();
    if (cityParam) params.set('city', cityParam);
    if (guestsParam !== undefined) params.set('guests', String(guestsParam));
    if (sort) params.set('sort', sort);
    const qs = params.toString();
    return `/properties${qs ? `?${qs}` : ''}`;
  };
  const buildCityUrl = (city?: string) => {
    const params = new URLSearchParams();
    if (city) params.set('city', city);
    if (guestsParam !== undefined) params.set('guests', String(guestsParam));
    if (sortParam) params.set('sort', sortParam);
    const qs = params.toString();
    return `/properties${qs ? `?${qs}` : ''}`;
  };

  return (
    <div style={{ backgroundColor: 'var(--cream)', minHeight: '100vh' }}>
      <nav className="sticky top-0 z-40 backdrop-blur-md" style={{ backgroundColor: 'rgba(28,28,30,0.9)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-serif font-medium tracking-wide" style={{ color: 'var(--ink)' }}>
            TemporaryRentalsMexico
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/about" className="text-xs transition-colors hover:opacity-80" style={{ color: 'var(--muted)' }}>{t.aboutNav}</Link>
            <Link href="/requirements" className="text-xs transition-colors hover:opacity-80" style={{ color: 'var(--muted)' }}>{t.reqNav}</Link>
            <LangToggle currentLang={lang} className="text-[--muted] hover:text-[--ink]" />
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-10">
          <h1 className="italic text-5xl sm:text-6xl mb-2" style={{ color: 'var(--ink)' }}>
            {cityParam ?? t.allProperties}
          </h1>
          <p className="text-sm mb-3" style={{ color: 'var(--muted)' }}>
            {t.propertiesCount(filtered.length)}
            {guestsParam !== undefined && (
              <span> · {lang === 'en' ? `available now, fits ${guestsParam}+ guests` : `disponibles ahora, para ${guestsParam}+ huéspedes`}</span>
            )}
          </p>
          <div className="mb-6">
            {guestsParam !== undefined && hiddenByFilterCount > 0 && (
              <div className="flex items-center gap-2 flex-wrap text-sm rounded-xl px-4 py-3" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
                <span style={{ color: 'var(--muted)' }}>
                  {lang === 'en'
                    ? `${hiddenByFilterCount} more ${hiddenByFilterCount === 1 ? 'property' : 'properties'} in ${cityParam ?? 'this search'} ${hiddenByFilterCount === 1 ? "doesn't" : "don't"} fit ${guestsParam}+ guests or aren't available right now.`
                    : `${hiddenByFilterCount} ${hiddenByFilterCount === 1 ? 'propiedad más' : 'propiedades más'} en ${cityParam ?? 'esta búsqueda'} no ${hiddenByFilterCount === 1 ? 'cabe' : 'caben'} en ${guestsParam}+ huéspedes o no están disponibles ahora.`}
                </span>
                <Link
                  href={(() => { const p = new URLSearchParams(); if (cityParam) p.set('city', cityParam); if (sortParam) p.set('sort', sortParam); const qs = p.toString(); return `/properties${qs ? `?${qs}` : ''}`; })()}
                  className="font-semibold hover:underline flex-shrink-0"
                  style={{ color: 'var(--gold)' }}
                >
                  {lang === 'en' ? 'See them too →' : 'Verlas también →'}
                </Link>
              </div>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            <Link href={buildCityUrl()} className="px-4 py-2 rounded-full text-sm transition-colors"
              style={!cityParam ? { backgroundColor: 'var(--gold)', color: 'var(--cream)', border: '1px solid var(--gold)' } : { border: '1px solid var(--border)', color: 'var(--muted)' }}>
              {t.allFilter}
            </Link>
            {CITIES.map((c) => (
              <Link key={c} href={buildCityUrl(c)}
                className="px-4 py-2 rounded-full text-sm transition-colors"
                style={cityParam === c ? { backgroundColor: 'var(--gold)', color: 'var(--cream)', border: '1px solid var(--gold)' } : { border: '1px solid var(--border)', color: 'var(--muted)' }}>
                {c}
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2 mt-4">
            <span className="text-xs mr-1" style={{ color: 'var(--muted)' }}>
              {lang === 'en' ? 'Sort by:' : 'Ordenar por:'}
            </span>
            {SORT_OPTIONS.map((opt) => (
              <Link key={opt.value} href={buildUrl(sortParam === opt.value ? undefined : opt.value)}
                className="px-3 py-1.5 rounded-full text-xs transition-colors"
                style={sortParam === opt.value
                  ? { backgroundColor: 'var(--ink)', color: 'var(--cream)', border: '1px solid var(--ink)' }
                  : { border: '1px solid var(--border)', color: 'var(--muted)' }}>
                {opt.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sorted.map((p) => {
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
                      style={{ backgroundColor: 'rgba(28,28,30,0.85)', color: 'var(--ink)' }}>
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
                  <p className="font-serif text-xl leading-tight" style={{ color: 'var(--ink)' }}>{street}</p>
                  <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>{neighborhood}</p>
                  <p className="text-xs mt-1" style={{ color: 'var(--muted)' }}>
                    {p.bedrooms} {t.rec} · {p.bathrooms} {t.baths} · {p.maxGuests} {t.guestsPlural} · {p.sqMeters} {t.sqm}
                  </p>
                  <div className="flex gap-1 mt-2 flex-wrap">
                    <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ backgroundColor: "rgba(63,184,175,0.15)", color: "var(--gold)" }}>🛜 {p.wifiSpeed} Mbps</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ backgroundColor: "rgba(63,184,175,0.15)", color: "var(--gold)" }}>🧹 {t.cleaningFee}</span>
                    {p.petFriendlyNegotiable
                      ? <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ backgroundColor: "rgba(63,184,175,0.15)", color: "var(--gold)" }}>🐾 {t.petFriendlyNeg}</span>
                      : p.petFriendly && <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ backgroundColor: "rgba(63,184,175,0.15)", color: "var(--gold)" }}>🐾</span>
                    }
                    {p.balcony && <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ backgroundColor: "rgba(63,184,175,0.15)", color: "var(--gold)" }}>🌿</span>}
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