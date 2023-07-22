import React, { useState } from "react";
import { motion } from "framer-motion";

export const ModalCreateDebt = ({ modales, handlerFunctions, workers }) => {
  /* States */
  const [pagado, setPagado] = useState(false);
  const [tipoDeuda, setTipoDeuda] = useState("");
  /* useDeuda */
  const { setModalCreateCollection, setModalCreateDebt } = modales;
  const { handlerCreateDebt } = handlerFunctions;
  /* Handlers */
  const handlerTipoDeuda = (e) => {
    setTipoDeuda(e.target.value);
  };

  return (
    <motion.div
      initial={{ scale: 0, y: -180, x: 200 }}
      animate={{ scale: 1, y: 0, x: 0 }}
      className="w-full mx-2 bg-primary text-lightMode px-10 py-4 rounded-md max-w-[400px]"
    >
      {/* Encabezado */}
      <h2 className="text-lg font-semibold w-full text-center">Nueva Deuda</h2>
      {/*Caja Elegir tipo de deuda */}
      <div className="flex flex-wrap justify-center p-2 border-2 border-dashed my-5">
        <h3 className="w-full text-center pb-2">Escoge el tipo de deuda</h3>
        <input
          type="radio"
          name="debtTipe"
          id="deudor"
          value="deudor"
          className="imputCheckedAddDebt"
          onChange={handlerTipoDeuda}
        />
        <label
          htmlFor="deudor"
          className="p-2 bg-black/20 w-20 text-center rounded-md text-sm mr-2 hover:bg-black/30 hover:cursor-pointer"
        >
          Deudor
        </label>
        <input
          type="radio"
          name="debtTipe"
          id="acreedor"
          value="acreedor"
          className="imputCheckedAddDebt"
          onChange={handlerTipoDeuda}
        />
        <label
          htmlFor="acreedor"
          className="p-2 bg-black/20 w-20 text-center rounded-md text-sm ml-2 hover:bg-black/30 hover:cursor-pointer"
        >
          Acreedor
        </label>
      </div>
      {/* Caja inferior */}
      <div className="w-full flex flex-wrap justify-between">
        {/* Cantidad */}
        <div className="w-1/3 flex flex-wrap">
          <h4 className="w-full text-center font-serif">Cantidad</h4>
          <input
            onChange={handlerCreateDebt}
            name="deuda"
            type="number"
            className="w-full p-1 shadow-inner shadow-black/30 text-darkMode font-medium rounded-md focus:outline-none"
          />
        </div>
        {/* Pagada */}
        <div className="w-1/5 flex flex-wrap justify-center">
          <h4 className="w-full text-center font-serif">Pagada</h4>
          <input
            type="checkbox"
            onChange={(e) => setPagado(e.target.checked)}
          />
        </div>
        {/* Pago Parcial */}
        <div className="w-1/3 flex flex-wrap">
          <h4 className="w-full text-center font-serif">Pago Parcial</h4>
          <input
            onChange={handlerCreateDebt}
            type="number"
            disabled={pagado ? true : false}
            className="w-full p-1 shadow-inner shadow-black/30 text-darkMode font-medium rounded-md focus:outline-none"
          />
        </div>
        {/* Deudores/acreedores */}
        <div className="w-full flex flex-wrap">
          <h4 className="w-full text-center font-serif">
            {tipoDeuda === "deudor" ? "Acreedores" : "Deudores"}
          </h4>
          <select
            name=""
            id=""
            className="w-full text-center rounded-md bg-black/20"
          >
            <option value="" className="bg-primary hover:bg-black"></option>
            {workers?.map((el) => (
              <option
                key={el.correo}
                value=""
                className="bg-primary hover:bg-black"
              >
                {el.nombre}
              </option>
            ))}
          </select>
          <h4 className="font-serif">Otro:</h4>
          <input
            onChange={handlerCreateDebt}
            type="text"
            disabled={tipoDeuda === "" ? true : false}
            className="w-full p-1 shadow-inner shadow-black/30 text-darkMode font-medium rounded-md focus:outline-none"
          />
        </div>
        {/* Comentarios */}
        <div className="w-full flex flex-wrap">
          <h4 className="w-full text-center font-serif">Comentario</h4>
          <textarea
            name="comentario"
            onChange={handlerCreateDebt}
            className="w-full p-1 shadow-inner shadow-black/30 text-darkMode font-medium rounded-md focus:outline-none"
          />
        </div>
      </div>
      <div className="flex justify-center py-2 mt-5">
        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          transition={{ duration: 0.4, type: "spring", stiffness: 500 }}
          className="p-2 mx-2 bg-black/30 rounded-md shadow"
          onClick={() => setModalCreateCollection(false)}
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
          onClick={() => setModalCreateDebt(false)}
        >
          Cancelar
        </motion.button>
      </div>
    </motion.div>
  );
};
