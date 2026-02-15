import type { Metadata, Viewport } from 'next';
import { Outfit } from 'next/font/google';
import Script from 'next/script';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-outfit',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1e40af',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://n2wash.com'),
  title: {
    default: 'N2Wash.com - CRM i System Rezerwacji dla Myjni i Detailingu',
    template: '%s | N2Wash.com',
  },
  description: 'Skup się na detailingu, chaos zostaw nam. Poznaj CRM i system rezerwacji stworzony przy udziale doświadczonych detailerów i właścicieli myjni samochodowych.',
  keywords: ['myjnia samochodowa', 'detailing', 'CRM', 'system rezerwacji', 'kalendarz online', 'zarządzanie myjnią', 'auto detailing', 'rezerwacje online'],
  authors: [{ name: 'N2Wash.com' }],
  openGraph: {
    title: 'N2Wash.com - CRM i System Rezerwacji dla Myjni i Detailingu',
    description: 'Skup się na detailingu, chaos zostaw nam. System CRM i rezerwacji stworzony przez detailerów, dla detailerów.',
    type: 'website',
    url: 'https://n2wash.com',
    locale: 'pl_PL',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'N2Wash.com - CRM dla Myjni i Detailingu',
    description: 'System rezerwacji i CRM dla myjni samochodowych i studiów detailingu.',
  },
  alternates: {
    canonical: 'https://n2wash.com',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

const jsonLdGraph = [
  {
    '@type': 'WebSite',
    '@id': 'https://n2wash.com/#website',
    url: 'https://n2wash.com',
    name: 'N2Wash.com',
    description: 'CRM i system rezerwacji dla myjni samochodowych i studiów detailingu',
    inLanguage: 'pl-PL',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://n2wash.com/?s={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  },
  {
    '@type': 'Organization',
    '@id': 'https://n2wash.com/#organization',
    name: 'N2Wash.com',
    url: 'https://n2wash.com',
    email: 'hello@n2wash.com',
    description: 'Twórcy systemu CRM i rezerwacji online dla myjni samochodowych i studiów detailingu w Polsce.',
    foundingDate: '2024',
    areaServed: {
      '@type': 'Country',
      name: 'Polska',
    },
    sameAs: [],
  },
  {
    '@type': 'SoftwareApplication',
    '@id': 'https://n2wash.com/#software',
    name: 'N2Wash.com',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: 'CRM i system rezerwacji dla myjni samochodowych i studiów detailingu',
    offers: {
      '@type': 'Offer',
      price: '75',
      priceCurrency: 'PLN',
      priceValidUntil: '2026-12-31',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '50',
    },
    provider: {
      '@id': 'https://n2wash.com/#organization',
    },
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': jsonLdGraph,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={outfit.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-foreground font-sans antialiased">
        <TooltipProvider>
          {children}
          <Toaster />
          <Sonner />
        </TooltipProvider>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7R7MH3MMJK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7R7MH3MMJK');
          `}
        </Script>
      </body>
    </html>
  );
}
