import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import { useEstadisticasPagInicio } from "../../../hooks/useEstadisticasPagInicio";

import imgBryam from "../../../assets/img/Bryam.jpg";
import imgJorge from "../../../assets/img/Jorge.jpg";
import imgNysaer from "../../../assets/img/Nysaer.jpg";

const EsteAño = () => {
  const {
    totalRecaudado,
    bdPorAño,
    totalRecaudadoDueño,
    totalSalario,
    mejorTurno,
    mejorVenta,
    salarioBryam,
    salarioJorge,
    salarioNysaer,
  } = useEstadisticasPagInicio();

  return (
    <div className="flex flex-col w-11/12 m-auto mt-10 md:mt-0 md:w-3/4 md:my-2 lg:w-5/12 md:h-full shadow-lg shadow-black-400/50 bg-teal-400 rounded-lg">
      <h3 className="font-serif font-normal text-lg md:text-2xl p-3 text-white">
        <FontAwesomeIcon icon={faCalendarDays} /> Este Año
      </h3>
      <div className="h-full bg-white rounded-t-3xl rounded-b-lg flex flex-col">
        <div className="flex flex-col w-full h-full">
          <div className="flex justify-between bg-teal-100 p-3 rounded-t-3xl">
            <h6 className="font-serif md:text-lg text-green-700">
              Venta Total
            </h6>
            <p className="text-sm md:text-base font-semibold text-green-700">
              {totalRecaudado(bdPorAño)} <FontAwesomeIcon icon={faDollarSign} />
            </p>
          </div>

          <div className="flex justify-between p-2 ">
            <h6 className="font-serif text-sm md:text-base text-slate-700">
              Dueño
            </h6>
            <p className="text-sm text-slate-600">
              {totalRecaudadoDueño(bdPorAño)}{" "}
              <FontAwesomeIcon icon={faDollarSign} />
            </p>
          </div>

          <div className="flex justify-between p-2 ">
            <h6 className="font-serif text-sm md:text-base text-slate-700">
              Salario
            </h6>
            <p className="text-sm text-slate-600">
              {totalSalario(bdPorAño)} <FontAwesomeIcon icon={faDollarSign} />
            </p>
          </div>

          <div className="flex justify-between p-2 ">
            <h6 className="font-serif text-sm md:text-base text-slate-700">
              Mejor Venta
            </h6>
            <p className="text-sm text-slate-600">
              {mejorVenta(bdPorAño).miron}{" "}
              <FontAwesomeIcon icon={faDollarSign} />
            </p>
          </div>

          <div className="flex justify-between p-2 ">
            <h6 className="font-serif text-sm md:text-base text-slate-700">
              Mejor Turno
            </h6>
            <p className="text-sm text-slate-600">
              {`( ${mejorTurno(bdPorAño)[0]} )`} <span>{`${mejorTurno(bdPorAño)[1]} `}</span>
              <FontAwesomeIcon icon={faDollarSign} />
            </p>
          </div>

          <div className="bg-teal-200 ">
            <h5 className="font-serif md:text-lg text-indigo-900 text-center">
              Salarios
            </h5>
          </div>

          <div className="flex justify-between h-full mb-2">
            <div className="flex flex-col items-center pt-3 w-1/3">
              <div className="w-10 h-10 rounded-full border-2 border-orange-400 overflow-hidden">
                <img className="w-full" src={imgJorge} alt="Sueño Virtual" />
              </div>
              <h3 className="text-sm md:text-base text-orange-600">Jorge</h3>
              <p className="text-xs md:text-sm text-orange-600 ">
                {salarioJorge(bdPorAño)}{" "}
                <FontAwesomeIcon className="text-sm" icon={faDollarSign} />
              </p>
            </div>

            <div className="flex flex-col items-center pt-3 w-1/3">
              <div className="w-10 rounded-full border-2 border-lime-400 overflow-hidden">
                <img className="w-full" src={imgBryam} alt="Sueño Virtual" />
              </div>
              <h3 className="text-sm md:text-base text-lime-600">Bryam</h3>
              <p className="text-xs md:text-sm text-lime-600 ">
                {salarioBryam(bdPorAño)}{" "}
                <FontAwesomeIcon className="text-sm" icon={faDollarSign} />
              </p>
            </div>

            <div className="flex flex-col items-center pt-3 w-1/3">
              <div className="w-10 rounded-full border-2 border-emerald-400 overflow-hidden">
                <img className="w-full" src={imgNysaer} alt="Sueño Virtual" />
              </div>
              <h3 className="text-sm md:text-base text-emerald-600">Nysaer</h3>
              <p className="text-xs md:text-sm text-emerald-600 ">
                {salarioNysaer(bdPorAño)}{" "}
                <FontAwesomeIcon className="text-sm" icon={faDollarSign} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EsteAño;
