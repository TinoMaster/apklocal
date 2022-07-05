import React, { useState } from "react";
import { usePagProducto } from "../../hooks/usePagProducto";

const PagProducto = () => {
  const [option, setOption] = useState("insumos");
  const {
    handlerSubmitSalvarInsumo,
    handlerChangeInsumo,
    handlerChangeMBasico,
    handlerSubmitSalvarMBasico,
    error,
  } = usePagProducto();

  return (
    <div className="w-3/4 m-auto">
      <div className="w-full flex justify-center mt-5">
        <input
          type="radio"
          id="insumos"
          name="option"
          className="hidden"
          defaultChecked
          onChange={(e) => setOption(e.target.id)}
        />
        <label
          htmlFor="insumos"
          className="p-3 rounded-l-lg bg-gray-500/80 hover:bg-violet-400 hover:cursor-pointer shadow-lg text-sm  text-white"
        >
          Insumos
        </label>
        <input
          type="radio"
          id="medioBasico"
          name="option"
          className="hidden"
          onChange={(e) => setOption(e.target.id)}
        />
        <label
          htmlFor="medioBasico"
          className="p-3 rounded-r-lg bg-gray-500/80 hover:bg-violet-400 hover:cursor-pointer shadow-lg text-sm  text-white"
        >
          Medio Basico
        </label>
      </div>

      {option === "insumos" && (
        <div className="w-11/12 md:w-3/4 m-auto flex flex-wrap mt-10">
          <div className="w-full rounded-md bg-violet-500/90 shadow-md flex justify-between">
            <div className=" w-1/3 text-center border-x-2">
              <h4 className="p-2 text-white font-semibold text-sm font-serif">
                Nombre
              </h4>
            </div>
            <div className=" w-1/3 text-center border-x-2">
              <h4 className="p-2 text-white font-semibold text-sm font-serif">
                Almacen
              </h4>
            </div>
            <div className=" w-1/3 text-center border-x-2">
              <h4 className="p-2 text-white font-semibold text-sm font-serif">
                Local
              </h4>
            </div>
          </div>

          <div className="w-full my-2 rounded-md shadow-md flex justify-between">
            <div className=" w-1/3 text-center border-x-2 p-1">
              <input
                onChange={handlerChangeInsumo}
                name="nombre"
                type="text"
                className="w-full h-full text-center hover:outline-none text-sm focus:outline-none"
              />
            </div>
            <div className=" w-1/3 text-center border-x-2 p-1">
              <input
                onChange={handlerChangeInsumo}
                name="almacen"
                type="number"
                className="w-full h-full text-center hover:outline-none text-sm focus:outline-none"
              />
            </div>
            <div className=" w-1/3 text-center border-x-2 p-1">
              <input
                onChange={handlerChangeInsumo}
                name="local"
                type="number"
                className="w-full h-full text-center hover:outline-none text-sm focus:outline-none"
              />
            </div>
          </div>

          <div className="flex w-full justify-center mt-5">
            <input
              onClick={() => handlerSubmitSalvarInsumo()}
              type="button"
              value="Enviar"
              className="py-3 px-7 text-sm font-serif shadow-lg shadow-violet-300 rounded-lg bg-violet-500/90 hover:bg-violet-600 hover:shadow-violet-400 hover:cursor-pointer text-white"
            />
          </div>
          {error !== "" && (
            <p className="w-1/2 m-auto rounded-lg text-center mt-5 text-sm text-white p-3 bg-red-500/80">
              {error}
            </p>
          )}
        </div>
      )}

      {option === "medioBasico" && (
        <div className="w-11/12 md:w-3/4 m-auto flex flex-wrap mt-10">
          <div className="w-full rounded-md bg-violet-500/90 shadow-md flex justify-between">
            <div className=" w-1/5 text-center border-x-2">
              <h4 className="p-2 text-white font-semibold text-sm font-serif">
                Nombre
              </h4>
            </div>
            <div className=" w-1/5 text-center border-x-2">
              <h4 className="p-2 text-white font-semibold text-sm font-serif">
                Modelo
              </h4>
            </div>
            <div className=" w-1/5 text-center border-x-2">
              <h4 className="p-2 text-white font-semibold text-sm font-serif">
                # Serie
              </h4>
            </div>
            <div className=" w-1/5 text-center border-x-2">
              <h4 className="p-2 text-white font-semibold text-sm font-serif">
                Almacen
              </h4>
            </div>
            <div className=" w-1/5 text-center border-x-2">
              <h4 className="p-2 text-white font-semibold text-sm font-serif">
                Local
              </h4>
            </div>
          </div>

          <div className="w-full my-2 rounded-md shadow-md flex justify-between">
            <div className=" w-1/5 text-center border-x-2 p-1">
              <input
                name="nombre"
                onChange={handlerChangeMBasico}
                type="text"
                className="w-full h-full text-center hover:outline-none text-sm focus:outline-none"
              />
            </div>
            <div className=" w-1/5 text-center border-x-2 p-1">
              <input
                name="modelo"
                onChange={handlerChangeMBasico}
                type="text"
                className="w-full h-full text-center hover:outline-none text-sm focus:outline-none"
              />
            </div>
            <div className=" w-1/5 text-center border-x-2 p-1">
              <input
                name="serie"
                onChange={handlerChangeMBasico}
                type="text"
                className="w-full h-full text-center hover:outline-none text-sm focus:outline-none"
              />
            </div>
            <div className=" w-1/5 text-center border-x-2 p-1">
              <input
                name="almacen"
                onChange={handlerChangeMBasico}
                type="number"
                className="w-full h-full text-center hover:outline-none text-sm focus:outline-none"
              />
            </div>
            <div className=" w-1/5 text-center border-x-2 p-1">
              <input
                name="local"
                onChange={handlerChangeMBasico}
                type="number"
                className="w-full h-full text-center hover:outline-none text-sm focus:outline-none"
              />
            </div>
          </div>

          <div className="flex w-full justify-center mt-5">
            <input
              onClick={() => handlerSubmitSalvarMBasico()}
              type="button"
              value="Enviar"
              className="py-3 px-7 text-sm font-serif shadow-lg shadow-violet-300 rounded-lg bg-violet-500/90 hover:bg-violet-600 hover:shadow-violet-400 hover:cursor-pointer text-white"
            />
          </div>
          {error !== "" && (
            <p className="w-1/2 m-auto rounded-lg text-center mt-5 text-sm text-white p-3 bg-red-500/80">
              {error}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default PagProducto;
