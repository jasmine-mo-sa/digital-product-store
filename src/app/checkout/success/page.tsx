import Stripe from "stripe";
import { PRODUCT_DOWNLOADS } from "@/lib/productDownloads";
import { CartClearer } from "./CartClearer";
import { SuccessPageUI, type SuccessItem } from "./SuccessPageUI";

// ── Stripe instance (server-side only) ──────────────────────────────────────
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

type Props = {
  searchParams: { session_id?: string };
};

// ── Page ─────────────────────────────────────────────────────────────────────
export default async function CheckoutSuccess({ searchParams }: Props) {
  const { session_id } = searchParams;

  let paymentVerified = false;
  let items: SuccessItem[] = [];

  if (session_id) {
    try {
      const session = await stripe.checkout.sessions.retrieve(session_id, {
        expand: ["line_items", "line_items.data.price.product"],
      });

      if (session.payment_status === "paid") {
        paymentVerified = true;

        for (const lineItem of session.line_items?.data ?? []) {
          const rawProduct = lineItem.price?.product;

          const stripeProduct =
            rawProduct &&
            typeof rawProduct === "object" &&
            "metadata" in rawProduct
              ? (rawProduct as Stripe.Product)
              : null;

          const rawId = stripeProduct?.metadata?.product_id;
          const productId = rawId ? parseInt(rawId, 10) : NaN;
          const download = !isNaN(productId) ? (PRODUCT_DOWNLOADS[productId] ?? null) : null;

          items.push({
            productName: stripeProduct?.name ?? lineItem.description ?? null,
            viewUrl: download?.viewUrl ?? null,
          });
        }
      }
    } catch {
      // Session lookup failed — degrade gracefully to generic success screen
    }
  }

  const hasAnyDownload = items.some((p) => p.viewUrl !== null);

  return (
    <>
      {paymentVerified && <CartClearer />}
      <SuccessPageUI
        paymentVerified={paymentVerified}
        items={items}
        hasAnyDownload={hasAnyDownload}
      />
    </>
  );
}
