import { createContext, useEffect, useState } from "react";
import { httpHelper } from "../helpers/httpHelper";
import useInventarioPagInicio from "../hooks/useInventarioPagInicio";
import apiConfig from "../config/api.config.json";

const CuadreContext = createContext();
const fecha = new Date();
const añoActual = fecha.getFullYear();

const mesActual = () => {
  let mes = fecha.getMonth();

  switch (mes) {
    case 0:
      mes = `1-${añoActual}`;
      break;
    case 1:
      mes = `2-${añoActual}`;
      break;
    case 2:
      mes = `3-${añoActual}`;
      break;
    case 3:
      mes = `4-${añoActual}`;
      break;
    case 4:
      mes = `5-${añoActual}`;
      break;
    case 5:
      mes = `6-${añoActual}`;
      break;
    case 6:
      mes = `7-${añoActual}`;
      break;
    case 7:
      mes = `8-${añoActual}`;
      break;
    case 8:
      mes = `9-${añoActual}`;
      break;
    case 9:
      mes = `10-${añoActual}`;
      break;
    case 10:
      mes = `11-${añoActual}`;
      break;
    case 11:
      mes = `12-${añoActual}`;
      break;

    default:
      mes = `1-${añoActual}`;
      break;
  }
  return mes;
};

const addZero = (num) => {
  let result = 0;
  if (num.toString().length === 1) {
    result = "0" + num;
    parseInt(result);
  } else result = num;
  return result;
};

const restZeroDay = (num) => {
  let result = 0;
  let prueba = num.substring(0, 1);
  if (prueba === "0") {
    result = num.substring(1, 2);
    return result;
  } else return num;
};

const constMes = (num) => {
  let result = 0;
  let prueba = num.substring(0, 1);
  if (prueba === "0") {
    result = num.substring(1, 2) - 1;
    return result.toString();
  } else return num - 1;
};

const CuadreProvider = ({ children }) => {
  const [dbMensual, setDbMensual] = useState([]);
  const [error, setError] = useState({});
  const [success, setSuccess] = useState({});
  const [finalizar, setFinalizar] = useState(true);
  const [result, setResult] = useState(0);
  const [billetes, setBilletes] = useState([]);
  const [ModalCuadre, setModalCuadre] = useState(false);
  const [resultForm, setResultForm] = useState({});
  const [mesDelAño, setMesDelAño] = useState(mesActual);
  const [yearChoice, setYearChoice] = useState(añoActual);

  const [workers, setWorkers] = useState([]);

  const { hojasBlancas, testInyectores } = useInventarioPagInicio();
  const [loading, setLoading] = useState(false);

  const urlGet = `${apiConfig.api.url}/cuadre/${mesDelAño}`,
    urlSave = `${apiConfig.api.url}/cuadre`;

  useEffect(() => {
    httpHelper()
      .get(`${apiConfig.api.url}/trabajadores`)
      .then((docs) => {
        if (docs.success) {
          setWorkers(docs.data);
        } else {
          console.log(docs);
        }
      });
  }, []);

  const handlerChangeSelectYear = (e) => {
    setYearChoice(e.target.value);
  };

  const hojasGastadas = () => {
    let bn = resultForm?.testInyectores?.bn - testInyectores?.bn;
    let color = resultForm.testInyectores.color - testInyectores.color;
    let total = bn + color;

    return { bn, color, total };
  };

  const restarHojasPagInicio = () => {
    let bn = resultForm.testInyectores.bn - testInyectores.bn;
    let color = resultForm.testInyectores.color - testInyectores.color;
    let total = bn + color;

    let result = hojasBlancas.local - total;
    let id = hojasBlancas._id;

    let data = {
      local: result > 0 ? result : 0,
    };

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    let api = httpHelper();
    let urlEdit = `${apiConfig.api.url}/inventario/${id}`;

    api.put(urlEdit, options);
  };

  const createData = async () => {
    const data = {};
    let testIny = {};

    if (resultForm.fecha) {
      let mes = resultForm.fecha.substring(5, 7);
      let dia = resultForm.fecha.substring(8, 10);
      const nuevoDia = restZeroDay(dia);
      const nuevoMes = parseInt(constMes(mes));
      let año = resultForm.fecha.substring(0, 4);

      data.id = parseInt(`${año}${nuevoMes}${dia}`);
      data.fecha = `${nuevoDia}-${parseInt(nuevoMes) + 1}-${año}`;
    } else {
      data.id = parseInt(
        `${fecha.getFullYear()}${fecha.getMonth()}${addZero(fecha.getDate())}`
      );
      data.fecha = `${fecha.getDate()}-${
        fecha.getMonth() + 1
      }-${fecha.getFullYear()}`;
    }

    data.miron = resultForm.miron;
    data.efectivo = result;
    data.fondo = resultForm.fondoHoy;
    data.salario1 = resultForm.salario1;
    data.salario2 = resultForm.salario2;
    data.turno = resultForm.turno;
    data.dueño = resultForm.dueño;

    testIny = resultForm.testInyectores;

    let api = httpHelper();

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    let optionsTest = {
      body: testIny,
      headers: { "content-type": "application/json" },
    };

    if (dbMensual.length > 0) {
      for (const i of dbMensual) {
        if (i.id === data.id) {
          setError({
            error: "true",
            status: "500",
            statusText: "Ya existe el cuadre de hoy",
          });
          setFinalizar(false);
          break;
        } else {
          setError({});
          setFinalizar(true);
        }
      }
    }

    if (finalizar === true) {
      await api.post(urlSave, options);
      await api.post(`${apiConfig.api.url}/testInyectores`, optionsTest);
    }

    api
      .get(urlGet)
      .then((el) => setDbMensual(el))
      .catch((err) => console.log(err));
  };

  const validarData = async () => {
    setLoading(true);
    if (resultForm.diferencia === 0) {
      setFinalizar(true);
      await createData();
      await restarHojasPagInicio();
      if (finalizar === true) {
        setLoading(false);
        setSuccess({
          success: true,
          message: "Registro satisfactorio",
        });
        setTimeout(() => {
          setModalCuadre(false);
          setSuccess({});
        }, 2000);
        window.location.reload();
      }
    } else {
      setFinalizar(false);
      setError({
        error: "true",
        status: "500",
        statusText: "El dia no esta cuadrado",
      });
    }
  };

  const EliminarDiaCuadre = (id) => {
    const urlDeleteDay = `${apiConfig.api.url}/cuadre/delete/${id}`;
    httpHelper()
      .del(urlDeleteDay)
      .then((res) => console.log(res));
  };

  useEffect(() => {
    httpHelper()
      .get(urlGet)
      .then((el) => {
        if (!el.length) {
          setDbMensual([]);
          setError(el);
        } else {
          setDbMensual(el);
          setError({});
        }
      });
  }, [urlGet]);

  const data = {
    dbMensual,
    setDbMensual,
    error,
    setError,
    setFinalizar,
    finalizar,
    resultForm,
    setResultForm,
    result,
    setResult,
    billetes,
    setBilletes,
    ModalCuadre,
    setModalCuadre,
    validarData,
    setMesDelAño,
    hojasGastadas,
    EliminarDiaCuadre,
    success,
    loading,
    workers,
    yearChoice,
    handlerChangeSelectYear,
  };

  return (
    <CuadreContext.Provider value={data}>{children}</CuadreContext.Provider>
  );
};

export { CuadreProvider };
export default CuadreContext;
