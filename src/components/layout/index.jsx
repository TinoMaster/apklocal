import React, { useState } from "react";
import { EstadisticasProvider } from "../../context/estadisticasContext";
import { InventarioProvider } from "../../context/inventarioContext";
import Contenedor from "../contenedor paginas/contenedor";
import MenuLateral from "../menu lateral/menuLateral";
import Menu from "../menu/menuPrincipal";

export const Layout = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [notasActive, setNotasActive] = useState(false);
  return (
    <InventarioProvider>
      <EstadisticasProvider>
        <main className="flex w-screen h-auto md:h-screen overflow-hidden">
          <MenuLateral menuActive={menuActive} setMenuActive={setMenuActive} />
          <section className="container m-auto fondo flex flex-col h-screen w-full ">
            <Menu
              menuActive={menuActive}
              setMenuActive={setMenuActive}
              setNotasActive={setNotasActive}
              notasActive={notasActive}
            />
            <Contenedor
              menuActive={menuActive}
              setMenuActive={setMenuActive}
              setNotasActive={setNotasActive}
              notasActive={notasActive}
            />
          </section>
        </main>
      </EstadisticasProvider>
    </InventarioProvider>
  );
};
