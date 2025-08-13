import React from "react";
import { Button } from "../Button/Button";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
console.log("Button is", Button);
export default function AddToCartModal({ product, onClose }) {
  return (
    <ModalOverlay>
      <ModalWrapper>
        <h3 className="text-lg font-semibold mb-4">Товар додано!</h3>

        <p className="text-sm mb-6">
          «{product.title}» успішно додано до кошика.
        </p>

        <div className="text-right">
          <Button onClick={onClose}>OK</Button>
        </div>
      </ModalWrapper>
    </ModalOverlay>
  );
}
