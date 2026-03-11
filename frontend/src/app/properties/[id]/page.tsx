import Link from 'next/link';
import { notFound } from 'next/navigation';
import { fetchPreview, parseAddress, formatMXN } from '@/types/preview';
import ImageGallery from './ImageGallery';
import BookingPanelPreview from './BookingPanelPreview';
import LangToggle from '@/components/layout/LangToggle';
import { getT } from '@/lib/lang';
import { getUSDRate, formatUSD } from '@/lib/exchange';

export default async function PropertyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id }     = await params;
  const { t, lang } = await getT();
  const [properties, usdRate] = await Promise.all([fetchPreview(), getUSDRate()]);
  const property   = properties.find((p) => p.id === Number(id));
  if (!property) notFound();

  const { street, neighborhood } = parseAddress(property.address);
  const dailyRate  = Math.round(property.pricePerMonth / 30);
  const sqft       = Math.round(property.sqMeters * 10.764);
  const mapsUrl    = `https://maps.google.com/maps?q=${encodeURIComponent(property.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  const waMsg = lang === 'en'
    ? `Hello, I'd like to book the property at ${street}. Could you help me confirm my reservation?`
    : `Hola, me gustaría apartar la propiedad en ${street}. ¿Me pueden ayudar a confirmar mi reserva?`;
  const waMoreUrl = `https://wa.me/525572716417?text=${encodeURIComponent(waMsg)}`;

  return (
    <div style={{ backgroundColor: 'var(--cream)', minHeight: '100vh' }}>
      {/* Navbar */}
      <nav
        className="sticky top-0 z-40 backdrop-blur-md"
        style={{ backgroundColor: 'rgba(28,28,30,0.9)', borderBottom: '1px solid var(--border)' }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-4">
          <Link href="/properties" className="text-sm transition-colors hover:opacity-80" style={{ color: 'var(--muted)' }}>
            {t.backToProps}
          </Link>
          <span style={{ color: 'var(--border)' }}>|</span>
          <Link href="/" className="font-serif font-medium" style={{ color: 'var(--ink)' }}>
            ShortStayMX
          </Link>
          <div className="ml-auto">
            <LangToggle currentLang={lang} className="text-[--muted] hover:text-[--ink]" />
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs tracking-widest uppercase font-medium" style={{ color: 'var(--muted)' }}>
              {property.city}
            </span>
            <span style={{ color: 'var(--border)' }}>·</span>
            <span className="text-xs" style={{ color: 'var(--muted)' }}>{neighborhood}</span>
          </div>
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <h1 className="font-serif text-4xl sm:text-5xl" style={{ color: 'var(--ink)' }}>{street}</h1>
            {property.available ? (
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-900/40 text-emerald-400 self-center">
                ● {t.availableTag}
              </span>
            ) : (
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-red-900/40 text-red-400 self-center">
                ● {t.occupiedBanner}
              </span>
            )}
          </div>
          <p className="text-base mt-2" style={{ color: 'var(--muted)' }}>{property.address}</p>
          {!property.available && property.availableFrom && (
            <p className="text-sm mt-2 font-medium" style={{ color: 'var(--gold)' }}>
              {t.availableFrom(new Date(property.availableFrom + 'T12:00:00').toLocaleDateString(lang === 'en' ? 'en-US' : 'es-MX', { day: 'numeric', month: 'long', year: 'numeric' }))}
            </p>
          )}
        </div>

        {/* Galería */}
        <ImageGallery images={property.images} address={street} />

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Columna izquierda */}
          <div className="lg:col-span-2 space-y-8">

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: t.guests,    value: String(property.maxGuests), sub: null },
                { label: t.bedrooms,  value: String(property.bedrooms),  sub: null },
                { label: t.bathrooms, value: String(property.bathrooms), sub: null },
                { label: `${t.sqm}`, value: String(property.sqMeters),  sub: `${sqft} sqft` },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl p-4 text-center"
                  style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}
                >
                  <p className="text-3xl font-serif" style={{ color: 'var(--ink)' }}>{s.value}</p>
                  <p className="text-xs mt-1 uppercase tracking-widest" style={{ color: 'var(--muted)' }}>{s.label}</p>
                  {s.sub && <p className="text-[10px] mt-0.5" style={{ color: 'var(--muted)' }}>{s.sub}</p>}
                </div>
              ))}
            </div>

            {/* Características */}
            <div className="flex flex-wrap gap-2">
              {property.balcony && (
                <span className="text-xs px-3 py-1.5 rounded-full font-medium bg-emerald-900/40 text-emerald-400">🌿 {t.balcony}</span>
              )}
              {property.petFriendly && (
                <span className="text-xs px-3 py-1.5 rounded-full font-medium bg-amber-900/40 text-amber-400">🐾 {t.petFriendly}</span>
              )}
              {property.parkingSpots > 0 && (
                <span className="text-xs px-3 py-1.5 rounded-full font-medium bg-blue-900/40 text-blue-400">
                  🚗 {t.parking(property.parkingSpots)}
                </span>
              )}
              <span className="text-xs px-3 py-1.5 rounded-full font-medium bg-violet-900/40 text-violet-400">
                📶 {t.wifiLabel} {property.wifiSpeed} Mbps
              </span>
            </div>

            {/* Amenidades */}
            {property.amenities.length > 0 && (
              <div>
                <h2 className="font-serif text-2xl mb-4" style={{ color: 'var(--ink)' }}>{t.amenities}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.amenities.map((a) => (
                    <div
                      key={a}
                      className="flex items-center gap-3 rounded-xl p-3"
                      style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}
                    >
                      <span style={{ color: 'var(--gold)' }}>✓</span>
                      <span className="text-sm capitalize" style={{ color: 'var(--ink)' }}>{a}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tabla de precios */}
            <div>
              <h2 className="font-serif text-2xl mb-1" style={{ color: 'var(--ink)' }}>{t.priceTitle}</h2>
              <p className="text-sm mb-4" style={{ color: 'var(--muted)' }}>
                {t.dailySub(formatMXN(dailyRate))}
              </p>
              <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid var(--border)' }}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: 'var(--card)', borderBottom: '1px solid var(--border)' }}>
                      {[t.nightsCol, t.perNightCol, 'MXN', 'USD'].map((h, i) => (
                        <th
                          key={h}
                          className={`px-4 py-3 text-xs tracking-widest uppercase font-medium ${i === 0 ? 'text-left' : 'text-right'}`}
                          style={{ color: 'var(--muted)' }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[10, 15, 20, 30].map((n) => {
                      const weeks       = Math.ceil(n / 7);
                      const cleaning    = weeks * 500;
                      const rentTotal   = dailyRate * n;
                      const grandTotal  = rentTotal + cleaning;
                      return (
                        <tr key={n} className="transition-colors" style={{ borderBottom: '1px solid var(--border)' }}>
                          <td className="px-4 py-4" style={{ color: 'var(--ink)' }}>
                            {n} {t.nightsCol}
                            {n === 10 && (
                              <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider"
                                style={{ backgroundColor: 'var(--cream)', color: 'var(--muted)' }}>
                                {t.minBadge}
                              </span>
                            )}
                            {n === 30 && (
                              <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider bg-emerald-900/40 text-emerald-400">
                                {t.oneMonthBadge}
                              </span>
                            )}
                          </td>
                          <td className="px-4 py-4 text-right" style={{ color: 'var(--muted)' }}>
                            {formatMXN(dailyRate)}
                          </td>
                          <td className="px-4 py-4 text-right font-semibold"
                            style={{ color: n >= 20 ? 'var(--gold)' : 'var(--ink)' }}>
                            {formatMXN(grandTotal)}
                          </td>
                          <td className="px-4 py-4 text-right text-xs" style={{ color: 'var(--muted)' }}>
                            {formatUSD(grandTotal, usdRate)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <p className="text-xs mt-2" style={{ color: 'var(--muted)' }}>
                * {t.priceFoot}
              </p>
              <p className="text-xs mt-1" style={{ color: 'var(--muted)' }}>
                🧹 {t.cleaningFeeNote}
              </p>

              {/* WhatsApp — disponibilidad agente */}
              <a
                href={waMoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center gap-4 rounded-2xl p-5 transition-colors hover:opacity-90"
                style={{ backgroundColor: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.25)' }}
              >
                <span className="text-3xl">💬</span>
                <div className="flex-1">
                  <p className="font-semibold text-sm" style={{ color: 'var(--ink)' }}>{t.moreThan1Month}</p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>{t.moreThan1MonthSub}</p>
                </div>
                <span className="flex-shrink-0 text-xs font-semibold px-4 py-2 rounded-full text-white hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#25D366' }}>
                  {t.openWA}
                </span>
              </a>

              {/* Contacto especial — 3+ meses */}
              <a
                href={`https://wa.me/525563783517?text=${encodeURIComponent(
                  lang === 'en'
                    ? `Hello, I'm interested in a long-term stay (3+ months) at ${street}. Could you share the special conditions?`
                    : `Hola, me interesa una estancia larga (más de 3 meses) en ${street}. ¿Me pueden compartir las condiciones especiales?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center gap-4 rounded-2xl p-5 transition-colors hover:opacity-90"
                style={{ backgroundColor: 'rgba(180,130,255,0.08)', border: '1px solid rgba(180,130,255,0.25)' }}
              >
                <span className="text-3xl">🏠</span>
                <div className="flex-1">
                  <p className="font-semibold text-sm" style={{ color: 'var(--ink)' }}>{t.longStayTitle}</p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>{t.longStaySub}</p>
                </div>
                <span className="flex-shrink-0 text-xs font-semibold px-4 py-2 rounded-full text-white hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: 'var(--gold)' }}>
                  {t.longStayBtn}
                </span>
              </a>
            </div>

            {/* Google Maps */}
            <div>
              <h2 className="font-serif text-2xl mb-4" style={{ color: 'var(--ink)' }}>{t.locationTitle}</h2>
              <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid var(--border)' }}>
                <iframe
                  src={mapsUrl}
                  width="100%"
                  height="360"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${t.locationTitle} — ${street}`}
                />
              </div>
              <p className="text-xs mt-2" style={{ color: 'var(--muted)' }}>📍 {property.address}</p>
            </div>
          </div>

          {/* Panel lateral */}
          <div className="lg:col-span-1">
            <BookingPanelPreview property={property} />
          </div>
        </div>
      </div>
    </div>
  );
}
