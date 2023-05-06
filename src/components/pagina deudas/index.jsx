import React from "react";
import { useDeudas } from "../../hooks/useDeudas";
import { Outlet } from "react-router-dom";

export const PagDeudas = () => {
  const { deudas, loading, error } = useDeudas();
  return (
    <div className="w-full flex flex-wrap justify-center items-center">
      {/* Cajas de deudas */}
      <h3>Hola</h3>
      <Outlet />
    </div>
  );
};
