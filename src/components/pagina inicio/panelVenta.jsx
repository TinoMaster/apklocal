import React from "react";
import EsteAño from "./panel Ventas/esteAño";
import EsteMes from "./panel Ventas/esteMes";
import Inventario from "./panel Ventas/inventario";

const PanelVentas = () => {
  return (
    <div className="flex flex-col justify-between w-full md:w-full lg:w-3/4 md:h-full py-3">
      <div className="flex flex-col md:flex-row md:h-1/2 w-full">
        <EsteMes />
        <EsteAño />
      </div>
      <div className="flex w-full py-4 rounded-md md:h-1/2">
        <Inventario />
      </div>
    </div>
  );
};

export default PanelVentas;
