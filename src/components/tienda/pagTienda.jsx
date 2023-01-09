import React, { useContext, useState } from "react";
import AuthContext from "../../context/authContext";
import { Container } from "./container";
import { MenuTienda } from "./menu lateral tienda";
import { TopMenuTienda } from "./top menu tienda";

export const PagTienda = () => {
  const [openLeftMenu, setOpenLeftMenu] = useState(false);
  const { darkMode } = useContext(AuthContext);
  return (
    <div
      onClick={() => openLeftMenu && setOpenLeftMenu(false)}
      className="flex flex-wrap justify-between w-full h-full"
    >
      <TopMenuTienda setOpenLeftMenu={setOpenLeftMenu} />
      <div className="w-full flex flex-wrap h-full">
        <MenuTienda openLeftMenu={openLeftMenu} darkMode={darkMode} />
        <Container />
      </div>
    </div>
  );
};
