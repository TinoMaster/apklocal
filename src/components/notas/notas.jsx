import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faPenToSquare,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { httpHelper } from "../../helpers/httpHelper";
import apiConfig from "../../config/api.config.json"

export const Notas = ({
  children,
  id,
  nombre,
  telefono,
  fecha,
  creador,
  setNotas,
  panelBotones,
  setModalIsOpen,
  setDataToEdit,
  nota,
}) => {
  const urlNota = `${apiConfig.api.url}/notas/${id}`;

  const eliminarNota = async () => {
    let opcion = window.confirm("Estas seguro que desea borrar la nota");

    if (opcion === true) {
      await httpHelper().del(urlNota);
      httpHelper()
        .get(`${apiConfig.api.url}/notas`)
        .then((resp) => setNotas(resp));
    }
  };

  return (
    <div className="w-10/12 mx-auto my-4 flex shadow-lg rounded-lg p-2 relative bg-white/5">
      {panelBotones && (
        <div className="flex absolute w-1/4 justify-around">
          <FontAwesomeIcon
            className="text-sm p-2 bg-slate-400 rounded-full shadow-md text-white hover:cursor-pointer hover:bg-red-400"
            title="Eliminar"
            onClick={eliminarNota}
            icon={faTrashCan}
          />
          <FontAwesomeIcon
            className="text-sm p-2 bg-slate-400 rounded-full shadow-md text-white hover:cursor-pointer hover:bg-yellow-400"
            title="Editar"
            icon={faPenToSquare}
            onClick={() => {
              setDataToEdit(nota);
              setModalIsOpen(true);
            }}
          />
        </div>
      )}

      <div className="flex flex-col items-center w-full">
        <h3 className="w-full text-center font-serif">
          {nombre}
        </h3>
        <p className="w-full text-center text-sm font-semibold text-green-700 p-2">
          {children}
        </p>
        <div className="flex flex-col w-full">
          <p className="w-full text-left text-sm">
            <FontAwesomeIcon className="text-sm text-green-700 mr-1" icon={faPhone} /> {telefono}
          </p>
          <div className="flex w-full justify-end items-baseline">
            <p className="text-xs font-semibold mr-3">{fecha}</p>
            <p className="text-sm text-slate-400 font-semibold">{creador}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
