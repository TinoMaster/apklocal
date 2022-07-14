import React from "react";
import Trabajador from "./trabajador";

const PagPersonal = () => {
  return (
    <div className="flex p-4 max-w-1080p max-h-1080p m-auto justify-around flex-wrap w-full h-full overflow-auto">
      <Trabajador />
      <Trabajador />
      <Trabajador />
    </div>
  );
};

export default PagPersonal;
