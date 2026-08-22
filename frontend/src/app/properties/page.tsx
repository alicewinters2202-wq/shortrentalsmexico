import Link from 'next/link';
import { fetchPreview, imageUrl, coverImageUrl, parseAddress, formatMXN } from '@/types/preview';
import { getRatingSummary } from '@/lib/seedReviews';
import LangToggle from '@/components/layout/LangToggle';
import SortDropdown from './SortDropdown';
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
  searchParams: Promise<{ city?: string; guests?: string; sort?: string; page?: string }>;
}) {
  let cityParam: string | undefined;
  let guestsParam: number | undefined;
  let sortParam: string | undefined;
  let pageParam = 1;
  try {
    const sp = await searchParams;
    cityParam = sp?.city;
    guestsParam = sp?.guests ? parseInt(sp.guests, 10) : undefined;
    if (guestsParam !== undefined && (isNaN(guestsParam) || guestsParam < 1)) guestsParam = undefined;
    sortParam = ['price_asc', 'price_desc', 'bedrooms', 'size'].includes(sp?.sort ?? '') ? sp!.sort : undefined;
    const parsedPage = sp?.page ? parseInt(sp.page, 10) : 1;
    pageParam = !isNaN(parsedPage) && parsedPage > 0 ? parsedPage : 1;
  } catch {
    cityParam = undefined;
    guestsParam = undefined;
    sortParam = undefined;
    pageParam = 1;
  }
  const { t, lang } = await getT();
  const properties = await fetchPreview();
  let filtered = cityParam
    ? properties.filter((p) => p.city.trim() === cityParam!.trim())
    : properties;
  const beforeGuestFilterCount = filtered.length;

  // A real search (guests specified) should only surface options that actually
  // fit the party size and are available right now — not the full catalog.
  if (guestsParam !== undefined) {
    filtered = filtered.filter((p) => p.maxGuests >= guestsParam! && p.available);
  }
  const hiddenByFilterCount = beforeGuestFilterCount - filtered.length;

  // Apply the chosen secondary order first...
  const sorted = [...filtered];
  if (sortParam === 'price_asc') sorted.sort((a, b) => a.pricePerMonth - b.pricePerMonth);
  else if (sortParam === 'price_desc') sorted.sort((a, b) => b.pricePerMonth - a.pricePerMonth);
  else if (sortParam === 'bedrooms') sorted.sort((a, b) => b.bedrooms - a.bedrooms);
  else if (sortParam === 'size') sorted.sort((a, b) => b.sqMeters - a.sqMeters);
  // ...then always bubble available properties to the top. Array.sort is stable,
  // so this preserves whatever order was set above within each availability group.
  sorted.sort((a, b) => (b.available ? 1 : 0) - (a.available ? 1 : 0));

  const SORT_OPTIONS: { value: string; label: string }[] = [
    { value: 'price_asc',  label: lang === 'en' ? 'Price: low to high' : 'Precio: menor a mayor' },
    { value: 'price_desc', label: lang === 'en' ? 'Price: high to low' : 'Precio: mayor a menor' },
    { value: 'bedrooms',   label: lang === 'en' ? 'Most bedrooms' : 'Más recámaras' },
    { value: 'size',       label: lang === 'en' ? 'Largest size' : 'Tamaño mayor' },
  ];
  const buildCityUrl = (city?: string) => {
    const params = new URLSearchParams();
    if (city) params.set('city', city);
    if (guestsParam !== undefined) params.set('guests', String(guestsParam));
    if (sortParam) params.set('sort', sortParam);
    const qs = params.toString();
    return `/properties${qs ? `?${qs}` : ''}`;
  };

  const PAGE_SIZE = 24;
  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const currentPage = Math.min(pageParam, totalPages);
  const paginated = sorted.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  const buildPageUrl = (page: number) => {
    const params = new URLSearchParams();
    if (cityParam) params.set('city', cityParam);
    if (guestsParam !== undefined) params.set('guests', String(guestsParam));
    if (sortParam) params.set('sort', sortParam);
    if (page > 1) params.set('page', String(page));
    const qs = params.toString();
    return `/properties${qs ? `?${qs}` : ''}`;
  };

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
          <p className="text-sm mb-3" style={{ color: 'var(--muted)' }}>
            {t.propertiesCount(filtered.length)}
            {guestsParam !== undefined && (
              <span> · {lang === 'en' ? `available now, fits ${guestsParam}+ guests` : `disponibles ahora, para ${guestsParam}+ huéspedes`}</span>
            )}
          </p>
          <div className="mb-7">
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
                  style={{ color: 'var(--ochre)' }}
                >
                  {lang === 'en' ? 'See them too →' : 'Verlas también →'}
                </Link>
              </div>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            <Link href={buildCityUrl()} className="px-4 py-2 rounded-full text-sm transition-colors"
              style={!cityParam
                ? { backgroundColor: 'var(--ochre)', color: 'var(--plaster)', border: '1px solid var(--ochre)' }
                : { border: '1px solid var(--border)', color: 'var(--muted)' }}>
              {t.allFilter}
            </Link>
            {CITIES.map((c) => (
              <Link key={c} href={buildCityUrl(c)}
                className="px-4 py-2 rounded-full text-sm transition-colors"
                style={cityParam === c
                  ? { backgroundColor: 'var(--ochre)', color: 'var(--plaster)', border: '1px solid var(--ochre)' }
                  : { border: '1px solid var(--border)', color: 'var(--muted)' }}>
                {c}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3 mt-4">
            <span className="text-xs" style={{ color: 'var(--muted)' }}>
              {lang === 'en' ? 'Sort by' : 'Ordenar por'}
            </span>
            <SortDropdown
              cityParam={cityParam}
              guestsParam={guestsParam}
              sortParam={sortParam}
              options={SORT_OPTIONS}
              placeholder={lang === 'en' ? 'Default' : 'Predeterminado'}
              accentColor="var(--ochre)"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginated.map((p) => {
            const { street, neighborhood } = parseAddress(p.address);
            const mainImage = p.images[0];
            const rating = getRatingSummary(p.slug);
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
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-sm" style={{ color: 'var(--muted)' }}>{neighborhood}</p>
                    {rating && (
                      <>
                        <span style={{ color: 'var(--border)' }}>·</span>
                        <span className="text-sm flex items-center gap-1" style={{ color: 'var(--ink)' }}>
                          ★ {rating.avg.toFixed(1)}
                          <span style={{ color: 'var(--muted)' }}>({rating.count})</span>
                        </span>
                      </>
                    )}
                  </div>
                  <p className="text-xs mt-1" style={{ color: 'var(--muted)' }}>
                    {p.bedrooms} {t.rec} · {p.bathrooms} {t.baths} · {p.maxGuests} {t.guestsPlural} · {p.sqMeters} {t.sqm}
                  </p>
                  <div className="flex gap-1 mt-2 flex-wrap">
                    <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ backgroundColor: "rgba(184,118,58,0.15)", color: "var(--ochre)" }}>🛜 {p.wifiSpeed} Mbps</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ backgroundColor: "rgba(184,118,58,0.15)", color: "var(--ochre)" }}>🧹 {t.cleaningFee}</span>
                    {p.petFriendlyNegotiable
                      ? <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ backgroundColor: "rgba(184,118,58,0.15)", color: "var(--ochre)" }}>🐾 {t.petFriendlyNeg}</span>
                      : p.petFriendly && <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ backgroundColor: "rgba(184,118,58,0.15)", color: "var(--ochre)" }}>🐾</span>
                    }
                    {p.balcony && <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ backgroundColor: "rgba(184,118,58,0.15)", color: "var(--ochre)" }}>🌿</span>}
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

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            <Link
              href={buildPageUrl(Math.max(1, currentPage - 1))}
              aria-disabled={currentPage === 1}
              className="px-4 py-2 rounded-full text-sm transition-colors"
              style={currentPage === 1
                ? { border: '1px solid var(--border)', color: 'var(--border)', pointerEvents: 'none' }
                : { border: '1px solid var(--border)', color: 'var(--ink)' }}
            >
              {lang === 'en' ? '← Prev' : '← Anterior'}
            </Link>
            <span className="text-sm px-3" style={{ color: 'var(--muted)' }}>
              {lang === 'en' ? `Page ${currentPage} of ${totalPages}` : `Página ${currentPage} de ${totalPages}`}
            </span>
            <Link
              href={buildPageUrl(Math.min(totalPages, currentPage + 1))}
              aria-disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-full text-sm transition-colors"
              style={currentPage === totalPages
                ? { border: '1px solid var(--border)', color: 'var(--border)', pointerEvents: 'none' }
                : { border: '1px solid var(--border)', color: 'var(--ink)' }}
            >
              {lang === 'en' ? 'Next →' : 'Siguiente →'}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
