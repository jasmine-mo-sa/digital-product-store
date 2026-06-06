"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Mail, MessageCircle, Send, CheckCircle2, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/languageStore";

export function Contact() {
  const [state, handleSubmit] = useForm("xjgdyvvn");
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-50/80 dark:bg-[#0d0920]/80" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-brand-500 dark:text-brand-400 mb-3">
            {t.contact.sectionLabel}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
            {t.contact.heading}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto">
            {t.contact.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Contact info — left */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Email card */}
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-[#13092b] border border-gray-100 dark:border-white/5 shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-brand-500/25">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white mb-1">{t.contact.emailTitle}</p>
                <a
                  href="mailto:lumina.jasmine98@gmail.com"
                  className="text-brand-600 dark:text-brand-400 hover:underline text-sm font-medium"
                >
                  lumina.jasmine98@gmail.com
                </a>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{t.contact.emailNote}</p>
              </div>
            </div>

            {/* DMs card */}
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-[#13092b] border border-gray-100 dark:border-white/5 shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-pink-500/25">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white mb-1">{t.contact.socialTitle}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t.contact.socialDesc}</p>
                <div className="flex gap-3 mt-3">
                  <a href="https://www.instagram.com/lumina.studio.ca/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:opacity-90 transition">
                    <Instagram className="w-3.5 h-3.5" /> Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Custom orders note */}
            <div className="p-5 rounded-2xl bg-brand-500/5 border border-brand-500/15">
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                💜 {t.contact.customNote}
              </p>
            </div>
          </div>

          {/* Form — right */}
          <div className="lg:col-span-3">
            <div className="p-8 rounded-3xl bg-white dark:bg-[#13092b] border border-gray-100 dark:border-white/5 shadow-sm">
              {state.succeeded ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t.contact.successHeading}</h3>
                  <p className="text-gray-500 dark:text-gray-400 max-w-xs">
                    {t.contact.successBody}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        {t.contact.labelName}
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        placeholder={t.contact.placeholderName}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition text-sm"
                      />
                      <ValidationError field="name" errors={state.errors} className="mt-1.5 text-xs text-red-500" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        {t.contact.labelEmail}
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        placeholder={t.contact.placeholderEmail}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition text-sm"
                      />
                      <ValidationError field="email" errors={state.errors} className="mt-1.5 text-xs text-red-500" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      {t.contact.labelMessage}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder={t.contact.placeholderMessage}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition text-sm resize-none"
                    />
                    <ValidationError field="message" errors={state.errors} className="mt-1.5 text-xs text-red-500" />
                  </div>

                  <ValidationError errors={state.errors} className="text-sm text-red-500 dark:text-red-400 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-xl px-4 py-3" />

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className={cn(
                      "w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all",
                      state.submitting
                        ? "bg-brand-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-brand-600 to-purple-600 hover:opacity-90 hover:scale-[1.02] shadow-lg shadow-brand-500/25"
                    )}
                  >
                    {state.submitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        {t.contact.sending}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        {t.contact.send}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
