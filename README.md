# 12Steps Foundation website

Next.js (App Router, TypeScript) · static-first, server route for enquiries · no UI framework (custom design system in `src/app/globals.css`).

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
npm run images       # regenerate optimised photos from the source folder (see scripts/process-images.mjs)
```

## Where facts live

| What | Where |
| --- | --- |
| Phone, WhatsApp, email, address, hours, social links, site URL | `src/config/site.ts` (single source of truth) |
| Service pages | `src/content/services.ts` |
| FAQs, daily schedule, family signs, resource articles, 12-step wording | `src/content/general.ts` |
| Enquiry validation (shared by browser + API) | `src/lib/enquiry.ts` |

Anything unconfirmed is `null` in config and the UI shows a "please call to confirm" fallback. **Never invent a value there.**

## Enquiry form → real delivery

`POST /api/enquiry` validates server-side, has a honeypot and a per-instance throttle, then:

1. **`ENQUIRY_WEBHOOK_URL` set** → JSON is POSTed there (Zapier/Make/n8n/Google Apps Script/your CRM/email relay).
2. **Not set, development** → appended to `.data/enquiries.jsonl` (git-ignored) for testing.
3. **Not set, production** → returns a clear error telling the visitor to call/WhatsApp. It never pretends to succeed.

See `.env.example`. Set `NEXT_PUBLIC_SITE_URL` to the real domain before launch (canonical URLs, sitemap, Open Graph).

## Information still needed from the centre (placeholders)

- [ ] Confirm the number is active on **WhatsApp** (currently assumed to be the printed number)
- [ ] Enquiry **email address**, **opening hours**, **PIN code**, exact **map location**
- [ ] **Social profiles** (none are shown until supplied)
- [ ] **Registration / legal name / affiliations**, and **clinical staff** details and qualifications
- [ ] The centre's **own 12-step wording and methodology** (`steps[].text` in `general.ts`)
- [ ] Which **services are actually offered** (esp. medical detox, mental-health/dual-diagnosis, relapse-prevention follow-up)
- [ ] **Visiting policy**, admission documents, fees, typical length of stay
- [ ] Review and approve the **daily schedule** (transcribed from the activity chart photographed in the centre)
- [ ] Legal review of `/privacy` and `/terms` (DPDP Act 2023)
- [ ] Clinical review of the educational resource articles
- [ ] **Consent** for any resident imagery; professional photography of the grounds/rooms for the hero
- [ ] Odia (and Hindi) translations by a human translator. Do not machine-translate clinical content

## Imagery policy

Only the centre's own photographs are used. Faces are blurred or out of frame. Designed flyers supplied with the brief contain AI-generated people and are **not** used as photography. The unblurred office photo is withheld pending consent.

Photos `gathering-anniversary` and `gathering-circle` come from the second batch. Faces were covered with hand-placed regions (`scripts/blur-faces.py`, coordinates in `scripts/blur-faces.json`) and visually checked, but automated blurring is not a substitute for consent: **confirm everyone shown is comfortable being published**, or replace with photos where faces are not visible. The third photo (`sharing-session`) is published unblurred: the centre confirmed it has the consent of the people pictured. The other two stay blurred, and can be swapped for originals on request. The centre confirmed its affiliation with Narcotics Anonymous (shown on the banner in these photos); it is mentioned on the About page and in captions. Captions describing a "recovery anniversary, November 2026" were confirmed by the centre.

## SEO / structure

Per-page metadata + canonical + Open Graph, breadcrumbs with JSON-LD, FAQPage JSON-LD, `Organization` JSON-LD limited to verified facts (deliberately **not** `MedicalClinic`/`LocalBusiness` until registration is confirmed), `sitemap.xml`, `robots.txt`.
Language architecture: `lang="en"` with Odia font loaded for Odia strings; add `/or/…` routes when reviewed translations exist.
