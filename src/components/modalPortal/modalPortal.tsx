import React from "react";
import ReactDOM from "react-dom";

interface ModalPortalProps {
  children: React.ReactNode;
}

const ModalPortal: React.FC<ModalPortalProps> = ({ children }) => {
  const modalRoot = document.getElementById("modal");

  if (!modalRoot) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="flex justify-center bg-black/10 items-center fixed w-full h-full z-50">
      {children}
    </div>,
    modalRoot
  );
};

export { ModalPortal };
