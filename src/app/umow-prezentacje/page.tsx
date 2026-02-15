import type { Metadata } from 'next';
import PlaceholderPage from '@/components/pages/PlaceholderPage';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Umów Prezentację N2Wash – Bezpłatne Demo Systemu CRM',
  description: 'Umów bezpłatną prezentację systemu N2Wash. Pokażemy Ci jak CRM dla myjni i detailingu może usprawnić Twój biznes. Bez zobowiązań.',
  alternates: {
    canonical: 'https://n2wash.com/umow-prezentacje',
  },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[
        { name: 'Strona główna', href: '/' },
        { name: 'Umów prezentację', href: '/umow-prezentacje' },
      ]} />
      <PlaceholderPage />
    </>
  );
}
