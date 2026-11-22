import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import { Breadcrumbs, ClosingCta, EmergencyNotice, Eyebrow, Photo } from '@/components/ui';
import Reveal from '@/components/Reveal';
import { AVAILABILITY_NOTE, serviceHref, services, type Service } from '@/content/services';
import { site, telHref, whatsappHref } from '@/config/site';

export const dynamicParams = false;
export const generateStaticParams = () => services.map((s) => ({ slug: s.slug }));

const get = (slug: string) => services.find((s) => s.slug === slug);

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const s = get((await params).slug);
  if (!s) return {};
  return pageMeta({
    title: s.title,
    description: `${s.summary} Information and guidance from 12Steps Foundation, Nayagarh, Odisha.`,
    path: `/services/${s.slug}`,
  });
}

function HelpPanel({ s }: { s: Service }) {
  return (
    <aside className="panel" aria-label="Get guidance">
      <h2>Speak with our team</h2>
      <p>Ask about {s.kicker.toLowerCase()} support. A first conversation is confidential and carries no obligation.</p>
      <a href={telHref} className="btn btn--accent">Call {site.contact.phoneDisplay}</a>
      <a href={whatsappHref(`Hello, I would like to ask about ${s.title}.`)} target="_blank" rel="noopener noreferrer" className="btn btn--ghost-light">WhatsApp</a>
      <Link href="/contact#get-help" className="btn btn--ghost-light">Request a callback</Link>
    </aside>
  );
}

