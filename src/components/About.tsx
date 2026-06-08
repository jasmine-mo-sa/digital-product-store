"use client";

import Image from "next/image";
import { Sparkles, Heart, Palette, Zap } from "lucide-react";
import { useLanguage } from "@/lib/languageStore";

export function About() {
  const { t } = useLanguage();

  const values = [
    {
      icon: <Palette className="w-5 h-5" />,
      title: t.about.value1Title,
      description: t.about.value1Desc,
      gradient: "from-brand-500 to-brand-700",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: t.about.value2Title,
      description: t.about.value2Desc,
      gradient: "from-amber-500 to-orange-500",
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: t.about.value3Title,
      description: t.about.value3Desc,
      gradient: "from-pink-500 to-rose-600",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#f5ede0]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — visual */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Avatar card */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80">
                {/* Decorative rings */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-brand-400/30 animate-spin" style={{ animationDuration: "20s" }} />
                <div className="absolute inset-4 rounded-full border border-brand-500/20" />

                {/* Avatar */}
                <div className="absolute inset-8 rounded-full overflow-hidden shadow-2xl shadow-brand-500/30">
                  <Image src="/jasmine.jpg" alt="Jasmine Mo" fill sizes="256px" className="object-cover object-top" />
                </div>

                {/* Floating badge — top right */}
                <div className="absolute -top-2 -right-4 bg-white border border-brand-100 rounded-2xl px-4 py-2.5 shadow-xl">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-brand-500" />
                    <span className="text-sm font-semibold text-brand-900">{t.about.badge1}</span>
                  </div>
                </div>

                {/* Floating badge — bottom left */}
                <div className="absolute -bottom-2 -left-4 bg-white border border-brand-100 rounded-2xl px-4 py-2.5 shadow-xl">
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
                    <span className="text-sm font-semibold text-brand-900">{t.about.badge2}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div>
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-brand-600 mb-3">
              {t.about.sectionLabel}
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-brand-900 mb-6 leading-tight">
              {t.about.heading1}{" "}
              <span className="text-gradient">{t.about.heading2}</span> {t.about.heading3}
            </h2>
            <p className="text-brand-800/75 text-lg leading-relaxed mb-5">
              {t.about.bio1}
            </p>
            <p className="text-brand-700/65 leading-relaxed mb-10">
              {t.about.bio2}
            </p>

            {/* Value props */}
            <div className="space-y-4">
              {values.map((v) => (
                <div key={v.title} className="flex items-start gap-4">
                  <div className={`shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${v.gradient} flex items-center justify-center text-white shadow-lg`}>
                    {v.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-900 mb-0.5">{v.title}</h4>
                    <p className="text-sm text-brand-700/65">{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
