import type { Metadata } from 'next';
import { site } from '@/config/site';

export function pageMeta(opts: { title: string; description: string; path: string; image?: string }): Metadata {
  const url = new URL(opts.path, site.url).toString();
  const image = opts.image ?? '/images/hall-prayer-1600.webp';
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: site.name,
      locale: 'en_IN',
      type: 'website',
      images: [{ url: image }],
    },
    twitter: { card: 'summary_large_image', title: opts.title, description: opts.description, images: [image] },
  };
}

/** Organisation data limited to facts supported by the centre's own materials. */
export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: `${site.name} – ${site.centreName}`,
    alternateName: site.centreNameOdia,
    description: site.descriptor,
    url: site.url,
    logo: new URL('/images/emblem.png', site.url).toString(),
    telephone: site.contact.phoneE164,
    ...(site.contact.email ? { email: site.contact.email } : {}),
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.lines.join(', '),
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      addressCountry: 'IN',
      ...(site.address.postalCode ? { postalCode: site.address.postalCode } : {}),
    },
    areaServed: { '@type': 'AdministrativeArea', name: 'Odisha, India' },
    // Intentionally not typed as MedicalClinic/LocalBusiness until registration and clinical credentials are verified.
    sameAs: site.social.map((s) => s.href),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: new URL(it.path, site.url).toString(),
    })),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}
