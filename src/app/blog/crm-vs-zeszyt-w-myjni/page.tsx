import type { Metadata } from 'next';
import PlaceholderPage from '@/components/pages/PlaceholderPage';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'CRM vs Zeszyt w Myjni – Dlaczego Warto Przejść na System',
  description: 'Porównanie prowadzenia myjni samochodowej w zeszycie i w systemie CRM. Dowiedz się ile czasu i pieniędzy tracisz przez brak cyfrowego zarządzania.',
  alternates: {
    canonical: 'https://n2wash.com/blog/crm-vs-zeszyt-w-myjni',
  },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[
        { name: 'Strona główna', href: '/' },
        { name: 'Blog', href: '/blog' },
        { name: 'CRM vs zeszyt w myjni', href: '/blog/crm-vs-zeszyt-w-myjni' },
      ]} />
      <PlaceholderPage />
    </>
  );
}
