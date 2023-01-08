import {
  faEdit,
  faPaperPlane,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import AuthContext from "../../../context/authContext";

const ProductoMedioBasico = ({
  MBasico,
  mBasicoToEdit,
  handlerChangeMBasicoToEdit,
  sendDataToEditMBasicos,
  botonEditOff,
  setBotonEditOff,
  EliminarData,
}) => {
  const [modalEditar, setModalEditar] = useState(false);

  const { user } = useContext(AuthContext);

  return (
    <div className="w-full my-2 rounded-md shadow-md flex justify-between">
      {!modalEditar ? (
        <div className=" w-2/12 text-center">
          <h4 className=" p-2 text-xs md:text-sm bg-white/5 font-medium">
            {MBasico.nombre === undefined ? "-" : MBasico.nombre}
          </h4>
        </div>
      ) : (
        <div className=" w-2/12 text-center border-x-2 p-1">
          <input
            defaultValue={
              mBasicoToEdit.nombre ? mBasicoToEdit.nombre : MBasico.nombre
            }
            onChange={handlerChangeMBasicoToEdit}
            name="nombre"
            type="text"
            className="w-full h-full text-center text-zinc-500 bg-transparent hover:outline-none text-sm focus:outline-none"
          />
        </div>
      )}

      {!modalEditar ? (
        <div className=" w-3/12 text-center">
          <h4 className="p-2 text-xs md:text-sm bg-white/5 font-medium">
            {MBasico.modelo === undefined ? "-" : MBasico.modelo}
          </h4>
        </div>
      ) : (
        <div className=" w-3/12 text-center border-x-2 p-1">
          <input
            defaultValue={
              mBasicoToEdit.modelo ? mBasicoToEdit.modelo : MBasico.modelo
            }
            onChange={handlerChangeMBasicoToEdit}
            name="modelo"
            type="text"
            className="w-full h-full text-center text-zinc-500 bg-transparent hover:outline-none text-sm focus:outline-none"
          />
        </div>
      )}

      {!modalEditar ? (
        <div className=" w-3/12 text-center">
          <h4 className="p-2 text-xs md:text-sm bg-white/5 font-medium">
            {MBasico.serie === undefined ? "-" : MBasico.serie}
          </h4>
        </div>
      ) : (
        <div className=" w-3/12 text-center border-x-2 p-1">
          <input
            defaultValue={
              mBasicoToEdit.serie ? mBasicoToEdit.serie : MBasico.serie
            }
            onChange={handlerChangeMBasicoToEdit}
            name="serie"
            type="text"
            className="w-full h-full text-center text-zinc-500 bg-transparent hover:outline-none text-sm focus:outline-none"
          />
        </div>
      )}

      {!modalEditar ? (
        <div className=" w-2/12 text-center">
          <h4 className="p-2 text-xs md:text-sm bg-white/5 font-medium">
            {MBasico.almacen === 0 ? "-" : MBasico.almacen}
          </h4>
        </div>
      ) : (
        <div className=" w-2/12 text-center border-x-2 p-1">
          <input
            defaultValue={
              mBasicoToEdit.almacen ? mBasicoToEdit.almacen : MBasico.almacen
            }
            onChange={handlerChangeMBasicoToEdit}
            name="almacen"
            type="number"
            className="w-full h-full text-center text-zinc-500 bg-transparent hover:outline-none text-sm focus:outline-none"
          />
        </div>
      )}

      {!modalEditar ? (
        <div className="relative w-2/12 text-center flex">
          <h4 className="p-2 w-full text-xs md:text-sm bg-white/5 font-medium">
            {MBasico.local === 0 ? "-" : MBasico.local}
          </h4>
          {!botonEditOff && user?.role === "admin" && (
            <div
              onClick={() => {
                setModalEditar(true);
                setBotonEditOff(true);
              }}
              className="absolute -right-2  border-l-2 rounded-lg h-full bg-white/5 hover:cursor-pointer hover:bg-yellow-400/40 w-10 flex flex-col justify-center items-center text-center"
            >
              <FontAwesomeIcon
                className="text-lg text-slate-500"
                icon={faEdit}
              />
            </div>
          )}
        </div>
      ) : (
        <div className="relative w-2/12 text-center flex">
          <input
            defaultValue={
              mBasicoToEdit.local ? mBasicoToEdit.local : MBasico.local
            }
            onChange={handlerChangeMBasicoToEdit}
            name="local"
            type="number"
            className="w-full h-full text-center text-zinc-500 bg-transparent hover:outline-none text-sm focus:outline-none"
          />
          <div
            onClick={() => {
              sendDataToEditMBasicos(MBasico._id);
              setModalEditar(false);
              setBotonEditOff(false);
            }}
            className="absolute -right-2  border-l-2 rounded-lg h-full bg-slate-50 hover:cursor-pointer hover:bg-teal-400/50 w-10 flex flex-col justify-center items-center text-center"
          >
            <FontAwesomeIcon
              className="text-lg text-slate-500"
              icon={faPaperPlane}
            />
          </div>
          <div
            onClick={() => {
              EliminarData(MBasico._id);
              setModalEditar(false);
            }}
            className="absolute -left-5 border-l-2 rounded-lg h-full bg-slate-50 hover:cursor-pointer hover:bg-red-400/40 w-10 flex flex-col justify-center items-center text-center"
          >
            <FontAwesomeIcon
              className="text-lg text-slate-800"
              icon={faTrashCan}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductoMedioBasico;
