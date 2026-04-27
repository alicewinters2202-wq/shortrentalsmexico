import Link from "next/link";
import { fetchPreview, imageUrl, parseAddress, formatMXN } from "@/types/preview";
import { getT } from "@/lib/lang";
import LangToggle from "@/components/layout/LangToggle";

export const metadata = {
  title: "Furnished rentals in Zona Hotelera, Puerto Vallarta | ShortStayMX",
  description: "Furnished apartments in Zona Hotelera, Puerto Vallarta. Beachfront living on the famous Malecon strip.",
};

export default async function ZonaHoteleraPVPage() {
  const { lang } = await getT();
  const es = lang !== "en";
  const properties = await fetchPreview();
  const colonia = properties.filter(p =>
    p.city === "Puerto Vallarta" &&
    (p.address.toLowerCase().includes("zona hotelera") ||
     p.address.toLowerCase().includes("francisco medina") ||
     p.address.toLowerCase().includes("las glorias") ||
     p.address.toLowerCase().includes("montessori") ||
     p.address.toLowerCase().includes("palmar de aramara") ||
     p.address.toLowerCase().includes("politecnico") ||
     p.address.toLowerCase().includes("politécnico"))
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
            {es ? "Puerto Vallarta" : "Puerto Vallarta"}
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl mb-6" style={{ color: "var(--ink)" }}>Zona Hotelera</h1>
          <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es
              ? "La Zona Hotelera de Puerto Vallarta se extiende a lo largo del Boulevard Francisco Medina Ascencio, con hoteles de lujo, restaurantes y acceso directo a las playas de la Bahia de Banderas. El corazon turistico de la ciudad."
              : "Puerto Vallarta's Hotel Zone stretches along Boulevard Francisco Medina Ascencio, with luxury hotels, restaurants and direct access to the beaches of Banderas Bay. The tourist heart of the city."}
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es
              ? "Sus condominios y departamentos ofrecen vistas al mar y acceso a las mejores playas de Puerto Vallarta. A minutos del centro historico, el Malecon y la Zona Romantica."
              : "Its condominiums and apartments offer sea views and access to the best beaches in Puerto Vallarta. Minutes from the historic center, the Malecon and the Romantic Zone."}
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            <strong style={{ color: "var(--ink)" }}>{es ? "Perfil del residente:" : "Resident profile:"}</strong>{" "}
            {es
              ? "Expatriados y turistas de largo plazo que buscan playa, restaurantes y la vibrante vida de Puerto Vallarta."
              : "Expats and long-term tourists seeking beach, restaurants and the vibrant life of Puerto Vallarta."}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: "🏖️",
              title_es: "Playas de la bahia", title_en: "Bay beaches",
              desc_es: "Acceso directo a las playas de la Bahia de Banderas",
              desc_en: "Direct access to the beaches of Banderas Bay"
            },
            {
              icon: "🌅",
              title_es: "Vistas al mar", title_en: "Ocean views",
              desc_es: "Departamentos con vistas panoramicas a la bahia",
              desc_en: "Apartments with panoramic views of the bay"
            },
            {
              icon: "🍽️",
              title_es: "Todo a la mano", title_en: "Everything nearby",
              desc_es: "Restaurantes, supermercados y servicios en el boulevard",
              desc_en: "Restaurants, supermarkets and services on the boulevard"
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

