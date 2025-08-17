import { createSlice } from "@reduxjs/toolkit";

// Функція для завантаження стану з localStorage
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState === null) {
      return { items: {} }; // Повертаємо початковий стан, якщо в localStorage нічого немає
    }
    // Розпаковуємо дані і повертаємо їх у правильній структурі
    return { items: JSON.parse(serializedState) };
  } catch (err) {
    return { items: {} }; // Повертаємо початковий стан у разі помилки
  }
};

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    items: {},
  },

  reducers: {
    // Додає товар або збільшує його кількість
    addItem(state, action) {
      const { id } = action.payload;
      state.items[id] = (state.items[id] || 0) + 1;
    },
    // Видаляє товар з кошика
    removeItem(state, action) {
      const { id } = action.payload;
      delete state.items[id];
    },
    // Повністю очищує кошик
    clearCart(state) {
      state.items = {};
    },
  },
});

// Експортуємо дії, які згенерував createSlice
export const { addItem, removeItem, clearCart } = cartSlice.actions;

// Експортуємо сам reducer
export default cartSlice.reducer;

// Селектор для отримання кошика у вигляді масиву [{id, qty}]
export const selectCartItems = (state) =>
  Object.entries(state.cart.items).map(([id, qty]) => ({ id, qty }));

// Селектор для отримання загальної кількості товарів
export const selectCartCount = (state) =>
  Object.values(state.cart.items).reduce((sum, qty) => sum + qty, 0);
