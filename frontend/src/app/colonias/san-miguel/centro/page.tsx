import Link from "next/link";
import { fetchPreview, imageUrl, parseAddress, formatMXN } from "@/types/preview";
import { getT } from "@/lib/lang";
import LangToggle from "@/components/layout/LangToggle";

export const metadata = {
  title: "Furnished rentals in Centro, San Miguel de Allende | ShortStayMX",
  description: "Furnished apartments in Centro, San Miguel de Allende. Colonial architecture, cobblestone streets and world-class cultural life.",
};

export default async function SmaCentroPage() {
  const { lang } = await getT();
  const es = lang !== "en";
  const properties = await fetchPreview();
  const colonia = properties.filter(p =>
    p.city === "San Miguel de Allende" &&
    (p.address.toLowerCase().includes("centro") ||
     p.address.toLowerCase().includes("zona centro") ||
     p.address.toLowerCase().includes("indio triste") ||
     p.address.toLowerCase().includes("relox") ||
     p.address.toLowerCase().includes("montitlan"))
  );
  return (
    <div style={{ backgroundColor: "var(--cream)", minHeight: "100vh" }}>
      <nav className="sticky top-0 z-40 backdrop-blur-md" style={{ backgroundColor: "rgba(28,28,30,0.9)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-4">
          <Link href="/" className="font-serif font-medium" style={{ color: "var(--ink)" }}>ShortStayMX</Link>
          <div className="ml-auto"><LangToggle currentLang={lang} className="text-[--muted] hover:text-[--ink]" /></div>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-3xl mb-16">
          <p className="text-xs tracking-widest uppercase font-medium mb-3" style={{ color: "var(--gold)" }}>
            San Miguel de Allende
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl mb-6" style={{ color: "var(--ink)" }}>Centro Historico</h1>
          <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es
              ? "El Centro Historico de San Miguel de Allende es Patrimonio de la Humanidad por la UNESCO. Sus calles empedradas y arquitectura colonial lo convierten en uno de los lugares mas hermosos de Mexico."
              : "San Miguel de Allende's Historic Center is a UNESCO World Heritage Site. Its cobblestone streets and colonial architecture make it one of the most beautiful places in Mexico."}
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es
              ? "Vivir en el Centro significa estar rodeado de galerias de arte, restaurantes de clase mundial y una vibrante comunidad internacional de artistas y expatriados."
              : "Living in Centro means being surrounded by art galleries, world-class restaurants and a vibrant international community of artists and expats."}
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            <strong style={{ color: "var(--ink)" }}>{es ? "Perfil del residente:" : "Resident profile:"}</strong>{" "}
            {es
              ? "Artistas, escritores, expatriados retirados y profesionales creativos que buscan belleza e inspiracion."
              : "Artists, writers, retired expats and creative professionals seeking beauty and inspiration."}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: "⛪",
              title_es: "Patrimonio UNESCO", title_en: "UNESCO Heritage",
              desc_es: "Centro historico declarado Patrimonio de la Humanidad",
              desc_en: "Historic center declared a UNESCO World Heritage Site"
            },
            {
              icon: "🎨",
              title_es: "Arte y cultura", title_en: "Art and culture",
              desc_es: "Galerias, festivales, musica y una comunidad artistica vibrante",
              desc_en: "Galleries, festivals, music and a vibrant artistic community"
            },
            {
              icon: "🍷",
              title_es: "Gastronomia mundial", title_en: "World-class dining",
              desc_es: "Restaurantes reconocidos internacionalmente en cada esquina",
              desc_en: "Internationally recognized restaurants on every corner"
            },
          ].map(r => (
            <div key={r.title_es} className="rounded-2xl p-6" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
              <span className="text-3xl mb-3 block">{r.icon}</span>
              <h3 className="font-serif text-lg mb-2" style={{ color: "var(--ink)" }}>{es ? r.title_es : r.title_en}</h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>{es ? r.desc_es : r.desc_en}</p>
            </div>
          ))}
        </div>
        <h2 className="font-serif text-3xl mb-8" style={{ color: "var(--ink)" }}>
          {es ? "Propiedades en Centro Historico" : "Properties in Historic Center"}
        </h2>
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
                  <p className="text-xs" style={{ color: "var(--muted)" }}>
                    {p.bedrooms} {es ? "rec" : "bed"} · {p.bathrooms} {es ? "banos" : "bath"} · {p.maxGuests} {es ? "huespedes" : "guests"}
                  </p>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-semibold text-sm" style={{ color: "var(--ink)" }}>{formatMXN(p.pricePerMonth)}</span>
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

