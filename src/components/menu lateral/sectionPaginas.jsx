import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faClipboard,
  faBoxesStacked,
  faPerson,
  faShop,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const SectionPaginas = () => {
  return (
    <div className="p-2 flex">
      <h6 className="flex items-center text-white p-1 rounded font-medium text-sm bg-teal-400 shadow-lg shadow-teal-400/50">
        Paginas
      </h6>
      <ul className="flex flex-col my-2 justify-center  items-center">
        <li className="link w-full font-light rounded hover:translate-x-2 transition-transform text-sm md:text-base hover:bg-black/5">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-teal-500 w-full h-full inline-block p-2 pl-5 lg:pl-14"
                : "w-full h-full inline-block p-2 pl-5 lg:pl-14"
            }
            to="/"
          >
            <FontAwesomeIcon className="mx-1" icon={faHome} /> Inicio
          </NavLink>
        </li>

        <li className="link w-full font-light rounded hover:translate-x-2 transition-transform text-sm md:text-base hover:bg-black/5">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-teal-500 w-full h-full inline-block p-2 pl-5 lg:pl-14"
                : "w-full h-full inline-block p-2 pl-5 lg:pl-14"
            }
            to="/ventas"
          >
            <FontAwesomeIcon className="mx-1" icon={faClipboard} /> Ventas
          </NavLink>
        </li>
        <li className="link w-full font-light rounded hover:translate-x-2 transition-transform text-sm md:text-base hover:bg-black/5">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-teal-500 w-full h-full inline-block p-2 pl-5 lg:pl-14"
                : "w-full h-full inline-block p-2 pl-5 lg:pl-14"
            }
            to="/inventario"
          >
            <FontAwesomeIcon className="mx-1" icon={faBoxesStacked} />{" "}
            Inventario
          </NavLink>
        </li>
        <li className="link w-full font-light rounded hover:translate-x-2 transition-transform text-sm md:text-base hover:bg-black/5">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-teal-500 w-full h-full inline-block p-2 pl-5 lg:pl-14"
                : "w-full h-full inline-block p-2 pl-5 lg:pl-14"
            }
            to="/personal"
          >
            <FontAwesomeIcon className="mx-1" icon={faPerson} /> Personal
          </NavLink>
        </li>
        <li className="link w-full flex font-light rounded hover:translate-x-2 relative transition-transform text-sm md:text-base hover:bg-black/5">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? " text-teal-500 w-full h-full items-center p-2 pl-5 lg:pl-14 flex"
                : "w-full h-full items-center p-2 pl-5 lg:pl-14 flex"
            }
            to="/mirones"
          >
            <FontAwesomeIcon className="mx-1" icon={faDatabase} /> Miron
            {/* <div className="absolute flex items-center justify-end h-full w-full -right-4">
              <p className=" bg-primary/70 font-serif text-lightMode px-1 rounded-md shadow-md shadow-black/40">
                Nuevo
              </p>
            </div> */}
          </NavLink>
        </li>
        <li className="link w-full font-light rounded hover:translate-x-2 transition-transform text-sm md:text-base hover:bg-black/5">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-teal-500 w-full h-full inline-block p-2 pl-5 lg:pl-14"
                : "w-full h-full inline-block p-2 pl-5 lg:pl-14"
            }
            to="/tienda/addProduct"
          >
            <FontAwesomeIcon className="mx-1" icon={faShop} /> Tienda
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SectionPaginas;
