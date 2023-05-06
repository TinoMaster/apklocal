import React, { useContext, useState } from "react";
import InventarioContext from "../../context/inventarioContext";
import ProductoMedioBasico from "./medio-basico/producto-medioBasico";
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";
import { motion } from "framer-motion";

const MedioBasico = () => {
  const [botonEditOff, setBotonEditOff] = useState(false);
  const [deployCategory, setDeployCategory] = useState("");

  const {
    mediosBasicos,
    mBasicoToEdit,
    handlerChangeMBasicoToEdit,
    sendDataToEditMBasicos,
    EliminarData,
  } = useContext(InventarioContext);

  const categories = mediosBasicos.reduce((arrayResult, element) => {
    if (!arrayResult.includes(element.nombre)) {
      arrayResult.push(element.nombre);
    }
    return arrayResult;
  }, []);

  return (
    <div className="w-full lg:w-1/2 py-5">
      <h4 className="py-5 text-center text-xl font-serif font-semibold">
        Medio Basico
      </h4>

      {/*caja Medio basico */}
      <div className="w-11/12 md:w-3/4 h-screen m-auto flex flex-col">
        {/* Encabezado */}
        <div className="w-full rounded-md bg-yellow-500 z-20 shadow-md flex justify-between sticky top-0">
          <div className=" w-2/12 text-center">
            <h4 className="p-2 text-xs md:text-sm text-white font-semibold font-serif">
              Nombre
            </h4>
          </div>
          <div className=" w-3/12 text-center">
            <h4 className="p-2 text-xs md:text-sm text-white font-semibold font-serif">
              Modelo
            </h4>
          </div>
          <div className=" w-3/12 text-center">
            <h4 className="p-2 text-xs md:text-sm text-white font-semibold font-serif">
              # Serie
            </h4>
          </div>
          <div className=" w-2/12 text-center">
            <h4 className="p-2 text-xs md:text-sm text-white font-semibold font-serif">
              Almacen
            </h4>
          </div>
          <div className=" w-2/12 text-center">
            <h4 className="p-2 text-xs md:text-sm text-white font-semibold font-serif">
              Local
            </h4>
          </div>
        </div>

        {categories?.length !== 0 ? (
          categories.map((category) => (
            <div key={category} className="flex flex-col">
              <div
                className="w-full flex justify-between my-2 p-2 rounded-md shadow-md bg-white/10"
                onClick={() =>
                  deployCategory === category
                    ? setDeployCategory("")
                    : setDeployCategory(category)
                }
              >
                <p className="">{category}</p>
                {deployCategory === category ? (
                  <IoMdArrowDropdown />
                ) : (
                  <IoMdArrowDropright />
                )}
              </div>
              <div className="pl-3 max-h-screen overflow-auto pb-96 md:pb-60">
                {deployCategory === category &&
                  mediosBasicos.map((MBasico, index) => {
                    return (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        key={MBasico._id}
                        className="w-full my-2 rounded-md shadow-md flex justify-between items-center relative"
                      >
                        <p className="absolute ml-1 text-xs">{`${index + 1}`}</p>
                        <ProductoMedioBasico
                          MBasico={MBasico}
                          mBasicoToEdit={mBasicoToEdit}
                          handlerChangeMBasicoToEdit={
                            handlerChangeMBasicoToEdit
                          }
                          sendDataToEditMBasicos={sendDataToEditMBasicos}
                          botonEditOff={botonEditOff}
                          setBotonEditOff={setBotonEditOff}
                          EliminarData={EliminarData}
                        />
                      </motion.div>
                    );
                  })}
              </div>
            </div>
          ))
        ) : (
          <h4>blaaaa</h4>
        )}

        {/* producto medio basico */}
        {/* {mediosBasicos.length !== 0 ? (
          mediosBasicos.map((MBasico, index) => {
            return (
              <div key={MBasico._id} className=" pl-3">
                <div className="w-full my-2 rounded-md shadow-md flex justify-between items-center relative">
                  <p className="absolute ml-1">{`${index + 1}`}</p>
                  <ProductoMedioBasico
                    MBasico={MBasico}
                    mBasicoToEdit={mBasicoToEdit}
                    handlerChangeMBasicoToEdit={handlerChangeMBasicoToEdit}
                    sendDataToEditMBasicos={sendDataToEditMBasicos}
                    botonEditOff={botonEditOff}
                    setBotonEditOff={setBotonEditOff}
                    EliminarData={EliminarData}
                  />
                </div>
              </div>
            );
          })
        ) : (
          <h4>No se cargaron los datos</h4>
        )} */}
      </div>
    </div>
  );
};

export default MedioBasico;
