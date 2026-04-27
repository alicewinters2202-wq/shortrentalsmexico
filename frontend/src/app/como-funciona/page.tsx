import Link from 'next/link';
import { getT } from '@/lib/lang';
import LangToggle from '@/components/layout/LangToggle';

export const metadata = {
  title: 'Cómo funciona | ShortStayMX',
  description: 'Aprende cómo rentar un departamento amueblado con ShortStayMX en 5 simples pasos. Proceso claro, seguro y sin sorpresas.',
};

export default async function HowItWorksPage() {
  const { lang } = await getT();
  const es = lang !== 'en';

  const steps = [
    {
      number: '01',
      emoji: '🔍',
      title_es: 'Encuentra tu propiedad',
      title_en: 'Find your property',
      desc_es: 'Explora nuestro catálogo de departamentos y casas amuebladas en las mejores ciudades de México. Filtra por ciudad, precio, número de recámaras y fechas. Cada propiedad muestra fotos reales, amenidades, precio por noche y por mes.',
      desc_en: 'Browse our catalog of furnished apartments and homes in the best cities in Mexico. Filter by city, price, number of bedrooms and dates. Each property shows photos, amenities, nightly and monthly price.',
    },
    {
      number: '02',
      emoji: '💬',
      title_es: 'Contáctanos por WhatsApp',
      title_en: 'Contact us on WhatsApp',
      desc_es: 'Una vez que encuentres la propiedad que te interesa, contáctanos por WhatsApp. Nuestro equipo te responderá rápidamente para confirmar disponibilidad, resolver tus dudas y guiarte en el proceso. No hay bots — hablas directamente con una persona.',
      desc_en: 'Once you find the property you are interested in, contact us on WhatsApp. Our team will respond quickly to confirm availability, answer your questions and guide you through the process. No bots — you speak directly with a person.',
    },
    {
      number: '03',
      emoji: '📄',
      title_es: 'Firma el contrato',
      title_en: 'Sign the contract',
      desc_es: 'Te enviamos el contrato de arrendamiento para revisión. El contrato se firma electrónicamente, generalmente dentro de las 24 a 72 horas después del pago, dependiendo de la disponibilidad del propietario. El contrato es en español por razones legales, aunque podemos proporcionarte una versión en inglés de referencia.',
      desc_en: 'We send you the lease agreement for review. The contract is signed electronically, usually within 24 to 72 hours after payment, depending on the owner\'s availability. The contract is in Spanish for legal reasons, although we can provide you with an English reference version.',
    },
    {
      number: '04',
      emoji: '💳',
      title_es: 'Realiza tu pago',
      title_en: 'Make your payment',
      desc_es: 'Para tu seguridad y la nuestra, únicamente aceptamos pagos mediante transferencia bancaria. Para estancias cortas se requiere entre el 50% y el 100% de anticipo para apartar las fechas. Para estancias de 4 meses o más se requiere un depósito en garantía equivalente a mes y medio de renta. Una vez recibido tu pago, te enviamos un recibo firmado como comprobante.',
      desc_en: 'For your safety and ours, we only accept payments via bank transfer. For short stays, between 50% and 100% advance payment is required to reserve the dates. For stays of 4 months or more, a security deposit equivalent to one and a half months of rent is required. Once your payment is received, we send you a signed receipt as proof of payment.',
    },
    {
      number: '05',
      emoji: '🔑',
      title_es: 'Recibe acceso a tu propiedad',
      title_en: 'Get access to your property',
      desc_es: 'El día de tu llegada recibirás las llaves físicas o el código de acceso digital, dependiendo de la propiedad. Nuestro equipo estará disponible para asistirte durante toda tu estancia. ¡Bienvenido a tu nuevo hogar en México!',
      desc_en: 'On the day of your arrival you will receive the physical keys or the digital access code, depending on the property. Our team will be available to assist you throughout your stay. Welcome to your new home in Mexico!',
    },
  ];

  const faqs = [
    {
      q_es: '¿Cuánto tiempo tarda el proceso?',
      q_en: 'How long does the process take?',
      a_es: 'Desde que nos contactas hasta que tienes acceso a la propiedad, el proceso suele tomar entre 24 y 72 horas dependiendo de la firma del contrato y la confirmación del pago.',
      a_en: 'From when you contact us to when you have access to the property, the process usually takes between 24 and 72 hours depending on contract signing and payment confirmation.',
    },
    {
      q_es: '¿Es como Airbnb?',
      q_en: 'Is it like Airbnb?',
      a_es: 'No exactamente. A diferencia de Airbnb, trabajamos directamente con los propietarios sin intermediarios de plataforma. Esto nos permite ofrecer mejores precios, propiedades verificadas y atención personalizada por WhatsApp. La estancia mínima es de 10 noches.',
      a_en: 'Not exactly. Unlike Airbnb, we work directly with property owners without platform intermediaries. This allows us to offer better prices, verified properties and personalized WhatsApp support. The minimum stay is 10 nights.',
    },
    {
      q_es: '¿Qué incluye la renta?',
      q_en: 'What does the rent include?',
      a_es: 'Todas nuestras propiedades incluyen mobiliario completo, WiFi de alta velocidad, agua caliente, electricidad, gas y acceso a las amenidades del edificio. Todo está incluido — sin cargos ocultos.',
      a_en: 'All our properties include full furniture, high-speed WiFi, hot water, electricity, gas and access to building amenities. Everything is included — no hidden fees.',
    },
    {
      q_es: '¿Puedo pagar en dólares, euros u otra moneda?',
      q_en: 'Can I pay in dollars, euros or any other currency?',
      a_es: 'Los precios están en pesos mexicanos (MXN) y el pago se realiza mediante transferencia bancaria en pesos. Si pagas desde el extranjero, recomendamos usar Wise — tiene una de las mejores tasas de conversión del mercado y te permite pagar en tu moneda local sin comisiones excesivas.',
      a_en: 'Prices are in Mexican pesos (MXN) and payment is made via bank transfer in pesos. If you are paying from abroad, we recommend using Wise — it offers one of the best exchange rates on the market and allows you to pay in your local currency without excessive fees.',
    },
    {
      q_es: '¿Qué pasa si necesito cancelar?',
      q_en: 'What happens if I need to cancel?',
      a_es: 'Las políticas de cancelación varían por propiedad y tiempo de anticipación. Contáctanos directamente por WhatsApp para conocer las condiciones específicas de la propiedad que te interesa.',
      a_en: 'Cancellation policies vary by property and notice period. Contact us directly on WhatsApp to learn the specific conditions for the property you are interested in.',
    },
  ];

  return (
    <div style={{ backgroundColor: 'var(--cream)', minHeight: '100vh' }}>
      <nav className="sticky top-0 z-40 backdrop-blur-md" style={{ backgroundColor: 'rgba(28,28,30,0.9)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-4">
          <Link href="/" className="text-sm transition-colors hover:opacity-80" style={{ color: 'var(--muted)' }}>← Home</Link>
          <span style={{ color: 'var(--border)' }}>|</span>
          <Link href="/" className="font-serif font-medium" style={{ color: 'var(--ink)' }}>ShortStayMX</Link>
          <div className="ml-auto"><LangToggle currentLang={lang} className="text-[--muted] hover:text-[--ink]" /></div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-16">
          <p className="text-xs tracking-widest uppercase font-medium mb-3" style={{ color: 'var(--gold)' }}>
            {es ? 'Proceso simple y transparente' : 'Simple and transparent process'}
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl mb-6" style={{ color: 'var(--ink)' }}>
            {es ? 'Cómo funciona' : 'How it works'}
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            {es
              ? 'Rentar con ShortStayMX es simple, seguro y sin sorpresas. En 5 pasos tienes tu departamento amueblado listo en cualquier ciudad de México.'
              : 'Renting with ShortStayMX is simple, safe and no surprises. In 5 steps you have your furnished apartment ready in any city in Mexico.'}
          </p>
        </div>

        <div className="space-y-6 mb-20">
          {steps.map((step, i) => (
            <div key={step.number} className="flex gap-6 rounded-2xl p-8" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-serif text-lg font-bold" style={{ backgroundColor: 'var(--cream)', color: 'var(--gold)', border: '2px solid var(--gold)' }}>
                  {i + 1}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{step.emoji}</span>
                  <h2 className="font-serif text-2xl" style={{ color: 'var(--ink)' }}>
                    {es ? step.title_es : step.title_en}
                  </h2>
                </div>
                <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {es ? step.desc_es : step.desc_en}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <h2 className="font-serif text-3xl mb-8" style={{ color: 'var(--ink)' }}>
            {es ? 'Preguntas frecuentes' : 'Frequently asked questions'}
          </h2>
          <div className="space-y-4">
            {faqs.map(faq => (
              <div key={faq.q_es} className="rounded-2xl p-6" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
                <h3 className="font-serif text-lg mb-3" style={{ color: 'var(--ink)' }}>
                  {es ? faq.q_es : faq.q_en}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {es ? faq.a_es : faq.a_en}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl p-10 text-center" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
          <p className="font-serif text-3xl mb-3" style={{ color: 'var(--ink)' }}>
            {es ? '¿Listo para empezar?' : 'Ready to get started?'}
          </p>
          <p className="text-base mb-8" style={{ color: 'var(--muted)' }}>
            {es
              ? 'Encuentra tu departamento ideal y contáctanos. Respondemos en minutos.'
              : 'Find your ideal apartment and contact us. We respond in minutes.'}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/properties" className="inline-block px-8 py-3 rounded-full text-sm font-medium text-white" style={{ backgroundColor: 'var(--gold)' }}>
              {es ? 'Ver propiedades' : 'View properties'}
            </Link>
            <a href="https://wa.me/5215662548748" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 rounded-full text-sm font-medium border" style={{ color: 'var(--ink)', borderColor: 'var(--border)' }}>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
