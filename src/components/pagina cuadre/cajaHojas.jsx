import React from "react";

const CajaHojas = ({ handlerChangeHojas }) => {
  return (
    <div className="flex w-full mb-5 md:m-0 justify-center border-r-2 md:w-1/4">
      <div className="flex flex-col items-start">
        <h5 className="w-full text-center text-slate-400 font-semibold text-lg font-serif p-3">
          Caja Hojas
        </h5>
        <div className="flex flex-col w-full h-full py-4">
          <div className="flex my-5">
            <label
              htmlFor="hojasBN"
              className="w-1/3 text-center bg-gray-300 text-xs font-serif shadow-md mr-3 p-1 rounded-lg text-gray-500 font-semibold"
            >
              Hojas b/n
            </label>
            <input
              onChange={handlerChangeHojas}
              name="bn"
              type="number"
              id="hojasBN"
              className="text-center rounded-lg bg-transparent border-b-2 focus:outline-none focus:border-zinc-600"
            />
          </div>

          <div className="flex">
            <label
              htmlFor="hojasColor"
              className="w-1/3 shadow-yellow-300/60 bg-amber-300 text-xs font-serif shadow-md mr-3 p-1 rounded-lg text-gray-500 font-semibold"
            >
              Hojas color
            </label>
            <input
              onChange={handlerChangeHojas}
              name="color"
              type="number"
              id="hojasColor"
              className="text-center rounded-lg bg-transparent border-b-2 focus:outline-none focus:border-zinc-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CajaHojas;
