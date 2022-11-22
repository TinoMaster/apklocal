import React, { useContext } from "react";
import SectionEntradas from "./sectionEntradas";
import SectionPaginas from "./sectionPaginas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../context/authContext";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const MenuLateral = ({ menuActive, setMenuActive }) => {
  const { logout, user, isAuth } = useContext(AuthContext);
  return (
    <div
      onClick={() => setMenuActive(false)}
      className={
        menuActive
          ? "flex flex-col fixed w-2/3 h-screen z-50 bg-white translate-x-0 shadow transition-transform ease-out delay-75"
          : "flex flex-col absolute md:relative -translate-x-full md:transform-none sm:w-1/3 md:w-2/5 lg:w-1/5 xl:w-1/6 max-w-xs shadow-lg bg-violet-50"
      }
    >
      <h1
        onClick={() => setMenuActive(false)}
        className="flex h-16 justify-center items-center text-xl font-normal text-violet-500"
      >
        <FontAwesomeIcon className="p-1 text-md pt-2" icon={faBars} />
        Menu
      </h1>
      <SectionPaginas />
      <SectionEntradas />
      {!!isAuth && (
        <button className="bg-black/5 absolute bottom-0 w-full flex justify-between p-2">
          <div className="flex ">
            <FontAwesomeIcon
              icon={faUser}
              className="bg-violet-500/90 p-2 rounded-full text-white"
            />{" "}
            <p className="p-2 font-serif text-slate-800">{user.name}</p>{" "}
          </div>
          <p
            onClick={() => logout()}
            className="p-2 text-slate-700 hover:bg-black/10 rounded-md hover:shadow-md"
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
