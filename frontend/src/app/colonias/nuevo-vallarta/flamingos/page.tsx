import Link from "next/link";
import { fetchPreview, imageUrl, parseAddress, formatMXN } from "@/types/preview";
import { getT } from "@/lib/lang";
import LangToggle from "@/components/layout/LangToggle";

export const metadata = {
  title: "Furnished rentals in Flamingos, Nuevo Vallarta | ShortStayMX",
  description: "Furnished apartments in Flamingos, Nuevo Vallarta. Beachfront living with luxury amenities in the Riviera Nayarit.",
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
          <Link href="/" className="font-serif font-medium" style={{ color: "var(--ink)" }}>ShortStayMX</Link>
          <div className="ml-auto"><LangToggle currentLang={lang} className="text-[--muted] hover:text-[--ink]" /></div>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-3xl mb-16">
          <p className="text-xs tracking-widest uppercase font-medium mb-3" style={{ color: "var(--gold)" }}>
            {es ? "Nuevo Vallarta" : "Nuevo Vallarta"}
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl mb-6" style={{ color: "var(--ink)" }}>Flamingos</h1>
          <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es
              ? "Flamingos es la zona mas exclusiva de Nuevo Vallarta, en la Riviera Nayarit. Con acceso directo a la playa, marinas de lujo, campos de golf y complejos residenciales de primer nivel frente al Oceano Pacifico."
              : "Flamingos is the most exclusive area of Nuevo Vallarta, on the Riviera Nayarit. With direct beach access, luxury marinas, golf courses and top-tier residential complexes facing the Pacific Ocean."}
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es
              ? "Sus condominios de lujo cuentan con albercas infinity, gimnasios, roof gardens y acceso a la marina. A solo 20 minutos del aeropuerto de Puerto Vallarta y con toda la infraestructura turistica de la Riviera Nayarit."
              : "Its luxury condominiums feature infinity pools, gyms, roof gardens and marina access. Just 20 minutes from Puerto Vallarta airport and with all the tourist infrastructure of the Riviera Nayarit."}
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            <strong style={{ color: "var(--ink)" }}>{es ? "Perfil del residente:" : "Resident profile:"}</strong>{" "}
            {es
              ? "Expatriados, jubilados y profesionales que buscan vida frente al mar con amenidades de lujo."
              : "Expats, retirees and professionals seeking beachfront living with luxury amenities."}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: "🏖️",
              title_es: "Frente al mar", title_en: "Beachfront",
              desc_es: "Acceso directo a las playas del Pacifico mexicano",
              desc_en: "Direct access to the beaches of the Mexican Pacific"
            },
            {
              icon: "⛵",
              title_es: "Marina de lujo", title_en: "Luxury marina",
              desc_es: "Grand Marina Villas con acceso directo al agua",
              desc_en: "Grand Marina Villas with direct water access"
            },
            {
              icon: "⛳",
              title_es: "Campo de golf", title_en: "Golf course",
              desc_es: "Campo de golf Flamingos de clase mundial a pasos",
              desc_en: "World-class Flamingos golf course steps away"
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
          {es ? "Propiedades en Flamingos" : "Properties in Flamingos"}
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

