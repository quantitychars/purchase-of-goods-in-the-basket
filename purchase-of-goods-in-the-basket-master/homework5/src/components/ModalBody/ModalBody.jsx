import styled from "styled-components";
const Body = styled.section`
  padding: 0 32px;
  text-align: center;
  line-height: 1.4;
`;
export default function ModalBody({ children, className = "", ...rest }) {
  return (
    <Body className={`modal-body ${className}`} {...rest}>
      {children}
    </Body>
  );
}
