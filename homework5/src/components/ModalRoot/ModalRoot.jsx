// src/components/ModalRoot/ModalRoot.jsx

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectModal, closeModal } from "../../store/modalSlice"; // <-- Перевір шлях

// Імпортуємо твій ModalWrapper!
import ModalWrapper from "../ModalWrapper/ModalWrapper"; // <-- Перевір шлях

// Імпортуємо ВСІ твої модальні вікна
import AddToCartModal from "../Modal/AddToCartModal"; // <-- Перевір шлях
import ConfirmModal from "../ConfirmModal/ConfirmModal"; // <-- Перевір шлях
import Toast from "../Toast/Toast"; // <-- Перевір шлях

// Карта компонентів. Ключі ('CONFIRM_DELETE' і т.д.) повинні збігатися з тими, що ти передаєш в openModal
const MODAL_COMPONENTS = {
  ADD_TO_CART: AddToCartModal,
  CONFIRM_DELETE: ConfirmModal,
  SHOW_TOAST: Toast,
};

export default function ModalRoot() {
  const dispatch = useDispatch();
  // Отримуємо стан модалки з Redux
  const { modalType, modalProps } = useSelector(selectModal);

  // Якщо типу немає, нічого не рендеримо. Це нормальна поведінка.
  if (!modalType) {
    return null;
  }

  const SpecificModal = MODAL_COMPONENTS[modalType];

  // Якщо ми передали тип, якого немає в карті, нічого не рендеримо
  if (!SpecificModal) {
    console.error(
      `Modal type "${modalType}" is not defined in MODAL_COMPONENTS!`
    );
    return null;
  }

  // Функція для закриття, яку ми передамо в пропси
  const handleClose = () => dispatch(closeModal());

  // Рендеримо обгортку, а в неї - конкретну модалку
  return (
    <ModalWrapper onClose={handleClose}>
      <SpecificModal {...modalProps} onClose={handleClose} />
    </ModalWrapper>
  );
}
