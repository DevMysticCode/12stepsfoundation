import { pageMeta } from '@/lib/seo';
import { Breadcrumbs, Eyebrow, PlaceholderNote } from '@/components/ui';

export const metadata = pageMeta({
  title: 'Terms & Conditions',
  description: 'Terms of use for the 12Steps Foundation website, including medical disclaimer and emergency information.',
  path: '/terms',
});

export default function Terms() {
  return (
    <>
      <section className="page-hero page-hero--ivory">
        <div className="wrap wrap--narrow" style={{ marginInline: 'auto' }}>
          <Breadcrumbs trail={[{ name: 'Terms & Conditions', path: '/terms' }]} />
          <Eyebrow>Terms &amp; Conditions</Eyebrow>
          <h1 className="display" style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4rem)' }}>Terms of use.</h1>
        </div>
      </section>
      <section className="section">
        <div className="wrap wrap--narrow legal prose" style={{ marginInline: 'auto' }}>
          <PlaceholderNote>Draft for review by the centre and a qualified legal adviser before launch.</PlaceholderNote>
          <h2>Information only</h2>
          <p>Content on this website is general educational information. It is not medical advice, diagnosis or treatment and does not replace consultation with a qualified medical professional.</p>
          <h2>No guarantees</h2>
          <p>Recovery looks different for everyone. Nothing on this site guarantees any outcome. Treatment plans depend on individual clinical assessment.</p>
          <h2>Services and availability</h2>
          <p>Descriptions of services show the kinds of support that may be discussed. The services actually available, and their terms, are confirmed directly by the centre.</p>
          <h2>Emergencies</h2>
          <p>This website and its forms are not an emergency service. In a medical emergency call 112 or go to the nearest hospital.</p>
          <h2>Photographs</h2>
          <p>Photographs show the centre’s own activities. Faces are blurred or kept out of frame to protect privacy. Please do not copy or reuse them without permission.</p>
          <h2>External links</h2>
          <p>We are not responsible for the content or practices of third-party sites such as maps or WhatsApp.</p>
          <h2>Governing law</h2>
          <p>These terms are governed by the laws of India. <em>[Jurisdiction details to be confirmed by the centre’s legal adviser.]</em></p>
        </div>
      </section>
    </>
  );
}
