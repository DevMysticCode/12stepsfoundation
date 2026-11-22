export type Service = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  variant: 'split' | 'journey' | 'statement';
  intro: string[];
  pullQuote: string;
  who: string[];
  involves: { title: string; text: string }[];
  guidance: string[];
  caution?: string;
  /** What the centre's own materials support. Shown on the admin README, not publicly. */
  evidence: 'material' | 'to-confirm';
  related: string[];
  image?: { src: string; alt: string };
};

export const AVAILABILITY_NOTE =
  'Which services and programmes are available, and how they are combined, is confirmed by the centre after an individual assessment. Please speak with the team before making any plans.';

export const services: Service[] = [
  {
    slug: 'alcohol-addiction-treatment',
    title: 'Alcohol Addiction Recovery',
    kicker: 'Alcohol',
    summary: 'Support for people whose drinking has become harmful, and for the families living alongside it.',
    variant: 'split',
    evidence: 'material',
    related: ['detoxification-medical-support', 'counselling-therapy', 'relapse-prevention'],
    image: { src: '/images/hall-prayer', alt: 'Residents seated together for morning prayer at the centre, photographed from behind' },
    intro: [
      'Alcohol use disorder is a health condition, not a lack of willpower. It can develop slowly, often hidden behind work, family life and years of "just managing".',
      'Recovery usually involves several things working together: medical guidance, counselling, a daily routine that supports health, and people who understand. No single element does it alone.',
    ],
    pullQuote: 'Needing help is not a weakness. It is the point at which recovery becomes possible.',
    who: [
      'Someone who drinks more than they intend to, or finds it hard to stop once they start.',
      'A person who has tried to cut down and found they could not, or who has repeatedly relapsed.',
      'Anyone whose drinking is affecting health, work, money or relationships.',
      'Family members who are worried and unsure what to do next.',
    ],
    involves: [
      { title: 'A first conversation', text: 'A private, unhurried discussion about what is happening and what support might help. You are not committing to anything by asking.' },
      { title: 'Individual assessment', text: 'Treatment plans depend on a clinical assessment of each person: how much and how long they have been drinking, their physical and mental health, and their circumstances.' },
      { title: 'Medical support where needed', text: 'Some people need medical supervision when they stop drinking. This is decided with a qualified doctor, never guessed at.' },
      { title: 'Counselling and daily structure', text: 'Individual and group counselling, shared routines, yoga, prayer or reflection and healthy meals, so the days themselves support recovery.' },
      { title: 'Planning for life afterwards', text: 'Recovery continues after leaving a centre. Relapse-prevention planning and family involvement begin early.' },
    ],
    guidance: [
      'Call or message the centre and ask to speak with someone about alcohol-related concerns.',
      'If the person drinks heavily every day, do not advise them to stop suddenly. Ask for medical guidance first.',
      'Bring any current medicines and relevant medical history to the conversation, if you have them.',
    ],
    caution:
      'Stopping alcohol suddenly after heavy, long-term use can cause serious withdrawal, including seizures and confusion. This can be life-threatening. Seek medical guidance before reducing or stopping, and call 112 immediately for seizures, severe confusion, hallucinations or collapse.',
  },
  {
    slug: 'drug-addiction-treatment',
    title: 'Drug Addiction Recovery',
    kicker: 'Drugs & other substances',
    summary: 'Compassionate, structured support for people who are dependent on drugs, including cannabis (ganja), tablets and injectables.',
    variant: 'statement',
    evidence: 'material',
    related: ['detoxification-medical-support', 'mental-health-dual-diagnosis', 'rehabilitation-aftercare'],
    image: { src: '/images/carrom', alt: 'Residents playing carrom together at the centre, faces blurred for privacy' },
    intro: [
      'Dependence on drugs affects the brain, the body and every relationship around the person. It is treatable, and people do recover, though it often takes time, patience and more than one attempt.',
      'Different substances carry different risks and need different medical responses. That is why every person is assessed individually before any plan is made.',
    ],
    pullQuote: 'Behind every addiction is a human being.',
    who: [
      'People who use cannabis, opioids, sedatives, stimulants, inhalants or injectable drugs and want to stop.',
      'Those whose use has caused health problems, debts, legal trouble or loss of trust.',
      'Families who have noticed changes and are not sure whether it is addiction.',
      'People who have been through treatment before and are looking for a different kind of support.',
    ],
    involves: [
      { title: 'Respectful first contact', text: 'No lectures, no labels. A conversation about what is going on, what the person wants, and what the family needs.' },
      { title: 'Clinical assessment', text: 'A qualified professional looks at substance use, physical health, mental health and risks before suggesting a plan.' },
      { title: 'Medical stabilisation if required', text: 'Where medically necessary, withdrawal is managed with professional supervision. See our page on detoxification and medical support.' },
      { title: 'Counselling, group support and routine', text: 'Daily structure, sharing sessions, counselling and wellbeing practices that rebuild health and trust step by step.' },
      { title: 'Preparing for return to family life', text: 'Family sessions, relapse-prevention planning and a realistic plan for the first months after treatment.' },
    ],
    guidance: [
      'Contact the centre and describe, in your own words, what you are worried about. You do not need medical terms.',
      'Do not share more detail than you wish on any online form. Sensitive details are best discussed by phone.',
      'If someone is unconscious, struggling to breathe or may have overdosed, call 112 straight away.',
    ],
    caution:
      'Signs of overdose (unresponsive, very slow or noisy breathing, blue lips, seizures) are a medical emergency. Call 112 immediately. Do not wait for a callback from any centre.',
  },
  {
    slug: 'detoxification-medical-support',
    title: 'Detoxification & Medical Support',
    kicker: 'Medical care',
    summary: 'Why stopping safely matters, what medical supervision involves, and why detox is only the first part of recovery.',
    variant: 'journey',
    evidence: 'to-confirm',
    related: ['alcohol-addiction-treatment', 'drug-addiction-treatment', 'rehabilitation-aftercare'],
    intro: [
      'Detoxification is the process of the body clearing a substance, usually with medical support to manage withdrawal safely. For some substances, particularly alcohol, sedatives and certain other drugs, withdrawal itself can be dangerous.',
      'Detox is not a cure. It addresses the physical dependence, not the reasons the person began using or the habits that follow. Without ongoing support, many people return to use.',
    ],
    pullQuote: 'Detox is where treatment can begin. It is not where it ends.',
    who: [
      'People who have been using a substance heavily or daily and want to stop.',
      'Anyone who has experienced withdrawal symptoms before.',
      'People with other health conditions, who may need closer monitoring.',
      'Families trying to understand what safe stopping looks like.',
    ],
    involves: [
      { title: 'Medical assessment first', text: 'A qualified doctor reviews substance use, general health, current medicines and previous withdrawal experiences.' },
      { title: 'A decision about setting', text: 'Some people can be supported with outpatient medical care; others need closer supervision. This depends on risk, not preference.' },
      { title: 'Monitoring and symptom management', text: 'Withdrawal is monitored and managed by qualified medical staff, with attention to comfort and safety.' },
      { title: 'Emotional support alongside', text: 'Withdrawal can be frightening. Calm, steady human support matters as much as medication.' },
      { title: 'A plan beyond detox', text: 'Counselling, rehabilitation and family support are arranged so that stopping safely leads somewhere.' },
    ],
    guidance: [
      'Ask the centre what medical support is available and who provides it before relying on it. Availability is confirmed during your enquiry.',
      'Never advise someone to stop alcohol or sedatives abruptly on their own.',
      'Keep a list of what is being used, how much, and for how long. A doctor will find this very helpful.',
    ],
    caution:
      'Severe withdrawal (seizures, confusion, hallucinations, very high heart rate, severe vomiting or inability to keep fluids down) needs emergency medical care. Call 112 or go to the nearest hospital. Website enquiries are not an emergency service.',
  },
  {
    slug: 'counselling-therapy',
    title: 'Counselling & Therapy',
    kicker: 'Individual and group',
    summary: 'Individual counselling and group sharing: the human core of recovery.',
    variant: 'split',
    evidence: 'material',
    related: ['relapse-prevention', 'mental-health-dual-diagnosis', 'for-families'],
    image: { src: '/images/yoga', alt: 'Residents practising yoga together, faces blurred for privacy' },
    intro: [
      'Most people who struggle with addiction have carried something heavy for a long time: stress, grief, shame, trauma, loneliness. Counselling gives that a place to be spoken, safely.',
      'Group sharing adds something one-to-one cannot: the experience of being understood by people who know exactly what it was like.',
    ],
    pullQuote: 'Being listened to without judgement is where change often starts.',
    who: [
      'Anyone beginning recovery or returning after a relapse.',
      'People who feel stuck, ashamed or alone with what they are carrying.',
      'Those who find it easier to talk with others who share their experience.',
      'People preparing to return to work and family life.',
    ],
    involves: [
      { title: 'Individual counselling', text: 'Private sessions to understand triggers, patterns, feelings and goals, at a pace that suits the person.' },
      { title: 'Group sharing sessions', text: 'Structured sharing and group meetings where people support one another and learn from each other. Confidentiality is expected of everyone.' },
      { title: 'Motivation and reflection', text: 'Regular motivational sessions and time for prayer, meditation or quiet reflection.' },
      { title: 'Coping skills', text: 'Practical tools for cravings, stress, anger, boredom and difficult relationships.' },
    ],
    guidance: [
      'Ask who delivers counselling and what their training is. You have every right to know.',
      'Counselling works best when the person chooses to take part. Gentle encouragement helps more than pressure.',
      'Family members can ask about family sessions as well.',
    ],
  },
  {
    slug: 'relapse-prevention',
    title: 'Relapse Prevention',
    kicker: 'Staying well',
    summary: 'Relapse is common and does not mean failure. Planning for it makes recovery more durable.',
    variant: 'journey',
    evidence: 'to-confirm',
    related: ['counselling-therapy', 'rehabilitation-aftercare', 'for-families'],
    intro: [
      'Addiction is a chronic condition, and for many people recovery includes setbacks. A return to use is a signal that more support is needed, not that the person has failed or that treatment was wasted.',
      'Relapse prevention is the practical work of knowing your triggers, building a support network and having a plan ready before a difficult moment arrives.',
    ],
    pullQuote: 'A setback is information, not a verdict.',
    who: [
      'People completing a rehabilitation programme.',
      'Anyone who has relapsed before and wants a different approach.',
      'Families who want to know how to respond if it happens again.',
    ],
    involves: [
      { title: 'Know the triggers', text: 'People, places, feelings and times of day that raise risk. Named honestly, they become manageable.' },
      { title: 'Build a daily routine', text: 'Sleep, meals, movement, work and rest. Stable days are protective.' },
      { title: 'Write a response plan', text: 'What to do, who to call and where to go if cravings become strong, agreed in advance.' },
      { title: 'Keep support close', text: 'Regular sharing meetings, trusted people and family who know how to help without blame.' },
      { title: 'Return quickly if needed', text: 'If use resumes, reach out early. The sooner support resumes, the better.' },
    ],
    guidance: [
      'Ask the centre what follow-up support exists after discharge, and how to get in touch if you are struggling.',
      'Families can ask how to respond calmly and what warning signs to watch for.',
    ],
  },
  {
    slug: 'mental-health-dual-diagnosis',
    title: 'Mental Health & Dual-Diagnosis Support',
    kicker: 'Mind and substance use',
    summary: 'Addiction often exists alongside anxiety, depression or trauma. Treating one without the other rarely works.',
    variant: 'statement',
    evidence: 'to-confirm',
    related: ['counselling-therapy', 'detoxification-medical-support', 'rehabilitation-aftercare'],
    intro: [
      'Many people with addiction also live with anxiety, depression, trauma or other mental health conditions. Sometimes substances began as a way to cope; sometimes they made things worse. Often both are true.',
      'This is called a dual diagnosis, and it is common. It needs care that looks at the whole person.',
    ],
    pullQuote: 'The aim is not only to stop using. It is to feel well enough to not need to.',
    who: [
      'People who feel persistently low, anxious or overwhelmed.',
      'Those who began using substances to cope with stress, grief or past experiences.',
      'Anyone who has had thoughts of harming themselves.',
      'Families who have seen emotional changes alongside substance use.',
    ],
    involves: [
      { title: 'A whole-person assessment', text: 'Qualified professionals consider mental health and substance use together, not separately.' },
      { title: 'Medical review', text: 'A doctor or psychiatrist can advise whether medication or further assessment is appropriate.' },
      { title: 'Emotional support', text: 'Counselling, calming practices such as yoga, pranayama and meditation, and steady routine.' },
      { title: 'Coordinated follow-up', text: 'A plan that continues after the residential stage, with clear points of contact.' },
    ],
    guidance: [
      'Please do not wait if you are having thoughts of ending your life. Contact emergency services on 112 or go to the nearest hospital.',
      'Ask the centre what mental health professionals are involved and what their qualifications are.',
    ],
    caution:
      'If you or someone you know is thinking about self-harm or suicide, this is an emergency. Call 112, go to the nearest hospital, or stay with the person until help arrives.',
  },
  {
    slug: 'rehabilitation-aftercare',
    title: 'Rehabilitation, Life Skills & Aftercare',
    kicker: 'Rebuilding a life',
    summary: 'Rehabilitation is about building a life worth staying well for, and having support when you go home.',
    variant: 'journey',
    evidence: 'material',
    related: ['relapse-prevention', 'counselling-therapy', 'for-families'],
    image: { src: '/images/hall-prayer', alt: 'Daily group gathering at the centre' },
    intro: [
      'Recovery is not only about stopping. It is about rebuilding routines, health, relationships and purpose. Rehabilitation gives people time and structure to do that in a supportive setting.',
      'Aftercare matters just as much. The first months at home are often the hardest, and recovery is stronger when support continues.',
    ],
    pullQuote: 'Long-term recovery is built in ordinary days.',
    who: [
      'People who need time away from their usual environment to focus on recovery.',
      'Those who want to rebuild daily routines, health and confidence.',
      'Anyone preparing to return to family, work or study after treatment.',
    ],
    involves: [
      { title: 'A structured day', text: 'A shared daily rhythm including prayer, yoga, pranayama, counselling, meals, recreation and group sharing. See "A day at the centre" for the schedule displayed at our centre.' },
      { title: 'Healthy food and rest', text: 'Regular, balanced meals and proper sleep help the body and mind recover.' },
      { title: 'Recreation and community', text: 'Indoor games, shared activities and time together rebuild the ability to enjoy life without substances.' },
      { title: 'Life skills', text: 'Daily responsibilities, communication, managing money and time, and preparing for work or study.' },
      { title: 'Aftercare and family', text: 'A plan for after leaving, with continued contact, family involvement and clear next steps.' },
    ],
    guidance: [
      'Ask about the length of stay recommended, what it depends on, and what follow-up is offered.',
      'Ask what families can expect: visits, updates, and how they will be involved.',
    ],
  },
];

export const serviceIndex = [
  { n: '01', title: 'Alcohol Addiction Recovery', slug: 'alcohol-addiction-treatment' },
  { n: '02', title: 'Drug Addiction Recovery', slug: 'drug-addiction-treatment' },
  { n: '03', title: 'Medical Detoxification', slug: 'detoxification-medical-support' },
  { n: '04', title: 'Individual Counselling', slug: 'counselling-therapy' },
  { n: '05', title: 'Group Therapy', slug: 'counselling-therapy' },
  { n: '06', title: 'Relapse Prevention', slug: 'relapse-prevention' },
  { n: '07', title: 'Mental Health & Dual-Diagnosis Support', slug: 'mental-health-dual-diagnosis' },
  { n: '08', title: 'Rehabilitation & Life Skills', slug: 'rehabilitation-aftercare' },
  { n: '09', title: 'Family Counselling', slug: 'for-families', href: '/for-families' },
  { n: '10', title: 'Aftercare & Recovery Support', slug: 'rehabilitation-aftercare' },
] as { n: string; title: string; slug: string; href?: string }[];

export const serviceHref = (slug: string) => (slug === 'for-families' ? '/for-families' : `/services/${slug}`);
