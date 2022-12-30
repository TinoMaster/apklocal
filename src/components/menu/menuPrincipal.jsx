import React, { useContext } from "react";
/* import Cookies from "universal-cookie"; */

import logo from "../../assets/img/favicon.ico";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faNoteSticky } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../context/authContext";

function Menu({ menuActive, setMenuActive, setNotasActive, notasActive }) {
  const { user } = useContext(AuthContext);

  const isNotasActive = () => {
    if (notasActive === false) setNotasActive(true);
    else setNotasActive(false);
  };

  return (
    <div className="flex overflow-hidden sticky top-0 justify-between z-40 items-center w-full h-16 shadow-sm shadow-violet-500/75 bg-violet-500 md:rounded-lg">
      <div className="flex items-center p-3">
        <div
          onClick={() =>
            menuActive === true ? setMenuActive(false) : setMenuActive(true)
          }
          className="mx-2 md:hidden border-white overflow-hidden hover:cursor-pointer hover:border-indigo-400"
        >
          <FontAwesomeIcon
            className="pt-2 md:hidden text-white text-3xl"
            icon={faBars}
          />
        </div>

        <div className="w-10 mx-2 hidden md:block rounded-full border-2 border-cyan-400 overflow-hidden">
          <img className="w-full scale-150" src={logo} alt="Sueño Virtual" />
        </div>

        <div className="flex items-baseline">
          <h2 className="text-gray-50 invisible md:visible font-normal text-sm md:text-base">
            Sueño Virtual
          </h2>
          <span className="text-gray-50 font-extralight invisible md:visible text-xs mx-2">
            1.0.0
          </span>
        </div>
      </div>

      <div className="flex justify-end">
        <div
          onClick={isNotasActive}
          className="flex items-center w-9 mx-4 rounded-full border-2 border-yellow-200 shadow-md bg-white overflow-hidden transition-all hover:cursor-pointer md:hover:scale-105 md:hover:bg-violet-50"
        >
          <FontAwesomeIcon
            className="w-full text-yellow-400 md:text-xl"
            icon={faNoteSticky}
          />
        </div>

        <div className="w-9 h-9 mr-4 rounded-full py-1 border-2 bg-white border-teal-500 shadow-md overflow-hidden">
          <img className="w-full h-full" src={user.image} alt="Trabajador" />
        </div>
      </div>
    </div>
  );
}

export default Menu;
