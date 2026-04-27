import Link from "next/link";
import { fetchPreview, imageUrl, parseAddress, formatMXN } from "@/types/preview";
import { getT } from "@/lib/lang";
import LangToggle from "@/components/layout/LangToggle";

export const metadata = {
  title: "Furnished rentals in La Veleta, Tulum | ShortStayMX",
  description: "Furnished apartments in La Veleta, Tulum. Peaceful residential neighborhood with jungle atmosphere, modern properties and easy access to beaches and cenotes.",
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
          <Link href="/colonias" className="text-sm transition-colors hover:opacity-80" style={{ color: "var(--muted)" }}>← Colonias</Link>
          <span style={{ color: "var(--border)" }}>|</span>
          <Link href="/" className="font-serif font-medium" style={{ color: "var(--ink)" }}>ShortStayMX</Link>
          <div className="ml-auto"><LangToggle currentLang={lang} className="text-[--muted] hover:text-[--ink]" /></div>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-3xl mb-16">
          <p className="text-xs tracking-widest uppercase font-medium mb-3" style={{ color: "var(--gold)" }}>Tulum</p>
          <h1 className="font-serif text-5xl sm:text-6xl mb-6" style={{ color: "var(--ink)" }}>La Veleta</h1>
          <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es ? "La Veleta es una de las colonias residenciales con mayor crecimiento y transformacion en Tulum. Con calles rodeadas de selva maya, un ambiente tranquilo y autentico, y nuevos desarrollos modernos de lujo que ofrecen la combinacion perfecta de naturaleza y confort, es la opcion preferida para quienes buscan el espiritu genuino de Tulum a precios mas accesibles que Aldea Zama o la zona hotelera." : "La Veleta is one of the fastest-growing and most transformed residential neighborhoods in Tulum. With jungle-lined streets, a peaceful and authentic atmosphere, and new modern luxury developments that offer the perfect combination of nature and comfort, it is the preferred option for those seeking the genuine spirit of Tulum at more accessible prices than Aldea Zama or the hotel zone."}
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es ? "La zona ofrece departamentos y casas modernas con albercas, jardines tropicales y vistas a la selva, todo a precios considerablemente mas accesibles. A pocos minutos en coche o bicicleta de las playas, cenotes, restaurantes y el pueblo de Tulum. Es perfecta para quienes quieren vivir en Tulum de forma sostenible sin pagar los precios mas elevados de la zona." : "The area offers modern apartments and houses with pools, tropical gardens and jungle views, all at considerably more accessible prices. Just minutes by car or bicycle from the beaches, cenotes, restaurants and the town of Tulum. It is perfect for those who want to live in Tulum sustainably without paying the highest prices in the area."}
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            <strong style={{ color: "var(--ink)" }}>{es ? "Perfil del residente:" : "Resident profile:"}</strong>{" "}
            {es ? "Nomadas digitales, artistas y expatriados que buscan el ambiente autentico de Tulum con confort moderno a precio accesible." : "Digital nomads, artists and expats seeking Tulum's authentic atmosphere with modern comfort at accessible prices."}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            { icon: "🌴", title_es: "Ambiente de selva", title_en: "Jungle atmosphere", desc_es: "Calles rodeadas de selva maya con el ambiente unico y autentico que hace especial a Tulum", desc_en: "Streets surrounded by Mayan jungle with the unique and authentic atmosphere that makes Tulum special" },
            { icon: "💰", title_es: "Mejor precio", title_en: "Better prices", desc_es: "Propiedades modernas con alberca y jardin a precios considerablemente mas accesibles que la zona hotelera", desc_en: "Modern properties with pool and garden at considerably more accessible prices than the hotel zone" },
            { icon: "🚗", title_es: "Todo cerca", title_en: "Everything nearby", desc_es: "A minutos de playas, cenotes, los mejores restaurantes y el animado pueblo de Tulum", desc_en: "Minutes from beaches, cenotes, the best restaurants and the lively town of Tulum" },
          ].map(r => (
            <div key={r.title_es} className="rounded-2xl p-6" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
              <span className="text-3xl mb-3 block">{r.icon}</span>
              <h3 className="font-serif text-lg mb-2" style={{ color: "var(--ink)" }}>{es ? r.title_es : r.title_en}</h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>{es ? r.desc_es : r.desc_en}</p>
            </div>
          ))}
        </div>
        <h2 className="font-serif text-3xl mb-8" style={{ color: "var(--ink)" }}>{es ? "Propiedades en La Veleta" : "Properties in La Veleta"}</h2>
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
          <p className="text-sm mb-2" style={{ color: "var(--ink)" }}>{es ? "¿Quieres saber mas sobre vivir en Tulum?" : "Want to know more about living in Tulum?"}</p>
          <Link href="/blog/vivir-en-tulum" className="text-sm font-semibold" style={{ color: "var(--gold)" }}>
            {es ? "Lee nuestra guia completa de Tulum →" : "Read our complete guide to Tulum →"}
          </Link>
        </div>
      </div>
    </div>
  );
}
