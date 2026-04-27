import Link from "next/link";
import { fetchPreview, imageUrl, parseAddress, formatMXN } from "@/types/preview";
import { getT } from "@/lib/lang";
import LangToggle from "@/components/layout/LangToggle";

export const metadata = {
  title: "Furnished rentals in Centro, Merida | ShortStayMX",
  description: "Furnished apartments in Centro, Merida. Colonial architecture, traditional markets, Yucatecan gastronomy and the best cultural life in the White City.",
};

export default async function MeridaCentroPage() {
  const { lang } = await getT();
  const es = lang !== "en";
  const properties = await fetchPreview();
  const colonia = properties.filter(p =>
    p.city === "Mérida" &&
    (p.address.toLowerCase().includes("centro") ||
     p.address.toLowerCase().includes("parque santiago") ||
     p.address.toLowerCase().includes("san ramon") ||
     p.address.toLowerCase().includes("san ramón") ||
     p.address.toLowerCase().includes("c. 61") ||
     p.address.toLowerCase().includes("c. 27") ||
     p.address.toLowerCase().includes("c. 33") ||
     p.address.toLowerCase().includes("c. 23"))
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
          <p className="text-xs tracking-widest uppercase font-medium mb-3" style={{ color: "var(--gold)" }}>{es ? "Mérida" : "Merida"}</p>
          <h1 className="font-serif text-5xl sm:text-6xl mb-6" style={{ color: "var(--ink)" }}>Centro</h1>
          <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es ? "El Centro de Merida es el corazon historico y cultural de la Ciudad Blanca. Con sus casonas coloniales del siglo XVI y XVII perfectamente conservadas, la Plaza Grande con su Catedral de San Ildefonso, el famoso Paseo de Montejo conocido como el Champs-Elysees mexicano, mercados tradicionales llenos de vida y una gastronomia yucateca sin igual en el mundo, es uno de los centros historicos mas vivos y autenticos de Mexico." : "Merida's Centro is the historic and cultural heart of the White City. With its perfectly preserved 16th and 17th century colonial mansions, the Plaza Grande with its Cathedral of San Ildefonso, the famous Paseo de Montejo known as the Mexican Champs-Élysées, traditional markets full of life and a Yucatecan gastronomy unmatched in the world, it is one of the most vibrant and authentic historic centers in Mexico."}
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es ? "Vivir en el Centro de Merida significa acceso a pie a todo: los mejores restaurantes de cocina yucateca, el Mercado Lucas de Galvez con sus ingredientes locales, los museos, las galerias de arte, los parques y la animada vida cultural de la ciudad. Los fines de semana hay espectaculos en el Zocalo y en los parques del Centro." : "Living in Merida's Centro means walking access to everything: the best Yucatecan cuisine restaurants, the Lucas de Galvez market with its local ingredients, the museums, art galleries, parks and the city's lively cultural life. On weekends there are shows at the main square and in the Centro's parks."}
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            <strong style={{ color: "var(--ink)" }}>{es ? "Perfil del residente:" : "Resident profile:"}</strong>{" "}
            {es ? "Expatriados, nomadas digitales y profesionales que buscan cultura, gastronomia autentica y vida colonial en la Ciudad Blanca." : "Expats, digital nomads and professionals seeking culture, authentic gastronomy and colonial life in the White City."}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            { icon: "🏛️", title_es: "Arquitectura colonial", title_en: "Colonial architecture", desc_es: "Casonas del siglo XVI y XVII perfectamente conservadas y algunas transformadas en boutique hotels", desc_en: "16th and 17th century mansions perfectly preserved and some transformed into boutique hotels" },
            { icon: "🍽️", title_es: "Cocina yucateca", title_en: "Yucatecan cuisine", desc_es: "La mejor gastronomia del sureste mexicano con cochinita pibil, sopa de lima y panuchos a tu puerta", desc_en: "The best gastronomy of southeastern Mexico with cochinita pibil, lime soup and panuchos at your door" },
            { icon: "🎭", title_es: "Vida cultural", title_en: "Cultural life", desc_es: "Festivales, musica en vivo, teatro, exposiciones y eventos culturales durante todo el ano", desc_en: "Festivals, live music, theater, exhibitions and cultural events throughout the year" },
          ].map(r => (
            <div key={r.title_es} className="rounded-2xl p-6" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
              <span className="text-3xl mb-3 block">{r.icon}</span>
              <h3 className="font-serif text-lg mb-2" style={{ color: "var(--ink)" }}>{es ? r.title_es : r.title_en}</h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>{es ? r.desc_es : r.desc_en}</p>
            </div>
          ))}
        </div>
        <h2 className="font-serif text-3xl mb-8" style={{ color: "var(--ink)" }}>{es ? "Propiedades en Centro" : "Properties in Centro"}</h2>
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
        <div className="mt-12 p-6 rounded-2xl" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
          <p className="text-sm mb-2" style={{ color: "var(--ink)" }}>{es ? "¿Quieres saber mas sobre vivir en Merida?" : "Want to know more about living in Merida?"}</p>
          <Link href="/blog/vivir-en-merida" className="text-sm font-semibold" style={{ color: "var(--gold)" }}>
            {es ? "Lee nuestra guia completa de Merida →" : "Read our complete guide to Merida →"}
          </Link>
        </div>
      </div>
    </div>
  );
}
