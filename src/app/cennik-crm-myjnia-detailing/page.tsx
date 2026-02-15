import type { Metadata } from 'next';
import CennikPage from '@/components/pages/CennikPage';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Cennik – Przejrzyste Plany dla Myjni i Detailingu',
  description: 'Sprawdź cennik N2Wash CRM. Przejrzyste plany dopasowane do wielkości myjni i studia detailingu. Bez ukrytych kosztów, z bezpłatnym okresem próbnym.',
  alternates: {
    canonical: 'https://n2wash.com/cennik-crm-myjnia-detailing',
  },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[
        { name: 'Strona główna', href: '/' },
        { name: 'Cennik', href: '/cennik-crm-myjnia-detailing' },
      ]} />
      <CennikPage />
    </>
  );
}
