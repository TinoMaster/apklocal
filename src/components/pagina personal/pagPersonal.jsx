import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Trabajador from "./trabajador";

const PagPersonal = () => {
  return (
    <div className="flex p-4 max-w-1080p max-h-1080p m-auto justify-around flex-wrap w-full h-full overflow-auto">
      <button className="w-10 h-10 bg-green-500 absolute rounded-full text-xl text-white bottom-5 md:bottom-10 right-5 shadow-lg shadow-green-600/40">
        <FontAwesomeIcon icon={faCirclePlus} />
      </button>
      <Trabajador />
      <Trabajador />
      <Trabajador />
    </div>
  );
};

export default PagPersonal;
