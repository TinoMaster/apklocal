import React, { useContext } from "react";
import AuthContext from "../../context/authContext";
import { Container } from "./container";
import { MenuTienda } from "./menu lateral tienda";

export const PagTienda = () => {
  const { darkMode } = useContext(AuthContext);
  return (
    <div className="flex flex-wrap justify-between overflow-hidden w-full h-full">
      <div className="w-full flex flex-wrap h-full">
        <MenuTienda darkMode={darkMode} />
        <Container />
      </div>
    </div>
  );
};
