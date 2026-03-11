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
        : 'Arquitectura colonial y espíritu tapatío',
    properties: (n: number) => `${n} propiedad${n !== 1 ? 'es' : ''}`,
    // collage & featured
    taglineQuote: 'Para quienes no se conforman',
    taglineQuoteEm: ' con lo ordinario.',
    taglineSub2: 'Cada propiedad en TempRentals México es verificada personalmente. Si la publicamos, es porque la habitaríamos nosotros mismos.',
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
        : 'Colonial architecture and tapatío spirit',
    properties: (n: number) => `${n} propert${n !== 1 ? 'ies' : 'y'}`,
    taglineQuote: 'For those who refuse to settle',
    taglineQuoteEm: ' for the ordinary.',
    taglineSub2: 'Every property on TempRentals México is personally verified. If we list it, it\'s because we\'d stay there ourselves.',
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
