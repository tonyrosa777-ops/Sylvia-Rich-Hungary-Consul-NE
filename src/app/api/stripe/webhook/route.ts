import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";
import type { CartItemPayload } from "../checkout/route";

export const dynamic = "force-dynamic";

// Derive the ShippingDetails type from the actual Session property chain
// (Session.CollectedInformation cannot be used as a namespace — TS2713)
type ShippingDetails = NonNullable<
  NonNullable<Stripe.Checkout.Session["collected_information"]>["shipping_details"]
>;

function formatAddress(
  // Build-log error #7 / pattern #1: in dahlia, shipping lives at
  // session.collected_information.shipping_details, not session.shipping_details
  shipping: ShippingDetails | null | undefined
): string {
  if (!shipping) return "No shipping address provided.";
  const { name, address } = shipping;
  if (!address) return name ?? "No address";
  const { line1, line2, city, state, postal_code, country } = address;
  return [name, line1, line2, `${city}, ${state} ${postal_code}`, country]
    .filter((s): s is string => Boolean(s))
    .join("\n  ");
}

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  const stripeKey = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!stripeKey || !webhookSecret || !sig) {
    return NextResponse.json(
      { error: "Webhook secret or signature missing." },
      { status: 400 }
    );
  }

  // Build-log pattern #3: instantiate inside handler so empty key never throws at module load
  const stripe = new Stripe(stripeKey, { apiVersion: "2026-03-25.dahlia" });

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Signature error";
    console.error("[stripe/webhook] signature verification failed:", message);
    return NextResponse.json({ error: message }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    // Parse cart from metadata
    let items: CartItemPayload[] = [];
    try {
      items = JSON.parse(session.metadata?.cart ?? "[]") as CartItemPayload[];
    } catch {
      console.error("[stripe/webhook] failed to parse cart metadata");
    }

    // Build-log error #7: shipping is at collected_information.shipping_details in dahlia
    const shipping = session.collected_information?.shipping_details;
    const customerName = shipping?.name ?? "Customer";
    const customerEmail =
      session.customer_details?.email ?? "unknown@example.com";
    const total = ((session.amount_total ?? 0) / 100).toFixed(2);

    // --- Order alert email (non-fatal) ---
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      try {
        const resend = new Resend(resendKey);

        const itemLines = items
          .map(
            (item) =>
              `  • ${item.name} x${item.quantity} — $${item.price.toFixed(2)}`
          )
          .join("\n");

        const hasManualItems = items.some((i) => !i.printful_variant_id);
        const manualWarning = hasManualItems
          ? "\n\u26a0\ufe0f MANUAL FULFILLMENT REQUIRED for any items without Printful variant IDs."
          : "";

        const addressBlock = formatAddress(shipping);

        const emailText = [
          "New shop order on hungarianconsulne.com!",
          "",
          `Customer: ${customerName} <${customerEmail}>`,
          `Total: $${total}`,
          "",
          "Items:",
          itemLines,
          manualWarning,
          "",
          "Ship to:",
          `  ${addressBlock}`,
        ].join("\n");

        const ownerEmail =
          process.env.OWNER_EMAIL ?? "consul@hungarianconsulne.com";

        await resend.emails.send({
          from: "Hungary Consul Shop <orders@hungarianconsulne.com>",
          to: ownerEmail,
          subject: "New Order — Honorary Consulate Shop",
          text: emailText,
        });
      } catch (emailErr) {
        // Non-fatal — order is already paid; log and continue
        console.error("[stripe/webhook] order email failed:", emailErr);
      }
    }

    // --- Printful order (fire-and-forget, non-fatal) ---
    const printfulKey = process.env.PRINTFUL_API_KEY;
    const printfulItems = items.filter((i) => i.printful_variant_id);

    if (printfulKey && printfulItems.length > 0 && shipping?.address) {
      const { name, address } = shipping;
      const { line1, line2, city, state, postal_code, country } = address;

      const recipient = {
        name: name ?? customerName,
        address1: line1 ?? "",
        address2: line2 ?? undefined,
        city: city ?? "",
        state_code: state ?? "",
        zip: postal_code ?? "",
        country_code: country ?? "US",
        email: customerEmail,
      };

      const orderItems = printfulItems.map((item) => ({
        variant_id: item.printful_variant_id,
        quantity: item.quantity,
      }));

      // Fire-and-forget — do not await; errors are logged, never thrown
      void fetch("https://api.printful.com/orders", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${printfulKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ recipient, items: orderItems }),
      })
        .then(async (res) => {
          if (!res.ok) {
            const text = await res.text().catch(() => "(no body)");
            console.error(
              `[stripe/webhook] Printful order failed ${res.status}:`,
              text
            );
          }
        })
        .catch((err) => {
          console.error("[stripe/webhook] Printful fetch error:", err);
        });
    }
  }

  return NextResponse.json({ received: true });
}
