import Link from 'next/link';
import { pageMeta } from '@/lib/seo';
import { Breadcrumbs, ClosingCta, Eyebrow, PlaceholderNote } from '@/components/ui';
import Reveal from '@/components/Reveal';
import { resources } from '@/content/general';

export const metadata = pageMeta({
  title: 'Resources: Learn About Addiction & Recovery',
  description: 'Plain-language guides on understanding addiction, recognising the signs, talking to a loved one and what to expect from rehabilitation.',
  path: '/resources',
});

export default function Resources() {
  return (
    <>
      <section className="page-hero page-hero--ivory">
        <div className="wrap">
          <Breadcrumbs trail={[{ name: 'Resources', path: '/resources' }]} />
          <Eyebrow>Blog &amp; educational resources</Eyebrow>
          <h1 className="display">Understanding is <em>the first step.</em></h1>
          <p className="lede">Plain-language guides for people in recovery and the families who support them. General education only, not medical advice.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <ul className="res-list">
            {resources.map((r) => (
              <li key={r.slug} className="res-item">
                <Reveal>
                  <Link href={`/resources/${r.slug}`}>
                    <div><span className="k">{r.kicker}</span><p className="m">{r.minutes} min read</p></div>
                    <div><h2>{r.title}</h2><p style={{ marginTop: '0.5rem' }}>{r.excerpt}</p></div>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: '3rem', maxWidth: '44rem' }}>
            <PlaceholderNote>These guides are general educational information. Clinical review by the centre’s qualified professionals is pending before wider promotion.</PlaceholderNote>
          </div>
        </div>
      </section>
      <ClosingCta />
    </>
  );
}
