import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListDots } from "@fortawesome/free-solid-svg-icons";
import CuadreContext from "../../context/cuadreContext";

const modeloInicial = {
  miron: "",
  fondoAyer: "",
  fondoHoy: "",
  efectivo: "",
  deuda: "",
  turno: {},
  dueño: "",
  diferencia: "",
  salario1: "",
  salario2: "",
};

const CajaCuadre = ({
  errorsForm,
  handleSubmitForm,
  handleChangeForm,
  form,
  setForm,
}) => {
  const { result } = useContext(CuadreContext);

  return (
    <div className="w-full max-w-4xl relative h-full items-center sm:w-9/12 md:w-full m-auto justify-center lg:w-6/12 flex flex-col">
      {errorsForm && (
        <p className="absolute top-3 text-sm bg-rose-500 shadow-md shadow-rose-400/75 text-white rounded-md">
          {errorsForm.name}
        </p>
      )}
      <form
        action=""
        className="flex flex-col w-10/12 h-full lg:h-5/6 shadow-xl  mt-16 md:mt-0 rounded-lg md:w-3/5 mb-10 lg:mb-0"
      >
        <h3 className="text-center p-3 font-serif bg-teal-400/90 text-white font-semibold rounded-t-lg">
          <FontAwesomeIcon icon={faListDots} /> Cuadre
        </h3>

        <div className="flex flex-col h-full justify-between p-5 bg-white/5">
          <div className="flex flex-col items-center">
            <label htmlFor="miron" className="labelCajaCuadre">
              Total Miron
            </label>
            <input
              type="number"
              className="imputsCajaCuadre"
              name="miron"
              value={form.miron ? form.miron : ""}
              onChange={handleChangeForm}
            />
          </div>

          <div className="flex flex-col items-center">
            <label htmlFor="fondoAyer" className="labelCajaCuadre">
              Fondo Ayer
            </label>
            <input
              type="number"
              className="imputsCajaCuadre"
              name="fondoAyer"
              value={form.fondoAyer ? form.fondoAyer : ""}
              onChange={handleChangeForm}
            />
          </div>

          <div className="flex flex-col items-center">
            <label htmlFor="fondoHoy" className="labelCajaCuadre">
              Fondo Hoy
            </label>
            <input
              type="number"
              className="imputsCajaCuadre"
              name="fondoHoy"
              value={form.fondoHoy ? form.fondoHoy : ""}
              onChange={handleChangeForm}
            />
          </div>

          <div className="flex flex-col items-center">
            <label htmlFor="efectivo" className="labelCajaCuadre">
              Efectivo
            </label>
            <input
              type="number"
              className="imputsCajaCuadre"
              name="efectivo"
              onChange={handleChangeForm}
              readOnly
              value={result ? (form.efectivo = result) : ""}
            />
          </div>

          <div className="flex flex-col items-center">
            <label htmlFor="deuda" className="labelCajaCuadre">
              Deuda
            </label>
            <input
              type="number"
              className="imputsCajaCuadre"
              value={form.deuda ? form.deuda : ""}
              name="deuda"
              onChange={handleChangeForm}
            />
          </div>
        </div>

        <div className="flex w-full border-t-2 bg-white/10 border-slate-300 justify-center p-4 rounded-b-xl">
          <input
            type="button"
            className="text-xs md:text-sm font-sans shadow-lg px-3 py-1 mr-3 rounded-lg font-semibold bg-white/5 hover:bg-teal-500 bg-teal-400 hover:cursor-pointer hover:shadow-teal-600 shadow-teal-400/40 transition-all text-slate-200"
            onClick={handleSubmitForm}
            value="Terminar"
          />
          <input
            type="reset"
            className="text-xs md:text-sm font-sans shadow-lg px-3 py-1 ml-3 rounded-lg font-semibold bg-white/5  bg-slate-500 shadow-slate-400/50 hover:bg-slate-600 hover:cursor-pointer hover:shadow-slate-600 transition-all text-slate-200"
            onClick={() => setForm(modeloInicial)}
            value="Resetear"
          />
        </div>
      </form>
    </div>
  );
};

export default CajaCuadre;
