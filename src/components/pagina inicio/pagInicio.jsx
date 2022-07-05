import React from "react";
import PanelVentas from "./panelVenta";
import PanelEstadisticas from "./panelEstadistica";


const PagInicio = () => {
  return (
    <div className="flex flex-col  overflow-y-scroll md:overflow-hidden bg-gray-50 md:flex-row w-full h-full p-3">
      <PanelEstadisticas />
      <PanelVentas />
    </div>
  );
};

export default PagInicio;
