"use client";

import { X, ShoppingBag, Trash2, CreditCard, PackageOpen } from "lucide-react";
import { useCart } from "@/lib/cartStore";
import { useLanguage } from "@/lib/languageStore";
import { useCurrency } from "@/lib/currencyStore";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function CartDrawer({ open, onClose }: Props) {
  const { items, removeItem, clearCart, total } = useCart();
  const { t } = useLanguage();
  const { format } = useCurrency();

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white dark:bg-[#0f0820] shadow-2xl z-50 flex flex-col transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-white/10">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-brand-500" />
            <h2 className="font-bold text-lg text-gray-900 dark:text-white">
              {t.cart.heading}
            </h2>
            {items.length > 0 && (
              <span className="ml-1 px-2 py-0.5 rounded-full bg-brand-500 text-white text-xs font-bold">
                {items.length}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-500 dark:text-gray-400 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <div className="w-20 h-20 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center">
                <PackageOpen className="w-9 h-9 text-gray-300 dark:text-gray-600" />
              </div>
              <p className="font-semibold text-gray-700 dark:text-gray-300">{t.cart.empty}</p>
              <p className="text-sm text-gray-400">{t.cart.emptyHint}</p>
              <button
                onClick={onClose}
                className="mt-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-brand-600 to-purple-600 text-white text-sm font-semibold hover:opacity-90 transition"
              >
                {t.cart.browse}
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-2xl shrink-0`}>
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-gray-900 dark:text-white truncate">
                    {item.title}
                  </p>
                  <p className="text-brand-600 dark:text-brand-400 font-bold mt-0.5">
                    {format(item.price)}
                  </p>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-gray-100 dark:border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-300 font-medium">{t.cart.total}</span>
              <span className="text-2xl font-black text-gray-900 dark:text-white">{format(total)}</span>
            </div>
            <button className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-brand-600 to-purple-600 text-white font-semibold hover:opacity-90 hover:scale-[1.02] transition-all shadow-lg shadow-brand-500/25">
              <CreditCard className="w-5 h-5" />
              {t.cart.checkout} — {format(total)}
            </button>
            <button
              onClick={clearCart}
              className="w-full text-sm text-gray-400 hover:text-red-500 transition-colors py-1"
            >
              {t.cart.clear}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
