/**
 * src/lib/products.ts
 * Product catalog — Hungary-themed merchandise.
 * Local catalog (no live Printful API call).
 * When Printful is configured, add printful_variant_id to each variant.
 * Prices in USD cents to match Stripe's integer format.
 */

export interface ProductVariant {
  id: string;
  color: string;
  colorHex: string;
  sizes: string[];
  /** Filled once Printful product is created; maps size → variant ID */
  printful_variant_ids?: Record<string, number>;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;            // USD cents (e.g. 3500 = $35.00)
  category: ProductCategory;
  featured: boolean;
  image: string;
  images?: string[];
  variants: ProductVariant[];
  sizes: string[];
  printful_product_id?: number;
}

export type ProductCategory = "Apparel" | "Accessories" | "Drinkware";

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  "Apparel",
  "Accessories",
  "Drinkware",
];

export const products: Product[] = [
  {
    id: "hungary-flag-tee",
    slug: "hungary-flag-tee",
    name: "Hungary Flag T-Shirt",
    description:
      "Classic unisex tee featuring the Hungarian tricolor flag. A simple statement of pride for Hungarian-Americans across New England. Soft 100% cotton, pre-shrunk, tagless.",
    price: 3200,
    category: "Apparel",
    featured: true,
    image: "/images/shop/hungary-flag-tee.jpg",
    sizes: ["S", "M", "L", "XL", "2XL"],
    variants: [
      {
        id: "hungary-flag-tee-navy",
        color: "Navy",
        colorHex: "#1a2744",
        sizes: ["S", "M", "L", "XL", "2XL"],
      },
      {
        id: "hungary-flag-tee-white",
        color: "White",
        colorHex: "#f5f5f5",
        sizes: ["S", "M", "L", "XL", "2XL"],
      },
    ],
  },
  {
    id: "consul-crest-hoodie",
    slug: "consul-crest-hoodie",
    name: "Honorary Consul Crest Hoodie",
    description:
      "Premium pullover hoodie in consulate navy with the Hungarian apostolic double cross in antique gold. Heavyweight fleece, kangaroo pocket, ribbed cuffs. Built to last through New England winters.",
    price: 5800,
    category: "Apparel",
    featured: true,
    image: "/images/shop/consul-crest-hoodie.jpg",
    sizes: ["S", "M", "L", "XL", "2XL"],
    variants: [
      {
        id: "consul-crest-hoodie-navy",
        color: "Navy",
        colorHex: "#1a2744",
        sizes: ["S", "M", "L", "XL", "2XL"],
      },
    ],
  },
  {
    id: "hungarian-american-sweatshirt",
    slug: "hungarian-american-sweatshirt",
    name: "Hungarian-American Crewneck",
    description:
      "\"Magyar-Amerikai\" printed in Playfair serif across the chest — both words, both identities, one garment. Midweight fleece crewneck, relaxed fit. Available in navy and charcoal.",
    price: 4800,
    category: "Apparel",
    featured: true,
    image: "/images/shop/hungarian-american-sweatshirt.jpg",
    sizes: ["S", "M", "L", "XL", "2XL"],
    variants: [
      {
        id: "hungarian-american-sweatshirt-navy",
        color: "Navy",
        colorHex: "#1a2744",
        sizes: ["S", "M", "L", "XL", "2XL"],
      },
      {
        id: "hungarian-american-sweatshirt-charcoal",
        color: "Charcoal",
        colorHex: "#3d4349",
        sizes: ["S", "M", "L", "XL", "2XL"],
      },
    ],
  },
  {
    id: "new-england-hungary-tee",
    slug: "new-england-hungary-tee",
    name: "New England · Hungary T-Shirt",
    description:
      "Five states, one consulate, one tee. \"New England · Hungary\" in classic monospaced gold on navy. A quiet acknowledgment that two places made you who you are. Unisex, 100% cotton.",
    price: 3200,
    category: "Apparel",
    featured: false,
    image: "/images/shop/new-england-hungary-tee.jpg",
    sizes: ["S", "M", "L", "XL", "2XL"],
    variants: [
      {
        id: "new-england-hungary-tee-navy",
        color: "Navy",
        colorHex: "#1a2744",
        sizes: ["S", "M", "L", "XL", "2XL"],
      },
      {
        id: "new-england-hungary-tee-cream",
        color: "Cream",
        colorHex: "#f5f0e8",
        sizes: ["S", "M", "L", "XL", "2XL"],
      },
    ],
  },
  {
    id: "apostolic-cross-tote",
    slug: "apostolic-cross-tote",
    name: "Apostolic Cross Canvas Tote",
    description:
      "Heavy-duty canvas tote with the Hungarian apostolic double cross in antique gold. Strong cotton webbing handles, natural canvas. Holds a week's worth of documents — or groceries.",
    price: 2400,
    category: "Accessories",
    featured: false,
    image: "/images/shop/apostolic-cross-tote.jpg",
    sizes: ["One Size"],
    variants: [
      {
        id: "apostolic-cross-tote-natural",
        color: "Natural",
        colorHex: "#f0ece0",
        sizes: ["One Size"],
      },
      {
        id: "apostolic-cross-tote-navy",
        color: "Navy",
        colorHex: "#1a2744",
        sizes: ["One Size"],
      },
    ],
  },
  {
    id: "hungary-consulate-mug",
    slug: "hungary-consulate-mug",
    name: "Honorary Consulate Ceramic Mug",
    description:
      "11 oz ceramic mug with the consulate wordmark and Hungarian apostolic cross in antique gold on navy. Dishwasher safe. For the meeting that starts at 7am before the Monday appointment rush.",
    price: 1800,
    category: "Drinkware",
    featured: false,
    image: "/images/shop/hungary-consulate-mug.jpg",
    sizes: ["One Size"],
    variants: [
      {
        id: "hungary-consulate-mug-navy",
        color: "Navy",
        colorHex: "#1a2744",
        sizes: ["One Size"],
      },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}

/** Format cents to USD display string */
export function formatPrice(cents: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(cents / 100);
}
