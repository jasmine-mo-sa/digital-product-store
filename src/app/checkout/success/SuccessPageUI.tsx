"use client";

import { Sparkles, CheckCircle2, ArrowLeft, Eye, Mail, Lock } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/languageStore";

export type SuccessItem = {
  productName: string | null;
  viewUrl: string | null;
};

type Props = {
  paymentVerified: boolean;
  items: SuccessItem[];
  hasAnyDownload: boolean;
};

export function SuccessPageUI({ paymentVerified, items, hasAnyDownload }: Props) {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-100/20 dark:from-surface dark:via-[#1c1710] dark:to-deep px-4 py-12">

      {/* Decorative orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-lg w-full">
        <div className="bg-white dark:bg-card rounded-3xl border border-gray-100 dark:border-white/5 shadow-2xl p-10 text-center">

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-green-500" />
              </div>
              <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-white" />
              </div>
            </div>
          </div>

          <h1 className="font-display text-3xl font-black text-gray-900 dark:text-white mb-3">
            {t.success.heading}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
            {t.success.thankYou}
          </p>

          {/* Product list with view links */}
          {paymentVerified && items.length > 0 && (
            <div className="mb-8 space-y-3 text-left">
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-500 dark:text-brand-400 mb-4 text-center">
                {t.success.yourProducts}
              </p>

              {items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-brand-500/5 border border-brand-500/15"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shrink-0">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-gray-900 dark:text-white truncate">
                      {item.productName ?? t.success.yourProductFallback}
                    </p>
                    {item.viewUrl ? (
                      <a
                        href={item.viewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline mt-0.5"
                      >
                        <Eye className="w-3 h-3" />
                        {t.success.viewProduct}
                      </a>
                    ) : (
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                        {t.success.downloadEmail}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Fallback when payment can't be verified */}
          {!paymentVerified && (
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-amber-500/5 border border-amber-500/15 mb-8 text-left">
              <Lock className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <span className="font-semibold text-gray-900 dark:text-white">
                  {t.success.confirmingPayment}
                </span>{" "}
                {t.success.confirmingBody}
              </p>
            </div>
          )}

          {/* Email reminder (shown when some products have no link yet) */}
          {paymentVerified && !hasAnyDownload && (
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-brand-500/5 border border-brand-500/15 mb-8 text-left">
              <Mail className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <span className="font-semibold text-gray-900 dark:text-white">
                  {t.success.checkInbox}
                </span>{" "}
                {t.success.inboxBody}
              </p>
            </div>
          )}

          {/* Back to store */}
          <div className="flex justify-center">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl btn-brand font-semibold text-sm hover:scale-105 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              {t.success.backToStore}
            </Link>
          </div>

          {/* Brand */}
          <p className="mt-8 text-xs text-gray-400 dark:text-gray-500">
            Studio<span className="text-gradient font-semibold">Lumina</span> · {t.success.questions}{" "}
            <a
              href="mailto:lumina.jasmine98@gmail.com"
              className="underline hover:text-brand-500 transition-colors"
            >
              lumina.jasmine98@gmail.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
