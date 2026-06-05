import { Sparkles, Heart, Palette, Zap } from "lucide-react";

const values = [
  {
    icon: <Palette className="w-5 h-5" />,
    title: "Design-First",
    description: "Every template starts with aesthetics — because first impressions are everything.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Ready to Use",
    description: "Download, customize, and go. No design degree required — just your vision.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Made with Care",
    description: "Each product is crafted with obsessive attention to detail and tested by real creatives.",
    gradient: "from-pink-500 to-rose-600",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white dark:bg-[#0b0516]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

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
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-brand-500 via-purple-600 to-pink-600 flex items-center justify-center shadow-2xl shadow-brand-500/30">
                  <span className="text-7xl select-none">👩‍🎨</span>
                </div>

                {/* Floating badge — top right */}
                <div className="absolute -top-2 -right-4 bg-white dark:bg-[#1a0a2e] border border-gray-100 dark:border-white/10 rounded-2xl px-4 py-2.5 shadow-xl">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-brand-500" />
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">5,200+ Customers</span>
                  </div>
                </div>

                {/* Floating badge — bottom left */}
                <div className="absolute -bottom-2 -left-4 bg-white dark:bg-[#1a0a2e] border border-gray-100 dark:border-white/10 rounded-2xl px-4 py-2.5 shadow-xl">
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">4.9 ★ Rated</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div>
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-brand-500 dark:text-brand-400 mb-3">
              About the Designer
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="text-gradient">Jasmine Mo</span> 👋
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-5">
              I'm a graphic designer with a passion for creating beautiful, functional digital
              products that help people show up confidently — whether they're landing their dream
              job, building a brand, or just getting more organized.
            </p>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-10">
              Every template in this store is something I would use myself. I obsess over
              typography, whitespace, and color so you don't have to. My goal is simple: hand you
              a polished, professional design in minutes — not hours.
            </p>

            {/* Value props */}
            <div className="space-y-4">
              {values.map((v) => (
                <div key={v.title} className="flex items-start gap-4">
                  <div className={`shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${v.gradient} flex items-center justify-center text-white shadow-lg`}>
                    {v.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-0.5">{v.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{v.description}</p>
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
