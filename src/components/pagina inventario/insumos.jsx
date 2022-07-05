import React, { useContext, useState } from "react";
import InventarioContext from "../../context/inventarioContext";
import ProductoInsumos from "./insumos/producto-insumos";

const Insumos = () => {
  const [botonEditOff, setBotonEditOff] = useState(false);

  const {
    insumos,
    handlerChangeInsumoToEdit,
    sendDataToEdit,
    insumoEdit,
    EliminarData,
  } = useContext(InventarioContext);

  return (
    <div className="w-full md:w-1/2 py-5 ">
      <h4 className="py-5 text-center text-xl text-slate-600 font-serif font-semibold">
        Insumos
      </h4>

      {/*caja Insumos */}
      <div className="w-11/12 md:w-3/4 m-auto flex flex-col">
        {/* Encabezado */}
        <div className="w-full rounded-md bg-teal-500 shadow-md flex justify-between">
          <div className=" w-1/3 text-center border-x-2">
            <h4 className="p-2 text-xs md:text-sm text-white font-semibold font-serif">
              Nombre
            </h4>
          </div>
          <div className=" w-1/3 text-center border-x-2">
            <h4 className="p-2 text-xs md:text-sm text-white font-semibold font-serif">
              Almacen
            </h4>
          </div>
          <div className=" w-1/3 text-center border-x-2">
            <h4 className="p-2 text-xs md:text-sm text-white font-semibold font-serif">
              Local
            </h4>
          </div>
        </div>

        {/* Productos */}
        {insumos.length !== 0 ? (
          insumos.map((insumo) => {
            return (
              <ProductoInsumos
                key={insumo._id}
                handlerChangeInsumoToEdit={handlerChangeInsumoToEdit}
                sendDataToEdit={sendDataToEdit}
                insumoEdit={insumoEdit}
                EliminarData={EliminarData}
                insumo={insumo}
                botonEditOff={botonEditOff}
                setBotonEditOff={setBotonEditOff}
              />
            );
          })
        ) : (
          <h4>No se cargaron los datos</h4>
        )}
      </div>
    </div>
  );
};

export default Insumos;
