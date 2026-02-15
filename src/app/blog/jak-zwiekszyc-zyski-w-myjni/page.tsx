import type { Metadata } from 'next';
import PlaceholderPage from '@/components/pages/PlaceholderPage';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Jak Zwiększyć Zyski w Myjni Samochodowej – Strategie i Narzędzia',
  description: 'Sprawdzone sposoby na zwiększenie przychodów w myjni samochodowej. Optymalizacja grafiku, upselling usług, analityka i automatyzacja procesów.',
  alternates: {
    canonical: 'https://n2wash.com/blog/jak-zwiekszyc-zyski-w-myjni',
  },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[
        { name: 'Strona główna', href: '/' },
        { name: 'Blog', href: '/blog' },
        { name: 'Jak zwiększyć zyski', href: '/blog/jak-zwiekszyc-zyski-w-myjni' },
      ]} />
      <PlaceholderPage />
    </>
  );
}
