import Link from "next/link";
import { fetchPreview, imageUrl, parseAddress, formatMXN } from "@/types/preview";
import { getT } from "@/lib/lang";
import LangToggle from "@/components/layout/LangToggle";

export const metadata = {
  title: "Furnished rentals in Valle Oriente, Monterrey | ShortStayMX",
  description: "Furnished apartments in Valle Oriente, Monterrey. Modern corporate and residential hub with luxury amenities.",
};

export default async function ValleOrientePage() {
  const { lang } = await getT();
  const es = lang !== "en";
  const properties = await fetchPreview();
  const colonia = properties.filter(p =>
    p.city === "Monterrey" &&
    (p.address.toLowerCase().includes("valle oriente") ||
     p.address.toLowerCase().includes("del paseo residencial") ||
     p.address.toLowerCase().includes("alfonso reyes") ||
     p.address.toLowerCase().includes("nuevo obispado") ||
     p.address.toLowerCase().includes("cumbres") ||
     p.address.toLowerCase().includes("washington") ||
     p.address.toLowerCase().includes("dinastia") ||
     p.address.toLowerCase().includes("dinastía") ||
     p.address.toLowerCase().includes("hidalgo y costilla"))
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
            {es ? "Monterrey" : "Monterrey"}
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl mb-6" style={{ color: "var(--ink)" }}>Valle Oriente</h1>
          <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es
              ? "Valle Oriente es el corredor empresarial y residencial mas moderno de Monterrey. Con torres de oficinas, hoteles de lujo, centros comerciales y departamentos de alto nivel, es el epicentro de los negocios del norte de Mexico."
              : "Valle Oriente is the most modern business and residential corridor in Monterrey. With office towers, luxury hotels, shopping centers and high-end apartments, it is the epicenter of business in northern Mexico."}
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es
              ? "La zona cuenta con Multiplaza Arboleda, decenas de restaurantes de primer nivel y una excelente conectividad con todo el area metropolitana de Monterrey."
              : "The area features Multiplaza Arboleda, dozens of top-tier restaurants and excellent connectivity throughout the Monterrey metropolitan area."}
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            <strong style={{ color: "var(--ink)" }}>{es ? "Perfil del residente:" : "Resident profile:"}</strong>{" "}
            {es
              ? "Ejecutivos, profesionales y expatriados que buscan estar en el corazon empresarial de Monterrey."
              : "Executives, professionals and expats looking to be at the heart of Monterrey's business scene."}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: "🏙️",
              title_es: "Corredor empresarial", title_en: "Business corridor",
              desc_es: "El hub corporativo mas importante del norte de Mexico",
              desc_en: "The most important corporate hub in northern Mexico"
            },
            {
              icon: "🛍️",
              title_es: "Multiplaza Arboleda", title_en: "Multiplaza Arboleda",
              desc_es: "Centro comercial premium con las mejores tiendas y restaurantes",
              desc_en: "Premium shopping center with the best stores and restaurants"
            },
            {
              icon: "🚗",
              title_es: "Excelente conectividad", title_en: "Excellent connectivity",
              desc_es: "Acceso rapido a toda el area metropolitana de Monterrey",
              desc_en: "Quick access to the entire Monterrey metropolitan area"
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
          {es ? "Propiedades en Valle Oriente" : "Properties in Valle Oriente"}
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

