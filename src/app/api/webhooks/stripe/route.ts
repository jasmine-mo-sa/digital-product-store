import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";
import { PRODUCT_DOWNLOADS } from "@/lib/productDownloads";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[Stripe webhook] Signature verification failed:", message);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    await handleCheckoutCompleted(session);
  }

  return NextResponse.json({ received: true });
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  const customerEmail = session.customer_details?.email;
  if (!customerEmail) {
    console.error("[Stripe webhook] No customer email on session", session.id);
    return;
  }

  // Retrieve the full session with expanded line items + products
  const fullSession = await stripe.checkout.sessions.retrieve(session.id, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const purchasedItems: { name: string; downloadUrl: string | null }[] = [];

  for (const item of fullSession.line_items?.data ?? []) {
    const rawProduct = item.price?.product;
    const stripeProduct =
      rawProduct &&
      typeof rawProduct === "object" &&
      "metadata" in rawProduct
        ? (rawProduct as Stripe.Product)
        : null;

    const rawId = stripeProduct?.metadata?.product_id;
    const productId = rawId ? parseInt(rawId, 10) : NaN;
    const download = !isNaN(productId) ? PRODUCT_DOWNLOADS[productId] ?? null : null;

    purchasedItems.push({
      name: stripeProduct?.name ?? item.description ?? "Your Product",
      downloadUrl: download?.viewUrl ?? null,
    });
  }

  if (purchasedItems.length === 0) {
    console.warn("[Stripe webhook] No line items found for session", session.id);
    return;
  }

  try {
    await resend.emails.send({
      from: "StudioLumina <orders@studiolumina.co>",
      to: customerEmail,
      subject: "Your StudioLumina purchase is ready ✨",
      html: buildEmailHtml(purchasedItems),
    });
    console.log("[Stripe webhook] Email sent to", customerEmail);
  } catch (err) {
    console.error("[Stripe webhook] Failed to send email:", err);
  }
}

function buildEmailHtml(
  items: { name: string; downloadUrl: string | null }[],
): string {
  const productRows = items
    .map(
      (item) => `
      <div style="margin-bottom:14px;padding:20px 24px;background-color:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.09);border-radius:12px;">
        <div style="font-size:15px;font-weight:700;color:#ffffff;margin-bottom:12px;">${item.name}</div>
        ${
          item.downloadUrl
            ? `<a href="${item.downloadUrl}" style="display:inline-block;padding:10px 22px;background-color:#c9a96e;color:#12100e;text-decoration:none;font-weight:700;font-size:13px;border-radius:8px;letter-spacing:0.3px;">Access Your Product &rarr;</a>`
            : `<p style="margin:0;font-size:13px;color:rgba(255,255,255,0.45);">Your download link is on its way in a separate email.</p>`
        }
      </div>`,
    )
    .join("");

  const year = new Date().getFullYear();

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Your StudioLumina purchase</title>
</head>
<body style="margin:0;padding:0;background-color:#f5f0eb;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#f5f0eb;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" role="presentation" style="max-width:600px;width:100%;">

          <!-- Header / wordmark -->
          <tr>
            <td style="background-color:#12100e;border-radius:16px 16px 0 0;padding:36px 48px;text-align:center;">
              <div style="font-size:26px;font-weight:900;color:#ffffff;letter-spacing:-0.5px;">
                Studio<span style="color:#c9a96e;">Lumina</span>
              </div>
              <div style="margin-top:6px;font-size:11px;color:rgba(255,255,255,0.35);letter-spacing:2.5px;text-transform:uppercase;">Premium Digital Templates</div>
            </td>
          </tr>

          <!-- Main content -->
          <tr>
            <td style="background-color:#1a1610;padding:44px 48px;">

              <!-- Success icon -->
              <div style="text-align:center;margin-bottom:28px;">
                <div style="display:inline-block;width:60px;height:60px;border-radius:50%;background-color:rgba(34,197,94,0.12);text-align:center;line-height:60px;font-size:28px;">✓</div>
              </div>

              <h1 style="margin:0 0 10px;font-size:26px;font-weight:900;color:#ffffff;text-align:center;line-height:1.2;">Payment confirmed!</h1>
              <p style="margin:0 0 30px;font-size:15px;color:rgba(255,255,255,0.55);text-align:center;line-height:1.6;">
                Thank you for your purchase. Your products are ready below&nbsp;&mdash; bookmark this email so you can always come back to them.
              </p>

              <!-- Product list -->
              <div style="margin-bottom:28px;">
                ${productRows}
              </div>

              <!-- Tip box -->
              <div style="padding:18px 22px;background-color:rgba(201,169,110,0.07);border:1px solid rgba(201,169,110,0.2);border-radius:12px;margin-bottom:0;">
                <p style="margin:0;font-size:13px;color:rgba(255,255,255,0.55);line-height:1.7;">
                  <strong style="color:#e8c98a;">Tip:</strong> The links above open your files in Google Drive. To use them, click <em>Open with Canva</em> (for Brand Kit) or <em>Download</em>&nbsp;to save to your device.
                </p>
              </div>
            </td>
          </tr>

          <!-- Support row -->
          <tr>
            <td style="background-color:#15120a;padding:24px 48px;text-align:center;">
              <p style="margin:0;font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6;">
                Questions? Reply to this email or reach us at
                <a href="mailto:lumina.jasmine98@gmail.com" style="color:#c9a96e;text-decoration:none;">lumina.jasmine98@gmail.com</a>
                &mdash; we usually reply within 24&nbsp;hours.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#12100e;border-radius:0 0 16px 16px;padding:20px 48px;text-align:center;">
              <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.25);">
                &copy; ${year} StudioLumina &middot;
                <a href="https://www.instagram.com/lumina.studio.ca/" style="color:rgba(255,255,255,0.35);text-decoration:none;">Instagram</a>
                &middot; You received this because you made a purchase on StudioLumina.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
