import React, { useContext, useState } from "react";
import EstadisticasContext from "../../context/estadisticasContext";
import { useForm } from "../../hooks/useForm";
import CajaConteo from "./cajaConteo";
import CajaCuadre from "./cajaCuadre";
import CajaHojas from "./cajaHojas";
import CajaProductos from "./cajaProductos";
import CajaTurno from "./cajaTurno";
import ModalResult from "./modalResult";

const PagCuadre = () => {
  const [errorsForm, setErrorsForm] = useState({});
  const { ModalCuadre } = useContext(EstadisticasContext);
  const {
    handleSubmitForm,
    handleChangeForm,
    handleChangeInputRadio,
    form,
    setForm,
    handlerChangeHojas,
  } = useForm(setErrorsForm);

  return (
    <div className="flex flex-col w-full max-w-1080p max-h-1080p m-auto overflow-auto h-full md:py-6 rounded-lg relative">
      {ModalCuadre && <ModalResult />}

      <div className="flex flex-col md:flex-row w-full md:w-11/12 m-auto shadow-md shadow-violet-500/20 md:h-1/4 bg-violet-50 rounded-lg">
        <CajaTurno handleChangeInputRadio={handleChangeInputRadio} />
        <CajaHojas handlerChangeHojas={handlerChangeHojas} />
        <CajaProductos />
      </div>

      <div className="flex justify-center my-5 md:my-0 md:mt-5 w-full">
        <input
          onChange={(e) => {
            setForm({ ...form, fecha: e.target.value });
          }}
          className="bg-violet-400 p-1 text-white font-serif text-xs rounded-md shadow-md hover:cursor-pointer hover:bg-violet-500"
          type="date"
        />
      </div>

      <div className="flex flex-col h-full w-full md:justify-center items-center  md:h-3/4 md:flex-row">
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
