import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import ProductCardImage from "../ProductCard/ProductCardImage";
import ProductCardInfo from "../ProductCard/ProductCardInfo";
import ProductCardActions from "../ProductCard/ProductCardActions";
import ProductSkeleton from "../ProductSkeleton/ProductSkeleton";
import useProducts from "../../hooks/UseProducts";

/**
 * items      – масив товарів (якщо не передано, компонент сам фетчить useProducts())
 * showAdd    – чи показувати кнопку 🛒 «додати в кошик»
 * showRemove – чи показувати кнопку × «видалити з кошика»
 * onRemove   – колбек, який викликається при натисканні ×
 */
export default function ProductList({
  items,
  showAdd = false,
  showRemove = false,
  onRemove,
}) {
  /* якщо items не передали – тягнемо через хук */
  const { data: fetched, loading, error } = useProducts();
  const list = items ?? fetched;

  /*  ─── skeleton / error ─── */
  if (!items && loading)
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, idx) => (
          <ProductSkeleton key={idx} />
        ))}
      </div>
    );

  if (!items && error)
    return <p className="text-red-600">🛑 {error.message}</p>;

  /*  ─── самі картки ─── */
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {list.map((p) => (
        <ProductCard key={p.id} product={p}>
          <ProductCardImage />
          <ProductCardInfo />
          <ProductCardActions
            showAdd={showAdd}
            showRemove={showRemove}
            onRemove={onRemove}
          />
        </ProductCard>
      ))}
    </div>
  );
}
