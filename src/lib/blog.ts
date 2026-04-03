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
        text: "The longer answer requires a distinction most Americans have never needed to make before: the difference between a full consulate and an honorary consulate.",
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
        text: "For Hungarian citizens and dual nationals in Maine, Vermont, New Hampshire, Rhode Island, and Massachusetts, the Honorary Consulate of Hungary — New England is the only diplomatic authority in the region. The nearest full consulate is in New York City.",
      },
      {
        type: "heading",
        text: "What This Consulate Can Do For You",
      },
      {
        type: "list",
        items: [
          "Notarize Hungarian-language documents and signatures",
          "Authenticate documents for use in Hungary (legalization of US-issued documents)",
          "Certify true copies of Hungarian documents",
          "Witness declarations and affidavits for Hungarian legal proceedings",
          "Issue life certificates for Hungarian pension recipients",
          "Assist with consular correspondence and navigation of Hungarian bureaucratic processes",
          "Provide referrals for Hungarian passport applications and renewal (handled via New York)",
        ],
      },
      {
        type: "heading",
        text: "What Must Go Through New York or Budapest",
      },
      {
        type: "list",
        items: [
          "Hungarian passport issuance and renewal (requires the Consulate General in New York)",
          "Emergency travel documents",
          "Citizenship applications requiring in-person biometric enrollment",
          "Hungarian property registration or inheritance proceedings (requires a Hungarian notary in Hungary)",
        ],
      },
      {
        type: "blockquote",
        text: "If you have a form you cannot read, a deadline you cannot miss, or a question no American office can answer — this is where you come.",
      },
      {
        type: "heading",
        text: "Appointments Are Mondays Only",
      },
      {
        type: "paragraph",
        text: "Consular hours are Monday appointments only, held in Derry, NH. Bring your documents, a valid government-issued photo ID, and exact payment in cash or by check made out to Sylvia Rich. Most appointments take 15–20 minutes.",
      },
      {
        type: "paragraph",
        text: "If you are unsure whether your need falls within our scope, use the contact form before booking. We will confirm in plain English what we can and cannot do before you make the trip.",
      },
    ],
  },
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
        text: "When a Hungarian authority asks you to submit a \"certified\" document, the instruction rarely specifies which certification method they want. That vagueness is the source of most document rejections — and most of the phone calls we receive.",
      },
      {
        type: "paragraph",
        text: "There are three distinct processes in play. Understanding which one applies to your situation before you start saves weeks of re-submission.",
      },
      {
        type: "heading",
        text: "1. Notarization",
      },
      {
        type: "paragraph",
        text: "Notarization is the most basic level of document certification. An American notary public witnesses your signature and confirms your identity. This is appropriate for domestic US transactions — it does not carry legal weight in Hungary on its own.",
      },
      {
        type: "paragraph",
        text: "When is it enough? When a Hungarian institution specifically asks for a notarized translation of a US document, combined with an apostille on the notarization itself.",
      },
      {
        type: "heading",
        text: "2. Apostille",
      },
      {
        type: "paragraph",
        text: "An apostille is a standardized certification issued by a US state authority (typically the Secretary of State) that verifies the authenticity of a notary's seal or a public official's signature. Hungary is a member of the Hague Apostille Convention, which means apostilles issued in any US state are accepted in Hungary without additional authentication.",
      },
      {
        type: "paragraph",
        text: "When do you need it? When you are submitting a US-issued document (birth certificate, marriage certificate, death certificate, divorce decree, educational diploma) to a Hungarian authority. The apostille goes on the US document itself or on a notarized translation of it.",
      },
      {
        type: "subheading",
        text: "How to get an apostille in New England:",
      },
      {
        type: "list",
        items: [
          "Massachusetts: Secretary of the Commonwealth, Apostille Unit, Boston",
          "New Hampshire: Secretary of State, Concord",
          "Maine: Secretary of State, Augusta",
          "Vermont: Secretary of State, Montpelier",
          "Rhode Island: Secretary of State, Providence",
        ],
      },
      {
        type: "heading",
        text: "3. Consular Authentication (Legalization)",
      },
      {
        type: "paragraph",
        text: "Consular authentication — also called legalization — is performed by the Honorary Consulate or the Consulate General in New York. It certifies that a document meets the requirements for use in Hungary and that the notary or official whose seal appears on it is legitimate.",
      },
      {
        type: "paragraph",
        text: "When do you need it? Consular authentication is required when a Hungarian authority specifically requests it, or when an apostille alone is not sufficient (which is uncommon but does occur for certain court proceedings and estate matters).",
      },
      {
        type: "blockquote",
        text: "The most common mistake: obtaining an apostille when the Hungarian authority wanted a consular authentication — or vice versa. Always confirm with the requesting institution before you start.",
      },
      {
        type: "heading",
        text: "Decision Framework",
      },
      {
        type: "list",
        items: [
          "Hungarian institution asks for a certified copy of a US document → get apostille from your state Secretary of State",
          "Hungarian institution asks for a consular stamp or certification → book an appointment with this office",
          "You need a signature or declaration witnessed → this office can notarize in Hungarian-language context",
          "You're unsure → contact us before starting. Describe what the Hungarian authority sent you.",
        ],
      },
    ],
  },
  {
    id: "registering-childs-birth-hungary",
    slug: "registering-childs-birth-hungary",
    title: "Registering Your Child's Birth with Hungary: A Step-by-Step Guide for New England Parents",
    excerpt:
      "If one parent is a Hungarian citizen, your child born in the US is entitled to Hungarian citizenship. Most parents don't know the process — or that there's a deadline.",
    category: "Life Events",
    date: "February 24, 2026",
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
        text: "There is no legal deadline to register a child's birth, but there are practical advantages to registering early: your child can obtain a Hungarian passport, which provides EU travel access, and the registration process is simpler while both parents' records are current and easily accessible.",
      },
      {
        type: "heading",
        text: "What You Are Registering",
      },
      {
        type: "paragraph",
        text: "You are registering your child's birth with the Hungarian Civil Registry (Anyakönyv). This creates a Hungarian birth record — separate from the US birth certificate — and establishes your child's Hungarian nationality.",
      },
      {
        type: "heading",
        text: "Documents You Will Need",
      },
      {
        type: "list",
        items: [
          "Your child's US birth certificate — with apostille from your state Secretary of State",
          "Both parents' Hungarian documents: birth certificate, Hungarian ID or passport, and marriage certificate if applicable — all with apostille or certified copies",
          "If the Hungarian parent was born in the US: their own Hungarian birth registration documents",
          "Translation of all documents into Hungarian (by a certified translator)",
          "Completed Hungarian civil registry application forms",
        ],
      },
      {
        type: "heading",
        text: "The Process",
      },
      {
        type: "subheading",
        text: "Step 1: Gather US documents and obtain apostilles",
      },
      {
        type: "paragraph",
        text: "Obtain your child's birth certificate from your state vital records office. Then apostille it at your state Secretary of State. This typically takes 2–6 weeks depending on your state.",
      },
      {
        type: "subheading",
        text: "Step 2: Prepare Hungarian documents",
      },
      {
        type: "paragraph",
        text: "Locate the Hungarian parent's documents. If they are original Hungarian-issued certificates, they may not need apostille — but they may need certified copies. Contact this office if you are unsure.",
      },
      {
        type: "subheading",
        text: "Step 3: Consular appointment",
      },
      {
        type: "paragraph",
        text: "Book a Monday appointment with this office. Bring all documents plus translations. We will review your package, certify any documents that require consular authentication, and forward the application to the Hungarian Civil Registry.",
      },
      {
        type: "subheading",
        text: "Step 4: Hungarian processing",
      },
      {
        type: "paragraph",
        text: "The Hungarian Civil Registry processes the registration. This typically takes 4–8 weeks. Once registered, your child receives a Hungarian birth registration number, which is required for a Hungarian passport application.",
      },
      {
        type: "blockquote",
        text: "The most important thing most parents do not know: your child already has Hungarian citizenship. Registration does not grant citizenship — it records it. The difference is more than semantic. It means your child's rights exist now. Registration simply makes them usable.",
      },
      {
        type: "heading",
        text: "Ready to Start?",
      },
      {
        type: "paragraph",
        text: "Send us a message through the contact page describing your situation — which parent is Hungarian, your child's birth state, and the approximate documents you have on hand. We will tell you exactly what you need before you gather anything.",
      },
    ],
  },
  {
    id: "before-you-travel-hungary-documents",
    slug: "before-you-travel-hungary-documents",
    title: "Before You Travel to Hungary: The Documents Every Dual National Should Have Ready",
    excerpt:
      "If you hold both US and Hungarian citizenship, you are required to enter and exit Hungary on your Hungarian passport. Most dual nationals do not know this — until they are at the border.",
    category: "Citizenship & Nationality",
    date: "February 17, 2026",
    readTime: "6 min read",
    featured: false,
    image: "/images/blog/travel-hungary.jpg",
    body: [
      {
        type: "paragraph",
        text: "Under Hungarian law, Hungarian citizens are required to use their Hungarian passport when entering and exiting Hungary. This applies to dual nationals — including those who hold both Hungarian and American citizenship. Using your US passport to enter Hungary as a dual national is technically a violation of Hungarian law, and border agents may question it.",
      },
      {
        type: "heading",
        text: "Do You Hold Hungarian Citizenship?",
      },
      {
        type: "paragraph",
        text: "You are a Hungarian citizen if: you were born to at least one Hungarian parent and have been registered with the Hungarian Civil Registry; you were born in Hungary; or you obtained Hungarian citizenship through simplified naturalization.",
      },
      {
        type: "paragraph",
        text: "If you are unsure whether you hold Hungarian citizenship, contact this office. We can help you determine your status based on your parents' nationality and your birth circumstances.",
      },
      {
        type: "heading",
        text: "Passport Status: What to Check Before You Book Flights",
      },
      {
        type: "list",
        items: [
          "Hungarian passport validity: Must be valid for the duration of your stay. For EU travel generally, must be valid for at least 3 months beyond your intended return date.",
          "Hungarian passport renewal: Must go through the Consulate General in New York (or Hungarian authorities in Hungary directly). This office cannot issue or renew Hungarian passports.",
          "Start early: Hungarian passport renewal through New York currently takes 6–10 weeks.",
          "US passport: You will use this to re-enter the US. Ensure it is also valid.",
        ],
      },
      {
        type: "heading",
        text: "Documents to Carry When Traveling to Hungary",
      },
      {
        type: "list",
        items: [
          "Valid Hungarian passport (required for entry into Hungary)",
          "Valid US passport (required for re-entry into the US)",
          "Any documents related to property you own in Hungary",
          "Power of attorney documents if you are handling legal matters on behalf of family members",
          "Contact information for this consulate and for the Consulate General in New York",
        ],
      },
      {
        type: "heading",
        text: "If You Need Documents Authenticated Before You Go",
      },
      {
        type: "paragraph",
        text: "If you are traveling to Hungary for a legal, financial, or estate matter, you may need consular authentication of US documents before you leave. Book an appointment with this office as early as possible — allow at least 3–4 weeks before your travel date to account for authentication, any apostille processing, and translation time.",
      },
      {
        type: "blockquote",
        text: "The appointment that takes 15 minutes in Derry can save you weeks of delay in Budapest. Get your documents in order before you leave.",
      },
      {
        type: "heading",
        text: "Hungarian Visa Requirements for Non-Citizen Family Members",
      },
      {
        type: "paragraph",
        text: "If you are traveling with US-citizen-only family members who do not hold Hungarian citizenship, they enter Hungary as part of the Schengen Area on their US passport — no visa required for stays under 90 days. Contact this office if you have questions about family members' entry requirements.",
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
