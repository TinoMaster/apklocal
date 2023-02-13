import React, { useState } from "react";
import { usePagMirones } from "../../hooks/usePagMirones";
import { SecondaryLoader } from "../loaders/secondaryLoader";
import { ChoiceMonth } from "./choiceMonth";
import { AreaCopias } from "./estadisticas miron/area copias";
import { AreaMiron } from "./estadisticas miron/area miron";
import { TablaMirones } from "./tablaMirones";

export const PagMirones = () => {
  const [optionsShow, setOptionsShow] = useState("mirones");
  const { states, functions } = usePagMirones();
  return (
    <div className="flex flex-wrap w-full max-w-1080p max-h-1080p m-auto overflow-hidden h-full lg:py-6 rounded-lg relative ">
      {/* Menu movil para opciones de la pagina */}
      <div className="flex justify-between items-start m-1 w-full lg:hidden">
        <p
          onClick={() => setOptionsShow("mirones")}
          className={`text-center w-1/3 py-2 ${
            optionsShow === "mirones" &&
            "bg-violet-200 rounded-md shadow-md text-slate-900"
          }`}
        >
          Mirones
        </p>
        <p
          onClick={() => setOptionsShow("dispositivos")}
          className={`text-center w-1/3 py-2 ${
            optionsShow === "dispositivos" &&
            "bg-violet-200 rounded-md shadow-md text-slate-900"
          }`}
        >
          Dispositivos
        </p>
        <p
          onClick={() => setOptionsShow("copias")}
          className={`text-center w-1/3 py-2 ${
            optionsShow === "copias" &&
            "bg-violet-200 rounded-md shadow-md text-slate-900"
          }`}
        >
          Copias
        </p>
      </div>
      {/* Caja mirones */}
      <div
        className={`w-full h-full lg:w-1/3 bg-white/5 absolute lg:relative shadow-inner shadow-black/20 mt-12 lg:m-0 overflow-auto ${
          optionsShow === "mirones"
            ? "translate-x-0 transition-all"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Loader */}
        {states?.loaderPageMiron && (
          <div className="w-full h-full absolute flex justify-center items-center">
            <div className="bg-black/10 rounded-md p-1">
              <SecondaryLoader />
            </div>
          </div>
        )}
        {/* Mirones */}
        <div className="w-full flex flex-col">
          {/* Select Month */}
          <ChoiceMonth setFechaMirones={states.setFechaMirones} />
          {/* Select Year */}
          <div className="flex justify-between items-center">
            <select
              name=""
              id=""
              className="p-1 border-2 rounded-md ml-2  text-slate-700 focus:outline-none"
            >
              {states.añosDisponiblesMiron.map((el) => (
                <option key={el} value="">{el}</option>
              ))}
            </select>
            <p className="self-center right-5 absolute block text-sm text-violet-400/80 font-serif">
              {states.fechaMirones}
            </p>
          </div>
          {/* Tabla de mirones */}
          <TablaMirones
            mirones={states.mirones.filter((el) =>
              el.fecha.match(states.fechaMirones)
            )}
            loader={states.loaderPageMiron}
          />
        </div>
      </div>
      {/* Area estadisticas miron */}
      <div
        className={`w-full h-full lg:w-1/3 bg-white/5 absolute lg:relative shadow-inner shadow-black/20 mt-12 lg:m-0 overflow-auto ${
          optionsShow === "dispositivos"
            ? "translate-x-0 transition-all"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <AreaMiron functions={functions} states={states} />
      </div>
      <div
        className={`w-full h-full lg:w-1/3 bg-white/5 absolute lg:relative shadow-inner shadow-black/20 mt-12 lg:m-0 overflow-auto ${
          optionsShow === "copias"
            ? "translate-x-0 transition-all"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <AreaCopias />
      </div>
    </div>
  );
};
