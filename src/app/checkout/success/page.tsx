import Stripe from "stripe";
import { Sparkles, CheckCircle2, ArrowLeft, Eye, Mail, Lock } from "lucide-react";
import Link from "next/link";
import { PRODUCT_DOWNLOADS, type ProductDownload } from "@/lib/productDownloads";

// ── Stripe instance (server-side only) ──────────────────────────────────────
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// ── Types ────────────────────────────────────────────────────────────────────
type Props = {
  searchParams: { session_id?: string };
};

type PurchasedItem = {
  download: ProductDownload | null;
  productName: string;
};

// ── Page ─────────────────────────────────────────────────────────────────────
export default async function CheckoutSuccess({ searchParams }: Props) {
  const { session_id } = searchParams;

  let paymentVerified = false;
  let purchasedItems: PurchasedItem[] = [];

  if (session_id) {
    try {
      const session = await stripe.checkout.sessions.retrieve(session_id, {
        expand: ["line_items", "line_items.data.price.product"],
      });

      if (session.payment_status === "paid") {
        paymentVerified = true;

        for (const item of session.line_items?.data ?? []) {
          const rawProduct = item.price?.product;

          // Type-narrow: must be an object (i.e. expanded Product, not a string or deleted)
          const stripeProduct =
            rawProduct &&
            typeof rawProduct === "object" &&
            "metadata" in rawProduct
              ? (rawProduct as Stripe.Product)
              : null;

          const rawId = stripeProduct?.metadata?.product_id;
          const productId = rawId ? parseInt(rawId, 10) : NaN;

          purchasedItems.push({
            productName: stripeProduct?.name ?? item.description ?? "Your Product",
            download: !isNaN(productId) ? (PRODUCT_DOWNLOADS[productId] ?? null) : null,
          });
        }
      }
    } catch {
      // Session lookup failed — degrade gracefully to generic success screen
    }
  }

  const hasAnyDownload = purchasedItems.some((p) => p.download !== null);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/20 dark:from-[#0b0516] dark:via-[#130a2a] dark:to-[#0d1220] px-4 py-12">

      {/* Decorative orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-lg w-full">
        <div className="bg-white dark:bg-[#13092b] rounded-3xl border border-gray-100 dark:border-white/5 shadow-2xl p-10 text-center">

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-green-500" />
              </div>
              <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-white" />
              </div>
            </div>
          </div>

          <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-3">
            Payment Successful!
          </h1>
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
            Thank you for your purchase! 🎉 Your products are unlocked below.
          </p>

          {/* ── Product list with view links ─────────────────────────────── */}
          {paymentVerified && purchasedItems.length > 0 && (
            <div className="mb-8 space-y-3 text-left">
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-500 dark:text-brand-400 mb-4 text-center">
                Your Products
              </p>

              {purchasedItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-brand-500/5 border border-brand-500/15"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center shrink-0">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-gray-900 dark:text-white truncate">
                      {item.productName}
                    </p>
                    {item.download ? (
                      <a
                        href={item.download.viewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline mt-0.5"
                      >
                        <Eye className="w-3 h-3" />
                        View your product
                      </a>
                    ) : (
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                        Download link coming to your email
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── Fallback when payment can't be verified ───────────────────── */}
          {!paymentVerified && (
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-amber-500/5 border border-amber-500/15 mb-8 text-left">
              <Lock className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Confirming your payment…
                </span>{" "}
                If your products don&apos;t appear, check your email for access details or
                contact us below.
              </p>
            </div>
          )}

          {/* ── Email reminder (shown when some products have no link yet) ─ */}
          {paymentVerified && !hasAnyDownload && (
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-brand-500/5 border border-brand-500/15 mb-8 text-left">
              <Mail className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Check your inbox!
                </span>{" "}
                Your file link will arrive within a few minutes to the email you used at
                checkout.
              </p>
            </div>
          )}

          {/* ── Back to store ─────────────────────────────────────────────── */}
          <div className="flex justify-center">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-purple-600 text-white font-semibold text-sm hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-brand-500/25"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Store
            </Link>
          </div>

          {/* Brand */}
          <p className="mt-8 text-xs text-gray-400 dark:text-gray-500">
            Studio<span className="text-gradient font-semibold">Lumina</span> · Questions?{" "}
            <a
              href="mailto:lumina.jasmine98@gmail.com"
              className="underline hover:text-brand-500 transition-colors"
            >
              lumina.jasmine98@gmail.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
