import Link from "next/link";
import { fetchPreview, imageUrl, parseAddress, formatMXN } from "@/types/preview";
import { getT } from "@/lib/lang";
import LangToggle from "@/components/layout/LangToggle";

export const metadata = {
  title: "Furnished rentals in Zona Hotelera, Puerto Vallarta | ShortStayMX",
  description: "Furnished apartments in Zona Hotelera, Puerto Vallarta. Beachfront living on Banderas Bay with panoramic ocean views and easy access to the city.",
};

export default async function ZonaHoteleraPVPage() {
  const { lang } = await getT();
  const es = lang !== "en";
  const properties = await fetchPreview();
  const colonia = properties.filter(p =>
    p.city === "Puerto Vallarta" &&
    (p.address.toLowerCase().includes("zona hotelera") ||
     p.address.toLowerCase().includes("francisco medina") ||
     p.address.toLowerCase().includes("las glorias") ||
     p.address.toLowerCase().includes("montessori") ||
     p.address.toLowerCase().includes("palmar de aramara") ||
     p.address.toLowerCase().includes("politecnico") ||
     p.address.toLowerCase().includes("politécnico"))
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
          <p className="text-xs tracking-widest uppercase font-medium mb-3" style={{ color: "var(--gold)" }}>Puerto Vallarta</p>
          <h1 className="font-serif text-5xl sm:text-6xl mb-6" style={{ color: "var(--ink)" }}>Zona Hotelera</h1>
          <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es ? "La Zona Hotelera de Puerto Vallarta se extiende a lo largo del Boulevard Francisco Medina Ascencio, el corredor turistico mas importante de la ciudad. Con hoteles de lujo internacionales, restaurantes de primera, acceso directo a las playas de la Bahia de Banderas y vistas panoramicas al Oceano Pacifico y la Sierra Madre, es el corazon turistico y cosmopolita de Puerto Vallarta." : "Puerto Vallarta's Hotel Zone extends along Boulevard Francisco Medina Ascencio, the city's most important tourist corridor. With international luxury hotels, first-class restaurants, direct access to Banderas Bay beaches and panoramic views of the Pacific Ocean and the Sierra Madre, it is the tourist and cosmopolitan heart of Puerto Vallarta."}
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es ? "Sus condominios y departamentos residenciales ofrecen vistas al mar desde balcones y terrazas amplias, con acceso a las mejores playas de la bahia y a minutos del centro historico, el Malecon y la Zona Romantica. Es perfecta para quienes priorizan la playa, las vistas al mar y tener todo a la mano." : "Its residential condominiums and apartments offer sea views from wide balconies and terraces, with access to the best beaches in the bay and minutes from the historic center, the Malecón and the Romantic Zone. It is perfect for those who prioritize the beach, sea views and having everything within reach."}
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            <strong style={{ color: "var(--ink)" }}>{es ? "Perfil del residente:" : "Resident profile:"}</strong>{" "}
            {es ? "Expatriados y turistas de largo plazo que buscan playa, vistas al Pacifico y la vibrante vida de Puerto Vallarta todo incluido." : "Expats and long-term tourists seeking beach, Pacific views and the vibrant life of Puerto Vallarta all in one."}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            { icon: "🏖️", title_es: "Playas de la bahia", title_en: "Bay beaches", desc_es: "Acceso directo a las hermosas playas de la Bahia de Banderas con aguas tranquilas del Pacifico", desc_en: "Direct access to the beautiful beaches of Banderas Bay with calm Pacific waters" },
            { icon: "🌅", title_es: "Vistas al Pacifico", title_en: "Pacific views", desc_es: "Departamentos con vistas panoramicas al Oceano Pacifico y la Sierra Madre desde la terraza", desc_en: "Apartments with panoramic views of the Pacific Ocean and Sierra Madre from the terrace" },
            { icon: "🍽️", title_es: "Todo a la mano", title_en: "Everything nearby", desc_es: "Restaurantes, supermercados, centros comerciales y todos los servicios en el boulevard principal", desc_en: "Restaurants, supermarkets, shopping centers and all services on the main boulevard" },
          ].map(r => (
            <div key={r.title_es} className="rounded-2xl p-6" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
              <span className="text-3xl mb-3 block">{r.icon}</span>
              <h3 className="font-serif text-lg mb-2" style={{ color: "var(--ink)" }}>{es ? r.title_es : r.title_en}</h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>{es ? r.desc_es : r.desc_en}</p>
            </div>
          ))}
        </div>
        <h2 className="font-serif text-3xl mb-8" style={{ color: "var(--ink)" }}>{es ? "Propiedades en Zona Hotelera" : "Properties in Zona Hotelera"}</h2>
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
