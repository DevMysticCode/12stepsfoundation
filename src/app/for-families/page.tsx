import Link from 'next/link';
import { pageMeta } from '@/lib/seo';
import { Breadcrumbs, ClosingCta, ContactActions, EmergencyNotice, Eyebrow } from '@/components/ui';
import Reveal from '@/components/Reveal';
import Faq from '@/components/Faq';
import { familySigns, faqs, resources } from '@/content/general';

export const metadata = pageMeta({
  title: 'Family Support for Addiction',
  description:
    'Guidance for families: recognising the signs of addiction, understanding it, approaching a loved one, what rehabilitation involves, and how to get professional guidance in Odisha.',
  path: '/for-families',
});

const expect = [
  ['A listening first call', 'Tell us what is happening in your own words. You do not need medical terms or a decision.'],
  ['Honest information', 'What addiction is, what treatment can and cannot do, and what options may exist for your situation.'],
  ['Individual assessment', 'The right plan depends on the person. It is confirmed after assessment by the centre’s team, not decided in advance.'],
  ['Your role, explained', 'How family can support recovery without carrying all of it, and how to look after yourself too.'],
];

export default function Families() {
  const guides = resources.filter((r) => r.kicker === 'For families' || r.kicker === 'Rehabilitation');
  return (
    <>
      <section className="page-hero page-hero--ivory">
        <div className="wrap wrap--narrow" style={{ marginInline: 'auto' }}>
          <Breadcrumbs trail={[{ name: 'For Families', path: '/for-families' }]} />
          <Eyebrow>For families</Eyebrow>
          <h1 className="display" style={{ maxWidth: 'none' }}>You don’t have to figure this out <em>alone.</em></h1>
          <p className="lede">
            If someone you love is struggling with alcohol or drugs, you are probably frightened, tired, and unsure who to trust. You are
            not to blame, and you are not the only one.
          </p>
          <ContactActions />
        </div>
      </section>

      <section className="section" style={{ background: 'var(--terra)', color: '#1d1a15' }}>
        <div className="wrap cols2">
          <Reveal>
            <p className="eyebrow" style={{ color: '#3b2412' }}>Recognising the signs</p>
            <h2 className="h2">What families often notice first.</h2>
            <p style={{ marginTop: '1rem' }}>No single sign proves addiction, and many have other causes. If several appear together or continue, it is reasonable to ask for guidance.</p>
          </Reveal>
          <Reveal delay={100}><ul className="signs">{familySigns.map((s) => <li key={s}>{s}</li>)}</ul></Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap cols2">
          <Reveal className="prose">
            <Eyebrow>Understanding addiction</Eyebrow>
            <h2 className="h2" style={{ marginTop: 0 }}>It is a health condition, <em>not a choice to hurt you.</em></h2>
            <p>Addiction changes how the brain handles reward, stress and self-control. That is why promises are broken and trust is damaged, even when the person truly wants to stop. Understanding this does not excuse harm. It explains why willpower alone so rarely works and why treatment, support and time matter.</p>
            <p>Recovery is possible. It is usually gradual, and setbacks are common. What helps most is steady, respectful support.</p>
            <h2>Approaching someone you love</h2>
            <ul>
              <li>Pick a calm moment when they are sober and you are not angry.</li>
              <li>Say what you have noticed and how you feel, rather than accusing.</li>
              <li>Listen. Expect defensiveness and be ready to try again another day.</li>
              <li>Offer a concrete next step, such as speaking to someone together.</li>
              <li>Avoid threats you will not carry out.</li>
            </ul>
            <p><Link href="/resources/how-to-talk-to-a-loved-one" className="link-arrow">Read the full guide</Link></p>
          </Reveal>
          <Reveal delay={100}>
            <Eyebrow>What to expect when you call</Eyebrow>
            <ol className="steps-flow" style={{ marginTop: 0 }}>
              {expect.map(([t, d]) => <li key={t}><div><strong>{t}</strong><p>{d}</p></div></li>)}
            </ol>
            <div style={{ marginTop: '2rem' }}><EmergencyNotice compact /></div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--sage-soft)' }}>
        <div className="wrap">
          <h2 className="h2" style={{ marginBottom: '2rem' }}>Guides for families</h2>
          <ul className="res-list">
            {guides.map((r) => (
              <li key={r.slug} className="res-item">
                <Link href={`/resources/${r.slug}`}><span className="k">{r.minutes} min read</span><div><h3 className="h3">{r.title}</h3><p style={{ marginTop: '0.4rem' }}>{r.excerpt}</p></div></Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap faq-sec__grid">
          <div className="faq-sec__head"><Eyebrow>Families ask</Eyebrow><h2 className="h2">Common questions.</h2></div>
          <Faq items={faqs.filter((f) => /family|visit|admission|confidential|emergency|after/i.test(f.q))} withSchema={false} />
        </div>
      </section>
      <ClosingCta title="You don’t have to carry this alone." text="Speak with our team. Tell us what is happening and we will help you understand what to do next." />
    </>
  );
}
