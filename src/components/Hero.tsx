"use client";

import { ArrowRight, Star, Download, Users } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/20 dark:from-[#0b0516] dark:via-[#130a2a] dark:to-[#0d1220]" />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl animate-float pointer-events-none" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl animate-float pointer-events-none"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl animate-float pointer-events-none"
        style={{ animationDelay: "4s" }}
      />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col lg:flex-row items-center gap-16">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-600 dark:text-brand-400 text-sm font-medium mb-8 animate-fade-in">
            <Star className="w-4 h-4 fill-brand-500 text-brand-500" />
            Trusted by 5,000+ Creatives Worldwide
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6 animate-slide-up">
            Design Templates
            <br />
            <span className="text-gradient">That Elevate</span>
            <br />
            Your Brand
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Premium Canva kits, resume templates, and digital planners — crafted pixel-perfect
            for designers, freelancers, and go-getters.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <a
              href="#products"
              className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-brand-600 to-purple-600 text-white font-semibold text-lg hover:opacity-90 hover:scale-105 transition-all shadow-xl shadow-brand-500/30 glow"
            >
              Browse Templates
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#reviews"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-gray-700 dark:text-gray-200 font-semibold text-lg hover:bg-gray-50 dark:hover:bg-white/10 transition-all"
            >
              See Reviews
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 justify-center lg:justify-start mt-14 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {[
              { icon: <Users className="w-5 h-5" />, value: "5,200+", label: "Happy Customers" },
              { icon: <Download className="w-5 h-5" />, value: "18,000+", label: "Downloads" },
              { icon: <Star className="w-5 h-5 fill-amber-400 text-amber-400" />, value: "4.9/5", label: "Average Rating" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-brand-500/10 text-brand-500 dark:text-brand-400">
                  {stat.icon}
                </div>
                <div>
                  <div className="font-bold text-xl text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
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
            gradient="from-violet-600 to-purple-800"
            title="Executive Resume"
            price="$19"
            badge="Best Seller"
            icon="📄"
          />
          <FloatingCard
            className="top-24 right-0 w-52"
            delay="1.5s"
            gradient="from-pink-600 to-rose-700"
            title="Lumina Brand Kit"
            price="$27"
            badge="New"
            icon="✨"
          />
          <FloatingCard
            className="bottom-0 left-8 sm:left-20 w-52"
            delay="3s"
            gradient="from-sky-500 to-blue-700"
            title="Daily Planner"
            price="$14"
            icon="📅"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-400 to-transparent" />
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
      className={`absolute ${className} rounded-2xl overflow-hidden shadow-2xl animate-float`}
      style={{ animationDelay: delay }}
    >
      <div className={`bg-gradient-to-br ${gradient} p-6 aspect-[3/2] flex items-center justify-center text-4xl`}>
        {icon}
      </div>
      <div className="bg-white dark:bg-gray-900 p-4">
        <div className="flex items-center justify-between mb-1">
          <p className="font-semibold text-sm text-gray-900 dark:text-white truncate">{title}</p>
          {badge && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 font-medium ml-1 shrink-0">
              {badge}
            </span>
          )}
        </div>
        <p className="text-brand-600 dark:text-brand-400 font-bold text-lg">{price}</p>
      </div>
    </div>
  );
}
