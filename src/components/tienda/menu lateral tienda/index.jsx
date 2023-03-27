import {
  faCartFlatbed,
  faClockRotateLeft,
  faPlus,
  faSitemap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

export const MenuTienda = ({ darkMode }) => {
  return (
    <div
      className={
        darkMode
          ? "absolute bottom-0 w-full bg-darkMode z-30 rounded-t-md"
          : "absolute bottom-0 w-full bg-lightMode z-30 rounded-t-md"
      }
    >
      <div className="flex p-2">
        <div className="flex w-full">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "p-2 w-full font-serif flex items-baseline text-violet-700 justify-center"
                : "p-2 w-full font-serif flex items-baseline justify-center"
            }
            to={"/tienda/addProduct"}
            title="Añadir producto"
          >
            <FontAwesomeIcon className={`p-2 shadow-md ${darkMode? "shadow-primary/10":"shadow-black/20"} rounded-md`} icon={faPlus} />
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "p-2 w-full font-serif flex items-baseline text-violet-700 justify-center"
                : "p-2 w-full font-serif flex items-baseline justify-center"
            }
            to={"/tienda/inventario"}
            title="Inventario"
          >
            <FontAwesomeIcon className={`p-2 shadow-md ${darkMode? "shadow-primary/10":"shadow-black/20"} rounded-md`} icon={faCartFlatbed} />
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "p-2 w-full font-serif flex items-baseline text-violet-700 justify-center"
                : "p-2 w-full font-serif flex items-baseline justify-center"
            }
            to={"/tienda/historial"}
            title="Historial Venta"
          >
            <FontAwesomeIcon className={`p-2 shadow-md ${darkMode? "shadow-primary/10":"shadow-black/20"} rounded-md`} icon={faClockRotateLeft} />
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "p-2 w-full font-serif flex items-baseline text-violet-700 justify-center"
                : "p-2 w-full font-serif flex items-baseline justify-center"
            }
            to={"/tienda/estadisticas"}
            title="Estadisticas"
          >
            <FontAwesomeIcon className={`p-2 shadow-md ${darkMode? "shadow-primary/10":"shadow-black/20"} rounded-md`} icon={faSitemap} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};
