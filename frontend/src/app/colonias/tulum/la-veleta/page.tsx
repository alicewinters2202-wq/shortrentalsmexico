import Link from "next/link";
import { fetchPreview, imageUrl, parseAddress, formatMXN } from "@/types/preview";
import { getT } from "@/lib/lang";
import LangToggle from "@/components/layout/LangToggle";

export const metadata = {
  title: "Furnished rentals in La Veleta, Tulum | ShortStayMX",
  description: "Furnished apartments in La Veleta, Tulum. Residential neighborhood with jungle vibes and easy access to beaches and cenotes.",
};

export default async function LaVeletaPage() {
  const { lang } = await getT();
  const es = lang !== "en";
  const properties = await fetchPreview();
  const colonia = properties.filter(p =>
    p.city === "Tulum" &&
    (p.address.toLowerCase().includes("la veleta") ||
     p.address.toLowerCase().includes("balam") ||
     p.address.toLowerCase().includes("kabah") ||
     p.address.toLowerCase().includes("kukulkan") ||
     p.address.toLowerCase().includes("supermanzana") ||
     p.address.toLowerCase().includes("region 15") ||
     p.address.toLowerCase().includes("akumal"))
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
            {es ? "Tulum" : "Tulum"}
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl mb-6" style={{ color: "var(--ink)" }}>La Veleta</h1>
          <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es
              ? "La Veleta es una de las colonias residenciales con mayor crecimiento en Tulum. Con un ambiente tranquilo, calles rodeadas de selva y nuevos desarrollos modernos, es la opcion preferida para quienes buscan vivir en Tulum a mejor precio."
              : "La Veleta is one of the fastest-growing residential neighborhoods in Tulum. With a peaceful atmosphere, jungle-lined streets and new modern developments, it is the preferred option for those looking to live in Tulum at better prices."}
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es
              ? "La zona ofrece departamentos y casas modernas con albercas y jardines tropicales, a precios mas accesibles que Aldea Zama, pero con la misma esencia del Tulum que enamora a todos."
              : "The area offers modern apartments and houses with pools and tropical gardens, at more accessible prices than Aldea Zama, but with the same essence of Tulum that captivates everyone."}
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            <strong style={{ color: "var(--ink)" }}>{es ? "Perfil del residente:" : "Resident profile:"}</strong>{" "}
            {es
              ? "Nomadas digitales, artistas y expatriados que buscan el ambiente de Tulum a precio accesible."
              : "Digital nomads, artists and expats seeking the Tulum vibe at accessible prices."}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: "🌴",
              title_es: "Ambiente de selva", title_en: "Jungle atmosphere",
              desc_es: "Calles rodeadas de naturaleza y el ambiente unico de Tulum",
              desc_en: "Streets surrounded by nature and Tulum's unique atmosphere"
            },
            {
              icon: "💰",
              title_es: "Mejor precio", title_en: "Better prices",
              desc_es: "Propiedades modernas a precios mas accesibles que la zona hotelera",
              desc_en: "Modern properties at more accessible prices than the hotel zone"
            },
            {
              icon: "🚗",
              title_es: "Todo cerca", title_en: "Everything nearby",
              desc_es: "A minutos de playas, cenotes, restaurantes y el pueblo de Tulum",
              desc_en: "Minutes from beaches, cenotes, restaurants and Tulum town"
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
          {es ? "Propiedades en La Veleta" : "Properties in La Veleta"}
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
