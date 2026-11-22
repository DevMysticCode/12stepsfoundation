'use client';

import { useState } from 'react';
import { steps, principles } from '@/content/general';

/**
 * Interactive presentation of the 12 steps along a winding (non-linear) path.
 * Step wording is intentionally empty until the centre supplies its approved text.
 */
export default function JourneyMap() {
  const [active, setActive] = useState(0);
  const step = steps[active];

  // 12 nodes along a gentle S-curve in a 1000x360 viewBox
  const pts = steps.map((_, i) => {
    const x = 50 + i * (900 / 11);
    const y = 180 + Math.sin(i * 0.9) * 95 * (i % 2 === 0 ? 1 : 0.8);
    return { x, y };
  });
  const d = pts.reduce((acc, p, i) => {
    if (i === 0) return `M ${p.x} ${p.y}`;
    const prev = pts[i - 1];
    const cx = (prev.x + p.x) / 2;
    return `${acc} C ${cx} ${prev.y}, ${cx} ${p.y}, ${p.x} ${p.y}`;
  }, '');

  return (
    <div className="journey">
      <div className="journey__map" role="group" aria-label="The twelve steps. Choose a step to read about it.">
        <svg viewBox="0 0 1000 360" aria-hidden="true" focusable="false" preserveAspectRatio="none">
          <path d={d} className="journey__path" />
        </svg>
        <ol className="journey__nodes">
          {steps.map((s, i) => (
            <li key={s.n} style={{ left: `${(pts[i].x / 1000) * 100}%`, top: `${(pts[i].y / 360) * 100}%` }}>
              <button
                type="button"
                className={i === active ? 'is-active' : ''}
                aria-pressed={i === active}
                aria-label={`Step ${s.n}`}
                onClick={() => setActive(i)}
              >
                {s.n}
              </button>
            </li>
          ))}
        </ol>
      </div>

      <div className="journey__panel" aria-live="polite">
        <p className="journey__num">Step {step.n} <span>of 12</span></p>
        {step.text ? (
          <p className="journey__text">{step.text}</p>
        ) : (
          <>
            <p className="journey__text">
              The wording and practice for each step is shared by the centre’s team directly, in conversation, at the right time for each person.
            </p>
            <p className="journey__hint">Programme details for this step will be published here once supplied and verified by the centre.</p>
          </>
        )}
        <div className="journey__nav">
          <button type="button" onClick={() => setActive((a) => Math.max(0, a - 1))} disabled={active === 0}>← Previous</button>
          <button type="button" onClick={() => setActive((a) => Math.min(11, a + 1))} disabled={active === 11}>Next →</button>
        </div>
      </div>

      <ul className="journey__principles" aria-label="Principles displayed at the centre">
        {principles.map((p) => <li key={p}>{p}</li>)}
      </ul>
    </div>
  );
}
