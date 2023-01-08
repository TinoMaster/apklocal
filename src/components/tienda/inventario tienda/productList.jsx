import { faEdit, faEye, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import { PrimaryLoader } from "../../loaders/primaryLoader";

export const ProductListShop = ({ props, title, products }) => {
  const { error, loader, deleteProduct } = props;
  const navigate = useNavigate();
  return (
    <div className="w-full h-1/2 my-1 flex flex-col">
      <h3 className="font-semibold text-lg p-2">{title}</h3>

      <div className="flex flex-col bg-white/5 h-full shadow-inner shadow-black/10 overflow-auto">
        <div className="flex sticky top-0">
          <p className="w-1/4 text-center py-1 bg-white/20 font-semibold font-serif shadow-lg shadow-violet-500/10">
            Producto
          </p>
          <p className="w-1/4 text-center py-1 bg-white/20 font-semibold font-serif shadow-lg shadow-violet-500/10">
            Precio
          </p>
          <p className="w-1/4 text-center py-1 bg-white/20 font-semibold font-serif shadow-lg shadow-violet-500/10">
            Almacen
          </p>
          <p className="w-1/4 text-center py-1 bg-white/20 font-semibold font-serif shadow-lg shadow-violet-500/10">
            Local
          </p>
        </div>
        {/* Products */}
        {error.error && <p>{error.message}</p>}
        {loader && (
          <div className="bg-black/5 h-full flex justify-center items-center">
            <div className="inline bg-slate-200 rounded-md">
              <PrimaryLoader />
            </div>
          </div>
        )}
        {!loader && products.length === 0 && (
          <div className="flex justify-center">
            <p className="mt-10 p-2 bg-slate-500/90 text-white rounded-md shadow-md">
              No hay productos en esta lista
            </p>
          </div>
        )}

        {!loader &&
          products?.length > 0 &&
          products?.map((product) => (
            <div
              key={product?.name}
              className="flex relative hover:bg-black/10 hover:cursor-pointer font-serif"
            >
              {/* Product */}
              <div className="w-1/4 justify-center items-baseline py-1">
                <p className="text-center">{product?.name}</p>
              </div>
              <p className="hidden w-1/5 text-center py-1">
                {product?.provider}
              </p>
              <p className="w-1/4 text-center py-1">
                {`${product?.sell}.00`}
                <FontAwesomeIcon
                  className="ml-1"
                  icon={faDollar}
                />
              </p>
              <p className="w-1/4 text-center py-1">
                {product?.amount}
              </p>
              <p className="w-1/4 text-center py-1">
                {product.local_amount ? product.local_amount : "0"}
              </p>
              {/* Botones */}
              <div className="hidden md:flex items-center justify-between absolute right-0">
                <div
                  onClick={() => {
                    navigate(`/tienda/seeProduct/${product._id}`, {
                      state: product,
                    });
                  }}
                  className="p-1"
                >
                  <FontAwesomeIcon
                    className=" hover:text-green-400"
                    icon={faEye}
                  />
                </div>
                <div
                  onClick={() => {
                    navigate(`/tienda/editProduct/${product._id}`, {
                      state: product,
                    });
                  }}
                  className="p-1"
                >
                  <FontAwesomeIcon
                    className=" hover:text-orange-400"
                    icon={faEdit}
                  />
                </div>
                <div onClick={() => deleteProduct(product._id)} className="p-1">
                  <FontAwesomeIcon
                    className=" hover:text-red-500"
                    icon={faTrashAlt}
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
