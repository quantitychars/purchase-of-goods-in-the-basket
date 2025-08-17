import React from "react";
import styled from "styled-components";

/* ────────── напівпрозорий фон ────────── */
const Overlay = styled.div`
  position: fixed;
  inset: 0; /* top:0; right:0; bottom:0; left:0 */
  background: rgba(0, 0, 0, 0.4); /* затемнення */
  display: flex;
  align-items: center; /* вертикальне центрування */
  justify-content: center; /* горизонтальне центрування */
  z-index: 999; /* перекриває все */
`;

/* ────────── «картка» всередині ────────── */
const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.25);
  width: min(90%, 460px); /* адаптивна ширина */
  padding: 32px;
`;

/**
 * onClose – колбек, який закриває модалку (передається з провайдера)
 */
export default function ModalWrapper({ children, onClose }) {
  return (
    <Overlay onClick={onClose}>
      {/* stopPropagation → клік усередині не закриває вікно */}
      <Card onClick={(e) => e.stopPropagation()}>{children}</Card>
    </Overlay>
  );
}
