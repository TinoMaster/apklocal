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
      <h3 className="text-slate-500 font-semibold text-lg p-2">{title}</h3>
      <div className="flex flex-col bg-slate-50 h-full shadow-inner shadow-black/10 overflow-auto">
        <div className="flex sticky top-0">
          <p className="w-1/5 text-center py-1 bg-slate-100 font-semibold text-slate-500 font-serif">
            Producto
          </p>
          <p className="w-1/5 text-center py-1 bg-slate-100 font-semibold text-slate-500 font-serif">
            Proveedor
          </p>
          <p className="w-1/5 text-center py-1 bg-slate-100 font-semibold text-slate-500 font-serif">
            Precio
          </p>
          <p className="w-1/5 text-center py-1 bg-slate-100 font-semibold text-slate-500 font-serif">
            Almacen
          </p>
          <p className="w-1/5 text-center py-1 bg-slate-100 font-semibold text-slate-500 font-serif">
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
              <div className="w-1/5 justify-center items-baseline py-1 text-slate-700">
                <p className="text-center">{product?.name}</p>
              </div>
              <p className="w-1/5 text-center py-1 text-slate-700">
                {product?.provider}
              </p>
              <p className="w-1/5 text-center py-1 text-slate-700">
                {`${product?.sell}.00`}
                <FontAwesomeIcon
                  className="ml-1 text-slate-600"
                  icon={faDollar}
                />
              </p>
              <p className="w-1/5 text-center py-1 text-slate-700">
                {product?.amount}
              </p>
              <p className="w-1/5 text-center py-1 text-slate-700">
                {product.local_amount ? product.local_amount : "0"}
              </p>
              <div className="flex items-center justify-between absolute right-0">
                <div className="p-1">
                  <FontAwesomeIcon
                    className="text-slate-500 hover:text-green-400"
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
                    className="text-slate-500 hover:text-orange-400"
                    icon={faEdit}
                  />
                </div>
                <div onClick={() => deleteProduct(product._id)} className="p-1">
                  <FontAwesomeIcon
                    className="text-slate-500 hover:text-red-500"
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
