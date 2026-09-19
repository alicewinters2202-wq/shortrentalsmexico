import WhyUs from '@/components/home/WhyUs';
import Link from 'next/link';
import LangToggle from '@/components/layout/LangToggle';

export default function WhyUsContent({ lang }: { lang: 'es' | 'en' }) {
  const homePath = lang === 'en' ? '/en' : '/';
  return (
    <div style={{ backgroundColor: 'var(--cream)', minHeight: '100vh' }}>
      <nav className="sticky top-0 z-40 backdrop-blur-md" style={{ backgroundColor: 'rgba(28,28,30,0.9)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-4">
          <Link href={homePath} className="text-sm transition-colors hover:opacity-80" style={{ color: 'var(--muted)' }}>
            Home
          </Link>
          <span style={{ color: 'var(--border)' }}>|</span>
          <Link href={homePath} className="font-serif font-medium" style={{ color: 'var(--ink)' }}>ShortStayMX</Link>
          <div className="ml-auto">
            <LangToggle currentLang={lang} className="text-[--muted] hover:text-[--ink]" />
          </div>
        </div>
      </nav>
      <WhyUs lang={lang} />
    </div>
  );
}
