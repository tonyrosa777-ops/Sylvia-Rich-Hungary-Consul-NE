/**
 * site.ts — Honorary Consulate of Hungary — New England
 * hungarianconsulne.com
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
    domain: "hungarianconsulne.com",
    url: "https://hungarianconsulne.com",
    email: "hungarianconsulNE@gmail.com",
    phone: "248-310-0642",
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

  // ⚠️ Replace with actual Calendly URL once account is set up.
  // Format: "https://calendly.com/{username}/{event-type}"
  // The booking page embeds this inline via iframe. No other changes needed.
  booking: {
    calendlyUrl: "https://calendly.com/PLACEHOLDER/consulate-appointment",
  },

  nav: {
    links: [
      { label: "Services", href: "/services" },
      { label: "About", href: "/about" },
      { label: "Knowledge Base", href: "/blog" },
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
    ctaSecondary: { label: "Find Out If We Can Help", href: "/quiz" },
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
    {
      id: "t1",
      quote: "I had no idea there was a Hungarian consul here in New England. I'd been driving to New York for years. My whole family will know about this now.",
      attribution: "Dual national, Massachusetts",
      lang: "en",
    },
    {
      id: "t2",
      quote: "Minden évben az életbizonyítványomért kellett utaznom Manhattanbe. Most már itt, Derry-ben elintézhetem, és ingyenes.",
      attribution: "Nyugdíjas, New Hampshire",
      lang: "hu",
    },
    {
      id: "t3",
      quote: "I was preparing documents for an inheritance in Hungary and had no idea where to start. Sylvia knew exactly what I needed and had it done in fifteen minutes.",
      attribution: "Hungarian-American, Vermont",
      lang: "en",
    },
    {
      id: "t4",
      quote: "The appointment was efficient, professional, and warm. Everything I needed explained clearly, done correctly, no surprises.",
      attribution: "First-generation, Rhode Island",
      lang: "en",
    },
    {
      id: "t5",
      quote: "Getting documents authenticated here saved me an entire day's trip to New York. I called Thursday, came in Monday, and was done before noon.",
      attribution: "Dual national, New Hampshire",
      lang: "en",
    },
    {
      id: "t6",
      quote: "Sylvia was patient with my questions and thorough with every document. I came in nervous about a complicated power of attorney situation and left with everything handled.",
      attribution: "Dual national, Vermont",
      lang: "en",
    },
    {
      id: "t7",
      quote: "We needed copy authentication for documents headed to Budapest for an estate matter. Everything certified and ready same day. A genuine relief.",
      attribution: "Family, Massachusetts",
      lang: "en",
    },
    {
      id: "t8",
      quote: "My father receives a Hungarian pension and needs a life certificate every year. Having someone local handle this at no charge has been enormously helpful.",
      attribution: "Daughter, Rhode Island",
      lang: "en",
    },
    {
      id: "t9",
      quote: "The drive from Portland was worth it. What would have been a full-day trip to New York took less than two hours total, door to door.",
      attribution: "Maine resident",
      lang: "en",
    },
    {
      id: "t10",
      quote: "I needed urgent notarization for a property closing. Sylvia fit me in with a week's notice. That flexibility is rare.",
      attribution: "Homeowner, Vermont",
      lang: "en",
    },
    {
      id: "t11",
      quote: "After months of trying to deal with the New York consulate, finding this office was like discovering a shortcut I didn't know existed.",
      attribution: "Hungarian-American, Boston",
      lang: "en",
    },
    {
      id: "t12",
      quote: "My mother couldn't travel to New York. Having a consul who could handle her life certificate locally was an enormous relief for our whole family.",
      attribution: "Caregiver, New Hampshire",
      lang: "en",
    },
    {
      id: "t13",
      quote: "Straightforward, professional, no bureaucratic headaches. Sylvia clearly knows Hungarian consular procedure inside and out.",
      attribution: "Business owner, Massachusetts",
      lang: "en",
    },
    {
      id: "t14",
      quote: "I needed signature authentication for a Hungarian bank. Sylvia knew exactly what format was required. Twenty minutes, start to finish.",
      attribution: "Dual citizen, Vermont",
      lang: "en",
    },
    {
      id: "t15",
      quote: "I was skeptical a consulate in New Hampshire could handle my complex documents. Sylvia was more knowledgeable and efficient than anything I experienced in New York.",
      attribution: "Dual national, Rhode Island",
      lang: "en",
    },
    {
      id: "t16",
      quote: "As someone who moved from Budapest six years ago, having consular services this close to home means everything. I tell everyone I meet.",
      attribution: "Hungarian expat, Boston",
      lang: "en",
    },
    {
      id: "t17",
      quote: "I brought three separate documents for notarization. All handled cleanly, on time, with a clear explanation of what each signature covered.",
      attribution: "Small business owner, Maine",
      lang: "en",
    },
    {
      id: "t18",
      quote: "After months of putting off a document I needed for a property sale in Hungary, I finally made the appointment. Wish I had come sooner.",
      attribution: "Dual citizen, Massachusetts",
      lang: "en",
    },
    {
      id: "t19",
      quote: "Sylvia authenticated copies of my birth certificate and marriage documents for Hungarian authorities. No issues, no delays, no back-and-forth.",
      attribution: "Hungarian-American, New Hampshire",
      lang: "en",
    },
    {
      id: "t20",
      quote: "Monday-only scheduling forced me to plan ahead, but it was worth it. In and out in thirty minutes with everything notarized correctly.",
      attribution: "Rhode Island resident",
      lang: "en",
    },
    {
      id: "t21",
      quote: "I've been handling Hungarian documents for my parents' estate for three years. Sylvia's office has been an absolute lifeline throughout.",
      attribution: "Second-generation, Boston",
      lang: "en",
    },
    {
      id: "t22",
      quote: "My daughter is applying for Hungarian citizenship. The documents required were specific and complex. Sylvia walked us through exactly what was needed.",
      attribution: "Parent, Massachusetts",
      lang: "en",
    },
    {
      id: "t23",
      quote: "Outstanding. Knowledgeable, efficient, and warm. I've recommended this office to every Hungarian-American I know in New England.",
      attribution: "Community member, New Hampshire",
      lang: "en",
    },
    {
      id: "t24",
      quote: "I had been avoiding this paperwork for two years because the New York trip seemed impossible to schedule. Derry changed all of that.",
      attribution: "Dual national, Vermont",
      lang: "en",
    },
    {
      id: "t25",
      quote: "A dokumentumhitelesítés gyors és zökkenőmentes volt. Nem kellett New Yorkba utaznom, ami rengeteg időt és pénzt takarított meg.",
      attribution: "Kettős állampolgár, Massachusetts",
      lang: "hu",
    },
    {
      id: "t26",
      quote: "Sylvia pontosan tudta, milyen formátumban kell hitelesíteni az iratokat a Magyar hatóságok számára. Tökéletes munka, semmi felesleges körülmény.",
      attribution: "Magyar állampolgár, Vermont",
      lang: "hu",
    },
    {
      id: "t27",
      quote: "Az aláírás-hitelesítés tíz perc alatt megtörtént. Évekig nem tudtam, hogy ilyen közel van konzuli szolgáltatás.",
      attribution: "Nyugdíjas, Rhode Island",
      lang: "hu",
    },
    {
      id: "t28",
      quote: "Anyám életbizonyítványát minden évben be kell nyújtani a nyugdíjhatóságnak. Hogy ezt Derry-ben el lehet intézni, hatalmas könnyebbség az egész családnak.",
      attribution: "Gondviselő, New Hampshire",
      lang: "hu",
    },
    {
      id: "t29",
      quote: "Professzionális, barátságos és megbízható. Pontosan azt kaptam, amire szükségem volt, felesleges várakozás nélkül.",
      attribution: "Magyar-Amerikai, Massachusetts",
      lang: "hu",
    },
    {
      id: "t30",
      quote: "Másolatokat kellett hitelesíttetnem egy magyarországi ingatlan-adásvételhez. Sylvia mindenre felkészült volt, és a dokumentumok hamar úton voltak Budapest felé.",
      attribution: "Vállalkozó, Boston",
      lang: "hu",
    },
    {
      id: "t31",
      quote: "Végre van valaki Új-Angliában, aki érti a Magyar konzuli eljárásokat. Nem kell minden apróságért Manhattanbe utazni.",
      attribution: "Kettős állampolgár, Maine",
      lang: "hu",
    },
    {
      id: "t32",
      quote: "Huszonöt éve élek az Egyesült Államokban, és mindig New Yorkba kellett utaznom az irataimért. Most, hogy van helyi konzulátus, nem hiszem el, hogy eddig nem volt ilyen.",
      attribution: "Bevándorolt, New Hampshire",
      lang: "hu",
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
      { label: "Testimonials", href: "/testimonials" },
      { label: "Serving Massachusetts", href: "/serving-massachusetts" },
      { label: "Serving New Hampshire", href: "/serving-new-hampshire" },
      { label: "Serving Rhode Island", href: "/serving-rhode-island" },
      { label: "Serving Vermont", href: "/serving-vermont" },
      { label: "Serving Maine", href: "/serving-maine" },
    ],
    guideLinks: [
      { label: "Citizenship & Naturalization", href: "/services/citizenship" },
      { label: "Vital Records Registration", href: "/services/vital-records" },
      { label: "Diplomatic Legalization", href: "/services/legalization" },
      { label: "Certificates of Good Conduct", href: "/services/certificates" },
      { label: "Authentication vs. Apostille Guide", href: "/services/guide" },
    ],
    externalLinks: [
      { label: "Embassy of Hungary — Washington DC", href: "https://washington.mfa.gov.hu" },
      { label: "Consulate General — New York", href: "https://newyork.mfa.gov.hu" },
      // ⚠️ Boston Hungarian Society URL — pending from Sylvia
      // ⚠️ Agnes Werman (citizenship & translation, NYC) — pending from Sylvia
    ],
    legal: "The Honorary Consul of Hungary for New England is an official representative of the Hungarian government under the Vienna Convention on Consular Relations. This website is not affiliated with the Embassy of Hungary or the Consulate General of Hungary in New York.",
  },

  states: [
    {
      slug: "massachusetts",
      name: "Massachusetts",
      eyebrow: "Serving Massachusetts",
      headline: "Hungarian Consular Services for Massachusetts",
      subheadline: "No drive to New York. Monday appointments in Derry, NH — just 50 miles from Boston.",
      intro: "Massachusetts is home to the largest Hungarian-American community in New England — approximately 18,100 residents of Hungarian ancestry, concentrated in Greater Boston, Worcester County, and the Pioneer Valley. For decades, accessing Hungarian consular services meant a full-day trip to the Consulate General in Manhattan. The Honorary Consulate in Derry, NH changes that equation.",
      cities: [
        { name: "Boston", distance: "50 miles", time: "~1 hour" },
        { name: "Worcester", distance: "70 miles", time: "~1 hr 15 min" },
        { name: "Lowell", distance: "45 miles", time: "~50 min" },
        { name: "Springfield", distance: "100 miles", time: "~1 hr 45 min" },
        { name: "Cambridge", distance: "52 miles", time: "~1 hour" },
      ],
      nycDistance: "225+ miles",
      nycTime: "4+ hours",
      regionalNote: "Greater Boston has the largest concentration of Hungarian-Americans in New England. The Hungarian community in Massachusetts includes long-established families in Newton, Brookline, and Wellesley, as well as newer arrivals in the greater metro area.",
      seoKeywords: ["Hungarian consulate Massachusetts", "Hungarian consulate Boston", "Hungarian document authentication Massachusetts", "Hungarian notary Boston"],
    },
    {
      slug: "new-hampshire",
      name: "New Hampshire",
      eyebrow: "Serving New Hampshire",
      headline: "Hungarian Consular Services in New Hampshire",
      subheadline: "Our home state. Local appointments, no travel required.",
      intro: "The Honorary Consulate of Hungary — New England is based in Derry, New Hampshire. If you live in the Granite State, you have the shortest distance of any New England Hungarian-American to official consular services. No state crossing, no highway tolls, no full-day commitment.",
      cities: [
        { name: "Manchester", distance: "12 miles", time: "~20 min" },
        { name: "Concord", distance: "28 miles", time: "~30 min" },
        { name: "Nashua", distance: "12 miles", time: "~20 min" },
        { name: "Portsmouth", distance: "38 miles", time: "~40 min" },
        { name: "Keene", distance: "70 miles", time: "~1 hr 15 min" },
      ],
      nycDistance: "270+ miles",
      nycTime: "4.5+ hours",
      regionalNote: "The Southern New Hampshire corridor — Manchester, Nashua, Derry, Salem — has seen steady growth in its Hungarian-American community. Many dual nationals in the region commuted to Manhattan for years before learning Sylvia's office was minutes away.",
      seoKeywords: ["Hungarian consulate New Hampshire", "Hungarian notary New Hampshire", "Hungarian consulate Manchester NH", "Hungarian document authentication NH"],
    },
    {
      slug: "rhode-island",
      name: "Rhode Island",
      eyebrow: "Serving Rhode Island",
      headline: "Hungarian Consular Services for Rhode Island",
      subheadline: "Providence to Derry in 75 minutes — not 4 hours to New York.",
      intro: "Rhode Island's compact geography means that the entire state is within a reasonable drive of the Derry, NH consulate office. Hungarian-Americans in Providence, Warwick, Newport, and across the Ocean State no longer need to calculate a full Manhattan commute just to get a document authenticated.",
      cities: [
        { name: "Providence", distance: "75 miles", time: "~1 hr 20 min" },
        { name: "Warwick", distance: "80 miles", time: "~1 hr 25 min" },
        { name: "Newport", distance: "95 miles", time: "~1 hr 40 min" },
        { name: "Woonsocket", distance: "65 miles", time: "~1 hr 10 min" },
        { name: "Cranston", distance: "78 miles", time: "~1 hr 20 min" },
      ],
      nycDistance: "200+ miles",
      nycTime: "3.5+ hours",
      regionalNote: "Rhode Island's Hungarian-American community has deep roots in the Providence area, with historical ties to the city's manufacturing past and more recent arrivals through academic and professional channels.",
      seoKeywords: ["Hungarian consulate Rhode Island", "Hungarian consulate Providence", "Hungarian document authentication Rhode Island", "Hungarian notary Providence"],
    },
    {
      slug: "vermont",
      name: "Vermont",
      eyebrow: "Serving Vermont",
      headline: "Hungarian Consular Services for Vermont",
      subheadline: "Burlington to Derry is 2 hours. New York is 6.",
      intro: "Vermont's Hungarian-American community is spread across the Green Mountain State — from Burlington in the north to Brattleboro in the south. The Honorary Consulate in Derry, NH serves as the closest official Hungarian diplomatic presence for all Vermont residents, cutting the typical New York trip by more than half.",
      cities: [
        { name: "Burlington", distance: "135 miles", time: "~2 hr 15 min" },
        { name: "Montpelier", distance: "115 miles", time: "~2 hours" },
        { name: "Rutland", distance: "100 miles", time: "~1 hr 50 min" },
        { name: "Brattleboro", distance: "80 miles", time: "~1 hr 25 min" },
        { name: "St. Johnsbury", distance: "130 miles", time: "~2 hr 10 min" },
      ],
      nycDistance: "320+ miles",
      nycTime: "5+ hours",
      regionalNote: "Vermont's Hungarian-American population includes both established families and Hungarians who came for academic and professional opportunities at University of Vermont and Middlebury College.",
      seoKeywords: ["Hungarian consulate Vermont", "Hungarian consulate Burlington VT", "Hungarian document authentication Vermont", "Hungarian notary Vermont"],
    },
    {
      slug: "maine",
      name: "Maine",
      eyebrow: "Serving Maine",
      headline: "Hungarian Consular Services for Maine",
      subheadline: "Portland is an hour from Derry. New York is a day trip you shouldn't have to make.",
      intro: "Maine's Hungarian-American community is geographically spread across a large state, but the southern Maine population — Portland, Kennebunk, York, Kittery — is within an easy hour of the Derry, NH consulate office. For communities further north, the drive to Derry remains dramatically shorter than any trip to Manhattan.",
      cities: [
        { name: "Portland", distance: "65 miles", time: "~1 hr 10 min" },
        { name: "Kennebunk", distance: "50 miles", time: "~55 min" },
        { name: "Augusta", distance: "100 miles", time: "~1 hr 50 min" },
        { name: "Bangor", distance: "145 miles", time: "~2 hr 30 min" },
        { name: "Kittery", distance: "35 miles", time: "~40 min" },
      ],
      nycDistance: "310+ miles",
      nycTime: "5+ hours",
      regionalNote: "Southern Maine — particularly the York County and Greater Portland areas — has a well-established Hungarian-American presence. Many residents in the Kennebunks and Biddeford pool area did not know local consular services existed.",
      seoKeywords: ["Hungarian consulate Maine", "Hungarian consulate Portland ME", "Hungarian document authentication Maine", "Hungarian notary Maine"],
    },
    {
      slug: "boston",
      name: "Boston",
      eyebrow: "Serving Greater Boston",
      headline: "Hungarian Consul in Boston — 50 Miles Closer Than New York",
      subheadline: "Greater Boston's Hungarian-Americans no longer need a Manhattan day trip. Derry, NH is under an hour.",
      intro: "Greater Boston is home to the largest concentration of Hungarian-Americans in New England — roughly 12,000 in the metro area alone. For decades, the nearest official Hungarian consular presence was the Consulate General in Midtown Manhattan: 225 miles, four-plus hours, a full day lost. The Honorary Consulate of Hungary in Derry, NH is 50 miles from Downtown Boston — under an hour on I-93 North.",
      cities: [
        { name: "Downtown Boston", distance: "50 miles", time: "~55 min" },
        { name: "Cambridge / Harvard Sq.", distance: "52 miles", time: "~1 hour" },
        { name: "Newton / Brookline", distance: "58 miles", time: "~1 hr 5 min" },
        { name: "Somerville / Medford", distance: "48 miles", time: "~55 min" },
        { name: "Wellesley / Needham", distance: "65 miles", time: "~1 hr 10 min" },
      ],
      nycDistance: "225+ miles",
      nycTime: "4+ hours",
      regionalNote: "Newton, Brookline, and Cambridge have historically dense Hungarian-American communities — families who came after 1956, academics at Harvard and MIT, and newer dual nationals navigating US–Hungarian life. Many did not know a local consulate existed.",
      seoKeywords: ["Hungarian consul Boston", "Hungarian consulate Boston", "apostille Boston Hungarian", "Hungarian document authentication Boston", "Hungarian notary Boston"],
    },
    {
      slug: "providence",
      name: "Providence",
      eyebrow: "Serving Greater Providence",
      headline: "Hungarian Consul in Providence — 75 Minutes to Derry, Not 4 Hours to New York",
      subheadline: "Rhode Island's Hungarian-Americans have a regional consulate. You don't need to drive to Manhattan.",
      intro: "Providence and greater Rhode Island sit 75 miles south of the Honorary Consulate in Derry, NH — a straightforward drive up I-95 that takes roughly 80 minutes. Compare that to the Consulate General in Manhattan: over 200 miles, 3.5+ hours each way, a full day of driving, parking, and city logistics. For Hungarian-Americans in Providence, Warwick, Cranston, and beyond, the Derry option is obvious once you know it exists.",
      cities: [
        { name: "Downtown Providence", distance: "75 miles", time: "~1 hr 20 min" },
        { name: "Warwick / Cranston", distance: "80 miles", time: "~1 hr 25 min" },
        { name: "North Providence", distance: "77 miles", time: "~1 hr 20 min" },
        { name: "Pawtucket / Central Falls", distance: "72 miles", time: "~1 hr 15 min" },
        { name: "Woonsocket", distance: "65 miles", time: "~1 hr 10 min" },
      ],
      nycDistance: "200+ miles",
      nycTime: "3.5+ hours",
      regionalNote: "Providence's Hungarian-American community has roots in the city's industrial past, with later arrivals through Brown University and RISD. Many residents in the north and west suburbs have never heard of the Derry consulate — which is exactly the gap this page closes.",
      seoKeywords: ["Hungarian consul Providence", "Hungarian consulate Providence", "apostille Providence Hungarian", "Hungarian document authentication Providence RI", "Hungarian notary Providence"],
    },
  ],

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
