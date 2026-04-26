import Link from "next/link";
import { fetchPreview, imageUrl, parseAddress, formatMXN } from "@/types/preview";
import { getT } from "@/lib/lang";
import LangToggle from "@/components/layout/LangToggle";

export const metadata = {
  title: "Furnished rentals in Altabrisa, Merida | ShortStayMX",
  description: "Furnished apartments in Altabrisa, Merida. Modern residential area with top amenities and great connectivity.",
};

export default async function AltabrisaPage() {
  const { lang } = await getT();
  const es = lang !== "en";
  const properties = await fetchPreview();
  const colonia = properties.filter(p =>
    p.city === "Mérida" &&
    (p.address.toLowerCase().includes("altabrisa") ||
     p.address.toLowerCase().includes("montecristo") ||
     p.address.toLowerCase().includes("c. 6") ||
     p.address.toLowerCase().includes("c. 21"))
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
            {es ? "Mérida" : "Merida"}
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl mb-6" style={{ color: "var(--ink)" }}>Altabrisa</h1>
          <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es
              ? "Altabrisa es una de las zonas residenciales mas modernas y completas de Mérida. Con centros comerciales, hospitales privados, restaurantes y excelente infraestructura, es la opcion preferida de familias y profesionales."
              : "Altabrisa is one of the most modern and complete residential areas in Merida. With shopping centers, private hospitals, restaurants and excellent infrastructure, it is the preferred choice for families and professionals."}
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es
              ? "La zona cuenta con el Plaza Altabrisa, hospitales de primer nivel, colegios internacionales y una amplia oferta de restaurantes y servicios. Todo lo que necesitas a pocos minutos."
              : "The area features Plaza Altabrisa, top-tier hospitals, international schools and a wide range of restaurants and services. Everything you need just minutes away."}
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            <strong style={{ color: "var(--ink)" }}>{es ? "Perfil del residente:" : "Resident profile:"}</strong>{" "}
            {es
              ? "Familias, ejecutivos y expatriados que buscan modernidad, seguridad y servicios completos en Mérida."
              : "Families, executives and expats looking for modernity, security and full services in Merida."}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: "🏬",
              title_es: "Plaza Altabrisa", title_en: "Plaza Altabrisa",
              desc_es: "Centro comercial completo con tiendas, restaurantes y cine",
              desc_en: "Full shopping center with stores, restaurants and cinema"
            },
            {
              icon: "🏥",
              title_es: "Servicios de salud", title_en: "Healthcare services",
              desc_es: "Hospitales privados de primer nivel a pocos minutos",
              desc_en: "Top-tier private hospitals just minutes away"
            },
            {
              icon: "🏘️",
              title_es: "Zona moderna", title_en: "Modern area",
              desc_es: "Infraestructura moderna con excelente conectividad vial",
              desc_en: "Modern infrastructure with excellent road connectivity"
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
          {es ? "Propiedades en Altabrisa" : "Properties in Altabrisa"}
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
