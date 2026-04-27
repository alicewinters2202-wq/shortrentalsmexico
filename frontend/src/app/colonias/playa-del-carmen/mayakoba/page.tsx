import Link from "next/link";
import { fetchPreview, imageUrl, parseAddress, formatMXN } from "@/types/preview";
import { getT } from "@/lib/lang";
import LangToggle from "@/components/layout/LangToggle";

export const metadata = {
  title: "Furnished rentals in Mayakoba, Playa del Carmen | ShortStayMX",
  description: "Furnished apartments in Mayakoba and Corasol, Playa del Carmen. Ultra-luxury living in the Riviera Maya.",
};

export default async function MayakobaPage() {
  const { lang } = await getT();
  const es = lang !== "en";
  const properties = await fetchPreview();
  const colonia = properties.filter(p =>
    p.city === "Playa del Carmen" &&
    (p.address.toLowerCase().includes("mayakoba") ||
     p.address.toLowerCase().includes("corasol") ||
     p.address.toLowerCase().includes("lagunas de mayakoba") ||
     p.address.toLowerCase().includes("parques") ||
     p.address.toLowerCase().includes("palmara") ||
     p.address.toLowerCase().includes("carretera federal km") ||
     p.address.toLowerCase().includes("307"))
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
            {es ? "Playa del Carmen" : "Playa del Carmen"}
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl mb-6" style={{ color: "var(--ink)" }}>Mayakoba</h1>
          <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es
              ? "Mayakoba es el desarrollo turistico y residencial mas exclusivo de la Riviera Maya. Con hoteles como Rosewood, Banyan Tree y Andaz, campos de golf de clase mundial y lagunas naturales, es el estandar de lujo del Caribe mexicano."
              : "Mayakoba is the most exclusive tourist and residential development in the Riviera Maya. With hotels like Rosewood, Banyan Tree and Andaz, world-class golf courses and natural lagoons, it sets the standard for luxury in the Mexican Caribbean."}
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es
              ? "Los desarrollos residenciales de la zona como Corasol ofrecen departamentos y villas de lujo con acceso a playas privadas, marinas y todos los servicios de un resort de cinco estrellas."
              : "Residential developments in the area like Corasol offer luxury apartments and villas with access to private beaches, marinas and all the services of a five-star resort."}
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            <strong style={{ color: "var(--ink)" }}>{es ? "Perfil del residente:" : "Resident profile:"}</strong>{" "}
            {es
              ? "Ejecutivos, expatriados y jubilados de alto poder adquisitivo que buscan lo mejor del Caribe."
              : "Executives, expats and high-net-worth retirees seeking the best of the Caribbean."}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: "🌿",
              title_es: "Naturaleza y lujo", title_en: "Nature and luxury",
              desc_es: "Lagunas naturales, manglares y playas privadas en un entorno unico",
              desc_en: "Natural lagoons, mangroves and private beaches in a unique setting"
            },
            {
              icon: "⛳",
              title_es: "Golf de clase mundial", title_en: "World-class golf",
              desc_es: "El Camaleon, sede del PGA Tour, dentro del desarrollo",
              desc_en: "El Camaleon, PGA Tour host course, within the development"
            },
            {
              icon: "🏨",
              title_es: "Hoteles iconicos", title_en: "Iconic hotels",
              desc_es: "Rosewood, Banyan Tree y Andaz a pasos de tu residencia",
              desc_en: "Rosewood, Banyan Tree and Andaz steps from your residence"
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
          {es ? "Propiedades en Mayakoba" : "Properties in Mayakoba"}
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

