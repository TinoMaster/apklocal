import React from "react";
import { motion } from "framer-motion";
import { useDeudas } from "../../../hooks/useDeudas";
import { ModalPortal } from "../../modalPortal/modalPortal";
import { ModalCreateDebt } from "../modalCreateDebt";

export const PagInicioDeudas = () => {
  const { modales, handlerFunctions, workers } = useDeudas();
  const {
    modalCreateCollection,
    setModalCreateCollection,
    setModalCreateDebt,
    modalCreateDebt,
  } = modales;
  const { handlerCreateDebt } = handlerFunctions;
  return (
    <div className="w-full flex flex-wrap justify-around">
      {modalCreateCollection && (
        <ModalPortal>
          <motion.div
            initial={{ scale: 0, y: -180, x: 200 }}
            animate={{ scale: 1, y: 0, x: 0 }}
            className="bg-primary text-lightMode p-10 pb-4 rounded-md"
          >
            <div className="flex flex-col justify-center">
              <h2 className="text-lg font-semibold w-full text-center">
                Nueva Coleccion
              </h2>
              <h4 className="">Introduzca el nombre de su coleccion</h4>
              <input
                name="name"
                onChange={handlerCreateDebt}
                type="text"
                className="shadow-inner shadow-black/30 p-2 text-darkMode font-medium rounded-md my-2 focus:outline-none"
              />
            </div>
            <div className="flex justify-center py-2">
              <motion.button
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 0px 8px rgb(255,255,255)",
                }}
                transition={{ duration: 0.4, type: "spring", stiffness: 500 }}
                className="p-2 mx-2 bg-black/30 rounded-md shadow"
                onClick={() => {
                  setModalCreateCollection(false);
                  setModalCreateDebt(true);
                }}
              >
                Aceptar
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 0px 8px rgb(255,255,255)",
                }}
                transition={{ duration: 0.4, type: "spring", stiffness: 500 }}
                className="p-2 mx-2 bg-black/30 rounded-md shadow"
                onClick={() => setModalCreateCollection(false)}
              >
                Cancelar
              </motion.button>
            </div>
          </motion.div>
        </ModalPortal>
      )}
      {modalCreateDebt && (
        <ModalPortal>
          <ModalCreateDebt
            modales={modales}
            handlerFunctions={handlerFunctions}
            workers={workers}
          />
        </ModalPortal>
      )}
      {/* Caja izquierda */}
      <div className="w-full md:w-4/5 lg:w-1/3 h-full p-2 flex flex-col rounded-md">
        <h4 className="m-1 ml-4 text-md font-medium">Mi balance de deudas</h4>

        <div className="p-1">
          {/*Balance Total  */}
          <div className="m-2 p-2 shadow-md rounded-md flex justify-between bg-white/5">
            <h4 className="md:text-lg text-indigo-700 font-serif flex">
              {/* <FontAwesomeIcon
              className="text-white bg-violet-500 mr-1 rounded-full p-1"
              icon={faHouse}
            /> */}
              Mis Deudas
            </h4>
            <p className="text-sm md:text-base text-indigo-700">
              {/* <FontAwesomeIcon icon={faDollar} /> {totalRecaudado(bdCuadre)} */}
            </p>
          </div>
          {/* Dueño */}
          <div className="m-2 shadow-md p-2 rounded-md flex justify-between bg-white/5">
            <h4 className="md:text-lg text-emerald-700 font-serif flex">
              {/* <FontAwesomeIcon
              className="text-white bg-emerald-400 mr-2 rounded-full py-1 px-2"
              icon={faUser}
            /> */}
              Me Deben
            </h4>
            <p className="text-sm md:text-base text-emerald-700">
              {/* <FontAwesomeIcon icon={faDollar} />
            {totalRecaudadoDueño(bdCuadre)} */}
            </p>
          </div>
          <div className="m-2 mb-6 shadow-md p-2 rounded-md flex justify-between bg-white/5">
            <h4 className="md:text-lg text-yellow-700 font-serif flex">
              {/* <FontAwesomeIcon
              className="text-white bg-emerald-400 mr-2 rounded-full py-1 px-2"
              icon={faUser}
            /> */}
              Balance
            </h4>
            <p className="text-sm md:text-base text-emerald-700">
              {/* <FontAwesomeIcon icon={faDollar} />
            {totalRecaudadoDueño(bdCuadre)} */}
            </p>
          </div>
        </div>
      </div>
      {/* Caja derecha */}
      <div className="w-full md:w-4/5 lg:w-1/3 h-full p-2 flex flex-col rounded-md">
        <h4 className="m-1 ml-3 text-md font-medium">Mi coleccion de deudas</h4>
        <div className="w-full">
          {/*Colecciones  */}
          <div className="m-2 p-3 shadow-md rounded-md flex justify-between bg-white/5">
            <h4 className="md:text-lg font-semibold">Oscar</h4>
            <p className="text-sm md:text-base">700$</p>
          </div>
          <div className="m-2 flex">
            <motion.h4
              whileHover={{
                scale: 0.9,
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              transition={{ duration: 0.4, type: "spring", stiffness: 500 }}
              onClick={() => setModalCreateCollection(true)}
              className="bg-primary/80 p-2 rounded-md shadow-md text-white font-serif font-bold hover:cursor-pointer"
            >
              Crear Coleccion
            </motion.h4>
          </div>
        </div>
      </div>
    </div>
  );
};
