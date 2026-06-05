import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Studio Lumina — Premium Digital Templates",
  description:
    "High-end Canva kits, resume templates, and digital planners crafted for creatives who want to stand out.",
  keywords: ["canva templates", "resume templates", "digital planners", "graphic design"],
  openGraph: {
    title: "Studio Lumina — Premium Digital Templates",
    description: "Elevate your brand with premium digital design products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${firaCode.variable} font-sans`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
