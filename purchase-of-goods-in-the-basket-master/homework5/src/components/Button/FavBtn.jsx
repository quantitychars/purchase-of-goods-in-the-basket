import React from "react";
import { useFavorites } from "../../contexts/FavoritesContext";
import { useProduct } from "../../components/ProductCard/ProductCard";

export default function FavBtn({ className = "" }) {
  const { fav, dispatch } = useFavorites();
  const product = useProduct();
  const selected = fav.includes(product.id);

  return (
    <button
      aria-label="favorite"
      className={`text-lg ${className}`}
      onClick={() => dispatch({ type: "TOGGLE", payload: product.id })}
    >
      {selected ? "★" : "☆"}
    </button>
  );
}
