import { faDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const SeeProduct = () => {
  const navigate = useNavigate();
  /* const id = useParams(); */
  const location = useLocation();
  let product;
  if (location?.state) {
    product = location.state;
  }
  return (
    <div className="flex flex-wrap w-full">
      <button
        onClick={() => navigate("/tienda/inventario")}
        className="shadow-md p-1 bg-black/5 text-slate-600 font-serif hover:bg-black/10"
      >
        ← Ver Productos
      </button>
      {/* Container product */}
      <div className="flex justify-center w-full">
        {/* Product */}
        <div className="flex bg-slate-50 justify-center rounded-md shadow-md flex-wrap w-full md:w-3/5 lg:w-1/3 p-3 my-5">
          {/* imagen */}
          <div className="flex">
            <div
              className="flex justify-end items-center w-32 h-32 bg-slate-200 rounded-md shadow-md"
              style={{ backgroundColor: product?.properties.color }}
            >
              <p className="p-2 bg-slate-100 rounded-l-full font-serif w-3/5i text-center text-slate-600 text-xl">
                Cimex
              </p>
            </div>
          </div>
          {/* Caja Description */}
          <div className="w-full p-5 text-slate-700">
            {/* Descriptions */}
            <div className="w-full flex justify-center">
              <p className="p-1 font-serif">Nombre:</p>
              <p className="p-1 font-serif">{product.name}</p>
            </div>
            <div className="w-full flex justify-center">
              <p className="p-1 font-serif">Proveedor:</p>
              <p className="p-1 font-serif">{product.provider}</p>
            </div>
            <div className="w-full flex justify-center">
              <p className="p-1 font-serif">Categoria:</p>
              <p className="p-1 font-serif">{product.category}</p>
            </div>
            <div className="w-full flex justify-center">
              <p className="p-1 font-serif">Costo:</p>
              <p className="p-1">
                {product.cost}
                <FontAwesomeIcon
                  className="ml-1 text-slate-500"
                  icon={faDollar}
                />
              </p>
            </div>
            <div className="w-full flex justify-center">
              <p className="p-1 font-serif">Precio:</p>
              <p className="p-1">
                {product.sell}
                <FontAwesomeIcon
                  className="ml-1 text-slate-500"
                  icon={faDollar}
                />
              </p>
            </div>
            <div className="w-full flex justify-center">
              <p className="p-1 font-serif">Cantidad:</p>
              <p className="p-1">{product?.amount}</p>
            </div>
            <div className="w-full flex justify-center">
              <p className="p-1 font-serif">local:</p>
              <p className="p-1">{product?.local_amount}</p>
            </div>
            <div className="w-full flex justify-center">
              <p className="p-1 font-serif"># Ventas:</p>
              <p className="p-1">
                {product?.timeSells ? product.timeSells : 0}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
