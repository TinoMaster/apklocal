import React, { useState } from "react";
import { Container } from "./container";
import { MenuTienda } from "./menu lateral tienda";
import { TopMenuTienda } from "./top menu tienda";

export const PagTienda = () => {
  const [openLeftMenu, setOpenLeftMenu] = useState(false);
  return (
    <div
      onClick={() => openLeftMenu && setOpenLeftMenu(false)}
      className="flex flex-wrap justify-between w-full h-full"
    >
      <TopMenuTienda setOpenLeftMenu={setOpenLeftMenu} />
      <div className="w-full flex flex-wrap h-full">
        <MenuTienda openLeftMenu={openLeftMenu} />
        <Container />
      </div>
    </div>
  );
};
