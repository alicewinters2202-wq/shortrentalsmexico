import type { Metadata } from 'next';
import HomeContent from '@/components/home/HomeContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/en',
    languages: {
      'es-MX': 'https://shortstaymx.com/',
      'en-US': 'https://shortstaymx.com/en',
      'x-default': 'https://shortstaymx.com/',
    },
  },
  title: 'ShortStayMX — Furnished Short & Mid-Term Rentals in Mexico',
  description: 'Fully furnished houses and apartments for short and mid-term rental in Mexico City, Guadalajara, Monterrey, Cancún, Mérida and more. Stays from 10 days to several months.',
  openGraph: {
    title: 'ShortStayMX — Furnished Short & Mid-Term Rentals in Mexico',
    description: 'Furnished apartments and houses for short and mid-term rental in Mexico\u2019s best cities. From 10 days to several months.',
    url: 'https://shortstaymx.com/en',
    siteName: 'ShortStayMX',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://shortstaymx.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ShortStayMX — Furnished Short & Mid-Term Rentals in Mexico',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ShortStayMX — Furnished Short & Mid-Term Rentals in Mexico',
    description: 'Furnished apartments and houses for short and mid-term rental in Mexico\u2019s best cities.',
    images: ['https://shortstaymx.com/og-image.jpg'],
  },
};

export default async function EnglishHome() {
  return <HomeContent lang="en" />;
}
