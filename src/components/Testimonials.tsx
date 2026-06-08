"use client";

import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/lib/languageStore";

const REVIEWER_META = [
  { name: "Priya Sharma", role: "UX Designer · Freelance", avatar: "PS", gradient: "from-brand-500 to-brand-700", rating: 5 },
  { name: "Marcus Cole", role: "Software Engineer", avatar: "MC", gradient: "from-sky-500 to-blue-600", rating: 5 },
  { name: "Aisha Nomvete", role: "Content Creator", avatar: "AN", gradient: "from-pink-500 to-rose-600", rating: 5 },
];

export function Testimonials() {
  const { t } = useLanguage();

  const testimonials = REVIEWER_META.map((meta, i) => ({
    ...meta,
    text: t.testimonials.texts[i],
  }));

  return (
    <section id="reviews" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#fdf7ee]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-brand-600 mb-3">
            {t.testimonials.sectionLabel}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-brand-900 mb-4">
            {t.testimonials.heading}
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-2 font-bold text-brand-800">4.9</span>
            <span className="text-brand-600/60 ml-1">/ 5 · {t.testimonials.reviewCount}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="relative p-7 rounded-3xl bg-white border border-brand-100 shadow-sm hover:shadow-xl hover:shadow-brand-200/50 transition-shadow"
            >
              <Quote className="w-8 h-8 text-brand-400/30 mb-4" />
              <p className="text-brand-800/75 leading-relaxed mb-6 text-sm">
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-11 h-11 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white font-bold text-sm shrink-0`}
                >
                  {item.avatar}
                </div>
                <div>
                  <p className="font-semibold text-brand-900 text-sm">{item.name}</p>
                  <p className="text-xs text-brand-600/60">{item.role}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
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
