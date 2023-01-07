import React, { useContext, useState } from "react";
import AuthContext from "../../context/authContext";
import CuadreContext from "../../context/cuadreContext";
import { UseCuadreMiron } from "../../hooks/useCuadreMiron";
import CajaConteo from "./cajaConteo";
import CajaCuadre from "./cajaCuadre";
import CajaHojas from "./cajaHojas";
import CajaProductos from "./cajaProductos";
import CajaTurno from "./cajaTurno";
import ModalResult from "./modalResult";

const PagCuadre = () => {
  const [errorsForm, setErrorsForm] = useState({});
  const { ModalCuadre } = useContext(CuadreContext);
  const {
    handleSubmitForm,
    handleChangeForm,
    form,
    setForm,
    handlerChangeHojas,
    handlerChoiceWorker,
    turno,
    workers,
    restHojas,
  } = UseCuadreMiron(setErrorsForm);

  const { user } = useContext(AuthContext);

  return (
    <div className="flex flex-col w-full max-w-1080p max-h-1080p m-auto overflow-auto h-full lg:py-6 rounded-lg relative">
      {ModalCuadre && <ModalResult />}

      <div className="flex flex-col lg:flex-row w-full lg:w-11/12 m-auto shadow-md shadow-violet-500/20 lg:h-1/4 bg-violet-50 rounded-lg">
        <CajaTurno
          handlerChoiceWorker={handlerChoiceWorker}
          turno={turno}
          workers={workers}
        />
        <CajaHojas handlerChangeHojas={handlerChangeHojas} restHojas={restHojas} />
        <CajaProductos />
      </div>

      {user?.role === "admin" && (
        <div className="flex justify-center my-5 lg:my-0 md:mt-5 w-full">
          <input
            onChange={(e) => {
              setForm({ ...form, fecha: e.target.value });
            }}
            className="bg-violet-400 p-1 text-white font-serif text-xs rounded-md shadow-md hover:cursor-pointer hover:bg-violet-500"
            type="date"
          />
        </div>
      )}

      <div className="flex flex-col h-full w-full lg:justify-center items-center  lg:h-3/4 lg:flex-row">
        <CajaConteo errorsForm={errorsForm} setErrorsForm={setErrorsForm} />
        <CajaCuadre
          errorsForm={errorsForm}
          setErrorsForm={setErrorsForm}
          handleSubmitForm={handleSubmitForm}
          handleChangeForm={handleChangeForm}
          form={form}
          setForm={setForm}
        />
      </div>
    </div>
  );
};

export default PagCuadre;
