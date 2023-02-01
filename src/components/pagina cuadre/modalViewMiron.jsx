import { faCalendarDays, faFile } from "@fortawesome/free-regular-svg-icons";
import { faCashRegister, faDatabase, faDisplay, faMemory, faWeight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ModalPortal } from "../modalPortal/modalPortal";

export const ModalViewMiron = () => {
  return (
    <ModalPortal>
      <div className="w-full h-full md:w-1/3 md:h-5/6 md:rounded p-2 font-serif text-sm bg-lightMode overflow-auto">
        {/* Caja de resultados */}
        <div className="w-full flex flex-wrap">
          {/* titulo pagina */}
          <h2 className="w-full text-center py-2 flex justify-center text-slate-100 items-center bg-primary/70 shadow-md rounded-md">
            <FontAwesomeIcon className="mr-1 p-1 rounded-md" icon={faDatabase} /> Desglose Miron
          </h2>
          {/* Encabezado */}
          <div className="w-1/2 flex flex-wrap justify-center px-1">
            <p className="w-full flex items-center p-1"><FontAwesomeIcon className="mr-1 bg-teal-500 p-1 rounded-full text-slate-200 shadow shadow-black/50" icon={faDisplay}/> PC1 y PC2</p>
            <p className="w-full flex items-center p-1">
              <FontAwesomeIcon className="mr-1 bg-green-500 p-1 rounded-full text-slate-200 shadow shadow-black/50" icon={faCalendarDays} /> Fecha: 7/2/2023
            </p>
            <p className="w-full flex items-center p-1">
              <FontAwesomeIcon className="mr-1 bg-lime-500 p-1 rounded-full text-slate-200 shadow shadow-black/50" icon={faMemory} /> Dispositivos: 58
            </p>
            <p className="w-full flex items-center p-1">
              <FontAwesomeIcon className="mr-1 bg-yellow-500 p-1 rounded-full text-slate-200 shadow shadow-black/50" icon={faWeight} /> Volumen: 1340 GB
            </p>
            <p className="w-full flex items-center p-1">
              <FontAwesomeIcon className="mr-1 bg-orange-500 p-1 rounded-full text-slate-200 shadow shadow-black/50" icon={faFile} /> Ficheros: 15000 
            </p>
            <p className="w-full flex items-center p-1">
              <FontAwesomeIcon className="mr-1 bg-red-500 p-1 rounded-full text-slate-200 shadow shadow-black/50" icon={faCashRegister} /> Venta total: $ 1340
            </p>
          </div>
          {/* Botones */}
          <div className="w-1/2 flex flex-col py-3 px-1">
                <button className="p-2 mt-2 bg-red-200 rounded-md shadow hover:bg-red-300 transition-colors">Exportar a PDF</button>
                <button className="p-2 mt-2 bg-slate-200 rounded-md shadow hover:bg-slate-300 transition-colors">Exportar a TXT</button>
                <button className="p-2 mt-2 bg-green-200 rounded-md shadow hover:bg-green-300 transition-colors">Exportar a EXCEL</button>
          </div>
          {/* Caja de dispositivos */}
          <div className="w-full">
            {/* Encabezado lista */}
            <div className="w-full bg-white/5 flex flex-wrap shadow text-xs relative rounded-md">
                <p className="w-full text-center py-1 text-green-500">Nuevo vol (L:)</p>
                <p className="w-1/3 py-1 text-center">Tipo: Disco 1 TB</p>
                <p className="py-1 absolute right-2 text-slate-700">16:25</p>
                <p className="w-1/3 py-1 text-center">Volumen: 26.2 GB</p>
                <p className="w-1/3 py-1 text-center">Copiados: 41 ficheros</p>
                <p className="w-1/3 py-1 text-center">Borrados: 0 ficheros</p>
                <p className="w-1/3 py-1 text-center">Pago: 100$</p>
                <p className="w-1/3 py-1 text-center">Cobro: 0$</p>
                <p className="w-full text-center py-1"> "Esto es una prueba a ver que sale"</p>
            </div>
          </div>
        </div>
      </div>
    </ModalPortal>
  );
};
