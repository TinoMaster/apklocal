import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { ViewMiron } from "../ViewMiron";

export const TablaMirones = ({ mirones }) => {
  const [deployDay, setDeployDay] = useState({});
  const [dataToView, setDataToView] = useState({});
  const [vieMiron, setVieMiron] = useState("close");

  const functionDeployDay = (fecha, array) => {
    const result = array.filter((day) => day.fecha === fecha);
    setDeployDay(result);
    if (result.length === 2) {
      setDataToView({ pc1Reporte: result[0], pc2Reporte: result[1] });
    } else setDataToView({ pc1Reporte: result[0] });
  };

  const totalMirones = () => {
    const pc1pc2 = [
      ...dataToView?.pc1Reporte?.dispositivos,
      ...dataToView?.pc2Reporte?.dispositivos,
    ];

    return pc1pc2;
  };
  return (
    <div className="w-full p-2 font-serif">
      {vieMiron !== "close" && (
        <ViewMiron
          viewMiron={vieMiron}
          setViewMiron={setVieMiron}
          totalMirones={totalMirones}
          mirones={dataToView}
        />
      )}
      {mirones?.map((dia, index, array) =>
        index !== 0 && dia.fecha === array[index - 1]?.fecha ? (
          <div
            key={dia.id}
            className="w-full flex flex-wrap justify-between bg-white/5 p-2 rounded-md shadow-md my-2 hover:cursor-pointer"
            onClick={() => functionDeployDay(dia.fecha, array)}
          >
            <p
              className={`${
                deployDay.length > 0 &&
                deployDay[0].fecha === dia.fecha &&
                "text-green-400"
              }`}
            >
              {deployDay.length > 0 && deployDay[0].fecha === dia.fecha ? (
                "▼ "
              ) : (
                <FontAwesomeIcon className="mr-1" icon={faPlus} />
              )}

              {dia.fecha}
            </p>
            <p className="px-2 rounded-full shadow-md bg-white/5">2</p>
            <div
              className={`w-full scale-0 ${
                deployDay.length > 0 &&
                deployDay[0].fecha === dia.fecha &&
                "scale-100 "
              } transition-all delay-150`}
            >
              {deployDay.length > 0 &&
                deployDay[0].fecha === dia.fecha &&
                deployDay.map((daySelect) => (
                  <div
                    key={daySelect.id}
                    className="flex flex-wrap justify-between items-center py-1 px-2 m-2 bg-white/5 rounded-md shadow lg:text-base text-sm hover:shadow-black/50"
                    onClick={(e) => {
                      e.stopPropagation();
                      setVieMiron(
                        daySelect.name === "pc1Reporte" ? "pc1" : "pc2"
                      );
                    }}
                  >
                    <p className="">{daySelect.name}</p>
                    <p className="">{`disp: ${daySelect.cant_dispositivos}`}</p>
                    <p className="">{`vol: ${daySelect.volumen_copia} GB`}</p>
                    <p className="">{`venta: $${daySelect.venta_total}`}</p>
                  </div>
                ))}
              {deployDay.length > 0 && deployDay[0].fecha === dia.fecha && (
                <p className="w-full text-right">
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      setVieMiron("pc1pc2");
                    }}
                    className="mr-2 p-1 bg-green-400 rounded-md shadow-md hover:cursor-pointer hover:bg-green-500 transition-all hover:shadow-black/20 text-slate-100"
                  >
                    {" "}
                    Resumen
                  </span>{" "}
                </p>
              )}
            </div>
          </div>
        ) : (
          dia.fecha !== array[index + 1]?.fecha && (
            <div
              key={dia.id}
              className="w-full flex flex-wrap justify-between bg-white/5 p-2 rounded-md shadow-md my-2 hover:cursor-pointer"
              onClick={() => functionDeployDay(dia.fecha, array)}
            >
              <p
                className={`${
                  deployDay.length > 0 &&
                  deployDay[0].fecha === dia.fecha &&
                  "text-green-400"
                }`}
              >
                {deployDay.length > 0 && deployDay[0].fecha === dia.fecha ? (
                  "▼ "
                ) : (
                  <FontAwesomeIcon className="mr-1" icon={faPlus} />
                )}

                {dia.fecha}
              </p>
              <p className="px-2 rounded-full shadow-md bg-white/5">1</p>
              <div
                className={`w-full scale-0 ${
                  deployDay.length > 0 &&
                  deployDay[0].fecha === dia.fecha &&
                  "scale-100 "
                } transition-all delay-150`}
              >
                {deployDay.length > 0 &&
                  deployDay[0].fecha === dia.fecha &&
                  deployDay.map((daySelect) => (
                    <div
                      key={daySelect.id}
                      className="flex flex-wrap justify-between items-center py-1 px-2 m-2 bg-white/5 rounded-md shadow lg:text-base text-sm hover:shadow-black/50"
                      onClick={(e) => {
                        e.stopPropagation();
                        setVieMiron(
                          daySelect.name === "pc1Reporte" ? "pc1" : "pc2"
                        );
                      }}
                    >
                      <p className="">{daySelect.name}</p>
                      <p className="">{`disp: ${daySelect.cant_dispositivos}`}</p>
                      <p className="">{`vol: ${daySelect.volumen_copia} GB`}</p>
                      <p className="">{`venta: $${daySelect.venta_total}`}</p>
                    </div>
                  ))}
              </div>
            </div>
          )
        )
      )}
      {mirones.length === 0 && <p className="w-full p-2 text-center text-violet-500">No hay datos de este mes</p>}
    </div>
  );
};
