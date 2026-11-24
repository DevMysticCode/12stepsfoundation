import { pageMeta } from '@/lib/seo';
import { Breadcrumbs, ClosingCta, Eyebrow, Photo, PlaceholderNote } from '@/components/ui';
import Reveal from '@/components/Reveal';
import { fullAddress, site } from '@/config/site';

export const metadata = pageMeta({
  title: 'About the Foundation',
  description:
    'Who 12Steps Foundation (Nisha Nibarana Kendra) is, why it exists, and the values behind its approach to addiction recovery in Nayagarh, Odisha.',
  path: '/about',
});

const beliefs = [
  ['Addiction is a health condition', 'It is not a moral failure or a lack of willpower. Treating it that way opens the door to help rather than shame.'],
  ['Every person is different', 'Different substances, histories, families and strengths. Recovery plans should begin with listening, not with a template.'],
  ['Recovery takes time', 'We do not promise quick fixes or guaranteed outcomes. Honest, patient, long-term support is what we believe in.'],
  ['Families matter', 'Addiction affects everyone close to it. Families deserve support, information and a voice in the journey.'],
  ['Dignity and confidentiality', 'People seeking help are entitled to respect and privacy at every stage.'],
];

export default function About() {
  return (
    <>
      <section className="page-hero page-hero--ivory">
        <div className="wrap">
          <Breadcrumbs trail={[{ name: 'About Us', path: '/about' }]} />
          <div className="split">
            <div>
              <Eyebrow>About the foundation</Eyebrow>
              <h1 className="display">Because nobody should face addiction <em>alone.</em></h1>
              <p className="lede">
                12Steps Foundation, known at our centre as {site.centreName}, is a drug de-addiction and rehabilitation centre in{' '}
                {site.address.locality}, {site.address.region}.
              </p>
            </div>
            <Reveal>
              <Photo src="/images/hall-prayer" alt="Residents gathered together in the centre's hall, photographed from behind" sizes="(max-width: 900px) 100vw, 40vw" ratio="4/3" caption="Our hall in Nayagarh" position="50% 60%" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap cols2">
          <Reveal><h2 className="h2">Why we exist</h2></Reveal>
          <Reveal delay={100} className="prose">
            <p>Addiction quietly reshapes lives: health, relationships, work, money, self-respect. For families in Odisha, finding honest, compassionate help close to home can be hard, and the stigma around addiction makes it harder still.</p>
            <p>We exist to offer a place where a person can ask for help without being judged, and where a family can ask questions without being blamed. Our work is built around dignity, structure, counselling, community and long-term support.</p>
            <p>The centre is affiliated with Narcotics Anonymous, the worldwide fellowship of people in recovery, and marks recovery anniversaries together as a community.</p>
            <p>The centre keeps a shared daily routine that includes prayer, yoga, pranayama, counselling sessions, meals, recreation and group sharing, because recovery is built in the details of ordinary days.</p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal>
            <Photo src="/images/gathering-anniversary" alt="Residents and visitors gathered in the centre's hall for a recovery anniversary; faces blurred for privacy" sizes="(max-width: 1240px) 100vw, 1144px" ratio="16/9" caption="Recovery is shared. A Narcotics Anonymous recovery anniversary at the centre, November 2026" position="50% 45%" />
            <p className="photo-note">Faces are blurred to protect everyone’s privacy.</p>
          </Reveal>
        </div>
      </section>

      <section className="section on-dark">
        <div className="wrap">
          <Eyebrow>What we believe</Eyebrow>
          <h2 className="h2" style={{ maxWidth: '14em', marginBottom: '3rem' }}>Five convictions that shape how we work.</h2>
          <div className="belief" style={{ borderColor: 'var(--line-light)' }}>
            {beliefs.map(([t, d]) => (
              <Reveal key={t} as="article">
                <h3>{t}</h3>
                <p style={{ color: 'rgba(245,241,232,0.82)' }}>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap cols2">
          <Reveal>
            <h2 className="h2">Our commitment to honesty</h2>
            <p className="lede" style={{ marginTop: '1rem' }}>We will not make promises that cannot be kept. No guaranteed outcomes, no invented statistics, no borrowed credentials.</p>
          </Reveal>
          <Reveal delay={100} className="stack">
            <p>Everything on this website describes what the centre does and believes. Where details such as clinical staff, registrations or specific programme methods are still being confirmed, we say so plainly instead of guessing.</p>
            <PlaceholderNote>Registration details, clinical team profiles and affiliations will be added here once supplied and verified by the centre.</PlaceholderNote>
            <dl className="contact-list">
              <div><dt>Centre</dt><dd>{site.centreName}</dd></div>
              <div><dt>Location</dt><dd>{fullAddress()}, {site.address.country}</dd></div>
            </dl>
          </Reveal>
        </div>
      </section>
      <ClosingCta />
    </>
  );
}
