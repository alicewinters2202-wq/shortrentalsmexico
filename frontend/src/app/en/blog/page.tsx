import type { Metadata } from 'next';
import BlogContent from '@/components/pages/BlogContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/en/blog',
    languages: {
      'es-MX': 'https://shortstaymx.com/blog',
      'en-US': 'https://shortstaymx.com/en/blog',
      'x-default': 'https://shortstaymx.com/blog',
    },
  },
  title: 'Blog | ShortStayMX — Guides for living in Mexico',
  description: 'Guides, tips and resources for expats, digital nomads and travelers who want to live in Mexico.',
};

export default function EnglishBlogPage() {
  return <BlogContent lang="en" />;
}
