import Image from 'next/image';
import Link from 'next/link';
import { pageMeta } from '@/lib/seo';
import Reveal from '@/components/Reveal';
import JourneyMap from '@/components/JourneyMap';
import Faq from '@/components/Faq';
import { ClosingCta, EmergencyNotice, Eyebrow, Photo, PlaceholderNote } from '@/components/ui';
import { serviceHref, serviceIndex } from '@/content/services';
import { familySigns, schedule } from '@/content/general';
import { site, telHref } from '@/config/site';

export const metadata = pageMeta({
  title: 'Addiction Recovery & Rehabilitation in Nayagarh, Odisha',
  description:
    'Compassionate addiction recovery support in Odisha: counselling, rehabilitation, family support and aftercare at 12 Steps Nisha Nibarana Kendra, Nayagarh. Recovery is possible.',
  path: '/',
});

const values = [
  ['Compassionate, non-judgmental care', 'Addiction is a health condition, not a character flaw. Everyone who reaches out is met with respect.'],
  ['Recovery centred on the individual', 'No two people arrive with the same story, so no two recovery plans should look the same.'],
  ['Professional guidance', 'Treatment decisions belong with qualified professionals after proper assessment, not with guesswork.'],
  ['A supportive community', 'People recover better alongside others who understand. Shared routines and sharing sessions matter.'],
  ['Families included', 'Addiction touches everyone close to it. Families deserve information, guidance and care too.'],
  ['Support that lasts', 'Recovery does not end at discharge. Long-term support is part of the plan from the beginning.'],
];

