import Link from 'next/link';
import { pageMeta } from '@/lib/seo';
import { Breadcrumbs, ClosingCta, EmergencyNotice, Eyebrow } from '@/components/ui';
import Reveal from '@/components/Reveal';
import { AVAILABILITY_NOTE, serviceHref, services } from '@/content/services';

export const metadata = pageMeta({
  title: 'Programs & Services: Addiction Recovery in Odisha',
  description:
    'Alcohol and drug addiction recovery, medical support, counselling, relapse prevention, mental health support, rehabilitation and aftercare, explained clearly.',
  path: '/services',
});

export default function Services() {
  return (
    <>
      <section className="page-hero page-hero--sage">
        <div className="wrap">
          <Breadcrumbs trail={[{ name: 'Programs & Services', path: '/services' }]} />
          <Eyebrow>Programs &amp; services</Eyebrow>
          <h1 className="display">Support that looks at the <em>whole person.</em></h1>
          <p className="lede">{AVAILABILITY_NOTE}</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <ol className="res-list">
            {services.map((s, i) => (
              <li key={s.slug} className="res-item">
                <Reveal>
                  <Link href={serviceHref(s.slug)}>
                    <span className="k">{String(i + 1).padStart(2, '0')} · {s.kicker}</span>
                    <div><h2>{s.title}</h2><p style={{ marginTop: '0.5rem' }}>{s.summary}</p></div>
                  </Link>
                </Reveal>
              </li>
            ))}
            <li className="res-item">
              <Link href="/for-families">
                <span className="k">08 · Families</span>
                <div><h2>Family Counselling &amp; Support</h2><p style={{ marginTop: '0.5rem' }}>Guidance for the people who love someone with an addiction.</p></div>
              </Link>
            </li>
          </ol>
          <div style={{ marginTop: '3rem', maxWidth: '44rem' }}><EmergencyNotice /></div>
        </div>
      </section>
      <ClosingCta />
    </>
  );
}
