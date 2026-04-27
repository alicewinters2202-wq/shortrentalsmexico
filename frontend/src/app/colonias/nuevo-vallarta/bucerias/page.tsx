import Link from "next/link";
import { fetchPreview, imageUrl, parseAddress, formatMXN } from "@/types/preview";
import { getT } from "@/lib/lang";
import LangToggle from "@/components/layout/LangToggle";

export const metadata = {
  title: "Furnished rentals in Bucerias, Nuevo Vallarta | ShortStayMX",
  description: "Furnished apartments in Bucerias and Cruz de Huanacaxtle, Riviera Nayarit. Authentic beach town living near Puerto Vallarta.",
};

export default async function BuceriasPage() {
  const { lang } = await getT();
  const es = lang !== "en";
  const properties = await fetchPreview();
  const colonia = properties.filter(p =>
    p.city === "Nuevo Vallarta" &&
    (p.address.toLowerCase().includes("bucerias") ||
     p.address.toLowerCase().includes("bucerías") ||
     p.address.toLowerCase().includes("cruz de huanacaxtle") ||
     p.address.toLowerCase().includes("el tigre") ||
     p.address.toLowerCase().includes("nautico") ||
     p.address.toLowerCase().includes("náutico") ||
     p.address.toLowerCase().includes("jarretaderas") ||
     p.address.toLowerCase().includes("iyari") ||
     p.address.toLowerCase().includes("terralta") ||
     p.address.toLowerCase().includes("bnayar") ||
     p.address.toLowerCase().includes("paseo paraiso") ||
     p.address.toLowerCase().includes("paseo paraíso") ||
     p.address.toLowerCase().includes("mar de cortez"))
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
            {es ? "Nuevo Vallarta" : "Nuevo Vallarta"}
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl mb-6" style={{ color: "var(--ink)" }}>Bucerías</h1>
          <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es
              ? "Bucerías y Cruz de Huanacaxtle son pueblos costeros autenticos de la Riviera Nayarit, a pocos kilometros de Nuevo Vallarta. Con playas tranquilas, restaurantes locales y un ambiente relajado, son el escape perfecto del turismo masivo."
              : "Bucerias and Cruz de Huanacaxtle are authentic coastal towns of the Riviera Nayarit, just a few kilometers from Nuevo Vallarta. With calm beaches, local restaurants and a relaxed atmosphere, they are the perfect escape from mass tourism."}
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es
              ? "La zona ha experimentado un gran crecimiento con nuevos desarrollos residenciales modernos que combinan lo mejor de la vida en pueblo con amenidades de lujo. A 25 minutos del aeropuerto de Puerto Vallarta."
              : "The area has experienced great growth with new modern residential developments that combine the best of village life with luxury amenities. 25 minutes from Puerto Vallarta airport."}
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            <strong style={{ color: "var(--ink)" }}>{es ? "Perfil del residente:" : "Resident profile:"}</strong>{" "}
            {es
              ? "Expatriados, nomadas digitales y jubilados que buscan vida autentica de playa a precio accesible."
              : "Expats, digital nomads and retirees seeking authentic beach life at accessible prices."}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: "🌊",
              title_es: "Playas tranquilas", title_en: "Calm beaches",
              desc_es: "Playas poco concurridas con aguas tranquilas del Pacifico",
              desc_en: "Uncrowded beaches with calm Pacific waters"
            },
            {
              icon: "🏘️",
              title_es: "Ambiente autentico", title_en: "Authentic atmosphere",
              desc_es: "Pueblo costero con restaurantes locales y vida tranquila",
              desc_en: "Coastal town with local restaurants and peaceful life"
            },
            {
              icon: "💰",
              title_es: "Mejor precio", title_en: "Better prices",
              desc_es: "Propiedades de lujo a precios mas accesibles que la zona hotelera",
              desc_en: "Luxury properties at more accessible prices than the hotel zone"
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
          {es ? "Propiedades en Bucerías" : "Properties in Bucerias"}
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

