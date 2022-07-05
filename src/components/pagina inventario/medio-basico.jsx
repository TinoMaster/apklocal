import React, { useContext, useState } from "react";
import InventarioContext from "../../context/inventarioContext";
import ProductoMedioBasico from "./medio-basico/producto-medioBasico";

const MedioBasico = () => {
  const [botonEditOff, setBotonEditOff] = useState(false);

  const {
    mediosBasicos,
    mBasicoToEdit,
    handlerChangeMBasicoToEdit,
    sendDataToEditMBasicos,
    EliminarData,
  } = useContext(InventarioContext);

  return (
    <div className="w-full md:w-1/2 py-5 ">
      <h4 className="py-5 text-center text-xl text-slate-600 font-serif font-semibold">
        Medio Basico
      </h4>

      {/*caja Insumos */}
      <div className="w-11/12 md:w-3/4 m-auto flex flex-col ">
        {/* Encabezado */}
        <div className="w-full rounded-md bg-yellow-500/90 shadow-md flex justify-between">
          <div className=" w-2/12 text-center border-x-2">
            <h4 className="p-2 text-xs md:text-sm text-white font-semibold font-serif">
              Nombre
            </h4>
          </div>
          <div className=" w-3/12 text-center border-x-2">
            <h4 className="p-2 text-xs md:text-sm text-white font-semibold font-serif">
              Modelo
            </h4>
          </div>
          <div className=" w-3/12 text-center border-x-2">
            <h4 className="p-2 text-xs md:text-sm text-white font-semibold font-serif">
              # Serie
            </h4>
          </div>
          <div className=" w-2/12 text-center border-x-2">
            <h4 className="p-2 text-xs md:text-sm text-white font-semibold font-serif">
              Almacen
            </h4>
          </div>
          <div className=" w-2/12 text-center border-x-2">
            <h4 className="p-2 text-xs md:text-sm text-white font-semibold font-serif">
              Local
            </h4>
          </div>
        </div>

        {/* producto medio basico */}
        {mediosBasicos.length !== 0 ? (
          mediosBasicos.map((MBasico) => {
            return (
              <ProductoMedioBasico
                key={MBasico._id}
                MBasico={MBasico}
                mBasicoToEdit={mBasicoToEdit}
                handlerChangeMBasicoToEdit={handlerChangeMBasicoToEdit}
                sendDataToEditMBasicos={sendDataToEditMBasicos}
                botonEditOff={botonEditOff}
                setBotonEditOff={setBotonEditOff}
                EliminarData={EliminarData}
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

export default MedioBasico;
