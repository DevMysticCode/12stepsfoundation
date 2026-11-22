import Link from 'next/link';
import { pageMeta } from '@/lib/seo';
import { Breadcrumbs, ClosingCta, Eyebrow, PlaceholderNote } from '@/components/ui';
import JourneyMap from '@/components/JourneyMap';
import Reveal from '@/components/Reveal';
import { schedule } from '@/content/general';

export const metadata = pageMeta({
  title: 'Our 12-Step Recovery Approach',
  description:
    'How the 12-step recovery philosophy shapes support at 12Steps Foundation: honesty, hope, faith, courage, change and recovery, and why every journey is different.',
  path: '/approach',
});

const pillars = [
  ['Honesty', 'Telling the truth about what is happening, first to yourself, then to others, is where change usually begins.'],
  ['Hope', 'Believing that things can be different, even when it is hard to see how.'],
  ['Faith', 'Trust in a process, in people, and for many in something greater than themselves.'],
  ['Courage', 'Facing difficult feelings and choices, one at a time.'],
  ['Change', 'Small daily choices that, over time, become a different way of living.'],
  ['Recovery', 'An ongoing journey, not a finish line.'],
];

export default function Approach() {
  return (
    <>
      <section className="page-hero page-hero--forest hero-dark on-dark">
        <div className="wrap">
          <Breadcrumbs tone="dark" trail={[{ name: 'Our Approach', path: '/approach' }]} />
          <Eyebrow>Our approach</Eyebrow>
          <h1 className="display">One step. Then <em>another.</em></h1>
          <p className="lede">
            The twelve-step philosophy is a framework for recovery built on honesty, community and personal change. It is a widely used
            approach. It is not a medical treatment, and it works best alongside professional medical and counselling support.
          </p>
        </div>
      </section>

      <section className="section on-dark on-dark--deep">
        <div className="wrap">
          <Reveal><h2 className="h2" style={{ marginBottom: '2.5rem' }}>The twelve steps, <em>and why they are not a straight line.</em></h2></Reveal>
          <JourneyMap />
          <div style={{ marginTop: '2.5rem' }}>
            <PlaceholderNote>The centre’s specific 12-step methodology and the wording of each step are to be supplied by the centre and verified before publication. Nothing here describes a method the centre has not confirmed.</PlaceholderNote>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal><Eyebrow>Principles displayed at our centre</Eyebrow><h2 className="h2" style={{ maxWidth: '13em' }}>Six words we return to.</h2></Reveal>
          <div className="cards-flat cards-flat--3" style={{ marginTop: '2.5rem' }}>
            {pillars.map(([t, d], i) => (
              <Reveal key={t} delay={i * 60}>
                <h3 className="h3" style={{ marginBottom: '0.5rem' }}>{t}</h3>
                <p style={{ margin: 0, color: 'var(--ink-soft)' }}>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--sage-soft)' }}>
        <div className="wrap cols2">
          <Reveal className="prose">
            <h2 className="h2" style={{ marginBottom: '1rem' }}>Recovery is not linear</h2>
            <p>People move forward, pause, and sometimes step back. A setback is not a failure. It is information about what support is needed next.</p>
            <p>Some people need medical care to stop safely. Some need to be away from familiar surroundings for a time. Some need their family involved from the start. This is why we begin with listening and individual assessment, not a fixed plan.</p>
            <p>The twelve-step approach is one part of a wider picture that also includes counselling, healthy routine, family support and aftercare.</p>
            <div className="actions"><Link href="/services" className="btn btn--primary">See programs &amp; services</Link></div>
          </Reveal>
          <Reveal delay={100}>
            <h3 className="h3">A shared daily rhythm</h3>
            <ul className="day__list" style={{ columns: 1, marginTop: '1rem' }}>
              {schedule.map((s, i) => <li key={i}><time>{s.time}</time><span>{s.label}</span></li>)}
            </ul>
            <p className="photo-note">From the activity chart displayed at the centre. Timings are confirmed by the team.</p>
          </Reveal>
        </div>
      </section>
      <ClosingCta />
    </>
  );
}
