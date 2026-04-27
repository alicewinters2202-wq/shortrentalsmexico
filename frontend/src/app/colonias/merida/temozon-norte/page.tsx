import Link from "next/link";
import { fetchPreview, imageUrl, parseAddress, formatMXN } from "@/types/preview";
import { getT } from "@/lib/lang";
import LangToggle from "@/components/layout/LangToggle";

export const metadata = {
  title: "Furnished rentals in Temozon Norte, Merida | ShortStayMX",
  description: "Furnished apartments in Temozon Norte, Merida. The most exclusive area north of Merida with luxury gated communities, golf course and Yucatan Country Club.",
};

export default async function TemozonNortePage() {
  const { lang } = await getT();
  const es = lang !== "en";
  const properties = await fetchPreview();
  const colonia = properties.filter(p =>
    p.city === "Mérida" &&
    (p.address.toLowerCase().includes("temozon") ||
     p.address.toLowerCase().includes("temozón") ||
     p.address.toLowerCase().includes("yucatan country") ||
     p.address.toLowerCase().includes("komchen") ||
     p.address.toLowerCase().includes("komchén") ||
     p.address.toLowerCase().includes("la ceiba") ||
     p.address.toLowerCase().includes("progreso") ||
     p.address.toLowerCase().includes("merida progreso") ||
     p.address.toLowerCase().includes("mérida progreso") ||
     p.address.toLowerCase().includes("san nicolas") ||
     p.address.toLowerCase().includes("san nicolás"))
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
          <p className="text-xs tracking-widest uppercase font-medium mb-3" style={{ color: "var(--gold)" }}>{es ? "Mérida" : "Merida"}</p>
          <h1 className="font-serif text-5xl sm:text-6xl mb-6" style={{ color: "var(--ink)" }}>Temozon Norte</h1>
          <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es ? "Temozon Norte es la zona mas exclusiva al norte de Merida, donde se concentran los fraccionamientos privados de lujo mas importantes de Yucatan. Con el Yucatan Country Club con campo de golf de 18 hoyos, residencias amplias con jardin y alberca, acceso controlado las 24 horas y una comunidad de altisimo nivel, es el destino premium para quienes buscan lo mejor de Merida sin compromisos." : "Temozon Norte is the most exclusive area north of Merida, where Yucatan's most important luxury private developments are concentrated. With the Yucatan Country Club with an 18-hole golf course, spacious homes with garden and pool, 24-hour controlled access and a very high-end community, it is the premium destination for those seeking the best of Merida without compromise."}
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es ? "La zona ofrece un estilo de vida tranquilo, exclusivo y seguro, con acceso al club de golf, restaurantes de lujo y la mejor calidad de vida de Yucatan. A solo 20-25 minutos del centro de Merida, es perfecta para quienes valoran el espacio, la privacidad y el contacto con la naturaleza tropical yucateca." : "The area offers a quiet, exclusive and safe lifestyle, with access to the golf club, luxury restaurants and the best quality of life in Yucatan. Just 20-25 minutes from downtown Merida, it is perfect for those who value space, privacy and contact with Yucatan's tropical nature."}
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            <strong style={{ color: "var(--ink)" }}>{es ? "Perfil del residente:" : "Resident profile:"}</strong>{" "}
            {es ? "Familias adineradas, ejecutivos de alto nivel y expatriados que buscan exclusividad, espacio, privacidad y el mejor estilo de vida de Merida." : "Wealthy families, senior executives and expats seeking exclusivity, space, privacy and the best lifestyle in Merida."}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            { icon: "⛳", title_es: "Yucatan Country Club", title_en: "Yucatan Country Club", desc_es: "Campo de golf de 18 hoyos, club social y restaurante de primer nivel en el corazon de la zona", desc_en: "18-hole golf course, social club and top-tier restaurant at the heart of the area" },
            { icon: "🏡", title_es: "Residencias de lujo", title_en: "Luxury residences", desc_es: "Casas amplias con jardin tropical, alberca privada y todas las comodidades en fraccionamientos exclusivos", desc_en: "Spacious homes with tropical garden, private pool and all amenities in exclusive private developments" },
            { icon: "🔒", title_es: "Maxima seguridad", title_en: "Maximum security", desc_es: "Fraccionamientos privados con acceso controlado, seguridad armada 24/7 y circuito cerrado", desc_en: "Private developments with controlled access, armed security 24/7 and closed-circuit cameras" },
          ].map(r => (
            <div key={r.title_es} className="rounded-2xl p-6" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
              <span className="text-3xl mb-3 block">{r.icon}</span>
              <h3 className="font-serif text-lg mb-2" style={{ color: "var(--ink)" }}>{es ? r.title_es : r.title_en}</h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>{es ? r.desc_es : r.desc_en}</p>
            </div>
          ))}
        </div>
        <h2 className="font-serif text-3xl mb-8" style={{ color: "var(--ink)" }}>{es ? "Propiedades en Temozon Norte" : "Properties in Temozon Norte"}</h2>
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
