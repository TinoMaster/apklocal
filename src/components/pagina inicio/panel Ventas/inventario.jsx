import { faBoxesPacking } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import AuthContext from "../../../context/authContext";
import useHojasBlancas from "../../../hooks/useHojasBlancas";

const Inventario = () => {
  const { user } = useContext(AuthContext);
  const { hojasBlancas } = useHojasBlancas();

  return (
    <div className="flex flex-col w-11/12 m-auto h-full">
      <h4 className="text-md font-medium mx-auto p-2">Inventario</h4>
      {/* inventario */}
      <div className="w-full h-full bg-white/5 shadow-lg rounded-lg">
        {/* Hojas blancas */}
        <div className="flex flex-wrap justify-center w-full lg:w-2/4 rounded-lg md:h-1/2">
          {/* hojas disponibles */}
          {user?.role === "admin" && (
            <div className="w-full md:w-1/2 h-full flex justify-center items-center">
              <div className="flex flex-wrap my-4">
                <FontAwesomeIcon
                  className="text-base md:text-2xl bg-teal-500 p-3 rounded-full"
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
          )}

          {/* De ayer */}
          <div className="flex w-full md:w-1/2 h-full flex-col justify-between items-center"></div>
        </div>
      </div>
    </div>
  );
};

export default Inventario;
