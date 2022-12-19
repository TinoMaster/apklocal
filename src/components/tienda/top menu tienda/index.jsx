import { faBars, faShop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const TopMenuTienda = ({ setOpenLeftMenu }) => {
  return (
    <div className="w-full md:hidden p-2 m-1 items-baseline rounded-md flex justify-between bg-cyan-500">
      <h2 className="font-serif text-white text-lg">
        <FontAwesomeIcon className="mr-1" icon={faShop} /> Tienda
      </h2>
      <div
        onClick={() => setOpenLeftMenu((previus) => !previus)}
        className=" px-1 rounded-md text-white text-2xl shadow-md"
      >
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  );
};
