import { getServerLang } from '@/lib/lang';
import RentaVsHotelContent from '@/components/pages/RentaVsHotelContent';

export const metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/blog/renta-temporal-vs-hotel',
    languages: {
      'es-MX': 'https://shortstaymx.com/blog/renta-temporal-vs-hotel',
      'en-US': 'https://shortstaymx.com/en/blog/renta-temporal-vs-hotel',
      'x-default': 'https://shortstaymx.com/blog/renta-temporal-vs-hotel',
    },
  },
  title: 'Renta temporal vs hotel en México: ¿Qué conviene más? | ShortStayMX',
  description: 'Analizamos las ventajas y desventajas de rentar un departamento amueblado versus quedarse en un hotel para estancias largas en México.',
};

export default async function RentaVsHotel() {
  const lang = await getServerLang();
  return <RentaVsHotelContent lang={lang} />;
}
