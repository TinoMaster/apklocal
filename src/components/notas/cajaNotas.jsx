import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faPenToSquare,
  faCirclePlus,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Notas } from "./notas";
import { useState, useEffect } from "react";
import { httpHelper } from "../../helpers/httpHelper";
import { useNota } from "../../hooks/useNota";
import { ModalPortal } from "../modalPortal/modalPortal";
import AuthContext from "../../context/authContext";
import apiConfig from "../../config/api.config.json";

const modeloNota = {
  id: "",
  description: "",
  nombre: "",
  fecha: "",
  telefono: "",
};

export const CajaNotas = () => {
  const [notas, setNotas] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [panelBotones, setPanelBotones] = useState(false);
  const [dataToEdit, setDataToEdit] = useState(null);
  const urlNotas = `${apiConfig.api.url}/notas`;

  const { nota, handleChangeNota, handlerSubmit } = useNota(
    modeloNota,
    dataToEdit
  );

  const { user } = useContext(AuthContext);

  useEffect(() => {
    httpHelper()
      .get(`${apiConfig.api.url}/notas`)
      .then((el) => {
        if (!el.length) {
          setNotas([]);
        } else {
          setNotas(el);
        }
      });
  }, []);

  const abrirPanel = () => {
    setPanelBotones(true);
  };
  const cerrarPanel = () => {
    setPanelBotones(false);
  };

  const crearNota = () => {
    setDataToEdit(null);
    setModalIsOpen(true);
  };

  const insertarNota = async (data) => {
    const dataToSend = { ...data, creador: user.name };
    if (dataToEdit) {
      const options = {
        body: dataToSend,
        headers: { "Content-Type": "application/json" },
      };
      await httpHelper().put(
        `${apiConfig.api.url}/notas/${dataToEdit.id}`,
        options
      );
      await httpHelper()
        .get(urlNotas)
        .then((el) => setNotas(el));

      setModalIsOpen(false);
    } else {
      const fecha = new Date();

      data.id = Date.now();
      data.fecha = `${fecha.getDate()}/${
        fecha.getMonth() + 1
      }/${fecha.getFullYear()}`;
      data.creador = user.name;

      const options = {
        body: data,
        headers: { "Content-Type": "application/json" },
      };

      await httpHelper().post(urlNotas, options);
      await httpHelper()
        .get(urlNotas)
        .then((el) => setNotas(el));

      setModalIsOpen(false);
    }
    setDataToEdit(null);
  };

  return (
    <div className="flex flex-col w-full h-full relative">
      {modalIsOpen && (
        <ModalPortal>
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
        </ModalPortal>
      )}

      <div className="w-full h-full overflow-auto p-2">
        <div className="flex flex-wrap relative justify-end w-full">
          <h2 className="w-full text-center text-slate-600 font-semibold text-base font-serif">
            Notas
          </h2>

          <div className="flex w-2/4 p-2 mt-1 justify-between bg-white shadow-sm rounded-md">
            <FontAwesomeIcon
              icon={faCirclePlus}
              className="p-2 bg-green-400 rounded-full text-white shadow-lg shadow-green-300/40 hover:cursor-pointer hover:bg-green-500"
              title="Agregar"
              onClick={crearNota}
            />
            <FontAwesomeIcon
              className="p-2 bg-yellow-400 rounded-full text-white shadow-lg shadow-yellow-300/40 hover:cursor-pointer hover:bg-yellow-500"
              title="Editar"
              icon={faPenToSquare}
              onClick={abrirPanel}
            />
            <FontAwesomeIcon
              className="p-2 bg-red-400 rounded-full text-white shadow-lg shadow-red-300/40 hover:cursor-pointer hover:bg-red-500"
              title="Eliminar"
              icon={faTrashCan}
              onClick={abrirPanel}
            />
          </div>
          {panelBotones && !modalIsOpen && (
            <div className="w-full flex absolute py-2">
              <p
                className="px-2 py-1 rounded-full bg-red-400 text-white inline shadow-sm hover:cursor-pointer hover:bg-red-500 text-sm font-semibold"
                onClick={cerrarPanel}
              >
                X
              </p>
            </div>
          )}
        </div>

        <div className="cuadranteNotas">
          {notas.length === 0 ? (
            <p>No hay Notas</p>
          ) : (
            notas?.map((nota) => (
              <Notas
                key={nota.id}
                nombre={nota.nombre}
                fecha={nota.fecha}
                creador={nota.creador}
                telefono={nota.telefono}
                id={nota.id}
                setNotas={setNotas}
                setPanelBotones={setPanelBotones}
                panelBotones={panelBotones}
                setModalIsOpen={setModalIsOpen}
                setDataToEdit={setDataToEdit}
                nota={nota}
              >
                {`- ${nota.description}`}
              </Notas>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
