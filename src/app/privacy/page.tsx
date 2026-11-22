import { pageMeta } from '@/lib/seo';
import { Breadcrumbs, Eyebrow, PlaceholderNote } from '@/components/ui';
import { site, telHref } from '@/config/site';

export const metadata = pageMeta({
  title: 'Privacy Policy',
  description: 'How 12Steps Foundation collects, uses and protects the limited information you share through this website.',
  path: '/privacy',
});

export default function Privacy() {
  return (
    <>
      <section className="page-hero page-hero--ivory">
        <div className="wrap wrap--narrow" style={{ marginInline: 'auto' }}>
          <Breadcrumbs trail={[{ name: 'Privacy Policy', path: '/privacy' }]} />
          <Eyebrow>Privacy Policy</Eyebrow>
          <h1 className="display" style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4rem)' }}>Your privacy matters to us.</h1>
          <p className="lede">Seeking help for addiction is sensitive. We collect as little as we can and handle it with care.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap wrap--narrow legal prose" style={{ marginInline: 'auto' }}>
          <PlaceholderNote>This policy is a plain-language draft for review by the centre and a qualified legal adviser before launch, including compliance with India’s Digital Personal Data Protection Act, 2023.</PlaceholderNote>

          <h2>What we collect</h2>
          <p>If you use the callback form, we ask for your name, mobile number, who the enquiry is for, a convenient time and language, and an optional short note. We ask you <strong>not</strong> to include medical or other sensitive details in the form.</p>

          <h2>Why we collect it</h2>
          <p>Only to contact you about your enquiry. We do not use it for advertising and we do not sell or share it for marketing.</p>

          <h2>Who sees it</h2>
          <p>Your enquiry is sent to the centre’s team so they can call you back. It may be handled by the service providers used to deliver the form (for example, hosting or messaging services) solely for that purpose.</p>

          <h2>Phone and WhatsApp</h2>
          <p>If you call or message us, your number is visible to us. Please avoid sharing sensitive medical details over WhatsApp, which is a third-party service with its own privacy practices.</p>

          <h2>Cookies and analytics</h2>
          <p>This website does not currently use advertising cookies. If analytics are added, this policy will be updated and consent requested where required.</p>

          <h2>How long we keep it</h2>
          <p>Enquiry details are kept only as long as needed to respond to you and for any follow-up you ask for. <em>[Retention period to be confirmed by the centre.]</em></p>

          <h2>Your choices</h2>
          <p>You can ask us to correct or delete the information you sent, or tell us to stop contacting you, by calling <a href={telHref}>{site.contact.phoneDisplay}</a>{site.contact.email ? <> or writing to <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a></> : null}.</p>

          <h2>Emergencies</h2>
          <p>Information sent through this website is not monitored as an emergency service. In an emergency call <a href="tel:112">112</a>.</p>

          <h2>Changes</h2>
          <p>We may update this policy and will show the date of the latest version here. <em>[Last updated: to be set at launch.]</em></p>
        </div>
      </section>
    </>
  );
}
