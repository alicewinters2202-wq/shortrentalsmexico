export type State = 'CDMX' | 'Monterrey' | 'Baja California' | 'Guadalajara';

export interface Property {
  id: number;
  title: string;
  subtitle: string;
  state: State;
  neighborhood: string;
  pricePerNight: number; // MXN
  isAvailable: boolean;
  maxGuests: number;
  bedrooms: number;
  bathrooms: number;
  contactPhone: string;
  amenities: string[];
  description: string;
  gradient: string; // color de fondo hasta que lleguen las fotos reales
}

export function calcPrice(pricePerNight: number, nights: number): number {
  if (nights >= 15) return Math.round(pricePerNight * nights * 0.88);
  if (nights >= 10) return Math.round(pricePerNight * nights * 0.93);
  if (nights >= 7)  return Math.round(pricePerNight * nights * 0.96);
  return pricePerNight * nights;
}

export function formatMXN(amount: number): string {
  return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 }).format(amount);
}

export const STATES: { name: State; tagline: string; gradient: string }[] = [
  {
    name: 'CDMX',
    tagline: 'Penthouses, lofts y casas en la capital',
    gradient: 'from-slate-900 via-slate-700 to-zinc-600',
  },
  {
    name: 'Monterrey',
    tagline: 'Vistas al Cerro de la Silla y vida moderna',
    gradient: 'from-orange-950 via-amber-800 to-yellow-700',
  },
  {
    name: 'Baja California',
    tagline: 'Pacífico, viñedos y lifestyle costero',
    gradient: 'from-blue-950 via-teal-800 to-cyan-700',
  },
  {
    name: 'Guadalajara',
    tagline: 'Arquitectura colonial y espíritu tapatío',
    gradient: 'from-rose-950 via-pink-800 to-fuchsia-700',
  },
];

