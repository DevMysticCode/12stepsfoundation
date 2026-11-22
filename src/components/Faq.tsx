import { faqs as defaultFaqs } from '@/content/general';
import { JsonLd } from './ui';
import { faqJsonLd } from '@/lib/seo';

/** Native <details> keeps it accessible, keyboard operable and working without JS. Animation is CSS only. */
export default function Faq({ items = defaultFaqs, withSchema = true }: { items?: { q: string; a: string }[]; withSchema?: boolean }) {
  return (
    <div className="faq">
      {withSchema && <JsonLd data={faqJsonLd(items)} />}
      {items.map((f, i) => (
        <details key={f.q} className="faq__item" name="faq">
          <summary>
            <span className="faq__n">{String(i + 1).padStart(2, '0')}</span>
            <span className="faq__q">{f.q}</span>
            <span className="faq__icon" aria-hidden="true" />
          </summary>
          <div className="faq__a"><p>{f.a}</p></div>
        </details>
      ))}
    </div>
  );
}
