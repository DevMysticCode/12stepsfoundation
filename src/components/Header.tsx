'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { nav, site, telHref } from '@/config/site';

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className={`logo${inverted ? ' logo--inv' : ''}`}>
      <Image src="/images/emblem.png" alt="" width={44} height={44} className="logo__mark" priority />
      <span className="logo__text">
        <span className="logo__name">12Steps<em>Foundation</em></span>
        <span className="logo__sub">{site.centreName} · Nayagarh</span>
      </span>
    </span>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <div className="site-header__bar wrap">
        <Link href="/" aria-label={`${site.name} home`} className="site-header__logo">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="site-nav">
          {nav.slice(1).map((n) => (
            <Link key={n.href} href={n.href} aria-current={isActive(n.href) ? 'page' : undefined}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="site-header__actions">
          <Link href="/contact#get-help" className="btn btn--accent btn--sm site-header__cta">
            Get Help Now
          </Link>
          <button
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span />
          </button>
        </div>
      </div>

      <div id="mobile-nav" className="mobile-nav" hidden={!open}>
        <nav aria-label="Mobile" className="mobile-nav__links wrap">
          {nav.map((n, i) => (
            <Link key={n.href} href={n.href} style={{ ['--i' as string]: i }} aria-current={isActive(n.href) ? 'page' : undefined}>
              <span>{String(i + 1).padStart(2, '0')}</span>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="mobile-nav__foot wrap">
          <a href={telHref} className="btn btn--accent">Call {site.contact.phoneDisplay}</a>
          <Link href="/contact#get-help" className="btn btn--ghost-light">Request a callback</Link>
          <p>In an emergency, call <strong>{site.emergency.number}</strong>.</p>
        </div>
      </div>
    </header>
  );
}
