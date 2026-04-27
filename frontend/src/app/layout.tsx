import type { Metadata } from 'next';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ShortStayMX — Rentas temporales amuebladas en México',
  description: 'Casas y departamentos amueblados para renta temporal en Ciudad de México, Guadalajara, Monterrey, Cancún, Mérida y más. Estancias desde 10 días hasta varios meses.',
  keywords: 'renta temporal amueblada México, apartamento amueblado CDMX, short term rental Mexico, renta por mes Guadalajara, departamento amueblado Monterrey, furnished apartment Mexico City',
  verification: {
    google: 'JnnIwW92LhU3lWITqLKo880L30T9mZ6-07cI1c2N6Tk',
  },
  openGraph: {
    title: 'ShortStayMX — Rentas temporales amuebladas en México',
    description: 'Departamentos y casas amuebladas para renta temporal en las mejores ciudades de México. Desde 10 días hasta varios meses.',
    url: 'https://shortstaymx.com',
    siteName: 'ShortStayMX',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: 'https://shortstaymx.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ShortStayMX — Rentas temporales amuebladas en México',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ShortStayMX — Rentas temporales amuebladas en México',
    description: 'Departamentos y casas amuebladas para renta temporal en las mejores ciudades de México.',
    images: ['https://shortstaymx.com/og-image.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${dmSans.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "ShortStayMX",
              "url": "https://shortstaymx.com",
              "logo": "https://shortstaymx.com/logo.png",
              "description": "Rentas temporales amuebladas en México. Departamentos y casas para estancias de corto y mediano plazo en Ciudad de México, Guadalajara, Monterrey, Cancún, Tulum y más.",
              "foundingDate": "2021",
              "numberOfEmployees": { "@type": "QuantitativeValue", "value": 40 },
              "areaServed": "México",
              "telephone": "+52-55-6378-3517",
              "email": "shortstaymx2021@gmail.com",
              "sameAs": ["https://shortstaymx.com"],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "MX"
              }
            })
          }}
        />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
