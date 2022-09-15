import React from "react";

export const ModalInsertTrabajador = ({
  setModalWorker,
  handlerChangeWorker,
}) => {
  return (
    <div className="w-11/12 h-96 md:w-10/12 p-2 lg:w-6/12 lg:h-2/3 md:h-4/12 overflow-hidden md:mt-0 bg-slate-100 rounded-2xl shadow-xl flex flex-col">
      {/* Primera caja superior */}
      <div className="h-3/5 flex rounded-t-lg bg-white rounded-b-2xl shadow-lg shadow-white/40">
        {/* Caja imagen */}
        <div className="flex flex-wrap w-1/4 h-full justify-center items-center">
          <div className="w-full h-1/2 m-auto border-2 border-violet-300 bg-black/10 shadow-md"></div>
        </div>
        {/* Caja nombre descripcion */}
        <div className="w-3/4 h-full flex flex-wrap">
          <label className="w-full h-1/5 p-2 text-sm lg:text-lg md:text-base text-center text-slate-700 font-serif font-semibold">
            Nombre
            <input
              autoComplete="off"
              name="nombre"
              onChange={handlerChangeWorker}
              type="text"
              className="input-worker"
            />
          </label>
          {/* Direccion */}
          <div className="w-11/12 h-1/5 flex flex-col m-auto">
            <label className=" text-center font-serif text-xs lg:text-lg  text-slate-700 font-semibold">
              Direccion
              <input
                autoComplete="off"
                name="direccion"
                onChange={handlerChangeWorker}
                className="input-worker"
                type="text"
              />
            </label>
          </div>
          {/* Municipio */}
          <div className="w-1/2 h-1/5 flex flex-col">
            <label className="text-center font-serif text-xs lg:text-lg  text-slate-700 font-semibold">
              Municipio
              <input
                autoComplete="off"
                name="municipio"
                onChange={handlerChangeWorker}
                className="input-worker"
                type="text"
              />
            </label>
          </div>
          {/* Telefono */}
          <div className="w-1/2 h-1/5 flex flex-col">
            <label className="text-center font-serif text-xs lg:text-lg  text-slate-700 font-semibold">
              Telefono
              <input
                autoComplete="off"
                name="telefono"
                onChange={handlerChangeWorker}
                className="input-worker"
                type="number"
              />
            </label>
          </div>
          {/* #Carnet */}
          <div className="w-10/12 m-auto h-1/5 flex flex-col">
            <label className="text-center font-serif text-xs lg:text-lg  text-slate-700 font-semibold">
              ID
              <input
                autoComplete="off"
                name="id"
                onChange={handlerChangeWorker}
                className="input-worker"
                type="number"
              />
            </label>
          </div>
        </div>
      </div>

      {/* caja inferior */}
      <div className="h-2/5 flex flex-col rounded-b-lg">
        <h4 className="h-1/3 w-full text-xs lg:text-lg  p-2 text-slate-700 font-serif font-semibold text-center">
          Info:
        </h4>
        <div className="h-full w-full flex flex-wrap">
          {/* Correo electronico */}
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <label className="text-xs lg:text-lg text-center text-slate-700 font-serif font-semibold">
              Correo
              <input
                autoComplete="off"
                name="correo"
                onChange={handlerChangeWorker}
                className="input-worker"
                type="email"
                required
              />
            </label>
          </div>
          {/* Usuario */}
          <div className="w-1/2 md:w-1/3 flex flex-col items-center">
            <label
              className="text-xs lg:text-lg text-center text-slate-700 font-serif font-semibold"
              autoComplete="off"
            >
              Usuario
              <input
                autoComplete="off"
                name="usuario"
                onChange={handlerChangeWorker}
                className="input-worker"
                type="text"
              />
            </label>
          </div>
          {/* Contraseña */}
          <div className="w-1/2 md:w-1/3 flex flex-col items-center">
            <label className="text-xs lg:text-lg text-center text-slate-700 font-serif font-semibold">
              Contraseña
              <input
                autoComplete="off"
                name="contraseña"
                onChange={handlerChangeWorker}
                type="password"
                className="input-worker"
              />
            </label>
          </div>
          <div className="w-full flex justify-center items-center">
            <input
              type="button"
              value="Cancelar"
              onClick={() => {
                setModalWorker(false);
              }}
              className="bg-red-400 hover:bg-red-500 w-10/12 lg:w-auto mx-5 rounded-md shadow-md font-serif text-sm lg:text-lg py-1 px-2 text-white"
            />
            <input
              type="submit"
              value="Registrar"
              className="bg-green-400 hover:bg-green-500 w-10/12 lg:w-auto mx-5 rounded-md shadow-md font-serif text-sm lg:text-lg py-1 px-2 text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
