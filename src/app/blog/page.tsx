import type { Metadata } from 'next';
import PlaceholderPage from '@/components/pages/PlaceholderPage';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Blog – Porady dla Właścicieli Myjni i Studiów Detailingu',
  description: 'Artykuły i porady jak prowadzić myjnię samochodową lub studio detailingu. Zarządzanie klientami, rezerwacje, marketing i rozwój biznesu.',
  alternates: {
    canonical: 'https://n2wash.com/blog',
  },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[
        { name: 'Strona główna', href: '/' },
        { name: 'Blog', href: '/blog' },
      ]} />
      <PlaceholderPage />
    </>
  );
}
