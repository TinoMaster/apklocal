import React from "react";

const CajaTurno = ({ handlerChoiceWorker, turno, workers }) => {
  return (
    <div className="flex flex-col w-full lg:w-1/3 mb-5 md:m-0 relative">
      <h6 className="w-full text-center text-slate-400 font-semibold text-sm md:text-lg font-serif pt-3">
        Elegir Turno
      </h6>
      {/* <div className="flex flex-wrap items-center justify-center">
        <input
          type="radio"
          name="turno"
          id="jorge"
          onChange={handleChangeInputRadio}
          className="hidden"
        />
        <label
          htmlFor="jorge"
          className="bg-gray-400 text-xs md:text-sm hover:bg-violet-500 hover:cursor-pointer font-semibold w-1/3 m-1 text-center p-1 text-white rounded-lg"
        >
          Jorge-Nysaer
        </label>

        <input
          type="radio"
          name="turno"
          id="BJ"
          onChange={handleChangeInputRadio}
          className="hidden"
        />
        <label
          htmlFor="BJ"
          className="bg-gray-400 text-xs md:text-sm hover:bg-violet-500 hover:cursor-pointer font-semibold w-1/3 m-1 text-center text-white p-1 rounded-lg"
        >
          Bryam-Jorge
        </label>

        <input
          type="radio"
          name="turno"
          id="bryam"
          onChange={handleChangeInputRadio}
          className="hidden"
        />
        <label
          htmlFor="bryam"
          className="bg-gray-400 text-xs md:text-sm hover:bg-violet-500 hover:cursor-pointer font-semibold w-1/3 m-1 text-center text-white p-1 rounded-lg"
        >
          Bryam-Nysaer
        </label>

        <input
          type="radio"
          name="turno"
          id="Bryam"
          onChange={handleChangeInputRadio}
          className="hidden"
        />
        <label
          htmlFor="Bryam"
          className="bg-gray-400 text-xs md:text-sm hover:bg-violet-500 hover:cursor-pointer font-semibold w-1/3 m-1 text-center text-white p-1 rounded-lg"
        >
          Bryam
        </label>

        <input
          type="radio"
          name="turno"
          id="Jorge"
          onChange={handleChangeInputRadio}
          className="hidden"
        />
        <label
          htmlFor="Jorge"
          className="bg-gray-400 text-xs md:text-sm hover:bg-violet-500 hover:cursor-pointer font-semibold w-1/3 m-1 text-center text-white p-1 rounded-lg"
        >
          Jorge
        </label>

        <input
          type="radio"
          name="turno"
          id="Nysaer"
          onChange={handleChangeInputRadio}
          className="hidden"
        />
        <label
          htmlFor="Nysaer"
          className="bg-gray-400 text-xs md:text-sm hover:bg-violet-500 hover:cursor-pointer font-semibold w-1/3 m-1 text-center text-white p-1 rounded-lg"
        >
          Nysaer
        </label>
      </div> */}

      <div className="flex items-cente h-full">
        <div className="flex flex-col w-full items-center">
          <label
            htmlFor="trabajador1"
            className="flex flex-col text-slate-500 font-serif font-medium my-3"
          >
            {"Trabajador #1"}
            <select
              name="trabajador1"
              id="trabajador1"
              className="focus:outline-none px-1 rounded-md border-2 border-violet-300"
              onChange={handlerChoiceWorker}
            >
              <option value=""></option>
              {workers
                ?.filter((el) => el.role !== "admin")
                ?.map((worker) => (
                  <option key={worker.id} value={worker.usuario}>
                    {worker.usuario}
                  </option>
                ))}
            </select>
          </label>
          <label
            htmlFor="trabajador1"
            className="flex flex-col text-slate-500 font-serif font-medium"
          >
            {"Trabajador #2"}
            <select
              name="trabajador2"
              id="trabajador2"
              className={
                turno.trabajador1 !== ""
                  ? "focus:outline-none px-1 rounded-md border-2 border-violet-300"
                  : ""
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
                  <option key={worker.id} value={worker.usuario}>
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
