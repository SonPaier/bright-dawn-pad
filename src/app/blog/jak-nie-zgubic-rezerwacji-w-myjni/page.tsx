import type { Metadata } from 'next';
import PlaceholderPage from '@/components/pages/PlaceholderPage';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Jak Nie Zgubić Rezerwacji w Myjni – Sprawdzone Sposoby',
  description: 'Praktyczne porady jak uniknąć gubionych rezerwacji w myjni samochodowej. Kalendarz online, automatyczne przypomnienia i system rezerwacji dla myjni.',
  alternates: {
    canonical: 'https://n2wash.com/blog/jak-nie-zgubic-rezerwacji-w-myjni',
  },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[
        { name: 'Strona główna', href: '/' },
        { name: 'Blog', href: '/blog' },
        { name: 'Jak nie zgubić rezerwacji', href: '/blog/jak-nie-zgubic-rezerwacji-w-myjni' },
      ]} />
      <PlaceholderPage />
    </>
  );
}
