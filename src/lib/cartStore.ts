"use client";

import { useState, useEffect, useCallback } from "react";

export type CartItem = {
  id: number;
  title: string;
  price: number;
  icon: string;
  gradient: string;
};

const STORAGE_KEY = "lumina_cart";

function readCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function writeCart(items: CartItem[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  window.dispatchEvent(new Event("lumina_cart_change"));
}

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);

  const refresh = useCallback(() => setItems(readCart()), []);

  useEffect(() => {
    refresh();
    window.addEventListener("lumina_cart_change", refresh);
    return () => window.removeEventListener("lumina_cart_change", refresh);
  }, [refresh]);

  const addItem = (item: CartItem) => {
    const current = readCart();
    if (!current.find((c) => c.id === item.id)) {
      writeCart([...current, item]);
    }
  };

  const removeItem = (id: number) => {
    writeCart(readCart().filter((c) => c.id !== id));
  };

  const clearCart = () => writeCart([]);

  const total = items.reduce((sum, i) => sum + i.price, 0);

  return { items, addItem, removeItem, clearCart, total };
}
