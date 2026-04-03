"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/products";
import { useTranslation } from "@/hooks/useTranslation";
import { cn } from "@/lib/utils";

// ─── CartDrawer ───────────────────────────────────────────────────────────────

export function CartDrawer() {
  const { t } = useTranslation("shop");
  const {
    items,
    removeItem,
    updateQuantity,
    total,
    isOpen,
    closeCart,
  } = useCart();

  const [checkoutState, setCheckoutState] = useState<
    "idle" | "processing" | "error"
  >("idle");

  async function handleCheckout() {
    if (items.length === 0) return;
    setCheckoutState("processing");

    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((i) => ({
            id: i.id,
            name: `${i.name}${i.size ? ` — ${i.size}` : ""}${
              i.color ? ` / ${i.color}` : ""
            }`,
            price: i.price / 100, // API expects dollars
            quantity: i.quantity,
            image: i.image,
          })),
        }),
      });

      const data = (await res.json()) as { url?: string; error?: string };

      if (data.url) {
        window.location.href = data.url;
      } else {
        setCheckoutState("error");
        setTimeout(() => setCheckoutState("idle"), 4000);
      }
    } catch {
      setCheckoutState("error");
      setTimeout(() => setCheckoutState("idle"), 4000);
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="cart-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-[rgba(7,16,32,0.7)] backdrop-blur-sm"
            onClick={closeCart}
            aria-hidden="true"
          />

          {/* Drawer panel */}
          <motion.aside
            key="cart-panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 340, damping: 38 }}
            className={cn(
              "fixed right-0 top-0 bottom-0 z-[61]",
              "w-full max-w-[420px]",
              "bg-[#0A1628] border-l border-[rgba(197,165,90,0.15)]",
              "flex flex-col",
              "shadow-[−24px_0_60px_rgba(0,0,0,0.6)]"
            )}
            role="dialog"
            aria-modal="true"
            aria-label={t("cart.title")}
          >
            {/* ── Header ── */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[rgba(197,165,90,0.12)] shrink-0">
              <div className="flex items-center gap-3">
                <h2 className="font-display font-bold text-[18px] text-[#F5F0E8]">
                  {t("cart.title")}
                </h2>
                {items.length > 0 && (
                  <span className="font-mono text-[11px] bg-[#C5A55A] text-[#0A1628] px-2 py-0.5 rounded-full font-bold">
                    {items.reduce((sum, i) => sum + i.quantity, 0)}
                  </span>
                )}
              </div>

              <button
                type="button"
                onClick={closeCart}
                aria-label={t("cart.closeLabel")}
                className="w-8 h-8 flex items-center justify-center text-[rgba(245,240,232,0.4)] hover:text-[#F5F0E8] transition-colors duration-150"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M2 2L14 14M14 2L2 14"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* ── Item list or empty state ── */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-16">
                  {/* Cart icon */}
                  <div className="w-14 h-14 rounded-full bg-[#1B2A4A] border border-[rgba(197,165,90,0.15)] flex items-center justify-center">
                    <svg
                      width="22"
                      height="20"
                      viewBox="0 0 22 20"
                      fill="none"
                      className="text-[rgba(197,165,90,0.35)]"
                    >
                      <path
                        d="M1 1h3l2.68 9.39a2 2 0 0 0 1.92 1.61h7.38a2 2 0 0 0 1.92-1.43L20 4H6"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="9" cy="18" r="1.2" fill="currentColor" />
                      <circle cx="17" cy="18" r="1.2" fill="currentColor" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-display font-bold text-[16px] text-[rgba(245,240,232,0.4)] mb-1">
                      {t("cart.empty")}
                    </p>
                    <p className="font-body text-[13px] text-[rgba(245,240,232,0.25)]">
                      {t("cart.emptyNote")}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={closeCart}
                    className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#C5A55A] hover:underline underline-offset-4 transition-all"
                  >
                    {t("cart.continueShopping")}
                  </button>
                </div>
              ) : (
                <ul className="space-y-5">
                  {items.map((item) => (
                    <li
                      key={item.id}
                      className="flex gap-4 pb-5 border-b border-[rgba(197,165,90,0.08)] last:border-b-0"
                    >
                      {/* Image */}
                      <div className="relative w-[72px] h-[90px] shrink-0 bg-[#1B2A4A] rounded-[2px] overflow-hidden">
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="72px"
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-[#122040]" />
                        )}
                      </div>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <p className="font-display font-bold text-[14px] text-[#F5F0E8] leading-snug mb-0.5 truncate">
                          {item.name}
                        </p>

                        {/* Size / color meta */}
                        <div className="flex flex-wrap gap-x-2 gap-y-0.5 mb-2">
                          {item.size && (
                            <span className="font-mono text-[10px] text-[rgba(245,240,232,0.35)]">
                              {item.size}
                            </span>
                          )}
                          {item.color && (
                            <span className="font-mono text-[10px] text-[rgba(245,240,232,0.35)]">
                              {item.color}
                            </span>
                          )}
                        </div>

                        {/* Price */}
                        <p className="font-mono font-medium text-[13px] text-[#C5A55A] mb-3">
                          {formatPrice(item.price * item.quantity)}
                        </p>

                        {/* Quantity + remove row */}
                        <div className="flex items-center justify-between gap-3">
                          {/* Qty controls */}
                          <div className="flex items-center border border-[rgba(197,165,90,0.2)] rounded-[2px] overflow-hidden">
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              aria-label={t("cart.decreaseQty")}
                              className="w-7 h-7 flex items-center justify-center font-mono text-[14px] text-[rgba(245,240,232,0.5)] hover:text-[#C5A55A] hover:bg-[rgba(197,165,90,0.08)] transition-colors"
                            >
                              −
                            </button>
                            <span className="w-7 h-7 flex items-center justify-center font-mono text-[12px] text-[#F5F0E8] border-x border-[rgba(197,165,90,0.15)]">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              aria-label={t("cart.increaseQty")}
                              className="w-7 h-7 flex items-center justify-center font-mono text-[14px] text-[rgba(245,240,232,0.5)] hover:text-[#C5A55A] hover:bg-[rgba(197,165,90,0.08)] transition-colors"
                            >
                              +
                            </button>
                          </div>

                          {/* Remove */}
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="font-mono text-[9px] uppercase tracking-[0.1em] text-[rgba(245,240,232,0.25)] hover:text-[rgba(197,90,90,0.8)] transition-colors duration-150"
                          >
                            {t("cart.remove")}
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* ── Footer (subtotal + checkout) ── */}
            {items.length > 0 && (
              <div className="shrink-0 border-t border-[rgba(197,165,90,0.12)] px-6 py-5 space-y-4">
                {/* Subtotal row */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[rgba(245,240,232,0.4)]">
                    {t("cart.subtotal")}
                  </span>
                  <span className="font-mono font-bold text-[1.25rem] text-[#C5A55A]">
                    {formatPrice(total)}
                  </span>
                </div>

                {/* Shipping note */}
                <p className="font-mono text-[9px] uppercase tracking-[0.08em] text-[rgba(245,240,232,0.2)]">
                  {t("cart.shippingNote")}
                </p>

                {/* Error message */}
                <AnimatePresence>
                  {checkoutState === "error" && (
                    <motion.p
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      className="font-body text-[12px] text-[rgba(220,60,60,0.85)]"
                    >
                      {t("checkout.error")}
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Checkout button */}
                <button
                  type="button"
                  onClick={handleCheckout}
                  disabled={checkoutState === "processing"}
                  className={cn(
                    "w-full py-4 rounded-[3px] font-display font-bold text-[14px] tracking-wide",
                    "border transition-all duration-200",
                    "disabled:opacity-50 disabled:cursor-not-allowed",
                    checkoutState === "processing"
                      ? "bg-[rgba(197,165,90,0.2)] border-[#C5A55A] text-[#C5A55A]"
                      : "bg-[#C5A55A] hover:bg-[#D4AF37] border-[#C5A55A] text-[#0A1628] hover:shadow-[0_0_28px_rgba(197,165,90,0.35)]"
                  )}
                >
                  {checkoutState === "processing"
                    ? t("checkout.processing")
                    : t("cart.checkout")}
                </button>

                {/* Continue shopping link */}
                <button
                  type="button"
                  onClick={closeCart}
                  className="w-full font-mono text-[10px] uppercase tracking-[0.12em] text-[rgba(245,240,232,0.35)] hover:text-[#C5A55A] transition-colors duration-150 py-1"
                >
                  {t("cart.continueShopping")}
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
