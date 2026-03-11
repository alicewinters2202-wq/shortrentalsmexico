import Link from 'next/link';
import SearchBar from '@/components/home/SearchBar';
import LangToggle from '@/components/layout/LangToggle';
import ReviewsSection from '@/components/home/ReviewsSection';
import UpcomingDestinations from '@/components/home/UpcomingDestinations';
import ContactForm from '@/components/ContactForm';
import { fetchPreview, imageUrl, parseAddress, formatMXN } from '@/types/preview';
import { getT } from '@/lib/lang';

const CITIES = [
  { name: 'Ciudad de México', label: 'CDMX' },
  { name: 'Guadalajara',      label: 'Guadalajara' },
  { name: 'Monterrey',        label: 'Monterrey' },
  { name: 'Santiago',         label: 'Santiago' },
  { name: 'Chapala',          label: 'Chapala' },
];

export default async function Home() {
  const { t, lang } = await getT();
  const properties  = await fetchPreview();
  const withImages  = properties.filter((p) => p.images.length > 0);
  const featured    = withImages.slice(0, 6);
  const collageProps = withImages.filter((_, i) => [2, 7, 14].includes(i));

  return (
    <>
      {/* ─── HERO ───────────────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[600px] flex flex-col">
        {withImages[0] && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img src={imageUrl(withImages[0].images[0])} alt="Hero"
            className="absolute inset-0 w-full h-full object-cover" />
        )}
        {!withImages[0] && (
          <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-700 to-stone-500" />
        )}
        <div className="absolute inset-0 bg-black/45" />

        {/* Navbar hero */}
        <nav className="relative z-10 flex items-center justify-between px-8 py-6">
          <div className="text-center">
            <p className="text-white text-[10px] tracking-[0.4em] uppercase font-medium opacity-80">ShortStayMX</p>
            <p className="text-white text-[10px] tracking-[0.5em] uppercase font-medium opacity-80">México</p>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/about" className="text-white/70 hover:text-white text-xs transition-colors">
              {t.aboutNav}
            </Link>
            <Link href="/requirements" className="text-white/70 hover:text-white text-xs transition-colors">
              {t.reqNav}
            </Link>
            <Link href="/faq" className="text-white/70 hover:text-white text-xs transition-colors">
              {t.faqNav}
            </Link>
            <LangToggle currentLang={lang} className="text-white/70 hover:text-white" />
          </div>
        </nav>

        {/* Hero content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 text-center gap-8">
          <h1 className="font-serif text-white text-5xl sm:text-6xl md:text-7xl leading-tight max-w-3xl">
            <em>{t.tagline}</em>
            <br />
            <span className="font-normal text-4xl sm:text-5xl md:text-6xl">{t.taglineSub}</span>
          </h1>
          <p className="text-white/70 text-base max-w-md">{t.subheading}</p>
          <SearchBar />
        </div>
      </section>

      {/* ─── CIUDADES ──────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--cream)' }} className="px-6 py-20 max-w-7xl mx-auto">
        <h2 className="font-serif text-3xl mb-2" style={{ color: 'var(--ink)' }}>{t.popularDests}</h2>
        <p className="text-sm mb-10" style={{ color: 'var(--muted)' }}>{t.exploreDests}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CITIES.map((c) => {
            const cityProps = properties.filter((p) => p.city.trim() === c.name);
            const coverImg  = cityProps.find((p) => p.images.length > 0);
            const count     = cityProps.length;
            return (
              <Link key={c.name} href={`/properties?city=${encodeURIComponent(c.name)}`}
                className="group relative overflow-hidden rounded-2xl aspect-[3/2]">
                {coverImg ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img src={imageUrl(coverImg.images[0])} alt={c.label}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-600 group-hover:scale-105 transition-transform duration-500" />
                )}
                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <p className="text-white font-serif text-2xl font-medium">{c.label}</p>
                  <p className="text-white/70 text-sm mt-1">{t.cityTagline(c.name)}</p>
                  <p className="text-white/50 text-xs mt-1">{t.properties(count)}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ─── TAGLINE ────────────────────────────────────────────────────── */}
      <section className="py-20 px-6" style={{ backgroundColor: 'var(--card)' }}>
        <div className="max-w-4xl mx-auto">
          <p className="font-serif text-4xl sm:text-5xl leading-snug mb-6" style={{ color: 'var(--ink)' }}>
            {t.taglineQuote}<em>{t.taglineQuoteEm}</em>
          </p>
          <p className="text-sm max-w-xl" style={{ color: 'var(--muted)' }}>{t.taglineSub2}</p>
        </div>
      </section>

      {/* ─── COLLAGE ────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-3 gap-3 h-72">
          {collageProps.map((p) => {
            const { street } = parseAddress(p.address);
            return (
              <Link key={p.id} href={`/properties/${p.id}`}
                className="group rounded-2xl overflow-hidden relative" style={{ backgroundColor: 'var(--card)' }}>
                {p.images[0] && (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img src={imageUrl(p.images[0])} alt={street}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute inset-0 flex items-end p-4">
                  <span className="text-white text-xs font-medium">{street}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ─── PROPIEDADES DESTACADAS ─────────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--cream)' }} className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-serif text-3xl" style={{ color: 'var(--ink)' }}>{t.featuredProps}</h2>
            <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>{t.totalProps(properties.length)}</p>
          </div>
          <Link href="/properties" style={{ color: 'var(--gold)' }} className="text-sm font-medium hover:underline hidden sm:block">
            {t.viewAll}
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p) => {
            const { street, neighborhood } = parseAddress(p.address);
            return (
              <Link key={p.id} href={`/properties/${p.id}`} className="group block">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden" style={{ backgroundColor: 'var(--card)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={imageUrl(p.images[0])} alt={street}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
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
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="text-white font-serif text-lg leading-tight">{street}</p>
                    <p className="text-white/70 text-xs mt-0.5">{neighborhood}</p>
                  </div>
                </div>
                <div className="mt-3 px-1">
                  <p className="text-xs" style={{ color: 'var(--muted)' }}>
                    {p.bedrooms} {t.rec} · {p.bathrooms} {t.baths} · {p.maxGuests} {t.guestsPlural}
                  </p>
                  <div className="flex gap-1 mt-1.5 flex-wrap">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-violet-900/30 text-violet-400">📶 {p.wifiSpeed} Mbps</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-stone-700/40 text-stone-400">🧹 {t.cleaningFee}</span>
                  </div>
                  <div className="flex items-baseline gap-2 mt-1.5">
                    <span className="font-semibold text-sm" style={{ color: 'var(--ink)' }}>{formatMXN(p.pricePerMonth)}</span>
                    <span className="text-xs" style={{ color: 'var(--muted)' }}>{t.perMonth}</span>
                  </div>
                  <p className="text-[10px] mt-0.5" style={{ color: 'var(--muted)' }}>🧹 +$500 {lang === 'en' ? 'per week (cleaning)' : 'por semana (limpieza)'}</p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/properties"
            className="inline-block px-10 py-3 rounded-full text-sm font-medium tracking-wide transition-colors border border-[var(--border)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--cream)]"
          >
            {t.viewAllBtn}
          </Link>
        </div>
      </section>

      {/* ─── PRÓXIMOS DESTINOS ──────────────────────────────────────────── */}
      <UpcomingDestinations t={t} />

      {/* ─── RESEÑAS + CONTACTO ─────────────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--card)' }} className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Reseñas */}
          <div>
            <ReviewsSection t={t} lang={lang} />
          </div>
          {/* Contacto */}
          <div>
            <h2 className="font-serif text-3xl mb-2" style={{ color: 'var(--ink)' }}>{t.contactTitle}</h2>
            <p className="text-sm mb-10" style={{ color: 'var(--muted)' }}>{t.contactSub}</p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─────────────────────────────────────────────────────── */}
      <footer style={{ borderTop: '1px solid var(--border)' }} className="py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left">
            <p className="font-serif font-medium text-sm" style={{ color: 'var(--ink)' }}>ShortStayMX</p>
            <p className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>
              © {new Date().getFullYear()} ShortStayMX S.A. de C.V. · {t.footerTagline}
            </p>
          </div>
          <div className="flex items-center gap-5 text-xs" style={{ color: 'var(--muted)' }}>
            <Link href="/properties" className="hover:opacity-80 transition-opacity">{t.allProperties}</Link>
            <Link href="/about" className="hover:opacity-80 transition-opacity">{t.aboutNav}</Link>
            <Link href="/requirements" className="hover:opacity-80 transition-opacity">{t.reqNav}</Link>
            <Link href="/faq" className="hover:opacity-80 transition-opacity">{t.faqNav}</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
