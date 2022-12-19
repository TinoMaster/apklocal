import {
  faCartFlatbed,
  faClockRotateLeft,
  faPlus,
  faSitemap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

export const MenuTienda = ({ openLeftMenu }) => {
  return (
    <div
      className={
        openLeftMenu
          ? "absolute md:relative md:w-1/5 h-full bg-violet-50 overflow-auto shadow-md shadow-black/20 translate-x-0 transition-transform z-20"
          : "absolute md:relative md:w-1/5 h-full bg-violet-50 overflow-auto shadow-md shadow-black/20 -translate-x-full transition-transform md:translate-x-0 z-20"
      }
    >
      <div className="flex p-2">
        <h3 className="bg-cyan-500 shadow-lg flex items-center text-white font-serif p-1 rounded">
          Paginas
        </h3>
        <div className="flex flex-col w-full">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "p-4 w-full font-serif flex items-baseline hover:bg-black/5 text-violet-700 bg-violet-100 rounded-md"
                : "p-4 w-full font-serif text-slate-700 flex items-baseline hover:bg-black/5"
            }
            to={"/tienda/addProduct"}
          >
            <FontAwesomeIcon className="px-2" icon={faPlus} />
            Añadir producto
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "p-4 w-full font-serif flex items-baseline hover:bg-black/5 text-violet-700 bg-violet-100 rounded-md"
                : "p-4 w-full font-serif text-slate-700 flex items-baseline hover:bg-black/5"
            }
            to={"/tienda/inventario"}
          >
            <FontAwesomeIcon className="px-2" icon={faCartFlatbed} />
            Inventario
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "p-4 w-full font-serif flex items-baseline hover:bg-black/5 text-violet-700 bg-violet-100 rounded-md"
                : "p-4 w-full font-serif text-slate-700 flex items-baseline hover:bg-black/5"
            }
            to={"/tienda/historial"}
          >
            <FontAwesomeIcon className="px-2" icon={faClockRotateLeft} />
            Historial
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "p-4 w-full font-serif flex items-baseline hover:bg-black/5 text-violet-700 bg-violet-100 rounded-md"
                : "p-4 w-full font-serif text-slate-700 flex items-baseline hover:bg-black/5"
            }
            to={"/tienda/estadisticas"}
          >
            <FontAwesomeIcon className="px-2" icon={faSitemap} />
            Estadisticas
          </NavLink>
        </div>
      </div>
    </div>
  );
};