function Related({ s }: { s: Service }) {
  const items = s.related.map((slug) =>
    slug === 'for-families' ? { title: 'Support for families', href: '/for-families' } : { title: get(slug)!.title, href: serviceHref(slug) },
  );
  return (
    <section className="related section">
      <div className="wrap">
        <h2 className="h3">Related support</h2>
        <div className="related__list">
          {items.map((i) => (
            <Link key={i.href} href={i.href}><span>{i.title}</span><span aria-hidden="true">→</span></Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const trail = (s: Service) => [
  { name: 'Programs & Services', path: '/services' },
  { name: s.title, path: `/services/${s.slug}` },
];

function Guidance({ s }: { s: Service }) {
  return (
    <>
      <h2>How to seek professional guidance</h2>
      <ul className="checks">{s.guidance.map((g) => <li key={g}>{g}</li>)}</ul>
      {s.caution && (
        <div style={{ marginTop: '1.5rem' }}>
          <div className="emergency"><strong>Important safety information</strong><span>{s.caution}</span></div>
        </div>
      )}
      <p className="photo-note" style={{ marginTop: '1.5rem' }}>{AVAILABILITY_NOTE}</p>
    </>
  );
}

/* Variant A: long-form editorial with a sticky help panel */
function Split({ s }: { s: Service }) {
  return (
    <>
      <section className="page-hero page-hero--ivory">
        <div className="wrap">
          <Breadcrumbs trail={trail(s)} />
          <div className="split">
            <div><Eyebrow>{s.kicker}</Eyebrow><h1 className="display">{s.title}</h1><p className="lede">{s.summary}</p></div>
            {s.image && <Photo src={s.image.src} alt={s.image.alt} sizes="(max-width: 900px) 100vw, 40vw" ratio="4/3" position="50% 55%" />}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap svc-split">
          <div className="prose">
            {s.intro.map((p) => <p key={p}>{p}</p>)}
            <p className="pull" style={{ margin: '2.5rem 0' }}>{s.pullQuote}</p>
            <h2>Who may benefit</h2>
            <ul className="checks">{s.who.map((w) => <li key={w}>{w}</li>)}</ul>
            <h2>What the support involves</h2>
            {s.involves.map((i) => <div key={i.title}><h3>{i.title}</h3><p>{i.text}</p></div>)}
            <Guidance s={s} />
          </div>
          <div className="svc-split__aside"><HelpPanel s={s} /><EmergencyNotice compact /></div>
        </div>
      </section>
    </>
  );
}

/* Variant B: step-by-step timeline */
function Journey({ s }: { s: Service }) {
  return (
    <>
      <section className="page-hero page-hero--sage">
        <div className="wrap">
          <Breadcrumbs trail={trail(s)} />
          <Eyebrow>{s.kicker}</Eyebrow>
          <h1 className="display">{s.title}</h1>
          <p className="lede">{s.summary}</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap cols2">
          <Reveal className="prose">
            {s.intro.map((p) => <p key={p}>{p}</p>)}
            <h2>Who may benefit</h2>
            <ul className="checks">{s.who.map((w) => <li key={w}>{w}</li>)}</ul>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="h3" style={{ marginBottom: '1.75rem' }}>What the process involves</h2>
            <ol className="timeline">{s.involves.map((i) => <li key={i.title}><h3>{i.title}</h3><p>{i.text}</p></li>)}</ol>
          </Reveal>
        </div>
      </section>
      <section className="section on-dark">
        <div className="wrap cols2">
          <div><p className="pull">{s.pullQuote}</p></div>
          <div className="prose">
            <h2 style={{ marginTop: 0, color: 'var(--ivory)' }}>How to seek professional guidance</h2>
            <ul className="checks">{s.guidance.map((g) => <li key={g}>{g}</li>)}</ul>
            <div className="actions">
              <a href={telHref} className="btn btn--accent">Call {site.contact.phoneDisplay}</a>
              <Link href="/contact#get-help" className="btn btn--ghost-light">Request a callback</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingBlock: '3rem' }}>
        <div className="wrap wrap--narrow">
          {s.caution ? (
            <div className="emergency"><strong>Important safety information</strong><span>{s.caution}</span></div>
          ) : (
            <EmergencyNotice compact />
          )}
          <p className="photo-note" style={{ marginTop: '1.25rem' }}>{AVAILABILITY_NOTE}</p>
        </div>
      </section>
    </>
  );
}

/* Variant C: dark, statement-led */
function Statement({ s }: { s: Service }) {
  return (
    <>
      <section className="page-hero page-hero--forest hero-dark on-dark">
        <div className="wrap">
          <Breadcrumbs tone="dark" trail={trail(s)} />
          <Eyebrow>{s.kicker}</Eyebrow>
          <h1 className="display">{s.title}</h1>
          <p className="pull" style={{ marginTop: '2.5rem' }}>{s.pullQuote}</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap cols2">
          <Reveal className="prose"><p className="lede">{s.summary}</p>{s.intro.map((p) => <p key={p}>{p}</p>)}</Reveal>
          <Reveal delay={100}>
            <h2 className="h3" style={{ marginBottom: '1rem' }}>Who may benefit</h2>
            <ul className="checks">{s.who.map((w) => <li key={w}>{w}</li>)}</ul>
          </Reveal>
        </div>
      </section>
      <section className="section" style={{ background: 'var(--sage-soft)' }}>
        <div className="wrap">
          <h2 className="h2" style={{ marginBottom: '2.5rem' }}>What the support involves</h2>
          <div className="cards-flat cards-flat--3" style={{ gridTemplateColumns: undefined }}>
            {s.involves.map((i, n) => (
              <Reveal key={i.title} delay={n * 60}>
                <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>{String(n + 1).padStart(2, '0')}</p>
                <h3 className="h3" style={{ marginBottom: '0.5rem' }}>{i.title}</h3>
                <p style={{ margin: 0, color: 'var(--ink-soft)' }}>{i.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap svc-split">
          <div className="prose"><Guidance s={s} /></div>
          <div className="svc-split__aside"><HelpPanel s={s} /></div>
        </div>
      </section>
    </>
  );
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const s = get((await params).slug);
  if (!s) notFound();
  return (
    <>
      {s.variant === 'split' && <Split s={s} />}
      {s.variant === 'journey' && <Journey s={s} />}
      {s.variant === 'statement' && <Statement s={s} />}
      <Related s={s} />
      <ClosingCta />
    </>
  );
}
