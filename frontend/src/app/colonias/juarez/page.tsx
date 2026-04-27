import Link from "next/link";
import { fetchPreview, imageUrl, parseAddress, formatMXN } from "@/types/preview";
import { getT } from "@/lib/lang";
import LangToggle from "@/components/layout/LangToggle";

export const metadata = {
  title: "Rentas amuebladas en Juarez, CDMX | ShortStayMX",
  description: "Departamentos amueblados en la colonia Juarez, Ciudad de Mexico. Zona centrica en auge a pasos de Reforma, Chapultepec y la Zona Rosa.",
};

export default async function JuarezPage() {
  const { lang } = await getT();
  const es = lang !== "en";
  const properties = await fetchPreview();
  const colonia = properties.filter(p =>
    p.city === "Ciudad de México" &&
    (p.address.toLowerCase().includes("juárez") ||
     p.address.toLowerCase().includes("juarez") ||
     p.address.toLowerCase().includes("reforma") ||
     p.address.toLowerCase().includes("hamburgo") ||
     p.address.toLowerCase().includes("chapultepec") ||
     p.address.toLowerCase().includes("praga") ||
     p.address.toLowerCase().includes("londres"))
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
          <p className="text-xs tracking-widest uppercase font-medium mb-3" style={{ color: "var(--gold)" }}>{es ? "Ciudad de Mexico" : "Mexico City"}</p>
          <h1 className="font-serif text-5xl sm:text-6xl mb-6" style={{ color: "var(--ink)" }}>Juarez</h1>
          <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es ? "La colonia Juarez es una de las zonas con mayor crecimiento y transformacion en la Ciudad de Mexico. Ubicada entre el Paseo de la Reforma y la Zona Rosa, combina edificios modernos de lujo con cafes creativos, restaurantes de autor y una vida nocturna muy activa. Es la colonia en auge de CDMX, donde nuevos desarrollos inmobiliarios estan transformando el paisaje urbano." : "Colonia Juarez is one of the fastest-growing and most transformed areas in Mexico City. Located between Paseo de la Reforma and Zona Rosa, it combines modern luxury buildings with creative cafes, chef-driven restaurants and a very active nightlife. It is CDMX's booming neighborhood, where new real estate developments are transforming the urban landscape."}
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es ? "Su ubicacion privilegiada es su mayor activo: a pasos del Paseo de la Reforma con sus torres corporativas, Chapultepec, el Centro Historico y la Condesa. Esta centralidad maxima la convierte en una de las zonas mejor conectadas de toda la ciudad, perfecta para quienes necesitan moverse por todo CDMX." : "Its privileged location is its greatest asset: steps from Paseo de la Reforma with its corporate towers, Chapultepec, the Historic Center and Condesa. This maximum centrality makes it one of the best-connected areas in the entire city, perfect for those who need to move around all of CDMX."}
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            <strong style={{ color: "var(--ink)" }}>{es ? "Perfil del residente:" : "Resident profile:"}</strong>{" "}
            {es ? "Jovenes profesionales, nomadas digitales y expatriados que buscan centralidad maxima y precio accesible en CDMX." : "Young professionals, digital nomads and expats seeking maximum centrality and accessible prices in CDMX."}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            { icon: "🏙️", title_es: "Maxima centralidad", title_en: "Maximum centrality", desc_es: "A pasos de Reforma, Chapultepec, Centro Historico, Condesa y todas las principales zonas de CDMX", desc_en: "Steps from Reforma, Chapultepec, Historic Center, Condesa and all the main areas of CDMX" },
            { icon: "📈", title_es: "Zona en auge", title_en: "Booming area", desc_es: "Una de las colonias con mayor desarrollo inmobiliario y nuevos proyectos de la ciudad", desc_en: "One of the neighborhoods with the most real estate development and new projects in the city" },
            { icon: "💰", title_es: "Precio accesible", title_en: "Accessible prices", desc_es: "Departamentos modernos de lujo a precios significativamente menores que Polanco o Santa Fe", desc_en: "Modern luxury apartments at significantly lower prices than Polanco or Santa Fe" },
          ].map(r => (
            <div key={r.title_es} className="rounded-2xl p-6" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
              <span className="text-3xl mb-3 block">{r.icon}</span>
              <h3 className="font-serif text-lg mb-2" style={{ color: "var(--ink)" }}>{es ? r.title_es : r.title_en}</h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>{es ? r.desc_es : r.desc_en}</p>
            </div>
          ))}
        </div>
        <h2 className="font-serif text-3xl mb-8" style={{ color: "var(--ink)" }}>{es ? "Propiedades en Juarez" : "Properties in Juarez"}</h2>
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
