import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCashRegister,
  faBoxesStacked,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const SectionEntradas = () => {
  return (
    <div className="border-b-2 p-2">
      <h6 className="text-white p-1 text-sm rounded font-medium inline bg-yellow-400 shadow-lg shadow-yellow-400/50">
        Entradas
      </h6>
      <ul className="flex flex-col my-2 justify-center items-center">
        <li className="link w-full font-light text-sm md:text-base hover:translate-x-2 transition-transform rounded text-stone-500 p-2 pl-5 lg:pl-14  hover:bg-slate-100">
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-semibold text-yellow-500" : ""
            }
            to="/cuadre"
          >
            <FontAwesomeIcon className="mx-1" icon={faCashRegister} /> Cuadre
          </NavLink>
        </li>
        <li className="link w-full font-light rounded hover:translate-x-2 transition-transform text-sm md:text-base text-stone-500 p-2 pl-5 lg:pl-14 hover:bg-slate-100">
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-semibold text-yellow-500" : ""
            }
            to="/productos"
          >
            <FontAwesomeIcon className="mx-1" icon={faBoxesStacked} /> Productos
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SectionEntradas;
