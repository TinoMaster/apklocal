import React from "react";
import img from "../../assets/img/Bryam.jpg";

const PagPersonal = () => {
  return (
    <div className="flex p-4 flex-wrap w-full h-full">
      {/* Contenedor de Trabajador */}
      <div className="w-2/5 h-2/5  rounded-lg shadow-lg flex flex-col">
        {/* Primera caja superior */}
        <div className="h-1/2 flex  rounded-t-lg">
          {/* Caja nombre descripcion */}
          <div className="w-3/4 flex flex-wrap">
            <h4 className="w-full h-1/3 p-2 text-center text-green-600 font-serif font-semibold">
              Bryam Gonzales Cueto
            </h4>
            {/* Direccion */}
            <div className="w-1/2 h-1/3 flex flex-col">
              <p className=" text-center font-serif text-sm text-slate-700 font-semibold">
                Direccion
              </p>
              <p className="text-center text-sm text-slate-700">
                41a num 7232 entre 72b y 74
              </p>
            </div>
            {/* Municipio */}
            <div className="w-1/2 h-1/3 flex flex-col">
              <p className="text-center font-serif text-sm text-slate-700 font-semibold">
                Municipio
              </p>
              <p className="text-center text-sm text-slate-700">Playa</p>
            </div>
            {/* Telefono */}
            <div className="w-1/2 h-1/3 flex flex-col">
              <p className="text-center font-serif text-sm text-slate-700 font-semibold">
                Telefono
              </p>
              <p className="text-center text-sm text-slate-700">
                53862873 y/o 79854545
              </p>
            </div>
            {/* #Carnet */}
            <div className="w-1/2 h-1/3 flex flex-col">
              <p className="text-center font-serif text-sm text-slate-700 font-semibold">
                ID
              </p>
              <p className="text-center text-sm text-slate-700">90020628901</p>
            </div>
          </div>
          {/* Caja imagen */}
          <div className="flex flex-wrap w-1/4 justify-center items-center">
            <img className="w-10/12 h-3/4 shadow-md border-2 border-green-300" src={img} alt="" />
          </div>
        </div>

        {/* caja inferior */}
        <div className="h-1/2 flex  rounded-b-lg"></div>
      </div>
    </div>
  );
};

export default PagPersonal;
