import Link from "next/link";
import { fetchPreview, imageUrl, parseAddress, formatMXN } from "@/types/preview";
import { getT } from "@/lib/lang";
import LangToggle from "@/components/layout/LangToggle";

export const metadata = {
  title: "Furnished rentals in Colonia Americana, Guadalajara | ShortStayMX",
  description: "Furnished apartments in Colonia Americana, Guadalajara. Bohemian neighborhood with specialty cafes, Avenida Chapultepec restaurants and vibrant cultural life.",
};

export default async function AmericanaPage() {
  const { lang } = await getT();
  const es = lang !== "en";
  const properties = await fetchPreview();
  const colonia = properties.filter(p =>
    p.city === "Guadalajara" &&
    (p.address.toLowerCase().includes("americana") ||
     p.address.toLowerCase().includes("lafayette") ||
     p.address.toLowerCase().includes("chapultepec") ||
     p.address.toLowerCase().includes("lopez cotilla") ||
     p.address.toLowerCase().includes("lópez cotilla"))
  );
  return (
    <div style={{ backgroundColor: "var(--cream)", minHeight: "100vh" }}>
      <nav className="sticky top-0 z-40 backdrop-blur-md" style={{ backgroundColor: "rgba(28,28,30,0.9)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-4">
          <Link href="/colonias" className="text-sm transition-colors hover:opacity-80" style={{ color: "var(--muted)" }}>← Colonias</Link>
          <span style={{ color: "var(--border)" }}>|</span>
          <Link href="/" className="font-serif font-medium" style={{ color: "var(--ink)" }}>ShortStayMX</Link>
          <div className="ml-auto"><LangToggle currentLang={lang} className="text-[--muted] hover:text-[--ink]" /></div>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-3xl mb-16">
          <p className="text-xs tracking-widest uppercase font-medium mb-3" style={{ color: "var(--gold)" }}>Guadalajara</p>
          <h1 className="font-serif text-5xl sm:text-6xl mb-6" style={{ color: "var(--ink)" }}>Colonia Americana</h1>
          <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es ? "La Colonia Americana es el corazon cultural, bohemio y creativo de Guadalajara. Con cafes de especialidad, galerias de arte, restaurantes creativos, la famosa Avenida Chapultepec llena de bares y restaurantes, y una vibrante vida nocturna, es la zona preferida por jovenes profesionales, nomadas digitales, artistas y creativos que valoran la cultura y la gastronomia por encima de todo." : "Colonia Americana is the cultural, bohemian and creative heart of Guadalajara. With specialty cafes, art galleries, creative restaurants, the famous Avenida Chapultepec full of bars and restaurants, and a vibrant nightlife, it is the preferred area for young professionals, digital nomads, artists and creatives who value culture and gastronomy above all."}
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es ? "La Avenida Chapultepec es el eje de la colonia: varios kilometros de restaurantes, bares, cafes y comercios que crean una atmosfera unica en Guadalajara. Los fines de semana hay mercados artesanales y eventos culturales. La colonia tambien tiene una escena de arte muy activa con galerias, espacios de coworking creativos y talleres de arte." : "Avenida Chapultepec is the backbone of the neighborhood: several kilometers of restaurants, bars, cafes and shops that create a unique atmosphere in Guadalajara. On weekends there are artisan markets and cultural events. The neighborhood also has a very active art scene with galleries, creative coworking spaces and art workshops."}
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            <strong style={{ color: "var(--ink)" }}>{es ? "Perfil del residente:" : "Resident profile:"}</strong>{" "}
            {es ? "Nomadas digitales, creativos, artistas y jovenes profesionales que valoran la cultura, la gastronomia y la vida bohemia." : "Digital nomads, creatives, artists and young professionals who value culture, gastronomy and bohemian life."}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            { icon: "☕", title_es: "Capital del cafe", title_en: "Coffee capital", desc_es: "La mejor escena de cafes de especialidad de Guadalajara con granos de origen y baristas expertos", desc_en: "The best specialty coffee scene in Guadalajara with single-origin beans and expert baristas" },
            { icon: "🍷", title_es: "Av. Chapultepec", title_en: "Av. Chapultepec", desc_es: "La avenida mas vibrante de Guadalajara con decenas de restaurantes, bares y vida nocturna activa", desc_en: "The most vibrant avenue in Guadalajara with dozens of restaurants, bars and active nightlife" },
            { icon: "🎨", title_es: "Vida cultural", title_en: "Cultural life", desc_es: "Galerias, teatro, musica en vivo, mercados artesanales y eventos culturales durante todo el ano", desc_en: "Galleries, theater, live music, artisan markets and cultural events throughout the year" },
          ].map(r => (
            <div key={r.title_es} className="rounded-2xl p-6" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
              <span className="text-3xl mb-3 block">{r.icon}</span>
              <h3 className="font-serif text-lg mb-2" style={{ color: "var(--ink)" }}>{es ? r.title_es : r.title_en}</h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>{es ? r.desc_es : r.desc_en}</p>
            </div>
          ))}
        </div>
        <h2 className="font-serif text-3xl mb-8" style={{ color: "var(--ink)" }}>{es ? "Propiedades en Colonia Americana" : "Properties in Colonia Americana"}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {colonia.length === 0 ? (
            <p style={{ color: "var(--muted)" }}>{es ? "No hay propiedades disponibles actualmente." : "No properties available at the moment."}</p>
          ) : colonia.map(p => {
            const { street, neighborhood } = parseAddress(p.address);
            return (
              <Link key={p.id} href={`/properties/${p.slug}`} className="group block">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden" style={{ backgroundColor: "var(--card)" }}>
                  {p.images[0] && <img src={imageUrl(p.images[0])} alt={street} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="text-white font-serif text-lg">{street}</p>
                    <p className="text-white/70 text-xs">{neighborhood}</p>
                  </div>
                </div>
                <div className="mt-3 px-1">
                  <p className="text-xs" style={{ color: "var(--muted)" }}>{p.bedrooms} {es ? "rec" : "bed"} · {p.bathrooms} {es ? "baños" : "bath"} · {p.maxGuests} {es ? "huespedes" : "guests"}</p>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-semibold text-sm" style={{ color: "var(--ink)" }}>{formatMXN(Math.round(p.pricePerMonth / 30))}</span>
                    <span className="text-xs" style={{ color: "var(--muted)" }}>{es ? "/ noche" : "/ night"}</span>
                    <span className="text-xs" style={{ color: "var(--muted)" }}>·</span>
                    <span className="text-sm" style={{ color: "var(--ink)" }}>{formatMXN(p.pricePerMonth)}</span>
                    <span className="text-xs" style={{ color: "var(--muted)" }}>{es ? "/ mes" : "/ month"}</span>
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
