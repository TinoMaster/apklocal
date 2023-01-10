import {
  faCalendarDays,
  faDollarSign,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const TablaVentas = ({ dbMensual, user, EliminarDiaCuadre }) => {
  let totalVenta = 0;
  let totalDueño = 0;
  return (
    <div className="w-full p-2 relative">
      <table className="table-fixed w-full border-collapse relative mb-16">
        <thead>
          <tr className="bg-violet-500 text-slate-200 sticky top-0 w-full z-20">
            <th className="py-2 rounded-lg text-xs">Fecha</th>
            <th className="py-2 rounded-lg text-xs">Venta</th>
            <th className="py-2 rounded-lg hidden md:block  text-xs">Fondo</th>
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
                      <FontAwesomeIcon className=" " icon={faDollarSign} />
                      {dia.miron}
                    </h4>
                  </td>
                  <td className="text-center hidden md:block">
                    <h4 className="  py-2 md:m-2 shadow-lg rounded-lg bg-white/5 text-xs">
                      <FontAwesomeIcon className=" " icon={faDollarSign} />
                      {dia.fondo}
                    </h4>
                  </td>
                  <td className="text-center">
                    {!dia.turno.trabajador2 ? (
                      <p className="  py-2 md:m-2 shadow-lg rounded-lg bg-white/5 text-xs">
                        <FontAwesomeIcon className="" icon={faDollarSign} />
                        {dia.salario1}
                      </p>
                    ) : (
                      <p className="  py-2 md:m-2 shadow-lg rounded-lg bg-white/5 text-xs">
                        <FontAwesomeIcon className="" icon={faDollarSign} />
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
                      <FontAwesomeIcon className=" " icon={faDollarSign} />
                      {dia.dueño}
                    </h4>
                    {user.role === "admin" && (
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
                    )}
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
  );
};
