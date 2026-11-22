import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import { Breadcrumbs, ClosingCta, EmergencyNotice, Eyebrow } from '@/components/ui';
import { resources } from '@/content/general';

export const dynamicParams = false;
export const generateStaticParams = () => resources.map((r) => ({ slug: r.slug }));
const get = (slug: string) => resources.find((r) => r.slug === slug);

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const r = get((await params).slug);
  if (!r) return {};
  return pageMeta({ title: r.title, description: r.excerpt, path: `/resources/${r.slug}` });
}

export default async function Article({ params }: { params: Promise<{ slug: string }> }) {
  const r = get((await params).slug);
  if (!r) notFound();
  const others = resources.filter((x) => x.slug !== r.slug).slice(0, 3);
  return (
    <>
      <section className="page-hero page-hero--sage">
        <div className="wrap wrap--narrow" style={{ marginInline: 'auto' }}>
          <Breadcrumbs trail={[{ name: 'Resources', path: '/resources' }, { name: r.title, path: `/resources/${r.slug}` }]} />
          <Eyebrow>{r.kicker} · {r.minutes} min read</Eyebrow>
          <h1 className="display" style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4rem)', maxWidth: 'none' }}>{r.title}</h1>
        </div>
      </section>
      <article className="section">
        <div className="wrap wrap--narrow article" style={{ marginInline: 'auto' }}>
          {r.body.map((p) => <p key={p}>{p}</p>)}
          <div style={{ margin: '2.5rem 0' }}><EmergencyNotice /></div>
          <p className="review-note">General educational information, not medical advice. Clinical review by the centre’s qualified professionals is pending.</p>
        </div>
      </article>
      <section className="related section">
        <div className="wrap">
          <h2 className="h3">Keep reading</h2>
          <div className="related__list">
            {others.map((o) => <Link key={o.slug} href={`/resources/${o.slug}`}><span>{o.title}</span><span aria-hidden="true">→</span></Link>)}
          </div>
        </div>
      </section>
      <ClosingCta />
    </>
  );
}
