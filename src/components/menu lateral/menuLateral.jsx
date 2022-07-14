import React from "react";
import SectionEntradas from "./sectionEntradas";
import SectionPaginas from "./sectionPaginas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const MenuLateral = ({ menuActive, setMenuActive }) => {
  return (
    <div
      onClick={() => setMenuActive(false)}
      className={
        menuActive
          ? "flex flex-col fixed w-1/2 h-screen z-50 shadow-slate-600/50 bg-white translate-x-0  shadow-lg border-b-neutral-200 transition-transform ease-out delay-75"
          : "flex flex-col absolute md:relative -translate-x-full md:transform-none sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 max-w-xs border-r-2 shadow-md border-b-neutral-200"
      }
    >
      <h1
        onClick={() => setMenuActive(false)}
        className="flex border-b-2 border-violet-400/25 h-16 justify-center items-center text-xl font-normal text-violet-500"
      >
        <FontAwesomeIcon className="p-1 text-md pt-2" icon={faBars} />
        Menu
      </h1>
      <SectionPaginas />
      <SectionEntradas />
    </div>
  );
};

export default MenuLateral;
