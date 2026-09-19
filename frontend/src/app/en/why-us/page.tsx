import type { Metadata } from 'next';
import WhyUsContent from '@/components/pages/WhyUsContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://shortstaymx.com/en/why-us',
    languages: {
      'es-MX': 'https://shortstaymx.com/why-us',
      'en-US': 'https://shortstaymx.com/en/why-us',
      'x-default': 'https://shortstaymx.com/why-us',
    },
  },
  title: 'Why Choose Us | ShortStayMX',
  description: 'Discover why ShortStayMX is the best option for your short-term rental in Mexico. Over 3 years of experience, a team of 40+ people, and better prices than Airbnb.',
};

export default function EnglishWhyUsPage() {
  return <WhyUsContent lang="en" />;
}
