import { createContext, useEffect, useState } from "react";
import { httpHelper } from "../helpers/httpHelper";
import useInventarioPagInicio from "../hooks/useInventarioPagInicio";
import apiConfig from "../config/api.config.json";

const EstadisticasContext = createContext();
const fecha = new Date();

const mesActual = () => {
  let mes = fecha.getMonth();

  switch (mes) {
    case 0:
      mes = "enero";
      break;
    case 1:
      mes = "febrero";
      break;
    case 2:
      mes = "marzo";
      break;
    case 3:
      mes = "abril";
      break;
    case 4:
      mes = "mayo";
      break;
    case 5:
      mes = "junio";
      break;
    case 6:
      mes = "julio";
      break;
    case 7:
      mes = "agosto";
      break;
    case 8:
      mes = "septiembre";
      break;
    case 9:
      mes = "octubre";
      break;
    case 10:
      mes = "noviembre";
      break;
    case 11:
      mes = "diciembre";
      break;

    default:
      mes = "enero";
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

const EstadisticasProvider = ({ children }) => {
  const [db, setDb] = useState([]);
  const [error, setError] = useState({});
  const [success, setSuccess] = useState({});
  const [finalizar, setFinalizar] = useState(true);
  const [result, setResult] = useState(0);
  const [billetes, setBilletes] = useState([]);
  const [ModalCuadre, setModalCuadre] = useState(false);
  const [resultForm, setResultForm] = useState({});
  const [mesDelAño, setMesDelAño] = useState(mesActual);

  const { hojasBlancas, testInyectores } = useInventarioPagInicio();
  const [loading, setLoading] = useState(false);

  const urlGet = `${apiConfig.api.url}/cuadre/${mesDelAño}`,
    urlSave = `${apiConfig.api.url}/cuadre`;

  const hojasGastadas = () => {
    let bn = resultForm.testInyectores.bn - testInyectores.bn;
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

    if (db.length > 0) {
      for (const i of db) {
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
      .then((el) => setDb(el))
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

  useEffect(() => {
    httpHelper()
      .get(urlGet)
      .then((el) => {
        if (!el.length) {
          setDb([]);
          setError(el);
        } else {
          setDb(el);
          setError({});
        }
      });
  }, [urlGet]);

  const data = {
    db,
    setDb,
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
    success,
    loading,
  };

  return (
    <EstadisticasContext.Provider value={data}>
      {children}
    </EstadisticasContext.Provider>
  );
};

export { EstadisticasProvider };
export default EstadisticasContext;
