import type { Metadata } from 'next';
import Index from '@/components/pages/Index';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://n2wash.com',
  },
};

export default function HomePage() {
  return <Index />;
}
