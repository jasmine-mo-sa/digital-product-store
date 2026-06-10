"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, X } from "lucide-react";

export type ToastData = {
  id: number;
  title: string;
  price: number;
  icon: string;
};

type Props = {
  toasts: ToastData[];
  onRemove: (id: number) => void;
};

export function ToastContainer({ toasts, onRemove }: Props) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] flex flex-col gap-3 items-center pointer-events-none">
      {toasts.map((t) => (
        <ToastItem key={t.id} toast={t} onRemove={onRemove} />
      ))}
    </div>
  );
}

function ToastItem({ toast, onRemove }: { toast: ToastData; onRemove: (id: number) => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Slide in
    const show = setTimeout(() => setVisible(true), 10);
    // Slide out then remove
    const hide = setTimeout(() => setVisible(false), 2800);
    const remove = setTimeout(() => onRemove(toast.id), 3200);
    return () => { clearTimeout(show); clearTimeout(hide); clearTimeout(remove); };
  }, [toast.id, onRemove]);

  return (
    <div
      className={`pointer-events-auto flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-white dark:bg-overlay border border-gray-100 dark:border-white/10 shadow-2xl shadow-black/20 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
      }`}
    >
      <div className="w-9 h-9 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
        <CheckCircle2 className="w-5 h-5 text-green-500" />
      </div>
      <div>
        <p className="font-semibold text-sm text-gray-900 dark:text-white">Added to cart!</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {toast.icon} {toast.title} · <span className="text-brand-500 font-medium">${toast.price}</span>
        </p>
      </div>
      <button
        onClick={() => onRemove(toast.id)}
        className="ml-2 p-1 rounded-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
