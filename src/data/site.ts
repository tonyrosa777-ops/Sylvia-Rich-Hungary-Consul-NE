/**
 * site.ts — Honorary Consulate of Hungary — New England
 * hungaryconsulne.com
 *
 * ALL copy lives here. Zero hard-coded strings in components.
 * Source: initial-business-data.md + market-intelligence.md
 *
 * ⚠️  PENDING CLIENT CONFIRMATION before publishing:
 *   - prices: sourced from Florida consul reference, NOT Sylvia's confirmed schedule
 *   - stats.yearsServing: confirm exact appointment date with Sylvia
 *   - social: handles unconfirmed
 */

export const siteData = {
  brand: {
    name: "Honorary Consulate of Hungary — New England",
    nameShort: "Hungary Consul — New England",
    tagline: "Document Authentication · Notarization · Consular Services",
    domain: "hungaryconsulne.com",
    url: "https://hungaryconsulne.com",
    email: "TODO_CONFIRM_WITH_SYLVIA@hungaryconsulne.com", // ⚠️ confirm
    phone: "TODO_CONFIRM_WITH_SYLVIA",                    // ⚠️ confirm
    address: {
      street: "16 Route 111, Suite 5",
      city: "Derry",
      state: "NH",
      zip: "03038",
      full: "16 Route 111, Suite 5, Derry, NH 03038",
      landmark: "Near LaBelle Winery on Route 111",
    },
    hours: {
      display: "Monday Appointments Only",
      detail: "Monday afternoons — by appointment",
      note: "Appointments required. Walk-ins not accepted.",
    },
    payment: "Cash or check only. No credit cards accepted.",
    consul: {
      name: "Sylvia Rich",
      title: "Honorary Consul of Hungary for New England",
      appointedBy: "Embassy of Hungary, Washington DC",
    },
  },

  nav: {
    links: [
      { label: "Services", href: "/services" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    cta: { label: "Book Appointment", href: "/booking" },
  },

  hero: {
    eyebrow: "Officially Appointed by the Embassy of Hungary",
    headline: "Honorary Consulate of Hungary",
    headlineSub: "New England",
    tagline: "Serving Hungarian citizens, dual nationals, and families across Maine, Vermont, New Hampshire, Rhode Island, and Massachusetts.",
    ctaPrimary: { label: "Book Your Monday Appointment", href: "/booking" },
    ctaSecondary: { label: "See What We Handle", href: "/services/scope" },
    trustCopy: "Derry, NH · Monday Appointments · 5 States Served",
    paymentNote: "Cash & Check Only · In-Person · Appointment Required",
  },

  challenges: {
    eyebrow: "Sound Familiar?",
    headline: "When Two Countries' Paperwork Collide",
    items: [
      {
        icon: "📄",
        headline: "Documents that need to go to Hungary",
        body: "A deed, a will, a bank document — and it must carry an official Hungarian consular seal before it's valid in Budapest.",
      },
      {
        icon: "🛂",
        headline: "Uncertainty about the right process",
        body: "Should you apostille it? Authenticate it? Go to the Embassy? The answer depends on the document — and getting it wrong means starting over.",
      },
      {
        icon: "✈️",
        headline: "You shouldn't have to fly to New York",
        body: "The Hungarian Consulate General in Manhattan handles what we can't. But most people don't need Manhattan — they need Derry, NH, which is actually reachable.",
      },
      {
        icon: "🤝",
        headline: "Who do you even call?",
        body: "Hospitals, universities, and courts in New England have no Hungarian-speaking liaison. For emergencies involving Hungarian citizens, Sylvia is the contact.",
      },
    ],
  },

  about: {
    eyebrow: "Meet Sylvia Rich",
    headline: "Born Between Two Countries. Here to Serve Both.",
    paragraphs: [
      "Sylvia Rich grew up navigating the space between Hungary and America — not metaphorically, but literally. Her parents escaped communist Hungary in 1969. She built a career in Budapest. She has spent decades in both worlds, fluent in both languages, at home in both systems.",
      "The Honorary Consul position is not a title she holds. It's a responsibility she chose — and one the Embassy of Hungary entrusted to her because of what she brings: deep Hungarian cultural fluency, an American civic network spanning medicine, law, and government across five states, and the practical knowledge of someone who has personally navigated every form, office, and deadline that her clients now face.",
      "Sylvia does not receive a salary for this work. She is compensated only when performing active consular duties. This is a voluntary position of service — which is precisely why her community's trust in her is so complete.",
    ],
    credentials: [
      "Officially appointed by the Embassy of Hungary in Washington DC",
      "Authorized under the Vienna Convention on Consular Relations",
      "Covers Maine, Vermont, New Hampshire, Rhode Island, and Massachusetts",
      "Bilingual: English and Hungarian",
      "Network spans medical, legal, psychological, and diplomatic contacts across New England",
    ],
    stats: [
      { value: 5, suffix: "", label: "States Served" },
      { value: 0, suffix: "", label: "Years Serving New England", note: "⚠️ Confirm appointment date" },
      { value: 0, suffix: "", label: "Consular Services Available", note: "⚠️ Confirm count" },
    ],
  },

  services: [
    {
      slug: "notary-public",
      name: "Notary Public",
      nameHu: "Közjegyző",
      tagline: "For American documents requiring a notarial seal",
      description: "Wills, trusts, deeds, contracts, affidavits, and any American document requiring notarization under New Hampshire law.",
      price: 10,
      priceDisplay: "$10",
      priceUnit: "per notarial act",
      // ⚠️ Price unconfirmed — sourced from FL reference consul
      badge: null,
      features: [
        "Valid for all American document types",
        "NH state maximum fee — $10 per act",
        "Valid government-issued ID required",
        "Cash or check only",
      ],
      whatToBring: [
        "The completed document (do not sign in advance)",
        "Valid government-issued photo ID",
        "Cash or check for $10 per notarial act",
      ],
    },
    {
      slug: "signature-authentication",
      name: "Signature Authentication",
      nameHu: "Aláírás-hitelesítés",
      tagline: "For Hungarian government documents",
      description: "Official consular authentication of signatures on documents destined for Hungary. Required for property transactions, legal affairs, and official submissions to Hungarian authorities.",
      price: 36,
      priceDisplay: "$36",
      priceUnit: "per document",
      // ⚠️ Price unconfirmed — sourced from FL reference consul
      badge: "Most Requested",
      features: [
        "Carries official Hungarian consular authority",
        "Accepted by all Hungarian government offices",
        "Required for property, legal, and official submissions",
        "Valid government-issued ID required",
        "Cash or check only",
      ],
      whatToBring: [
        "The completed document, ready to sign",
        "Valid government-issued photo ID",
        "Cash or check for $36 per document",
      ],
    },
    {
      slug: "copy-authentication",
      name: "Copy Authentication",
      nameHu: "Másolat-hitelesítés",
      tagline: "Certified true copies for official use",
      description: "Official consular certification that a copy is a true and accurate reproduction of an original document. Required when originals cannot be submitted.",
      price: 24,
      priceDisplay: "$24",
      priceUnit: "per page",
      // ⚠️ Price unconfirmed — sourced from FL reference consul
      badge: null,
      features: [
        "Consular-certified true copy",
        "Accepted in place of originals by Hungarian authorities",
        "Bring both the original and the copy",
        "Cash or check only",
      ],
      whatToBring: [
        "The original document",
        "A clean, legible copy of the document",
        "Valid government-issued photo ID",
        "Cash or check for $24 per page",
      ],
    },
    {
      slug: "official-copy",
      name: "Official Copy",
      nameHu: "Hivatalos másolat",
      tagline: "Consular-issued official copies",
      description: "An officially presented copy issued directly by the consulate. Used when a document must be submitted as a consular exhibit.",
      price: 18,
      priceDisplay: "$18",
      priceUnit: "per page",
      // ⚠️ Price unconfirmed — sourced from FL reference consul
      badge: null,
      features: [
        "Issued directly by the Honorary Consul",
        "Carries official consular seal",
        "Required for specific government submissions",
        "Cash or check only",
      ],
      whatToBring: [
        "The original document",
        "Valid government-issued photo ID",
        "Cash or check for $18 per page",
      ],
    },
    {
      slug: "life-certificate",
      name: "Life Certificate",
      nameHu: "Életbizonyítvány",
      tagline: "For Hungarian pension recipients",
      description: "Required annually by Hungarian pension authorities to confirm that the recipient is living. Signed by the Honorary Consul.",
      price: 0,
      priceDisplay: "No charge",
      priceUnit: "",
      badge: "Free Service",
      features: [
        "No fee — free service to the community",
        "Required by Hungarian pension authorities annually",
        "Valid government-issued ID required",
        "Appointment required — Monday only",
      ],
      whatToBring: [
        "Valid government-issued photo ID",
        "Hungarian pension documentation showing your recipient number",
      ],
    },
  ],

  scope: {
    eyebrow: "Know Before You Book",
    headline: "What We Handle. What Requires New York.",
    intro: "The Honorary Consulate in Derry, NH can handle more than most people realize — and less than a full consulate. This page exists so you know exactly where to go before you make the trip.",
    canDo: [
      "Notarize American documents (wills, deeds, contracts, affidavits)",
      "Authenticate signatures on Hungarian documents",
      "Certify copies of documents for use in Hungary",
      "Issue life certificates for Hungarian pension recipients (free)",
      "Provide emergency coordination for Hungarian citizens in distress",
      "Serve as a bilingual liaison to New England hospitals, universities, and government offices",
      "Assist with birth, marriage, and death registration documentation (authentication only)",
      "Authenticate powers of attorney for Hungarian property transactions",
      "Provide guidance on citizenship and passport renewal processes",
    ],
    cannotDo: [
      "Issue or renew Hungarian passports (requires biometric equipment at the NY Consulate General)",
      "Process visa applications",
      "Accept citizenship applications (submitted to the Embassy in Washington DC)",
      "Provide legal advice",
      "Apostille American documents for use outside Hungary (contact the NH Secretary of State)",
    ],
    nyContact: {
      name: "Consulate General of Hungary — New York",
      address: "223 East 52nd Street, New York, NY 10022",
      url: "https://newyork.mfa.gov.hu",
      note: "Manhattan handles passports, biometrics, visa applications, and citizenship submissions. Average travel cost from New England: $80–$300+ plus a full day.",
    },
    disclaimer: "Honorary consuls do not work in a formal office, nor do they have fixed working hours or schedules. They do not receive compensation from Hungary for their duties and therefore cannot be held accountable for their work schedules.",
  },

  whatToExpect: {
    eyebrow: "Your Appointment",
    headline: "What to Expect When You Come",
    steps: [
      {
        number: "01",
        title: "Book Online",
        body: "Select a Monday time slot through the booking system. You'll receive a confirmation with the office address and what to bring.",
      },
      {
        number: "02",
        title: "Prepare Your Documents",
        body: "Bring your completed documents, your government-issued ID, and exact cash or a check. Documents should not be signed in advance — you'll sign in Sylvia's presence.",
      },
      {
        number: "03",
        title: "Arrive at the Derry Office",
        body: "The office is at 16 Route 111, Suite 5, Derry, NH 03038 — near LaBelle Winery. Plan for approximately 15 minutes.",
      },
      {
        number: "04",
        title: "Review and Authentication",
        body: "Sylvia reviews your documents, verifies your identity, and performs the notarization or authentication in your presence.",
      },
      {
        number: "05",
        title: "Payment and Completion",
        body: "Pay by cash or check. Your authenticated documents are returned to you, ready for submission to Hungarian authorities.",
      },
    ],
  },

  feeTable: {
    eyebrow: "Transparent Pricing",
    headline: "Consular Fees",
    intro: "Fees are established by Hungarian Ministry decree. All services are in-person, by appointment, Monday only.",
    savingsNote: "A trip to the Consulate General in New York costs $80–$300+ in transportation alone — plus a full day of travel. The same consular authority, locally.",
    paymentNote: "Cash or check only. No credit cards accepted. Make checks payable to Sylvia Rich.",
    // ⚠️ ALL PRICES UNCONFIRMED — sourced from FL consul reference site
    // Do not publish until Sylvia confirms her actual fee schedule
    unconfirmedWarning: true,
  },

  testimonials: [
    // Written in-house — no real names, English and Hungarian mix
    // These are placeholders — to be written at copy phase
    {
      id: "t1",
      quote: "I had no idea there was a Hungarian consul here in New England. I'd been driving to New York for years. My whole family will know about this now.",
      attribution: "— Dual national, Massachusetts",
      lang: "en",
    },
    {
      id: "t2",
      quote: "Minden évben az életbizonyítványomért kellett utaznom Manhattanbe. Most már itt, Derry-ben elintézhetem — és ingyenes.",
      attribution: "— Nyugdíjas, New Hampshire",
      lang: "hu",
    },
    {
      id: "t3",
      quote: "I was preparing documents for an inheritance in Hungary and had no idea where to start. Sylvia knew exactly what I needed and had it done in fifteen minutes.",
      attribution: "— Hungarian-American, Vermont",
      lang: "en",
    },
    {
      id: "t4",
      quote: "The appointment was efficient, professional, and warm. Everything I needed — explained clearly, done correctly, no surprises.",
      attribution: "— First-generation, Rhode Island",
      lang: "en",
    },
  ],

  footer: {
    tagline: "Officially appointed by the Embassy of Hungary. Serving New England since [YEAR].",
    // ⚠️ Year unconfirmed — confirm appointment date with Sylvia
    address: "16 Route 111, Suite 5 · Derry, NH 03038",
    hours: "Appointments: Monday only",
    viennaNote: "Honorary consular services conducted under the Vienna Convention on Consular Relations.",
    links: [
      { label: "Services", href: "/services" },
      { label: "What We Handle", href: "/services/scope" },
      { label: "About Sylvia", href: "/about" },
      { label: "Book Appointment", href: "/booking" },
      { label: "Contact", href: "/contact" },
      { label: "Serving Massachusetts", href: "/serving-massachusetts" },
      { label: "Serving New Hampshire", href: "/serving-new-hampshire" },
      { label: "Serving Rhode Island", href: "/serving-rhode-island" },
      { label: "Serving Vermont", href: "/serving-vermont" },
      { label: "Serving Maine", href: "/serving-maine" },
    ],
    externalLinks: [
      { label: "Embassy of Hungary — Washington DC", href: "https://washington.mfa.gov.hu" },
      { label: "Consulate General — New York", href: "https://newyork.mfa.gov.hu" },
      // ⚠️ Boston Hungarian Society URL — pending from Sylvia
      // ⚠️ Agnes Werman (citizenship & translation, NYC) — pending from Sylvia
    ],
    legal: "The Honorary Consul of Hungary for New England is an official representative of the Hungarian government under the Vienna Convention on Consular Relations. This website is not affiliated with the Embassy of Hungary or the Consulate General of Hungary in New York.",
  },

  meta: {
    defaultTitle: "Honorary Consulate of Hungary — New England | Derry, NH",
    titleTemplate: "%s | Honorary Consulate of Hungary — New England",
    defaultDescription: "Official Hungarian consular services in New England. Document authentication, notarization, and consular support for Maine, Vermont, New Hampshire, Rhode Island, and Massachusetts. Monday appointments in Derry, NH.",
    ogImage: "/og/og-default.jpg",
    locale: "en_US",
    alternateName: [
      "Hungarian Consulate New England",
      "Hungarian Consulate Boston",
      "Hungarian Consulate Derry NH",
      "Honorary Consulate Hungary Massachusetts",
    ],
  },
} as const;

export type SiteData = typeof siteData;
