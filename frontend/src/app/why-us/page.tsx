import { getT } from '@/lib/lang';
import WhyUs from '@/components/home/WhyUs';
import Link from 'next/link';
import LangToggle from '@/components/layout/LangToggle';

export async function generateMetadata() {
  return {
    title: 'Por que elegirnos | ShortStayMX',
    description: 'Conoce por que ShortStayMX es la mejor opcion para tu renta temporal en Mexico. Mas de 4 anos de experiencia, equipo de +40 personas y mejores precios que Airbnb.',
  };
}

export default async function WhyUsPage() {
  const { lang } = await getT();
  return (
    <div style={{ backgroundColor: 'var(--cream)', minHeight: '100vh' }}>
      <nav className="sticky top-0 z-40 backdrop-blur-md" style={{ backgroundColor: 'rgba(28,28,30,0.9)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-4">
          <Link href="/" className="text-sm transition-colors hover:opacity-80" style={{ color: 'var(--muted)' }}>
            Home
          </Link>
          <span style={{ color: 'var(--border)' }}>|</span>
          <Link href="/" className="font-serif font-medium" style={{ color: 'var(--ink)' }}>ShortStayMX</Link>
          <div className="ml-auto">
            <LangToggle currentLang={lang} className="text-[--muted] hover:text-[--ink]" />
          </div>
        </div>
      </nav>
      <WhyUs lang={lang} />
    </div>
  );
}
