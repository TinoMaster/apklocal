import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const InsertNota = ({
  dataToEdit,
  handleChangeNota,
  handlerSubmit,
  insertarNota,
  nota,
  setModalIsOpen,
}) => {
  return (
    <div className="flex w-full md:w-1/2 lg:w-1/3 h-full absolute z-50 items-center justify-center">
      <div className="flex rounded-lg flex-col w-10/12 bg-white shadow-lg shadow-green-400/30 border-2 border-green-300 p-2">
        <h3 className="w-full text-center text-lg font-serif text-green-700">
          {dataToEdit ? "Editar Nota" : "Nueva nota"}
        </h3>
        <div className="flex flex-col">
          <label
            className="w-full text-center text-slate-600 font-semibold mt-2"
            htmlFor="nombre"
          >
            Nombre:{" "}
          </label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            onChange={(el) => handleChangeNota(el)}
            className=" w-1/3 m-auto focus:outline-none shadow-md rounded-md text-center text-sm text-green-600 "
            defaultValue={dataToEdit ? dataToEdit.nombre : ""}
            autoComplete="off"
          />
          <label
            className="w-full text-center text-slate-600 font-semibold mt-2"
            htmlFor="description"
          >
            Descripcion:{" "}
          </label>
          <textarea
            name="description"
            onChange={(el) => handleChangeNota(el)}
            id="description"
            className="shadow-md text-center text-sm rounded-md text-green-600 focus:outline-none resize-none overflow-auto"
            defaultValue={dataToEdit ? dataToEdit.description : ""}
          ></textarea>
          <div className="mt-2">
            <label htmlFor="tel" className="text-sm text-green-700">
              <FontAwesomeIcon icon={faPhone} /> :{" "}
            </label>
            <input
              type="number"
              onChange={(el) => handleChangeNota(el)}
              name="telefono"
              id="tel"
              className="shadow-md text-center text-sm rounded-md p-1 focus:outline-none text-green-600"
              defaultValue={dataToEdit ? dataToEdit.telefono : ""}
            />
          </div>
        </div>
        <div className="mt-2 w-full flex p-3 justify-center">
          <input
            type="button"
            name="submit"
            onClick={async () => {
              await handlerSubmit();
              insertarNota(nota);
            }}
            value="Insertar"
            className="py-1 px-2 mr-3 rounded-lg bg-green-500 shadow-lg shadow-green-400/40 hover:bg-green-600 hover:cursor-pointer"
          />
          <input
            type="button"
            name="cancelar"
            onClick={() => setModalIsOpen(false)}
            value="Cancelar"
            className="py-1 px-2 rounded-lg bg-red-400 shadow-lg shadow-red-400/40 hover:bg-red-500 hover:cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
