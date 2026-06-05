import { Sparkles, Twitter, Instagram, Mail } from "lucide-react";

export function Footer() {
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
              Premium digital templates by Jasmine Mo — crafted for designers, freelancers, and
              ambitious professionals who want to make an impression.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-brand-500/10 hover:text-brand-500 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
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
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm">Products</h4>
            <ul className="space-y-2.5">
              {["Resume Templates", "Canva Kits", "Digital Planners", "Bundles"].map((item) => (
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
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm">Support</h4>
            <ul className="space-y-2.5">
              {[
                { label: "FAQ", href: "#" },
                { label: "Refund Policy", href: "#" },
                { label: "Contact Jasmine", href: "#contact" },
                { label: "License Info", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-500 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} StudioLumina by Jasmine Mo. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500">
            Crafted with care — built to inspire.
          </p>
        </div>
      </div>
    </footer>
  );
}
