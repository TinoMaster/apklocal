import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export const RenderDispositivos = ({ dispositivos }) => {
  const [search, setSearch] = useState("");
  let filtro = [];

  if (search.length === 0) {
    filtro = dispositivos;
  } else {
    filtro = dispositivos.filter((el) => {
      const text = el[0].toLowerCase();
      const searchText = search.toLowerCase();
      return text.includes(searchText);
    });
  }

  return (
    <div className="w-full h-full overflow-hidden">
      {/* Buscador */}
      <div className="w-full flex items-center p-1 bg-white/5 rounded-md text-slate-800 shadow-md bg-violet-400 overflow-hidden">
        <FontAwesomeIcon icon={faSearch} className="p-2 text-green-400" />
        <input
          onChange={(e) => setSearch(e.target.value)}
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
        <div className="w-full h-full overflow-auto pb-14">
          {filtro?.map((el, index) => (
            <div
              key={`${el[0]}${el[1].pago}`}
              className="w-full flex px-2 relative items-center hover:cursor-pointer hover:bg-white/5"
            >
              <p className="absolute">{`${index + 1}:`}</p>
              <p className="w-4/6 text-center py-2 rounded-l-md ml-5">
                {el[0]}
              </p>
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
