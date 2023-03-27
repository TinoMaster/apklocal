import React from "react";
import ReactDOM from "react-dom";

const ModalPortal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="flex justify-center items-center fixed w-full h-full z-50">{children}</div>,
    document.getElementById("modal")
  );
};

export { ModalPortal };
