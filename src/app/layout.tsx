import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Manrope, Noto_Sans_Oriya } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyContact from '@/components/StickyContact';
import { JsonLd } from '@/components/ui';
import { site } from '@/config/site';
import { organizationJsonLd } from '@/lib/seo';

const display = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '500', '600', '700'], style: ['normal', 'italic'], variable: '--font-cormorant', display: 'swap' });
const body = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' });
const oriya = Noto_Sans_Oriya({ subsets: ['oriya'], weight: ['400', '600'], variable: '--font-oriya', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Addiction Recovery & Rehabilitation in Odisha`, template: `%s | ${site.name}` },
  description:
    'Compassionate, person-centred addiction recovery support in Nayagarh, Odisha. Counselling, rehabilitation and family support. Recovery is possible. You are not alone.',
  applicationName: site.name,
  icons: { icon: '/images/emblem.png', apple: '/images/emblem.png' },
};

export const viewport: Viewport = { themeColor: '#263d35', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${oriya.variable}`}>
      <head>
        {/* Adds .js so scroll-reveal only hides content when it can actually reveal it */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        {children}
        <Footer />
        <StickyContact />
        <JsonLd data={organizationJsonLd()} />
      </body>
    </html>
  );
}
