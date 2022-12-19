import { faDollar, faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import EstadisticasContext from "../../context/estadisticasContext";
import { EstadisticasVentas } from "./panel Estadisticas/estadisticasVentas";

const PanelEstadisticas = () => {
  const {
    totalRecaudado,
    bdCuadre,
    totalRecaudadoDueño,
    mejorVenta,
    mejorYpeorMes,
    mejorTurno,
    error,
  } = useContext(EstadisticasContext);

  return (
    <div className="w-full md:w-4/5 m-auto lg:w-1/4 h-full bg-white p-2 flex flex-col rounded-md">
      {!!error?.name && <p>{error.statusText}</p>}
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

        <EstadisticasVentas
          mejorVenta={mejorVenta}
          bdCuadre={bdCuadre}
          mejorYpeorMes={mejorYpeorMes}
          mejorTurno={mejorTurno}
        />
      </div>
    </div>
  );
};

export default PanelEstadisticas;
