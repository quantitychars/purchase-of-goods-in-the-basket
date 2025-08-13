import { createContext, useContext, useState, useCallback } from "react";
import ModalWrapper from "../components/ModalWrapper/ModalWrapper"; // твій існуючий контейнер

const ModalContext = createContext(null);
export const useModal = () => useContext(ModalContext);

export function ModalProvider({ children }) {
  const [content, setContent] = useState(null);

  const close = useCallback(() => setContent(null), []);
  const open = useCallback((node) => setContent(() => node), []);
  console.log("content", content);
  return (
    <ModalContext.Provider value={{ open, close }}>
      {children}
      {content && <ModalWrapper onClose={close}>{content}</ModalWrapper>}
    </ModalContext.Provider>
  );
}
