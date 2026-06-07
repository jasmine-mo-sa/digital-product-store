import type { Metadata } from "next";
import { Inter, Fira_Code, Noto_Sans_Arabic } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/lib/languageStore";
import { CurrencyProvider } from "@/lib/currencyStore";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoArabic = Noto_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://digital-product-store-pi.vercel.app"),
  title: "Studio Lumina — Premium Digital Templates",
  description:
    "High-end Canva kits, resume templates, and digital planners crafted for creatives who want to stand out.",
  keywords: ["canva templates", "resume templates", "digital planners", "graphic design"],
  openGraph: {
    title: "Studio Lumina — Premium Digital Templates",
    description: "Elevate your brand with premium digital design products.",
    type: "website",
    images: [{ url: "/api/og", width: 1200, height: 630, alt: "StudioLumina" }],
  },
  twitter: {
    card: "summary_large_image",
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
      <body className={`${inter.variable} ${firaCode.variable} ${notoArabic.variable} font-sans`}>
        <LanguageProvider>
          <CurrencyProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </CurrencyProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
