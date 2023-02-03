import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export const TablaMirones = ({ mirones }) => {
  const [deployDay, setDeployDay] = useState([]);

  const functionDeployDay = (fecha, array) => {
    const result = array.filter((day) => day.fecha === fecha);
    setDeployDay(result);
  };
  return (
    <div className="w-full p-2 font-serif">
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
    </div>
  );
};
