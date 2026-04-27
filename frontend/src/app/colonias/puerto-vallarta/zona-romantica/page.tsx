import Link from "next/link";
import { fetchPreview, imageUrl, parseAddress, formatMXN } from "@/types/preview";
import { getT } from "@/lib/lang";
import LangToggle from "@/components/layout/LangToggle";

export const metadata = {
  title: "Furnished rentals in Zona Romantica, Puerto Vallarta | ShortStayMX",
  description: "Furnished apartments in Zona Romantica, Puerto Vallarta. Cobblestone streets, art galleries, Playa los Muertos and the best restaurants in the most beloved neighborhood.",
};

export default async function ZonaRomanticaPage() {
  const { lang } = await getT();
  const es = lang !== "en";
  const properties = await fetchPreview();
  const colonia = properties.filter(p =>
    p.city === "Puerto Vallarta" &&
    (p.address.toLowerCase().includes("zona romántica") ||
     p.address.toLowerCase().includes("zona romantica") ||
     p.address.toLowerCase().includes("emiliano zapata") ||
     p.address.toLowerCase().includes("basilio badillo") ||
     p.address.toLowerCase().includes("las gaviotas") ||
     p.address.toLowerCase().includes("atun") ||
     p.address.toLowerCase().includes("atún") ||
     p.address.toLowerCase().includes("conchas chinas"))
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
          <p className="text-xs tracking-widest uppercase font-medium mb-3" style={{ color: "var(--gold)" }}>Puerto Vallarta</p>
          <h1 className="font-serif text-5xl sm:text-6xl mb-6" style={{ color: "var(--ink)" }}>Zona Romántica</h1>
          <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es ? "La Zona Romantica es el corazon bohemio, cultural y autentico de Puerto Vallarta. Con sus calles empedradas del siglo XIX, galerias de arte — PV tiene la concentracion de galerias de arte mas alta de Mexico por habitante —, algunos de los mejores restaurantes de la ciudad, la famosa Playa los Muertos y el icónico Muelle de los Muertos, es el barrio mas querido y con mas caracter de toda la ciudad." : "The Romantic Zone is the bohemian, cultural and authentic heart of Puerto Vallarta. With its 19th century cobblestone streets, art galleries — PV has the highest concentration of art galleries per capita in Mexico —, some of the city's best restaurants, the famous Playa los Muertos and the iconic Muelle de los Muertos, it is the most beloved and characterful neighborhood in the entire city."}
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es ? "La Zona Romantica tiene una de las comunidades de expatriados mas establecidas de Puerto Vallarta, con grupos sociales, restaurantes de todas las cocinas del mundo, bares con musica en vivo y eventos culturales frecuentes. Es el lugar donde verdaderamente se siente el alma de Puerto Vallarta." : "The Romantic Zone has one of Puerto Vallarta's most established expat communities, with social groups, restaurants from all world cuisines, bars with live music and frequent cultural events. It is the place where you truly feel the soul of Puerto Vallarta."}
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            <strong style={{ color: "var(--ink)" }}>{es ? "Perfil del residente:" : "Resident profile:"}</strong>{" "}
            {es ? "Artistas, expatriados, nomadas digitales y viajeros de largo plazo que buscan autenticidad, vida cultural y el corazon bohemio de Puerto Vallarta." : "Artists, expats, digital nomads and long-term travelers seeking authenticity, cultural life and the bohemian heart of Puerto Vallarta."}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            { icon: "🎨", title_es: "Arte y cultura", title_en: "Art and culture", desc_es: "La mayor concentracion de galerias de arte de Mexico por habitante con eventos culturales continuos", desc_en: "The highest concentration of art galleries per capita in Mexico with continuous cultural events" },
            { icon: "🏖️", title_es: "Playa los Muertos", title_en: "Playa los Muertos", desc_es: "La playa mas popular y animada de Puerto Vallarta con el Muelle de los Muertos a pasos", desc_en: "Puerto Vallarta's most popular and lively beach with the Muelle de los Muertos steps away" },
            { icon: "🍽️", title_es: "Mejor gastronomia", title_en: "Best gastronomy", desc_es: "Los restaurantes mas premiados e internacionalmente reconocidos de Puerto Vallarta en la zona", desc_en: "Puerto Vallarta's most award-winning and internationally recognized restaurants in the area" },
          ].map(r => (
            <div key={r.title_es} className="rounded-2xl p-6" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
              <span className="text-3xl mb-3 block">{r.icon}</span>
              <h3 className="font-serif text-lg mb-2" style={{ color: "var(--ink)" }}>{es ? r.title_es : r.title_en}</h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>{es ? r.desc_es : r.desc_en}</p>
            </div>
          ))}
        </div>
        <h2 className="font-serif text-3xl mb-8" style={{ color: "var(--ink)" }}>{es ? "Propiedades en Zona Romántica" : "Properties in Romantic Zone"}</h2>
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
          <p className="text-sm mb-2" style={{ color: "var(--ink)" }}>{es ? "¿Quieres saber mas sobre vivir en Puerto Vallarta?" : "Want to know more about living in Puerto Vallarta?"}</p>
          <Link href="/blog/vivir-en-puerto-vallarta" className="text-sm font-semibold" style={{ color: "var(--gold)" }}>
            {es ? "Lee nuestra guia completa de Puerto Vallarta →" : "Read our complete guide to Puerto Vallarta →"}
          </Link>
        </div>
      </div>
    </div>
  );
}
