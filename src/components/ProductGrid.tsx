"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { ShoppingCart, Star, TrendingUp, CheckCircle2 } from "lucide-react";
import { products, type Category } from "@/lib/products";
import { useCart } from "@/lib/cartStore";
import { ToastContainer, type ToastData } from "@/components/Toast";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/languageStore";
import { useCurrency } from "@/lib/currencyStore";

const ALL_CATEGORIES: Category[] = ["All", "Resume", "Canva Kit", "Planner"];

export function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [toasts, setToasts] = useState<ToastData[]>([]);
  const { t } = useLanguage();

  const categoryLabel = (cat: Category) => {
    if (cat === "All") return t.products.filterAll;
    if (cat === "Resume") return t.products.catResume;
    if (cat === "Canva Kit") return t.products.catCanva;
    return t.products.catPlanner;
  };

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addToast = (data: Omit<ToastData, "id">) => {
    setToasts((prev) => [...prev, { ...data, id: Date.now() }]);
  };

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      <section id="products" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        {/* Background */}
        <div className="absolute inset-0 bg-gray-50/80 dark:bg-[#15120a]/80" />

        <div className="relative max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-brand-500 dark:text-brand-400 mb-3">
              {t.products.sectionLabel}
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
              {t.products.heading}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              {t.products.description}
            </p>
          </div>

          {/* Category filter pills */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {ALL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200",
                  activeCategory === cat
                    ? "bg-gradient-to-r from-brand-600 to-brand-700 text-white shadow-lg shadow-brand-500/25 scale-105"
                    : "bg-white dark:bg-white/5 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/10 hover:border-brand-400/40 hover:text-brand-600 dark:hover:text-brand-400"
                )}
              >
                {categoryLabel(cat)}
              </button>
            ))}
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} onAddToast={addToast} />
            ))}
          </div>
        </div>
      </section>

      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </>
  );
}

function ProductCard({
  product,
  onAddToast,
}: {
  product: (typeof products)[number];
  onAddToast: (data: Omit<ToastData, "id">) => void;
}) {
  const { addItem, items } = useCart();
  const { t } = useLanguage();
  const { format } = useCurrency();
  const alreadyInCart = items.some((i) => i.id === product.id);
  const [justAdded, setJustAdded] = useState(false);

  const handleBuy = () => {
    if (alreadyInCart) return;
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      icon: product.icon,
      gradient: product.gradient,
    });
    onAddToast({ title: product.title, price: product.price, icon: product.icon });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  // Pull translated badge label
  const badgeLabel = product.badge
    ? product.badge === "Best Seller" ? t.products.badgeBestSeller
    : product.badge === "New" ? t.products.badgeNew
    : product.badge === "Popular" ? t.products.badgePopular
    : t.products.badgeSale
    : undefined;

  // Pull translated product data
  const pd = t.productData[product.id as keyof typeof t.productData];
  const title = pd?.title ?? product.title;
  const description = pd?.description ?? product.description;
  const features = pd?.features ?? product.features;

  return (
    <article className="group relative flex flex-col rounded-3xl overflow-hidden bg-white dark:bg-[#1a1610] border border-gray-100 dark:border-white/5 card-hover glow-hover shadow-sm">
      {/* Product visual */}
      {product.previewImage ? (
        <div className="relative aspect-[16/9] overflow-hidden bg-black">
          <Image
            src={product.previewImage}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            {badgeLabel && (
              <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-white text-gray-900 text-xs font-bold shadow-sm">
                {badgeLabel}
              </span>
            )}
            {discount && (
              <span className="px-3 py-1 rounded-full bg-red-500 text-white text-xs font-bold">
                -{discount}%
              </span>
            )}
          </div>

          <span className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs font-medium">
            {product.category === "Resume" ? t.products.catResume
              : product.category === "Canva Kit" ? t.products.catCanva
              : t.products.catPlanner}
          </span>
        </div>
      ) : (
        <div className={`relative bg-gradient-to-br ${product.gradient} aspect-[16/9] flex items-center justify-center overflow-hidden`}>
          {/* Decorative orbs */}
          <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-white/10" />
          <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-black/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-white/5 blur-2xl pointer-events-none" />

          {/* Emoji + placeholder label */}
          <div className="relative flex flex-col items-center gap-3">
            <span className="text-7xl drop-shadow-xl select-none">{product.icon}</span>
            <span className="text-[10px] font-semibold tracking-widest uppercase text-white/60 bg-black/25 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
              Preview coming soon
            </span>
          </div>

          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            {badgeLabel && (
              <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-white text-gray-900 text-xs font-bold shadow-sm">
                {badgeLabel}
              </span>
            )}
            {discount && (
              <span className="px-3 py-1 rounded-full bg-red-500 text-white text-xs font-bold">
                -{discount}%
              </span>
            )}
          </div>

          <span className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white text-xs font-medium">
            {product.category === "Resume" ? t.products.catResume
              : product.category === "Canva Kit" ? t.products.catCanva
              : t.products.catPlanner}
          </span>
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-3">
          <TrendingUp className="w-3.5 h-3.5 text-brand-500" />
          <span>{product.sales.toLocaleString()} {t.products.sold}</span>
          <span className="mx-1">·</span>
          <div className="flex items-center gap-0.5">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="text-amber-500 font-medium">4.9</span>
          </div>
        </div>

        <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-5 leading-relaxed flex-1">
          {description}
        </p>

        {/* Features */}
        <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5 mb-6">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        {/* Price + CTA */}
        <div className="flex items-center justify-between gap-4 pt-4 border-t border-gray-100 dark:border-white/5">
          <div>
            <span className="text-2xl font-black text-gray-900 dark:text-white">
              {format(product.price)}
            </span>
            {product.originalPrice && (
              <span className="ml-2 text-sm text-gray-400 line-through">
                {format(product.originalPrice)}
              </span>
            )}
          </div>

          <button
              onClick={handleBuy}
              disabled={alreadyInCart}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-300",
                alreadyInCart
                  ? "bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/30 cursor-default"
                  : justAdded
                  ? "bg-green-500 text-white scale-95"
                  : "bg-gradient-to-r from-brand-600 to-brand-700 text-white hover:opacity-90 hover:scale-105 shadow-lg shadow-brand-500/25"
              )}
            >
              {alreadyInCart ? (
                <><CheckCircle2 className="w-4 h-4" /> {t.products.inCart}</>
              ) : justAdded ? (
                <><CheckCircle2 className="w-4 h-4" /> {t.products.added}</>
              ) : (
                <><ShoppingCart className="w-4 h-4" /> {t.products.addToCart}</>
              )}
            </button>
        </div>
      </div>
    </article>
  );
}
