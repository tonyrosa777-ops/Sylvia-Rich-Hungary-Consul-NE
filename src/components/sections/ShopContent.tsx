"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  products,
  getProductsByCategory,
  formatPrice,
  type Product,
  type ProductCategory,
  type ProductVariant,
  PRODUCT_CATEGORIES,
} from "@/lib/products";
import { useCart } from "@/lib/cart";
import { useTranslation } from "@/hooks/useTranslation";
import { Button, Eyebrow } from "@/components/ui";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/animations";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

type FilterCategory = ProductCategory | "All";

interface AddedState {
  productId: string;
  variantId: string;
  size: string;
}

// ─── Product Card ─────────────────────────────────────────────────────────────

function ProductCard({ product }: { product: Product }) {
  const { t } = useTranslation("shop");
  const { addItem } = useCart();

  const firstVariant = product.variants[0];
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | undefined>(
    firstVariant
  );
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [added, setAdded] = useState<AddedState | null>(null);

  const availableSizes = selectedVariant?.sizes ?? product.sizes;

  function handleAddToCart() {
    if (!selectedSize || !selectedVariant) return;

    addItem({
      id: `${product.id}-${selectedVariant.id}-${selectedSize}`,
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      color: selectedVariant.color,
      size: selectedSize,
    });

    setAdded({ productId: product.id, variantId: selectedVariant.id, size: selectedSize });
    setTimeout(() => setAdded(null), 2200);
  }

  const isAdded =
    !!selectedVariant &&
    added?.productId === product.id &&
    added?.variantId === selectedVariant.id &&
    added?.size === selectedSize;

  // When variant changes, reset size if current size isn't available
  function handleVariantChange(variant: ProductVariant) {
    setSelectedVariant(variant);
    if (!variant.sizes.includes(selectedSize)) {
      setSelectedSize("");
    }
  }

  return (
    <div
      className={cn(
        "group relative flex flex-col bg-[#1B2A4A] rounded-[3px] overflow-hidden",
        "border border-[rgba(197,165,90,0.1)] hover:border-[rgba(197,165,90,0.45)]",
        "transition-all duration-300"
      )}
    >
      {/* Featured badge */}
      {product.featured && (
        <div className="absolute top-3 left-3 z-10 font-mono text-[8px] uppercase tracking-[0.12em] bg-[#C5A55A] text-[#0A1628] px-2 py-1 rounded-[2px]">
          {t("product.featured")}
        </div>
      )}

      {/* Product image */}
      <div className="relative aspect-[4/5] bg-[#122040] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          onError={(e) => {
            // Fallback to placeholder on missing image
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-[rgba(10,22,40,0)] group-hover:bg-[rgba(10,22,40,0.2)] transition-all duration-300" />
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5">
        {/* Category badge */}
        <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-[rgba(197,165,90,0.5)] mb-2">
          {t(`categories.${product.category.toLowerCase()}`)}
        </p>

        {/* Name */}
        <h3 className="font-display font-bold text-[15px] text-[#F5F0E8] mb-1 leading-snug">
          {product.name}
        </h3>

        {/* Price */}
        <p className="font-mono font-medium text-[1.15rem] text-[#C5A55A] mb-4">
          {formatPrice(product.price)}
        </p>

        {/* Color swatches */}
        {product.variants.length > 1 && (
          <div className="mb-4">
            <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-[rgba(245,240,232,0.35)] mb-2">
              {t("product.selectColor")}
            </p>
            <div className="flex gap-2">
              {product.variants.map((variant) => (
                <button
                  key={variant.id}
                  type="button"
                  title={variant.color}
                  onClick={() => handleVariantChange(variant)}
                  className={cn(
                    "w-6 h-6 rounded-full border-2 transition-all duration-150 shrink-0",
                    selectedVariant?.id === variant.id
                      ? "border-[#C5A55A] scale-110"
                      : "border-transparent hover:border-[rgba(197,165,90,0.5)]"
                  )}
                  style={{ backgroundColor: variant.colorHex }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Size selector */}
        <div className="mb-5">
          <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-[rgba(245,240,232,0.35)] mb-2">
            {t("product.selectSize")}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {availableSizes.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setSelectedSize(size)}
                className={cn(
                  "px-2.5 py-1 font-mono text-[10px] rounded-[2px] border transition-all duration-150",
                  selectedSize === size
                    ? "bg-[#C5A55A] border-[#C5A55A] text-[#0A1628] font-bold"
                    : "border-[rgba(197,165,90,0.25)] text-[rgba(245,240,232,0.55)] hover:border-[#C5A55A] hover:text-[#C5A55A]"
                )}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Add to cart button */}
        <button
          type="button"
          onClick={handleAddToCart}
          disabled={!selectedSize || !selectedVariant}
          className={cn(
            "w-full py-3 rounded-[3px] font-display font-bold text-[13px] tracking-wide",
            "border transition-all duration-200",
            "disabled:opacity-40 disabled:cursor-not-allowed",
            isAdded
              ? "bg-[rgba(197,165,90,0.15)] border-[#C5A55A] text-[#C5A55A]"
              : "bg-[#C5A55A] hover:bg-[#D4AF37] border-[#C5A55A] text-[#0A1628] hover:shadow-[0_0_24px_rgba(197,165,90,0.3)]"
          )}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={isAdded ? "added" : "add"}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18 }}
              className="inline-flex items-center gap-2"
            >
              {isAdded ? (
                <>
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                    <path d="M1 5L4.5 8.5L11 1.5" stroke="#C5A55A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {t("product.addedToCart")}
                </>
              ) : (
                t("product.addToCart")
              )}
            </motion.span>
          </AnimatePresence>
        </button>

        {/* Shipping note */}
        <p className="font-mono text-[8px] uppercase tracking-[0.08em] text-[rgba(245,240,232,0.2)] mt-3 text-center">
          {t("product.shippingNote")}
        </p>
      </div>
    </div>
  );
}

// ─── Empty State ──────────────────────────────────────────────────────────────

function EmptyState() {
  const { t } = useTranslation("shop");
  return (
    <div className="col-span-full py-20 text-center">
      <p className="font-display font-bold text-xl text-[rgba(245,240,232,0.3)] mb-2">
        {t("empty.heading")}
      </p>
      <p className="font-body text-[14px] text-[rgba(245,240,232,0.2)]">
        {t("empty.body")}
      </p>
    </div>
  );
}

// ─── ShopContent (main export) ────────────────────────────────────────────────

export function ShopContent() {
  const { t } = useTranslation("shop");
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : getProductsByCategory(activeCategory);

  const categoryTabs: FilterCategory[] = ["All", ...PRODUCT_CATEGORIES];

  // Map category to translation key
  function categoryLabel(cat: FilterCategory): string {
    if (cat === "All") return t("categories.all");
    return t(`categories.${cat.toLowerCase()}`);
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-[#0A1628] pt-16 pb-12 border-b border-[rgba(197,165,90,0.1)]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <Eyebrow className="mb-3">{t("hero.eyebrow")}</Eyebrow>
            <h1 className="font-display font-bold text-[clamp(2rem,5vw,3.5rem)] text-[#F5F0E8] max-w-2xl leading-[1.1] mb-4">
              {t("hero.headline")}
            </h1>
            <p className="font-body text-[16px] leading-[1.75] text-[rgba(245,240,232,0.6)] max-w-xl">
              {t("hero.subheadline")}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Category filters + product grid ── */}
      <section className="bg-[#0A1628] py-14">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          {/* Filter tabs */}
          <FadeUp className="mb-10">
            <div className="flex flex-wrap gap-2">
              {categoryTabs.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-5 py-2 font-mono text-[10px] uppercase tracking-[0.12em] rounded-[3px]",
                    "border transition-all duration-200",
                    activeCategory === cat
                      ? "bg-[#C5A55A] border-[#C5A55A] text-[#0A1628] font-bold"
                      : "bg-transparent border-[rgba(197,165,90,0.25)] text-[rgba(245,240,232,0.55)] hover:border-[#C5A55A] hover:text-[#C5A55A]"
                  )}
                >
                  {categoryLabel(cat)}
                </button>
              ))}
            </div>
          </FadeUp>

          {/* Product grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {filteredProducts.length === 0 ? (
                <EmptyState />
              ) : (
                <StaggerContainer
                  staggerDelay={0.07}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {filteredProducts.map((product) => (
                    <motion.div key={product.id} variants={staggerItem}>
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </StaggerContainer>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-[#071020] py-16 border-t border-[rgba(197,165,90,0.12)]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <FadeUp className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <Eyebrow className="mb-2">{t("cta.eyebrow")}</Eyebrow>
              <h2 className="font-display font-bold text-2xl text-[#F5F0E8] mb-2">
                {t("cta.headline")}
              </h2>
              <p className="font-body text-[15px] text-[rgba(245,240,232,0.6)] max-w-md">
                {t("cta.body")}
              </p>
            </div>
            <Button href="/contact" variant="primary" size="md" className="shrink-0">
              {t("cta.button")}
            </Button>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
