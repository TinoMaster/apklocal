import {
  faCalendar,
  faDollar,
  faScaleBalanced,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const EstadisticasVentas = ({
  mejorVenta,
  bdCuadre,
  mejorYpeorMes,
  mejorTurno,
}) => {
  return (
    <>
      <div className="m-2 shadow-md p-2 rounded-md flex flex-wrap justify-between bg-white/5">
        <h4 className="md:text-lg font-serif flex">
          <FontAwesomeIcon
            className="text-white bg-gray-500 mr-2 rounded-full p-1"
            icon={faScaleBalanced}
          />
          Mejor Venta
        </h4>
        <p className="text-sm md:text-base text-green-700">
          <FontAwesomeIcon icon={faDollar} /> {mejorVenta(bdCuadre).miron}
        </p>
        <div className="w-full flex">
          <div className="w-1/2 flex p-3 justify-center">
            <p className="text-xs font-serif">Fecha:</p>
            <p className="text-xs ml-1 text-violet-600">
              {mejorVenta(bdCuadre).fecha}
            </p>
          </div>
          <div className="w-1/2 flex p-3 justify-center">
            <p className="text-xs font-serif">Turno:</p>
            {mejorVenta(bdCuadre) && (
              <p className="text-xs ml-1 text-violet-600">{`${
                mejorVenta(bdCuadre).turno.trabajador1
              } y ${mejorVenta(bdCuadre).turno.trabajador2}`}</p>
            )}
          </div>
        </div>
      </div>
      {/* Mejor Mes */}
      <div className="m-2 shadow-md p-2 rounded-md flex flex-wrap justify-between bg-white/5">
        <h4 className="md:text-lg 0 font-serif flex">
          <FontAwesomeIcon
            className="text-white bg-gray-500 mr-2 rounded-full p-1"
            icon={faCalendar}
          />
          Mejor Mes
        </h4>
        <p className="text-sm md:text-base font-serif text-green-700">
          {mejorYpeorMes(bdCuadre)[0] ? mejorYpeorMes(bdCuadre)[0] : 0}
        </p>
        <div className="w-full flex">
          <div className="w-full flex p-3 justify-center">
            <p className="text-xs font-serif">Venta:</p>
            <p className="text-xs ml-1 text-violet-600">{`$${
              mejorYpeorMes(bdCuadre)[1]
            }`}</p>
          </div>
        </div>
      </div>
      {/* Peor mes */}
      <div className="m-2 shadow-md p-2 rounded-md flex flex-wrap justify-between bg-white/5">
        <h4 className="md:text-lg font-serif flex">
          <FontAwesomeIcon
            className="text-white bg-gray-500 mr-2 rounded-full p-1"
            icon={faCalendar}
          />
          Peor Mes
        </h4>
        <p className="text-sm md:text-base text-red-600/80 font-serif">
          {mejorYpeorMes(bdCuadre)[2]}
        </p>
        <div className="w-full flex">
          <div className="w-full flex p-3 justify-center">
            <p className="text-xs font-serif">Venta:</p>
            <p className="text-xs ml-1 text-violet-600">{`$${
              mejorYpeorMes(bdCuadre)[3]
            }`}</p>
          </div>
        </div>
      </div>
      {/* Mejor Turno */}
      <div className="m-2 shadow-md p-2 rounded-md flex flex-wrap justify-between bg-white/5">
        <h4 className="md:text-lg font-serif flex">
          <FontAwesomeIcon
            className="text-white bg-gray-500 mr-2 rounded-full p-1"
            icon={faUserTie}
          />
          Mejor Turno
        </h4>
        <p className="text-sm md:text-base text-green-700">
          {mejorTurno(bdCuadre)[0]}
        </p>
        <div className="w-full flex">
          <div className="w-full flex p-3 justify-center">
            <p className="text-xs font-serif">Vendido:</p>
            <p className="text-xs ml-1 text-violet-600">
              {mejorTurno(bdCuadre)[1]}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
