import { faClose, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import AuthContext from "../../../../context/authContext";
import { ModalPortal } from "../../../modalPortal/modalPortal";

export const RenderDispositivos = ({ dispositivos }) => {
  const [search, setSearch] = useState("");
  const [modalDescription, setModalDescription] = useState([]);
  let filtro = [];
  const { darkMode } = useContext(AuthContext);

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
      {modalDescription.length > 0 && (
        <ModalPortal>
          <div
            className={`w-full h-1/2 mx-2 max-w-[500px] max-h-[450px] rounded-md shadow-md shadow-black/50 text-sm ${
              darkMode
                ? "bg-darkMode text-lightMode"
                : "bg-lightMode text-darkMode"
            } relative`}
          >
            <button
              onClick={() => setModalDescription([])}
              className="absolute top-2 right-2 bg-red-400/80 px-2 py-1 flex items-center rounded-full text-slate-200"
            >
              {" "}
              <FontAwesomeIcon icon={faClose} />
            </button>
            {/* Descripcion */}
            <div className="flex flex-col h-full justify-start items-start p-2 font-serif">
              {/* dispositivo */}
              <div className="w-full flex flex-col items-center">
                <p className="">Dispositivo:</p>
                <p className="text-secondary">{modalDescription[0]}</p>
              </div>
              {/* visitas */}
              <div className="w-full flex flex-wrap justify-between items-center">
                <p className="p-2">Visitas:</p>
                <p className="p-2">{modalDescription[1].fechas.length}</p>
                <div className="w-full shadow-inner shadow-black/20 p-2 rounded-md h-[130px] overflow-auto">
                  {modalDescription[1].fechas.map((el) => (
                    <p>{el}</p>
                  ))}
                </div>
              </div>
              {/* conexiones */}
              <div className="w-full flex flex-wrap justify-between items-center">
                <p className="p-2">Conexiones:</p>
                <p className="p-2">{modalDescription[1].cont}</p>
                <div className="w-full shadow-inner shadow-black/20 p-2 rounded-md h-[130px] overflow-auto">
                  {modalDescription[1].horas.map((el) => (
                    <p>{el}</p>
                  ))}
                </div>
              </div>
              {/* Pago */}
              <div className="w-full flex justify-end">
                <p className="p-2">Gasto total:</p>
                <p className="p-2 text-secondary">{modalDescription[1].pago}</p>
              </div>
            </div>
          </div>
        </ModalPortal>
      )}
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
              onClick={() => setModalDescription(el)}
            >
              <p className="absolute">{`${index + 1}:`}</p>
              <p className="w-4/6 text-center py-2 rounded-l-md ml-5">
                {el[0]}
              </p>
              <p className="w-1/6 text-center py-2">{`${el[1].fechas.length} (${el[1].cont})`}</p>
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
