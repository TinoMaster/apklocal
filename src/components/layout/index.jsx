import React, { useState } from "react";
import { useContext } from "react";
import AuthContext from "../../context/authContext";
import { CuadreProvider } from "../../context/cuadreContext";
import { EstadisticasProvider } from "../../context/estadisticasContext";
import { InventarioProvider } from "../../context/inventarioContext";
import Contenedor from "../contenedor paginas/contenedor";
import { WaitingPage } from "../loaders/WaitingPage";
import MenuLateral from "../menu lateral/menuLateral";
import Menu from "../menu/menuPrincipal";

export const Layout = () => {
  const { darkMode, isConnected, user } = useContext(AuthContext);
  const [menuActive, setMenuActive] = useState(false);
  const [notasActive, setNotasActive] = useState(false);
  const [addTarget, setAddTarget] = useState(false);
  return (
    <InventarioProvider>
      <CuadreProvider>
        <EstadisticasProvider>
          <main
            className={
              darkMode
                ? "flex w-screen h-auto md:h-screen overflow-hidden bg-darkMode transition-all delay-75 text-slate-200 relative"
                : "flex w-screen h-auto md:h-screen overflow-hidden bg-lightMode transition-all delay-75 text-slate-700 relative"
            }
          >
            {!isConnected && <WaitingPage />}
            <MenuLateral
              menuActive={menuActive}
              setMenuActive={setMenuActive}
              addTarget={addTarget}
              setAddTarget={setAddTarget}
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
                user={user}
              />
            </section>
          </main>
        </EstadisticasProvider>
      </CuadreProvider>
    </InventarioProvider>
  );
};
