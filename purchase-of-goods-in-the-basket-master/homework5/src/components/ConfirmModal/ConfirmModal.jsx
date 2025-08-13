import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../../store/cartSlice"; // Імпортуємо action
import { closeModal } from "../../store/modalSlice";

export default function ConfirmModal({ title, productId, onClose }) {
  const dispatch = useDispatch();

  const handleConfirm = () => {
    // Диспатчимо видалення товару
    dispatch(removeItem({ id: productId }));
    // Закриваємо модалку
    onClose(); // onClose тепер це dispatch(closeModal()) з ModalRoot
  };

  return (
    <div className="bg-white rounded-xl p-6 w-80 text-center space-y-6">
      <p className="text-lg">{title}</p>
      <div className="flex justify-end gap-3">
        {/* Кнопка "Ні" просто закриває вікно */}
        <button onClick={onClose} className="px-4 py-2 border rounded-md">
          Ні
        </button>
        {/* Кнопка "Так" викликає нашу нову функцію */}
        <button
          onClick={handleConfirm}
          className="px-4 py-2 rounded-md bg-primary text-white"
        >
          Так
        </button>
      </div>
    </div>
  );
}