export const PROPERTIES: Property[] = [
  // ── CDMX ──────────────────────────────────────────────────────────────────
  {
    id: 1,
    title: 'Penthouse Polanco',
    subtitle: 'Lujo con vista al Bosque de Chapultepec',
    state: 'CDMX',
    neighborhood: 'Polanco, CDMX',
    pricePerNight: 3_800,
    isAvailable: true,
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 3,
    contactPhone: '55 1234-5678',
    gradient: 'from-slate-900 to-slate-600',
    amenities: ['Alberca en terraza', 'Concierge 24h', 'Gimnasio privado', 'Estacionamiento x2', 'WiFi 1 Gbps'],
    description:
      'Penthouse de diseño interiorista en el corazón de Polanco. Vistas panorámicas al Bosque de Chapultepec, acabados de mármol y servicio de concierge personalizado.',
  },
  {
    id: 2,
    title: 'Loft Roma Norte',
    subtitle: 'Diseño urbano con jardín privado',
    state: 'CDMX',
    neighborhood: 'Roma Norte, CDMX',
    pricePerNight: 1_650,
    isAvailable: true,
    maxGuests: 3,
    bedrooms: 1,
    bathrooms: 1,
    contactPhone: '55 2345-6789',
    gradient: 'from-zinc-800 to-zinc-500',
    amenities: ['Jardín privado', 'A/C', 'Netflix + Spotify', 'Bicicleta incluida', 'Café de especialidad'],
    description:
      'Loft editorial en el barrio más creativo de la ciudad. A pasos de los mejores restaurantes, cafés de especialidad y galerías de arte de Roma Norte.',
  },
  {
    id: 3,
    title: 'Villa Pedregal',
    subtitle: 'Arquitectura brutalista con alberca',
    state: 'CDMX',
    neighborhood: 'El Pedregal, CDMX',
    pricePerNight: 6_200,
    isAvailable: false,
    maxGuests: 10,
    bedrooms: 5,
    bathrooms: 4,
    contactPhone: '55 3456-7890',
    gradient: 'from-neutral-900 to-stone-600',
    amenities: ['Alberca privada', 'Sala de cine', 'Bar completo', 'Chef disponible', 'Jardín de lava'],
    description:
      'Villa monumental sobre la lava del Pedregal. Arquitectura brutalista de los años 70 completamente restaurada. Privacidad y exclusividad absolutas.',
  },

  // ── MONTERREY ─────────────────────────────────────────────────────────────
  {
    id: 4,
    title: 'Casa San Pedro',
    subtitle: 'Minimalismo frente al Cerro de la Silla',
    state: 'Monterrey',
    neighborhood: 'San Pedro Garza García, MTY',
    pricePerNight: 2_900,
    isAvailable: true,
    maxGuests: 8,
    bedrooms: 4,
    bathrooms: 3,
    contactPhone: '81 1234-5678',
    gradient: 'from-orange-950 to-amber-700',
    amenities: ['Alberca infinita', 'Vista panorámica', 'Cuarto de juegos', 'BBQ gourmet', 'Smart home'],
    description:
      'Casa contemporánea en San Pedro con alberca de borde infinito y vistas despejadas al Cerro de la Silla. Diseño austero, materiales nobles, confort total.',
  },
  {
    id: 5,
    title: 'Loft Barrio Antiguo',
    subtitle: 'Historia y diseño en el centro regio',
    state: 'Monterrey',
    neighborhood: 'Barrio Antiguo, MTY',
    pricePerNight: 1_450,
    isAvailable: true,
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    contactPhone: '81 2345-6789',
    gradient: 'from-amber-900 to-yellow-700',
    amenities: ['Terraza privada', 'WiFi', 'A/C', 'Cocina completa', 'Walk-score 98'],
    description:
      'Loft en edificio histórico restaurado en el corazón del Barrio Antiguo. Perfecto para parejas que quieren explorar la vida cultural regiomontana.',
  },

  // ── BAJA CALIFORNIA ───────────────────────────────────────────────────────
  {
    id: 6,
    title: 'Villa Frente al Mar',
    subtitle: 'Acceso privado al Pacífico · Ensenada',
    state: 'Baja California',
    neighborhood: 'Ensenada, B.C.',
    pricePerNight: 4_100,
    isAvailable: true,
    maxGuests: 8,
    bedrooms: 4,
    bathrooms: 3,
    contactPhone: '646 123-4567',
    gradient: 'from-blue-950 to-teal-600',
    amenities: ['Playa privada', 'Alberca infinity', 'Kayaks y SUPs', 'BBQ frente al mar', 'Pescador disponible'],
    description:
      'Villa de lujo con acceso directo al Océano Pacífico en Ensenada. Despertarse con el sonido de las olas y el aroma salino es el mejor servicio que ofrecemos.',
  },
  {
    id: 7,
    title: 'Casa Valle de Guadalupe',
    subtitle: 'Entre viñedos bajo el cielo bajacaliforniano',
    state: 'Baja California',
    neighborhood: 'Valle de Guadalupe, B.C.',
    pricePerNight: 2_200,
    isAvailable: true,
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    contactPhone: '646 234-5678',
    gradient: 'from-teal-900 to-emerald-700',
    amenities: ['Vista a viñedos', 'Cava privada', 'Fogón exterior', 'Desayuno incluido', 'Degustaciones'],
    description:
      'Casa de adobe y madera rodeada de viñedos en el Valle de Guadalupe. A 10 minutos de los mejores restaurantes del país y a 45 minutos del mar.',
  },

  // ── GUADALAJARA ───────────────────────────────────────────────────────────
  {
    id: 8,
    title: 'Casa Providencia',
    subtitle: 'Elegancia tapatía en zona premium',
    state: 'Guadalajara',
    neighborhood: 'Providencia, GDL',
    pricePerNight: 2_450,
    isAvailable: true,
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 2,
    contactPhone: '33 1234-5678',
    gradient: 'from-rose-950 to-pink-700',
    amenities: ['Jardín con fuente', 'Cocina de chef', 'Estacionamiento x2', 'A/C inverter', 'Bodega de vinos'],
    description:
      'Casa de autor en la colonia más distinguida de Guadalajara. Arquitectura contemporánea fusionada con elementos de la tradición constructiva tapatía.',
  },
  {
    id: 9,
    title: 'Hacienda Tlaquepaque',
    subtitle: 'Arte, artesanía y descanso total',
    state: 'Guadalajara',
    neighborhood: 'Tlaquepaque, GDL',
    pricePerNight: 3_100,
    isAvailable: false,
    maxGuests: 12,
    bedrooms: 5,
    bathrooms: 5,
    contactPhone: '33 2345-6789',
    gradient: 'from-fuchsia-950 to-rose-700',
    amenities: ['Alberca colonial', 'Jardín 1,200m²', 'Biblioteca', 'Sala de eventos', 'Mayordomo incluido'],
    description:
      'Hacienda del siglo XIX completamente restaurada en Tlaquepaque. Rodeada de galerías y talleres de artesanos. Para grupos que buscan lo genuinamente mexicano.',
  },
];
