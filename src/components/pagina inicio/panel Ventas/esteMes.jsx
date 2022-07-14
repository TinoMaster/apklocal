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

const EsteMes = () => {
  const {
    totalRecaudadoMes,
    esteMes,
    totalRecaudadoAñoDueño,
    salarioEnElMes,
    mejorTurnoMes,
    mejorVenta,
    salarioBryam,
    salarioJorge,
    salarioNysaer,
  } = useEstadisticasPagInicio();

  return (
    <div className="flex flex-col w-11/12 m-auto mt-5 md:mt-0 md:w-5/12 md:h-full shadow-lg shadow-black-400/50 bg-yellow-400 rounded-lg">
      <h3 className="font-serif font-normal text-2xl p-3 text-white">
        <FontAwesomeIcon icon={faCalendarDays} /> Este Mes
      </h3>
      <div className="h-full bg-white rounded-t-3xl rounded-b-lg flex flex-col">
        <div className="flex flex-col w-full h-full">
          <div className="flex justify-between bg-yellow-100 p-3 rounded-t-3xl">
            <h6 className="font-serif text-lg text-slate-700">Venta Total</h6>
            <p className=" font-medium text-green-700">
              {totalRecaudadoMes(esteMes)}{" "}
              <FontAwesomeIcon icon={faDollarSign} />
            </p>
          </div>

          <div className="flex justify-between p-2 ">
            <h6 className="font-serif text-slate-700">Dueño</h6>
            <p className="text-sm font-medium text-slate-600 ">
              {totalRecaudadoAñoDueño(esteMes)}{" "}
              <FontAwesomeIcon icon={faDollarSign} />
            </p>
          </div>

          <div className="flex justify-between p-2 ">
            <h6 className="font-serif text-slate-700">Salario</h6>
            <p className="text-sm font-medium text-slate-600 ">
              {salarioEnElMes(esteMes)} <FontAwesomeIcon icon={faDollarSign} />
            </p>
          </div>

          <div className="flex justify-between p-2 ">
            <h6 className="font-serif text-slate-700">Mejor Venta</h6>
            <p className="text-sm font-medium text-slate-600 ">
              {mejorVenta(esteMes).miron}{" "}
              <FontAwesomeIcon icon={faDollarSign} />
            </p>
          </div>

          <div className="flex justify-between p-2 ">
            <h6 className="font-serif text-slate-700">Mejor Turno</h6>
            <p className="text-sm font-medium text-slate-600 ">
              {mejorTurnoMes(esteMes)}
            </p>
          </div>

          <div className="bg-yellow-200 ">
            <h5 className="font-serif text-lg text-indigo-900 text-center">
              Salarios
            </h5>
          </div>

          <div className="flex justify-between h-full">
            <div className="flex flex-col items-center pt-3 w-1/3">
              <div className="w-10 h-10 rounded-full border-2 border-orange-400 overflow-hidden">
                <img className="w-full" src={imgJorge} alt="Jorge" />
              </div>
              <h3 className="text-orange-600">Jorge</h3>
              <p className="text-sm text-orange-600">
                {salarioJorge(esteMes)}{" "}
                <FontAwesomeIcon className="text-sm" icon={faDollarSign} />
              </p>
            </div>

            <div className="flex flex-col items-center pt-3 w-1/3">
              <div className="w-10 rounded-full border-2 border-lime-400 overflow-hidden">
                <img className="w-full" src={imgBryam} alt="Bryam" />
              </div>
              <h3 className="text-lime-600">Bryam</h3>
              <p className="text-sm text-lime-600">
                {salarioBryam(esteMes)}{" "}
                <FontAwesomeIcon className="text-sm" icon={faDollarSign} />
              </p>
            </div>

            <div className="flex flex-col items-center pt-3 w-1/3">
              <div className="w-10 h-10 rounded-full border-2 border-emerald-400 overflow-hidden">
                <img className="w-full" src={imgNysaer} alt="Nysaer" />
              </div>
              <h3 className="text-emerald-600">Nysaer</h3>
              <p className="text-sm text-emerald-600">
                {salarioNysaer(esteMes)}{" "}
                <FontAwesomeIcon className="text-sm" icon={faDollarSign} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EsteMes;
