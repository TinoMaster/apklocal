import React from "react";
import Cookies from "universal-cookie";

import logo from "../../assets/img/favicon.ico";
import imgBryam from "../../assets/img/Bryam.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faNoteSticky } from "@fortawesome/free-solid-svg-icons";

function Menu({ menuActive, setMenuActive, setNotasActive, notasActive }) {
  const cookies = new Cookies();

  const isNotasActive = () => {
    if (notasActive === false) setNotasActive(true);
    else setNotasActive(false);
  };

  return (
    <div className="flex overflow-hidden sticky top-0 justify-between z-50 items-center w-full h-16 shadow-sm shadow-violet-500/75 bg-violet-500">
      <div className="flex items-center p-3">
        <div
          onClick={() => setMenuActive(true)}
          className="mx-2 md:hidden rounded-full border-2 border-white overflow-hidden hover:cursor-pointer hover:border-indigo-400"
        >
          <FontAwesomeIcon
            className="p-2 pb-1 md:hidden text-white text-base"
            icon={faBars}
          />
        </div>

        <div className="w-10 mx-2 hidden md:block rounded-full border-2 border-cyan-400 overflow-hidden">
          <img className="w-full scale-150" src={logo} alt="Sueño Virtual" />
        </div>

        <div className="flex items-baseline">
          <h2 className="text-gray-50 font-normal text-sm md:text-base">
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
          className="flex items-center w-10 mx-4 rounded-full border-2 border-purple-600 shadow-md bg-purple-600 overflow-hidden hover:cursor-pointer hover:bg-purple-700"
        >
          <FontAwesomeIcon
            className="w-full text-white text-xl"
            icon={faNoteSticky}
          />
        </div>

        <div className="w-10 mr-4 rounded-full border-2 border-red-400 shadow-md overflow-hidden">
          <img className="w-full" src={imgBryam} alt="Sueño Virtual" />
        </div>
      </div>
    </div>
  );
}

export default Menu;
