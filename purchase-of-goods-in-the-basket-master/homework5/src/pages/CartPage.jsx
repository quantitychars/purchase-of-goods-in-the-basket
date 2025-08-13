import React, { useEffect } from "react";
import { openModal } from "../store/modalSlice";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../store/productsSlice";
import { selectCartItems, removeItem } from "../store/cartSlice";
import ProductList from "../components/ProductList/ProductList";

export default function CartPage() {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  /* 1. Тягнемо всі товари один раз */
  const {
    items: allProducts,
    status,
    error,
  } = useSelector((state) => state.products);

  useEffect(() => {
    // Диспатчимо наш Thunk, тільки якщо дані ще не завантажені
    if (status === null) {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const cartProducts = cartItems
    .map(({ id, qty }) => {
      const prod = allProducts.find((p) => p.id === id);
      return prod ? { ...prod, qty } : null;
    })
    .filter(Boolean);

  // Обробляємо стани завантаження
  if (status === "loading") {
    return <p className="text-center py-12">Завантаження товарів...</p>;
  }

  if (status === "rejected") {
    return <p className="text-center py-12 text-red-500">Помилка: {error}</p>;
  }

  /* 3. Модалка підтвердження */
  const confirmRemove = (id) => {
    dispatch(
      openModal({
        type: "CONFIRM_DELETE",
        props: {
          title: "Видалити товар?",
          productId: id,
        },
      })
    );
  };

  /* 4. UI */

  return cartProducts.length ? (
    <ProductList
      items={cartProducts}
      showRemove // прапор для ×-кнопки
      onRemove={confirmRemove}
    />
  ) : (
    <p className="text-center py-12 text-gray-500">Кошик порожній</p>
  );
}
