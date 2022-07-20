import {
  faCalendarDays,
  faDollarSign,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import EstadisticasContext from "../../context/estadisticasContext";

const PagVentas = () => {
  const { db, setMesDelAño } = useContext(EstadisticasContext);
  let totalVenta = 0;
  let totalDueño = 0;

  return (
    <div className="w-full max-w-1080p h-full overflow-auto m-auto">
      <div className="cajaEstadisticas relative">
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
            onClick={() => setMesDelAño("enero")}
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
            onClick={() => setMesDelAño("febrero")}
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
            onClick={() => setMesDelAño("marzo")}
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
            onClick={() => setMesDelAño("abril")}
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
            onClick={() => setMesDelAño("mayo")}
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
            onClick={() => setMesDelAño("junio")}
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
            onClick={() => setMesDelAño("julio")}
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
            onClick={() => setMesDelAño("agosto")}
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
            onClick={() => setMesDelAño("septiembre")}
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
            onClick={() => setMesDelAño("octubre")}
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
            onClick={() => setMesDelAño("noviembre")}
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
            onClick={() => setMesDelAño("diciembre")}
          >
            Diciembre
          </label>
        </div>

        <div className="w-full p-2 relative">
          <table className="table-fixed w-full border-collapse relative mb-16">
            <thead>
              <tr className="bg-violet-500 text-white sticky top-0 w-full">
                <th className="py-2 border-2 rounded-lg text-xs">Fecha</th>
                <th className="py-2 border-2 rounded-lg text-xs">Venta</th>
                <th className="py-2 border-2 hidden md:block rounded-lg text-xs">
                  Fondo
                </th>
                <th className="py-2 border-2 rounded-lg text-xs">Salario</th>
                <th className="py-2 border-2 rounded-lg text-xs">Turno</th>
                <th className="py-2 border-2 rounded-lg text-xs">Dueño</th>
              </tr>
            </thead>
            <tbody>
              {db.length !== 0 ? (
                db.map((dia) => {
                  totalVenta += dia.miron;
                  totalDueño += dia.dueño;
                  return (
                    <tr
                      className="hover:bg-violet-200 hover:cursor-pointer rounded-lg bg-violet-50"
                      key={dia.id}
                    >
                      <td className="text-center">
                        <h4 className="py-2 flex justify-center items-baseline md:m-2 shadow-lg  text-violet-600 rounded-lg bg-white text-xs">
                          <FontAwesomeIcon
                            className="text-violet-600 hidden md:block mr-2"
                            icon={faCalendarDays}
                          />{" "}
                          {dia.fecha}
                        </h4>
                      </td>
                      <td className="text-center">
                        <h4 className=" text-slate-600 py-2 md:m-2 shadow-lg rounded-lg bg-white text-xs">
                          <FontAwesomeIcon
                            className=" text-slate-600"
                            icon={faDollarSign}
                          />
                          {dia.miron}
                        </h4>
                      </td>
                      <td className="text-center hidden md:block">
                        <h4 className=" text-slate-600 py-2 md:m-2 shadow-lg rounded-lg bg-white text-xs">
                          <FontAwesomeIcon
                            className=" text-slate-600"
                            icon={faDollarSign}
                          />
                          {dia.fondo}
                        </h4>
                      </td>
                      <td className="text-center">
                        {!dia.turno.trabajador2 ? (
                          <p className=" text-slate-600 py-2 md:m-2 shadow-lg rounded-lg bg-white text-xs">
                            <FontAwesomeIcon
                              className="text-slate-600"
                              icon={faDollarSign}
                            />
                            {dia.salario1}
                          </p>
                        ) : (
                          <p className=" text-slate-600 py-2 md:m-2 shadow-lg rounded-lg bg-white text-xs">
                            <FontAwesomeIcon
                              className="text-slate-600"
                              icon={faDollarSign}
                            />
                            {dia.salario1 + dia.salario2}
                          </p>
                        )}
                      </td>
                      <td className="text-center">
                        {dia.turno.trabajador2 ? (
                          <p className="text-slate-600 py-2 md:m-2 font-semibold shadow-lg rounded-lg bg-white text-xs">{`${dia.turno.trabajador1.substring(
                            0,
                            1
                          )} y ${dia.turno.trabajador2.substring(0, 1)}`}</p>
                        ) : (
                          <p className="text-slate-600 py-2 md:m-2 shadow-lg font-semibold rounded-lg bg-white text-xs">
                            {dia.turno.trabajador1}
                          </p>
                        )}
                      </td>
                      <td className="text-center flex">
                        <h4 className="w-full text-slate-600 py-2 md:m-2 shadow-lg rounded-lg bg-white text-xs">
                          <FontAwesomeIcon
                            className=" text-slate-600"
                            icon={faDollarSign}
                          />
                          {dia.dueño}
                        </h4>
                        {/* <div className="hidden md:flex w-1/4 justify-around items-center">
                          <div className="bg-yellow-400/50 p-1 rounded-full hover:bg-yellow-500 hover:shadow-md">
                            <FontAwesomeIcon icon={faPenToSquare} />
                          </div>
                          <div className="bg-red-400/50 p-1 rounded-full hover:bg-red-500 hover:shadow-md">
                            <FontAwesomeIcon icon={faTrashCan} />
                          </div>
                        </div> */}
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
