import type { Lang } from '@/store/lang.store';

const T = {
  es: {
    // nav
    signIn: 'Iniciar sesión',
    register: 'Registrarse',
    contact: 'Contacto',
    langToggle: 'EN',
    // home hero
    tagline: 'Estancias extraordinarias',
    taglineSub: 'en México.',
    subheading: 'Casas seleccionadas obsesivamente para que reserves con total confianza.',
    // home sections
    popularDests: 'Destinos populares',
    exploreDests: 'Explora las mejores propiedades por ciudad',
    cityTagline: (name: string) =>
      name === 'Ciudad de México'
        ? 'Penthouses, lofts y casas en la capital'
        : name === 'Guadalajara'
        ? 'Arquitectura colonial y espíritu tapatío'
        : name === 'Monterrey'
        ? 'La ciudad de las montañas y los negocios'
        : name === 'Santiago'
        ? 'Tranquilidad y naturaleza cerca de Monterrey'
        : 'Orillas del lago, clima único y vida relajada',
    properties: (n: number) => `${n} propiedad${n !== 1 ? 'es' : ''}`,
    // collage & featured
    taglineQuote: 'Para quienes no se conforman',
    taglineQuoteEm: ' con lo ordinario.',
    taglineSub2: 'Cada propiedad en ShortStayMX es verificada personalmente. Si la publicamos, es porque la habitaríamos nosotros mismos.',
    featuredProps: 'Propiedades destacadas',
    totalProps: (n: number) => `${n} propiedades en total`,
    viewAll: 'Ver todas →',
    viewAllBtn: 'Ver todas las propiedades',
    noImage: 'Sin imagen',
    // listing page
    allProperties: 'Todas las propiedades',
    propertiesCount: (n: number) => `${n} propiedad${n !== 1 ? 'es' : ''} disponible${n !== 1 ? 's' : ''}`,
    allFilter: 'Todas',
    // property card info
    rec: 'rec',
    baths: 'baños',
    perMonth: '/ mes',
    // detail nav
    backToProps: '← Propiedades',
    // detail stats
    guests: 'Huéspedes',
    bedrooms: 'Recámaras',
    bathrooms: 'Baños',
    sqm: 'm²',
    // badges
    balcony: 'Balcón',
    petFriendly: 'Pet friendly',
    parking: (n: number) => `${n} estacionamiento${n > 1 ? 's' : ''}`,
    // amenities
    amenities: 'Lo que incluye',
    // price table
    priceTitle: 'Precio de renta',
    dailySub: (rate: string) => `Tarifa: ${rate} / día · Mínimo 10 noches`,
    nightsCol: 'Noches',
    perNightCol: 'Por noche',
    totalCol: 'Total',
    minBadge: 'mínimo',
    oneMonthBadge: '1 mes',
    priceFoot: 'Tarifa diaria = precio mensual ÷ 30. El panel lateral calcula cualquier número de noches.',
    // wa cta
    moreThan1Month: 'Ver disponibilidad con un agente',
    moreThan1MonthSub: 'Contáctanos por WhatsApp y un agente te atenderá de inmediato.',
    openWA: 'Apartar ahora',
    // location
    locationTitle: 'Ubicación',
    // booking panel
    perDay: '/ día',
    arrival: 'Llegada',
    departure: 'Salida',
    guestsLabel: 'Huéspedes',
    guestSingular: 'huésped',
    guestsPlural: 'huéspedes',
    maxGuests: (n: number) => `Máximo ${n} huéspedes`,
    minWarning: 'La estancia mínima es de 10 noches.',
    reserveBtn: (n: number) => `Reservar ${n} noche${n !== 1 ? 's' : ''}`,
    selectDates: 'Selecciona las fechas',
    noCharge: 'Mínimo 10 noches · sin cargo todavía',
    moreThanPanel: '¿Más de 1 mes?',
    moreThanPanelSub: 'Contáctanos por WhatsApp para tarifas especiales',
    writeUs: 'Escribir →',
    // agent modal
    modalTitle: 'Envía tu cotización',
    modalSub: 'Uno de nuestros agentes te atenderá de inmediato',
    quoteLabel: 'Resumen de tu solicitud',
    checkInLabel: 'Entrada',
    checkOutLabel: 'Salida',
    nightsLabel: 'Noches',
    totalLabel: 'Total estimado',
    guestsModal: 'Huéspedes',
    agentsTitle: 'Elige tu agente',
    sendQuote: 'Enviar cotización',
    agentRole: 'Asesor Inmobiliario',
    // search bar
    destinationLabel: 'Destino',
    chooseCity: 'Elige una ciudad',
    searchBtn: 'Buscar →',
    // reviews
    reviewsTitle: 'Lo que dicen nuestros huéspedes',
    reviewsSub: 'Opiniones verificadas de estadías reales',
    // upcoming
    upcomingTitle: 'Próximos destinos',
    upcomingSub: 'Expandiendo a nuevas ciudades en México',
    comingSoon: 'Próximamente',
    // cleaning
    cleaningFee: 'Limpieza semanal',
    cleaningFeeNote: 'Cambio de toallas y sábanas · $500 MXN por semana',
    // wifi
    wifiLabel: 'WiFi',
    // contact
    contactTitle: 'Escríbenos',
    contactSub: 'Respondemos en menos de 24 horas',
    nameLabel: 'Tu nombre',
    emailLabel: 'Tu correo',
    messageLabel: 'Mensaje',
    sendBtn: 'Enviar mensaje',
    contactSent: '¡Mensaje enviado! Te contactamos pronto.',
    // availability
    occupiedUntil: (date: string) => `Ocupada · hasta ${date}`,
    availableFrom: (date: string) => `Disponible a partir del ${date}`,
    occupiedBanner: 'Esta propiedad está ocupada',
    availableTag: 'Disponible',
    // faq
    faqNav: 'FAQ',
    faqTitle: 'Preguntas frecuentes',
    faqSub: 'Todo lo que necesitas saber antes de reservar',
    faqItems: [
      {
        q: '¿Qué tipo de estancias ofrecen?',
        a: 'Nos especializamos en estancias de corto y mediano plazo, típicamente de 2 semanas a varios meses. Nuestras propiedades son ideales para viajeros, nómadas digitales, trabajadores remotos y profesionales que se reubican temporalmente en México.',
      },
      {
        q: '¿Qué incluye la renta?',
        a: 'Todas nuestras rentas incluyen servicios, internet de alta velocidad y mantenimiento regular. Algunos inmuebles también incluyen servicio de limpieza semanal por un costo adicional. Cada listado especifica claramente qué está incluido.',
      },
      {
        q: '¿Las propiedades están completamente amuebladas?',
        a: 'Sí. Todas nuestras propiedades están completamente amuebladas y listas para habitar, incluyendo cocinas equipadas, ropa de cama, electrodomésticos y artículos esenciales del hogar.',
      },
      {
        q: '¿Se requiere depósito?',
        a: 'Generalmente se requiere un depósito de seguridad antes del check-in, únicamente en estancias de mayor duración. Este depósito es reembolsable al final de tu estadía, siempre que no haya daños ni cargos pendientes. El reembolso se realiza dentro de las 72 horas.',
      },
      {
        q: '¿Cuál es la estancia mínima?',
        a: 'Nuestra estancia mínima habitual es de 10 días a dos semanas, aunque algunas propiedades pueden requerir un mínimo de 30 días dependiendo de las regulaciones del edificio.',
      },
      {
        q: '¿Se permiten mascotas?',
        a: 'La mayoría de nuestras propiedades son pet-friendly, mientras que otras no lo son debido a las políticas del edificio. Consulta el listado de la propiedad para conocer la política específica. Algunas propiedades son negociables dependiendo de la cantidad y el tamaño de la mascota.',
      },
      {
        q: '¿Qué pasa si algo se rompe durante mi estadía?',
        a: 'Nuestro equipo está disponible para asistirte con mantenimiento o problemas que puedan surgir. Simplemente contáctanos y coordinaremos una solución lo más rápido posible.',
      },
      {
        q: '¿Cómo funciona el check-in y check-out?',
        a: 'Los detalles del check-in se proporcionarán una vez confirmada tu reserva. Muchas de nuestras propiedades ofrecen self check-in por comodidad, mientras que otras pueden incluir una bienvenida personalizada.',
      },
      {
        q: '¿Puedo extender mi estadía?',
        a: 'Sí, las extensiones son posibles según disponibilidad. Te recomendamos contactarnos con la mayor anticipación posible si deseas extender tu reserva.',
      },
      {
        q: 'Política de reembolso y cancelación',
        a: 'Los huéspedes pueden cancelar su reserva sujeto a las siguientes condiciones:\n\n• Reembolso del 100% si la cancelación se solicita 60 días o más antes del check-in.\n\n• Reembolso del 50% si la cancelación se solicita menos de 60 días antes del check-in.\n\n• Reembolso del 25% si la cancelación se solicita dentro de los 14 días previos al check-in.\n\nTodas las solicitudes de cancelación deben enviarse por escrito y ser confirmadas por nuestro equipo. Los reembolsos se enviarán a la misma cuenta que realizó el pago.',
      },
    ],
    // requirements
    reqNav: 'Requisitos',
    reqTitle: 'Nuestros requisitos',
    reqSub: 'Para reservar cualquiera de nuestras propiedades, necesitamos lo siguiente',
    reqSections: [
      {
        icon: '🪪',
        title: 'Identificación oficial',
        items: [
          'Mexicanos: INE vigente.',
          'Extranjeros: pasaporte vigente al menos hasta el último día de tu estancia.',
        ],
      },
      {
        icon: '🐾',
        title: 'Mascotas',
        items: [
          'Si viajas con mascotas que no son de México, es necesario presentar su cartilla de vacunación con cobertura de al menos los últimos 3 meses.',
        ],
      },
      {
        icon: '📄',
        title: 'Contrato',
        items: [
          'El contrato se firma en español. Si requieres otro idioma podemos proporcionarlo; sin embargo, por razones legales, el contrato se firma únicamente en español.',
        ],
      },
      {
        icon: '🏠',
        title: 'Comprobante de domicilio',
        items: [
          'Comprobante de domicilio de la persona que firmará el contrato.',
        ],
      },
      {
        icon: '📋',
        title: 'Reglamento del condominio',
        items: [
          'Se requiere la lectura y aceptación del reglamento del condominio.',
        ],
      },
      {
        icon: '💰',
        title: 'Anticipo — estancias de corta duración',
        items: [
          'Se requiere un anticipo del 50% al 100% del total de la estancia para reservar las fechas y marcarlas como no disponibles.',
          'Esto depende de la duración de tu estadía.',
          'El porcentaje restante deberá pagarse a más tardar el día de llegada. De no completarse el pago, los días pendientes serán liberados y nuevamente disponibles.',
        ],
      },
      {
        icon: '🔐',
        title: 'Depósito de seguridad — estancias largas',
        items: [
          'Para estancias de cuatro meses o más, se requiere un depósito de seguridad equivalente a un mes y medio de renta, en lugar del anticipo habitual.',
          'En caso de que el huésped tenga mascotas, el depósito requerido será equivalente a dos meses de renta.',
          'Este depósito tiene como finalidad cubrir posibles daños o cargos pendientes durante la estancia. Siempre que la propiedad sea entregada en buenas condiciones y no existan adeudos, el depósito será reembolsado en su totalidad dentro de un plazo de 24 a 72 horas después del check-out.',
        ],
      },
      {
        icon: '🧾',
        title: 'Comprobante de pago',
        items: [
          'Una vez recibido tu pago, se te proporcionará un recibo firmado como comprobante.',
        ],
      },
      {
        icon: '🏦',
        title: 'Forma de pago',
        items: [
          'Por tu seguridad y la nuestra, únicamente aceptamos pagos mediante transferencia bancaria.',
          'El contrato se firma electrónicamente, generalmente dentro de las 24 a 72 horas posteriores al pago, según la disponibilidad del propietario.',
        ],
      },
    ],
    // about
    aboutNav: 'Nosotros',
    aboutTitle: 'Sobre nosotros',
    aboutSub: 'Hospitalidad profesional en los mejores destinos de México',
    aboutP1: 'Nos especializamos en rentas temporales premium en México, diseñadas para viajeros que buscan algo más que un lugar donde quedarse. Nuestra misión es simple: ofrecer hogares cómodos y completamente equipados con la confiabilidad y el servicio que esperarías de una empresa de hospitalidad profesional.',
    aboutP2: 'Ya sea que estés en México por trabajo, reubicación o vacaciones extendidas, nuestras propiedades están cuidadosamente seleccionadas para ofrecerte excelentes ubicaciones, internet rápido, amenidades modernas y todo lo necesario para una estancia sin complicaciones.',
    aboutP3: 'A diferencia de las rentas vacacionales tradicionales, nos enfocamos en estancias cortas de mayor duración, ofreciendo opciones flexibles para nómadas digitales, trabajadores remotos y visitantes internacionales que desean la comodidad de un hogar real mientras viven en México.',
    aboutP4: 'Nuestro equipo se encarga de cada detalle —desde la limpieza profesional hasta el soporte al huésped— para que puedas concentrarte en disfrutar tu tiempo aquí.',
    aboutP5: 'Creemos que donde te quedas debe enriquecer tu experiencia de la ciudad, no complicarla.',
    aboutCTA: 'Ver propiedades',
    aboutPillars: [
      { icon: '🏠', title: 'Hogares verificados', desc: 'Cada propiedad es inspeccionada personalmente antes de publicarse.' },
      { icon: '📶', title: 'Internet de alta velocidad', desc: 'WiFi de 150–500 Mbps incluido en todas las propiedades.' },
      { icon: '🧹', title: 'Limpieza profesional', desc: 'Servicio de limpieza semanal incluido en tu estancia.' },
      { icon: '💬', title: 'Soporte al huésped', desc: 'Un agente disponible para atenderte en todo momento.' },
    ],
    // footer
    footerTagline: 'Estancias extraordinarias en los mejores destinos',
  },
  en: {
    signIn: 'Sign in',
    register: 'Sign up',
    contact: 'Contact',
    langToggle: 'ES',
    tagline: 'Extraordinary stays',
    taglineSub: 'in Mexico.',
    subheading: 'Obsessively curated properties so you can book with total confidence.',
    popularDests: 'Popular destinations',
    exploreDests: 'Explore the best properties by city',
    cityTagline: (name: string) =>
      name === 'Ciudad de México'
        ? 'Penthouses, lofts and homes in the capital'
        : name === 'Guadalajara'
        ? 'Colonial architecture and tapatío spirit'
        : name === 'Monterrey'
        ? 'The city of mountains and business'
        : name === 'Santiago'
        ? 'Serenity and nature just outside Monterrey'
        : 'Lakeside living, unique climate and relaxed lifestyle',
    properties: (n: number) => `${n} propert${n !== 1 ? 'ies' : 'y'}`,
    taglineQuote: 'For those who refuse to settle',
    taglineQuoteEm: ' for the ordinary.',
    taglineSub2: 'Every property on ShortStayMX is personally verified. If we list it, it\'s because we\'d stay there ourselves.',
    featuredProps: 'Featured properties',
    totalProps: (n: number) => `${n} properties total`,
    viewAll: 'View all →',
    viewAllBtn: 'View all properties',
    noImage: 'No image',
    allProperties: 'All properties',
    propertiesCount: (n: number) => `${n} propert${n !== 1 ? 'ies' : 'y'} available`,
    allFilter: 'All',
    rec: 'bd',
    baths: 'baths',
    perMonth: '/ month',
    backToProps: '← Properties',
    guests: 'Guests',
    bedrooms: 'Bedrooms',
    bathrooms: 'Bathrooms',
    sqm: 'm²',
    balcony: 'Balcony',
    petFriendly: 'Pet friendly',
    parking: (n: number) => `${n} parking spot${n > 1 ? 's' : ''}`,
    amenities: "What's included",
    priceTitle: 'Rental pricing',
    dailySub: (rate: string) => `Rate: ${rate} / day · Minimum 10 nights`,
    nightsCol: 'Nights',
    perNightCol: 'Per night',
    totalCol: 'Total',
    minBadge: 'minimum',
    oneMonthBadge: '1 month',
    priceFoot: 'Daily rate = monthly price ÷ 30. The side panel calculates any number of nights.',
    moreThan1Month: 'Check availability with an agent',
    moreThan1MonthSub: 'Contact us on WhatsApp and an agent will assist you right away.',
    openWA: 'Book now',
    locationTitle: 'Location',
    perDay: '/ day',
    arrival: 'Check-in',
    departure: 'Check-out',
    guestsLabel: 'Guests',
    guestSingular: 'guest',
    guestsPlural: 'guests',
    maxGuests: (n: number) => `Maximum ${n} guests`,
    minWarning: 'The minimum stay is 10 nights.',
    reserveBtn: (n: number) => `Reserve ${n} night${n !== 1 ? 's' : ''}`,
    selectDates: 'Select dates',
    noCharge: 'Minimum 10 nights · no charge yet',
    moreThanPanel: 'More than 1 month?',
    moreThanPanelSub: 'Contact us on WhatsApp for special rates',
    writeUs: 'Write →',
    modalTitle: 'Send your quote',
    modalSub: 'One of our agents will assist you immediately',
    quoteLabel: 'Your request summary',
    checkInLabel: 'Check-in',
    checkOutLabel: 'Check-out',
    nightsLabel: 'Nights',
    totalLabel: 'Estimated total',
    guestsModal: 'Guests',
    agentsTitle: 'Choose your agent',
    sendQuote: 'Send quote',
    agentRole: 'Real Estate Advisor',
    destinationLabel: 'Destination',
    chooseCity: 'Choose a city',
    searchBtn: 'Search →',
    footerTagline: 'Extraordinary stays at the best destinations',
    // reviews
    reviewsTitle: 'What our guests say',
    reviewsSub: 'Verified reviews from real stays',
    // upcoming
    upcomingTitle: 'Coming soon',
    upcomingSub: 'Expanding to new cities across Mexico',
    comingSoon: 'Coming soon',
    // cleaning
    cleaningFee: 'Weekly cleaning',
    cleaningFeeNote: 'Towel & sheet change · $500 MXN per week',
    // wifi
    wifiLabel: 'WiFi',
    // contact
    contactTitle: 'Contact us',
    contactSub: 'We respond within 24 hours',
    nameLabel: 'Your name',
    emailLabel: 'Your email',
    messageLabel: 'Message',
    sendBtn: 'Send message',
    contactSent: 'Message sent! We\'ll be in touch soon.',
    // faq
    faqNav: 'FAQ',
    faqTitle: 'Frequently Asked Questions',
    faqSub: 'Everything you need to know before booking',
    faqItems: [
      {
        q: 'What types of stays do you offer?',
        a: 'We specialize in short-term and mid-term stays, typically ranging from 2 weeks to several months. Our properties are ideal for travelers, digital nomads, remote workers, and professionals relocating temporarily to Mexico.',
      },
      {
        q: 'What is included in the rent?',
        a: 'All of our rentals include utilities, high-speed internet, and regular maintenance. Some properties also include weekly cleaning services for an extra fee. Each listing clearly specifies what is included.',
      },
      {
        q: 'Are the properties fully furnished?',
        a: 'Yes. All of our properties are fully furnished and move-in ready, including equipped kitchens, bedding, appliances, and essential household items.',
      },
      {
        q: 'Is a deposit required?',
        a: 'A security deposit is typically required before check-in only on longer term stays. This deposit is refundable at the end of your stay, provided there are no damages or outstanding charges. Refunds are processed within 72 hours.',
      },
      {
        q: 'What is the minimum stay?',
        a: 'Our typical minimum stay is 10 days to two weeks, though some properties may require a 30-day minimum depending on the building regulations.',
      },
      {
        q: 'Are pets allowed?',
        a: 'Most properties are pet-friendly, while others are not due to building policies. Please check the property listing for specific pet policies. Some properties are negotiable depending on the number and size of the pet.',
      },
      {
        q: 'What happens if something breaks during my stay?',
        a: 'Our team is available to assist with maintenance or issues that may arise during your stay. Simply contact us and we will coordinate a solution as quickly as possible.',
      },
      {
        q: 'How do check-in and check-out work?',
        a: 'Check-in details will be provided after your booking is confirmed. Many of our properties offer self check-in for convenience, while others may include a personal welcome.',
      },
      {
        q: 'Can I extend my stay?',
        a: 'Yes, extensions are possible depending on availability. We recommend contacting us as early as possible if you would like to extend your reservation.',
      },
      {
        q: 'Refund & Cancellation Policy',
        a: '• 100% refund if cancellation is requested 60 days or more before check-in.\n\n• 50% refund if cancellation is requested less than 60 days before check-in.\n\n• 25% refund if cancellation is requested within 14 days of check-in.\n\nAll cancellation requests must be submitted in writing and confirmed by our team. Refunds will be sent to the same account that made the booking.',
      },
    ],
    // requirements
    reqNav: 'Requirements',
    reqTitle: 'Our requirements',
    reqSub: 'To book any of our properties, we need the following',
    reqSections: [
      {
        icon: '🪪',
        title: 'Official Identification',
        items: [
          'Mexican nationals: a valid INE (official ID).',
          'Foreigners: a passport valid at least through the last day of your stay.',
        ],
      },
      {
        icon: '🐾',
        title: 'Pets',
        items: [
          'If you are traveling with pets that are not from Mexico, it is necessary to present their vaccination record covering at least the last 3 months.',
        ],
      },
      {
        icon: '📄',
        title: 'Contract',
        items: [
          'The contract is signed in Spanish. If you require it in another language, we can provide it; however, for legal reasons, the contract is signed only in Spanish.',
        ],
      },
      {
        icon: '🏠',
        title: 'Proof of Address',
        items: [
          'Proof of address of the person who will sign the contract.',
        ],
      },
      {
        icon: '📋',
        title: 'Condominium Rules',
        items: [
          'Reading and acceptance of the condominium rules is required.',
        ],
      },
      {
        icon: '💰',
        title: 'Advance Payment — Short-Term Stays',
        items: [
          '50% to 100% advance payment of the total stay is required to reserve the dates and mark them as unavailable.',
          'This depends on how long you are staying with us.',
          'The remaining balance must be paid no later than the day of arrival. If payment is not completed, the unpaid days will be released and made available again.',
        ],
      },
      {
        icon: '🔐',
        title: 'Security Deposit — Long-Term Stays',
        items: [
          'For stays of four months or more, a security deposit equivalent to one and a half months of rent is required, instead of the standard advance payment.',
          'If the guest has pets, the required deposit is equivalent to two months of rent.',
          'This deposit is intended to cover any potential damages or outstanding charges during the stay. Provided the property is returned in good condition with no outstanding balances, the deposit will be fully refunded within 24 to 72 hours after check-out.',
        ],
      },
      {
        icon: '🧾',
        title: 'Proof of Payment',
        items: [
          'Once your payment is received, you will be provided with a signed receipt as proof of payment.',
        ],
      },
      {
        icon: '🏦',
        title: 'Payment Method',
        items: [
          'For your safety and ours, we only accept payments via bank transfer.',
          'The contract is signed electronically, usually within 24 to 72 hours after payment, depending on the owner\'s availability.',
        ],
      },
    ],
    // about
    aboutNav: 'About us',
    aboutTitle: 'About us',
    aboutSub: 'Professional hospitality at the best destinations in Mexico',
    aboutP1: 'We specialize in premium short-term rentals in Mexico designed for travelers who want more than just a place to stay. Our mission is simple: to provide comfortable, fully equipped homes with the reliability and service you would expect from a professional hospitality company.',
    aboutP2: 'Whether you\'re visiting Mexico for work, relocation, or an extended vacation, our properties are carefully selected to offer great locations, fast internet, modern amenities, and everything needed for a seamless stay.',
    aboutP3: 'Unlike traditional vacation rentals, we focus on longer short-term stays, offering flexible options for digital nomads, remote workers, and international visitors who want the comfort of a real home while living in Mexico.',
    aboutP4: 'Our team handles every detail—from professional cleaning to guest support—so you can focus on enjoying your time here.',
    aboutP5: 'We believe that where you stay should enhance your experience of the city, not complicate it.',
    aboutCTA: 'View properties',
    aboutPillars: [
      { icon: '🏠', title: 'Verified homes', desc: 'Every property is personally inspected before being listed.' },
      { icon: '📶', title: 'High-speed internet', desc: '150–500 Mbps WiFi included in all properties.' },
      { icon: '🧹', title: 'Professional cleaning', desc: 'Weekly cleaning service included in your stay.' },
      { icon: '💬', title: 'Guest support', desc: 'An agent available to assist you at any time.' },
    ],
    // availability
    occupiedUntil: (date: string) => `Occupied · until ${date}`,
    availableFrom: (date: string) => `Available from ${date}`,
    occupiedBanner: 'This property is currently occupied',
    availableTag: 'Available',
  },
} as const;

export type TKeys = keyof typeof T.es;
export type TType = typeof T.es;

export function useT(lang: Lang): TType {
  return T[lang] as unknown as TType;
}

export { T };
