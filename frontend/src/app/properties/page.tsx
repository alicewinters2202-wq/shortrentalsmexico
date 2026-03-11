import Link from 'next/link';
import { fetchPreview, imageUrl, parseAddress, formatMXN } from '@/types/preview';
import LangToggle from '@/components/layout/LangToggle';
import { getT } from '@/lib/lang';

const CITIES = ['Ciudad de México', 'Guadalajara', 'Monterrey', 'Santiago', 'Chapala'];

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: Promise<{ city?: string }>;
}) {
  const { city: cityParam } = await searchParams;
  const { t, lang } = await getT();
  const properties = await fetchPreview();
  const filtered   = cityParam
    ? properties.filter((p) => p.city.trim() === cityParam.trim())
    : properties;

  return (
    <div style={{ backgroundColor: 'var(--cream)', minHeight: '100vh' }}>
      {/* Navbar */}
      <nav
        className="sticky top-0 z-40 backdrop-blur-md"
        style={{ backgroundColor: 'rgba(28,28,30,0.9)', borderBottom: '1px solid var(--border)' }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-serif font-medium tracking-wide" style={{ color: 'var(--ink)' }}>
            ShortStayMX
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/about" className="text-xs transition-colors hover:opacity-80" style={{ color: 'var(--muted)' }}>
              {t.aboutNav}
            </Link>
            <Link href="/requirements" className="text-xs transition-colors hover:opacity-80" style={{ color: 'var(--muted)' }}>
              {t.reqNav}
            </Link>
            <LangToggle currentLang={lang} className="text-[--muted] hover:text-[--ink]" />
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Título + filtros */}
        <div className="mb-10">
          <h1 className="font-serif text-4xl mb-2" style={{ color: 'var(--ink)' }}>
            {cityParam ?? t.allProperties}
          </h1>
          <p className="text-sm mb-6" style={{ color: 'var(--muted)' }}>
            {t.propertiesCount(filtered.length)}
          </p>

          <div className="flex flex-wrap gap-2">
            <Link
              href="/properties"
              className="px-4 py-2 rounded-full text-sm transition-colors"
              style={!cityParam
                ? { backgroundColor: 'var(--ink)', color: 'var(--cream)', border: '1px solid var(--ink)' }
                : { border: '1px solid var(--border)', color: 'var(--muted)' }}
            >
              {t.allFilter}
            </Link>
            {CITIES.map((c) => (
              <Link
                key={c}
                href={`/properties?city=${encodeURIComponent(c)}`}
                className="px-4 py-2 rounded-full text-sm transition-colors"
                style={cityParam === c
                  ? { backgroundColor: 'var(--ink)', color: 'var(--cream)', border: '1px solid var(--ink)' }
                  : { border: '1px solid var(--border)', color: 'var(--muted)' }}
              >
                {c}
              </Link>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p) => {
            const { street, neighborhood } = parseAddress(p.address);
            const mainImage = p.images[0];

            return (
              <Link key={p.id} href={`/properties/${p.id}`} className="group block">
                {/* Imagen */}
                <div
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden"
                  style={{ backgroundColor: 'var(--card)' }}
                >
                  {mainImage ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={imageUrl(mainImage)}
                      alt={street}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
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
                        {t.occupiedUntil(new Date(p.availableFrom + 'T12:00:00').toLocaleDateString(lang === 'en' ? 'en-US' : 'es-MX', { day: 'numeric', month: 'short' }))}
                      </span>
                    )}
                  </div>

                  {p.amenities.length > 0 && (
                    <div className="absolute bottom-3 left-3 flex gap-1">
                      {p.amenities.slice(0, 2).map((a) => (
                        <span key={a} className="text-white text-[10px] px-2 py-0.5 rounded-full capitalize"
                          style={{ backgroundColor: 'rgba(0,0,0,0.55)' }}>
                          {a}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="mt-4">
                  <p className="font-serif text-xl leading-tight" style={{ color: 'var(--ink)' }}>{street}</p>
                  <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>{neighborhood}</p>
                  <p className="text-xs mt-1" style={{ color: 'var(--muted)' }}>
                    {p.bedrooms} {t.rec} · {p.bathrooms} {t.baths} · {p.maxGuests} {t.guestsPlural} · {p.sqMeters} {t.sqm}
                  </p>

                  {/* Badges WiFi + extras */}
                  <div className="flex gap-1 mt-2 flex-wrap">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-violet-900/30 text-violet-400">📶 {p.wifiSpeed} Mbps</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-stone-700/40 text-stone-400">🧹 {t.cleaningFee}</span>
                    {p.petFriendlyNegotiable
                      ? <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-900/30 text-amber-400">🐾 {t.petFriendlyNeg}</span>
                      : p.petFriendly && <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-900/30 text-amber-400">🐾</span>
                    }
                    {p.balcony    && <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-900/30 text-emerald-400">🌿</span>}
                  </div>

                  <div className="mt-3 pt-3 flex items-end justify-between"
                    style={{ borderTop: '1px solid var(--border)' }}>
                    <div>
                      <span className="font-semibold" style={{ color: 'var(--ink)' }}>{formatMXN(p.pricePerMonth + 2000)}</span>
                      <span className="text-xs ml-1" style={{ color: 'var(--muted)' }}>{t.perMonth}</span>
                      <p className="text-[10px] mt-0.5" style={{ color: 'var(--muted)' }}>🧹 +$2,000 {t.cleaningFee}</p>
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
