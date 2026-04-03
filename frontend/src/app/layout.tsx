import type { Metadata } from 'next';
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
  title: 'ShortStayMX – Rentas temporales amuebladas en México',
  description: 'Casas y departamentos amueblados para renta temporal en Ciudad de México, Guadalajara, Monterrey, Cancún, Mérida y más. Estancias desde 10 días hasta varios meses.',
  keywords: 'renta temporal amueblada México, apartamento amueblado CDMX, short term rental Mexico, renta por mes Guadalajara, departamento amueblado Monterrey',
  openGraph: {
    title: 'ShortStayMX – Rentas temporales amuebladas en México',
    description: 'Casas y departamentos amueblados para renta temporal en las mejores ciudades de México.',
    url: 'https://shortstaymx.com',
    siteName: 'ShortStayMX',
    locale: 'es_MX',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
