"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/lib/cartStore";
import { useLanguage } from "@/lib/languageStore";
import { useCurrency, type Currency } from "@/lib/currencyStore";
import { CartDrawer } from "@/components/CartDrawer";

const LANGS = ["EN", "FR", "AR"] as const;
const CURRENCIES: Currency[] = ["USD", "CAD", "EUR"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [currOpen, setCurrOpen] = useState(false);
  const { items } = useCart();
  const { lang, setLang, t } = useLanguage();
  const { currency, setCurrency } = useCurrency();

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
          scrolled ? "glass dark:glass-dark shadow-lg shadow-black/10 py-3" : "bg-transparent py-5"
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
            <span className="font-display font-bold text-xl tracking-tight text-white">
              Studio<span className="text-gradient">Lumina</span>
            </span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-brand-400 transition-colors"
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
                onClick={() => { setLangOpen(!langOpen); setCurrOpen(false); }}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                🌐 {lang.toUpperCase()}
                <ChevronDown className={cn("w-3 h-3 transition-transform", langOpen && "rotate-180")} />
              </button>
              {langOpen && (
                <div className="absolute top-full mt-1.5 right-0 w-24 bg-overlay border border-white/10 rounded-xl shadow-xl overflow-hidden z-50">
                  {LANGS.map((l) => (
                    <button
                      key={l}
                      onClick={() => { setLang(l.toLowerCase() as Parameters<typeof setLang>[0]); setLangOpen(false); }}
                      className={cn(
                        "w-full px-4 py-2.5 text-sm text-left transition-colors",
                        lang.toUpperCase() === l
                          ? "bg-brand-500/20 text-brand-400 font-semibold"
                          : "text-gray-300 hover:bg-white/5"
                      )}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Currency */}
            <div className="relative hidden sm:block">
              <button
                onClick={() => { setCurrOpen(!currOpen); setLangOpen(false); }}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                {currency}
                <ChevronDown className={cn("w-3 h-3 transition-transform", currOpen && "rotate-180")} />
              </button>
              {currOpen && (
                <div className="absolute top-full mt-1.5 right-0 w-24 bg-overlay border border-white/10 rounded-xl shadow-xl overflow-hidden z-50">
                  {CURRENCIES.map((c) => (
                    <button
                      key={c}
                      onClick={() => { setCurrency(c); setCurrOpen(false); }}
                      className={cn(
                        "w-full px-4 py-2.5 text-sm text-left transition-colors",
                        currency === c
                          ? "bg-brand-500/20 text-brand-400 font-semibold"
                          : "text-gray-300 hover:bg-white/5"
                      )}
                    >
                      {c}
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
              className="md:hidden p-2 rounded-lg text-gray-300 hover:bg-white/10 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden glass dark:glass-dark border-t border-white/10 px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-sm font-medium text-gray-300 hover:text-brand-400 py-2"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 pt-2 border-t border-white/10">
              {LANGS.map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l.toLowerCase() as Parameters<typeof setLang>[0])}
                  className={cn("text-sm font-medium px-3 py-1 rounded-full transition-colors",
                    lang.toUpperCase() === l ? "bg-brand-500/20 text-brand-400" : "text-gray-400"
                  )}
                >{l}</button>
              ))}
              <div className="w-px bg-white/10" />
              {CURRENCIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  className={cn("text-sm font-medium px-3 py-1 rounded-full transition-colors",
                    currency === c ? "bg-brand-500/20 text-brand-400" : "text-gray-400"
                  )}
                >{c}</button>
              ))}
            </div>
          </div>
        )}
      </header>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
