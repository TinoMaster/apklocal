import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faPenToSquare,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { Notas } from "./notas";
import { useState, useEffect } from "react";
import { httpHelper } from "../../helpers/httpHelper";
import { useNota } from "../../hooks/useNota";
import { ModalPortal } from "../modalPortal/modalPortal";
import AuthContext from "../../context/authContext";
import apiConfig from "../../config/api.config.json";
import { InsertNota } from "./insertNota";

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
  const [error, setError] = useState({});
  const [success, setSuccess] = useState({});
  const [optionNotas, setOptionNotas] = useState("unchecked");
  const urlNotas = `${apiConfig.api.url}/notas`;

  const { nota, handleChangeNota, handlerSubmit } = useNota(
    modeloNota,
    dataToEdit
  );

  const { user, darkMode } = useContext(AuthContext);

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
  }, [success]);

  const abrirPanel = () => {
    setPanelBotones(true);
  };
  const cerrarPanel = () => {
    setPanelBotones(false);
  };

  const updateChecked = (id, checked) => {
    const options = {
      body: { checked },
      headers: { "Content-Type": "application/json" },
    };

    httpHelper()
      .put(`${apiConfig.api.url}/notas/checked/${id}`, options)
      .then(async (res) => {
        if (res.error) {
          setError({ error: true, message: "Ah ocurrido un error" });
        } else if (res.success) {
          setError({});
          setSuccess({ success: true, message: "Exitoso" });
          setTimeout(() => {
            setSuccess({});
          }, 2000);
        }
      });
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
    <div
      className={
        darkMode
          ? "flex flex-col w-full h-full relative bg-darkMode transition-all delay-75"
          : "flex flex-col w-full h-full relative bg-lightMode transition-all delay-75"
      }
    >
      {modalIsOpen && (
        <ModalPortal>
          <InsertNota
            dataToEdit={dataToEdit}
            handleChangeNota={handleChangeNota}
            handlerSubmit={handlerSubmit}
            insertarNota={insertarNota}
            nota={nota}
            setModalIsOpen={setModalIsOpen}
          />
        </ModalPortal>
      )}

      {success.success && (
        <p className="absolute text-xs px-2 py-1 bg-green-400/80 text-white left-3 top-2 rounded-md transition-all">
          {success.message}
        </p>
      )}

      {error.error && (
        <p className="absolute text-xs px-2 py-1 bg-red-400/80 text-white left-3 top-2 rounded-md transition-all">
          {error.message}
        </p>
      )}

      <div className="w-full h-full p-2">
        <div className="flex flex-wrap relative justify-end w-full">
          <h2 className="w-full text-center text-slate-600 font-semibold text-base font-serif">
            Notas
          </h2>

          {/* Opciones de tipos de notas */}
          <div className="w-1/2 flex justify-center mt-5 bg-white/5 rounded-md">
            <input
              type="radio"
              id="unchecked"
              name="option"
              className="imputCheckedNotas"
              defaultChecked
              onChange={(e) => setOptionNotas(e.target.id)}
            />
            <label
              htmlFor="unchecked"
              className="p-3 rounded-l-lg hover:cursor-pointer shadow-lg text-xs font-serif"
            >
              Pendientes
            </label>
            <input
              type="radio"
              id="checked"
              name="option"
              className="imputCheckedNotas"
              onChange={(e) => setOptionNotas(e.target.id)}
            />
            <label
              htmlFor="checked"
              className="p-3 rounded-r-lg hover:cursor-pointer shadow-lg text-xs font-serif"
            >
              Completadas
            </label>
          </div>

          {/* Botones , agregar,editar y borrar */}
          <div
            className={`flex w-1/2  mt-1 ${
              user.role === "admin" ? "justify-around" : "justify-end"
            } items-start rounded-md`}
          >
            <FontAwesomeIcon
              icon={faCirclePlus}
              className="p-2 bg-green-400/70 rounded-full text-white hover:cursor-pointer shadow-md hover:bg-green-500"
              title="Agregar"
              onClick={crearNota}
            />
            {user.role === "admin" && (
              <>
                <FontAwesomeIcon
                  className="p-2 bg-yellow-400/70 rounded-full text-white hover:cursor-pointer shadow-md hover:bg-yellow-500"
                  title="Editar"
                  icon={faPenToSquare}
                  onClick={abrirPanel}
                />
                <FontAwesomeIcon
                  className="p-2 bg-red-400/70 rounded-full text-white hover:cursor-pointer shadow-md hover:bg-red-500"
                  title="Eliminar"
                  icon={faTrashCan}
                  onClick={abrirPanel}
                />
              </>
            )}
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

        {notas?.length === 0 ? (
          <p className="w-2/3 m-auto mt-5 p-2 bg-violet-300 text-center rounded-md font-serif shadow-md text-xs">
            Agregue su primera nota
          </p>
        ) : optionNotas === "unchecked" ? (
          <div className="h-full overflow-auto pb-20">
            {notas?.filter((el) => el.checked === 1).length === 0 ? (
              <p className="w-2/3 m-auto mt-5 p-2 bg-violet-300 text-center rounded-md font-serif shadow-md text-xs">
                No hay Notas sin completar
              </p>
            ) : (
              notas
                ?.filter((el) => el.checked === 1)
                .map((nota) => (
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
                    updateChecked={updateChecked}
                    optionNotas={optionNotas}
                  >
                    {`- ${nota.description}`}
                  </Notas>
                ))
            )}
          </div>
        ) : (
          <div className="h-full overflow-auto pb-20">
            {notas?.filter((el) => el.checked === 0).length === 0 ? (
              <p className="w-2/3 m-auto mt-5 py-2 bg-violet-400 text-white text-center rounded-md font-serif shadow-md text-xs">
                No hay Notas completadas
              </p>
            ) : (
              notas
                ?.filter((el) => el.checked === 0)
                .map((nota) => (
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
                    updateChecked={updateChecked}
                    optionNotas={optionNotas}
                  >
                    {`- ${nota.description}`}
                  </Notas>
                ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};
