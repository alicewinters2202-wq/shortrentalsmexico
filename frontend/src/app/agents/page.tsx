import { getServerLang } from '@/lib/lang';
import AgentsContent from '@/components/pages/AgentsContent';

export async function generateMetadata() {
  return {
    alternates: {
      canonical: 'https://shortstaymx.com/agents',
      languages: {
        'es-MX': 'https://shortstaymx.com/agents',
        'en-US': 'https://shortstaymx.com/en/agents',
        'x-default': 'https://shortstaymx.com/agents',
      },
    },
    title: 'Nuestro equipo | ShortStayMX',
    description: 'Conoce a nuestro equipo de agentes en ShortStayMX. Cada ciudad tiene un equipo dedicado para atenderte.',
  };
}

export default async function AgentsPage() {
  const lang = await getServerLang();
  return <AgentsContent lang={lang} />;
}
