import React from "react";
import { ModalPortal } from "../modalPortal/modalPortal";

export const ModalViewVentas = ({ dia, setViewDay }) => {
  return (
    <ModalPortal>
      <div className="flex z-50 flex-col justify-center items-center rounded-lg w-full h-full fixed md:absolute bg-black/50">
        <div className="flex flex-col justify-center w-11/12 h-10/12 md:w-2/3 lg:w-1/4 relative m-auto bg-white rounded-lg shadow-2xl shadow-white/30 items-center">
          {/* fecha */}
          <p className="absolute bg-primary text-lightMode top-2 text-xs font-serif p-2 rounded-md left-2 ">
            {dia.fecha}
          </p>

          <div className="flex flex-col w-2/4 m-auto justify-center items-center">
            <h5 className="inline my-3 py-1 px-3 text-xs bg-green-600 font-serif font-semibold text-white rounded-lg shadow-lg shadow-yellow-400/20">
              Hojas
            </h5>
            <p className="text-xs font-semibold text-slate-500">{`test b/n ${
              dia.hasOwnProperty("hojas") ? dia.hojas.bn : 0
            }`}</p>
            <p className="text-xs font-semibold text-slate-500">{`test color ${
              dia.hasOwnProperty("hojas") ? dia.hojas.color : 0
            }`}</p>
            <p className="text-xs font-semibold text-violet-500">{`vendidas b/n ${
              dia.hasOwnProperty("hojas")
                ? dia.hojas.rest_bn
                  ? dia.hojas.rest_bn
                  : 0
                : 0
            }`}</p>
            <p className="text-xs font-semibold text-violet-500">{`vendidas color ${
              dia.hasOwnProperty("hojas")
                ? dia.hojas.rest_color
                  ? dia.hojas.rest_color
                  : 0
                : 0
            }`}</p>
            <p className="text-xs font-semibold text-green-500">{`total ${
              dia.hasOwnProperty("hojas")
                ? dia.hojas.rest_bn
                  ? dia.hojas.rest_bn
                  : 0 + dia.hojas.rest_color
                  ? dia.hojas.rest_color
                  : 0
                : 0
            }`}</p>
          </div>

          <div className="flex flex-col items-center h-full">
            <div className="w-1/2 flex flex-col rounded-b-lg items-center">
              <h5 className="inline my-3 text-xs bg-green-600 font-serif font-semibold text-white py-1 px-3 rounded-lg shadow-lg shadow-yellow-400/20">
                Salario
              </h5>
              <p className="font-semibold text-xs text-green-800">
                {dia?.turno?.trabajador1}
              </p>
              <input
                type="text"
                className="text-center text-xs font-serif focus:outline-none text-zinc-800 bg-transparent"
                id="salario_principal"
                value={
                  dia?.turno?.trabajador1 === "Jorge" ||
                  dia?.turno?.trabajador1 === "Bryam"
                    ? `$ ${dia.salario1}`
                    : `$ ${dia.salario1}`
                }
                readOnly
              />

              {dia?.turno?.trabajador2 !== "" && (
                <p className="font-semibold text-xs text-green-800">
                  {dia?.turno?.trabajador2}
                </p>
              )}
              {dia?.turno?.trabajador2 !== "" && (
                <input
                  type="text"
                  className="text-center text-xs font-serif focus:outline-none text-zinc-800 bg-transparent"
                  id="salario_secundario"
                  value={`$ ${dia.salario2}`}
                  readOnly
                />
              )}
            </div>

            <div className="flex flex-wrap justify-center p-2">
              <h5 className="inline py-1 px-3 text-xs bg-green-600 font-serif font-semibold text-white rounded-lg shadow-lg shadow-yellow-400/20">
                Cuadre
              </h5>
              <div className="w-full text-center">
                <p className="font-semibold text-green-800 text-sm">Miron</p>
                <input
                  className="text-center focus:outline-none text-xs font-serif font-semibold text-zinc-800 bg-transparent"
                  type="text"
                  id="result_miron"
                  value={dia.miron}
                  readOnly
                />
              </div>

              <div className="w-full text-center">
                <p className="font-semibold text-green-800 text-sm">Dueño</p>
                <input
                  className="font-semibold text-center text-xs focus:outline-none font-serif text-zinc-800 bg-transparent"
                  type="text"
                  id="result_dueño"
                  value={dia.dueño}
                  readOnly
                />
              </div>

              <div className="w-full text-center">
                <p className="font-semibold text-green-800 text-sm">Fondo</p>
                <input
                  className="font-semibold text-center text-xs focus:outline-none font-serif text-zinc-800 bg-transparent"
                  type="text"
                  id="result_fondoHoy"
                  value={dia.fondo}
                  readOnly
                />
              </div>
            </div>
          </div>

          <div className="p-3 rounded-lg flex justify-center">
            <input
              onClick={(e) => {
                e.stopPropagation();
                setViewDay("close");
              }}
              type="button"
              className="py-1 px-3 mx-2 bg-red-500 hover:cursor-pointer text-sm hover:bg-red-600 hover:shadow-xl text-white shadow-md shadow-red-500/30 rounded-lg"
              value="Cerrar"
            />
          </div>
        </div>
      </div>
    </ModalPortal>
  );
};
