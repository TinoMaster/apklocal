import React from "react";
import Insumos from "./insumos";
import MedioBasico from "./medio-basico";

const PagInventario = () => {
  return (
    <div className="">
      <div className="relative w-full flex flex-wrap h-screen overflow-scroll">
        {/* Caja Insumos */}
        <Insumos />
        {/* medio Basico */}
        <MedioBasico />
      </div>
    </div>
  );
};

export default PagInventario;
