import Link from "next/link";
import { fetchPreview, imageUrl, parseAddress, formatMXN } from "@/types/preview";
import { getT } from "@/lib/lang";
import LangToggle from "@/components/layout/LangToggle";

export const metadata = {
  title: "Furnished rentals in Villa de los Frailes, San Miguel de Allende | ShortStayMX",
  description: "Furnished apartments in Villa de los Frailes and Arcos de San Miguel. Quiet residential area close to the historic center of San Miguel de Allende.",
};

export default async function VillaFrailesPage() {
  const { lang } = await getT();
  const es = lang !== "en";
  const properties = await fetchPreview();
  const colonia = properties.filter(p =>
    p.city === "San Miguel de Allende" &&
    (p.address.toLowerCase().includes("villa de los frailes") ||
     p.address.toLowerCase().includes("fray juan") ||
     p.address.toLowerCase().includes("arcos de san miguel") ||
     p.address.toLowerCase().includes("tanque"))
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
          <p className="text-xs tracking-widest uppercase font-medium mb-3" style={{ color: "var(--gold)" }}>San Miguel de Allende</p>
          <h1 className="font-serif text-5xl sm:text-6xl mb-6" style={{ color: "var(--ink)" }}>Villa de los Frailes</h1>
          <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es ? "Villa de los Frailes es una zona residencial tranquila y exclusiva de San Miguel de Allende, ubicada a pocos minutos del Centro Historico. Con calles tranquilas, casas coloniales y modernas restauradas con jardin y alberca, y un ambiente relajado y muy seguro, es perfecta para quienes quieren la tranquilidad de un barrio residencial sin alejarse de la vibrante vida cultural de San Miguel." : "Villa de los Frailes is a quiet and exclusive residential area of San Miguel de Allende, located just minutes from the Historic Center. With peaceful streets, restored colonial and modern homes with garden and pool, and a relaxed and very safe atmosphere, it is perfect for those who want the tranquility of a residential neighborhood without being far from San Miguel's vibrant cultural life."}
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es ? "Las propiedades en Villa de los Frailes y Arcos de San Miguel suelen ser mas espaciosas que las del Centro Historico, con jardines privados, terrazas y albercas. Muchas tienen vistas panoramicas a la ciudad y los cerros circundantes. Es la zona preferida por familias y jubilados que buscan espacio, privacidad y tranquilidad." : "Properties in Villa de los Frailes and Arcos de San Miguel are typically more spacious than those in the Historic Center, with private gardens, terraces and pools. Many have panoramic views of the city and the surrounding hills. It is the preferred area for families and retirees seeking space, privacy and tranquility."}
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            <strong style={{ color: "var(--ink)" }}>{es ? "Perfil del residente:" : "Resident profile:"}</strong>{" "}
            {es ? "Expatriados retirados, familias y profesionales que buscan tranquilidad, espacio y privacidad cerca del centro historico de San Miguel." : "Retired expats, families and professionals seeking tranquility, space and privacy close to San Miguel's historic center."}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            { icon: "🏡", title_es: "Zona residencial exclusiva", title_en: "Exclusive residential area", desc_es: "Casas y departamentos espaciosos con jardin, alberca y vistas panoramicas a la ciudad", desc_en: "Spacious homes and apartments with garden, pool and panoramic views of the city" },
            { icon: "📍", title_es: "Cerca del centro", title_en: "Close to centro", desc_es: "A pocos minutos caminando del Centro Historico, la Parroquia y todos los restaurantes de San Miguel", desc_en: "Just minutes walking from the Historic Center, the Parroquia and all of San Miguel's restaurants" },
            { icon: "🌄", title_es: "Vistas increibles", title_en: "Amazing views", desc_es: "Vistas panoramicas del paisaje colonial de San Miguel y los cerros que rodean la ciudad", desc_en: "Panoramic views of San Miguel's colonial landscape and the hills surrounding the city" },
          ].map(r => (
            <div key={r.title_es} className="rounded-2xl p-6" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
              <span className="text-3xl mb-3 block">{r.icon}</span>
              <h3 className="font-serif text-lg mb-2" style={{ color: "var(--ink)" }}>{es ? r.title_es : r.title_en}</h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>{es ? r.desc_es : r.desc_en}</p>
            </div>
          ))}
        </div>
        <h2 className="font-serif text-3xl mb-8" style={{ color: "var(--ink)" }}>{es ? "Propiedades en Villa de los Frailes" : "Properties in Villa de los Frailes"}</h2>
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
