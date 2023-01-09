import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import AuthContext from "../../context/authContext";

export const ButtonModeDark = () => {
  const { darkMode, setDarkMode, DARK_MODE } = useContext(AuthContext);
  return (
    <div className="flex mx-4 absolute right-0">
      <div className="Icono"></div>
      <div
        onClick={(e) => {
          setDarkMode(!darkMode);
          window.localStorage.setItem(DARK_MODE, !darkMode);
          e.stopPropagation();
        }}
        className="flex justify-center items-center hover:cursor-pointer"
      >
        {!darkMode ? (
          <div className="flex items-center w-7 h-4 md:w-9 md:h-5 rounded-full bg-slate-300 relative">
            <div className="flex justify-center items-center w-4 md:w-6 h-4 md:h-6 bg-white border-2 rounded-full translate-x-0 transition-all delay-150 ease-linear">
              <FontAwesomeIcon className="text-yellow-400" icon={faSun} />
            </div>
          </div>
        ) : (
          <div className="flex items-center w-7 h-4 md:w-9 md:h-5 rounded-full bg-slate-300 relative">
            <div className="flex justify-center items-center w-4 md:w-6 h-4 md:h-6 bg-white border-2 rounded-full translate-x-3/4 transition-all delay-150 ease-linear">
              <FontAwesomeIcon className="text-primary" icon={faMoon} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
