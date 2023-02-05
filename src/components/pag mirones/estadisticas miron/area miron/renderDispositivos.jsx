import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const RenderDispositivos = () => {
  return (
    <div className="w-full">
      {/* Buscador */}
      <div className="w-full flex items-center p-1 bg-white/5 rounded-md shadow-md bg-violet-400">
        <FontAwesomeIcon icon={faSearch} className="p-2 text-green-400" />
        <input
          type="text"
          className="w-full rounded-md focus:outline-none p-1 shadow-inner shadow-black/20"
        />
      </div>
      {/* Render Dispositivos */}
      <div className="w-full flex flex-col">
        <div className="w-full flex p-2">
          <p className="w-4/6 text-center py-2 bg-white/5 rounded-l-md shadow-md"> Nombre</p>
          <p className="w-1/6 text-center py-2 bg-white/5 shadow-md"> Visitas</p>
          <p className="w-1/6 text-center py-2 bg-white/5 rounded-r-md shadow-md"> Gasto</p>
        </div>
        {/* Render Dispositivos */}
        <div className="w-full flex px-2">
          <p className="w-4/6 text-center py-2 rounded-l-md"> Galaxy S6 Note</p>
          <p className="w-1/6 text-center py-2"> 20</p>
          <p className="w-1/6 text-center py-2 rounded-r-md"> $6954</p>
        </div>
      </div>
    </div>
  );
};
