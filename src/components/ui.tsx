import Link from 'next/link';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { site, telHref, whatsappHref } from '@/config/site';
import { breadcrumbJsonLd } from '@/lib/seo';

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}

export function Breadcrumbs({ trail, tone = 'light' }: { trail: { name: string; path: string }[]; tone?: 'light' | 'dark' }) {
  const all = [{ name: 'Home', path: '/' }, ...trail];
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(all)} />
      <nav aria-label="Breadcrumb" className={`crumbs crumbs--${tone}`}>
        <ol>
          {all.map((c, i) => (
            <li key={c.path}>
              {i < all.length - 1 ? <Link href={c.path}>{c.name}</Link> : <span aria-current="page">{c.name}</span>}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

/** Clearly distinguishes real centre photographs from representative imagery. */
export function Photo({
  src, alt, sizes, caption, className = '', priority = false, ratio, position,
}: {
  src: string; alt: string; sizes: string; caption?: string; className?: string; priority?: boolean; ratio?: string; position?: string;
}) {
  return (
    <figure className={`photo ${className}`} style={ratio ? { aspectRatio: ratio } : undefined}>
      <Image
        src={`${src}-1600.webp`}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        style={{ objectFit: 'cover', objectPosition: position ?? 'center' }}
      />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export function EmergencyNotice({ compact = false }: { compact?: boolean }) {
  return (
    <aside className={`emergency${compact ? ' emergency--compact' : ''}`} role="note" aria-label="Medical emergency information">
      <strong>In a medical emergency, do not wait for a callback.</strong>
      <span>
        For overdose, seizures, severe withdrawal, collapse or risk of self-harm, call{' '}
        <a href="tel:112">{site.emergency.number}</a> ({site.emergency.label}) or go to the nearest hospital. Website enquiries are
        not an emergency service.
      </span>
    </aside>
  );
}

export function ContactActions({ light = false }: { light?: boolean }) {
  return (
    <div className="actions">
      <a href={telHref} className={`btn ${light ? 'btn--accent' : 'btn--primary'}`}>Call for Support</a>
      <Link href="/contact#get-help" className={`btn ${light ? 'btn--ghost-light' : 'btn--ghost'}`}>Request a Callback</Link>
      <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className={`btn ${light ? 'btn--ghost-light' : 'btn--ghost'}`}>WhatsApp Us</a>
    </div>
  );
}

export function ClosingCta({ title = 'One conversation can be the beginning of a new life.', text = 'If you or someone you love is struggling, reaching out is a courageous first step. Our team is here to listen and help you understand the next steps.' }: { title?: string; text?: string }) {
  return (
    <section className="closing" aria-labelledby="closing-title">
      <div className="wrap closing__inner">
        <Image src="/images/emblem.png" alt="" width={72} height={72} className="closing__mark" />
        <h2 id="closing-title" className="display">{title}</h2>
        <p className="lede">{text}</p>
        <ContactActions light />
        <p className="closing__note">Free to enquire. Your call or message is treated in confidence.</p>
      </div>
    </section>
  );
}

export function PlaceholderNote({ children }: { children: ReactNode }) {
  return <p className="placeholder-note"><span>To be confirmed</span>{children}</p>;
}
