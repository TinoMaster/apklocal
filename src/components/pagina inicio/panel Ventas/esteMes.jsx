import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

import CuadreContext from "../../../context/cuadreContext";
import EstadisticasContext from "../../../context/estadisticasContext";

const EsteMes = () => {
  const {
    totalRecaudado,
    esteMes,
    totalRecaudadoDueño,
    totalSalario,
    mejorTurno,
    mejorVenta,
    salarioTrabajador,
  } = useContext(EstadisticasContext);

  const { workers } = useContext(CuadreContext);

  return (
    <div className="flex flex-col w-11/12 m-auto mt-5 md:mt-0 md:w-3/4 md:my-10 lg:w-5/12 md:h-full shadow-lg shadow-black-400/50 bg-yellow-400 rounded-lg">
      <h3 className="font-serif font-normal text-lg md:text-2xl p-3 text-white">
        <FontAwesomeIcon icon={faCalendarDays} /> Este Mes
      </h3>
      <div className="h-full bg-white rounded-t-lg rounded-b-lg flex flex-col">
        <div className="flex flex-col w-full h-full">
          <div className="flex justify-between bg-yellow-100 p-3 rounded-t-lg">
            <h6 className="font-serif md:text-lg text-green-600">
              Venta Total
            </h6>
            <p className="text-sm  font-medium text-green-600">
              {totalRecaudado(esteMes)} <FontAwesomeIcon icon={faDollarSign} />
            </p>
          </div>

          <div className="flex justify-between p-2 ">
            <h6 className="font-serif text-sm md:text-base text-slate-600">
              Dueño
            </h6>
            <p className="text-sm  text-slate-500 ">
              {totalRecaudadoDueño(esteMes)}{" "}
              <FontAwesomeIcon icon={faDollarSign} />
            </p>
          </div>

          <div className="flex justify-between p-2 ">
            <h6 className="font-serif text-sm md:text-base text-slate-600">
              Salario
            </h6>
            <p className="text-sm text-slate-600 ">
              {totalSalario(esteMes)} <FontAwesomeIcon icon={faDollarSign} />
            </p>
          </div>

          <div className="flex justify-between p-2 ">
            <h6 className="font-serif text-sm md:text-base text-slate-600">
              Mejor Venta
            </h6>
            <p className="text-sm text-slate-600 ">
              {mejorVenta(esteMes).miron}{" "}
              <FontAwesomeIcon icon={faDollarSign} />
            </p>
          </div>

          <div className="flex justify-between p-2 ">
            <h6 className="font-serif text-sm md:text-base text-slate-700">
              Mejor Turno
            </h6>
            <p className="text-sm text-slate-600">
              <span className="font-serif mr-2">
                {`${mejorTurno(esteMes)[0]}`}
              </span>
              <span>{`${mejorTurno(esteMes)[1]} `}</span>
              <FontAwesomeIcon icon={faDollarSign} />
            </p>
          </div>

          <div className="bg-yellow-200 ">
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
                  <div className="w-10 h-10 rounded-full border-2 border-yellow-400 overflow-hidden">
                    <img className="w-full" src={worker.image} alt="Jorge" />
                  </div>
                  <h3 className="text-sm md:text-base text-yellow-600">
                    {worker.usuario}
                  </h3>
                  <p className="text-xs md:text-sm text-yellow-600">
                    {salarioTrabajador(esteMes, worker.usuario)}{" "}
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

export default EsteMes;
