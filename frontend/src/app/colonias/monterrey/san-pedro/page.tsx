import Link from "next/link";
import { fetchPreview, imageUrl, parseAddress, formatMXN } from "@/types/preview";
import { getT } from "@/lib/lang";
import LangToggle from "@/components/layout/LangToggle";

export const metadata = {
  title: "Furnished rentals in San Pedro Garza Garcia, Monterrey | ShortStayMX",
  description: "Furnished apartments in San Pedro Garza Garcia, the most exclusive municipality in Monterrey.",
};

export default async function SanPedroPage() {
  const { lang } = await getT();
  const es = lang !== "en";
  const properties = await fetchPreview();
  const colonia = properties.filter(p =>
    p.city === "Monterrey" &&
    (p.address.toLowerCase().includes("san pedro garza") ||
     p.address.toLowerCase().includes("valle del campestre") ||
     p.address.toLowerCase().includes("santa engracia") ||
     p.address.toLowerCase().includes("santa barbara") ||
     p.address.toLowerCase().includes("santa bárbara") ||
     p.address.toLowerCase().includes("valle de san angel") ||
     p.address.toLowerCase().includes("haciendas de la sierra") ||
     p.address.toLowerCase().includes("frida kahlo") ||
     p.address.toLowerCase().includes("notre dame") ||
     p.address.toLowerCase().includes("los nogales") ||
     p.address.toLowerCase().includes("san alberto") ||
     p.address.toLowerCase().includes("margain") ||
     p.address.toLowerCase().includes("lazaro cardenas") ||
     p.address.toLowerCase().includes("lázaro cárdenas") ||
     p.address.toLowerCase().includes("reyes ferreyra"))
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
          <h1 className="font-serif text-5xl sm:text-6xl mb-6" style={{ color: "var(--ink)" }}>San Pedro Garza García</h1>
          <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es
              ? "San Pedro Garza García es el municipio mas exclusivo y prospero del area metropolitana de Monterrey. Con el mayor ingreso per capita de Mexico, alberga las sedes de las principales empresas del pais, centros comerciales de lujo y las mejores zonas residenciales del norte."
              : "San Pedro Garza Garcia is the most exclusive and prosperous municipality in the Monterrey metropolitan area. With the highest per capita income in Mexico, it is home to the headquarters of the country's leading companies, luxury shopping centers and the best residential areas in northern Mexico."}
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es
              ? "Valle Oriente, Valle del Campestre y Santa Engracia son algunas de sus zonas mas codiciadas, con torres corporativas, restaurantes de primer nivel y una excelente calidad de vida."
              : "Valle Oriente, Valle del Campestre and Santa Engracia are some of its most sought-after areas, with corporate towers, top-tier restaurants and an excellent quality of life."}
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            <strong style={{ color: "var(--ink)" }}>{es ? "Perfil del residente:" : "Resident profile:"}</strong>{" "}
            {es
              ? "Ejecutivos corporativos, empresarios, expatriados y familias que buscan lo mejor del norte de Mexico."
              : "Corporate executives, entrepreneurs, expats and families looking for the best of northern Mexico."}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: "🏢",
              title_es: "Zona empresarial", title_en: "Business district",
              desc_es: "Sede de las principales empresas y corporativos de Mexico",
              desc_en: "Home to Mexico's leading companies and corporate headquarters"
            },
            {
              icon: "🛍️",
              title_es: "Comercio de lujo", title_en: "Luxury shopping",
              desc_es: "Centros comerciales premium y boutiques internacionales",
              desc_en: "Premium shopping centers and international boutiques"
            },
            {
              icon: "🔒",
              title_es: "Maxima seguridad", title_en: "Maximum security",
              desc_es: "Una de las zonas mas seguras de todo Mexico",
              desc_en: "One of the safest areas in all of Mexico"
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
          {es ? "Propiedades en San Pedro Garza García" : "Properties in San Pedro Garza Garcia"}
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

