import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;
export default function ModalOverlay({ onClick, children }) {
  return (
    <Overlay className="overlay" onClick={onClick}>
      {children}
    </Overlay>
  );
}
