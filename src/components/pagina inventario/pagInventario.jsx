import React from "react";
import Insumos from "./insumos";
import MedioBasico from "./medio-basico";

const PagInventario = () => {
  return (
    <div className="relative max-w-1080p m-auto w-full flex flex-wrap h-screen">
      {/* Caja Insumos */}
      <Insumos />
      {/* medio Basico */}
      <MedioBasico />
    </div>
  );
};

export default PagInventario;
