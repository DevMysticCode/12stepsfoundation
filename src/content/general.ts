/** Daily rhythm as displayed on the activity chart at the centre (photographed in-house). Pending confirmation by the centre. */
export const schedule = [
  { time: '6:15 am', label: 'Wake up' },
  { time: '6:30 am', label: 'Morning prayer & tea' },
  { time: '7:15 am', label: 'Yoga' },
  { time: '9:30 am', label: 'Breakfast' },
  { time: '11:00 am', label: 'Counselling session' },
  { time: '12:00 pm', label: 'Entertainment: TV & indoor games' },
  { time: '1:30 pm', label: 'Lunch' },
  { time: '4:30 pm', label: 'Tea' },
  { time: '5:00 pm', label: 'Pranayama & prayer' },
  { time: '6:30 pm', label: 'Snacks' },
  { time: '7:00 pm', label: 'Sharing session & group meeting' },
  { time: '8:00 pm', label: 'Entertainment: TV & indoor games' },
  { time: '9:30 pm', label: 'Dinner' },
  { time: '10:30 pm', label: 'Inventory (reflection)' },
  { time: '11:00 pm', label: 'Lights off' },
];

/** Principles shown on the "12 Steps" board at the centre. Full programme text to be supplied by the centre. */
export const principles = ['Honesty', 'Hope', 'Faith', 'Courage', 'Change', 'Recovery'];

/** The 12 steps: the actual wording and programme content must come from the centre. */
export const steps = Array.from({ length: 12 }, (_, i) => ({
  n: i + 1,
  title: `Step ${i + 1}`,
  text: null as string | null, // TODO(client): supply approved wording for each step
}));

export const faqs = [
  {
    q: 'What is addiction rehabilitation?',
    a: 'Rehabilitation is a structured period of support that helps a person stop or reduce harmful substance use and rebuild a healthy life. It usually combines medical guidance where needed, counselling, group support, a supportive daily routine, and planning for life afterwards. What is right for one person may not be right for another, so plans are based on individual assessment.',
  },
  {
    q: 'How does the admission process work?',
    a: 'It begins with a conversation. Call, message us on WhatsApp or request a callback, and a member of the team will listen and explain the next steps. The exact admission steps, documents and any medical assessment are confirmed directly by the centre. Nothing is decided on the website.',
  },
  {
    q: 'How long does treatment take?',
    a: 'There is no single answer. Recovery is a long-term process and the recommended length of stay or programme depends on the individual assessment: the substance, how long it has been used, physical and mental health, and personal circumstances. The centre will explain what it recommends and why. Be cautious of anyone who promises a fixed timeline or guaranteed result.',
  },
  {
    q: 'Is medical detoxification necessary?',
    a: 'Not for everyone, but for some people it is essential. Stopping alcohol, sedatives and certain other substances suddenly can be dangerous. Whether medical supervision is needed is a decision for a qualified doctor after assessment. Detoxification on its own does not treat addiction; counselling and ongoing support are needed alongside it.',
  },
  {
    q: 'Can family members visit?',
    a: 'Family involvement matters in recovery. Visiting arrangements are set by the centre, and may be shaped by each person’s stage of recovery and clinical advice. Please ask the team about current visiting arrangements when you call.',
  },
  {
    q: 'How does confidentiality work?',
    a: 'We treat enquiries and personal information with respect. Our online form asks only for what is needed to call you back, and we ask you not to share medical details in it. Please read our Privacy Policy for how information is handled. Details of confidentiality inside the centre are explained by the team at admission.',
  },
  {
    q: 'What happens after rehabilitation?',
    a: 'Recovery continues after leaving. Ongoing support might include follow-up contact, relapse-prevention planning, family involvement and connection to a supportive community. Ask the team what follow-up is offered. The first months at home are often the most important.',
  },
  {
    q: 'How can families get help?',
    a: 'You do not have to wait for the person to be ready before you ask for guidance. Families can call or message the team to talk through what is happening, learn how to approach a loved one, and understand what rehabilitation involves. Our For Families page has more.',
  },
  {
    q: 'What should we do in a medical emergency?',
    a: 'Call 112 (India’s national emergency number) or go to the nearest hospital straight away. This applies to overdose, seizures, severe withdrawal, collapse, chest pain, or if someone is at risk of harming themselves. This website and our enquiry forms are not an emergency service, and a callback may not be immediate.',
  },
];

