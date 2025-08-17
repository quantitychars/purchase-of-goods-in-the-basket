import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../store/productsSlice";
import { selectCartItems, clearCart } from "../store/cartSlice"; // <-- 1. Імпортуємо clearCart
import { openModal } from "../store/modalSlice";
import ProductList from "../components/ProductList/ProductList";
import CheckoutForm from "../components/CheckoutForm/CheckoutForm"; // <-- 2. Імпортуємо нашу форму

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

  /* 4. Створюємо функцію-обробник для форми */
  const handleCheckout = () => {
    // Диспатчимо дію очищення кошика
    dispatch(clearCart());
  };

  /* 5. Оновлюємо UI */
  return (
    <div className="container mx-auto p-4">
      {cartProducts.length > 0 ? (
        <>
          {/* Спочатку відображаємо список товарів у кошику */}
          <ProductList
            items={cartProducts}
            showRemove // прапор для ×-кнопки
            onRemove={confirmRemove}
          />

          {/* Візуальний розділювач */}
          <hr className="my-8 border-gray-300" />

          {/* Потім відображаємо форму оформлення замовлення */}
          <CheckoutForm onCheckout={handleCheckout} />
        </>
      ) : (
        <p className="text-center py-12 text-gray-500">Кошик порожній</p>
      )}
    </div>
  );
}
