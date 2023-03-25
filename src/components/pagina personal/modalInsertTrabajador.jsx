import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export const ModalInsertTrabajador = ({
  setModalInsertWorker,
  handlerChangeWorker,
  handlerChangeWorkerImage,
  imageModalWorker,
  uploadWorker,
  errorUploadWorker,
  setErrorUploadWorker,
  roles,
  darkMode,
}) => {
  const [newRole, setNewRole] = useState(false);
  return (
    <div
      className={
        darkMode
          ? "relative w-11/12 h-full md:w-10/12 md:h-4/12 lg:h-5/6 max-w-5xl md:mt-0 bg-darkMode text-lightMode rounded-2xl shadow-xl flex flex-col items-center"
          : "relative w-11/12 h-full md:w-10/12 md:h-4/12 lg:h-5/6 max-w-5xl md:mt-0 bg-lightMode rounded-2xl text-darkMode shadow-xl flex flex-col items-center"
      }
    >
      {/* Modal error */}
      <div
        className={
          !errorUploadWorker?.error
            ? "absolute -top-10 bg-transparent transition-all text-white p-2"
            : "absolute -top-8 shadow-md bg-rose-400/90 text-white p-2 rounded transition-all"
        }
      >
        {errorUploadWorker?.error && (
          <p>
            <FontAwesomeIcon icon={faCircleInfo} /> {errorUploadWorker?.message}
          </p>
        )}
      </div>
      {/* {errorUploadWorker?.error && (
        <div className="absolute w-full flex justify-center -top-10">
          <p className="bg-red-400/90 rounded-md p-2 text-white">{errorUploadWorker.message}</p>
        </div>
)} */}

      {/* Primera caja superior */}
      <div className="h-4/6 flex flex-wrap justify-center items-center pt-2 rounded-t-lg bg-white/5 relative">
        {/* Caja imagen */}
        <div className="flex w-full h-1/3 flex-wrap justify-center">
          {/* image */}
          <div className="w-40 h-44 rounded-lg overflow-hidden bg-white/10 shadow-md">
            {imageModalWorker && (
              <img
                src={URL.createObjectURL(imageModalWorker)}
                alt="imagen"
                className="w-full h-full object-cover"
              />
            )}
          </div>
          {/* input file */}
          <div className="flex justify-center z-10 w-full">
            <label
              htmlFor="file"
              className="p-1 bg-white/5 rounded-md text-xs font-serif shadow-md hover:cursor-pointer hover:bg-white/10 mt-1"
            >
              Seleccionar imagen
            </label>
            <input
              type="file"
              name="image"
              id="file"
              className="hidden"
              accept=".jpg"
              onChange={handlerChangeWorkerImage}
            />
          </div>
        </div>
        {/* Caja nombre descripcion */}
        <div className="w-full h-2/3 flex flex-wrap py-5">
          <label className="w-full h-1/5 p-2 text-sm lg:text-lg md:text-base text-center font-serif font-semibold">
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
            <label className=" text-center font-serif text-xs lg:text-lg font-semibold">
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
            <label className="text-center font-serif text-xs lg:text-lg font-semibold">
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
            <label className="text-center font-serif text-xs lg:text-lg font-semibold">
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
          <div className="md:w-1/2 m-auto h-1/5 flex flex-col">
            <label className="text-center font-serif text-xs lg:text-lg font-semibold">
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
          <div className=" md:w-1/2 m-auto h-1/5 flex flex-col">
            <label className="flex flex-col relative text-center font-serif text-xs lg:text-lg font-semibold">
              <label
                className="w-full flex justify-end pr-4 absolute text-sm"
                htmlFor="new_role"
              >
                Nuevo Role{" "}
                <input
                  onChange={(e) => {
                    if (e.target.checked) {
                      setNewRole(true);
                    } else setNewRole(false);
                  }}
                  className="ml-1"
                  type="checkbox"
                  name="new_role"
                  id="new_role"
                />
              </label>
              Role
              {roles?.length > 0 && newRole === false ? (
                <select
                  className="text-center focus:outline-none bg-white/5 p-2 rounded-lg"
                  name="role"
                  id="role"
                  onChange={handlerChangeWorker}
                >
                  {roles?.map((role) => (
                    <option value={role.name} key={role._id}>
                      {role.name}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  onChange={handlerChangeWorker}
                  className="input-worker"
                  type="text"
                  name="role"
                />
              )}
            </label>
          </div>
        </div>
      </div>

      {/* caja inferior */}
      <div className="h-2/6 flex flex-col  rounded-b-lg bg-white/10 pt-2">
        <div className="h-full w-full flex flex-wrap">
          {/* Correo electronico */}
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <label className="text-xs lg:text-lg text-center font-serif font-semibold">
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
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <label
              className="text-xs lg:text-lg text-center font-serif font-semibold"
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
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <label className="text-xs lg:text-lg text-center font-serif font-semibold">
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
                setErrorUploadWorker({});
                setModalInsertWorker(false);
              }}
              className="bg-red-400 hover:bg-red-500 w-10/12 lg:w-auto mx-5 rounded-md shadow-md font-serif text-sm lg:text-lg py-1 px-2 text-white"
            />
            <input
              onClick={() => uploadWorker()}
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
