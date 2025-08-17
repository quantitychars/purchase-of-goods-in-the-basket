import styled from "styled-components";
import { Button } from "../Button/Button";

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 24px;
`;

export default function ModalFooter({
  firstText,
  secondaryText,
  firstClick,
  secondaryClick,
  className = "",
}) {
  if (!firstText && !secondaryText) return null;
  return (
    <Footer className={`footer ${className}`}>
      {firstText && (
        <Button variant="primary" onClick={firstClick}>
          {firstText}
        </Button>
      )}

      {secondaryText && (
        <Button variant="secondary" onClick={secondaryClick}>
          {secondaryText}
        </Button>
      )}
    </Footer>
  );
}
