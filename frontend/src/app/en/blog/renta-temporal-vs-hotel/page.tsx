import type { Metadata } from 'next';
import RentaVsHotelContent from '@/components/pages/RentaVsHotelContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/en/blog/renta-temporal-vs-hotel',
    languages: {
      'es-MX': 'https://shortstaymx.com/blog/renta-temporal-vs-hotel',
      'en-US': 'https://shortstaymx.com/en/blog/renta-temporal-vs-hotel',
      'x-default': 'https://shortstaymx.com/blog/renta-temporal-vs-hotel',
    },
  },
  title: 'Short-term rental vs hotel in Mexico: Which is better? | ShortStayMX',
  description: 'We analyze the pros and cons of renting a furnished apartment vs staying in a hotel.',
};

export default function EnglishRentaVsHotel() {
  return <RentaVsHotelContent lang="en" />;
}
