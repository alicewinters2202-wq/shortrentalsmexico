import Link from "next/link";
import { fetchPreview, imageUrl, parseAddress, formatMXN } from "@/types/preview";
import { getT } from "@/lib/lang";
import LangToggle from "@/components/layout/LangToggle";

export const metadata = {
  title: "Rentas amuebladas en Hipodromo Condesa, CDMX | ShortStayMX",
  description: "Departamentos amueblados en el Hipodromo y Hipodromo Condesa, Ciudad de Mexico. Edificios modernos con alberca, gimnasio y roof garden a mejor precio que Polanco.",
};

export default async function HipodromoPage() {
  const { lang } = await getT();
  const es = lang !== "en";
  const properties = await fetchPreview();
  const colonia = properties.filter(p =>
    p.city === "Ciudad de México" &&
    (p.address.toLowerCase().includes("hipódromo") ||
     p.address.toLowerCase().includes("hipodromo") ||
     p.address.toLowerCase().includes("chicontepec") ||
     p.address.toLowerCase().includes("culiacan") ||
     p.address.toLowerCase().includes("culiacán") ||
     p.address.toLowerCase().includes("celaya") ||
     p.address.toLowerCase().includes("amsterdam") ||
     p.address.toLowerCase().includes("ámsterdam"))
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
          <p className="text-xs tracking-widest uppercase font-medium mb-3" style={{ color: "var(--gold)" }}>{es ? "Ciudad de Mexico" : "Mexico City"}</p>
          <h1 className="font-serif text-5xl sm:text-6xl mb-6" style={{ color: "var(--ink)" }}>Hipodromo Condesa</h1>
          <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es ? "El Hipodromo y el Hipodromo Condesa son colonias tranquilas y residenciales ubicadas entre la Condesa y la Roma. Su ambiente relajado, calles arboladas y excelente conectividad las hacen ideales para quienes buscan vivir en el corazon de CDMX sin el ruido del centro. La zona cuenta con edificios modernos de lujo con amenidades completas a precios mas accesibles que Polanco." : "Hipodromo and Hipodromo Condesa are quiet and residential neighborhoods located between Condesa and Roma. Their relaxed atmosphere, tree-lined streets and excellent connectivity make them ideal for those who want to live in the heart of CDMX without the noise of the center. The area has modern luxury buildings with full amenities at more accessible prices than Polanco."}
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es ? "La ubicacion es privilegiada: a minutos de Roma Norte, Condesa, Reforma y los principales centros de negocios de la ciudad. Los edificios modernos de la zona ofrecen albercas, gimnasios, roof gardens y seguridad privada — las mismas amenidades que en Polanco pero a precios considerablemente mas accesibles. Es la opcion ideal para profesionales y familias que buscan calidad sin pagar de mas." : "The location is privileged: minutes from Roma Norte, Condesa, Reforma and the city's main business centers. The modern buildings in the area offer pools, gyms, roof gardens and private security — the same amenities as in Polanco but at considerably more accessible prices. It is the ideal option for professionals and families who want quality without overpaying."}
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            <strong style={{ color: "var(--ink)" }}>{es ? "Perfil del residente:" : "Resident profile:"}</strong>{" "}
            {es ? "Profesionales jovenes, familias y expatriados que buscan calidad de vida y amenidades completas a buen precio en el corazon de CDMX." : "Young professionals, families and expats seeking quality of life and full amenities at a good price in the heart of CDMX."}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            { icon: "🏊", title_es: "Amenidades completas", title_en: "Full amenities", desc_es: "Edificios modernos con alberca, gimnasio, roof garden y seguridad privada 24 horas", desc_en: "Modern buildings with pool, gym, roof garden and 24-hour private security" },
            { icon: "🏙️", title_es: "Ubicacion central", title_en: "Central location", desc_es: "A minutos de Reforma, Condesa, Roma y los principales centros de negocios de CDMX", desc_en: "Minutes from Reforma, Condesa, Roma and CDMX's main business centers" },
            { icon: "💰", title_es: "Mejor precio/calidad", title_en: "Best value", desc_es: "Departamentos de lujo con todas las amenidades a precios mas accesibles que Polanco", desc_en: "Luxury apartments with all amenities at more accessible prices than Polanco" },
          ].map(r => (
            <div key={r.title_es} className="rounded-2xl p-6" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
              <span className="text-3xl mb-3 block">{r.icon}</span>
              <h3 className="font-serif text-lg mb-2" style={{ color: "var(--ink)" }}>{es ? r.title_es : r.title_en}</h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>{es ? r.desc_es : r.desc_en}</p>
            </div>
          ))}
        </div>
        <h2 className="font-serif text-3xl mb-8" style={{ color: "var(--ink)" }}>{es ? "Propiedades en Hipodromo Condesa" : "Properties in Hipodromo Condesa"}</h2>
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
