import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const RenderDispositivos = ({
  ArrayDispositivos,
  mirones,
  handlerSearchDispositivos,
}) => {
  return (
    <div className="w-full h-full overflow-hidden">
      {/* Buscador */}
      <div className="w-full flex items-center p-1 bg-white/5 rounded-md shadow-md bg-violet-400 overflow-hidden">
        <FontAwesomeIcon icon={faSearch} className="p-2 text-green-400" />
        <input
          onChange={handlerSearchDispositivos}
          type="text"
          className="w-full rounded-md focus:outline-none p-1 shadow-inner shadow-black/20"
        />
      </div>
      {/* Render Dispositivos */}
      <div className="w-full h-full flex flex-col">
        <div className="w-full flex p-2">
          <p className="w-4/6 text-center py-2 bg-white/5 rounded-l-md shadow-md">
            {" "}
            Nombre
          </p>
          <p className="w-1/6 text-center py-2 bg-white/5 shadow-md">
            {" "}
            Visitas
          </p>
          <p className="w-1/6 text-center py-2 bg-white/5 rounded-r-md shadow-md">
            {" "}
            Gasto
          </p>
        </div>
        {/* Render Dispositivos */}
        <div className="w-full h-full overflow-auto">
          {ArrayDispositivos(mirones)?.length > 0 &&
            ArrayDispositivos(mirones)?.map((el) => (
              <div key={el[0]} className="w-full flex px-2">
                <p className="w-4/6 text-center py-2 rounded-l-md">{el[0]}</p>
                <p className="w-1/6 text-center py-2">{el[1].cont}</p>
                <p className="w-1/6 text-center py-2 rounded-r-md">
                  {" "}
                  {`$${el[1].pago}`}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
