import { NextResponse } from 'next/server';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { validateEnquiry } from '@/lib/enquiry';

export const runtime = 'nodejs';

// Minimal in-memory throttle (per instance). Replace with a shared store at scale.
const hits = new Map<string, number[]>();
function throttled(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (throttled(ip)) {
    return NextResponse.json({ ok: false, message: 'Too many requests. Please try again shortly, or call us directly.' }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot: bots fill this. Pretend success.
  if (typeof body === 'object' && body && (body as Record<string, unknown>).website) {
    return NextResponse.json({ ok: true });
  }

  const result = validateEnquiry(body);
  if (!result.ok) {
    return NextResponse.json({ ok: false, errors: result.errors, message: 'Please check the highlighted fields.' }, { status: 422 });
  }

  const record = { ...result.data, receivedAt: new Date().toISOString() };
  const webhook = process.env.ENQUIRY_WEBHOOK_URL;

  try {
    if (webhook) {
      const res = await fetch(webhook, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(record),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    } else if (process.env.NODE_ENV !== 'production') {
      // Development only: store locally so the flow can be tested end-to-end.
      const dir = path.join(process.cwd(), '.data');
      await fs.mkdir(dir, { recursive: true });
      await fs.appendFile(path.join(dir, 'enquiries.jsonl'), JSON.stringify(record) + '\n');
    } else {
      // Production with no destination configured: be honest rather than pretend.
      console.error('ENQUIRY_WEBHOOK_URL is not configured; enquiry was NOT delivered.');
      return NextResponse.json(
        { ok: false, message: 'Online requests are not available right now. Please call or message us on WhatsApp.' },
        { status: 503 },
      );
    }
  } catch (err) {
    console.error('Enquiry delivery failed', err);
    return NextResponse.json(
      { ok: false, message: 'We could not send your request. Please call or message us on WhatsApp.' },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
