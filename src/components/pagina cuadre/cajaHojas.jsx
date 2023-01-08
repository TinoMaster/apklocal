import React from "react";
import useInventarioPagInicio from "../../hooks/useInventarioPagInicio";

const CajaHojas = ({ handlerChangeHojas, restHojas }) => {
  const { testInyectores } = useInventarioPagInicio();

  return (
    <div className="flex w-full mb-5 lg:m-0 lg:bg-transparent justify-center lg:w-1/4">
      <div className="flex flex-col items-start">
        <h5 className="w-full text-center font-semibold text-sm font-serif p-3">
          Hojas
        </h5>
        <div className="flex flex-col w-full h-full py-4">
          <div className="flex relative my-5">
            <label
              htmlFor="hojasColor"
              className="w-1/3 shadow-teal-300/60 text-xs font-serif shadow mr-3 p-1 rounded-lg font-semibold bg-gradient-to-br from-violet-500 to-green-500 text-slate-200"
            >
              Color
            </label>
            <input
              onChange={(e) => handlerChangeHojas(e, testInyectores)}
              name="color"
              type="number"
              id="hojasColor"
              className="text-center text-xs font-semibold rounded-lg bg-white/5 focus:outline-none hover:bg-white/10 shadow-inner shadow-black/20"
            />
            <p className="absolute text-green-500 -right-10 text-sm">
              {restHojas.color > 0 && restHojas.color}
            </p>
          </div>

          <div className="flex relative">
            <label
              htmlFor="hojasBN"
              className="w-1/3 text-center text-xs font-serif shadow-md mr-3 p-1 rounded-lg font-semibold bg-gradient-to-br from-slate-300 to-black/70 text-slate-200"
            >
              b/n
            </label>
            <input
              onChange={(e) => handlerChangeHojas(e, testInyectores)}
              name="bn"
              type="number"
              id="hojasBN"
              className="text-center text-xs font-semibold rounded-lg bg-white/5 focus:outline-none hover:bg-white/10 shadow-inner shadow-black/20"
            />
            <p className="absolute text-green-500 -right-10 text-sm">
              {restHojas.bn > 0 && restHojas.bn}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CajaHojas;
