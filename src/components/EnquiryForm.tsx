'use client';

import { useId, useState, type FormEvent } from 'react';
import Link from 'next/link';
import { callbackTimes, enquiryFor, languages, validateEnquiry, type FieldErrors } from '@/lib/enquiry';
import { site, telHref, whatsappHref } from '@/config/site';

type State = 'idle' | 'sending' | 'sent' | 'error';

export default function EnquiryForm({ heading = 'Request a confidential callback' }: { heading?: string }) {
  const uid = useId();
  const [errors, setErrors] = useState<FieldErrors>({});
  const [state, setState] = useState<State>('idle');
  const [serverMsg, setServerMsg] = useState('');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: fd.get('name'),
      phone: fd.get('phone'),
      forWhom: fd.get('forWhom'),
      callbackTime: fd.get('callbackTime'),
      language: fd.get('language'),
      message: fd.get('message'),
      consent: fd.get('consent') === 'on',
      website: fd.get('website'), // honeypot
    };
    const check = validateEnquiry(payload);
    if (!check.ok) {
      setErrors(check.errors);
      setState('idle');
      const first = Object.keys(check.errors)[0];
      (e.currentTarget.elements.namedItem(first) as HTMLElement | null)?.focus();
      return;
    }
    setErrors({});
    setState('sending');
    try {
      const res = await fetch('/api/enquiry', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(payload) });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        setState('sent');
      } else {
        if (json.errors) setErrors(json.errors);
        setServerMsg(json.message ?? 'Something went wrong.');
        setState('error');
      }
    } catch {
      setServerMsg('We could not reach the server. Please check your connection, or call us directly.');
      setState('error');
    }
  }

  if (state === 'sent') {
    return (
      <div className="form-success" role="status" tabIndex={-1}>
        <h3>Thank you. We have your request.</h3>
        <p>
          A member of our team will call you back at the time you chose. Callbacks are not instant, so if things feel urgent please call
          us on <a href={telHref}>{site.contact.phoneDisplay}</a>.
        </p>
        <p className="form-success__emergency">
          If this is a medical emergency, call <a href="tel:112">112</a> now rather than waiting.
        </p>
      </div>
    );
  }

  const err = (k: keyof FieldErrors) => (errors[k] ? `${uid}-${k}-err` : undefined);

  return (
    <form className="form" onSubmit={onSubmit} noValidate aria-labelledby={`${uid}-h`}>
      <h2 id={`${uid}-h`} className="form__title">{heading}</h2>
      <p className="form__intro">
        We only ask for what we need to call you back. Please do not include medical or personal details here. You can share those by
        phone when you are ready.
      </p>

      <div className="field">
        <label htmlFor={`${uid}-name`}>Your name</label>
        <input id={`${uid}-name`} name="name" autoComplete="given-name" aria-invalid={!!errors.name} aria-describedby={err('name')} />
        {errors.name && <p className="field__err" id={err('name')}>{errors.name}</p>}
      </div>

      <div className="field">
        <label htmlFor={`${uid}-phone`}>Mobile number</label>
        <input id={`${uid}-phone`} name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="10-digit mobile number" aria-invalid={!!errors.phone} aria-describedby={err('phone')} />
        {errors.phone && <p className="field__err" id={err('phone')}>{errors.phone}</p>}
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor={`${uid}-forWhom`}>This is for</label>
          <select id={`${uid}-forWhom`} name="forWhom" defaultValue="" aria-invalid={!!errors.forWhom} aria-describedby={err('forWhom')}>
            <option value="" disabled>Choose…</option>
            {enquiryFor.map((o) => <option key={o}>{o}</option>)}
          </select>
          {errors.forWhom && <p className="field__err" id={err('forWhom')}>{errors.forWhom}</p>}
        </div>
        <div className="field">
          <label htmlFor={`${uid}-callbackTime`}>Best time to call</label>
          <select id={`${uid}-callbackTime`} name="callbackTime" defaultValue="" aria-invalid={!!errors.callbackTime} aria-describedby={err('callbackTime')}>
            <option value="" disabled>Choose…</option>
            {callbackTimes.map((o) => <option key={o}>{o}</option>)}
          </select>
          {errors.callbackTime && <p className="field__err" id={err('callbackTime')}>{errors.callbackTime}</p>}
        </div>
      </div>

      <div className="field">
        <label htmlFor={`${uid}-language`}>Preferred language</label>
        <select id={`${uid}-language`} name="language" defaultValue="" aria-invalid={!!errors.language} aria-describedby={err('language')}>
          <option value="" disabled>Choose…</option>
          {languages.map((o) => <option key={o}>{o}</option>)}
        </select>
        {errors.language && <p className="field__err" id={err('language')}>{errors.language}</p>}
      </div>

      <div className="field">
        <label htmlFor={`${uid}-message`}>Anything you would like us to know <span className="opt">(optional)</span></label>
        <textarea id={`${uid}-message`} name="message" rows={3} maxLength={400} aria-describedby={err('message')} />
        {errors.message && <p className="field__err" id={err('message')}>{errors.message}</p>}
      </div>

      {/* Honeypot: hidden from people, visible to bots */}
      <div className="hp" aria-hidden="true">
        <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div className="field field--check">
        <input id={`${uid}-consent`} name="consent" type="checkbox" aria-invalid={!!errors.consent} aria-describedby={err('consent')} />
        <label htmlFor={`${uid}-consent`}>
          I am happy for the team to contact me on this number about my enquiry. I have read the <Link href="/privacy">Privacy Policy</Link>.
        </label>
        {errors.consent && <p className="field__err" id={err('consent')}>{errors.consent}</p>}
      </div>

      {state === 'error' && (
        <div className="form-error" role="alert">
          <p>{serverMsg}</p>
          <p>
            You can always reach us by phone on <a href={telHref}>{site.contact.phoneDisplay}</a> or{' '}
            <a href={whatsappHref()} target="_blank" rel="noopener noreferrer">WhatsApp</a>.
          </p>
        </div>
      )}

      <button className="btn btn--primary btn--block" disabled={state === 'sending'}>
        {state === 'sending' ? 'Sending…' : 'Request a callback'}
      </button>
      <p className="form__fine">This form is not monitored for emergencies. In an emergency call <a href="tel:112">112</a>.</p>
    </form>
  );
}
