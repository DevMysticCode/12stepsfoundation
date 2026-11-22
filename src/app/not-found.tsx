import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="wrap wrap--narrow" style={{ marginInline: 'auto' }}>
        <p className="eyebrow">Page not found</p>
        <h1 className="display">This path doesn’t lead anywhere, <em>but there is another.</em></h1>
        <p className="lede" style={{ marginTop: '1.25rem' }}>The page you were looking for may have moved. Let us help you find your way.</p>
        <div className="actions">
          <Link href="/" className="btn btn--primary">Go to the homepage</Link>
          <Link href="/contact#get-help" className="btn btn--ghost">Get help now</Link>
        </div>
      </div>
    </section>
  );
}
