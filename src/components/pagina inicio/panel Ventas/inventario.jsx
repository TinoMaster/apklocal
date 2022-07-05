import { faBoxesPacking, faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useInventarioPagInicio from "../../../hooks/useInventarioPagInicio";

const Inventario = () => {
  const { hojasBlancas, testInyectores } = useInventarioPagInicio();

  return (
    <div className="flex flex-col w-11/12 m-auto h-full">
      <h4 className="text-md font-medium text-gray-500 mx-auto p-2">
        Inventario
      </h4>
      {/* inventario */}
      <div className="w-full h-full bg-white shadow-lg rounded-lg">
        {/* Hojas blancas */}
        <div className="flex flex-wrap w-full md:w-2/4 rounded-lg md:h-1/2 bg-slate-50">
          {/* hojas disponibles */}
          <div className="w-full md:w-1/2 h-full flex justify-center items-center">
            <div className="flex flex-wrap my-4">
              <FontAwesomeIcon
                className="text-base md:text-2xl text-white bg-teal-500 p-3 rounded-full"
                icon={faBoxesPacking}
              />
              <div className="flex flex-col ml-2">
                <h4 className="font-semibold md:text-xl text-teal-700">
                  Hojas
                </h4>
                <p className="font-light text-xs">disponibles</p>
              </div>
              <p className="w-full py-2 text-center font-sans font-bold text-teal-600">
                (M) {hojasBlancas.local}
              </p>
            </div>
          </div>
          {/* De ayer */}
          <div className="flex w-full md:w-1/2 h-full flex-col justify-between items-center">
            <h4 className="font-semibold mt-4 text-center md:text-xl text-violet-500/80 ml-2 ">
              <FontAwesomeIcon
                className=" text-violet-500 rounded-full"
                icon={faPrint}
              />{" "}
              Test Ayer
            </h4>
            <div className="flex justify-around my-4 w-full items-start h-2/3">
              <div className="flex flex-col ">
                <h4 className="font-semibold text-slate-700">Hojas</h4>
                <p className="font-light text-xs text-slate-400">
                  blanco y negro
                </p>
                <p className="font-bold text-slate-600">{testInyectores.bn}</p>
              </div>
              <div className="flex flex-col ">
                <h4 className="font-semibold text-slate-700">Hojas</h4>
                <p className="font-light text-xs text-slate-400">color</p>
                <p className="font-bold text-slate-600">
                  {testInyectores.color}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventario;
