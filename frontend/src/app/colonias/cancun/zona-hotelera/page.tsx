import Link from "next/link";
import { fetchPreview, imageUrl, parseAddress, formatMXN } from "@/types/preview";
import { getT } from "@/lib/lang";
import LangToggle from "@/components/layout/LangToggle";

export const metadata = {
  title: "Furnished rentals in Zona Hotelera, Cancun | ShortStayMX",
  description: "Furnished apartments in Zona Hotelera, Cancun. Beachfront living with turquoise Caribbean Sea, luxury restaurants and vibrant nightlife on Kukulcan Boulevard.",
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
          <Link href="/colonias" className="text-sm transition-colors hover:opacity-80" style={{ color: "var(--muted)" }}>← Colonias</Link>
          <span style={{ color: "var(--border)" }}>|</span>
          <Link href="/" className="font-serif font-medium" style={{ color: "var(--ink)" }}>ShortStayMX</Link>
          <div className="ml-auto"><LangToggle currentLang={lang} className="text-[--muted] hover:text-[--ink]" /></div>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-3xl mb-16">
          <p className="text-xs tracking-widest uppercase font-medium mb-3" style={{ color: "var(--gold)" }}>{es ? "Cancún" : "Cancun"}</p>
          <h1 className="font-serif text-5xl sm:text-6xl mb-6" style={{ color: "var(--ink)" }}>Zona Hotelera</h1>
          <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es ? "La Zona Hotelera de Cancun es una franja de tierra de 23 kilometros rodeada por el Mar Caribe turquesa y la Laguna Nichupte. Es el corazon turistico y cosmopolita de la ciudad, con las mejores playas del Caribe mexicano, el famoso Boulevard Kukulcan lleno de restaurantes de lujo y vida nocturna vibrante, y vistas al mar desde practicamente cualquier punto." : "Cancun's Hotel Zone is a 23-kilometer strip of land surrounded by turquoise Caribbean Sea and Nichupte Lagoon. It is the tourist and cosmopolitan heart of the city, with the best beaches of the Mexican Caribbean, the famous Kukulcan Boulevard full of luxury restaurants and vibrant nightlife, and sea views from practically any point."}
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es ? "Sus condominios de lujo ofrecen acceso directo a las playas del Caribe, albercas infinitas con vista al mar, gimnasios, spas y todas las comodidades de un resort de cinco estrellas. Vivir en la Zona Hotelera significa tener el mar a pasos y acceso inmediato a los mejores restaurantes y centros comerciales de Cancun como Plaza La Isla y Forum by the Sea." : "Its luxury condominiums offer direct access to the Caribbean beaches, infinity pools with sea views, gyms, spas and all the amenities of a five-star resort. Living in the Hotel Zone means having the sea steps away and immediate access to Cancun's best restaurants and shopping centers like Plaza La Isla and Forum by the Sea."}
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            <strong style={{ color: "var(--ink)" }}>{es ? "Perfil del residente:" : "Resident profile:"}</strong>{" "}
            {es ? "Expatriados, ejecutivos de hoteleria y turismo, y profesionales que buscan vivir frente al Mar Caribe con todas las comodidades." : "Expats, hospitality and tourism executives, and professionals looking to live by the Caribbean Sea with all the amenities."}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            { icon: "🏖️", title_es: "Frente al Caribe", title_en: "Caribbean beachfront", desc_es: "Las mejores playas de arena blanca y aguas turquesas del Caribe mexicano a pasos de tu departamento", desc_en: "The best white sand beaches and turquoise waters of the Mexican Caribbean steps from your apartment" },
            { icon: "🍽️", title_es: "Gastronomia de lujo", title_en: "Luxury dining", desc_es: "Restaurantes de clase mundial y vida nocturna vibrante en el Boulevard Kukulcan", desc_en: "World-class restaurants and vibrant nightlife on Kukulcan Boulevard" },
            { icon: "🛥️", title_es: "Actividades acuaticas", title_en: "Water activities", desc_es: "Snorkel, buceo, navegacion y deportes acuaticos en el Caribe directamente desde tu zona", desc_en: "Snorkeling, diving, sailing and water sports in the Caribbean directly from your area" },
          ].map(r => (
            <div key={r.title_es} className="rounded-2xl p-6" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
              <span className="text-3xl mb-3 block">{r.icon}</span>
              <h3 className="font-serif text-lg mb-2" style={{ color: "var(--ink)" }}>{es ? r.title_es : r.title_en}</h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>{es ? r.desc_es : r.desc_en}</p>
            </div>
          ))}
        </div>
        <h2 className="font-serif text-3xl mb-8" style={{ color: "var(--ink)" }}>{es ? "Propiedades en Zona Hotelera" : "Properties in Zona Hotelera"}</h2>
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
          <p className="text-sm mb-2" style={{ color: "var(--ink)" }}>{es ? "¿Quieres saber mas sobre vivir en Cancun?" : "Want to know more about living in Cancun?"}</p>
          <Link href="/blog/mejores-colonias-cancun" className="text-sm font-semibold" style={{ color: "var(--gold)" }}>
            {es ? "Lee nuestra guia de las mejores zonas de Cancun →" : "Read our guide to the best areas of Cancun →"}
          </Link>
        </div>
      </div>
    </div>
  );
}
