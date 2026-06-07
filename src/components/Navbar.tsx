"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Sun, Moon, ShoppingBag, Menu, X, Globe, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/lib/cartStore";
import { CartDrawer } from "@/components/CartDrawer";
import { useLanguage } from "@/lib/languageStore";
import { useCurrency, type Currency } from "@/lib/currencyStore";
import { type Lang, langMeta } from "@/lib/i18n";

const LANGS: Lang[] = ["en", "de", "ar"];
const CURRENCIES: Currency[] = ["USD", "CAD", "EUR"];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [currOpen, setCurrOpen] = useState(false);
  const { items } = useCart();
  const { lang, setLang, t } = useLanguage();
  const { currency, setCurrency } = useCurrency();
  const langRef = useRef<HTMLDivElement>(null);
  const currRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
      if (currRef.current && !currRef.current.contains(e.target as Node)) setCurrOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navLinks = [
    { label: t.nav.products, href: "#products" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.reviews, href: "#reviews" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "glass dark:glass-dark shadow-lg shadow-black/10 py-3"
            : "bg-transparent py-5"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center group">
            <Image
              src="/logo.jpeg"
              alt="StudioLumina"
              width={120}
              height={120}
              priority
              className="h-[52px] w-[52px] rounded-full object-cover group-hover:scale-105 transition-transform duration-200"
            />
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-2">

            {/* Language dropdown */}
            <div ref={langRef} className="relative hidden sm:block">
              <button
                onClick={() => { setLangOpen(!langOpen); setCurrOpen(false); }}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                aria-label="Select language"
              >
                <Globe className="w-3.5 h-3.5" />
                {langMeta[lang].label}
                <ChevronDown className={cn("w-3 h-3 transition-transform", langOpen && "rotate-180")} />
              </button>
              {langOpen && (
                <div className="absolute top-full mt-1.5 right-0 w-28 bg-white dark:bg-[#1e1a12] border border-gray-100 dark:border-white/10 rounded-xl shadow-xl overflow-hidden z-50">
                  {LANGS.map((l) => (
                    <button
                      key={l}
                      onClick={() => { setLang(l); setLangOpen(false); }}
                      className={cn(
                        "w-full text-left px-4 py-2.5 text-sm font-medium transition-colors",
                        lang === l
                          ? "bg-brand-500/10 text-brand-600 dark:text-brand-400"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5"
                      )}
                    >
                      {langMeta[l].label} — {l === "en" ? "English" : l === "de" ? "Deutsch" : "العربية"}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Currency dropdown */}
            <div ref={currRef} className="relative hidden sm:block">
              <button
                onClick={() => { setCurrOpen(!currOpen); setLangOpen(false); }}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                aria-label="Select currency"
              >
                {currency}
                <ChevronDown className={cn("w-3 h-3 transition-transform", currOpen && "rotate-180")} />
              </button>
              {currOpen && (
                <div className="absolute top-full mt-1.5 right-0 w-24 bg-white dark:bg-[#1e1a12] border border-gray-100 dark:border-white/10 rounded-xl shadow-xl overflow-hidden z-50">
                  {CURRENCIES.map((c) => (
                    <button
                      key={c}
                      onClick={() => { setCurrency(c); setCurrOpen(false); }}
                      className={cn(
                        "w-full text-left px-4 py-2.5 text-sm font-medium transition-colors",
                        currency === c
                          ? "bg-brand-500/10 text-brand-600 dark:text-brand-400"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5"
                      )}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            )}

            {/* Cart button */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-700 text-white text-sm font-semibold hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-brand-500/25"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">{t.nav.cart}</span>
              {items.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-accent-500 text-white text-[10px] font-black flex items-center justify-center shadow-md animate-bounce">
                  {items.length}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
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
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-brand-500 py-2"
              >
                {link.label}
              </a>
            ))}
            {/* Mobile language + currency */}
            <div className="flex gap-2 pt-2 border-t border-white/10">
              <div className="flex gap-1">
                {LANGS.map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={cn(
                      "px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors",
                      lang === l
                        ? "bg-brand-500 text-white"
                        : "text-gray-500 dark:text-gray-400 hover:text-brand-500"
                    )}
                  >
                    {langMeta[l].label}
                  </button>
                ))}
              </div>
              <div className="flex gap-1">
                {CURRENCIES.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCurrency(c)}
                    className={cn(
                      "px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors",
                      currency === c
                        ? "bg-brand-500 text-white"
                        : "text-gray-500 dark:text-gray-400 hover:text-brand-500"
                    )}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Cart Drawer */}
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
