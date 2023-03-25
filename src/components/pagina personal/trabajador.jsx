import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import AuthContext from "../../context/authContext";

const Trabajador = ({ worker, setModalUpdateWorker, setDataToEdit }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="w-full relative h-96 md:w-10/12 lg:w-4/12 m-5 md:h-4/12 mt-9 md:mt-0 bg-white/5  rounded-2xl shadow-xl flex flex-col">
      {/* Boton editar trabajador */}
      {user?.role === "admin" && (
        <button
          onClick={() => {
            setDataToEdit(worker);
            setModalUpdateWorker(true);
          }}
          className="absolute text-sm bg-yellow-200 p-1 rounded-md md:right-0 shadow-md text-gray-600 hover:cursor-pointer hover:bg-yellow-300"
        >
          <FontAwesomeIcon icon={faPenToSquare} />
          Editar
        </button>
      )}

      {/* Primera caja superior */}
      <div className="h-1/2 flex rounded-t-lg  rounded-b-2xl ">
        {/* Caja imagen */}
        <div className="flex border-2 flex-wrap w-1/4 h-4/5 justify-center items-center rounded-lg bg-violet-500/50">
          {/* <img
            className="w-10/12 h-2/5 md:h-3/4 rounded-xl object-cover border-violet-100"
            src={worker.image}
            alt=""
          /> */}
          <p className="text-2xl">{worker.usuario.slice(0, 2)}</p>
        </div>
        {/* Caja nombre descripcion */}
        <div className="w-3/4 flex flex-wrap">
          <h4 className="w-full h-1/3 p-2 text-sm md:text-base text-center font-serif font-semibold">
            {worker.nombre}
          </h4>
          {/* Direccion */}
          <div className="w-1/2 h-1/3 flex flex-col">
            <p className=" text-center font-serif text-xs  font-semibold">
              Direccion
            </p>
            <p className="text-center text-xs ">
              {user.name === worker.usuario || user.role === "admin"
                ? worker.direccion
                : "*************"}
            </p>
          </div>
          {/* Municipio */}
          <div className="w-1/2 h-1/3 flex flex-col">
            <p className="text-center font-serif text-xs  font-semibold">
              Municipio
            </p>
            <p className="text-center text-xs ">
              {user.name === worker.usuario || user.role === "admin"
                ? worker.municipio
                : "*************"}
            </p>
          </div>
          {/* Telefono */}
          <div className="w-1/2 h-1/3 flex flex-col">
            <p className="text-center font-serif text-xs  font-semibold">
              Telefono
            </p>
            <p className="text-center text-xs ">
              {user.name === worker.usuario || user.role === "admin"
                ? worker.telefono
                : "*************"}
            </p>
          </div>
          {/* #Carnet */}
          <div className="w-1/2 h-1/3 flex flex-col">
            <p className="text-center font-serif text-xs  font-semibold">ID</p>
            <p className="text-center text-xs ">
              {user.name === worker.usuario || user.role === "admin"
                ? worker.id
                : "*************"}
            </p>
          </div>
        </div>
      </div>

      {/* caja inferior */}
      <div className="flex flex-col h-1/2 rounded-b-lg">
        <h4 className="h-1/3 w-full text-xs  p-2 font-serif font-semibold text-center">
          Info:
        </h4>
        <div className="h-full w-full flex flex-wrap">
          {/* Correo electronico */}
          <div className="w-1/2 md:w-1/3 flex flex-col items-center">
            <h4 className="text-xs  font-serif font-semibold">Correo</h4>
            <p className="text-xs  text-center w-full">
              {user.name === worker.usuario || user.role === "admin"
                ? worker.correo
                : "*************"}
            </p>
          </div>
          {/* Usuario */}
          <div className="w-1/2 md:w-1/3 flex flex-col items-center">
            <h4 className="text-xs  font-serif font-semibold">Usuario</h4>
            <p className="text-xs  text-center w-full">{worker.usuario}</p>
          </div>
          {/* Contraseña */}
          <div className="w-1/2 md:w-1/3 flex flex-col items-center">
            <h4 className="text-xs  font-serif font-semibold">Role</h4>
            <p className="text-xs  text-center w-full">{worker.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trabajador;
