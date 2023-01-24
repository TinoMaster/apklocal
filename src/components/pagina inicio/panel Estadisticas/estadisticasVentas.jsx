import {
  faCalendar,
  faDollar,
  faScaleBalanced,
  faUsers,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export const EstadisticasVentas = ({
  mejorVenta,
  bdCuadre,
  mejorYpeorMes,
  mejorTurno,
  ventaPorTurno,
  esteMes,
  bdPorAño,
}) => {
  const [option, setOption] = useState("mes");
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
      <div className="m-2 shadow-md p-2 rounded-md flex flex-wrap justify-center bg-white/5">
        <h4 className="md:text-lg w-1/2 font-serif flex">
          <FontAwesomeIcon
            className="text-white bg-gray-500 mr-2 rounded-full p-1"
            icon={faUsers}
          />
          Turnos
        </h4>
        <div className="w-1/2 flex justify-end">
          <select
            name=""
            id=""
            className="w-2/3 bg-white/5 shadow-inner shadow-black/40 focus:outline-none rounded-md font-serif"
            onChange={(e) => setOption(e.target.value)}
          >
            {esteMes?.length > 0 && (
              <option
                value="mes"
                defaultValue={true}
                className="bg-darkMode text-white"
              >
                Este mes
              </option>
            )}
            {bdPorAño?.length > 0 && (
              <option value="año" className="bg-darkMode text-white">
                Este año
              </option>
            )}
            {bdCuadre?.length > 0 && (
              <option value="general" className="bg-darkMode text-white">
                General
              </option>
            )}
          </select>
        </div>
        {option === "mes" &&
          Object.entries(ventaPorTurno(esteMes))?.map((el) => (
            <div key={el[1][0]} className="w-1/2 flex">
              <div className="w-full flex p-3 justify-start">
                <p className="text-xs font-serif ">
                  {el[1][0].slice(0, 1) === "#" ? "cant turnos" : el[1][0]}:
                </p>
                <p className="text-xs ml-1 text-violet-600">{el[1][1]}</p>
              </div>
            </div>
          ))}
        {option === "año" &&
          Object.entries(ventaPorTurno(bdPorAño))?.map((el) => (
            <div key={el[1][0]} className="w-1/2 flex">
              <div className="w-full flex p-3 justify-start">
                <p className="text-xs font-serif">{el[1][0].slice(0, 1) === "#" ? "cant turnos" : el[1][0]}:</p>
                <p className="text-xs ml-1 text-violet-600">{el[1][1]}</p>
              </div>
            </div>
          ))}
        {option === "general" &&
          Object.entries(ventaPorTurno(bdCuadre))?.map((el) => (
            <div key={el[1][0]} className="w-1/2 flex">
              <div className="w-full flex p-3 justify-start">
                <p className="text-xs font-serif">{el[1][0].slice(0, 1) === "#" ? "cant turnos" : el[1][0]}:</p>
                <p className="text-xs ml-1 text-violet-600">{el[1][1]}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
