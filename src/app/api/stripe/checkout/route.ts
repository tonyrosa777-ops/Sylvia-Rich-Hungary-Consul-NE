import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const dynamic = "force-dynamic";

export interface CartItemPayload {
  id: string | number;
  name: string;
  price: number; // dollars (e.g. 35.00)
  quantity: number;
  image?: string;
  printful_variant_id?: number;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as { items: CartItemPayload[] };
    const { items } = body;

    // Validate items
    if (!items || items.length === 0) {
      return NextResponse.json({ error: "Cart is empty." }, { status: 400 });
    }

    // Validate Stripe key
    const stripeKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeKey || stripeKey.includes("REPLACE_WITH")) {
      return NextResponse.json(
        { error: "Payment service is not configured." },
        { status: 503 }
      );
    }

    // Build-log pattern #3: always check node_modules/stripe/types/apiVersion.d.ts
    // Installed version: 2026-03-25.dahlia (not clover — build-log error #7)
    const stripe = new Stripe(stripeKey, {
      apiVersion: "2026-03-25.dahlia",
    });

    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL ??
      req.headers.get("origin") ??
      "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: items.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
            // Build-log pattern #18: absolute HTTPS image URLs only
            ...(item.image &&
              item.image.startsWith("https://") && {
                images: [item.image],
              }),
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })),
      shipping_address_collection: {
        allowed_countries: ["US", "CA"],
      },
      // Build-log error #20: always use customer_creation: "always" so Stripe
      // sends a receipt email to guest customers
      customer_creation: "always",
      success_url: `${siteUrl}/shop?success=true`,
      cancel_url: `${siteUrl}/shop`,
      metadata: {
        // Build-log pattern #18: cart in metadata.cart JSON
        cart: JSON.stringify(items),
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[stripe/checkout] session creation failed:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
