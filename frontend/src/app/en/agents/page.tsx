import type { Metadata } from 'next';
import AgentsContent from '@/components/pages/AgentsContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/en/agents',
    languages: {
      'es-MX': 'https://shortstaymx.com/agents',
      'en-US': 'https://shortstaymx.com/en/agents',
      'x-default': 'https://shortstaymx.com/agents',
    },
  },
  title: 'Our team | ShortStayMX',
  description: 'Meet our team of agents at ShortStayMX. Each city has a dedicated team ready to assist you.',
};

export default function EnglishAgentsPage() {
  return <AgentsContent lang="en" />;
}
