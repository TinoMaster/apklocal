import React from "react";
import { BiMessageRoundedDetail, BiCheckCircle, BiTrash } from "react-icons/bi";
import { motion } from "framer-motion";

export const CajaDeudas = () => {
  return (
    <div className="w-full flex flex-wrap p-4 justify-around">
      {/* caja deudor */}
      <div className="w-2/5 h-full rounded-lg shadow-lg p-4 m-4">
        <h2 className="text-2xl font-serif">Mis deudas</h2>
        {/* Encabezado */}
        <div className="w-full flex justify-around bg-yellow-500/90 rounded-md py-2 font-bold text-lg">
          <p className="">titulo</p>
          <p className="">fecha</p>
          <p className="">opciones</p>
        </div>
        {/* Tabla de deudas */}
        <div className="w-full flex justify-around items-center bg-white/10 mt-1 rounded-md py-2 font-bold text-lg">
          <p className="w-1/3 text-center">titulo</p>
          <p className="w-1/3 text-center">fecha</p>
          <div className="flex justify-around w-1/3">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-black/5 shadow-md shadow-black/30 p-1 rounded-full hover:cursor-pointer"
            >
              <BiCheckCircle size={"20px"} className="" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-black/5 shadow-md shadow-black/30 p-1 rounded-full hover:cursor-pointer"
            >
              <BiMessageRoundedDetail size={"20px"} />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-black/5 shadow-md shadow-black/30 p-1 rounded-full hover:cursor-pointer"
            >
              <BiTrash size={"20px"} />
            </motion.div>
          </div>
        </div>
      </div>
      {/* caja acreedor */}
    </div>
  );
};
