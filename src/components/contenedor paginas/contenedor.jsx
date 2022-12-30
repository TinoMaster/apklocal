import React from "react";
import PagInicio from "../pagina inicio/pagInicio";
import { Route, Routes } from "react-router-dom";
import PagInventario from "../pagina inventario/pagInventario";
import PagPersonal from "../pagina personal/pagPersonal";
import PagVentas from "../pagina ventas/pagVentas";
import PagCuadre from "../pagina cuadre/pagCuadre";
import PagProducto from "../pagina productos/pagProducto";
import { CajaNotas } from "../notas/cajaNotas";
import { PagTienda } from "../tienda/pagTienda";
import { AddProduct } from "../tienda/add product";
import { InventarioTienda } from "../tienda/inventario tienda";
import { Historial } from "../tienda/historial";
import { EstadisticasTienda } from "../tienda/estadisticas tienda";
import { EditProduct } from "../tienda/edit product";
import { SeeProduct } from "../tienda/see product";

const Contenedor = ({ setMenuActive, notasActive }) => {
  return (
    <div className=" relative rounded-md h-full overflow-hidden">
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
        className=" rounded-md bg-white h-full overflow-hidden"
      >
        <Routes>
          <Route path="/" element={<PagInicio />} />
          <Route path="/ventas" element={<PagVentas />} />
          <Route path="/inventario" element={<PagInventario />} />
          <Route path="/personal" element={<PagPersonal />} />
          <Route path="/cuadre" element={<PagCuadre />} />
          <Route path="/productos" element={<PagProducto />} />
          <Route path="/tienda" element={<PagTienda />}>
            <Route path="addProduct" element={<AddProduct />} />
            <Route path="editProduct/:id" element={<EditProduct />} />
            <Route path="seeProduct/:id" element={<SeeProduct />} />
            <Route path="inventario" element={<InventarioTienda />} />
            <Route path="historial" element={<Historial />} />
            <Route path="estadisticas" element={<EstadisticasTienda />} />
          </Route>
          <Route path="/*" element={<PagInicio />} />
        </Routes>
      </div>
    </div>
  );
};

export default Contenedor;
