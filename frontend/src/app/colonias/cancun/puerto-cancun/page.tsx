import Link from "next/link";
import { fetchPreview, imageUrl, parseAddress, formatMXN } from "@/types/preview";
import { getT } from "@/lib/lang";
import LangToggle from "@/components/layout/LangToggle";

export const metadata = {
  title: "Furnished rentals in Puerto Cancun | ShortStayMX",
  description: "Furnished apartments in Puerto Cancun. The most exclusive marina development in Cancun with world-class golf course, luxury towers and 24-hour security.",
};

export default async function PuertoCancunPage() {
  const { lang } = await getT();
  const es = lang !== "en";
  const properties = await fetchPreview();
  const colonia = properties.filter(p =>
    p.city === "Cancún" &&
    (p.address.toLowerCase().includes("puerto cancún") ||
     p.address.toLowerCase().includes("puerto cancun") ||
     p.address.toLowerCase().includes("puerto juarez") ||
     p.address.toLowerCase().includes("puerto juárez") ||
     p.address.toLowerCase().includes("puerto márquez") ||
     p.address.toLowerCase().includes("puerto marquez"))
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
          <h1 className="font-serif text-5xl sm:text-6xl mb-6" style={{ color: "var(--ink)" }}>Puerto Cancún</h1>
          <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es ? "Puerto Cancun es el desarrollo marina mas moderno y exclusivo de Cancun. Disenado especificamente para residentes de alto nivel que buscan privacidad, exclusividad y amenidades de clase mundial, cuenta con una marina capaz de albergar yates de hasta 200 pies, un campo de golf de 18 hoyos disenado por Tom Weiskopf, torres residenciales con acabados de lujo y acceso controlado 24 horas." : "Puerto Cancun is the most modern and exclusive marina development in Cancun. Designed specifically for high-end residents seeking privacy, exclusivity and world-class amenities, it features a marina capable of accommodating yachts up to 200 feet, an 18-hole golf course designed by Tom Weiskopf, residential towers with luxury finishes and 24-hour controlled access."}
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es ? "Las torres residenciales de Puerto Cancun ofrecen vistas panoramicas tanto al Mar Caribe como a la Laguna Nichupte. Los departamentos cuentan con acabados de lujo, cocinas equipadas con electrodomesticos de gama alta, terrazas amplias y acceso a amenidades de primer nivel: albercas, gimnasios, salones de usos multiples, business center y seguridad privada las 24 horas." : "The residential towers of Puerto Cancun offer panoramic views of both the Caribbean Sea and Nichupte Lagoon. The apartments feature luxury finishes, kitchens equipped with high-end appliances, spacious terraces and access to top-tier amenities: pools, gyms, multipurpose rooms, business center and 24-hour private security."}
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            <strong style={{ color: "var(--ink)" }}>{es ? "Perfil del residente:" : "Resident profile:"}</strong>{" "}
            {es ? "Ejecutivos, expatriados y familias que buscan exclusividad, privacidad, seguridad y vistas al mar en el desarrollo mas premium de Cancun." : "Executives, expats and families seeking exclusivity, privacy, security and sea views in Cancun's most premium development."}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            { icon: "⛵", title_es: "Marina de clase mundial", title_en: "World-class marina", desc_es: "Marina con capacidad para yates de hasta 200 pies y acceso directo a la Laguna Nichupte", desc_en: "Marina with capacity for yachts up to 200 feet and direct access to Nichupte Lagoon" },
            { icon: "⛳", title_es: "Campo de golf Tom Weiskopf", title_en: "Tom Weiskopf golf course", desc_es: "Campo de golf de 18 hoyos disenado por el legendario arquitecto Tom Weiskopf", desc_en: "18-hole golf course designed by legendary architect Tom Weiskopf" },
            { icon: "🔒", title_es: "Maxima seguridad", title_en: "Maximum security", desc_es: "Desarrollo privado con acceso controlado, seguridad armada 24/7 y circuito cerrado", desc_en: "Private development with controlled access, armed security 24/7 and closed circuit cameras" },
          ].map(r => (
            <div key={r.title_es} className="rounded-2xl p-6" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
              <span className="text-3xl mb-3 block">{r.icon}</span>
              <h3 className="font-serif text-lg mb-2" style={{ color: "var(--ink)" }}>{es ? r.title_es : r.title_en}</h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>{es ? r.desc_es : r.desc_en}</p>
            </div>
          ))}
        </div>
        <h2 className="font-serif text-3xl mb-8" style={{ color: "var(--ink)" }}>{es ? "Propiedades en Puerto Cancún" : "Properties in Puerto Cancun"}</h2>
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
