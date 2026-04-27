import Link from "next/link";
import { fetchPreview, imageUrl, parseAddress, formatMXN } from "@/types/preview";
import { getT } from "@/lib/lang";
import LangToggle from "@/components/layout/LangToggle";

export const metadata = {
  title: "Furnished rentals in Providencia, Guadalajara | ShortStayMX",
  description: "Furnished apartments in Providencia, Guadalajara. Quiet and elegant neighborhood with tree-lined streets, great restaurants and central location.",
};

export default async function ProvidenciaPage() {
  const { lang } = await getT();
  const es = lang !== "en";
  const properties = await fetchPreview();
  const colonia = properties.filter(p =>
    p.city === "Guadalajara" &&
    (p.address.toLowerCase().includes("providencia") ||
     p.address.toLowerCase().includes("rio de janeiro"))
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
          <p className="text-xs tracking-widest uppercase font-medium mb-3" style={{ color: "var(--gold)" }}>Guadalajara</p>
          <h1 className="font-serif text-5xl sm:text-6xl mb-6" style={{ color: "var(--ink)" }}>Providencia</h1>
          <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es ? "Providencia es una de las colonias mas tranquilas, elegantes y consolidadas de Guadalajara. Con calles arboladas de grandes ficus y liquidambares, excelentes restaurantes, supermercados de calidad y una ubicacion privilegiada entre el centro historico y las zonas empresariales del norte, Providencia ofrece una calidad de vida excepcional para familias y profesionales que buscan tranquilidad sin alejarse de todo." : "Providencia is one of the most peaceful, elegant and established neighborhoods in Guadalajara. With tree-lined streets of large ficus and liquidambar trees, excellent restaurants, quality supermarkets and a privileged location between the historic center and the business areas to the north, Providencia offers exceptional quality of life for families and professionals seeking tranquility without being far from everything."}
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es ? "La colonia tiene un ambiente de barrio tradicional muy agradable, con plazas, mercados locales y una comunidad muy activa. Los edificios son una mezcla de casas coloniales restauradas y edificios modernos de departamentos, todos con un caracter arquitectonico armonico que le da identidad propia a la colonia." : "The neighborhood has a very pleasant traditional neighborhood atmosphere, with plazas, local markets and a very active community. The buildings are a mix of restored colonial homes and modern apartment buildings, all with a harmonious architectural character that gives the neighborhood its own identity."}
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            <strong style={{ color: "var(--ink)" }}>{es ? "Perfil del residente:" : "Resident profile:"}</strong>{" "}
            {es ? "Familias, profesionales y expatriados que buscan tranquilidad, calidad de vida y un ambiente de barrio autentico en Guadalajara." : "Families, professionals and expats seeking tranquility, quality of life and an authentic neighborhood atmosphere in Guadalajara."}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            { icon: "🌳", title_es: "Calles arboladas", title_en: "Tree-lined streets", desc_es: "Ambiente tranquilo y residencial con amplias calles llenas de arboles centenarios", desc_en: "Quiet residential atmosphere with wide streets full of century-old trees" },
            { icon: "🍽️", title_es: "Buena gastronomia", title_en: "Great dining", desc_es: "Restaurantes de calidad, cafes y bares con buena propuesta gastronomica en la colonia", desc_en: "Quality restaurants, cafes and bars with a good gastronomic offering in the neighborhood" },
            { icon: "📍", title_es: "Ubicacion central", title_en: "Central location", desc_es: "Entre el centro historico de Guadalajara y las zonas empresariales del norte de la ciudad", desc_en: "Between Guadalajara's historic center and the business areas to the north of the city" },
          ].map(r => (
            <div key={r.title_es} className="rounded-2xl p-6" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
              <span className="text-3xl mb-3 block">{r.icon}</span>
              <h3 className="font-serif text-lg mb-2" style={{ color: "var(--ink)" }}>{es ? r.title_es : r.title_en}</h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>{es ? r.desc_es : r.desc_en}</p>
            </div>
          ))}
        </div>
        <h2 className="font-serif text-3xl mb-8" style={{ color: "var(--ink)" }}>{es ? "Propiedades en Providencia" : "Properties in Providencia"}</h2>
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
