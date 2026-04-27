import Link from "next/link";
import { fetchPreview, imageUrl, parseAddress, formatMXN } from "@/types/preview";
import { getT } from "@/lib/lang";
import LangToggle from "@/components/layout/LangToggle";

export const metadata = {
  title: "Furnished rentals in Zona Hotelera, Cancun | ShortStayMX",
  description: "Furnished apartments in Zona Hotelera, Cancun. Beachfront living with access to the best hotels, restaurants and nightlife in the Caribbean.",
};

export default async function ZonaHoteleraPage() {
  const { lang } = await getT();
  const es = lang !== "en";
  const properties = await fetchPreview();
  const colonia = properties.filter(p =>
    p.city === "Cancún" &&
    (p.address.toLowerCase().includes("zona hotelera") ||
     p.address.toLowerCase().includes("kukulcan") ||
     p.address.toLowerCase().includes("kukulkán") ||
     p.address.toLowerCase().includes("bonampak"))
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
            {es ? "Cancún" : "Cancun"}
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl mb-6" style={{ color: "var(--ink)" }}>Zona Hotelera</h1>
          <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es
              ? "La Zona Hotelera de Cancún es una franja de tierra rodeada por el Mar Caribe y la Laguna Nichupté. Con playas de arena blanca, aguas turquesas y acceso a los mejores hoteles y restaurantes del Caribe mexicano."
              : "Cancun's Hotel Zone is a strip of land surrounded by the Caribbean Sea and Nichupte Lagoon. White sand beaches, turquoise waters and access to the best hotels and restaurants in the Mexican Caribbean."}
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es
              ? "Vivir en la Zona Hotelera significa tener el mar a pasos, con acceso inmediato a centros comerciales, restaurantes de clase mundial y la mejor vida nocturna del Caribe."
              : "Living in the Hotel Zone means having the sea steps away, with immediate access to shopping centers, world-class restaurants and the best nightlife in the Caribbean."}
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            <strong style={{ color: "var(--ink)" }}>{es ? "Perfil del residente:" : "Resident profile:"}</strong>{" "}
            {es
              ? "Expatriados, ejecutivos de hotelería y turismo, y profesionales que buscan vivir frente al mar."
              : "Expats, hospitality and tourism executives, and professionals looking to live by the sea."}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: "🏖️",
              title_es: "Frente al mar", title_en: "Beachfront",
              desc_es: "Las mejores playas del Caribe mexicano a pasos de tu departamento",
              desc_en: "The best beaches of the Mexican Caribbean steps from your apartment"
            },
            {
              icon: "🍽️",
              title_es: "Gastronomia de lujo", title_en: "Luxury dining",
              desc_es: "Restaurantes de clase mundial y vida nocturna vibrante en el Blvd Kukulcan",
              desc_en: "World-class restaurants and vibrant nightlife on Blvd Kukulcan"
            },
            {
              icon: "🛥️",
              title_es: "Actividades acuaticas", title_en: "Water activities",
              desc_es: "Snorkel, buceo, navegacion y deportes acuaticos en el Caribe",
              desc_en: "Snorkeling, diving, sailing and water sports in the Caribbean"
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
          {es ? "Propiedades en Zona Hotelera" : "Properties in Zona Hotelera"}
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

