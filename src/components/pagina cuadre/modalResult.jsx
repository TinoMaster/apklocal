import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import CuadreContext from "../../context/cuadreContext";
import {
  faFaceLaughWink,
  faFaceSadCry,
  faFaceFlushed,
} from "@fortawesome/free-solid-svg-icons";
import { ModalPortal } from "../modalPortal/modalPortal";
import { PrimaryLoader } from "../loaders/primaryLoader";

const ModalResult = () => {
  const {
    result,
    billetes,
    resultForm,
    setModalCuadre,
    error,
    validarData,
    hojasGastadas,
    success,
    loading,
  } = useContext(CuadreContext);

  const salario = {
    salario1: resultForm.salario1,
    salario2: resultForm.salario2,
    salarioSolo: resultForm.salarioSolo,
  };

  return (
    <ModalPortal>
      <div className="flex z-50 flex-col justify-center rounded-lg w-full h-full fixed md:absolute bg-black/50">
        <div className="flex flex-col justify-center w-11/12 h-10/12 md:w-1/3 relative m-auto md:h-3/5 bg-white rounded-lg shadow-2xl shadow-white/30 items-center">
          {error.error && (
            <div className="bg-red-500/70 font-serif -top-10 absolute p-2 rounded-md text-white">
              {error.message}
            </div>
          )}
          {/* Loading y success */}
          <div className="absolute bg-violet-500/30 rounded-md">
            {loading && <PrimaryLoader />}
            {success.success && (
              <p className="p-2 bg-green-400 text-white">{success.message}</p>
            )}
          </div>
          {resultForm.diferencia ? (
            <h3 className="bg-violet-500 shadow-lg rounded-t-lg p-2 text-center w-full">
              {resultForm.diferencia > 0 ? (
                <p className="text-xs text-green-600 font-serif font-semibold rounded-lg bg-white w-2/4 m-auto p-2">
                  <FontAwesomeIcon icon={faFaceFlushed} /> Sobran{" "}
                  {resultForm.diferencia}$
                </p>
              ) : (
                <p className="text-xs text-pink-600 font-serif font-semibold rounded-lg bg-white w-2/4 m-auto p-2">
                  <FontAwesomeIcon icon={faFaceSadCry} /> Faltan{" "}
                  {resultForm.diferencia}$
                </p>
              )}
            </h3>
          ) : (
            <h3 className="bg-violet-500 rounded-t-lg p-2 text-center w-full">
              <p className="text-xs text-green-600 font-serif font-semibold rounded-lg bg-white w-2/4 m-auto p-2">
                <FontAwesomeIcon icon={faFaceLaughWink} /> !!El dia esta
                cuadrado!!
              </p>
            </h3>
          )}
          {/* fecha */}
          <p className="absolute bg-white top-5 text-xs font-serif px-2 rounded-md left-2 text-slate-600">
            {resultForm.fecha}
          </p>

          <div className="flex w-2/4 m-auto justify-between">
            <p className="text-xs font-semibold text-yellow-500">{`hojas b/n ${
              hojasGastadas().bn
            }`}</p>
            <p className="text-xs font-semibold text-yellow-500">{`hojas color ${
              hojasGastadas().color
            }`}</p>
            <p className="text-xs font-semibold text-green-500">{`total ${
              hojasGastadas().total
            }`}</p>
          </div>

          <div className="flex flex-wrap h-full">
            <div className="w-1/2 h-2/5 flex flex-col shadow-inner items-center overflow-scroll md:overflow-hidden py-3">
              <h3 className="inline bg-violet-500 text-xs font-serif font-semibold text-white px-1 rounded-lg shadow-lg shadow-yellow-400/20">
                Desglose de billetes
              </h3>
              <div className="flex flex-wrap justify-center items-start p-2">
                {billetes.map((el) => (
                  <p
                    className="font-serif text-xs font-semibold text-slate-700 m-1 rounded-lg shadow-md px-1 w-2/5 text-center"
                    key={el[1]}
                  >{`$${el[1]}:  ${el[2]}`}</p>
                ))}
              </div>
            </div>

            <div className="w-1/2 h-2/5 flex flex-col bg-slate-100 rounded-b-lg items-center">
              <h5 className="inline my-3 text-xs bg-green-600 font-serif font-semibold text-white px-1 rounded-lg shadow-lg shadow-yellow-400/20">
                Salario
              </h5>
              <p className="font-semibold text-xs text-green-800">
                {resultForm?.turno?.trabajador1}
              </p>
              <input
                type="text"
                className="text-center text-xs font-serif focus:outline-none text-zinc-800 bg-transparent"
                id="salario_principal"
                value={
                  resultForm?.turno?.trabajador1 === "Jorge" ||
                  resultForm?.turno?.trabajador1 === "Bryam"
                    ? `$ ${salario.salario1}`
                    : `$ ${salario.salario1}`
                }
                readOnly
              />

              {resultForm?.turno?.trabajador2 !== "" && (
                <p className="font-semibold text-xs text-green-800">
                  {resultForm?.turno?.trabajador2}
                </p>
              )}
              {resultForm?.turno?.trabajador2 !== "" && (
                <input
                  type="text"
                  className="text-center text-xs font-serif focus:outline-none text-zinc-800 bg-transparent"
                  id="salario_secundario"
                  value={`$ ${salario.salario2}`}
                  readOnly
                />
              )}
            </div>

            <div className="flex flex-wrap bg-slate-100 p-2">
              <div className="w-1/2 text-center">
                <p className="font-semibold text-green-800 text-sm">Miron</p>
                <input
                  className="text-center focus:outline-none text-xs font-serif font-semibold text-zinc-800 bg-transparent"
                  type="text"
                  id="result_miron"
                  value={resultForm.miron}
                  readOnly
                />
              </div>

              <div className="w-1/2 text-center">
                <p className="font-semibold text-green-800 text-sm">
                  Efectivo sin fondo
                </p>
                <input
                  className="font-semibold text-center text-xs focus:outline-none font-serif text-zinc-800 bg-transparent"
                  type="text"
                  id="result_efectivo"
                  value={result}
                  readOnly
                />
              </div>

              <div className="w-1/2 text-center">
                <p className="font-semibold text-green-800 text-sm">
                  Dueño + deuda
                </p>
                <input
                  className="font-semibold text-center text-xs focus:outline-none font-serif text-zinc-800 bg-transparent"
                  type="text"
                  id="result_dueño"
                  value={resultForm.dueño}
                  readOnly
                />
              </div>

              <div className="w-1/2 text-center">
                <p className="font-semibold text-green-800 text-sm">Deuda</p>
                <input
                  className="font-semibold text-center text-xs focus:outline-none font-serif text-zinc-800 bg-transparent"
                  type="text"
                  id="result_deuda"
                  value={resultForm.deuda}
                  readOnly
                />
              </div>

              <div className="w-1/2 text-center">
                <p className="font-semibold text-green-800 text-sm">
                  Fondo Ayer
                </p>
                <input
                  className="font-semibold text-center text-xs focus:outline-none font-serif text-zinc-800 bg-transparent"
                  type="text"
                  id="result_fondoAyer"
                  value={resultForm.fondoAyer}
                  readOnly
                />
              </div>

              <div className="w-1/2 text-center">
                <p className="font-semibold text-green-800 text-sm">
                  Fondo hoy
                </p>
                <input
                  className="font-semibold text-center text-xs focus:outline-none font-serif text-zinc-800 bg-transparent"
                  type="text"
                  id="result_fondoHoy"
                  value={resultForm.fondoHoy}
                  readOnly
                />
              </div>
            </div>
          </div>

          <div className="p-3 rounded-lg flex justify-center">
            <input
              type="submit"
              className="p-1 mx-2 bg-green-500 hover:cursor-pointer text-sm hover:bg-green-600 hover:shadow-xl text-white shadow-md shadow-green-500/30 rounded-lg"
              onClick={() => {
                validarData();
              }}
              value="Guardar"
            />
            <input
              type="button"
              className="p-1 mx-2 bg-violet-500 hover:cursor-pointer text-sm hover:bg-violet-600 hover:shadow-xl text-white shadow-md shadow-violet-500/30 rounded-lg"
              onClick={() => setModalCuadre(false)}
              value="Cancelar"
            />
          </div>
        </div>

        {/*  {!finalizar && (
          <div className="caja_modal_2">
            {error.error && <h3>{error.message}</h3>}
            <input
              type="button"
              onClick={() => setFinalizar(true)}
              id="cerrar_modal_2"
              value="Aceptar"
            />
          </div>
        )} */}
      </div>
    </ModalPortal>
  );
};

export default ModalResult;
