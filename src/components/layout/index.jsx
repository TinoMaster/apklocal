import React, { useState } from "react";
import { useContext } from "react";
import AuthContext from "../../context/authContext";
import { CuadreProvider } from "../../context/cuadreContext";
import { EstadisticasProvider } from "../../context/estadisticasContext";
import { InventarioProvider } from "../../context/inventarioContext";
import Contenedor from "../contenedor paginas/contenedor";
import MenuLateral from "../menu lateral/menuLateral";
import Menu from "../menu/menuPrincipal";

export const Layout = () => {
  const { darkMode } = useContext(AuthContext);
  const [menuActive, setMenuActive] = useState(false);
  const [notasActive, setNotasActive] = useState(false);
  return (
    <InventarioProvider>
      <CuadreProvider>
        <EstadisticasProvider>
          <main
            className={
              darkMode
                ? "flex w-screen h-auto md:h-screen overflow-hidden bg-darkMode transition-all delay-75 text-slate-200"
                : "flex w-screen h-auto md:h-screen overflow-hidden bg-lightMode transition-all delay-75 text-slate-700"
            }
          >
            <MenuLateral
              menuActive={menuActive}
              setMenuActive={setMenuActive}
            />
            <section className="container m-auto flex flex-col h-screen w-full ">
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
      </CuadreProvider>
    </InventarioProvider>
  );
};
