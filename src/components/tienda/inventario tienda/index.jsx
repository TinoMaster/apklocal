import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import { UseInventarioTienda } from "../../../hooks/tienda/useInventarioTienda";
import { ProductListShop } from "../inventario tienda/productList";

export const InventarioTienda = () => {
  const { inventarioTienda } = UseInventarioTienda();

  return (
    <div className="flex flex-wrap h-full">
      <div className="w-full flex justify-end">
        <NavLink
          to={"/tienda/addProduct"}
          className="p-2 bg-white/10 rounded-md shadow-lg font-semibold text-xs hover:bg-violet-500 m-2 hover:text-white transition-all"
        >
          <FontAwesomeIcon className="mr-1" icon={faPlus} />
          Nuevo Producto
        </NavLink>
      </div>
      {/* Existencias */}
      <ProductListShop
        props={inventarioTienda}
        products={inventarioTienda.productsAvailable}
        title={"Existencias"}
      />
      {/* Agotado */}
      <ProductListShop
        title={"Agotado"}
        products={inventarioTienda.productsNotAvailable}
        props={inventarioTienda}
      />
    </div>
  );
};
