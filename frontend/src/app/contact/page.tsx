import { getServerLang } from '@/lib/lang';
import ContactContent from '@/components/pages/ContactContent';

export async function generateMetadata() {
  return {
    alternates: {
      canonical: 'https://shortstaymx.com/contact',
      languages: {
        'es-MX': 'https://shortstaymx.com/contact',
        'en-US': 'https://shortstaymx.com/en/contact',
        'x-default': 'https://shortstaymx.com/contact',
      },
    },
    title: 'Contacto | ShortStayMX',
    description: 'Contáctanos por WhatsApp o mediante nuestro formulario. Respondemos en menos de 24 horas.',
  };
}

export default async function ContactPage() {
  const lang = await getServerLang();
  return <ContactContent lang={lang} />;
}
