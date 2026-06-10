"use client";

import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/lib/languageStore";

const testimonialMeta = [
  { name: "Priya Sharma", role: "UX Designer · Freelance", avatar: "PS", rating: 5, gradient: "from-brand-500 to-brand-700" },
  { name: "Marcus Cole", role: "Software Engineer", avatar: "MC", rating: 5, gradient: "from-sky-500 to-blue-600" },
  { name: "Aisha Nomvete", role: "Content Creator", avatar: "AN", rating: 5, gradient: "from-pink-500 to-rose-600" },
];

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="reviews" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-brand-500 dark:text-brand-400 mb-3">
            {t.testimonials.sectionLabel}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
            {t.testimonials.heading}
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-2 font-bold text-gray-700 dark:text-gray-200">4.9</span>
            <span className="text-gray-400 dark:text-gray-500 ml-1">/ 5 · {t.testimonials.reviewCount}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialMeta.map((meta, i) => (
            <div
              key={meta.name}
              className="relative p-7 rounded-3xl bg-white dark:bg-card border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl transition-shadow"
            >
              <Quote className="w-8 h-8 text-brand-500/20 dark:text-brand-500/30 mb-4" />
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-sm">
                &ldquo;{t.testimonials.texts[i]}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${meta.gradient} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                  {meta.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">{meta.name}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">{meta.role}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(meta.rating)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
