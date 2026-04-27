import Link from "next/link";
import { fetchPreview, imageUrl, parseAddress, formatMXN } from "@/types/preview";
import { getT } from "@/lib/lang";
import LangToggle from "@/components/layout/LangToggle";

export const metadata = {
  title: "Furnished rentals in Polanco, CDMX | ShortStayMX",
  description: "Furnished apartments in Polanco, the most exclusive area of Mexico City.",
};

export default async function PolancoPage() {
  const { lang } = await getT();
  const es = lang !== "en";
  const properties = await fetchPreview();
  const colonia = properties.filter(p =>
    p.city === "Ciudad de México" &&
    (p.address.toLowerCase().includes("polanco") ||
     p.address.toLowerCase().includes("homero") ||
     p.address.toLowerCase().includes("arquimedes") ||
     p.address.toLowerCase().includes("arquímedes") ||
     p.address.toLowerCase().includes("goldsmith") ||
     p.address.toLowerCase().includes("campos elíseos") ||
     p.address.toLowerCase().includes("campos eliseos") ||
     p.address.toLowerCase().includes("blas pascal") ||
     p.address.toLowerCase().includes("juan racine") ||
     p.address.toLowerCase().includes("juan vazquez") ||
     p.address.toLowerCase().includes("juan vázquez"))
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
            {es ? "Ciudad de Mexico" : "Mexico City"}
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl mb-6" style={{ color: "var(--ink)" }}>Polanco</h1>
          <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es
              ? "Polanco es la colonia mas exclusiva de la Ciudad de Mexico. Ubicada en la delegacion Miguel Hidalgo, es hogar de embajadas, hoteles de lujo, restaurantes de clase mundial y boutiques internacionales."
              : "Polanco is the most exclusive neighborhood in Mexico City. Located in the Miguel Hidalgo borough, it is home to embassies, luxury hotels, world-class restaurants and international boutiques."}
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {es
              ? "Vivir en Polanco significa acceso inmediato a Paseo de la Reforma, el Bosque de Chapultepec, el Museo Soumaya y algunos de los mejores restaurantes de America Latina."
              : "Living in Polanco means immediate access to Paseo de la Reforma, Chapultepec Forest, the Soumaya Museum and some of the best restaurants in Latin America."}
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            <strong style={{ color: "var(--ink)" }}>{es ? "Perfil del residente:" : "Resident profile:"}</strong>{" "}
            {es
              ? "Ejecutivos corporativos, diplomaticos, expatriados y parejas que valoran exclusividad y seguridad."
              : "Corporate executives, diplomats, expats and couples who value exclusivity and safety."}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: "🏛️",
              title_es: "Zona mas exclusiva", title_en: "Most exclusive area",
              desc_es: "Embajadas, hoteles 5 estrellas y restaurantes de clase mundial",
              desc_en: "Embassies, 5-star hotels and world-class restaurants"
            },
            {
              icon: "🌳",
              title_es: "Chapultepec a pasos", title_en: "Steps from Chapultepec",
              desc_es: "El bosque urbano mas grande de CDMX a minutos caminando",
              desc_en: "The largest urban forest in CDMX just minutes away on foot"
            },
            {
              icon: "🔒",
              title_es: "Alta seguridad", title_en: "High security",
              desc_es: "Una de las zonas mas seguras y vigiladas de la capital",
              desc_en: "One of the safest and most monitored areas in the city"
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
          {es ? "Propiedades en Polanco" : "Properties in Polanco"}
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

