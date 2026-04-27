import Link from "next/link";
import { fetchPreview, imageUrl, parseAddress, formatMXN } from "@/types/preview";
import { getT } from "@/lib/lang";
import LangToggle from "@/components/layout/LangToggle";

export const metadata = {
  title: "Furnished rentals in Roma Norte, CDMX | ShortStayMX",
  description: "Furnished apartments in Roma Norte, the most vibrant neighborhood in Mexico City.",
};

export default async function RomaNortePage() {
  const { lang } = await getT();
  const es = lang !== "en";
  const properties = await fetchPreview();
  const colonia = properties.filter(p =>
    p.city === "Ciudad de México" &&
    (p.address.toLowerCase().includes("roma") ||
     p.address.toLowerCase().includes("córdoba") ||
     p.address.toLowerCase().includes("cordoba") ||
     p.address.toLowerCase().includes("querétaro") ||
     p.address.toLowerCase().includes("queretaro") ||
     p.address.toLowerCase().includes("sinaloa") ||
     p.address.toLowerCase().includes("jalapa") ||
     p.address.toLowerCase().includes("colima") ||
     p.address.toLowerCase().includes("chihuahua") ||
     p.address.toLowerCase().includes("salamanca"))
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
            {es ? "Ciudad de Mexico" : "Mexico City"}
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl mb-6" style={{ color: "var(--ink)" }}>Roma Norte</h1>
          <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es
              ? "Roma Norte es una de las colonias mas vibrantes y deseadas de la Ciudad de Mexico. Conocida por sus edificios art deco, calles arboladas y una escena gastronomica y cultural de primer nivel."
              : "Roma Norte is one of the most vibrant and sought-after neighborhoods in Mexico City. Known for its art deco buildings, tree-lined streets and a top-tier gastronomic and cultural scene."}
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es
              ? "La colonia cuenta con el Parque Mexico, el Parque Rio de Janeiro, docenas de cafes independientes, galerias de arte y algunos de los restaurantes mas reconocidos de la ciudad."
              : "The neighborhood features Parque Mexico, Parque Rio de Janeiro, dozens of independent cafes, art galleries and some of the most acclaimed restaurants in the city."}
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            <strong style={{ color: "var(--ink)" }}>{es ? "Perfil del residente:" : "Resident profile:"}</strong>{" "}
            {es
              ? "Nomadas digitales, creativos, artistas, expatriados jovenes y profesionales que valoran la cultura y la gastronomia."
              : "Digital nomads, creatives, artists, young expats and professionals who value culture and gastronomy."}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: "☕",
              title_es: "Capital del cafe", title_en: "Coffee capital",
              desc_es: "Decenas de cafes independientes y de especialidad en cada cuadra",
              desc_en: "Dozens of independent and specialty cafes on every block"
            },
            {
              icon: "🎨",
              title_es: "Vida cultural", title_en: "Cultural life",
              desc_es: "Galerias, museos, mercados de arte y eventos culturales todo el ano",
              desc_en: "Galleries, museums, art markets and cultural events year-round"
            },
            {
              icon: "🌳",
              title_es: "Parques increibles", title_en: "Amazing parks",
              desc_es: "Parque Mexico y Parque Rio de Janeiro en el corazon de la colonia",
              desc_en: "Parque Mexico and Parque Rio de Janeiro at the heart of the neighborhood"
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
          {es ? "Propiedades en Roma Norte" : "Properties in Roma Norte"}
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
                    {p.bedrooms} {es ? "rec" : "bed"} · {p.bathrooms} {es ? "baños" : "bath"} · {p.maxGuests} {es ? "huespedes" : "guests"}
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

