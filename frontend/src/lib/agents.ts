const BACKEND = process.env.NEXT_PUBLIC_BACKEND_URL ?? 'http://localhost:3001';

export const AGENTS = [
  {
    id: 1,
    name: 'Alicia Beneviento',
    zone: 'CDMX',
    cities: ['Ciudad de México', 'Monterrey', 'Santiago', 'Chapala'],
    wa: '525563783517',
    photo: `${BACKEND}/imagenes/Agentes/Alicia Beneviento.png` as string | null,
    initials: 'AB',
    color: '#C9A84C',
  },
  {
    id: 2,
    name: 'Sofia Navarro',
    zone: 'CDMX',
    cities: ['Ciudad de México', 'Monterrey', 'Santiago', 'Chapala'],
    wa: '525662648748',
    photo: `${BACKEND}/imagenes/Agentes/Sofia Navarro.png` as string | null,
    initials: 'SN',
    color: '#A84C9C',
  },
  {
    id: 3,
    name: 'Santiago Garcia',
    zone: 'Guadalajara',
    cities: ['Guadalajara'],
    wa: '523329599295',
    photo: `${BACKEND}/imagenes/Agentes/Santiago Garcia.png` as string | null,
    initials: 'SG',
    color: '#4A9C8A',
  },
  {
    id: 4,
    name: 'Daniel Ortega',
    zone: 'Guadalajara',
    cities: ['Guadalajara'],
    wa: '523329587681',
    photo: `${BACKEND}/imagenes/Agentes/Daniel Ortega.png` as string | null,
    initials: 'DO',
    color: '#4A6C9C',
  },
];

export type Agent = typeof AGENTS[0];
