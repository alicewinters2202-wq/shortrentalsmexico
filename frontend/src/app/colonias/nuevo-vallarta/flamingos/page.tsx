import Link from "next/link";
import { fetchPreview, imageUrl, parseAddress, formatMXN } from "@/types/preview";
import { getT } from "@/lib/lang";
import LangToggle from "@/components/layout/LangToggle";

export const metadata = {
  title: "Furnished rentals in Flamingos, Nuevo Vallarta | ShortStayMX",
  description: "Furnished apartments in Flamingos, Nuevo Vallarta. Beachfront living with Grand Marina, world-class golf course and luxury condominiums on the Mexican Pacific.",
};

export default async function FlamingosPage() {
  const { lang } = await getT();
  const es = lang !== "en";
  const properties = await fetchPreview();
  const colonia = properties.filter(p =>
    p.city === "Nuevo Vallarta" &&
    (p.address.toLowerCase().includes("flamingos") ||
     p.address.toLowerCase().includes("cocoteros") ||
     p.address.toLowerCase().includes("blvd. costero") ||
     p.address.toLowerCase().includes("blvd costero") ||
     p.address.toLowerCase().includes("maritima") ||
     p.address.toLowerCase().includes("marítima") ||
     p.address.toLowerCase().includes("peninsula") ||
     p.address.toLowerCase().includes("península") ||
     p.address.toLowerCase().includes("delfines"))
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
          <p className="text-xs tracking-widest uppercase font-medium mb-3" style={{ color: "var(--gold)" }}>Nuevo Vallarta</p>
          <h1 className="font-serif text-5xl sm:text-6xl mb-6" style={{ color: "var(--ink)" }}>Flamingos</h1>
          <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es ? "Flamingos es la zona mas exclusiva de Nuevo Vallarta y una de las mas premium de toda la Riviera Nayarit. Con condominios de lujo frente al Oceano Pacifico, la Grand Marina con acceso directo al agua para yates, el campo de golf Flamingos de clase mundial y resorts de cinco estrellas, es el destino preferido por quienes buscan lo mejor del Pacifico mexicano." : "Flamingos is the most exclusive area of Nuevo Vallarta and one of the most premium on the entire Riviera Nayarit. With luxury condominiums facing the Pacific Ocean, the Grand Marina with direct water access for yachts, the world-class Flamingos golf course and five-star resorts, it is the preferred destination for those seeking the best of the Mexican Pacific."}
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es ? "Sus torres residenciales ofrecen vistas panoramicas al Oceano Pacifico con albercas infinitas, gimnasios equipados, roof gardens y acceso directo a la playa. A solo 20 minutos del aeropuerto internacional de Puerto Vallarta, Flamingos combina la exclusividad de un resort de lujo con la comodidad de tener todo en tu zona." : "Its residential towers offer panoramic views of the Pacific Ocean with infinity pools, equipped gyms, roof gardens and direct beach access. Just 20 minutes from Puerto Vallarta international airport, Flamingos combines the exclusivity of a luxury resort with the convenience of having everything in your area."}
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            <strong style={{ color: "var(--ink)" }}>{es ? "Perfil del residente:" : "Resident profile:"}</strong>{" "}
            {es ? "Expatriados, jubilados y profesionales que buscan vida frente al Pacifico con amenidades de lujo y exclusividad en la Riviera Nayarit." : "Expats, retirees and professionals seeking Pacific beachfront living with luxury amenities and exclusivity in the Riviera Nayarit."}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            { icon: "🏖️", title_es: "Frente al Pacifico", title_en: "Pacific beachfront", desc_es: "Acceso directo a las playas del Pacifico mexicano con aguas tranquilas perfectas para nadar", desc_en: "Direct access to the beaches of the Mexican Pacific with calm waters perfect for swimming" },
            { icon: "⛵", title_es: "Grand Marina", title_en: "Grand Marina", desc_es: "Marina de clase mundial con capacidad para yates de gran eslora y acceso directo al agua", desc_en: "World-class marina with capacity for large yachts and direct water access" },
            { icon: "⛳", title_es: "Campo de golf", title_en: "Golf course", desc_es: "Campo de golf Flamingos de clase mundial a pasos de los condominios residenciales", desc_en: "World-class Flamingos golf course steps away from the residential condominiums" },
          ].map(r => (
            <div key={r.title_es} className="rounded-2xl p-6" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
              <span className="text-3xl mb-3 block">{r.icon}</span>
              <h3 className="font-serif text-lg mb-2" style={{ color: "var(--ink)" }}>{es ? r.title_es : r.title_en}</h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>{es ? r.desc_es : r.desc_en}</p>
            </div>
          ))}
        </div>
        <h2 className="font-serif text-3xl mb-8" style={{ color: "var(--ink)" }}>{es ? "Propiedades en Flamingos" : "Properties in Flamingos"}</h2>
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
          <p className="text-sm mb-2" style={{ color: "var(--ink)" }}>{es ? "¿Quieres saber mas sobre vivir en Nuevo Vallarta?" : "Want to know more about living in Nuevo Vallarta?"}</p>
          <Link href="/blog/vivir-en-nuevo-vallarta" className="text-sm font-semibold" style={{ color: "var(--gold)" }}>
            {es ? "Lee nuestra guia completa de Nuevo Vallarta →" : "Read our complete guide to Nuevo Vallarta →"}
          </Link>
        </div>
      </div>
    </div>
  );
}
