import React from "react";

const CajaTurno = ({ handleChangeInputRadio }) => {
  return (
    <div className="w-full md:w-1/3 mb-5 md:m-0 border-r-2">
      <h6 className="w-full text-center text-slate-400 font-semibold text-lg font-serif pt-3">
        Elegir Turno
      </h6>
      <div className="flex flex-wrap p-2 items-center justify-center">
        <input
          type="radio"
          name="turno"
          id="jorge"
          onChange={handleChangeInputRadio}
          className="hidden"
        />
        <label
          htmlFor="jorge"
          className="bg-gray-400 text-sm hover:bg-violet-500 hover:cursor-pointer font-semibold w-1/3 m-3 text-center p-1 text-white rounded-lg"
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
          className="bg-gray-400 text-sm hover:bg-violet-500 hover:cursor-pointer font-semibold w-1/3 m-3 text-center text-white p-1 rounded-lg"
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
          className="bg-gray-400 text-sm hover:bg-violet-500 hover:cursor-pointer font-semibold w-1/3 m-3 text-center text-white p-1 rounded-lg"
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
          className="bg-gray-400 text-sm hover:bg-violet-500 hover:cursor-pointer font-semibold w-1/3 m-3 text-center text-white p-1 rounded-lg"
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
          className="bg-gray-400 text-sm hover:bg-violet-500 hover:cursor-pointer font-semibold w-1/3 m-3 text-center text-white p-1 rounded-lg"
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
          className="bg-gray-400 text-sm hover:bg-violet-500 hover:cursor-pointer font-semibold w-1/3 m-3 text-center text-white p-1 rounded-lg"
        >
          Nysaer
        </label>
      </div>
    </div>
  );
};

export default CajaTurno;
