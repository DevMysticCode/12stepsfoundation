import { pageMeta } from '@/lib/seo';
import { Breadcrumbs, EmergencyNotice, Eyebrow } from '@/components/ui';
import EnquiryForm from '@/components/EnquiryForm';
import { fullAddress, site, telHref, whatsappHref } from '@/config/site';
import Faq from '@/components/Faq';
import { faqs } from '@/content/general';

export const metadata = pageMeta({
  title: 'Contact & Admissions',
  description: 'Call, WhatsApp or request a confidential callback from 12Steps Foundation, Nisha Nibarana Kendra, Sai Vihar, College Road, Nayagarh, Odisha.',
  path: '/contact',
});

const flow = [
  ['Reach out', 'Call, message on WhatsApp or send the callback form. A first contact carries no obligation.'],
  ['Talk it through', 'A member of the team listens, answers questions and explains what support may be possible.'],
  ['Assessment', 'The centre confirms the right next step after an individual assessment, including any medical needs.'],
  ['Admission, if appropriate', 'Requirements and documents are explained directly by the centre, and families are involved throughout.'],
];

export default function Contact() {
  return (
    <>
      <section className="page-hero page-hero--ivory" id="get-help">
        <div className="wrap">
          <Breadcrumbs trail={[{ name: 'Contact & Admissions', path: '/contact' }]} />
          <div className="contact-grid">
            <div>
              <Eyebrow>Contact &amp; admissions</Eyebrow>
              <h1 className="display" style={{ fontSize: 'clamp(2.4rem, 6vw, 4.4rem)' }}>Reaching out is a <em>courageous</em> first step.</h1>
              <p className="lede" style={{ marginTop: '1.25rem' }}>Whether it is for you or someone you love, we are here to listen and to help you understand the next steps.</p>

              <div className="actions">
                <a href={telHref} className="btn btn--primary">Call {site.contact.phoneDisplay}</a>
                <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">WhatsApp Us</a>
              </div>

              <dl className="contact-list">
                <div><dt>Phone</dt><dd><a href={telHref}>{site.contact.phoneDisplay}</a></dd></div>
                <div><dt>WhatsApp</dt><dd><a href={whatsappHref()} target="_blank" rel="noopener noreferrer">Message us</a></dd></div>
                {site.contact.email && <div><dt>Email</dt><dd><a href={`mailto:${site.contact.email}`}>{site.contact.email}</a></dd></div>}
                <div><dt>Visit</dt><dd>{site.centreName}<br />{fullAddress()}, {site.address.country}<br /><a href={site.address.mapsUrl} target="_blank" rel="noopener noreferrer">Open in maps</a></dd></div>
                <div><dt>Hours</dt><dd>{site.contact.hours ?? 'Please call to confirm the best time to visit or reach the team.'}</dd></div>
              </dl>

              <div style={{ marginTop: '2rem' }}><EmergencyNotice /></div>
            </div>

            <div className="contact-grid__form"><EnquiryForm /></div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--sage-soft)' }}>
        <div className="wrap cols2">
          <div>
            <Eyebrow>Admission enquiry flow</Eyebrow>
            <h2 className="h2">What happens after you reach out.</h2>
            <p className="lede" style={{ marginTop: '1rem' }}>Admission requirements, documents and any fees are confirmed directly by the centre. Nothing is decided through this website.</p>
          </div>
          <ol className="steps-flow" style={{ marginTop: 0 }}>
            {flow.map(([t, d]) => <li key={t}><div><strong>{t}</strong><p>{d}</p></div></li>)}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap faq-sec__grid">
          <div className="faq-sec__head"><Eyebrow>Before you call</Eyebrow><h2 className="h2">Common questions.</h2></div>
          <Faq items={faqs.slice(0, 5)} withSchema={false} />
        </div>
      </section>
    </>
  );
}
