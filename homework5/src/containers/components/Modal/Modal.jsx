import { createPortal } from "react-dom";
import Overlay from "../../../components/ModalOverlay/ModalOverlay";
import ModalWrapper from "../../../components/ModalWrapper/ModalWrapper";

import Header from "../../../components/ModalHeader/ModalHeader";
import Body from "../../../components/ModalBody/ModalBody";
import Footer from "../../../components/ModalFooter/ModalFooter";
import Close from "../../../components/ModalClose/ModalClose";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  const handleBackdrop = (e) => e.target === e.currentTarget && onClose?.();

  return createPortal(
    <Overlay onClick={handleBackdrop}>
      <ModalWrapper>{children}</ModalWrapper>
    </Overlay>,
    document.body
  );
}

/* ── Compound-pattern ── */
Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;
Modal.Close = Close;
