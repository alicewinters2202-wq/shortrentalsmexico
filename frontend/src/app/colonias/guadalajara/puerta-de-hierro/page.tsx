import Link from "next/link";
import { fetchPreview, imageUrl, parseAddress, formatMXN } from "@/types/preview";
import { getT } from "@/lib/lang";
import LangToggle from "@/components/layout/LangToggle";

export const metadata = {
  title: "Furnished rentals in Puerta de Hierro, Guadalajara | ShortStayMX",
  description: "Furnished apartments in Puerta de Hierro, Zapopan. The most exclusive area in Guadalajara with luxury amenities.",
};

export default async function PuertaDeHierroPage() {
  const { lang } = await getT();
  const es = lang !== "en";
  const properties = await fetchPreview();
  const colonia = properties.filter(p =>
    p.city === "Guadalajara" &&
    (p.address.toLowerCase().includes("puerta de hierro") ||
     p.address.toLowerCase().includes("acueducto") ||
     p.address.toLowerCase().includes("real acueducto") ||
     p.address.toLowerCase().includes("patria") ||
     p.address.toLowerCase().includes("montevideo") ||
     p.address.toLowerCase().includes("palomar") ||
     p.address.toLowerCase().includes("zapopan"))
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
            {es ? "Guadalajara" : "Guadalajara"}
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl mb-6" style={{ color: "var(--ink)" }}>Puerta de Hierro</h1>
          <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es
              ? "Puerta de Hierro es la zona mas exclusiva de Zapopan y una de las mas prestigiosas de todo el area metropolitana de Guadalajara. Torres residenciales de lujo, centros comerciales premium y una excelente calidad de vida."
              : "Puerta de Hierro is the most exclusive area in Zapopan and one of the most prestigious in the entire Guadalajara metropolitan area. Luxury residential towers, premium shopping centers and an excellent quality of life."}
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es
              ? "La zona cuenta con el Andares Shopping Center, restaurantes de primer nivel, hospitales privados y excelente conectividad con el resto de la ciudad."
              : "The area features Andares Shopping Center, top-tier restaurants, private hospitals and excellent connectivity with the rest of the city."}
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            <strong style={{ color: "var(--ink)" }}>{es ? "Perfil del residente:" : "Resident profile:"}</strong>{" "}
            {es
              ? "Ejecutivos corporativos, familias y expatriados que buscan lo mejor de Guadalajara."
              : "Corporate executives, families and expats looking for the best of Guadalajara."}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: "🏬",
              title_es: "Andares Shopping", title_en: "Andares Shopping",
              desc_es: "El centro comercial mas exclusivo de Guadalajara a pasos",
              desc_en: "The most exclusive shopping center in Guadalajara steps away"
            },
            {
              icon: "🏥",
              title_es: "Servicios de primer nivel", title_en: "Top-tier services",
              desc_es: "Hospitales privados, colegios internacionales y restaurantes de lujo",
              desc_en: "Private hospitals, international schools and luxury restaurants"
            },
            {
              icon: "🔒",
              title_es: "Zona segura", title_en: "Safe area",
              desc_es: "Una de las zonas mas seguras y vigiladas de Guadalajara",
              desc_en: "One of the safest and most monitored areas in Guadalajara"
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
          {es ? "Propiedades en Puerta de Hierro" : "Properties in Puerta de Hierro"}
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
