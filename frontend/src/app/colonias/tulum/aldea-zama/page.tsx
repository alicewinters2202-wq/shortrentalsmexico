import Link from "next/link";
import { fetchPreview, imageUrl, parseAddress, formatMXN } from "@/types/preview";
import { getT } from "@/lib/lang";
import LangToggle from "@/components/layout/LangToggle";

export const metadata = {
  title: "Furnished rentals in Aldea Zama, Tulum | ShortStayMX",
  description: "Furnished apartments in Aldea Zama, Tulum. The most exclusive residential development in Tulum with biophilic architecture, luxury amenities and cenote access.",
};

export default async function AldeaZamaPage() {
  const { lang } = await getT();
  const es = lang !== "en";
  const properties = await fetchPreview();
  const colonia = properties.filter(p =>
    p.city === "Tulum" &&
    (p.address.toLowerCase().includes("aldea zama") ||
     p.address.toLowerCase().includes("av. del parque") ||
     p.address.toLowerCase().includes("tribu chaac") ||
     p.address.toLowerCase().includes("av. coba") ||
     p.address.toLowerCase().includes("coba"))
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
          <h1 className="font-serif text-5xl sm:text-6xl mb-6" style={{ color: "var(--ink)" }}>Aldea Zama</h1>
          <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es ? "Aldea Zama es el desarrollo residencial mas exclusivo y completo de Tulum. Estrategicamente ubicado entre la zona hotelera y el pueblo, concentra la mayor cantidad de condominios modernos de lujo, restaurantes de calidad, cafes con buen WiFi y espacios de coworking de todo Tulum. Sus residencias combinan arquitectura biofílica — profundamente integrada con la naturaleza — con amenidades modernas completas." : "Aldea Zama is the most exclusive and complete residential development in Tulum. Strategically located between the hotel zone and the town, it concentrates the largest number of modern luxury condominiums, quality restaurants, cafes with good WiFi and coworking spaces in all of Tulum. Its residences combine biophilic architecture — deeply integrated with nature — with complete modern amenities."}
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es ? "Vivir en Aldea Zama significa tener acceso en bicicleta a las famosas playas de Tulum en 10 minutos, cenotes naturales a pocos kilometros, los mejores restaurantes de la zona y un ambiente que mezcla perfectamente la selva maya con el confort moderno. Es la primera eleccion para expatriados y nomadas digitales que quieren lo mejor de Tulum sin sacrificar comodidades." : "Living in Aldea Zama means having bicycle access to Tulum's famous beaches in 10 minutes, natural cenotes just a few kilometers away, the best restaurants in the area and an atmosphere that perfectly blends the Mayan jungle with modern comfort. It is the first choice for expats and digital nomads who want the best of Tulum without sacrificing amenities."}
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            <strong style={{ color: "var(--ink)" }}>{es ? "Perfil del residente:" : "Resident profile:"}</strong>{" "}
            {es ? "Nomadas digitales, expatriados y profesionales creativos que buscan naturaleza, lujo y el estilo de vida unico de Tulum con todas las comodidades modernas." : "Digital nomads, expats and creative professionals seeking nature, luxury and Tulum's unique lifestyle with all modern amenities."}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            { icon: "🌿", title_es: "Arquitectura biofílica", title_en: "Biophilic architecture", desc_es: "Condominios integrados con la selva maya con jardines tropicales y acceso a cenotes naturales", desc_en: "Condominiums integrated with the Mayan jungle with tropical gardens and access to natural cenotes" },
            { icon: "🏊", title_es: "Amenidades de lujo", title_en: "Luxury amenities", desc_es: "Albercas, gimnasios equipados, jardines tropicales y seguridad privada en entorno natural unico", desc_en: "Pools, equipped gyms, tropical gardens and private security in a unique natural setting" },
            { icon: "🚴", title_es: "A minutos de la playa", title_en: "Minutes from the beach", desc_es: "10 minutos en bicicleta a las famosas playas de la zona hotelera de Tulum consideradas entre las mejores del mundo", desc_en: "10 minutes by bike to Tulum's famous hotel zone beaches considered among the best in the world" },
          ].map(r => (
            <div key={r.title_es} className="rounded-2xl p-6" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
              <span className="text-3xl mb-3 block">{r.icon}</span>
              <h3 className="font-serif text-lg mb-2" style={{ color: "var(--ink)" }}>{es ? r.title_es : r.title_en}</h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>{es ? r.desc_es : r.desc_en}</p>
            </div>
          ))}
        </div>
        <h2 className="font-serif text-3xl mb-8" style={{ color: "var(--ink)" }}>{es ? "Propiedades en Aldea Zama" : "Properties in Aldea Zama"}</h2>
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
