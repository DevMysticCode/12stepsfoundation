import Link from 'next/link';
import { telHref, whatsappHref } from '@/config/site';

/** Mobile-only persistent contact controls. Hidden ≥ 900px where the header CTA is always visible. */
export default function StickyContact() {
  return (
    <div className="sticky-contact" role="region" aria-label="Quick contact">
      <a href={telHref} className="sticky-contact__btn">Call</a>
      <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="sticky-contact__btn">WhatsApp</a>
      <Link href="/contact#get-help" className="sticky-contact__btn sticky-contact__btn--primary">Get Help Now</Link>
    </div>
  );
}
