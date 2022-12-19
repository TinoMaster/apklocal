import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import { useEstadisticasPagInicio } from "../../../hooks/useEstadisticasPagInicio";

import EstadisticasContext from "../../../context/estadisticasContext";

const EsteAño = () => {
  const {
    totalRecaudado,
    bdPorAño,
    totalRecaudadoDueño,
    totalSalario,
    mejorTurno,
    mejorVenta,
    salarioTrabajador,
  } = useEstadisticasPagInicio();

  const { workers } = useContext(EstadisticasContext);

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
              {`( ${mejorTurno(bdPorAño)[0]} )`}{" "}
              <span>{`${mejorTurno(bdPorAño)[1]} `}</span>
              <FontAwesomeIcon icon={faDollarSign} />
            </p>
          </div>

          <div className="bg-teal-200 ">
            <h5 className="font-serif md:text-lg text-indigo-900 text-center">
              Salarios
            </h5>
          </div>

          <div className="flex justify-between h-full mb-2">
            {workers
              ?.filter((worker) => worker.role !== "admin")
              ?.map((worker) => (
                <div
                  key={worker.id}
                  className="flex flex-col items-center pt-3 w-1/3"
                >
                  <div className="w-10 h-10 rounded-full border-2 border-green-400 overflow-hidden">
                    <img className="w-full" src={worker.image} alt="Jorge" />
                  </div>
                  <h3 className="text-sm md:text-base text-green-600">
                    {worker.usuario}
                  </h3>
                  <p className="text-xs md:text-sm text-green-600">
                    {salarioTrabajador(bdPorAño, worker.usuario)}{" "}
                    <FontAwesomeIcon className="text-sm" icon={faDollarSign} />
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EsteAño;
