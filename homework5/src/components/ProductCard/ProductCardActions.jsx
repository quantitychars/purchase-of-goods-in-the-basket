import React from "react";
import { Heart, ShoppingCart, X } from "lucide-react";

import PropTypes from "prop-types";

import { openModal } from "../../store/modalSlice";
import { toggleFavorite, selectIsFavorite } from "../../store/favoritesSlice";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../store/cartSlice";
import { useProduct } from "./ProductCard";

export default function ProductCardActions({
  showAdd = false,
  showRemove = false,
  onRemove,
}) {
  const product = useProduct();
  const dispatch = useDispatch();

  const isFav = useSelector(selectIsFavorite(product.id));
  /* ────────────── UI ────────────── */
  return (
    <div className="flex items-center p-4 gap-2">
      {/* Зірочка */}
      <button
        onClick={() => dispatch(toggleFavorite(product.id))}
        aria-label="toggle favorite"
        className="p-1"
      >
        <Heart size={20} fill={isFav ? "#e63946" : "none"} />
      </button>

      {/* Кнопка «додати у кошик» */}
      {showAdd && (
        <button
          onClick={() => {
            dispatch(addItem({ id: product.id }));
            dispatch(
              openModal({
                type: "SHOW_TOAST",
                props: { message: "Додано у кошик" },
              })
            );
          }}
          aria-label="add to cart"
          className={`p-1 ${showRemove ? "" : "ml-auto"}`}
        >
          <ShoppingCart size={20} />
        </button>
      )}

      {/* Хрестик «видалити з кошика» */}
      {showRemove && (
        <button
          onClick={() => onRemove?.(product.id)}
          aria-label="remove from cart"
          className="p-1 ml-auto"
        >
          <X size={20} />
        </button>
      )}
    </div>
  );
}

ProductCardActions.propTypes = {
  showAdd: PropTypes.bool,
  showRemove: PropTypes.bool,
  onRemove: PropTypes.func,
};
