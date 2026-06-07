"use client";
import { useEffect } from "react";

export function CartClearer() {
  useEffect(() => {
    localStorage.removeItem("lumina_cart");
  }, []);
  return null;
}
