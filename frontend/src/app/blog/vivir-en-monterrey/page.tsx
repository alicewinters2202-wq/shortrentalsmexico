import Link from 'next/link';
import { getT } from '@/lib/lang';
import LangToggle from '@/components/layout/LangToggle';

export const metadata = {
  title: 'Vivir en Monterrey: Guía para ejecutivos y expatriados | ShortStayMX',
  description: 'Todo sobre vivir en Monterrey: San Pedro Garza García, Valle Oriente, nearshoring, costos y la comunidad de expatriados en la capital industrial de México.',
};

export default async function ViviriEnMonterrey() {
  const { lang } = await getT();
  const es = lang !== 'en';
  return (
    <div style={{ backgroundColor: 'var(--cream)', minHeight: '100vh' }}>
      <nav className="sticky top-0 z-40 backdrop-blur-md" style={{ backgroundColor: 'rgba(28,28,30,0.9)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-4">
          <Link href="/blog" className="text-sm transition-colors hover:opacity-80" style={{ color: 'var(--muted)' }}>← Blog</Link>
          <span style={{ color: 'var(--border)' }}>|</span>
          <Link href="/" className="font-serif font-medium" style={{ color: 'var(--ink)' }}>ShortStayMX</Link>
          <div className="ml-auto"><LangToggle currentLang={lang} className="text-[--muted] hover:text-[--ink]" /></div>
        </div>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-xs tracking-widest uppercase font-medium mb-4" style={{ color: 'var(--gold)' }}>Monterrey</p>
        <h1 className="font-serif text-4xl sm:text-5xl mb-6 leading-tight" style={{ color: 'var(--ink)' }}>
          {es ? 'Vivir en Monterrey: Guía para ejecutivos y expatriados' : 'Living in Monterrey: Guide for executives and expats'}
        </h1>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Monterrey es la capital industrial y empresarial de México. Con el mayor ingreso per cápita del país, una infraestructura de primer nivel, la mejor conectividad aérea con Estados Unidos y una comunidad de negocios muy activa impulsada por el boom del nearshoring, Monterrey es el destino preferido por ejecutivos internacionales y profesionales que vienen a trabajar en las grandes corporaciones del norte de México.' : 'Monterrey is the industrial and business capital of Mexico. With the highest per capita income in the country, first-class infrastructure, the best air connectivity with the United States and a very active business community driven by the nearshoring boom, Monterrey is the preferred destination for international executives and professionals who come to work at the major corporations of northern Mexico.'}
          </p>

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'El boom del nearshoring' : 'The nearshoring boom'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Monterrey vive un boom de nearshoring sin precedentes. Cientos de empresas internacionales — principalmente estadounidenses — han establecido o expandido operaciones en la ciudad, atrayendo a miles de ejecutivos y profesionales extranjeros. Esto ha generado una demanda muy alta de rentas temporales de calidad, especialmente en San Pedro Garza García y Valle Oriente.' : 'Monterrey is experiencing an unprecedented nearshoring boom. Hundreds of international companies — mainly American — have established or expanded operations in the city, attracting thousands of foreign executives and professionals. This has generated very high demand for quality short-term rentals, especially in San Pedro Garza Garcia and Valle Oriente.'}
          </p>

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Las mejores zonas para ejecutivos' : 'Best areas for executives'}</h2>
          {[
            {
              name: 'San Pedro Garza García', emoji: '🏢',
              es_desc: 'El municipio más exclusivo y próspero del área metropolitana de Monterrey, y uno de los de mayor ingreso per cápita de México. Concentra las sedes de las principales empresas del país, centros comerciales premium como Chroma y Galerías Valle Oriente, hospitales privados de primer nivel y algunas de las zonas residenciales más exclusivas del norte de México.',
              en_desc: 'The most exclusive and prosperous municipality in the Monterrey metropolitan area, and one of the highest per capita income in Mexico. It concentrates the headquarters of the country\'s leading companies, premium shopping centers like Chroma and Galerías Valle Oriente, top-tier private hospitals and some of the most exclusive residential areas in northern Mexico.',
            },
            {
              name: 'Valle Oriente', emoji: '🏙️',
              es_desc: 'El corredor empresarial más moderno de Monterrey. Torres corporativas de vidrio, hoteles de lujo internacionales, el centro comercial Multiplaza Arboleda y decenas de restaurantes de primer nivel. Es el corazón de los negocios de la ciudad y la zona preferida por ejecutivos que quieren vivir cerca de su trabajo.',
              en_desc: 'The most modern business corridor in Monterrey. Glass corporate towers, international luxury hotels, the Multiplaza Arboleda shopping center and dozens of top-tier restaurants. It is the business heart of the city and the preferred area for executives who want to live close to work.',
            },
          ].map(item => (
            <div key={item.name} className="rounded-2xl p-6 my-4" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
              <span className="text-3xl mb-3 block">{item.emoji}</span>
              <h3 className="font-serif text-xl mb-3" style={{ color: 'var(--ink)' }}>{item.name}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{es ? item.es_desc : item.en_desc}</p>
            </div>
          ))}

          <h2 className="font-serif text-2xl mt-10 mb-4" style={{ color: 'var(--ink)' }}>{es ? 'Clima y estilo de vida' : 'Climate and lifestyle'}</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es ? 'Monterrey tiene un clima extremo que hay que tener en cuenta. Los veranos son muy calurosos, con temperaturas que pueden superar los 40°C. Los inviernos son fríos, con temperaturas que en ocasiones bajan de 0°C. La primavera y el otoño son las mejores épocas. La ciudad está rodeada por la Sierra Madre Oriental, lo que ofrece opciones para actividades al aire libre como senderismo y escalada.' : 'Monterrey has an extreme climate that must be taken into account. Summers are very hot, with temperatures that can exceed 40°C. Winters are cold, with temperatures occasionally dropping below 0°C. Spring and autumn are the best times. The city is surrounded by the Sierra Madre Oriental, which offers options for outdoor activities such as hiking and climbing.'}
          </p>

          <div className="rounded-2xl p-8 mt-12 text-center" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <p className="font-serif text-2xl mb-3" style={{ color: 'var(--ink)' }}>{es ? 'Ver propiedades en Monterrey' : 'View properties in Monterrey'}</p>
            <Link href="/properties?city=Monterrey" className="inline-block px-8 py-3 rounded-full text-sm font-medium text-white" style={{ backgroundColor: 'var(--gold)' }}>
              {es ? 'Ver propiedades' : 'View properties'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
