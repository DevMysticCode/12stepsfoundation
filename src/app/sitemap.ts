import type { MetadataRoute } from 'next';
import { site } from '@/config/site';
import { services } from '@/content/services';
import { resources } from '@/content/general';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = [
    '/', '/about', '/approach', '/services', '/for-families', '/resources', '/recovery-stories', '/contact', '/privacy', '/terms',
    ...services.map((s) => `/services/${s.slug}`),
    ...resources.map((r) => `/resources/${r.slug}`),
  ];
  return paths.map((p) => ({
    url: new URL(p, site.url).toString(),
    lastModified: now,
    changeFrequency: p === '/' ? 'weekly' : 'monthly',
    priority: p === '/' ? 1 : p.startsWith('/services') || p === '/contact' ? 0.8 : 0.6,
  }));
}
