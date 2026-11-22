export const enquiryFor = ['Myself', 'A family member', 'A friend or someone else'] as const;
export const callbackTimes = ['Morning', 'Afternoon', 'Evening', 'Any time'] as const;
export const languages = ['English', 'Odia', 'Hindi'] as const;

export type EnquiryInput = {
  name: string;
  phone: string;
  forWhom: (typeof enquiryFor)[number];
  callbackTime: (typeof callbackTimes)[number];
  language: (typeof languages)[number];
  message?: string;
  consent: true;
};

export type FieldErrors = Partial<Record<keyof EnquiryInput, string>>;

/** Shared by the browser and the API so both enforce identical rules. */
export function validateEnquiry(raw: unknown): { ok: true; data: EnquiryInput } | { ok: false; errors: FieldErrors } {
  const b = (raw ?? {}) as Record<string, unknown>;
  const str = (v: unknown) => (typeof v === 'string' ? v.trim() : '');
  const errors: FieldErrors = {};

  const name = str(b.name);
  if (name.length < 2) errors.name = 'Please enter a name we can use when we call. A first name is enough.';
  else if (name.length > 80) errors.name = 'Please use a shorter name.';

  const phoneDigits = str(b.phone).replace(/[\s\-()]/g, '');
  const phoneOk = /^(\+?91)?0?[6-9]\d{9}$/.test(phoneDigits);
  if (!phoneOk) errors.phone = 'Please enter a valid 10-digit Indian mobile number.';

  const forWhom = str(b.forWhom) as EnquiryInput['forWhom'];
  if (!enquiryFor.includes(forWhom)) errors.forWhom = 'Please choose who this is for.';

  const callbackTime = str(b.callbackTime) as EnquiryInput['callbackTime'];
  if (!callbackTimes.includes(callbackTime)) errors.callbackTime = 'Please choose a convenient time.';

  const language = str(b.language) as EnquiryInput['language'];
  if (!languages.includes(language)) errors.language = 'Please choose a language.';

  const message = str(b.message);
  if (message.length > 400) errors.message = 'Please keep this under 400 characters.';

  if (b.consent !== true) errors.consent = 'Please confirm you are happy for us to contact you.';

  if (Object.keys(errors).length) return { ok: false, errors };
  return {
    ok: true,
    data: { name, phone: phoneDigits.replace(/^(\+?91)?0?/, '+91'), forWhom, callbackTime, language, message: message || undefined, consent: true },
  };
}
