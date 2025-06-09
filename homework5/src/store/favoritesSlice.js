import { createSlice } from "@reduxjs/toolkit";

export const loadFavoritesState = () => {
  try {
    const serializedState = localStorage.getItem("fav");
    if (serializedState === null) {
      return { ids: [] };
    }
    return { ids: JSON.parse(serializedState) };
  } catch (err) {
    return { ids: [] };
  }
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    ids: [],
  },

  reducers: {
    toggleFavorite(state, action) {
      const id = action.payload;
      const index = state.ids.indexOf(id);

      if (index !== -1) {
        state.ids.splice(index, 1);
      } else {
        state.ids.push(id);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
// Селектор для отримання масиву ID обраних товарів
export const selectFavoriteIds = (state) => state.favorites.ids;

// Селектор для отримання кількості обраних товарів
export const selectFavoritesCount = (state) => state.favorites.ids.length;

// Селектор-фабрика для перевірки, чи є конкретний товар в обраних.
// Це трохи складніший, але дуже ефективний патерн.
export const selectIsFavorite = (id) => (state) =>
  state.favorites.ids.includes(id);
