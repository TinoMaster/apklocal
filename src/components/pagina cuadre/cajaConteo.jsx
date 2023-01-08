import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { useDesglose } from "../../hooks/useDesglose";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import CuadreContext from "../../context/cuadreContext";

const objectInputs = [];

const CajaConteo = () => {
  const [errors, setErrors] = useState({});
  const { result, setResult, setBilletes } = useContext(CuadreContext);

  const { handlerBlur, handlerSubmit, setInputs } = useDesglose(
    objectInputs,
    setErrors,
    setResult,
    setBilletes
  );

  return (
    <div className="w-full max-w-4xl min-h-[420px] md:h-full items-center relative justify-center sm:w-9/12 m-auto md:w-full lg:w-6/12 flex flex-col mb-12 lg:m-0">
      {errors && (
        <p className="absolute top-3 text-sm bg-rose-500 shadow-md shadow-rose-400/75 text-white rounded-md ">
          {errors.name}
        </p>
      )}

      <form
        action=""
        className="flex flex-col h-full w-10/12 relative lg:h-5/6 shadow-xl mt-16 md:mt-0 rounded-lg md:w-3/5 "
      >
        <h3 className="text-center p-3 font-serif bg-violet-500/80 text-white font-semibold rounded-t-lg">
          <FontAwesomeIcon icon={faCoins} /> Desglose
        </h3>

        <div className=" h-full w-full pb-4 flex flex-wrap bg-white/5 items-center">
          <div className="divImputsDesglose">
            <label className="labelBilletes" htmlFor="1000">
              $1000
            </label>
            <input
              className="billetes"
              type="number"
              name="mil"
              id="1000"
              onBlur={(e) => handlerBlur(e)}
            />
          </div>

          <div className="divImputsDesglose">
            <label className="labelBilletes" htmlFor="500">
              $500
            </label>
            <input
              className="billetes"
              type="number"
              name="quinientos"
              id="500"
              onBlur={(e) => handlerBlur(e)}
            />
          </div>

          <div className="divImputsDesglose">
            <label className="labelBilletes" htmlFor="200">
              $200
            </label>
            <input
              className="billetes"
              type="number"
              name="doscientos"
              id="200"
              onBlur={(e) => handlerBlur(e)}
            />
          </div>

          <div className="divImputsDesglose">
            <label className="labelBilletes" htmlFor="100">
              $100
            </label>
            <input
              className="billetes"
              type="number"
              name="cien"
              id="100"
              onBlur={(e) => handlerBlur(e)}
            />
          </div>

          <div className="divImputsDesglose">
            <label className="labelBilletes" htmlFor="50">
              $50
            </label>
            <input
              className="billetes"
              type="number"
              name="cincuenta"
              id="50"
              onBlur={(e) => handlerBlur(e)}
            />
          </div>

          <div className="divImputsDesglose">
            <label className="labelBilletes" htmlFor="20">
              $20
            </label>
            <input
              className="billetes"
              type="number"
              name="veinte"
              id="20"
              onBlur={(e) => handlerBlur(e)}
            />
          </div>

          <div className="divImputsDesglose">
            <label className="labelBilletes" htmlFor="10">
              $10
            </label>
            <input
              className="billetes"
              type="number"
              name="diez"
              id="10"
              onBlur={(e) => handlerBlur(e)}
            />
          </div>

          <div className="divImputsDesglose">
            <label className="labelBilletes" htmlFor="5">
              $5
            </label>
            <input
              className="billetes"
              type="number"
              name="cinco"
              id="5"
              onBlur={(e) => handlerBlur(e)}
            />
          </div>

          <div className="divImputsDesglose">
            <label className="labelBilletes" htmlFor="3">
              $3
            </label>
            <input
              className="billetes"
              type="number"
              name="tres"
              id="3"
              onBlur={(e) => handlerBlur(e)}
            />
          </div>

          <div className="divImputsDesglose">
            <label className="labelBilletes" htmlFor="1">
              $1
            </label>
            <input
              className="billetes"
              type="number"
              name="uno"
              id="1"
              onBlur={(e) => handlerBlur(e)}
            />
          </div>
        </div>

        <div className="flex w-full border-t-2  md:mt-0 bg-white/10 border-slate-300 justify-between p-4 rounded-b-xl">
          <input
            type="reset"
            onClick={() => {
              setInputs(objectInputs);
              setResult(0);
            }}
            value="Resetear"
            className="text-white text-xs md:text-sm font-sans w-1/4 shadow-lg md:px-3 py-1 rounded-lg shadow-slate-500/60 font-semibold bg-slate-500 hover:bg-slate-600 hover:cursor-pointer hover:shadow-slate-600 transition-all"
          />
          <input
            type="button"
            onClick={handlerSubmit}
            className="text-white text-xs md:text-sm font-sans w-1/4 shadow-lg md:px-3 py-1 rounded-lg shadow-violet-500/60 font-semibold bg-violet-500 hover:bg-violet-600 hover:cursor-pointer hover:shadow-violet-600 transition-all"
            value="Procesar"
          />
          <input
            type="number"
            value={result}
            name="respuesta"
            className="text-sm w-1/4 text-center rounded-2xl font-sans md:font-medium bg-transparent shadow-inner shadow-black/30 md:text-md"
            placeholder="Resultado"
            readOnly
          />
        </div>
      </form>
    </div>
  );
};

export default CajaConteo;
