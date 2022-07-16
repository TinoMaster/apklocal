import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cookies from "universal-cookie";
import Contenedor from "./components/contenedor paginas/contenedor";
import PagInicioSession from "./components/inicio Session/pagInicioSession";
import MenuLateral from "./components/menu lateral/menuLateral";
import Menu from "./components/menu/menuPrincipal";
import { EstadisticasProvider } from "./context/estadisticasContext";
import { InventarioProvider } from "./context/inventarioContext";

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [notasActive, setNotasActive] = useState(false);

  const cookies = new Cookies();

  return (
    <BrowserRouter>
      <Routes>
        {!cookies.get("nombre") ? (
          <Route path="*" element={<PagInicioSession />} />
        ) : (
          <Route
            path="*"
            element={
              <InventarioProvider>
                <EstadisticasProvider>
                  <main className="flex w-screen h-auto md:h-screen overflow-hidden">
                    <MenuLateral
                      menuActive={menuActive}
                      setMenuActive={setMenuActive}
                    />
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
            }
          /> 
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
