import React from "react";

const CajaTurno = ({ handlerChoiceWorker, turno, workers,darkMode }) => {
  return (
    <div className="flex flex-col w-full lg:w-1/3 mb-5 md:m-0 relative">
      <h6 className="w-full text-center font-semibold text-sm md:text-lg font-serif pt-3">
        Elegir Turno
      </h6>

      <div className="flex items-cente h-full">
        <div className="flex flex-col w-full items-center">
          <label
            htmlFor="trabajador1"
            className="flex flex-col font-serif font-medium my-3"
          >
            {"Trabajador #1"}
            <select
              name="trabajador1"
              id="trabajador1"
              className="focus:outline-none px-1 rounded-md bg-white/5 hover:cursor-pointer shadow-inner shadow-black/20 hover:bg-white/10 p-1"
              onChange={handlerChoiceWorker}
            >
              <option value=""></option>
              {workers
                ?.filter((el) => el.role !== "admin")
                ?.map((worker) => (
                  <option className={darkMode?"bg-darkMode":"bg-lightMode"} key={worker.id} value={worker.usuario}>
                    {worker.usuario}
                  </option>
                ))}
            </select>
          </label>
          <label
            htmlFor="trabajador1"
            className="flex flex-col font-serif font-medium"
          >
            {"Trabajador #2"}
            <select
              name="trabajador2"
              id="trabajador2"
              className={
                turno.trabajador1 !== ""
                  ? "focus:outline-none px-1 rounded-md bg-white/5 hover:cursor-pointer shadow-inner shadow-black/20 hover:bg-white/10 p-1"
                  : "rounded-md bg-transparent"
              }
              onChange={handlerChoiceWorker}
              disabled={turno?.trabajador1 !== "" ? false : true}
            >
              <option value=""></option>
              {workers
                ?.filter(
                  (el) =>
                    el.role !== "admin" && el.usuario !== turno?.trabajador1
                )
                ?.map((worker) => (
                  <option className={darkMode?"bg-darkMode":"bg-lightMode"} key={worker.id} value={worker.usuario}>
                    {worker.usuario}
                  </option>
                ))}
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};

export default CajaTurno;
