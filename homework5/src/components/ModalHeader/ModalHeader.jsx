import styled from "styled-components";

const Header = styled.h2`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 16px;
`;
export default function ModalHeader({ children, className = "" }) {
  return <Header className={`header ${className}`}>{children}</Header>;
}
