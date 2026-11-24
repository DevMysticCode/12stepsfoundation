import Link from 'next/link';
import { pageMeta } from '@/lib/seo';
import { Breadcrumbs, ClosingCta, Eyebrow, Photo } from '@/components/ui';
import Reveal from '@/components/Reveal';
import { site, telHref, whatsappHref } from '@/config/site';

export const metadata = pageMeta({
  title: 'Recovery Stories',
  description: 'How 12Steps Foundation will share recovery stories: only with permission, with identities protected, and never fabricated.',
  path: '/recovery-stories',
});

const promises = [
  ['Permission first', 'A story is shared only with the clear, informed, written consent of the person who lived it, who may withdraw it at any time.'],
  ['Identity protected', 'Names, faces and identifying details stay private unless the person chooses otherwise. Many will choose to remain anonymous, and that is respected.'],
  ['Nothing invented', 'We do not write stories on anyone’s behalf, use actors or stock photographs, or publish success statistics we cannot prove.'],
  ['Honest about the road', 'Recovery has setbacks. Stories are not presented as before-and-after promises, and no one’s outcome is a guarantee for another’s.'],
];

export default function Stories() {
  return (
    <>
      <section className="page-hero page-hero--forest hero-dark on-dark">
        <div className="wrap">
          <Breadcrumbs tone="dark" trail={[{ name: 'Recovery Stories', path: '/recovery-stories' }]} />
          <Eyebrow>Recovery stories</Eyebrow>
          <h1 className="display">Stories belong to the people who <em>lived them.</em></h1>
          <p className="lede">This space is reserved for real stories, shared freely. Until the first one is ready, we will leave it honestly empty.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap cols2">
          <Reveal><h2 className="h2">How we will share stories</h2></Reveal>
          <Reveal delay={100}>
            <div className="belief" style={{ borderTop: '1px solid var(--charcoal)' }}>
              {promises.map(([t, d]) => (
                <article key={t} style={{ gridTemplateColumns: '1fr', alignItems: 'start', gap: '0.5rem' }}><h3 style={{ fontSize: '1.7rem' }}>{t}</h3><p>{d}</p></article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap split split--rev">
          <Reveal>
            <Photo src="/images/gathering-circle" alt="Residents seated together in the centre's hall facing a row of visitors, with balloons on the wall; faces blurred for privacy" sizes="(max-width: 900px) 100vw, 55vw" ratio="4/3" caption="Milestones are marked together" position="50% 50%" />
            <p className="photo-note">Faces are blurred. This is not a testimonial; it shows the community that surrounds recovery.</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="h2">Recovery is <em>marked together.</em></h2>
            <p className="lede" style={{ marginTop: '1rem' }}>Anniversaries and milestones are moments the whole community can share in. Individual stories will appear here only once the people who lived them are ready, and on their terms.</p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--sage-soft)' }}>
        <div className="wrap cols2">
          <Reveal>
            <h2 className="h2">Would you like to <em>share yours?</em></h2>
            <p className="lede" style={{ marginTop: '1rem' }}>
              If you are in recovery and want to tell your story, in your own words and entirely on your terms, you can speak with our
              team first. There is no pressure, and you can decide later.
            </p>
          </Reveal>
          <Reveal delay={100} className="stack">
            <div className="actions" style={{ marginTop: 0 }}>
              <a href={telHref} className="btn btn--primary">Call {site.contact.phoneDisplay}</a>
              <a href={whatsappHref('Hello, I would like to ask about sharing my recovery story.')} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">WhatsApp</a>
            </div>
            <p className="photo-note">Looking for support yourself? <Link href="/contact#get-help">Request a confidential callback</Link>.</p>
          </Reveal>
        </div>
      </section>
      <ClosingCta />
    </>
  );
}
