import type { Metadata } from 'next';
import PlaceholderPage from '@/components/pages/PlaceholderPage';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Jak Zarządzać Klientami w Detailingu – Poradnik',
  description: 'Dowiedz się jak skutecznie zarządzać bazą klientów w studio detailingu. Historia usług, preferencje, automatyczne przypomnienia i budowanie lojalności.',
  alternates: {
    canonical: 'https://n2wash.com/blog/jak-zarzadzac-klientami-w-detailingu',
  },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[
        { name: 'Strona główna', href: '/' },
        { name: 'Blog', href: '/blog' },
        { name: 'Jak zarządzać klientami', href: '/blog/jak-zarzadzac-klientami-w-detailingu' },
      ]} />
      <PlaceholderPage />
    </>
  );
}
