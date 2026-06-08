"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Currency = "CAD" | "EUR" | "SAR";

type CurrencyCtx = {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  format: (usd: number) => string;
};

// Hardcoded rates relative to USD (update periodically)
const RATES: Record<Currency, number> = {
  CAD: 1.36,
  EUR: 0.92,
  SAR: 3.75,
};

const SYMBOLS: Record<Currency, string> = {
  CAD: "CA$",
  EUR: "€",
  SAR: "﷼",
};

const CurrencyContext = createContext<CurrencyCtx | null>(null);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>("CAD");

  useEffect(() => {
    const saved = localStorage.getItem("lumina_currency") as Currency | null;
    if (saved && saved in RATES) setCurrencyState(saved);
  }, []);

  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
    localStorage.setItem("lumina_currency", c);
  };

  const format = (usd: number) => {
    const converted = Math.round(usd * RATES[currency]);
    return `${SYMBOLS[currency]}${converted}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, format }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used inside CurrencyProvider");
  return ctx;
}
