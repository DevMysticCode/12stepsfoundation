import Link from 'next/link';
import { Logo } from './Header';
import { fullAddress, nav, site, telHref, whatsappHref } from '@/config/site';
import { services, serviceHref } from '@/content/services';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__grid">
        <div className="site-footer__brand">
          <Logo inverted />
          <p>
            A place to begin again. We offer compassionate, person-centred support for people affected by addiction, and for the
            families who love them.
          </p>
          <p className="odia" lang="or">{site.centreNameOdia}</p>
        </div>

        <nav aria-label="Footer" className="site-footer__col">
          <h2>Explore</h2>
          <ul>
            {nav.map((n) => (
              <li key={n.href}><Link href={n.href}>{n.label}</Link></li>
            ))}
            <li><Link href="/recovery-stories">Recovery Stories</Link></li>
          </ul>
        </nav>

        <nav aria-label="Services" className="site-footer__col">
          <h2>Support</h2>
          <ul>
            {services.map((s) => (
              <li key={s.slug}><Link href={serviceHref(s.slug)}>{s.title}</Link></li>
            ))}
            <li><Link href="/for-families">Family Counselling</Link></li>
          </ul>
        </nav>

        <div className="site-footer__col">
          <h2>Contact</h2>
          <address>
            {site.centreName}<br />
            {fullAddress()}<br />
            {site.address.country}
          </address>
          <ul>
            <li><a href={telHref}>{site.contact.phoneDisplay}</a></li>
            <li><a href={whatsappHref()} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            {site.contact.email && <li><a href={`mailto:${site.contact.email}`}>{site.contact.email}</a></li>}
            <li><a href={site.address.mapsUrl} target="_blank" rel="noopener noreferrer">Find us on the map</a></li>
          </ul>
          {site.social.length > 0 && (
            <ul className="site-footer__social">
              {site.social.map((s) => (
                <li key={s.href}><a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a></li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="wrap site-footer__emergency">
        <p>
          <strong>Medical emergency?</strong> If someone has overdosed, is having seizures or severe withdrawal, or is in danger of
          harming themselves, call <a href="tel:112">{site.emergency.number}</a> or go to the nearest hospital now. This website is not
          an emergency service.
        </p>
      </div>

      <div className="wrap site-footer__legal">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <p>Information on this site is educational and does not replace professional medical advice.</p>
        <ul>
          <li><Link href="/privacy">Privacy Policy</Link></li>
          <li><Link href="/terms">Terms &amp; Conditions</Link></li>
        </ul>
      </div>
    </footer>
  );
}
