/**
 * src/lib/blog.ts
 * Blog post data — Hungarian consular education content.
 * All content here is authoritative; strings are NOT in translation JSON
 * because blog bodies are authored prose, not UI labels.
 * Post metadata (titles for nav/lists) lives in the component and pulls
 * from this structure; categories are mapped via shop.json translations.
 */

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "blockquote"; text: string }
  | { type: "divider" };

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string;
  readTime: string;
  featured: boolean;
  image?: string;
  body: ContentBlock[];
}

export type BlogCategory =
  | "Document Authentication"
  | "Citizenship & Nationality"
  | "Life Events"
  | "Community"
  | "Consular Updates";

export const BLOG_CATEGORIES: BlogCategory[] = [
  "Document Authentication",
  "Citizenship & Nationality",
  "Life Events",
  "Community",
  "Consular Updates",
];

export const posts: BlogPost[] = [
  // ─── Post 1 ────────────────────────────────────────────────────────────────
  {
    id: "what-does-honorary-consul-do",
    slug: "what-does-honorary-consul-do",
    title: "What Does an Honorary Consul Actually Do? A Plain-English Guide",
    excerpt:
      "Most people call the consulate not knowing exactly what an honorary consul can handle — and leave the call wishing someone had explained it clearly. Here it is.",
    category: "Document Authentication",
    date: "March 10, 2026",
    readTime: "5 min read",
    featured: true,
    image: "/images/blog/honorary-consul-role.jpg",
    body: [
      {
        type: "paragraph",
        text: "The most common question we receive — before someone even explains what they need — is: \"Wait, is this a real consulate?\" The short answer is yes. The Honorary Consulate of Hungary — New England is an officially appointed diplomatic post, authorized by the Embassy of Hungary in Washington, DC, under the Vienna Convention on Consular Relations.",
      },
      {
        type: "paragraph",
        text: "The longer answer requires a distinction most Americans have never needed to make before: the difference between a full consulate and an honorary consulate. Understanding that distinction tells you exactly what this office can do for you and what must go through New York.",
      },
      {
        type: "heading",
        text: "Full Consulate vs. Honorary Consulate: What You Need to Know",
      },
      {
        type: "paragraph",
        text: "A full consulate — like the Hungarian Consulate General in New York — is staffed by career diplomats employed by the Hungarian government. An honorary consulate is appointed by those same officials and authorized to perform specific consular functions in regions where a full consulate has no physical presence.",
      },
      {
        type: "paragraph",
        text: "For Hungarian citizens and dual nationals in Maine, Vermont, New Hampshire, Rhode Island, and Massachusetts, the Honorary Consulate of Hungary — New England is the only diplomatic authority in the region. The nearest full consulate is in New York City — a significant distance for anyone in northern New England. This office exists precisely to close that gap.",
      },
      {
        type: "heading",
        text: "What This Consulate Can Do For You",
      },
      {
        type: "paragraph",
        text: "An honorary consul Hungary residents of New England can access covers a broad range of document and certification services. These are not lesser services — they carry the same legal weight as services performed at the Consulate General in New York.",
      },
      {
        type: "list",
        items: [
          "Notarize Hungarian-language documents and signatures for use in Hungarian legal proceedings",
          "Authenticate documents for use in Hungary (consular legalization of US-issued documents)",
          "Certify true copies of Hungarian documents",
          "Witness declarations and affidavits for Hungarian courts, registries, and institutions",
          "Issue life certificates for Hungarian pension recipients living in New England",
          "Assist with consular correspondence and navigation of Hungarian bureaucratic processes",
          "Provide guidance and referrals for Hungarian passport applications and renewal (handled via New York)",
          "Support with birth, marriage, and death registration for Hungarian civil records",
        ],
      },
      {
        type: "heading",
        text: "What Must Go Through New York or Budapest",
      },
      {
        type: "paragraph",
        text: "Transparency is a core part of how this office operates. There are services that honorary consulates are not authorized to perform — and you should know them before making the trip.",
      },
      {
        type: "list",
        items: [
          "Hungarian passport issuance and renewal (requires the Consulate General in New York — biometric enrollment is mandatory)",
          "Emergency travel documents and laissez-passer",
          "Citizenship applications requiring in-person biometric data capture",
          "Hungarian property registration and inheritance proceedings (requires a Hungarian notary in Hungary)",
          "Visa issuance for non-Hungarian nationals (handled by the Embassy in Washington or the Consulate General in New York)",
        ],
      },
      {
        type: "blockquote",
        text: "If you have a form you cannot read, a deadline you cannot miss, or a question no American office can answer — this is where you come.",
      },
      {
        type: "heading",
        text: "Who Runs This Office",
      },
      {
        type: "paragraph",
        text: "The Honorary Consulate of Hungary — New England is led by Honorary Consul Sylvia Rich, appointed by the Embassy of Hungary. Sylvia has deep roots in both the Hungarian-American community and the New England region. Appointments are conducted with the same formality and legal rigor as any full consulate — because the documents produced here are presented to Hungarian authorities who will hold them to exactly that standard.",
      },
      {
        type: "heading",
        text: "Appointments Are Mondays Only",
      },
      {
        type: "paragraph",
        text: "Consular hours are Monday appointments only, held at our Derry, NH location. Bring your documents, a valid government-issued photo ID, and payment (cash or check made out to Sylvia Rich). Most appointments take 15–20 minutes for standard services.",
      },
      {
        type: "paragraph",
        text: "If you are unsure whether your need falls within our scope, use the contact form before booking. We will confirm in plain English what we can and cannot do — before you make the trip.",
      },
    ],
  },

  // ─── Post 2 ────────────────────────────────────────────────────────────────
  {
    id: "authentication-vs-apostille",
    slug: "authentication-vs-apostille",
    title: "Authentication vs. Apostille vs. Notarization: Which Do You Need?",
    excerpt:
      "These three terms appear on every Hungarian document request — and confuse nearly everyone. Here is a clear breakdown of what each one means and when to use which.",
    category: "Document Authentication",
    date: "March 3, 2026",
    readTime: "7 min read",
    featured: true,
    image: "/images/blog/authentication-vs-apostille.jpg",
    body: [
      {
        type: "paragraph",
        text: "When a Hungarian authority asks you to submit a \"certified\" document, the instruction rarely specifies which certification method they want. That vagueness is the source of most document rejections — and most of the phone calls we receive. Hungarian document authentication vs apostille is a distinction that American applicants encounter without warning, often at the worst possible moment.",
      },
      {
        type: "paragraph",
        text: "There are three distinct processes in play. Understanding which one applies to your situation before you start saves weeks of re-submission and, in many cases, missed legal deadlines.",
      },
      {
        type: "heading",
        text: "1. Notarization",
      },
      {
        type: "paragraph",
        text: "Notarization is the most basic level of document certification. An American notary public witnesses your signature, confirms your identity, and affixes their seal. This is appropriate for domestic US transactions — it does not carry independent legal weight in Hungary on its own.",
      },
      {
        type: "paragraph",
        text: "When is notarization enough? When a Hungarian institution specifically asks for a notarized translation of a US document — combined with an apostille placed on the notarization itself. The notary stamps the translation; the apostille stamps the notary. Hungary sees both.",
      },
      {
        type: "subheading",
        text: "What this consulate can do with notarization:",
      },
      {
        type: "paragraph",
        text: "This office can witness signatures and declarations in a Hungarian consular context — which carries greater weight than a standard American notarization for documents destined for Hungarian legal proceedings. If you need a sworn statement, a declaration, or a signature certified for use in Hungary, book an appointment here rather than with a standard US notary.",
      },
      {
        type: "heading",
        text: "2. Apostille",
      },
      {
        type: "paragraph",
        text: "An apostille is a standardized certification issued by a US state authority — typically the Secretary of State — that verifies the authenticity of a notary's seal or a public official's signature. Hungary is a member of the Hague Apostille Convention, which means apostilles issued by any US state are automatically accepted in Hungary without additional authentication.",
      },
      {
        type: "paragraph",
        text: "When do you need an apostille? When you are submitting a US-issued document to a Hungarian authority. Common examples include: birth certificates, marriage certificates, death certificates, divorce decrees, educational diplomas, criminal background checks, and court orders. The apostille goes on the US document itself, or on a certified translation of it.",
      },
      {
        type: "subheading",
        text: "How to get an apostille in New England:",
      },
      {
        type: "list",
        items: [
          "Massachusetts: Office of the Secretary of the Commonwealth, Apostille and Authentication Unit, Boston — turnaround typically 2–3 weeks by mail",
          "New Hampshire: Secretary of State, Division of Vital Records Administration, Concord — typically 1–2 weeks",
          "Maine: Secretary of State, Division of Corporations, Augusta — typically 2–4 weeks",
          "Vermont: Secretary of State, Montpelier — typically 1–3 weeks",
          "Rhode Island: Secretary of State, Providence — typically 2–3 weeks",
        ],
      },
      {
        type: "paragraph",
        text: "Most states now offer expedited apostille processing for an additional fee. If you have a Hungarian deadline, factor in 4–6 weeks of lead time from the moment you request the apostille — more if translation is also required.",
      },
      {
        type: "heading",
        text: "3. Consular Authentication (Legalization)",
      },
      {
        type: "paragraph",
        text: "Consular authentication — also called consular legalization — is performed by this office or the Consulate General in New York. It certifies that a document is valid for use in Hungary, that the official or notary whose credentials appear on it are legitimate, and that the document complies with Hungarian requirements.",
      },
      {
        type: "paragraph",
        text: "When do you need consular authentication? It is required when a Hungarian authority specifically requests it — typically for estate proceedings, certain court matters, and situations where the apostille path is not accepted. It is also used when documents from non-Hague countries need to be certified for use in Hungary, or when a Hungarian institution asks for a consular stamp specifically.",
      },
      {
        type: "blockquote",
        text: "The most common and costly mistake: obtaining an apostille when the Hungarian authority wanted a consular authentication — or vice versa. The document arrives, gets rejected, and you lose weeks. Always confirm with the requesting institution exactly what they require before you start.",
      },
      {
        type: "heading",
        text: "Decision Framework: Which Certification Path Is Right for You",
      },
      {
        type: "list",
        items: [
          "Hungarian registry, court, or institution asks for a certified copy of a US-issued document → get an apostille from your state Secretary of State, then have the document translated",
          "Hungarian authority asks for a \"consular stamp,\" \"consular authentication,\" or \"consular legalization\" → book an appointment with this office",
          "You need a signature witnessed or a declaration made for Hungarian legal purposes → this office can notarize in a consular context (book an appointment)",
          "You received a form from Hungary that you cannot read → contact this office before doing anything — a misread instruction wastes months",
          "You are unsure which path applies → describe what the Hungarian authority sent you using our contact form; we will tell you exactly what to do",
        ],
      },
      {
        type: "heading",
        text: "A Note on Translation",
      },
      {
        type: "paragraph",
        text: "Neither an apostille nor a consular authentication is a translation. Hungarian authorities require documents in Hungarian. If your US document is in English, you will need a certified Hungarian translation in addition to whatever certification is required. This office can refer you to certified translators with experience in Hungarian consular requirements.",
      },
      {
        type: "paragraph",
        text: "Ready to move forward? Book a Monday appointment or use the contact form to describe your document and the institution requesting it. We will confirm the correct path in plain language before you spend a dollar on processing fees.",
      },
    ],
  },

  // ─── Post 3 ────────────────────────────────────────────────────────────────
  {
    id: "hungarian-dual-citizenship-new-england",
    slug: "hungarian-dual-citizenship-new-england",
    title: "Hungarian Dual Citizenship in New England: Who Qualifies and How to Apply",
    excerpt:
      "Tens of thousands of people in New England have Hungarian ancestry. Many of them are already Hungarian citizens and do not know it. Here is what dual citizenship means, who qualifies, and how to start the process from Maine, Vermont, New Hampshire, Rhode Island, or Massachusetts.",
    category: "Citizenship & Nationality",
    date: "February 24, 2026",
    readTime: "8 min read",
    featured: true,
    image: "/images/blog/dual-citizenship.jpg",
    body: [
      {
        type: "paragraph",
        text: "Hungarian dual citizenship in New England is more accessible than most people realize. Under Hungary's citizenship law — particularly the 2010 simplified naturalization provisions — anyone with at least one Hungarian-born ancestor may be eligible to apply for Hungarian citizenship without giving up their American citizenship. The United States permits dual nationality, and Hungary extended citizenship rights to ethnic Hungarians living abroad.",
      },
      {
        type: "paragraph",
        text: "For people in Maine, Vermont, New Hampshire, Rhode Island, and Massachusetts, the Honorary Consulate of Hungary — New England is the regional resource for understanding and navigating this process. This article explains the three main pathways to Hungarian citizenship, what each requires, and where the Honorary Consulate fits into the application.",
      },
      {
        type: "heading",
        text: "Are You Already a Hungarian Citizen?",
      },
      {
        type: "paragraph",
        text: "Before applying, you need to determine whether you already hold Hungarian citizenship — or whether you need to apply for it. These are different situations with very different processes.",
      },
      {
        type: "paragraph",
        text: "You are likely already a Hungarian citizen if you were born to at least one Hungarian parent and that parent registered your birth with the Hungarian Civil Registry. Hungarian citizenship passes by descent (jus sanguinis) — it does not expire, and it does not require you to have lived in Hungary. If you are already a citizen, you need registration and a passport, not a citizenship application.",
      },
      {
        type: "heading",
        text: "The Three Pathways to Hungarian Citizenship",
      },
      {
        type: "subheading",
        text: "Pathway 1: Citizenship by Descent (Jus Sanguinis)",
      },
      {
        type: "paragraph",
        text: "If one or both of your parents were Hungarian citizens at the time of your birth, you are a Hungarian citizen by birth regardless of where you were born. This applies even if you were born in the United States. The key step is having this citizenship registered — which requires proving your parent's Hungarian citizenship and your family connection to it.",
      },
      {
        type: "list",
        items: [
          "Documents typically required: your birth certificate, parent's Hungarian birth certificate and citizenship documentation, marriage certificates if names differ",
          "All US documents must be apostilled and translated into Hungarian",
          "Application is submitted through this consulate and forwarded to the Hungarian Civil Registry",
          "Processing time is typically 3–6 months",
        ],
      },
      {
        type: "subheading",
        text: "Pathway 2: Simplified Naturalization for Ethnic Hungarians",
      },
      {
        type: "paragraph",
        text: "If your Hungarian ancestor was further back — a grandparent or great-grandparent — you may qualify under Hungary's 2010 simplified naturalization law. This pathway requires demonstrating Hungarian ancestry and basic Hungarian language ability. It does not require you to live in Hungary.",
      },
      {
        type: "list",
        items: [
          "Requires documentary proof of Hungarian ancestry (birth, marriage, and citizenship records tracing the family line)",
          "Requires a basic Hungarian language interview conducted at the consulate — conversational level, not fluent",
          "Application is submitted through this consulate and forwarded to Hungary",
          "Oath of citizenship is administered once the application is approved",
          "Processing time is typically 6–12 months",
        ],
      },
      {
        type: "subheading",
        text: "Pathway 3: Standard Naturalization (Honosítás)",
      },
      {
        type: "paragraph",
        text: "Standard naturalization is for people who have lived in Hungary for a qualifying period and meet residency requirements. This pathway is rarely relevant for New England residents who have not lived in Hungary and is not processed through this office.",
      },
      {
        type: "heading",
        text: "What Hungarian Dual Citizenship Provides",
      },
      {
        type: "list",
        items: [
          "Hungarian passport — full EU travel document, providing visa-free access to the European Union and Schengen Area",
          "EU right to live and work in any EU member state without a visa or work permit",
          "Right to vote in Hungarian elections",
          "Access to Hungarian consular services worldwide",
          "Ability to pass Hungarian citizenship to your children",
          "Inheritance and property rights in Hungary are clarified and simplified",
        ],
      },
      {
        type: "blockquote",
        text: "A Hungarian passport is one of the most powerful travel documents in the world — providing access to over 180 countries visa-free or with visa on arrival. For New England families with Hungarian roots, it is a birthright that takes only paperwork to claim.",
      },
      {
        type: "heading",
        text: "The Role of the Honorary Consulate in Your Application",
      },
      {
        type: "paragraph",
        text: "The Honorary Consulate of Hungary — New England is the regional intake point for citizenship applications and registrations for residents of Maine, Vermont, New Hampshire, Rhode Island, and Massachusetts. We review your document package, certify what needs consular certification, and forward completed applications to the appropriate Hungarian authority.",
      },
      {
        type: "paragraph",
        text: "We also conduct the Hungarian language interview for simplified naturalization applicants. This is not a formal examination — it is a conversation. If you can discuss your family history in Hungarian, you are likely at the required level.",
      },
      {
        type: "heading",
        text: "Where to Start",
      },
      {
        type: "paragraph",
        text: "The first step is a consultation — not a document collection sprint. Contact this office using the contact form and describe your situation: how you are connected to Hungarian citizenship (which ancestor, which generation), what documents you have, and what your goal is. We will tell you which pathway applies, what documents you need to gather, and what order to gather them in. Starting without a clear pathway wastes time and money.",
      },
    ],
  },

  // ─── Post 4 ────────────────────────────────────────────────────────────────
  {
    id: "hungarian-passport-renewal-new-england",
    slug: "hungarian-passport-renewal-new-england",
    title: "Hungarian Passport Renewal in New England: What You Need to Know Before You Apply",
    excerpt:
      "Hungarian passport renewal cannot be done at this office — but this office can make sure your application to New York is complete, correct, and doesn't come back rejected. Here is the full process for New England residents.",
    category: "Citizenship & Nationality",
    date: "February 10, 2026",
    readTime: "6 min read",
    featured: false,
    image: "/images/blog/passport-renewal.jpg",
    body: [
      {
        type: "paragraph",
        text: "Hungarian passport renewal in New England requires an in-person appointment at the Hungarian Consulate General in New York City. This is a firm requirement — biometric data (fingerprints and photograph) must be captured on specialized equipment that only career consulates operate. No honorary consulate can perform this function. If you have seen services elsewhere claiming otherwise, be skeptical.",
      },
      {
        type: "paragraph",
        text: "What this office can do is make certain that when you show up in New York, your application is complete and your supporting documents are in order. Applications that arrive with missing, expired, or incorrectly certified documents are delayed — sometimes by months. A 30-minute consultation here prevents that.",
      },
      {
        type: "heading",
        text: "When to Start the Renewal Process",
      },
      {
        type: "paragraph",
        text: "Do not wait until your Hungarian passport expires. The Consulate General in New York currently operates with appointment lead times of 4–8 weeks, and processing after the appointment takes an additional 4–8 weeks. If you plan to travel to Hungary — or anywhere in the EU using your Hungarian passport — start the renewal process at least four to five months before your travel date.",
      },
      {
        type: "paragraph",
        text: "Also important: Hungarian dual nationals are legally required to enter and exit Hungary on their Hungarian passport. If your Hungarian passport expires while you are abroad, you face a more complicated re-entry situation. Renewal before expiry is always the correct course of action.",
      },
      {
        type: "heading",
        text: "Documents Required for Hungarian Passport Renewal",
      },
      {
        type: "list",
        items: [
          "Your current Hungarian passport (even if expired — bring it)",
          "Completed passport application form (available from the Consulate General in New York)",
          "One biometric photograph meeting Hungarian passport photo specifications (specific dimensions and background color — not standard US passport photo specs)",
          "Proof of Hungarian citizenship if your citizenship record is not already in the Hungarian civil registry",
          "Payment of the passport fee in the amount specified by the Consulate General at the time of your appointment",
          "For children under 18: both parents must consent, or documentation of sole parental authority",
        ],
      },
      {
        type: "heading",
        text: "First-Time Passport vs. Renewal: Key Differences",
      },
      {
        type: "subheading",
        text: "First-time passport (never held a Hungarian passport):",
      },
      {
        type: "paragraph",
        text: "If you are applying for a Hungarian passport for the first time — because you were recently registered as a citizen, or because you are a citizen by descent who never previously applied — you will need additional documentation proving your Hungarian citizenship. This may include your Hungarian birth registration, your parents' citizenship documents, and the civil registry record of your citizenship. This office can help you assemble and certify this package before your New York appointment.",
      },
      {
        type: "subheading",
        text: "Renewal (previously held a Hungarian passport):",
      },
      {
        type: "paragraph",
        text: "Renewal is simpler. Your citizenship is already on record. You need your expired or expiring passport, a current photo, and the application form. The main error we see in renewal applications is an incorrect photo — Hungarian passport photo specifications differ from US passport photo specifications. Verify the specifications directly with the Consulate General before you have photos taken.",
      },
      {
        type: "heading",
        text: "For Children: Registering Before Applying for a Passport",
      },
      {
        type: "paragraph",
        text: "If you need a Hungarian passport for a child born in the US, the child must first be registered with the Hungarian Civil Registry before a passport can be issued. This is a separate process from the passport application. This office handles birth registration for New England residents — see our separate guide on registering a child's birth with Hungary. Registration takes 4–8 weeks; factor that into your passport timeline.",
      },
      {
        type: "heading",
        text: "What This Office Can Help With",
      },
      {
        type: "list",
        items: [
          "Reviewing your document package before your New York appointment to catch errors before they cause rejection",
          "Certifying or authenticating any documents that require consular review",
          "Assisting with Hungarian civil registry matters that must be resolved before the passport application",
          "Answering questions about the process that the Consulate General's phone line cannot address",
          "Referring you to certified Hungarian translators if any documents need translation",
        ],
      },
      {
        type: "blockquote",
        text: "The trip to New York takes a day. Having your application rejected and rescheduled takes months. A short consultation here before you go is the highest-value hour you can spend on this process.",
      },
      {
        type: "heading",
        text: "How to Book the Consulate General Appointment",
      },
      {
        type: "paragraph",
        text: "The Hungarian Consulate General in New York City handles passport appointments through their online booking system. Appointment availability changes frequently — check early and book as soon as you have a slot. Bring every document on their checklist; they will not accept partial applications.",
      },
      {
        type: "paragraph",
        text: "Contact this office if you have questions about the document requirements, need a document certified before your appointment, or are uncertain whether your citizenship is properly registered. We are here Monday appointments in Derry, NH.",
      },
    ],
  },

  // ─── Post 5 ────────────────────────────────────────────────────────────────
  {
    id: "registering-childs-birth-hungary",
    slug: "registering-childs-birth-hungary",
    title: "Registering Your Child's Birth with Hungary: A Step-by-Step Guide for New England Parents",
    excerpt:
      "If one parent is a Hungarian citizen, your child born in the US is entitled to Hungarian citizenship. Most parents do not know the process — or that there is a practical reason to register early.",
    category: "Life Events",
    date: "January 28, 2026",
    readTime: "8 min read",
    featured: false,
    image: "/images/blog/birth-registration.jpg",
    body: [
      {
        type: "paragraph",
        text: "Under Hungarian nationality law, a child born to at least one Hungarian parent — anywhere in the world — is a Hungarian citizen from birth. Registration with Hungary is not automatic. It is a separate legal process, and in most cases, parents do not realize it exists until their child is much older.",
      },
      {
        type: "paragraph",
        text: "There is no legal deadline to register a child's birth with Hungary, but there are significant practical advantages to registering early: your child can obtain a Hungarian passport (an EU travel document), and the registration process is substantially simpler while both parents' records are current, accessible, and undisputed. Waiting until a grandparent passes away or records become harder to locate adds complexity to a process that does not need to be complex.",
      },
      {
        type: "heading",
        text: "What You Are Registering",
      },
      {
        type: "paragraph",
        text: "You are registering your child's birth with the Hungarian Civil Registry (Anyakönyv). This creates a Hungarian birth record — entirely separate from the US birth certificate — and establishes your child's Hungarian nationality in the official record. Without this registration, your child cannot obtain a Hungarian passport, vote in Hungarian elections, or exercise other Hungarian citizenship rights.",
      },
      {
        type: "heading",
        text: "Documents You Will Need",
      },
      {
        type: "list",
        items: [
          "Your child's US birth certificate — with apostille from your state Secretary of State",
          "The Hungarian parent's Hungarian birth certificate and valid Hungarian ID or passport",
          "Marriage certificate of the parents (if applicable) — with apostille if US-issued, or certified copy if Hungarian-issued",
          "If the Hungarian parent was born in the US: their own Hungarian birth registration documents proving their citizenship",
          "Hungarian-language certified translations of all US-issued documents",
          "Completed Hungarian civil registry application forms (this office will assist with these)",
        ],
      },
      {
        type: "heading",
        text: "The Process, Step by Step",
      },
      {
        type: "subheading",
        text: "Step 1: Gather US documents and obtain apostilles",
      },
      {
        type: "paragraph",
        text: "Obtain your child's birth certificate from your state vital records office. Then bring or mail it to your state Secretary of State to obtain an apostille. This typically takes 2–6 weeks depending on your state. Some states offer expedited processing for an additional fee.",
      },
      {
        type: "subheading",
        text: "Step 2: Prepare the Hungarian parent's documents",
      },
      {
        type: "paragraph",
        text: "Locate the Hungarian parent's documents. If they are original Hungarian-issued certificates, they may not need an apostille — but they may need certified copies. If the documents are old, worn, or issued before your parent emigrated, there may be additional steps to obtain replacements from the Hungarian registry. Contact this office if you are unsure what you have and whether it is sufficient.",
      },
      {
        type: "subheading",
        text: "Step 3: Arrange certified translations",
      },
      {
        type: "paragraph",
        text: "All US-issued documents must be translated into Hungarian by a certified translator. This office can refer you to translators with experience in Hungarian consular requirements. Do not use a general translation service — the translation format matters.",
      },
      {
        type: "subheading",
        text: "Step 4: Consular appointment at this office",
      },
      {
        type: "paragraph",
        text: "Book a Monday appointment at our Derry, NH location. Bring all original documents plus translations. We will review your package, certify any documents that require consular authentication, complete the application forms, and forward the application to the Hungarian Civil Registry.",
      },
      {
        type: "subheading",
        text: "Step 5: Hungarian processing and registry response",
      },
      {
        type: "paragraph",
        text: "The Hungarian Civil Registry processes the registration. This typically takes 4–8 weeks. Once registered, your child receives a Hungarian civil registry identifier, which is required for a Hungarian passport application and for any future exercise of Hungarian citizenship rights.",
      },
      {
        type: "blockquote",
        text: "The most important thing most parents do not know: your child already has Hungarian citizenship. Registration does not grant citizenship — it records it. The difference matters. Your child's rights exist from the moment of birth. Registration simply makes those rights exercisable — including the right to an EU passport.",
      },
      {
        type: "heading",
        text: "Registering an Older Child or an Adult Child",
      },
      {
        type: "paragraph",
        text: "Adults who were never registered can complete this process themselves. The document requirements are the same; the application is submitted in your own name. Many adults in their 30s and 40s are completing this process now — often prompted by a desire to live or work in Europe, or by reconnecting with Hungarian family heritage.",
      },
      {
        type: "heading",
        text: "Ready to Start?",
      },
      {
        type: "paragraph",
        text: "Contact this office using the contact form. Describe your situation: which parent is Hungarian, your child's birth state, and the approximate documents you have on hand. We will confirm exactly what you need before you gather anything — saving you time and preventing the most common mistakes.",
      },
    ],
  },

  // ─── Post 6 ────────────────────────────────────────────────────────────────
  {
    id: "life-certificate-hungary-pension",
    slug: "life-certificate-hungary-pension",
    title: "Hungarian Life Certificate for Pension Recipients: What It Is and How to Get One in New England",
    excerpt:
      "If you receive a Hungarian pension and live in New England, you are required to submit a life certificate — an életigazolás — each year to keep your payments uninterrupted. This office issues them every Monday.",
    category: "Life Events",
    date: "January 14, 2026",
    readTime: "5 min read",
    featured: false,
    image: "/images/blog/life-certificate.jpg",
    body: [
      {
        type: "paragraph",
        text: "A Hungarian life certificate — életigazolás in Hungarian — is an official document that confirms you are alive and residing abroad. The Hungarian pension authority (NYUFIGAZGATÓSÁG) requires this document annually from every pension recipient who lives outside Hungary. If the certificate is not received on time, pension payments are suspended until it is submitted.",
      },
      {
        type: "paragraph",
        text: "For New England residents receiving a Hungarian life certificate for pension purposes, this office is the closest and most straightforward place to obtain one. No appointment with New York is necessary. No mail-in process. A Monday appointment in Derry, NH takes less than 20 minutes.",
      },
      {
        type: "heading",
        text: "Who Needs a Life Certificate",
      },
      {
        type: "paragraph",
        text: "You need a life certificate if you receive any of the following from Hungary: old-age pension (öregségi nyugdíj), disability pension (rokkantsági ellátás), widow's or widower's pension (özvegyi nyugdíj), or any other benefit administered by the Hungarian pension authority. The annual requirement is non-negotiable — the Hungarian pension system assumes that recipients who do not respond have either moved, become unreachable, or passed away.",
      },
      {
        type: "heading",
        text: "When the Certificate Is Due",
      },
      {
        type: "paragraph",
        text: "The Hungarian pension authority sends a notice each year — typically by mail to your address on file in Hungary. The notice specifies the deadline. Many recipients in the United States do not receive this notice reliably, or receive it late. Do not wait for the notice. If you receive a Hungarian pension and have not submitted a life certificate in the past 12 months, assume one is due and contact this office.",
      },
      {
        type: "heading",
        text: "What to Bring to Your Appointment",
      },
      {
        type: "list",
        items: [
          "Valid government-issued photo identification — US passport, driver's license, or Hungarian identity card",
          "Your Hungarian personal identification number (személyigazolvány szám or adóazonosító szám) if you have it",
          "Any notice you received from the Hungarian pension authority (NYUFIGAZGATÓSÁG), if you have it — bring it even if you cannot read it",
          "The life certificate form issued by the Hungarian pension authority — this office has standard forms on hand if you do not have the form",
        ],
      },
      {
        type: "heading",
        text: "What Happens During the Appointment",
      },
      {
        type: "paragraph",
        text: "You appear in person. The Honorary Consul verifies your identity using your government-issued photo ID, witnesses your signature on the life certificate form, and applies the official consular seal. The completed certificate is then yours to mail directly to the Hungarian pension authority, or we can assist with the mailing address if you are uncertain where to send it.",
      },
      {
        type: "paragraph",
        text: "The entire process takes 15–20 minutes. There is a service fee for consular certification — please check the current fee schedule on our contact page or call ahead.",
      },
      {
        type: "heading",
        text: "If Your Pension Has Already Been Suspended",
      },
      {
        type: "paragraph",
        text: "If your pension has been suspended due to a missing life certificate, the process to reinstate it is the same: appear in person, complete the life certificate, and submit it to the Hungarian pension authority. Reinstatement typically takes 4–8 weeks once the certificate is received in Hungary. In most cases, suspended payments are paid retroactively once the certificate is processed.",
      },
      {
        type: "blockquote",
        text: "Do not let a paperwork deadline interrupt income you have earned. The appointment is 20 minutes. Book it the moment you know you are due.",
      },
      {
        type: "heading",
        text: "If You Cannot Travel to Derry",
      },
      {
        type: "paragraph",
        text: "Life certificates require in-person identity verification — they cannot be processed by mail or remotely. If you are physically unable to travel to our Derry, NH office due to health or mobility limitations, contact us to discuss options. In exceptional circumstances, alternative arrangements may be possible.",
      },
      {
        type: "paragraph",
        text: "Book your Monday appointment through our online scheduling system, or use the contact form to ask questions before you come in.",
      },
    ],
  },

  // ─── Post 7 ────────────────────────────────────────────────────────────────
  {
    id: "power-of-attorney-hungary-property",
    slug: "power-of-attorney-hungary-property",
    title: "Hungarian Power of Attorney for Property Matters: How to Execute One From New England",
    excerpt:
      "If you own property in Hungary — or are handling an inheritance from abroad — you need a properly executed Hungarian power of attorney. Here is exactly how to do it from New England without flying to Budapest.",
    category: "Document Authentication",
    date: "January 7, 2026",
    readTime: "7 min read",
    featured: false,
    image: "/images/blog/power-of-attorney.jpg",
    body: [
      {
        type: "paragraph",
        text: "A Hungarian power of attorney for property transactions — meghatalmazás in Hungarian — authorizes someone in Hungary to act on your behalf in legal, financial, or property matters. If you own property in Hungary, are involved in an inheritance proceeding, or need to manage any legal matter in Hungary without being physically present, you need one of these documents. And it must be executed correctly, or a Hungarian court, notary, or registry will reject it.",
      },
      {
        type: "paragraph",
        text: "The good news: you do not need to fly to Budapest to execute a Hungarian power of attorney. This office — the Honorary Consulate of Hungary — New England — can witness and certify your signature on a power of attorney document in Derry, NH. The result is a document that Hungarian authorities will accept.",
      },
      {
        type: "heading",
        text: "What a Power of Attorney Is Used For in Hungary",
      },
      {
        type: "list",
        items: [
          "Authorizing a family member, attorney, or agent in Hungary to buy or sell real estate on your behalf",
          "Granting authority to manage inheritance proceedings (hagyatéki eljárás) without your physical presence",
          "Authorizing someone to represent you in Hungarian court proceedings",
          "Giving authority to sign contracts, access bank accounts, or manage property in your name",
          "Allowing a representative to communicate with Hungarian government offices, registries, and tax authorities on your behalf",
        ],
      },
      {
        type: "heading",
        text: "Requirements for a Hungarian Power of Attorney to Be Legally Valid",
      },
      {
        type: "paragraph",
        text: "A power of attorney that works in an American context will not automatically work in Hungary. Hungarian law requires specific elements, and Hungarian notaries and courts are strict about them.",
      },
      {
        type: "list",
        items: [
          "The document must be in Hungarian, or accompanied by a certified Hungarian translation",
          "It must specify the scope of authority precisely — vague \"general\" powers of attorney are frequently challenged",
          "Your signature must be witnessed by a consular official (this office) or a Hungarian notary",
          "The consular seal must be affixed to authenticate your signature",
          "For property transactions specifically: Hungarian law often requires the power of attorney to be in notarial form (közokirat) — your Hungarian attorney or notary in Hungary will advise on this requirement",
        ],
      },
      {
        type: "heading",
        text: "The Process: Step by Step",
      },
      {
        type: "subheading",
        text: "Step 1: Have the document drafted in Hungary",
      },
      {
        type: "paragraph",
        text: "The safest approach is to have the power of attorney drafted by a Hungarian attorney (ügyvéd) or notary in Hungary — one who understands exactly what your Hungarian transaction requires. They will prepare the document in the correct legal format and can email it to you for signature. Do not draft a power of attorney yourself from an English-language template; the risk of rejection is very high.",
      },
      {
        type: "subheading",
        text: "Step 2: Book your appointment at this office",
      },
      {
        type: "paragraph",
        text: "Bring the printed, unsigned document to your Monday appointment in Derry, NH. Also bring valid government-issued photo ID. Do not sign the document before your appointment — your signature must be witnessed in person by the Honorary Consul.",
      },
      {
        type: "subheading",
        text: "Step 3: Signature and consular certification",
      },
      {
        type: "paragraph",
        text: "At your appointment, the Honorary Consul verifies your identity, witnesses your signature, and applies the official consular certification. This authenticates your signature as genuine and confirms you executed the document voluntarily with the authority of a consular official present.",
      },
      {
        type: "subheading",
        text: "Step 4: Send the document to Hungary",
      },
      {
        type: "paragraph",
        text: "Mail or courier the certified document to your representative in Hungary — or to the Hungarian attorney or notary handling your transaction. We recommend using a tracked international courier service for documents of this nature. Keep a photocopy for your records.",
      },
      {
        type: "blockquote",
        text: "A correctly executed power of attorney is the key that allows your Hungarian transaction to proceed in your absence. An incorrectly executed one is a delay of months. Do not sign anything before the appointment, and do not use an unreviewed template.",
      },
      {
        type: "heading",
        text: "Special Note: Inheritance Proceedings",
      },
      {
        type: "paragraph",
        text: "Hungarian inheritance law (öröklési jog) requires heirs to participate in probate proceedings (hagyatéki eljárás) either in person or through a properly authorized representative. If you are a New England resident who has inherited Hungarian property and cannot travel to Hungary, a consularly certified power of attorney is the mechanism that allows the proceeding to move forward without you.",
      },
      {
        type: "paragraph",
        text: "Inheritance timelines in Hungary can be tight. If you have learned of an inheritance situation, contact this office immediately to discuss the power of attorney process — delays in executing the document translate directly into delays in the inheritance proceeding.",
      },
      {
        type: "heading",
        text: "Book Your Appointment",
      },
      {
        type: "paragraph",
        text: "Use the contact form to describe your situation before booking — including what transaction the power of attorney is for and whether the document has already been drafted. We will confirm what you need to bring and answer any questions before your Monday appointment.",
      },
    ],
  },

  // ─── Post 8 ────────────────────────────────────────────────────────────────
  {
    id: "honorary-consul-vs-consulate-general",
    slug: "honorary-consul-vs-consulate-general",
    title: "Honorary Consul vs. Consulate General: Which Office Handles What?",
    excerpt:
      "Should you contact the Honorary Consulate in New England or travel to the Hungarian Consulate General in New York? The answer depends on what you need. Here is a clear breakdown.",
    category: "Consular Updates",
    date: "March 17, 2026",
    readTime: "5 min read",
    featured: false,
    image: "/images/blog/consul-vs-consulate.jpg",
    body: [
      {
        type: "paragraph",
        text: "The question comes up constantly: \"Should I call New England or go to New York?\" For Hungarian citizens and dual nationals in the six New England states, having a clear answer to that question saves a significant amount of time and money. The Hungarian Consulate General in New York and the Honorary Consulate of Hungary — New England serve the same community, but they handle different things.",
      },
      {
        type: "paragraph",
        text: "This article maps out what each office handles, so you can contact the right one from the start — rather than making a trip to New York for something that can be resolved in Derry, or waiting months for a New England appointment for something that requires New York.",
      },
      {
        type: "heading",
        text: "What Only the Consulate General in New York Can Do",
      },
      {
        type: "paragraph",
        text: "The Consulate General is a full diplomatic mission staffed by career Hungarian diplomats. It has equipment and legal authority that honorary consulates do not. The following services are only available through New York:",
      },
      {
        type: "list",
        items: [
          "Hungarian passport issuance and renewal (biometric enrollment required — special equipment on site)",
          "Emergency travel documents and laissez-passer for urgent travel",
          "Hungarian national identity card (személyigazolvány) issuance",
          "In-person biometric enrollment for citizenship applications",
          "Visa processing for certain categories of non-Hungarian nationals",
          "Hungarian driver's license exchange services",
        ],
      },
      {
        type: "heading",
        text: "What the Honorary Consulate in New England Handles",
      },
      {
        type: "paragraph",
        text: "The Honorary Consulate of Hungary — New England is authorized to handle a substantial range of document and certification services — with Monday appointments available in Derry, NH, rather than requiring a full day trip to New York City.",
      },
      {
        type: "list",
        items: [
          "Consular authentication and legalization of US-issued documents for use in Hungary",
          "Notarization of signatures and documents in a Hungarian consular context",
          "Certification of true copies of Hungarian documents",
          "Life certificates (életigazolás) for Hungarian pension recipients",
          "Birth registration for children of Hungarian parents born in the US",
          "Power of attorney execution and certification for Hungarian property and legal matters",
          "Declaration witnessing and affidavits for Hungarian proceedings",
          "Guidance and application support for citizenship by descent and simplified naturalization",
          "Pre-appointment document review to prepare for New York Consulate General visits",
        ],
      },
      {
        type: "blockquote",
        text: "Think of it this way: New York has the equipment to issue identity documents. New England has the authority and the access to handle everything else — and it is an hour from Boston, not four.",
      },
      {
        type: "heading",
        text: "When You Need Both",
      },
      {
        type: "paragraph",
        text: "Some situations require services from both offices — and the order matters. For example: if you need a new Hungarian passport and also need to register a child's birth, you will need to complete the birth registration (which this office handles) before the Consulate General in New York can issue a passport in the child's name. Starting in the wrong order delays both processes.",
      },
      {
        type: "paragraph",
        text: "If you are not sure which office to contact first, use the contact form here. Describe what you are trying to accomplish — not the service you think you need, but the goal. We will tell you which office handles it and in what order to proceed.",
      },
      {
        type: "heading",
        text: "Contacting the Consulate General in New York",
      },
      {
        type: "paragraph",
        text: "The Hungarian Consulate General in New York City serves Hungarian nationals across the northeastern United States. Appointment availability changes frequently; book through their online system as early as possible. Passport appointment slots in particular can fill weeks in advance.",
      },
      {
        type: "paragraph",
        text: "For New England residents, our office is the first call for the vast majority of consular needs. Reserve the New York trip for the services that genuinely require it.",
      },
    ],
  },

  // ─── Post 9 ────────────────────────────────────────────────────────────────
  {
    id: "document-checklist-consulate-appointment",
    slug: "document-checklist-consulate-appointment",
    title: "What to Bring to Your Hungarian Consulate Appointment: The Complete Checklist",
    excerpt:
      "Incomplete document packages are the single most common reason consulate appointments fail. Here is a service-by-service checklist so you arrive prepared.",
    category: "Document Authentication",
    date: "February 3, 2026",
    readTime: "6 min read",
    featured: false,
    image: "/images/blog/document-checklist.jpg",
    body: [
      {
        type: "paragraph",
        text: "What to bring to a Hungarian consulate appointment is the question that comes up most in the week before a scheduled visit. Arriving with an incomplete document package means either rescheduling or making a second trip — neither of which is convenient when you have arranged to come to Derry, NH on a Monday.",
      },
      {
        type: "paragraph",
        text: "This checklist is organized by service type. Find the service you need, confirm you have every item listed, and arrive confident. If you have any doubt about a specific document, use the contact form before your appointment — we will tell you in advance.",
      },
      {
        type: "heading",
        text: "For Every Appointment: Universal Requirements",
      },
      {
        type: "list",
        items: [
          "Valid government-issued photo identification — US passport, driver's license, or Hungarian identity card. Must be current and not expired.",
          "The document(s) you need certified, notarized, or authenticated — originals only. Photocopies are not accepted for most services.",
          "Payment — cash or check made payable to Sylvia Rich. The fee depends on the service; contact us in advance if you are uncertain of the amount.",
          "Any correspondence you received from a Hungarian authority related to your matter, even if you cannot read it — bring it anyway.",
        ],
      },
      {
        type: "heading",
        text: "Life Certificate (Életigazolás) for Hungarian Pension",
      },
      {
        type: "list",
        items: [
          "Valid government-issued photo ID",
          "Life certificate form from the Hungarian pension authority (NYUFIGAZGATÓSÁG) — or request that this office provide the form at your appointment",
          "Your Hungarian personal identification number (if known)",
          "The pension authority notice you received (if you received one)",
        ],
      },
      {
        type: "heading",
        text: "Consular Authentication of a US Document",
      },
      {
        type: "list",
        items: [
          "Original US document (birth certificate, marriage certificate, death certificate, court order, educational diploma, etc.)",
          "Apostille already affixed by your state Secretary of State — if the receiving Hungarian authority requires apostille first",
          "Certified Hungarian translation of the document (required for submission to Hungarian institutions)",
          "The letter or form from the Hungarian authority that describes what they need — this helps us certify it correctly",
          "Valid photo ID",
        ],
      },
      {
        type: "heading",
        text: "Power of Attorney for Hungarian Property or Legal Matters",
      },
      {
        type: "list",
        items: [
          "The power of attorney document, drafted in Hungarian by a Hungarian attorney — printed, unsigned. Do not sign it before your appointment.",
          "Valid photo ID",
          "Contact information for the Hungarian attorney or notary who drafted the document, in case we have questions",
        ],
      },
      {
        type: "heading",
        text: "Child's Birth Registration with Hungary",
      },
      {
        type: "list",
        items: [
          "Child's US birth certificate — with apostille from the state Secretary of State",
          "Hungarian parent's birth certificate and valid Hungarian passport or ID",
          "Marriage certificate of parents (if applicable) — apostilled if US-issued",
          "Certified Hungarian translations of all US documents",
          "Completed Hungarian civil registry application forms — this office can assist with these at your appointment",
        ],
      },
      {
        type: "heading",
        text: "Citizenship Application Support / Simplified Naturalization",
      },
      {
        type: "list",
        items: [
          "Proof of Hungarian ancestry: birth certificates, marriage certificates, and citizenship records tracing the family line from you to your Hungarian ancestor",
          "Apostilles on all US-issued documents in the chain",
          "Certified Hungarian translations of all US documents",
          "Valid photo ID",
          "Any previous Hungarian documents you hold — passports, identity cards, prior civil registry documents",
        ],
      },
      {
        type: "heading",
        text: "Declaration or Sworn Statement for Hungarian Proceedings",
      },
      {
        type: "list",
        items: [
          "The text of the declaration or statement — drafted in Hungarian if possible, or in English with a certified translation",
          "Any supporting documents referenced in the declaration",
          "Valid photo ID",
        ],
      },
      {
        type: "blockquote",
        text: "When in doubt about any item on this list, send a message before your appointment. Describing your situation takes five minutes. Rescheduling because of a missing document takes weeks.",
      },
      {
        type: "heading",
        text: "Practical Tips for Your Appointment",
      },
      {
        type: "list",
        items: [
          "Arrive a few minutes early — consular appointments run on a schedule and a late start can affect services rendered",
          "Bring originals AND clear photocopies of every document. Some services require us to retain a copy.",
          "If your name appears differently on different documents (maiden name, middle names, name changes), bring documentation explaining the discrepancy",
          "If you are acting on behalf of someone else, bring documentation of your authority to do so",
          "Children must be present for any appointment involving their documents, unless you have documented authority to act on their behalf",
        ],
      },
      {
        type: "paragraph",
        text: "Book your Monday appointment using the online scheduling system, or contact this office with questions. We are here to make this process as smooth as possible.",
      },
    ],
  },

  // ─── Post 10 ───────────────────────────────────────────────────────────────
  {
    id: "hungarian-community-new-england",
    slug: "hungarian-community-new-england",
    title: "The Hungarian Community in New England: History, Organizations, and How to Connect",
    excerpt:
      "New England has a deep and active Hungarian-American heritage. From industrial-era immigration waves to contemporary dual nationals, here is the community you belong to — and how to find it.",
    category: "Community",
    date: "March 24, 2026",
    readTime: "7 min read",
    featured: false,
    image: "/images/blog/hungarian-community.jpg",
    body: [
      {
        type: "paragraph",
        text: "The Hungarian community in New England has roots that run deeper than most people realize. New England was one of the primary destinations for Hungarian immigrants during the great migration waves of the early twentieth century — driven by workers seeking employment in the region's textile mills, manufacturing plants, and mining operations. Their descendants are here today, scattered across six states, and many are discovering or rediscovering that heritage in meaningful ways.",
      },
      {
        type: "paragraph",
        text: "The Honorary Consulate of Hungary — New England exists to serve this community. Part of that service is providing information about the community itself — the history, the organizations, and the ways to connect with Hungarian heritage in this region.",
      },
      {
        type: "heading",
        text: "A Brief History of Hungarian Immigration to New England",
      },
      {
        type: "paragraph",
        text: "Hungarian immigration to New England occurred in several distinct waves. The first major wave arrived between the 1880s and 1920s — agricultural and industrial workers, many from regions that are now Slovakia, Romania, and Ukraine but were then part of the Kingdom of Hungary. They settled in industrial cities: Bridgeport and New Britain in Connecticut; Worcester, Lowell, and Springfield in Massachusetts; and smaller mill towns throughout the region.",
      },
      {
        type: "paragraph",
        text: "A second, very different wave arrived after the failed 1956 Hungarian Revolution. These were educated professionals, intellectuals, and political refugees who fled the Soviet crackdown and were resettled across the United States, including New England. Many found positions in universities, hospitals, and research institutions. Their children and grandchildren form a significant part of today's Hungarian-American professional community in the region.",
      },
      {
        type: "paragraph",
        text: "A third, ongoing wave has arrived since Hungary joined the European Union in 2004, and particularly since the economic changes of the 2010s — professionals, students, and families maintaining ties to both countries simultaneously.",
      },
      {
        type: "heading",
        text: "Hungarian-American Organizations in New England",
      },
      {
        type: "subheading",
        text: "Cultural and Heritage Organizations",
      },
      {
        type: "paragraph",
        text: "Several organizations in New England preserve and celebrate Hungarian culture. Hungarian-American cultural clubs, folk dance groups, and heritage societies operate in the larger cities of Massachusetts and Connecticut. Many hold annual events around St. Stephen's Day (August 20th), the Hungarian national holiday, and around the anniversary of the 1956 Revolution (October 23rd). Contact this consulate office if you are looking for the organization closest to you — we maintain current contact information for the regional community.",
      },
      {
        type: "subheading",
        text: "Hungarian Reformed Church Communities",
      },
      {
        type: "paragraph",
        text: "The Hungarian Reformed Church has historically been one of the most important institutions for Hungarian communities in the United States. Several congregations in New England conduct services in Hungarian and serve as social and cultural centers for Hungarian-American families. These communities maintain connections with churches in Hungary and are a point of contact for recent arrivals as well as multigenerational families.",
      },
      {
        type: "subheading",
        text: "Hungarian Language Schools and Education",
      },
      {
        type: "paragraph",
        text: "Several Saturday Hungarian language schools operate in the greater Boston area and in Connecticut, serving children of Hungarian parents and grandchildren seeking to maintain or recover the language. The Hungarian government's Collegium Hungaricum and related programs also offer resources for Hungarian language learners. Language proficiency is directly relevant for citizenship applications under simplified naturalization — see our citizenship guide for details.",
      },
      {
        type: "heading",
        text: "The Role of the Honorary Consulate in Community Life",
      },
      {
        type: "paragraph",
        text: "The Honorary Consulate of Hungary — New England is not only a document processing office. It is the official Hungarian diplomatic presence in six states, and part of that role is supporting the Hungarian community as a community — not just as individuals with bureaucratic needs.",
      },
      {
        type: "list",
        items: [
          "We participate in Hungarian-American community events throughout New England",
          "We can provide information and referrals for community organizations, language resources, and cultural programs",
          "We can assist community organizations with questions about Hungarian cultural and diplomatic matters",
          "We welcome contact from anyone seeking to connect with Hungarian heritage in New England — citizenship and document services are not a requirement for reaching out",
        ],
      },
      {
        type: "blockquote",
        text: "Hungary has not forgotten its diaspora. The community here — whether three generations removed or freshly arrived — is part of the nation's story. This office exists to keep that connection alive and functional.",
      },
      {
        type: "heading",
        text: "Reconnecting With Hungarian Heritage",
      },
      {
        type: "paragraph",
        text: "Many people contact this office for the first time because a parent or grandparent passed away and left behind Hungarian documents, property, or unresolved legal questions. This moment of contact with Hungarian bureaucracy often becomes a broader reconnection with heritage — learning the language, understanding family history, pursuing dual citizenship.",
      },
      {
        type: "paragraph",
        text: "If you are at that starting point — uncertain about your Hungarian heritage, what rights or documents you may hold, or what connection is even possible — reach out. The contact form on this site is the right place to start. Describe your family background, what you know, and what you are curious about. We will tell you what is possible.",
      },
      {
        type: "heading",
        text: "National Hungarian-American Resources",
      },
      {
        type: "list",
        items: [
          "The American Hungarian Federation (AHF) — the oldest and largest Hungarian-American advocacy organization in the United States",
          "The Hungarian American Coalition — policy and cultural advocacy based in Washington, DC",
          "Balassi Institute (Collegium Hungaricum) — Hungarian cultural centers in several US cities; language learning and cultural programming",
          "The Embassy of Hungary in Washington, DC — policy-level engagement and consular oversight",
          "The Hungarian Consulate General in New York City — full consular services for the northeastern United States",
        ],
      },
      {
        type: "paragraph",
        text: "This office is your local point of contact. Whether you need a document certified, a life certificate issued, or simply a conversation about what being Hungarian-American means in 2026 — we are here on Mondays in Derry, NH.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return posts.filter((p) => p.featured);
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return posts.filter((p) => p.category === category);
}
