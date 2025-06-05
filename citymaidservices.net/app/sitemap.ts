import { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://citymaidservices.net';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/services', '/about', '/contact', '/pricing', '/testimonials'];
  
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
}
