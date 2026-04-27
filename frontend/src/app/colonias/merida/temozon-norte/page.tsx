import Link from "next/link";
import { fetchPreview, imageUrl, parseAddress, formatMXN } from "@/types/preview";
import { getT } from "@/lib/lang";
import LangToggle from "@/components/layout/LangToggle";

export const metadata = {
  title: "Furnished rentals in Temozon Norte, Merida | ShortStayMX",
  description: "Furnished apartments in Temozon Norte, Merida. Exclusive gated communities with luxury amenities north of Merida.",
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
          <Link href="/" className="font-serif font-medium" style={{ color: "var(--ink)" }}>ShortStayMX</Link>
          <div className="ml-auto"><LangToggle currentLang={lang} className="text-[--muted] hover:text-[--ink]" /></div>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-3xl mb-16">
          <p className="text-xs tracking-widest uppercase font-medium mb-3" style={{ color: "var(--gold)" }}>
            {es ? "Mérida" : "Merida"}
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl mb-6" style={{ color: "var(--ink)" }}>Temozon Norte</h1>
          <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es
              ? "Temozon Norte es la zona mas exclusiva al norte de Mérida. Fraccionamientos privados de lujo, residencias amplias, albercas y el Yucatan Country Club hacen de esta area el lugar preferido de la elite meridana y los expatriados."
              : "Temozon Norte is the most exclusive area north of Merida. Luxury private developments, spacious residences, pools and the Yucatan Country Club make this area the preferred place for Merida's elite and expats."}
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es
              ? "La zona ofrece un estilo de vida tranquilo y exclusivo, con acceso al campo de golf, restaurantes de lujo y la mejor calidad de vida de Yucatan, a solo 20 minutos del centro de Mérida."
              : "The area offers a quiet and exclusive lifestyle, with access to the golf course, luxury restaurants and the best quality of life in Yucatan, just 20 minutes from downtown Merida."}
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            <strong style={{ color: "var(--ink)" }}>{es ? "Perfil del residente:" : "Resident profile:"}</strong>{" "}
            {es
              ? "Familias adineradas, ejecutivos y expatriados que buscan exclusividad, seguridad y amplio espacio."
              : "Wealthy families, executives and expats seeking exclusivity, security and ample space."}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: "⛳",
              title_es: "Yucatan Country Club", title_en: "Yucatan Country Club",
              desc_es: "Campo de golf y club de primera en el corazon de la zona",
              desc_en: "Premier golf course and club at the heart of the area"
            },
            {
              icon: "🏡",
              title_es: "Residencias de lujo", title_en: "Luxury residences",
              desc_es: "Casas amplias con jardin, alberca y amenidades completas",
              desc_en: "Spacious homes with garden, pool and full amenities"
            },
            {
              icon: "🔒",
              title_es: "Maxima seguridad", title_en: "Maximum security",
              desc_es: "Fraccionamientos privados con acceso controlado 24/7",
              desc_en: "Private developments with controlled access 24/7"
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
          {es ? "Propiedades en Temozon Norte" : "Properties in Temozon Norte"}
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

