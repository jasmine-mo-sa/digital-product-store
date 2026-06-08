"use client";

import Image from "next/image";
import { ArrowRight, Star, Download, Users } from "lucide-react";
import { useLanguage } from "@/lib/languageStore";
import { useCurrency } from "@/lib/currencyStore";

export function Hero() {
  const { t } = useLanguage();
  const { format } = useCurrency();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Warm cream gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fdf7ee] via-[#f5e9d4] to-[#ecdbbf]" />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-400/20 rounded-full blur-3xl animate-float pointer-events-none" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-600/15 rounded-full blur-3xl animate-float pointer-events-none"
        style={{ animationDelay: "2s" }}
      />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(160,120,64,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(160,120,64,0.6) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col lg:flex-row items-center gap-16">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Photo */}
          <div className="flex justify-center lg:justify-start mb-8 animate-fade-in">
            <Image
              src="/logo.jpeg"
              alt="StudioLumina"
              width={100}
              height={100}
              priority
              className="h-[100px] w-[100px] rounded-full object-cover shadow-xl shadow-brand-700/20 ring-2 ring-brand-400/50"
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100 border border-brand-300/50 text-brand-700 text-sm font-semibold mb-8 animate-fade-in">
            <Star className="w-4 h-4 fill-brand-500 text-brand-500" />
            {t.hero.badge}
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6 text-brand-900 animate-slide-up">
            {t.hero.title1}
            <br />
            <span className="text-gradient">{t.hero.title2}</span>
            <br />
            {t.hero.title3}
          </h1>

          <p className="text-lg sm:text-xl text-brand-800/70 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <a
              href="#products"
              className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full btn-brand font-semibold text-lg hover:scale-105 transition-all shadow-xl glow"
            >
              {t.hero.cta1}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#reviews"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-brand-300 bg-white/70 text-brand-700 font-semibold text-lg hover:bg-white transition-all"
            >
              {t.hero.cta2}
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 justify-center lg:justify-start mt-14 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {[
              { icon: <Users className="w-5 h-5" />, value: t.hero.stat1Value, label: t.hero.stat1Label },
              { icon: <Download className="w-5 h-5" />, value: t.hero.stat2Value, label: t.hero.stat2Label },
              { icon: <Star className="w-5 h-5 fill-amber-500 text-amber-500" />, value: t.hero.stat3Value, label: t.hero.stat3Label },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-brand-100 text-brand-600">
                  {stat.icon}
                </div>
                <div>
                  <div className="font-bold text-xl text-brand-900">{stat.value}</div>
                  <div className="text-sm text-brand-700/70">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating product cards preview */}
        <div className="flex-1 flex justify-center lg:justify-end relative h-[500px] w-full max-w-md">
          <FloatingCard
            className="top-0 left-4 sm:left-8 w-52"
            delay="0s"
            gradient="from-brand-600 to-brand-800"
            title={t.productData[1].title}
            price={format(19)}
            badge={t.products.badgeBestSeller}
            icon="📄"
          />
          <FloatingCard
            className="top-24 right-0 w-52"
            delay="1.5s"
            gradient="from-pink-500 to-rose-600"
            title={t.productData[2].title}
            price={format(27)}
            badge={t.products.badgeNew}
            icon="✨"
          />
          <FloatingCard
            className="bottom-0 left-8 sm:left-20 w-52"
            delay="3s"
            gradient="from-sky-500 to-blue-600"
            title={t.productData[3].title}
            price={format(14)}
            icon="📅"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-600/60 animate-bounce">
        <span className="text-xs tracking-widest uppercase">{t.hero.scroll}</span>
        <div className="w-px h-8 bg-gradient-to-b from-brand-500/60 to-transparent" />
      </div>
    </section>
  );
}

type FloatingCardProps = {
  className: string;
  delay: string;
  gradient: string;
  title: string;
  price: string;
  badge?: string;
  icon: string;
};

function FloatingCard({ className, delay, gradient, title, price, badge, icon }: FloatingCardProps) {
  return (
    <div
      className={`absolute ${className} rounded-2xl overflow-hidden shadow-2xl shadow-brand-900/15 animate-float`}
      style={{ animationDelay: delay }}
    >
      <div className={`bg-gradient-to-br ${gradient} p-6 aspect-[3/2] flex items-center justify-center text-4xl`}>
        {icon}
      </div>
      <div className="bg-white p-4 border-t border-brand-100">
        <div className="flex items-center justify-between mb-1">
          <p className="font-semibold text-sm text-gray-900 truncate">{title}</p>
          {badge && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-brand-100 text-brand-700 font-semibold ml-1 shrink-0">
              {badge}
            </span>
          )}
        </div>
        <p className="text-brand-600 font-bold text-lg">{price}</p>
      </div>
    </div>
  );
}
