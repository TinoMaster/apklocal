import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { usePagTrabajador } from "../../hooks/usePagTrabajador";
import Trabajador from "./trabajador";

const PagPersonal = () => {
  const { modalWorker, setModalWorker, handlerChangeWorker } =
    usePagTrabajador();

  return (
    <div className="flex max-w-1080p relative max-h-1080p justify-around flex-wrap w-full h-full overflow-auto">
      <button
        onClick={() => !modalWorker && setModalWorker(true)}
        className="w-10 h-10 bg-green-500 absolute rounded-full text-xl text-white bottom-5 md:bottom-10 right-5 shadow-lg shadow-green-600/40"
      >
        <FontAwesomeIcon icon={faCirclePlus} />
      </button>
      {modalWorker && (
        <div className="fixed lg:absolute w-full h-full bg-black/80 flex items-center">
          {/* Caja agregar */}
          <div className="w-11/12 m-auto h-96 md:w-10/12 p-2 lg:w-4/12 md:h-4/12 overflow-hidden md:mt-0 bg-slate-100 rounded-2xl shadow-xl flex flex-col">
            {/* Primera caja superior */}
            <div className="h-3/5 flex rounded-t-lg bg-white rounded-b-2xl shadow-lg shadow-white/40">
              {/* Caja imagen */}
              <div className="flex flex-wrap w-1/4 h-full justify-center items-center">
                <div className="w-full h-1/2 m-auto border-2 border-violet-300 bg-black/10 shadow-md"></div>
              </div>
              {/* Caja nombre descripcion */}
              <div className="w-3/4 h-full flex flex-wrap">
                <label className="w-full h-1/5 p-2 text-sm md:text-base text-center text-slate-700 font-serif font-semibold">
                  Nombre
                  <input type="text" className="input-worker" />
                </label>
                {/* Direccion */}
                <div className="w-11/12 h-1/5 flex flex-col m-auto">
                  <label className=" text-center font-serif text-xs  text-slate-700 font-semibold">
                    Direccion
                    <input className="input-worker" type="text" />
                  </label>
                </div>
                {/* Municipio */}
                <div className="w-1/2 h-1/5 flex flex-col">
                  <label className="text-center font-serif text-xs  text-slate-700 font-semibold">
                    Municipio
                    <input className="input-worker" type="text" />
                  </label>
                </div>
                {/* Telefono */}
                <div className="w-1/2 h-1/5 flex flex-col">
                  <label className="text-center font-serif text-xs  text-slate-700 font-semibold">
                    Telefono
                    <input className="input-worker" type="number" />
                  </label>
                </div>
                {/* #Carnet */}
                <div className="w-10/12 m-auto h-1/5 flex flex-col">
                  <label className="text-center font-serif text-xs  text-slate-700 font-semibold">
                    ID
                    <input className="input-worker" type="text" />
                  </label>
                </div>
              </div>
            </div>

            {/* caja inferior */}
            <div className="h-2/5 flex flex-col rounded-b-lg">
              <h4 className="h-1/3 w-full text-xs  p-2 text-slate-700 font-serif font-semibold text-center">
                Info:
              </h4>
              <div className="h-full w-full flex flex-wrap">
                {/* Correo electronico */}
                <div className="w-full md:w-1/3 flex flex-col items-center">
                  <label className="text-xs text-center text-slate-700 font-serif font-semibold">
                    Correo
                    <input className="input-worker" type="email" required />
                  </label>
                </div>
                {/* Usuario */}
                <div className="w-1/2 md:w-1/3 flex flex-col items-center">
                  <label className="text-xs text-center text-slate-700 font-serif font-semibold">
                    Usuario
                    <input className="input-worker" type="text" />
                  </label>
                </div>
                {/* Contraseña */}
                <div className="w-1/2 md:w-1/3 flex flex-col items-center">
                  <label className="text-xs text-center text-slate-700 font-serif font-semibold">
                    Contraseña
                    <input type="password" className="input-worker" />
                  </label>
                </div>
                <input type="submit" value="Registrar" className="bg-violet-400 hover:bg-violet-500 w-10/12 m-auto rounded-md shadow-md font-serif text-sm p-1 text-white"/>
              </div>
            </div>
          </div>
        </div>
      )}
      <Trabajador />
      <Trabajador />
      <Trabajador />
    </div>
  );
};

export default PagPersonal;
