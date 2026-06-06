"use client";

import { Sparkles, Twitter, Instagram, Mail } from "lucide-react";
import { useLanguage } from "@/lib/languageStore";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-gray-100 dark:border-white/5 bg-white dark:bg-[#0b0516]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-xl">
                Studio<span className="text-gradient">Lumina</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-brand-500/10 hover:text-brand-500 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/lumina.studio.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-brand-500/10 hover:text-brand-500 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:lumina.jasmine98@gmail.com"
                className="w-9 h-9 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-brand-500/10 hover:text-brand-500 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm">{t.footer.colProducts}</h4>
            <ul className="space-y-2.5">
              {t.footer.productLinks.map((item) => (
                <li key={item}>
                  <a href="#products" className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm">{t.footer.colSupport}</h4>
            <ul className="space-y-2.5">
              {t.footer.supportLinks.map((item, i) => (
                <li key={item}>
                  <a
                    href={i === 2 ? "#contact" : "#"}
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500">
            {t.footer.tagline2}
          </p>
        </div>
      </div>
    </footer>
  );
}
