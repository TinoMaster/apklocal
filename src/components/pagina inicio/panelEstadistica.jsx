import {
  faCalendar,
  faDollar,
  faHouse,
  faScaleBalanced,
  faUser,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useEstadisticasPagInicio } from "../../hooks/useEstadisticasPagInicio";

const PanelEstadisticas = () => {
  const {
    totalRecaudado,
    bdCuadre,
    totalRecaudadoDueño,
    mejorVenta,
    mejorYpeorMes,
  } = useEstadisticasPagInicio();

  return (
    <div className="w-full md:w-4/5 m-auto lg:w-1/4 h-full bg-white p-2 flex flex-col rounded-md">
      <h4 className="m-1 text-md font-medium text-gray-500">
        Estadisticas generales
      </h4>

      <div className="p-1">
        {/*Balance Total  */}
        <div className="m-2 p-2 rounded-md flex justify-between">
          <h4 className="md:text-lg text-indigo-700 font-serif flex">
            <FontAwesomeIcon
              className="text-white bg-violet-500 mr-1 rounded-full p-1"
              icon={faHouse}
            />
            Balance total
          </h4>
          <p className="text-sm md:text-base text-indigo-700">
            <FontAwesomeIcon icon={faDollar} /> {totalRecaudado(bdCuadre)}
          </p>
        </div>
        {/* Dueño */}
        <div className="m-2 mb-6 shadow-md p-2 rounded-md flex justify-between">
          <h4 className="md:text-lg text-emerald-700 font-serif flex">
            <FontAwesomeIcon
              className="text-white bg-emerald-400 mr-2 rounded-full py-1 px-2"
              icon={faUser}
            />
            Dueño
          </h4>
          <p className="text-sm md:text-base text-emerald-700">
            <FontAwesomeIcon icon={faDollar} />
            {totalRecaudadoDueño(bdCuadre)}
          </p>
        </div>
        {/* Mejor Venta */}
        <div className="m-2 shadow-md p-2 rounded-md flex flex-wrap justify-between">
          <h4 className="md:text-lg text-gray-700 font-serif flex">
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
              <p className="text-xs font-serif text-slate-700">Fecha:</p>
              <p className="text-xs ml-1 text-violet-600">
                {mejorVenta(bdCuadre).fecha}
              </p>
            </div>
            <div className="w-1/2 flex p-3 justify-center">
              <p className="text-xs font-serif text-slate-700">Turno:</p>
              {mejorVenta(bdCuadre) && (
                <p className="text-xs ml-1 text-violet-600">{`${
                  mejorVenta(bdCuadre).turno.trabajador1
                } y ${mejorVenta(bdCuadre).turno.trabajador2}`}</p>
              )}
            </div>
          </div>
        </div>
        {/* Mejor Mes */}
        <div className="m-2 shadow-md p-2 rounded-md flex flex-wrap justify-between">
          <h4 className="md:text-lg text-gray-700 font-serif flex">
            <FontAwesomeIcon
              className="text-white bg-gray-500 mr-2 rounded-full p-1"
              icon={faCalendar}
            />
            Mejor Mes
          </h4>
          <p className="text-sm md:text-base font-serif text-green-700">
            {mejorYpeorMes(bdCuadre)[0]}
          </p>
          <div className="w-full flex">
            <div className="w-full flex p-3 justify-center">
              <p className="text-xs font-serif text-slate-700">Venta:</p>
              <p className="text-xs ml-1 text-violet-600">{`$${
                mejorYpeorMes(bdCuadre)[1]
              }`}</p>
            </div>
          </div>
        </div>
        {/* Peor mes */}
        <div className="m-2 shadow-md p-2 rounded-md flex flex-wrap justify-between">
          <h4 className="md:text-lg text-gray-700 font-serif flex">
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
              <p className="text-xs font-serif text-slate-700">Venta:</p>
              <p className="text-xs ml-1 text-violet-600">{`$${
                mejorYpeorMes(bdCuadre)[3]
              }`}</p>
            </div>
          </div>
        </div>
        {/* Mejor Turno */}
        <div className="m-2 shadow-md p-2 rounded-md flex flex-wrap justify-between">
          <h4 className="md:text-lg text-gray-700 font-serif flex">
            <FontAwesomeIcon
              className="text-white bg-gray-500 mr-2 rounded-full p-1"
              icon={faUserTie}
            />
            Mejor Turno
          </h4>
          <p className="text-sm md:text-base text-green-700">Bryam y Nysaer</p>
          <div className="w-full flex">
            <div className="w-full flex p-3 justify-center">
              <p className="text-xs font-serif text-slate-700">Vendido:</p>
              <p className="text-xs ml-1 text-violet-600">$168259</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelEstadisticas;
