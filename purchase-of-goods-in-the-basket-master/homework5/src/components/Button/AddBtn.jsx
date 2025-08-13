import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cartSlice";
import { useProduct } from "../../components/ProductCard/ProductCard";
import { openModal } from "../../store/modalSlice";
import AddToCartModal from "../Modal/AddToCartModal.jsx";

export default function AddBtn({ className = "" }) {
  const dispatch = useDispatch();
  const product = useProduct();

  const handleClick = () => {
    dispatch(addItem({ id: product.id }));
    dispatch(
      openModal({
        type: "ADD_TO_CART", // Тип для ModalRoot
        props: { product }, // Пропсы для модалки
      })
    );
  };

  return (
    <button
      className={`px-3 py-1 rounded-lg bg-primary text-white text-sm ${className}`}
      onClick={handleClick}
    >
      Add to cart
    </button>
  );
}
