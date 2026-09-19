import type { Metadata } from 'next';
import ComoFuncionaContent from '@/components/pages/ComoFuncionaContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/en/como-funciona',
    languages: {
      'es-MX': 'https://shortstaymx.com/como-funciona',
      'en-US': 'https://shortstaymx.com/en/como-funciona',
      'x-default': 'https://shortstaymx.com/como-funciona',
    },
  },
  title: 'How it works | ShortStayMX',
  description: 'Learn how to rent a furnished apartment with ShortStayMX in 5 simple steps. A clear, safe process with no surprises.',
};

export default function EnglishHowItWorksPage() {
  return <ComoFuncionaContent lang="en" />;
}
