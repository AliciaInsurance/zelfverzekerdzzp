"use client";

import { useState } from "react";
import type { Product, ProductCategorySlug } from "@/content/insurance";
import { productCategories } from "@/content/insurance";
import { ProductCard } from "@/components/ProductCard";
import { cn } from "@/lib/utils";

type ProductCatalogProps = {
  products: Product[];
};

export function ProductCatalog({ products }: ProductCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<
    ProductCategorySlug | "all"
  >("all");

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const categoriesWithProducts = productCategories.filter((cat) =>
    products.some((p) => p.category === cat.slug),
  );

  return (
    <div>
      <div
        className="mb-8 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filter op categorie"
      >
        <button
          type="button"
          role="tab"
          aria-selected={activeCategory === "all"}
          onClick={() => setActiveCategory("all")}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue",
            activeCategory === "all"
              ? "bg-navy text-white"
              : "bg-soft-bg text-navy hover:bg-navy/10",
          )}
        >
          Alle ({products.length})
        </button>
        {categoriesWithProducts.map((category) => {
          const count = products.filter((p) => p.category === category.slug).length;
          return (
            <button
              key={category.slug}
              type="button"
              role="tab"
              aria-selected={activeCategory === category.slug}
              onClick={() => setActiveCategory(category.slug)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue",
                activeCategory === category.slug
                  ? "bg-navy text-white"
                  : "bg-soft-bg text-navy hover:bg-navy/10",
              )}
            >
              {category.title} ({count})
            </button>
          );
        })}
      </div>

      {activeCategory !== "all" && (
        <p className="mb-6 text-sm text-muted">
          {productCategories.find((c) => c.slug === activeCategory)?.description}
        </p>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="py-8 text-center text-muted">
          Geen producten gevonden in deze categorie.
        </p>
      )}
    </div>
  );
}
