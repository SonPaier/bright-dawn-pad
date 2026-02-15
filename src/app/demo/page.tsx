import type { Metadata } from 'next';
import PlaceholderPage from '@/components/pages/PlaceholderPage';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Demo N2Wash – Wypróbuj CRM dla Myjni i Detailingu',
  description: 'Przetestuj system N2Wash za darmo. Zobacz jak działa CRM dla myjni samochodowych i studiów detailingu. Bez karty kredytowej, bez zobowiązań.',
  alternates: {
    canonical: 'https://n2wash.com/demo',
  },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[
        { name: 'Strona główna', href: '/' },
        { name: 'Demo', href: '/demo' },
      ]} />
      <PlaceholderPage />
    </>
  );
}
