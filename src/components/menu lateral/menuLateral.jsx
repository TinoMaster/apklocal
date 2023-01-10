import React, { useContext } from "react";
import SectionEntradas from "./sectionEntradas";
import SectionPaginas from "./sectionPaginas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faDollar,
  faPlus,
  faRightFromBracket,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../context/authContext";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import EstadisticasContext from "../../context/estadisticasContext";
import useInventarioPagInicio from "../../hooks/useInventarioPagInicio";
import { ButtonModeDark } from "./botonModoDark";
import CuadreContext from "../../context/cuadreContext";

const MenuLateral = ({
  menuActive,
  setMenuActive,
  addTarget,
  setAddTarget,
}) => {
  const { logout, user, isAuth, darkMode } = useContext(AuthContext);
  const { fondoAyer, bdCuadre } = useContext(EstadisticasContext);
  const {
    handleTarget,
    addTargetToArray,
    error,
    setError,
    success,
    cards,
    deleteCard,
  } = useContext(CuadreContext);
  const { testInyectores } = useInventarioPagInicio();
  return (
    <div
      onClick={() => {
        setMenuActive(false);
      }}
      className={
        menuActive
          ? darkMode
            ? "flex flex-col fixed w-2/3 h-screen z-50 bg-darkMode  translate-x-0 shadow transition-all delay-75"
            : "flex flex-col fixed w-2/3 h-screen z-50 bg-lightMode  translate-x-0 shadow transition-all delay-75"
          : "flex flex-col absolute md:relative bg-white/5 -translate-x-full md:transform-none sm:w-1/3 md:w-2/5 lg:w-1/5 xl:w-1/6 max-w-xs shadow-lg "
      }
    >
      <h1
        onClick={() => setMenuActive(false)}
        className="flex h-16 justify-center items-center text-xl font-normal text-violet-500"
      >
        <FontAwesomeIcon className="p-1 text-md pt-2" icon={faBars} />
        Menu
        <ButtonModeDark />
      </h1>
      <SectionPaginas />
      <SectionEntradas />

      {/* Test Ayer, Fondo y add Tarjeta*/}
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col relative w-10/12 m-auto shadow shadow-violet-500/20 p-3 bg-white/5 rounded-md text-sm"
      >
        {error?.error && (
          <div className="w-full absolute -top-10 flex justify-center">
            <p className="text-center p-1 rounded-md bg-red-300/50">
              {`! ${error.message}`}
            </p>
          </div>
        )}
        {success.success && (
          <div className="w-full absolute -top-10 flex justify-center">
            <p className="text-center p-1 rounded-md bg-green-300/50">
              {`! ${success.message}`}
            </p>
          </div>
        )}

        <h3 className="self-center text-lg font-serif">Cuadre anterior:</h3>
        <div className="flex justify-between">
          <p className="">Fondo:</p>
          <p className="">
            <FontAwesomeIcon className="text-xs" icon={faDollar} />{" "}
            {fondoAyer(bdCuadre)}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="">Color:</p>
          <p className="">{testInyectores.color}</p>
        </div>
        <div className="flex justify-between">
          <p className="">B/N:</p>
          <p className="">{testInyectores.bn}</p>
        </div>
        {/* Section add Card */}
        <div
          onClick={() => setAddTarget(true)}
          className="flex items-center justify-center p-2 m-2 bg-white/5 rounded-lg shadow-md hover:cursor-pointer hover:text-violet-600 transition-all"
        >
          <FontAwesomeIcon icon={faPlus} />
          <p className="pl-2">Añadir tarjeta al cuadre</p>
        </div>
        {addTarget && (
          <div className="flex flex-wrap bg-white/5 p-2 shadow-md rounded-lg">
            <label className="font-serif w-1/4 text-center py-2" htmlFor="">
              Id:
            </label>
            <input
              onChange={handleTarget}
              name="id"
              className="w-3/4 bg-transparent shadow-inner shadow-black/20 rounded-lg p-2 focus:outline-none"
              type="text"
            />
            <label className="font-serif w-1/4 text-center py-2" htmlFor="">
              Valor:
            </label>
            <input
              onChange={handleTarget}
              name="value"
              className="w-3/4 bg-transparent shadow-inner shadow-black/20 rounded-lg p-2 focus:outline-none"
              type="number"
            />
            <div className="flex w-full justify-center pt-2">
              <button
                onClick={() => {
                  setAddTarget(false);
                  setError({});
                }}
                className="py-1 px-2 mx-1 bg-white/5 rounded-lg shadow-md hover:bg-red-400 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  addTargetToArray(setAddTarget);
                }}
                className="py-1 px-2 mx-1 bg-white/5 rounded-lg shadow-md hover:bg-green-400 transition-colors"
              >
                Añadir
              </button>
            </div>
          </div>
        )}
        {/* Tarjetas agregadas */}
        {cards?.map((card) => (
          <div
            key={card.id}
            className="flex justify-between w-10/12 m-auto items-center relative bg-primary/30 px-2 py-1 rounded-md mb-2"
          >
            <p>{card.id}</p>
            <p>
              <FontAwesomeIcon icon={faDollar} /> {card.value}
            </p>
            <FontAwesomeIcon
              onClick={() => deleteCard(card.id)}
              className="absolute p-2 -right-8 rounded-full shadow-md shadow-black/20 bg-white/5 hover:bg-white/10 hover:cursor-pointer"
              icon={faTrash}
            />
          </div>
        ))}
      </div>

      {/* User */}
      {!!isAuth && (
        <button className="bg-black/5 absolute bottom-0 w-full flex justify-between p-2">
          <div className="flex ">
            <FontAwesomeIcon
              icon={faUser}
              className="bg-violet-500/90 p-2 rounded-full text-white"
            />{" "}
            <p className="p-2 font-serif">{user.name}</p>{" "}
          </div>
          <p
            onClick={() => logout()}
            className="p-2 bg-black/10 shadow-md hover:bg-black/10 rounded-md hover:shadow-md"
          >
            {" "}
            <FontAwesomeIcon icon={faRightFromBracket} /> Salir
          </p>
        </button>
      )}
    </div>
  );
};

export default MenuLateral;
