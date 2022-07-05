import React from "react";
import PagInicio from "../pagina inicio/pagInicio";
import { Route, Routes } from "react-router-dom";
import PagInventario from "../pagina inventario/pagInventario";
import PagPersonal from "../pagina personal/pagPersonal";
import PagVentas from "../pagina ventas/pagVentas";
import PagCuadre from "../pagina cuadre/pagCuadre";
import PagProducto from "../pagina productos/pagProducto";
import { CajaNotas } from "../notas/cajaNotas";

const Contenedor = ({ setMenuActive, notasActive }) => {
  return (
    <div className=" relative rounded-md bg-white h-full  overflow-hidden">
      <div
        className={
          notasActive
            ? "absolute w-full md:w-1/4 h-full shadow-xl transition-transform shadow-violet-500/50 z-30 bg-white right-0"
            : "absolute w-full md:w-1/4 h-full bg-white right-0 transition-transform translate-x-full"
        }
      >
        <CajaNotas />
      </div>

      <div
        onClick={() => setMenuActive(false)}
        className=" rounded-md bg-white h-full shadow-2xl shadow-violet-500/50 overflow-hidden"
      >
        <Routes>
          <Route path="/" element={<PagInicio />} />
          <Route path="/ventas" element={<PagVentas />} />
          <Route path="/inventario" element={<PagInventario />} />
          <Route path="/personal" element={<PagPersonal />} />
          <Route path="/cuadre" element={<PagCuadre />} />
          <Route path="/productos" element={<PagProducto />} />
          <Route path="/*" element={<PagInicio />} />
        </Routes>
      </div>
    </div>
  );
};

export default Contenedor;
