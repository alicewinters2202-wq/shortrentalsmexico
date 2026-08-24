import { getServerLang } from '@/lib/lang';

export async function generateMetadata() {
  const lang = await getServerLang();
  const es = lang !== 'en';
  return {
    alternates: { canonical: 'https://temporaryrentalsmexico.com/contact' },
    title: es ? 'Escríbenos | TemporaryRentalsMexico' : 'Contact us | TemporaryRentalsMexico',
    description: es
      ? 'Contáctanos y te respondemos en menos de 24 horas.'
      : 'Contact us and we respond within 24 hours.',
  };
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
