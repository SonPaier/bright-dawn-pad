import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://n2wash.com';

  const staticRoutes = [
    '',
    '/crm',
    '/crm/crm-dla-myjni-samochodowych',
    '/crm/crm-dla-studia-detailingu',
    '/funkcje',
    '/funkcje/kalendarz-rezerwacji',
    '/funkcje/generator-ofert',
    '/funkcje/sms-przypomnienia',
    '/funkcje/zarzadzanie-zespolem',
    '/funkcje/protokol-przyjecia-pojazdu',
    '/funkcje/analityka-raporty',
    '/cennik-crm-myjnia-detailing',
    '/opinie',
    '/case-studies',
    '/dlaczego-n2wash',
    '/kontakt',
    '/umow-prezentacje',
    '/demo',
    '/blog',
    '/blog/crm-vs-zeszyt-w-myjni',
    '/blog/jak-nie-zgubic-rezerwacji-w-myjni',
    '/blog/jak-zarzadzac-klientami-w-detailingu',
    '/blog/jak-zwiekszyc-zyski-w-myjni',
    '/polityka-prywatnosci',
    '/regulamin',
  ];

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : route.startsWith('/blog') ? 'monthly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/crm/') || route.startsWith('/funkcje/') ? 0.8 : 0.6,
  }));
}
