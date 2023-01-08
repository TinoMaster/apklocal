import {
  faCalendarDays,
  faDollarSign,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import CuadreContext from "../../context/cuadreContext";
import EstadisticasContext from "../../context/estadisticasContext";

const PagVentas = () => {
  const {
    yearChoice,
    dbMensual,
    setMesDelAño,
    EliminarDiaCuadre,
    handlerChangeSelectYear,
  } = useContext(CuadreContext);
  const { years } = useContext(EstadisticasContext);
  let totalVenta = 0;
  let totalDueño = 0;

  return (
    <div className="w-full max-w-1080p h-full overflow-auto m-auto">
      <div className="cajaEstadisticas relative">
        {/* Meses */}
        <div className="flex flex-wrap m-2  justify-around bg-violet-200 rounded-lg mt-2">
          <input
            className="input-hide"
            type="radio"
            id="enero"
            value="enero"
            name="meses"
          />
          <label
            className="label-meses"
            htmlFor="enero"
            onClick={() => setMesDelAño(`1-${yearChoice}`)}
          >
            Enero
          </label>
          <input
            className="input-hide"
            type="radio"
            id="febrero"
            value="febrero"
            name="meses"
          />
          <label
            className="label-meses"
            htmlFor="febrero"
            onClick={() => setMesDelAño(`2-${yearChoice}`)}
          >
            Febrero
          </label>
          <input
            className="input-hide"
            type="radio"
            id="marzo"
            value="marzo"
            name="meses"
          />
          <label
            className="label-meses"
            htmlFor="marzo"
            onClick={() => setMesDelAño(`3-${yearChoice}`)}
          >
            Marzo
          </label>
          <input
            className="input-hide"
            type="radio"
            id="abril"
            value="abril"
            name="meses"
          />
          <label
            className="label-meses"
            htmlFor="abril"
            onClick={() => setMesDelAño(`4-${yearChoice}`)}
          >
            Abril
          </label>
          <input
            className="input-hide"
            type="radio"
            id="mayo"
            value="mayo"
            name="meses"
          />
          <label
            className="label-meses"
            htmlFor="mayo"
            onClick={() => setMesDelAño(`5-${yearChoice}`)}
          >
            Mayo
          </label>
          <input
            className="input-hide"
            type="radio"
            id="junio"
            value="junio"
            name="meses"
          />
          <label
            className="label-meses"
            htmlFor="junio"
            onClick={() => setMesDelAño(`6-${yearChoice}`)}
          >
            Junio
          </label>
          <input
            className="input-hide"
            type="radio"
            id="julio"
            value="julio"
            name="meses"
          />
          <label
            className="label-meses"
            htmlFor="julio"
            onClick={() => setMesDelAño(`7-${yearChoice}`)}
          >
            Julio
          </label>
          <input
            className="input-hide"
            type="radio"
            id="agosto"
            value="agosto"
            name="meses"
          />
          <label
            className="label-meses"
            htmlFor="agosto"
            onClick={() => setMesDelAño(`8-${yearChoice}`)}
          >
            Agosto
          </label>
          <input
            className="input-hide"
            type="radio"
            id="septiembre"
            value="septiembre"
            name="meses"
          />
          <label
            className="label-meses"
            htmlFor="septiembre"
            onClick={() => setMesDelAño(`9-${yearChoice}`)}
          >
            Septiembre
          </label>
          <input
            className="input-hide"
            type="radio"
            id="octubre"
            value="octubre"
            name="meses"
          />
          <label
            className="label-meses"
            htmlFor="octubre"
            onClick={() => setMesDelAño(`10-${yearChoice}`)}
          >
            Octubre
          </label>
          <input
            className="input-hide"
            type="radio"
            id="noviembre"
            value="noviembre"
            name="meses"
          />
          <label
            className="label-meses"
            htmlFor="noviembre"
            onClick={() => setMesDelAño(`11-${yearChoice}`)}
          >
            Noviembre
          </label>
          <input
            className="input-hide"
            type="radio"
            id="diciembre"
            value="diciembre"
            name="meses"
          />
          <label
            className="label-meses"
            htmlFor="diciembre"
            onClick={() => setMesDelAño(`12-${yearChoice}`)}
          >
            Diciembre
          </label>
        </div>
        {/* Escoger año */}
        <div className="">
          <label htmlFor=""></label>
          <select
            name=""
            id=""
            className="p-1 border-2 rounded-md ml-2  text-slate-700 focus:outline-none"
            onChange={handlerChangeSelectYear}
          >
            {years.length > 0 ?
              years?.map((año) => (
                <option key={año} value={año}>
                  {año}
                </option>
              )): <option>...</option>}
          </select>
        </div>

        <div className="w-full p-2 relative">
          <table className="table-fixed w-full border-collapse relative mb-16">
            <thead>
              <tr className="bg-violet-500 text-slate-200 sticky top-0 w-full z-20">
                <th className="py-2 rounded-lg text-xs">Fecha</th>
                <th className="py-2 rounded-lg text-xs">Venta</th>
                <th className="py-2 rounded-lg hidden md:block  text-xs">
                  Fondo
                </th>
                <th className="py-2  rounded-lg text-xs">Salario</th>
                <th className="py-2  rounded-lg text-xs">Turno</th>
                <th className="py-2  rounded-lg text-xs">Dueño</th>
              </tr>
            </thead>
            <tbody>
              {dbMensual.length !== 0 ? (
                dbMensual.map((dia) => {
                  totalVenta += dia.miron;
                  totalDueño += dia.dueño;
                  return (
                    <tr
                      className="hover:bg-black/20 hover:cursor-pointer rounded-lg"
                      key={dia.id}
                    >
                      <td className="text-center">
                        <h4 className="py-2 flex justify-center items-baseline md:m-2 shadow-lg  rounded-lg bg-white/5 text-xs">
                          <FontAwesomeIcon
                            className="t hidden md:block mr-2"
                            icon={faCalendarDays}
                          />{" "}
                          {dia.fecha}
                        </h4>
                      </td>
                      <td className="text-center">
                        <h4 className="  py-2 md:m-2 shadow-lg rounded-lg bg-white/5 text-xs">
                          <FontAwesomeIcon
                            className=" "
                            icon={faDollarSign}
                          />
                          {dia.miron}
                        </h4>
                      </td>
                      <td className="text-center hidden md:block">
                        <h4 className="  py-2 md:m-2 shadow-lg rounded-lg bg-white/5 text-xs">
                          <FontAwesomeIcon
                            className=" "
                            icon={faDollarSign}
                          />
                          {dia.fondo}
                        </h4>
                      </td>
                      <td className="text-center">
                        {!dia.turno.trabajador2 ? (
                          <p className="  py-2 md:m-2 shadow-lg rounded-lg bg-white/5 text-xs">
                            <FontAwesomeIcon
                              className=""
                              icon={faDollarSign}
                            />
                            {dia.salario1}
                          </p>
                        ) : (
                          <p className="  py-2 md:m-2 shadow-lg rounded-lg bg-white/5 text-xs">
                            <FontAwesomeIcon
                              className=""
                              icon={faDollarSign}
                            />
                            {dia.salario1 + dia.salario2}
                          </p>
                        )}
                      </td>
                      <td className="text-center">
                        {dia.turno.trabajador2 ? (
                          <p className=" py-2 md:m-2 font-semibold shadow-lg rounded-lg bg-white/5 text-xs">{`${dia.turno.trabajador1.substring(
                            0,
                            1
                          )} y ${dia.turno.trabajador2.substring(0, 1)}`}</p>
                        ) : (
                          <p className=" py-2 md:m-2 shadow-lg font-semibold rounded-lg bg-white/5 text-xs">
                            {dia.turno.trabajador1}
                          </p>
                        )}
                      </td>
                      <td className="text-center flex relative py-2">
                        <h4 className="w-full  shadow-lg py-2 rounded-lg bg-white/5 text-xs">
                          <FontAwesomeIcon
                            className=" "
                            icon={faDollarSign}
                          />
                          {dia.dueño}
                        </h4>
                        <div className="hidden md:flex w-1/4 justify-around items-center absolute right-0">
                          <div className="outline outline-yellow-100 py-1 px-2 rounded-lg mr-1 hover:bg-yellow-200 hover:shadow-md">
                            <FontAwesomeIcon
                              className="text-xs"
                              icon={faPenToSquare}
                            />
                          </div>
                          <div
                            onClick={() => EliminarDiaCuadre(dia.id)}
                            className="outline outline-red-200 py-1 px-2 rounded-lg mr-1 hover:bg-red-200 hover:shadow-md"
                          >
                            <FontAwesomeIcon
                              className="text-xs"
                              icon={faTrashCan}
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr className="font-serif font-medium text-pink-600 text-center text-lg">
                  <td>No Hay datos aun de este mes</td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="flex fixed right-2 bottom-2 md:bottom-10 md:right-36">
            <p className="bg-violet-500 py-2 px-4 rounded-xl text-white shadow-lg text-xs shadow-violet-500">{`Venta: ${totalVenta}`}</p>
            <p className="bg-violet-500 py-2 px-4 rounded-xl text-white shadow-lg ml-4 text-xs shadow-violet-500">{`Dueño: ${totalDueño}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagVentas;
