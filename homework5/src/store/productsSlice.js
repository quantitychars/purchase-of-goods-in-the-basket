import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "../api/getProducts"; // <-- Імпортуй свою функцію для запиту

// 1. Створюємо асинхронний Thunk
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts", // Унікальне ім'я для цієї дії
  async (_, { rejectWithValue }) => {
    try {
      const data = await getProducts(); // Викликаємо твою функцію API
      return data; // Цей результат потрапить в action.payload у разі успіху
    } catch (error) {
      // Використовуємо rejectWithValue для передачі помилки в reducer
      return rejectWithValue(error.message);
    }
  }
);

// 2. Створюємо slice
const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [], // Тут буде зберігатися масив товарів
    status: null, // 'loading', 'resolved', 'rejected'
    error: null,
  },
  reducers: {}, // Синхронні редуктори нам тут поки не потрібні
  // 3. Обробляємо стани, які генерує createAsyncThunk
  extraReducers: (builder) => {
    builder
      // Коли запит починається
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      // Коли запит успішно завершився
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "resolved";
        state.items = action.payload; // Записуємо отримані дані в стан
      })
      // Коли запит провалився
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload; // Записуємо текст помилки
      });
  },
});

export default productsSlice.reducer;
