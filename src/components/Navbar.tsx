"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/lib/cartStore";
import { useLanguage } from "@/lib/languageStore";
import { useCurrency, type Currency } from "@/lib/currencyStore";
import { CartDrawer } from "@/components/CartDrawer";

const LANGS = ["EN", "DE", "AR"] as const;

const LANG_CURRENCY: Record<string, Currency> = {
  en: "CAD",
  de: "EUR",
  ar: "SAR",
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { items } = useCart();
  const { lang, setLang, t } = useLanguage();
  const { setCurrency } = useCurrency();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t.nav.products, href: "#products" },
    { label: t.nav.about,    href: "#about"    },
    { label: t.nav.reviews,  href: "#reviews"  },
    { label: t.nav.contact,  href: "#contact"  },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-md shadow-brand-200/40 border-b border-brand-100 py-3"
            : "bg-[#fdf7ee]/80 backdrop-blur-sm py-5"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/logo.jpeg"
              alt="StudioLumina"
              width={52}
              height={52}
              priority
              className="h-[42px] w-[42px] rounded-full object-cover group-hover:scale-105 transition-transform duration-200"
            />
            <span className="font-display font-bold text-xl tracking-tight text-brand-900">
              Studio<span className="text-gradient">Lumina</span>
            </span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-brand-700 hover:text-brand-500 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-2">

            {/* Language */}
            <div className="relative hidden sm:block">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium text-brand-700 hover:text-brand-900 hover:bg-brand-100 transition-colors"
              >
                🌐 {lang.toUpperCase()}
                <ChevronDown className={cn("w-3 h-3 transition-transform", langOpen && "rotate-180")} />
              </button>
              {langOpen && (
                <div className="absolute top-full mt-1.5 right-0 w-24 bg-white border border-brand-100 rounded-xl shadow-xl overflow-hidden z-50">
                  {LANGS.map((l) => (
                    <button
                      key={l}
                      onClick={() => {
                        const newLang = l.toLowerCase() as Parameters<typeof setLang>[0];
                        setLang(newLang);
                        setCurrency(LANG_CURRENCY[newLang]);
                        setLangOpen(false);
                      }}
                      className={cn(
                        "w-full px-4 py-2.5 text-sm text-left transition-colors",
                        lang.toUpperCase() === l
                          ? "bg-brand-100 text-brand-700 font-semibold"
                          : "text-brand-800 hover:bg-brand-50"
                      )}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Cart */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative flex items-center gap-2 px-5 py-2 rounded-full btn-brand text-sm font-semibold hover:scale-105 transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">{t.nav.cart}</span>
              {items.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-accent-500 text-white text-[10px] font-black flex items-center justify-center shadow-md">
                  {items.length}
                </span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 rounded-lg text-brand-700 hover:bg-brand-100 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white/95 border-t border-brand-100 px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-sm font-medium text-brand-800 hover:text-brand-600 py-2"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 pt-2 border-t border-brand-100">
              {LANGS.map((l) => (
                <button
                  key={l}
                  onClick={() => {
                    const newLang = l.toLowerCase() as Parameters<typeof setLang>[0];
                    setLang(newLang);
                    setCurrency(LANG_CURRENCY[newLang]);
                  }}
                  className={cn("text-sm font-medium px-3 py-1 rounded-full transition-colors",
                    lang.toUpperCase() === l ? "bg-brand-100 text-brand-700" : "text-brand-600"
                  )}
                >{l}</button>
              ))}
            </div>
          </div>
        )}
      </header>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
