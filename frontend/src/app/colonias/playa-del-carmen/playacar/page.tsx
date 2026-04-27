import Link from "next/link";
import { fetchPreview, imageUrl, parseAddress, formatMXN } from "@/types/preview";
import { getT } from "@/lib/lang";
import LangToggle from "@/components/layout/LangToggle";

export const metadata = {
  title: "Furnished rentals in Playacar, Playa del Carmen | ShortStayMX",
  description: "Furnished apartments in Playacar, Playa del Carmen. Private gated community steps from Fifth Avenue and the Caribbean beach with golf course access.",
};

export default async function PlayacarPage() {
  const { lang } = await getT();
  const es = lang !== "en";
  const properties = await fetchPreview();
  const colonia = properties.filter(p =>
    p.city === "Playa del Carmen" &&
    (p.address.toLowerCase().includes("playacar") ||
     p.address.toLowerCase().includes("xaman") ||
     p.address.toLowerCase().includes("colosio") ||
     p.address.toLowerCase().includes("ctm") ||
     p.address.toLowerCase().includes("flamingos") ||
     p.address.toLowerCase().includes("calle 38"))
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
          <p className="text-xs tracking-widest uppercase font-medium mb-3" style={{ color: "var(--gold)" }}>Playa del Carmen</p>
          <h1 className="font-serif text-5xl sm:text-6xl mb-6" style={{ color: "var(--ink)" }}>Playacar</h1>
          <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es ? "Playacar es el fraccionamiento privado mas exclusivo de Playa del Carmen y uno de los mas reconocidos de toda la Riviera Maya. Ubicado en una ubicacion privilegiada junto a la famosa Quinta Avenida y con acceso directo al mar Caribe, ofrece casas y condominios de lujo en un entorno privado y seguro, con campo de golf de 18 hoyos y acceso controlado las 24 horas." : "Playacar is the most exclusive private development in Playa del Carmen and one of the most recognized in the entire Riviera Maya. Located in a privileged location next to the famous Fifth Avenue and with direct access to the Caribbean Sea, it offers luxury homes and condominiums in a private and secure setting, with an 18-hole golf course and 24-hour controlled access."}
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es ? "La ubicacion de Playacar es imbatible: puedes caminar a la Quinta Avenida con sus cientos de restaurantes, tiendas y entretenimiento, al mismo tiempo que disfrutas de la tranquilidad y privacidad de un fraccionamiento residencial exclusivo. Las playas de arena blanca del Caribe estan literalmente a pasos." : "Playacar's location is unbeatable: you can walk to Fifth Avenue with its hundreds of restaurants, shops and entertainment, while enjoying the tranquility and privacy of an exclusive residential development. The white sand beaches of the Caribbean are literally steps away."}
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            <strong style={{ color: "var(--ink)" }}>{es ? "Perfil del residente:" : "Resident profile:"}</strong>{" "}
            {es ? "Expatriados, jubilados y familias que buscan seguridad, playa privada y acceso a la vibrante vida de Playa del Carmen." : "Expats, retirees and families seeking security, private beach access and the vibrant life of Playa del Carmen."}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            { icon: "🏖️", title_es: "Playa privada Caribe", title_en: "Private Caribbean beach", desc_es: "Acceso directo a las playas de arena blanca y aguas turquesas del Mar Caribe", desc_en: "Direct access to the white sand beaches and turquoise waters of the Caribbean Sea" },
            { icon: "🚶", title_es: "Quinta Avenida", title_en: "Fifth Avenue", desc_es: "La calle mas famosa de Playa del Carmen a distancia caminable con restaurantes y vida nocturna", desc_en: "The most famous street in Playa del Carmen within walking distance with restaurants and nightlife" },
            { icon: "🔒", title_es: "Fraccionamiento privado", title_en: "Private development", desc_es: "Seguridad armada 24/7, acceso controlado y campo de golf de 18 hoyos dentro del desarrollo", desc_en: "Armed security 24/7, controlled access and 18-hole golf course within the development" },
          ].map(r => (
            <div key={r.title_es} className="rounded-2xl p-6" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
              <span className="text-3xl mb-3 block">{r.icon}</span>
              <h3 className="font-serif text-lg mb-2" style={{ color: "var(--ink)" }}>{es ? r.title_es : r.title_en}</h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>{es ? r.desc_es : r.desc_en}</p>
            </div>
          ))}
        </div>
        <h2 className="font-serif text-3xl mb-8" style={{ color: "var(--ink)" }}>{es ? "Propiedades en Playacar" : "Properties in Playacar"}</h2>
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
