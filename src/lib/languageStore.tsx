"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { translations, type Lang, langMeta } from "@/lib/i18n";

type LanguageCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (typeof translations)["en"];
  isRtl: boolean;
};

const LanguageContext = createContext<LanguageCtx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Persist + load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("lumina_lang") as Lang | null;
    if (saved && saved in translations) setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lumina_lang", l);
  };

  // Sync <html> dir and lang attributes for RTL support
  useEffect(() => {
    const { dir, htmlLang } = langMeta[lang];
    document.documentElement.dir = dir;
    document.documentElement.lang = htmlLang;
  }, [lang]);

  const t = translations[lang] as (typeof translations)["en"];
  const isRtl = langMeta[lang].dir === "rtl";

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
