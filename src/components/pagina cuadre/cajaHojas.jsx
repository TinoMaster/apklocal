import React from "react";

const CajaHojas = ({ handlerChangeHojas }) => {
  return (
    <div className="flex w-full mb-5 lg:m-0 bg-violet-100 lg:bg-transparent justify-center lg:w-1/4">
      <div className="flex flex-col items-start">
        <h5 className="w-full text-center text-slate-400 font-semibold text-sm font-serif p-3">
          Hojas
        </h5>
        <div className="flex flex-col w-full h-full py-4">
          <div className="flex my-5">
            <label
              htmlFor="hojasColor"
              className="w-1/3 shadow-teal-300/60 bg-teal-400 text-xs font-serif shadow-md mr-3 p-1 rounded-lg text-white font-semibold"
            >
              Color
            </label>
            <input
              onChange={handlerChangeHojas}
              name="color"
              type="number"
              id="hojasColor"
              className="text-center text-xs text-slate-700 rounded-lg bg-transparent border-2 focus:outline-none focus:border-teal-300"
            />
          </div>

          <div className="flex">
            <label
              htmlFor="hojasBN"
              className="w-1/3 text-center bg-gray-400 text-xs font-serif shadow-md mr-3 p-1 rounded-lg text-white font-semibold"
            >
              b/n
            </label>
            <input
              onChange={handlerChangeHojas}
              name="bn"
              type="number"
              id="hojasBN"
              className="text-center text-xs text-slate-700 rounded-md bg-transparent border-2 focus:outline-none focus:border-slate-400 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CajaHojas;
