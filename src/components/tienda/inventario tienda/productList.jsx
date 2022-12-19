import React from "react";

export const ProductListShop = ({ title, products }) => {
  return (
    <div className="w-full h-1/2 my-1 flex flex-col">
      <h3 className="text-slate-500 font-semibold text-lg p-2">{title}</h3>
      <div className="flex flex-col bg-slate-50 h-full shadow-inner shadow-black/10 overflow-auto">
        <div className="flex sticky top-0">
          <p className="w-1/3 text-center py-1 bg-slate-100 font-semibold text-slate-500 font-serif">
            Producto
          </p>
          <p className="w-1/3 text-center py-1 bg-slate-100 font-semibold text-slate-500 font-serif">
            Almacen
          </p>
          <p className="w-1/3 text-center py-1 bg-slate-100 font-semibold text-slate-500 font-serif">
            Local
          </p>
        </div>
        {/* Products */}
        {products?.length > 0 ? (
          products?.map((product) => (
            <div key={product.name} className="flex hover:bg-black/10">
              <p className="w-1/3 text-center py-1 text-slate-700 text-sm">
                {product.name}
              </p>
              <p className="w-1/3 text-center py-1 text-slate-700 text-sm">
                {product.amount}
              </p>
              <p className="w-1/3 text-center py-1 text-slate-700 text-sm">
                29
              </p>
            </div>
          ))
        ) : (
          <p>No hay productos agregados</p>
        )}
      </div>
    </div>
  );
};
