import styled from "styled-components";

const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  border: none;
  background: transparent;
  font-size: 20px;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.15s;

  &:hover {
    opacity: 1;
  }
`;
export default function ModalClose({ onClick }) {
  return (
    <CloseBtn type="button" onClick={onClick}>
      х
    </CloseBtn>
  );
}
