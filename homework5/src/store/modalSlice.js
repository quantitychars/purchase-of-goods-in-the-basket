import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    // Вместо простого isOpen, храним тип модального окна и его пропсы
    modalType: null, // например, 'addToCart', 'confirmDelete'
    modalProps: {}, // здесь будут данные для модалки, например { product: {...} }
  },
  reducers: {
    // action для открытия модального окна
    openModal(state, action) {
      const { type, props } = action.payload;
      state.modalType = type;
      state.modalProps = props || {}; // Сохраняем и тип, и пропсы
    },
    // action для закрытия любого модального окна
    closeModal(state) {
      state.modalType = null;
      state.modalProps = {};
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;

export const selectModal = (state) => state.modal;
