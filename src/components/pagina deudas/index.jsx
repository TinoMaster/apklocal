import React from "react";
import { Outlet } from "react-router-dom";

export const PagDeudas = () => {
  return (
    <div className="w-full flex flex-wrap justify-center items-center">
      {/* Cajas de deudas */}
      <Outlet />
    </div>
  );
};