export default function Home() {
  return (
    <>
      {/* A. HERO */}
      <section className="hero hero-dark on-dark" aria-labelledby="hero-title">
        <div className="wrap hero__grid">
          <div>
            <p className="hero__kicker">
              <span>Nayagarh, Odisha</span>
              <span className="odia" lang="or">{site.centreNameOdia}</span>
            </p>
            <h1 id="hero-title" className="display hero__title">
              Your past does not <em>define</em> your future.
            </h1>
            <p className="hero__sub">
              Recovery is possible. With compassionate care, professional guidance and the right support, a healthier tomorrow can begin
              with one step.
            </p>
            <div className="actions">
              <Link href="/contact#get-help" className="btn btn--accent">Start Your Recovery</Link>
              <a href={telHref} className="btn btn--ghost-light">Talk to Someone</a>
            </div>
            <p className="hero__scroll">Every recovery begins with one step</p>
          </div>

          <div className="hero__media">
            <div className="hero__arch">
              <Image
                src="/images/hall-prayer-1600.webp"
                alt="Residents seated together for morning prayer at the centre, photographed from behind to protect their privacy"
                fill
                priority
                sizes="(max-width: 900px) 90vw, 440px"
                style={{ objectPosition: '45% 60%' }}
              />
            </div>
            <p className="hero__cap">Morning prayer at our centre. Faces are not shown, to protect everyone’s privacy.</p>
          </div>
        </div>
      </section>

      {/* B. EMOTIONAL STATEMENT */}
      <section className="statement section" aria-labelledby="statement-title">
        <div className="wrap statement__grid">
          <Reveal>
            <div className="statement__mark" aria-hidden="true">“</div>
            <h2 id="statement-title" className="statement__quote">
              <span>Behind every addiction is a human being.</span>
              <span>Behind every recovery is a story worth believing in.</span>
            </h2>
          </Reveal>
          <Reveal delay={150} className="statement__side">
            <p>
              We do not see a diagnosis, a habit or a mistake. We see someone’s son, daughter, parent, partner or friend, who has been
              carrying more than most people know.
            </p>
            <p>
              Addiction is a health condition. It is not a moral failure, and shame has never helped anyone get better. What helps is
              dignity, honest guidance, patience, and people who stay.
            </p>
          </Reveal>
        </div>
      </section>

      {/* D. INTRODUCTION */}
      <section className="intro section" aria-labelledby="intro-title">
        <div className="wrap intro__grid">
          <Reveal className="intro__media">
            <Photo src="/images/carrom" alt="Residents playing carrom together, faces blurred for privacy" sizes="(max-width: 900px) 80vw, 40vw" caption="Photograph from our centre" />
            <Photo src="/images/yoga" alt="Residents practising a yoga pose together, faces blurred for privacy" sizes="(max-width: 900px) 40vw, 20vw" />
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>Who we are</Eyebrow>
            <h2 id="intro-title" className="h2">A place to <em>begin again</em>, with people who understand.</h2>
            <p className="lede" style={{ marginTop: '1.25rem' }}>
              12Steps Foundation, known at our centre as <strong>{site.centreName}</strong>, is a drug de-addiction and rehabilitation
              centre in {site.address.locality}, {site.address.region}. We exist because nobody should have to face addiction alone, and
              because families need somewhere honest to turn.
            </p>
            <ul className="commit">
              <li><span>i</span><div><strong>Commitment to recovery</strong><p>Recovery is a long road. We aim to walk the first steps of it with you, patiently and without judgement.</p></div></li>
              <li><span>ii</span><div><strong>Commitment to individuals and families</strong><p>The person seeking help matters, and so do the people who love them.</p></div></li>
              <li><span>iii</span><div><strong>Belief in long-term rehabilitation</strong><p>Lasting change takes time, structure and support that continues after the first weeks.</p></div></li>
            </ul>
            <div className="actions"><Link href="/about" className="btn btn--primary">About the foundation</Link></div>
          </Reveal>
        </div>
      </section>

      {/* E. APPROACH */}
      <section className="approach section on-dark on-dark--deep" aria-labelledby="approach-title">
        <div className="wrap">
          <div className="approach__head">
            <Reveal>
              <Eyebrow>Our recovery approach</Eyebrow>
              <h2 id="approach-title" className="h2">Twelve steps. <em>Never a straight line.</em></h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="lede">
                Recovery is rarely linear. People move forwards, pause, and sometimes step back. Each person’s needs are different, and
                the pace is theirs. Explore the twelve steps below.
              </p>
            </Reveal>
          </div>
          <JourneyMap />
          <div style={{ marginTop: '2.5rem' }}>
            <PlaceholderNote>The centre’s own wording and programme details for each step are to be supplied and verified before publishing.</PlaceholderNote>
          </div>
          <div className="actions"><Link href="/approach" className="btn btn--ghost-light">Read about our approach</Link></div>
        </div>
      </section>

      {/* F. SERVICES */}
      <section className="index section" aria-labelledby="index-title">
        <div className="wrap">
          <div className="index__head">
            <Reveal>
              <Eyebrow>Programs &amp; services</Eyebrow>
              <h2 id="index-title" className="h2">Support for the <em>whole</em> person.</h2>
            </Reveal>
            <Reveal delay={120}><p className="lede">Recovery draws on medical guidance, counselling, community and daily structure. Explore each area below.</p></Reveal>
          </div>
          <ul className="index__list">
            {serviceIndex.map((s) => (
              <li key={s.n} className="index__row">
                <Link href={s.href ?? serviceHref(s.slug)}>
                  <span className="n">{s.n}</span>
                  <span className="t">{s.title}</span>
                  <span className="a" aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="index__foot">
            <p style={{ margin: 0, color: 'var(--ink-soft)', maxWidth: '40em' }}>
              The services offered and how they are combined are confirmed by the centre after an individual assessment.
            </p>
            <Link href="/services" className="link-arrow">All programs &amp; services</Link>
          </div>
        </div>
      </section>

      {/* G. VALUES */}
      <section className="values section" aria-labelledby="values-title">
        <div className="wrap">
          <Reveal>
            <Eyebrow>Why 12Steps Foundation</Eyebrow>
            <h2 id="values-title" className="h2" style={{ maxWidth: '14em' }}>What we believe a good recovery needs.</h2>
          </Reveal>
          <div className="values__grid">
            {values.map(([t, d], i) => (
              <Reveal key={t} className="value" delay={i * 70}>
                <b aria-hidden="true">{String(i + 1).padStart(2, '0')}</b>
                <h3>{t}</h3>
                <p>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* H. ENVIRONMENT */}
      <section className="env section" aria-labelledby="env-title">
        <div className="wrap">
          <div className="env__head">
            <Reveal>
              <Eyebrow>The recovery environment</Eyebrow>
              <h2 id="env-title" className="h2">Ordinary days that <em>rebuild</em> a life.</h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="lede">Prayer, yoga, counselling, shared meals, games and group sharing. Recovery is built in the rhythm of a day, together.</p>
            </Reveal>
          </div>
          <Reveal className="mosaic">
            <Photo src="/images/gathering-anniversary" alt="Residents and visitors gathered in the centre's hall for a recovery anniversary, with balloons and the daily activity chart on the wall; faces blurred for privacy" sizes="(max-width: 900px) 100vw, 55vw" caption="Marking a recovery anniversary with Narcotics Anonymous, November 2026" position="50% 55%" />
            <Photo src="/images/yoga" alt="Residents practising yoga, faces blurred for privacy" sizes="(max-width: 900px) 50vw, 35vw" caption="Yoga" position="50% 35%" />
            <Photo src="/images/carrom" alt="Residents playing carrom, faces blurred for privacy" sizes="(max-width: 900px) 50vw, 35vw" caption="Recreation" />
          </Reveal>
          <p className="photo-note">All photographs are from the centre. Faces have been blurred or kept out of frame to protect privacy.</p>

          <div className="day">
            <Reveal>
              <h3 className="h3">A day at the centre</h3>
              <p style={{ color: 'var(--ink-soft)', marginTop: '0.75rem' }}>The activity chart displayed at our centre. Timings may change and are confirmed by the team.</p>
            </Reveal>
            <Reveal delay={100}>
              <ul className="day__list">
                {schedule.map((s, i) => (
                  <li key={i}><time>{s.time}</time><span>{s.label}</span></li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* I. FAMILIES */}
      <section className="families section" aria-labelledby="fam-title">
        <div className="wrap families__grid">
          <Reveal>
            <Eyebrow>For families</Eyebrow>
            <h2 id="fam-title" className="display" style={{ fontSize: 'clamp(2.4rem, 6vw, 4.6rem)' }}>
              You don’t have to figure this out <em>alone.</em>
            </h2>
            <p className="lede" style={{ marginTop: '1.5rem' }}>
              Many people who contact us are parents, spouses, siblings or children, frightened and unsure what to do. We can help you
              understand addiction, recognise the signs, approach someone you love, and know what to expect from rehabilitation.
            </p>
            <div className="actions">
              <Link href="/for-families" className="btn btn--primary">Speak With Our Team</Link>
              <Link href="/resources" className="btn btn--ghost">Read the family guides</Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h3 className="h3" style={{ marginBottom: '1rem' }}>Common signs families notice</h3>
            <ul className="signs">{familySigns.slice(0, 5).map((s) => <li key={s}>{s}</li>)}</ul>
            <p style={{ fontSize: '0.88rem', marginTop: '1rem' }}>No single sign proves addiction. If several sound familiar, a conversation is a good next step.</p>
          </Reveal>
        </div>
      </section>

      {/* J. STORIES */}
      <section className="stories section" aria-labelledby="stories-title">
        <div className="wrap">
          <div className="stories__box">
            <Reveal>
              <Eyebrow>Recovery stories</Eyebrow>
              <h2 id="stories-title" className="h2">Stories will be told here, <em>only when they are ready.</em></h2>
              <p className="lede" style={{ marginTop: '1.25rem' }}>
                We will share recovery stories only with the clear, informed permission of the people who lived them, and always in a way
                that protects their identity if they wish. We would rather show nothing than show something untrue.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="stack">
                <p style={{ margin: 0, color: 'var(--ink-soft)' }}>If you are in recovery and would like to share your story, in your own words and entirely on your terms, we would be glad to hear from you.</p>
                <Link href="/recovery-stories" className="link-arrow">How we share stories</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* K. FAQ */}
      <section className="faq-sec section" aria-labelledby="faq-title">
        <div className="wrap faq-sec__grid">
          <div className="faq-sec__head">
            <Eyebrow>Questions</Eyebrow>
            <h2 id="faq-title" className="h2">Things people often <em>ask us.</em></h2>
            <p className="lede" style={{ marginTop: '1rem' }}>Clear, careful answers. They are general information and do not replace advice from a medical professional.</p>
            <div style={{ marginTop: '1.5rem' }}><EmergencyNotice compact /></div>
          </div>
          <Faq />
        </div>
      </section>

      {/* L. CLOSING */}
      <ClosingCta />
    </>
  );
}
