import React from "react";
import PanelVentas from "./panelVenta";
import PanelEstadisticas from "./panelEstadistica";


const PagInicio = () => {
  return (
    <div className="flex flex-col max-w-1080p max-h-1080p m-auto overflow-auto bg-white md:flex-row w-full h-full md:p-3">
      <PanelEstadisticas />
      <PanelVentas />
    </div>
  );
};

export default PagInicio;
