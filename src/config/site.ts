/**
 * Single source of truth for organisation facts.
 *
 * RULES
 *  - Only values taken from the centre's own materials are filled in.
 *  - Anything unconfirmed is `null` and the UI hides it or shows a
 *    "please call to confirm" fallback. Never invent a value here.
 *  - `verified` documents where each value came from, so it can be audited.
 */
export const site = {
  name: '12Steps Foundation',
  legalName: null as string | null, // TODO(client): registered legal name / registration number
  centreName: 'Nisha Nibarana Kendra',
  centreNameOdia: 'ନିଶା ନିବାରଣ କେନ୍ଦ୍ର',
  descriptor: 'Drug De-Addiction & Rehabilitation Centre',
  tagline: 'Every recovery begins with one step.',
  // Replace via NEXT_PUBLIC_SITE_URL in production. No domain is assumed.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',

  contact: {
    phoneDisplay: '94377 11191',
    phoneE164: '+919437711191',
    // WhatsApp uses the same number as printed on the centre's flyers.
    // TODO(client): confirm this number is active on WhatsApp.
    whatsappE164: '919437711191',
    email: null as string | null, // TODO(client): enquiry email address
    hours: null as string | null, // TODO(client): e.g. "Mon–Sat, 9am–6pm"
  },

  address: {
    lines: ['Sai Vihar, College Road'],
    locality: 'Nayagarh',
    region: 'Odisha',
    country: 'India',
    postalCode: null as string | null, // TODO(client): PIN code
    // Maps link is a search query, not a pinned location, until coordinates are supplied.
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=' +
      encodeURIComponent('12 Steps Nisha Nibarana Kendra, Sai Vihar, College Road, Nayagarh, Odisha'),
  },

  // Only add profiles that genuinely exist.
  social: [] as { label: string; href: string }[],

  emergency: { number: '112', label: 'India national emergency number' },

  verified: {
    phone: 'Printed on all centre flyers (94377 11191)',
    address: 'Printed on centre flyers: Sai Vihar, College Road, Nayagarh',
    name: 'Centre signage and flyers: "12 Steps Nisha Nibarana Kendra"',
  },
} as const;

export const fullAddress = () =>
  [...site.address.lines, site.address.locality, site.address.region, site.address.postalCode]
    .filter(Boolean)
    .join(', ');

export const telHref = `tel:${site.contact.phoneE164}`;

export const whatsappHref = (message = 'Hello, I would like to speak with someone about support for recovery.') =>
  `https://wa.me/${site.contact.whatsappE164}?text=${encodeURIComponent(message)}`;

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Approach', href: '/approach' },
  { label: 'Programs & Services', href: '/services' },
  { label: 'For Families', href: '/for-families' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
] as const;
