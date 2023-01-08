import { faEdit, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import AuthContext from "../../../context/authContext";

const ProductoInsumos = ({
  insumo,
  handlerChangeInsumoToEdit,
  sendDataToEdit,
  insumoEdit,
  EliminarData,
  setBotonEditOff,
  botonEditOff,
}) => {
  const [modalEditar, setModalEditar] = useState(false);

  const { user } = useContext(AuthContext);

  return (
    <div className="w-full my-2 rounded-md shadow-md flex justify-between">
      {!modalEditar ? (
        <div className=" w-1/3 text-center">
          <h4 className="p-2 text-xs md:text-sm bg-white/5 font-medium">
            {insumo.nombre}
          </h4>
        </div>
      ) : (
        <div className=" w-1/3 text-center text-zinc-500 border-x-2 p-2">
          <input
            defaultValue={insumoEdit.nombre ? insumoEdit.nombre : insumo.nombre}
            onChange={handlerChangeInsumoToEdit}
            name="nombre"
            type="text"
            className="w-full h-full text-xs md:text-sm text-center bg-transparent hover:outline-none focus:outline-none"
          />
        </div>
      )}

      {!modalEditar ? (
        <div className=" w-1/3 flex">
          <h4 className="p-2 w-full text-center text-xs md:text-sm bg-white/5 font-medium">
            {insumo.almacen}
          </h4>
        </div>
      ) : (
        <div className=" w-1/3 text-center border-x-2 p-2 text-zinc-500">
          <input
            defaultValue={
              insumoEdit.almacen ? insumoEdit.almacen : insumo.almacen
            }
            onChange={handlerChangeInsumoToEdit}
            name="almacen"
            type="number"
            className="w-full h-full text-xs md:text-sm text-center bg-transparent hover:outline-none focus:outline-none"
          />
        </div>
      )}

      {!modalEditar ? (
        <div className="relative w-1/3 flex text-center">
          <h4 className="p-2 w-full text-center text-xs md:text-sm bg-white/5 font-medium">
            {insumo.local}
          </h4>
          {!botonEditOff && user?.role === "admin" && (
            <div
              onClick={() => {
                setModalEditar(true);
                setBotonEditOff(true);
              }}
              className="absolute -right-2 text-slate-500 hover border-l-2 rounded-lg h-full  hover:cursor-pointer hover:bg-teal-400/50 w-10 flex flex-col justify-center items-center text-center"
            >
              <FontAwesomeIcon className="text-lg " icon={faEdit} />
            </div>
          )}
        </div>
      ) : (
        <div className="relative w-1/3 flex text-center border-x-2">
          <input
            defaultValue={insumoEdit.local ? insumoEdit.local : insumo.local}
            onChange={handlerChangeInsumoToEdit}
            name="local"
            type="number"
            className="w-full h-full text-xs md:text-sm text-center bg-transparent hover:outline-none focus:outline-none text-zinc-500"
          />
          <div
            onClick={() => {
              sendDataToEdit(insumo._id);
              setModalEditar(false);
              setBotonEditOff(false);
            }}
            className="absolute right-0 border-l-2 rounded-lg h-full bg-white/10 hover:cursor-pointer hover:bg-yellow-400/40 w-10 flex flex-col justify-center items-center text-center"
          >
            <FontAwesomeIcon
              className="text-lg"
              icon={faPaperPlane}
            />
          </div>
          <div
            onClick={() => {
              EliminarData(insumo._id);
              setModalEditar(false);
            }}
            className="absolute -left-5 border-l-2 rounded-lg h-full bg-white/10 hover:cursor-pointer hover:bg-red-400/40 w-10 flex flex-col justify-center items-center text-center"
          >
            <FontAwesomeIcon
              className="text-lg"
              icon={faTrash}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductoInsumos;