export const familySigns = [
  'Changes in mood, sleep, appetite or energy that don’t have another clear explanation',
  'Withdrawing from family, friends or things they used to enjoy',
  'Money going missing, unexplained debts or borrowing',
  'Hiding use, lying about where they have been, or becoming defensive when asked',
  'Problems at work or school: missed days, falling performance',
  'Physical changes: weight loss, poor hygiene, tremors, red eyes, frequent illness',
  'Needing more of a substance to feel the same effect, or feeling unwell without it',
];

export const resources = [
  {
    slug: 'understanding-addiction',
    title: 'Understanding addiction as a health condition',
    kicker: 'Foundations',
    minutes: 4,
    excerpt: 'Why addiction is not a moral failing, and why understanding it changes how we help.',
    body: [
      'Addiction is a medical and behavioural condition in which a person continues to use a substance despite harm to their health, relationships or work. It changes how the brain handles reward, stress and self-control, which is why willpower alone is rarely enough.',
      'Many things can contribute: genetics, stress, trauma, mental health conditions, social circumstances and how early substance use began. Nobody chooses to become dependent.',
      'Understanding addiction this way does not remove personal responsibility. It makes recovery more realistic, because it points to treatment, support and time rather than blame.',
      'Recovery is possible. It often involves setbacks, and it rarely follows a straight line. What helps most is consistent, respectful support from professionals and from people who care.',
    ],
  },
  {
    slug: 'signs-someone-needs-help',
    title: 'Signs a loved one may need help',
    kicker: 'For families',
    minutes: 3,
    excerpt: 'Common changes families notice, and what to do if several of them sound familiar.',
    body: [
      'No single sign proves that someone has an addiction, and many of these changes can have other causes. But when several appear together, or persist, they are worth taking seriously.',
      'Families often notice changes in mood, sleep and energy; withdrawal from relationships; secrecy; money problems; and trouble at work or school. Physical signs vary depending on the substance.',
      'If you are worried, you do not need certainty before asking for guidance. A conversation with a professional can help you understand what you are seeing and what to do next.',
      'If there is any immediate danger such as overdose, severe withdrawal or risk of self-harm, call 112 straight away.',
    ],
  },
  {
    slug: 'how-to-talk-to-a-loved-one',
    title: 'How to talk to someone you love about their use',
    kicker: 'For families',
    minutes: 5,
    excerpt: 'A calm, practical approach to a conversation that many families dread.',
    body: [
      'Choose a quiet time when the person is sober and you are both calm. Avoid raising it in the middle of an argument or when someone is intoxicated.',
      'Start with care, not accusation. Describe what you have noticed and how you feel, using “I” statements: “I’ve been worried about you lately” works better than “You’re ruining this family.”',
      'Listen more than you speak. The person may feel ashamed or defensive. You may need several conversations, and the first may not go well. That is common and does not mean it has failed.',
      'Avoid labels, ultimatums you will not keep, and bargaining. Offer concrete help: “Would you be willing to talk to someone with me?”',
      'Look after yourself too. You can ask for guidance from the centre even if your loved one is not yet ready.',
    ],
  },
  {
    slug: 'what-to-expect-in-rehabilitation',
    title: 'What to expect when someone enters rehabilitation',
    kicker: 'Rehabilitation',
    minutes: 5,
    excerpt: 'A general guide for families to the early weeks, and how to be a steady support.',
    body: [
      'Every centre is different, and every person’s plan is different, so please ask the centre about its specific arrangements. In general, the early days focus on safety, assessment and settling in, and may include medical support.',
      'Many programmes then build a daily structure: regular meals, rest, exercise or yoga, counselling, group sharing and reflection. The aim is to rebuild health and routine while learning new ways to cope.',
      'Emotions can be intense, for the person and for you. Mood swings, homesickness or wanting to leave early are common. Ask the team how they handle these moments and how to be supportive.',
      'Recovery does not end at discharge. Ask early about aftercare, follow-up and how the family will be involved.',
    ],
  },
  {
    slug: 'looking-after-yourself-as-a-family-member',
    title: 'Looking after yourself as a family member',
    kicker: 'For families',
    minutes: 3,
    excerpt: 'Supporting someone with addiction is exhausting. Your own wellbeing matters too.',
    body: [
      'Living with someone’s addiction can bring fear, anger, exhaustion, guilt and grief, often all at once. These feelings are normal and you are not alone.',
      'Try to keep some routine for yourself: sleep, meals, time outside, and people you can talk to honestly. Support for families is a valid reason to contact the centre.',
      'It is possible to love someone and still set limits. Being clear about what you can and cannot do, without blame, is not abandonment.',
      'If you feel overwhelmed or hopeless, please speak with a doctor or counsellor. If you are in crisis, call 112.',
    ],
  },
];
