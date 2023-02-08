import React, { useState } from "react";
import { RenderDispositivos } from "./renderDispositivos";
import { RenderGeneral } from "./renderGeneral";

export const AreaMiron = ({ functions, states }) => {
  const [optionRender, setOptionRender] = useState("general");
  const {
    mejoresDiasSemana,
    dispositivosMasCopian,
    ArrayDispositivos,
    handlerSearchDispositivos,
  } = functions;
  const { mirones } = states;

  return (
    <div className="w-full lg:h-full flex flex-col items-start font-serif p-1 overflow-auto">
      <h2 className="w-full text-center p-3 mt-1 bg-white/5 shadow-md rounded-md">
        Estadisticas y Dispositivos
      </h2>
      {/* Botones choice options */}
      <div className="w-full flex p-1 justify-end items-center text-sm my-2 ">
        <input type="radio" name="general" id="general" className="hidden" />
        <label
          htmlFor="general"
          onClick={() => setOptionRender("general")}
          className={`p-2  ${
            optionRender === "general"
              ? "bg-violet-500 shadow-violet-500/50 text-slate-100"
              : "bg-white/5"
          } rounded-l-md shadow-md hover:cursor-pointer `}
        >
          General
        </label>
        <input
          type="radio"
          name="dispositivos"
          id="dispositivos"
          className="hidden"
        />
        <label
          htmlFor="dispositivos"
          onClick={() => setOptionRender("dispositivos")}
          className={`p-2  ${
            optionRender === "dispositivos"
              ? "bg-violet-500 shadow-violet-500/50 text-slate-100"
              : "bg-white/5"
          } rounded-r-md shadow-md hover:cursor-pointer `}
        >
          Dispositivos
        </label>
      </div>
      {/* renders options */}
      {optionRender === "general" && (
        <RenderGeneral
          mejoresDiasSemana={mejoresDiasSemana}
          dispositivosMasCopian={dispositivosMasCopian}
          mirones={mirones}
        />
      )}
      {optionRender === "dispositivos" && (
        <RenderDispositivos
          ArrayDispositivos={ArrayDispositivos}
          mirones={mirones}
          handlerSearchDispositivos={handlerSearchDispositivos}
        />
      )}
    </div>
  );
};
