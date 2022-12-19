import React from "react";
import { Container } from "./container";

export const EstadisticasTienda = () => {
  return (
    <div className="w-full h-full flex flex-col">
      {/* Menu */}
      <div className="w-full bg-slate-200 p-2 rounded-md flex justify-between items-baseline">
        <h2 className="text-xl font-serif text-slate-600 font-semibold">Estadisticas</h2>
        {/* Links */}
        <div className="flex">
          <label className="flex p-2" htmlFor="resumen">
            <p>Resumen</p>
            <input className="hidden" type="radio" name="estadistica" id="resumen" />
          </label>
          <label className="flex p-2" htmlFor="venta">
            <p>Venta</p>
            <input className="hidden" type="radio" name="estadistica" id="venta" />
          </label>
        </div>
      </div>
      {/* Container */}
      <Container />
    </div>
  );
};
