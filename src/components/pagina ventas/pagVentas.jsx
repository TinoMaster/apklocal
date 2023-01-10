import React, { useContext } from "react";
import AuthContext from "../../context/authContext";
import CuadreContext from "../../context/cuadreContext";
import EstadisticasContext from "../../context/estadisticasContext";
import { Meses } from "./meses";
import { TablaVentas } from "./tablaVentas";

const PagVentas = () => {
  const {
    yearChoice,
    dbMensual,
    setMesDelAño,
    EliminarDiaCuadre,
    handlerChangeSelectYear,
    mesDelAño,
    mesSelectEtiqueta,
  } = useContext(CuadreContext);
  const { years } = useContext(EstadisticasContext);
  const { user } = useContext(AuthContext);

  return (
    <div className="w-full max-w-1080p h-full overflow-auto m-auto">
      <div className="cajaEstadisticas relative">
        {/* Meses */}
        <Meses yearChoice={yearChoice} setMesDelAño={setMesDelAño} />
        {/* Escoger año */}
        <div className="flex">
          <select
            name=""
            id=""
            className="p-1 border-2 rounded-md ml-2  text-slate-700 focus:outline-none"
            onChange={handlerChangeSelectYear}
          >
            {years.length > 0 ? (
              years?.map((año) => (
                <option key={año} value={año}>
                  {año}
                </option>
              ))
            ) : (
              <option>...</option>
            )}
          </select>
          <p className="self-center right-5 absolute block text-sm text-violet-400/80 font-serif">
            {mesSelectEtiqueta(
              mesDelAño[1] !== "-"
                ? `${mesDelAño[0]}${mesDelAño[1]}`
                : mesDelAño[0],
              yearChoice
            )}
          </p>
        </div>
        {/* Tabla de ventas */}
        <TablaVentas
          dbMensual={dbMensual}
          EliminarDiaCuadre={EliminarDiaCuadre}
          user={user}
        />
      </div>
    </div>
  );
};

export default PagVentas;
