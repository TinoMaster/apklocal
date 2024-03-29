import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

import CuadreContext from "../../../context/cuadreContext";
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
  } = useContext(EstadisticasContext);

  const { workers } = useContext(CuadreContext);

  return (
    <div className="flex flex-col w-11/12 m-auto mt-10 md:mt-0 md:w-3/4 md:my-2 lg:w-5/12 md:h-full min-h-[450px] shadow-lg shadow-black-400/50 bg-white/5 rounded-lg">
      <h3 className="font-serif font-normal text-lg md:text-2xl p-3 rounded-t-md border-b-2 border-teal-100">
        <FontAwesomeIcon icon={faCalendarDays} /> Este Año
      </h3>
      <div className="h-full rounded-t-3xl rounded-b-lg flex flex-col p-2">
        <div className="flex flex-col w-full h-full">
          <div className="flex justify-between py-2 ">
            <h6 className="font-serif md:text-lg text-teal-600">
              Venta Total
            </h6>
            <p className="text-sm md:text-base font-semibold text-teal-700">
              {totalRecaudado(bdPorAño)} <FontAwesomeIcon icon={faDollarSign} />
            </p>
          </div>

          <div className="flex justify-between py-2 ">
            <h6 className="font-serif text-sm md:text-base">Dueño</h6>
            <p className="text-sm">
              {totalRecaudadoDueño(bdPorAño)}{" "}
              <FontAwesomeIcon icon={faDollarSign} />
            </p>
          </div>

          <div className="flex justify-between py-2 ">
            <h6 className="font-serif text-sm md:text-base">Salario</h6>
            <p className="text-sm">
              {totalSalario(bdPorAño)} <FontAwesomeIcon icon={faDollarSign} />
            </p>
          </div>

          <div className="flex justify-between py-2 ">
            <h6 className="font-serif text-sm md:text-base">Mejor Venta</h6>
            <p className="text-sm">
              {mejorVenta(bdPorAño).miron}{" "}
              <FontAwesomeIcon icon={faDollarSign} />
            </p>
          </div>

          <div className="flex justify-between py-2 ">
            <h6 className="font-serif text-sm md:text-base">Mejor Turno</h6>
            <p className="text-sm">
              <span className="font-serif mr-2">
                {`${mejorTurno(bdPorAño)[0]}`}{" "}
              </span>
              <span>{`${mejorTurno(bdPorAño)[1]} `}</span>
              <FontAwesomeIcon icon={faDollarSign} />
            </p>
          </div>

          <div className="bg-teal-100 rounded">
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
                  <div className="flex justify-center items-center w-10 h-10 rounded-full border-2 bg-teal-400 shadow-md border-green-400 overflow-hidden">
                    {/* <img className="w-full" src={worker.image} alt="Jorge" /> */}
                    <p className="text-white">{worker?.usuario.slice(0, 1)}</p>
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
