import React, { useState } from "react";
import {
  faCalendarDays,
  faDollarSign,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModalViewVentas } from "./modalViewVentas";
import { CuadreDiario, Turno } from "../../types/global";

interface TablaVentasProps {
  dbMensual: CuadreDiario[];
  user: { role: string };
  EliminarDiaCuadre: (e: React.MouseEvent, id: string) => void;
}

export const TablaVentas: React.FC<TablaVentasProps> = ({
  dbMensual,
  user,
  EliminarDiaCuadre,
}) => {
  const [viewDay, setViewDay] = useState<"open" | "close">("close");
  const [dayToView, setDayToView] = useState<CuadreDiario | null>(null);

  let totalVenta = 0;
  let totalDueño = 0;

  const handleRowClick = (dia: CuadreDiario) => {
    setViewDay("open");
    setDayToView(dia);
  };

  const formatTrabajadores = (turno: Turno) => {
    return turno.trabajador2
      ? `${turno.trabajador1[0]} y ${turno.trabajador2[0]}`
      : turno.trabajador1;
  };

  const formatIconCell = (value: number) => (
    <h4 className="py-2 md:m-2 shadow-lg rounded-lg bg-white/5 text-xs">
      <FontAwesomeIcon icon={faDollarSign} /> {value}
    </h4>
  );

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
          {dbMensual.length > 0 ? (
            dbMensual.map((dia) => {
              totalVenta += dia.miron;
              totalDueño += dia.dueño;

              return (
                <tr
                  onClick={() => handleRowClick(dia)}
                  className="hover:bg-black/10 hover:cursor-pointer transition-all rounded"
                  key={dia.id}
                >
                  {viewDay === "open" && dayToView === dia && (
                    <ModalViewVentas dia={dayToView} setViewDay={setViewDay} />
                  )}
                  <td className="text-center">
                    <h4 className="py-2 flex justify-center items-baseline md:m-2 shadow-lg rounded-lg bg-white/5 text-xs">
                      <FontAwesomeIcon
                        className="t hidden md:block mr-2"
                        icon={faCalendarDays}
                      />
                      {dia.fecha}
                    </h4>
                  </td>
                  <td className="text-center">{formatIconCell(dia.miron)}</td>
                  <td className="text-center hidden md:block">
                    {formatIconCell(dia.fondo)}
                  </td>
                  <td className="text-center">
                    {dia.salario2
                      ? formatIconCell(dia.salario1 + dia.salario2)
                      : formatIconCell(dia.salario1)}
                  </td>
                  <td className="text-center">
                    {dia.turno ? (
                      <p className="py-2 md:m-2 font-semibold shadow-lg rounded-lg bg-white/5 text-xs">
                        {formatTrabajadores(dia.turno)}
                      </p>
                    ) : (
                      <p className="py-2 md:m-2 shadow-lg font-semibold rounded-lg bg-white/5 text-xs">
                        -
                      </p>
                    )}
                  </td>
                  <td className="text-center flex relative py-2">
                    <h4 className="w-full shadow-lg py-2 rounded-lg bg-white/5 text-xs">
                      <FontAwesomeIcon icon={faDollarSign} /> {dia.dueño}
                    </h4>
                    {user.role === "admin" && (
                      <div className="hidden md:flex w-1/4 justify-end items-center absolute right-0">
                        <div
                          onClick={(e) => EliminarDiaCuadre(e, dia.id)}
                          className="py-1 px-2 mr-2 rounded-lg hover:bg-slate-100 hover:text-darkMode transition-all hover:shadow-md"
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
              <td>No hay datos aún de este mes</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="flex fixed right-2 bottom-2 md:bottom-10 md:right-36">
        <p className="bg-violet-500 py-2 px-4 rounded-xl text-white shadow-lg text-xs shadow-violet-500">
          {`Venta: ${totalVenta}`}
        </p>
        <p className="bg-violet-500 py-2 px-4 rounded-xl text-white shadow-lg ml-4 text-xs shadow-violet-500">
          {`Dueño: ${totalDueño}`}
        </p>
      </div>
    </div>
  );
};
