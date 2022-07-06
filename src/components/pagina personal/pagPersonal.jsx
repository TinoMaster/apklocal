import React from "react";
import Trabajador from "./trabajador";

const PagPersonal = () => {
  return (
    <div className="flex p-4 justify-around flex-wrap w-full h-full overflow-y-scroll">
      <Trabajador />
      <Trabajador />
      <Trabajador />
    </div>
  );
};

export default PagPersonal;
