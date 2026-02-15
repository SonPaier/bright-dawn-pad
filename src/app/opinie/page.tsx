import type { Metadata } from 'next';
import OpiniePage from '@/components/pages/OpiniePage';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Opinie Klientów N2Wash – Co Mówią Właściciele Myjni i Studiów Detailingu',
  description: 'Przeczytaj opinie właścicieli myjni samochodowych i studiów detailingu o systemie N2Wash. Sprawdź jak CRM pomógł im rozwinąć biznes.',
  alternates: {
    canonical: 'https://n2wash.com/opinie',
  },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[
        { name: 'Strona główna', href: '/' },
        { name: 'Opinie', href: '/opinie' },
      ]} />
      <OpiniePage />
    </>
  );
}
