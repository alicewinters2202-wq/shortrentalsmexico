import { getServerLang } from '@/lib/lang';
import BlogContent from '@/components/pages/BlogContent';

export const metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/blog',
    languages: {
      'es-MX': 'https://shortstaymx.com/blog',
      'en-US': 'https://shortstaymx.com/en/blog',
      'x-default': 'https://shortstaymx.com/blog',
    },
  },
  title: 'Blog | ShortStayMX — Guías para vivir en México',
  description: 'Guías, consejos y recursos para expatriados, nómadas digitales y viajeros que quieren vivir en México.',
};

export default async function BlogPage() {
  const lang = await getServerLang();
  return <BlogContent lang={lang} />;
}
