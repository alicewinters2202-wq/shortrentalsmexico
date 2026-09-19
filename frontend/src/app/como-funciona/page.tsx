import { getServerLang } from '@/lib/lang';
import ComoFuncionaContent from '@/components/pages/ComoFuncionaContent';

export const metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/como-funciona',
    languages: {
      'es-MX': 'https://shortstaymx.com/como-funciona',
      'en-US': 'https://shortstaymx.com/en/como-funciona',
      'x-default': 'https://shortstaymx.com/como-funciona',
    },
  },
  title: 'Cómo funciona | ShortStayMX',
  description: 'Aprende cómo rentar un departamento amueblado con ShortStayMX en 5 simples pasos. Proceso claro, seguro y sin sorpresas.',
};

export default async function HowItWorksPage() {
  const lang = await getServerLang();
  return <ComoFuncionaContent lang={lang} />;
}
