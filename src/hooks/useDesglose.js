import { useState } from "react";

export const useDesglose = (
  objectInputs,
  setErrors,
  setResult,
  setBilletes
) => {
  /* Variables de estado */
  const [inputs, setInputs] = useState(objectInputs);

  /* Funciones */
  const validarCaracter = (values) => {
    let error = {};
    let expReg = /^[1-9]\d*/;

    for (const i in values) {
      if (!expReg.test(values[i][2])) {
        error.name = `Los valores no pueden empezar en "0" como en la casilla (${values[i][1]}:)`;
      } else if (values[i][2].length >= 5) {
        error.name = `Maximo de caracteres permitidos "4",revise la casilla (${values[i][1]}:)`;
      }
    }
    return error;
  };
  
  const validarInputs = (inputs) => {
    if (validarCaracter(inputs).name === undefined) {
      return true;
    }
    return false;
  };

  /* Handlers: */
  const handlerBlur = (e) => {
    const { name, id, value } = e.target;
    let arr = inputs;
    for (const i in arr) {
      if (arr[i][0] === name || arr[i][2] === "") {
        arr.splice(i, 1);
      }
    }
    value > 0 ? setInputs([...arr, [name, id, value]]) : setInputs([...arr]);
    setErrors(validarCaracter(inputs));
  };

  const handlerSubmit = (e) => {
    let res = 0;
    inputs.forEach((input) => {
      res += input[1] * input[2];
    });
    validarInputs(inputs) === true ? setResult(res) : setResult(0);
    setErrors(validarCaracter(inputs));
    setBilletes(inputs);
  };

  return {
    inputs,
    handlerBlur,
    handlerSubmit,
    setInputs,
  };
};
