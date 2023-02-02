import { faDollar, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
import { ModalViewMiron } from "./modalViewMiron";

const PagCuadre = () => {
  const [errorsForm, setErrorsForm] = useState({});
  const [viewMiron, setViewMiron] = useState("close");
  const { ModalCuadre, cards, deleteCard } = useContext(CuadreContext);
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
    handlerChangeMirones,
    mirones,
    loaderMirones,
    totalMirones,
    saveMiron,
    successSendMiron,
    errorMirones,
  } = UseCuadreMiron(setErrorsForm);

  const { user, darkMode } = useContext(AuthContext);

  return (
    <div className="flex flex-col w-full max-w-1080p max-h-1080p m-auto overflow-auto h-full lg:py-6 rounded-lg relative ">
      {ModalCuadre && <ModalResult />}
      {viewMiron !== "close" && (
        <ModalViewMiron
          setViewMiron={setViewMiron}
          mirones={mirones}
          viewMiron={viewMiron}
          totalMirones={totalMirones}
          saveMiron={saveMiron}
          errorMirones={errorMirones}
          successSendMiron={successSendMiron}
          loaderMirones={loaderMirones}
        />
      )}

      <div className="flex flex-col lg:flex-row w-full lg:w-full m-auto  lg:h-1/4 bg-white/10 rounded-lg">
        <CajaTurno
          handlerChoiceWorker={handlerChoiceWorker}
          turno={turno}
          workers={workers}
          darkMode={darkMode}
        />
        <CajaHojas
          handlerChangeHojas={handlerChangeHojas}
          restHojas={restHojas}
        />
        <CajaProductos
          mirones={mirones}
          loaderMirones={loaderMirones}
          handlerChangeMirones={handlerChangeMirones}
          setViewMiron={setViewMiron}
        />
      </div>

      {user?.role === "admin" && (
        <div className="flex justify-center my-5  md:mt-5 w-full">
          <input
            onChange={(e) => {
              setForm({ ...form, fecha: e.target.value });
            }}
            className="bg-white/10 p-1 font-serif text-xs rounded-md shadow-md hover:cursor-pointer hover:bg-violet-500 hover:text-white transition-colors"
            type="date"
          />
        </div>
      )}

      <div className="flex flex-col h-full w-full lg:justify-center items-center  lg:h-3/4 lg:flex-row bg-white/5 rounded-md ">
        {/* Area Tarjetas */}
        <div className="flex flex-col relative items-center lg:absolute z-10">
          <h3 className="font-serif mb-2">Tarjetas:</h3>
          {cards?.map((card) => (
            <div
              key={card.id}
              className="flex justify-between w-full m-auto items-center relative bg-primary/30 px-2 py-1 rounded-md mb-2"
            >
              <p className="pr-2">{card.id}</p>
              <p>
                <FontAwesomeIcon icon={faDollar} /> {card.value}
              </p>
              <FontAwesomeIcon
                onClick={() => deleteCard(card.id)}
                className="absolute p-2 -right-8 rounded-full shadow-md shadow-black/20 bg-white/5 hover:bg-white/10 hover:cursor-pointer"
                icon={faTrash}
              />
            </div>
          ))}
        </div>
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
