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
    totalRecaudadoAño,
    bdPorAño,
    totalRecaudadoAñoDueño,
    salarioEnElMes,
    mejorTurnoMes,
    mejorVenta,
    salarioBryam,
    salarioJorge,
    salarioNysaer
  } = useEstadisticasPagInicio();

  return (
    <div className="flex flex-col w-11/12 m-auto mt-10 md:mt-0 md:w-5/12 md:h-full shadow-lg shadow-black-400/50 bg-teal-400 rounded-lg">
      <h3 className="font-serif font-normal text-2xl p-3 text-white">
        <FontAwesomeIcon icon={faCalendarDays} /> Este Año
      </h3>
      <div className="h-full bg-white rounded-t-3xl rounded-b-lg flex flex-col">
        <div className="flex flex-col w-full h-full">
          <div className="flex justify-between bg-teal-100 p-3 rounded-t-3xl">
            <h6 className="font-serif text-lg text-slate-700">Venta Total</h6>
            <p className="font-semibold text-green-700">
              {totalRecaudadoAño(bdPorAño)}{" "}
              <FontAwesomeIcon icon={faDollarSign} />
            </p>
          </div>

          <div className="flex justify-between p-2 ">
            <h6 className="font-serif text-slate-700">Dueño</h6>
            <p className="text-sm text-slate-600 font-medium">
              {totalRecaudadoAñoDueño(bdPorAño)}{" "}
              <FontAwesomeIcon icon={faDollarSign} />
            </p>
          </div>

          <div className="flex justify-between p-2 ">
            <h6 className="font-serif text-slate-700">Salario</h6>
            <p className="text-sm text-slate-600 font-medium">
              {salarioEnElMes(bdPorAño)} <FontAwesomeIcon icon={faDollarSign} />
            </p>
          </div>

          <div className="flex justify-between p-2 ">
            <h6 className="font-serif text-slate-700">Mejor Venta</h6>
            <p className="text-sm text-slate-600 font-medium">
              {mejorVenta(bdPorAño).miron} <FontAwesomeIcon icon={faDollarSign} />
            </p>
          </div>

          <div className="flex justify-between p-2 ">
            <h6 className="font-serif text-slate-700">Mejor Turno</h6>
            <p className="text-sm text-slate-600 font-medium">{mejorTurnoMes(bdPorAño)}</p>
          </div>

          <div className="bg-teal-200 ">
            <h5 className="font-serif text-lg text-indigo-900 text-center">
              Salarios
            </h5>
          </div>

          <div className="flex justify-between h-full">
            <div className="flex flex-col items-center pt-3 w-1/3">
              <div className="w-10 h-10 rounded-full border-2 border-orange-400 overflow-hidden">
                <img
                  className="w-full"
                  src={imgJorge}
                  alt="Sueño Virtual"
                />
              </div>
              <h3 className="text-orange-600">Jorge</h3>
              <p className="text-sm text-orange-600 ">
                {salarioJorge(bdPorAño)}{" "}
                <FontAwesomeIcon className="text-sm" icon={faDollarSign} />
              </p>
            </div>

            <div className="flex flex-col items-center pt-3 w-1/3">
              <div className="w-10 rounded-full border-2 border-lime-400 overflow-hidden">
                <img
                  className="w-full"
                  src={imgBryam}
                  alt="Sueño Virtual"
                />
              </div>
              <h3 className="text-lime-600">Bryam</h3>
              <p className="text-sm text-lime-600 ">
                {salarioBryam(bdPorAño)}{" "}
                <FontAwesomeIcon className="text-sm" icon={faDollarSign} />
              </p>
            </div>

            <div className="flex flex-col items-center pt-3 w-1/3">
              <div className="w-10 rounded-full border-2 border-emerald-400 overflow-hidden">
                <img
                  className="w-full"
                  src={imgNysaer}
                  alt="Sueño Virtual"
                />
              </div>
              <h3 className="text-emerald-600">Nysaer</h3>
              <p className="text-sm text-emerald-600 ">
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