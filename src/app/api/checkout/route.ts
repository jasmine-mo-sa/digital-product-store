import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// Keep in sync with currencyStore.tsx
const RATES: Record<string, number> = {
  USD: 1,
  CAD: 1.36,
  EUR: 0.92,
};

type CartItem = {
  id: number;
  title: string;
  price: number; // always USD
  icon: string;
};

export async function POST(req: NextRequest) {
  try {
    const { items, currency = "USD" } = (await req.json()) as {
      items: CartItem[];
      currency: string;
    };

    if (!items?.length) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    const rate = RATES[currency] ?? 1;
    const origin = req.headers.get("origin") ?? "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: items.map((item) => ({
        price_data: {
          currency: currency.toLowerCase(),
          product_data: {
            name: item.title,
          },
          unit_amount: Math.round(item.price * rate * 100), // Stripe uses cents
        },
        quantity: 1,
      })),
      mode: "payment",
      success_url: `${origin}/checkout/success`,
      cancel_url: `${origin}/#products`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[Stripe checkout error]", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
