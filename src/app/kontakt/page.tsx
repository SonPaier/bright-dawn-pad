import type { Metadata } from 'next';
import KontaktPage from '@/components/pages/KontaktPage';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Kontakt – N2Wash CRM dla Myjni i Detailingu',
  description: 'Skontaktuj się z zespołem N2Wash. Odpowiemy na pytania dotyczące systemu CRM dla myjni samochodowych i studiów detailingu.',
  alternates: {
    canonical: 'https://n2wash.com/kontakt',
  },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[
        { name: 'Strona główna', href: '/' },
        { name: 'Kontakt', href: '/kontakt' },
      ]} />
      <KontaktPage />
    </>
  );
}
