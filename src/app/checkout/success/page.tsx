import { Sparkles, CheckCircle2, ArrowLeft, Download } from "lucide-react";
import Link from "next/link";

export default function CheckoutSuccess() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/20 dark:from-[#0b0516] dark:via-[#130a2a] dark:to-[#0d1220] px-4">

      {/* Decorative orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-lg w-full">
        <div className="bg-white dark:bg-[#13092b] rounded-3xl border border-gray-100 dark:border-white/5 shadow-2xl p-10 text-center">

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-green-500" />
              </div>
              <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-white" />
              </div>
            </div>
          </div>

          <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-3">
            Payment Successful!
          </h1>
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-2">
            Thank you for your purchase! 🎉
          </p>
          <p className="text-sm text-gray-400 dark:text-gray-500 leading-relaxed mb-8">
            You'll receive a confirmation email shortly. Your digital products are
            ready — check your inbox for the download link.
          </p>

          {/* Download hint */}
          <div className="flex items-start gap-3 p-4 rounded-2xl bg-brand-500/5 border border-brand-500/15 mb-8 text-left">
            <Download className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <span className="font-semibold text-gray-900 dark:text-white">Where are my files?</span>
              {" "}Check the email address you used at checkout — your download
              link will be there within a few minutes.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-purple-600 text-white font-semibold text-sm hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-brand-500/25"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Store
            </Link>
          </div>

          {/* Brand */}
          <p className="mt-8 text-xs text-gray-400 dark:text-gray-500">
            Studio<span className="text-gradient font-semibold">Lumina</span> · Questions? Email{" "}
            <a href="mailto:lumina.jasmine98@gmail.com" className="underline hover:text-brand-500 transition-colors">
              lumina.jasmine98@gmail.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
