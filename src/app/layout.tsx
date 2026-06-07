import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Fira_Code } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/lib/languageStore";
import { CurrencyProvider } from "@/lib/currencyStore";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://digital-product-store-pi.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Studio Lumina — Premium Canva Templates, Resume Templates & Digital Planners",
    template: "%s | Studio Lumina",
  },
  description:
    "Buy premium digital templates by Studio Lumina — beautifully designed Canva kits, ATS-friendly resume templates, and aesthetic digital planners. Instant download. Used by 5,000+ creatives.",
  keywords: [
    "canva templates",
    "resume templates",
    "digital planners",
    "canva kit",
    "Canva brand kit",
    "ATS resume template",
    "GoodNotes planner",
    "digital downloads",
    "creative templates",
    "freelancer templates",
    "portfolio Canva template",
    "digital products",
    "Studio Lumina",
  ],
  alternates: {
    canonical: BASE_URL,
  },
  authors: [{ name: "Studio Lumina", url: BASE_URL }],
  creator: "Studio Lumina",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Studio Lumina — Premium Canva & Resume Templates",
    description:
      "Beautifully designed Canva kits, ATS-optimized resume templates, and digital planners. Instant download — join 5,000+ happy customers.",
    type: "website",
    url: BASE_URL,
    siteName: "Studio Lumina",
    images: [{ url: "/api/og", width: 1200, height: 630, alt: "Studio Lumina — Premium Digital Templates" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Lumina — Premium Digital Templates",
    description:
      "Canva kits, resume templates & digital planners. Instant download. Join 5,000+ creatives.",
    images: ["/api/og"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${dmSans.variable} ${firaCode.variable} font-sans`}>
        <JsonLd />
        <LanguageProvider>
          <CurrencyProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </CurrencyProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
