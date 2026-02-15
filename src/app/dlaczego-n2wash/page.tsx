import type { Metadata } from 'next';
import DlaczegoN2WashPage from '@/components/pages/DlaczegoN2WashPage';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Dlaczego N2Wash? – System Stworzony z Doświadczonymi Detailerami',
  description: 'Poznaj historię N2Wash i dowiedz się dlaczego nasz CRM jest idealny dla myjni i detailingu. System tworzony wspólnie z właścicielami firm z branży.',
  alternates: {
    canonical: 'https://n2wash.com/dlaczego-n2wash',
  },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[
        { name: 'Strona główna', href: '/' },
        { name: 'Dlaczego N2Wash', href: '/dlaczego-n2wash' },
      ]} />
      <DlaczegoN2WashPage />
    </>
  );
}
