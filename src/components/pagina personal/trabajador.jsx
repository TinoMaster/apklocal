import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import AuthContext from "../../context/authContext";

const Trabajador = ({ worker, setModalUpdateWorker, setDataToEdit }) => {
  const { user } = useContext(AuthContext);
  return (
    <div className="w-full relative h-96 md:w-10/12 lg:w-4/12 m-5 md:h-4/12 mt-9 md:mt-0 bg-slate-100 rounded-2xl shadow-xl flex flex-col">
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
      <div className="h-1/2 flex rounded-t-lg bg-white rounded-b-2xl shadow-lg shadow-white/40">
        {/* Caja imagen */}
        <div className="flex flex-wrap w-1/4 justify-center items-center">
          <img
            className="w-10/12 h-2/5 md:h-3/4 rounded-xl object-cover border-violet-100"
            src={worker.image}
            alt=""
          />
        </div>
        {/* Caja nombre descripcion */}
        <div className="w-3/4 h-full flex flex-wrap">
          <h4 className="w-full h-1/3 p-2 text-sm md:text-base text-center text-slate-700 font-serif font-semibold">
            {worker.nombre}
          </h4>
          {/* Direccion */}
          <div className="w-1/2 h-1/3 flex flex-col">
            <p className=" text-center font-serif text-xs  text-slate-700 font-semibold">
              Direccion
            </p>
            <p className="text-center text-xs  text-slate-700">
              {worker.direccion}
            </p>
          </div>
          {/* Municipio */}
          <div className="w-1/2 h-1/3 flex flex-col">
            <p className="text-center font-serif text-xs  text-slate-700 font-semibold">
              Municipio
            </p>
            <p className="text-center text-xs  text-slate-700">
              {worker.municipio}
            </p>
          </div>
          {/* Telefono */}
          <div className="w-1/2 h-1/3 flex flex-col">
            <p className="text-center font-serif text-xs  text-slate-700 font-semibold">
              Telefono
            </p>
            <p className="text-center text-xs  text-slate-700">
              {worker.telefono}
            </p>
          </div>
          {/* #Carnet */}
          <div className="w-1/2 h-1/3 flex flex-col">
            <p className="text-center font-serif text-xs  text-slate-700 font-semibold">
              ID
            </p>
            <p className="text-center text-xs  text-slate-700">{worker.id}</p>
          </div>
        </div>
      </div>

      {/* caja inferior */}
      <div className="h-1/2 flex flex-col rounded-b-lg">
        <h4 className="h-1/3 w-full text-xs  p-2 text-slate-700 font-serif font-semibold text-center">
          Info:
        </h4>
        <div className="h-full w-full flex flex-wrap">
          {/* Correo electronico */}
          <div className="w-1/2 md:w-1/3 flex flex-col items-center">
            <h4 className="text-xs  text-slate-700 font-serif font-semibold">
              Correo
            </h4>
            <p className="text-xs  text-center text-slate-700 w-full">
              {worker.correo}
            </p>
          </div>
          {/* Usuario */}
          <div className="w-1/2 md:w-1/3 flex flex-col items-center">
            <h4 className="text-xs  text-slate-700 font-serif font-semibold">
              Usuario
            </h4>
            <p className="text-xs  text-slate-700 text-center w-full">
              {worker.usuario}
            </p>
          </div>
          {/* Contraseña */}
          <div className="w-1/2 md:w-1/3 flex flex-col items-center">
            <h4 className="text-xs  text-slate-700 font-serif font-semibold">
              Role
            </h4>
            <p className="text-xs  text-slate-700 text-center w-full">
              {worker.role}
            </p>
          </div>
          {/* Venta este mes */}
          <div className="w-1/2 md:w-1/3 flex flex-col items-center">
            <h4 className="text-xs  text-slate-700 font-serif font-semibold">
              este mes
            </h4>
            <p className="text-xs  text-slate-700">$ 12874</p>
          </div>
          {/* salario este año */}
          <div className="w-1/2 md:w-1/3 flex flex-col items-center">
            <h4 className="text-xs  text-slate-700 font-serif font-semibold">
              este año
            </h4>
            <p className="text-xs  text-slate-700">$ 32014</p>
          </div>
          <div className="w-1/2 md:w-1/3 flex flex-col items-center">
            <h4 className="text-xs  text-slate-700 font-serif font-semibold">
              general
            </h4>
            <p className="text-xs  text-slate-700">$ 84210</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trabajador;
