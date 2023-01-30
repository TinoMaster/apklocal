import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { PrimaryLoader } from "../loaders/primaryLoader";

const CajaProductos = ({ mirones, loaderMirones, handlerChangeMirones }) => {
  return (
    <div className="flex flex-col w-full mb-10 lg:m-0 justify-center lg:w-1/2">
      <h5 className="w-full text-center font-semibold text-sm md:text-lg font-serif p-3">
        Excel Miron
      </h5>
      <div className="w-full h-full flex flex-wrap justify-center items-start">
        <div className="flex z-10 justify-center mr-2 flex-wrap">
          <label
            htmlFor="file1"
            className="p-1 bg-white/5 rounded-md text-xs font-serif shadow-md hover:cursor-pointer hover:bg-white/10 mt-1"
          >
            Archivo PC1
          </label>
          <input
            type="file"
            name="pc1"
            id="file1"
            accept=".xls,.xlsx"
            className="hidden"
            onChange={handlerChangeMirones}
          />
          {mirones?.pc1Reporte && (
            <div className="w-full text-center">
              <FontAwesomeIcon className="text-green-400" icon={faCheck} />
            </div>
          )}
        </div>
        {loaderMirones && (
          <div className="w-12 h-12 z-20 absolute -translate-x-3">
            <PrimaryLoader />
          </div>
        )}
        <div className="flex z-10 justify-center ml-2 flex-wrap">
          <label
            htmlFor="file2"
            className="p-1 bg-white/5 rounded-md text-xs font-serif shadow-md hover:cursor-pointer hover:bg-white/10 mt-1"
          >
            Archivo PC2
          </label>
          <input
            type="file"
            name="pc2"
            id="file2"
            accept=".xls,.xlsx"
            className="hidden"
            onChange={handlerChangeMirones}
          />
          {mirones?.pc2Reporte && (
            <div className="w-full text-center">
              <FontAwesomeIcon className="text-green-400" icon={faCheck} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CajaProductos;
