import { createContext, useEffect, useState } from "react";
import { httpHelper } from "../helpers/httpHelper";
import useInventarioPagInicio from "../hooks/useHojasBlancas";
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
const mesSelectEtiqueta = (value, año) => {
  let num = `${value}`;
  switch (num) {
    case "1":
      return `Enero-${año}`;
    case "2":
      return `Febrero-${año}`;
    case "3":
      return `Marzo-${año}`;
    case "4":
      return `Abril-${año}`;
    case "5":
      return `Mayo-${año}`;
    case "6":
      return `Junio-${año}`;
    case "7":
      return `Julio-${año}`;
    case "8":
      return `Agosto-${año}`;
    case "9":
      return `Septiembre-${año}`;
    case "10":
      return `Octubre-${año}`;
    case "11":
      return `Noviembre-${año}`;
    case "12":
      return `Diciembre-${año}`;
    default:
      return `Enero-${año}`;
  }
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
  const [ultimaVenta, setUltimaVenta] = useState({});
  const [error, setError] = useState({});
  const [success, setSuccess] = useState({});
  const [result, setResult] = useState(0);
  const [billetes, setBilletes] = useState([]);
  const [ModalCuadre, setModalCuadre] = useState(false);
  const [resultForm, setResultForm] = useState({});
  const [mesDelAño, setMesDelAño] = useState(mesActual);
  const [yearChoice, setYearChoice] = useState(añoActual);
  const [loading, setLoading] = useState(false);

  const [workers, setWorkers] = useState([]);

  const [card, setCard] = useState({});
  const [cards, setCards] = useState([]);

  const { hojasBlancas } = useInventarioPagInicio();

  const urlSave = `${apiConfig.api.url}/cuadre`;
  const urlGetOrPostCards = `${apiConfig.api.url}/cards`;

  useEffect(() => {
    httpHelper()
      .get(`${apiConfig.api.url}/cuadre/getMonth/${mesDelAño}`)
      .then((el) => {
        if (!el.length) {
          setDbMensual([]);
          setError(el);
        } else {
          setDbMensual(el);
          setError({});
        }
      });
    httpHelper()
      .get(`${apiConfig.api.url}/cuadre/latest`)
      .then((res) => {
        if (res.error) {
          setError(res);
        } else if (res.success) {
          setError({});
          res.data.length > 0
            ? setUltimaVenta(res.data[0])
            : setUltimaVenta({});
        }
      });
    httpHelper()
      .get(`${apiConfig.api.url}/trabajadores`)
      .then((docs) => {
        if (docs.success) {
          setWorkers(docs.data);
        } else {
          console.log(docs);
        }
      });
    httpHelper()
      .get(`${apiConfig.api.url}/cards`)
      .then((res) => {
        if (res.error) {
          setError(res);
        } else if (res.success) {
          setError({});
          setCards(res.data);
        }
      });
  }, [mesDelAño]);

  const handlerChangeSelectYear = (e) => {
    setYearChoice(e.target.value);
    setMesDelAño(`1-${e.target.value}`);
  };

  const hojasGastadas = () => {
    let bn;
    let color;
    if (Object.keys(ultimaVenta).length === 0) {
      bn = resultForm?.testInyectores?.bn;
      color = resultForm.testInyectores.color;
    } else {
      bn = resultForm?.testInyectores?.bn - ultimaVenta?.hojas.bn;
      color = resultForm.testInyectores.color - ultimaVenta?.hojas.color;
    }
    let total = parseInt(bn) + parseInt(color);

    return { bn, color, total };
  };

  const restarHojasPagInicio = () => {
    let bn;
    let color;
    if (Object.keys(ultimaVenta).length === 0) {
      bn = resultForm?.testInyectores?.bn;
      color = resultForm.testInyectores.color;
    } else {
      bn = resultForm?.testInyectores?.bn - ultimaVenta?.hojas.bn;
      color = resultForm.testInyectores.color - ultimaVenta?.hojas.color;
    }
    let total = parseInt(bn) + parseInt(color);

    let result = hojasBlancas.local - total;
    let id = hojasBlancas._id;

    let data = {
      local: result >= 0 ? result : 0,
    };

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    let api = httpHelper();
    let urlEdit = `${apiConfig.api.url}/inventario/${id}`;

    api.put(urlEdit, options);
  };

  const existCuadre = async () => {
    let existCuadre = false;
    let data = {};

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

    await dbMensual.forEach((el) => {
      if (el.id === data.id) {
        existCuadre = true;
      }
    });
    return existCuadre;
  };

  const createDataToSend = async () => {
    const data = {};

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
    data.hojas = resultForm.hojas;
    data.made_by = resultForm.made_by;

    return data;
  };

  const sendData = async () => {
    let data = await createDataToSend();
    let testIny = resultForm.testInyectores;
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    let optionsTest = {
      body: testIny,
      headers: { "content-type": "application/json" },
    };

    await httpHelper().post(urlSave, options);
    await httpHelper().post(`${apiConfig.api.url}/testInyectores`, optionsTest);
  };

  const validarData = async () => {
    if (resultForm.diferencia !== 0) {
      setError({
        error: true,
        message: "El dia no esta cuadrado",
      });
    } else {
      setLoading(true);
      setError({});
      const exist = await existCuadre();
      if (exist) {
        setLoading(false);
        setError({ error: true, message: "El cuadre de hoy ya existe" });
      } else {
        setError({});
        await sendData();
        await restarHojasPagInicio();
        setLoading(false);
        httpHelper().del(urlGetOrPostCards);
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
    }
  };

  const handleTarget = (e) => {
    const { name, value } = e.target;
    setCard({ ...card, [name]: value });
  };

  const validarTarget = () => {
    if (!card.id || card.id.length !== 13) {
      return false;
    }
    if (!card.value) {
      return false;
    }
    return true;
  };

  const addTargetToArray = (close) => {
    if (!validarTarget()) {
      setError({ error: true, message: "Introduce datos validos" });
    } else {
      const options = {
        body: card,
        headers: { "content-type": "application/json" },
      };
      httpHelper()
        .post(urlGetOrPostCards, options)
        .then((res) => {
          if (res.error) {
            setError(res);
          } else if (res.success) {
            setSuccess(res);
            setError({});
            setCards([...cards, card]);
            setCard({});
            close(false);
            setTimeout(() => {
              setSuccess({});
            }, 2000);
          }
        });
    }
  };

  const sumarHojasDiaAnterior = () => {
    const total = ultimaVenta.hojas.rest_bn + ultimaVenta.hojas.rest_color;
    let result = hojasBlancas.local + total;
    let id = hojasBlancas._id;

    let data = {
      local: result,
    };
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    let api = httpHelper();
    let urlEdit = `${apiConfig.api.url}/inventario/${id}`;

    api.put(urlEdit, options);
  };

  const EliminarDiaCuadre = (e, id) => {
    e.stopPropagation();
    const resp = window.confirm("Estas seguro que quieres eliminar el dia?");
    if (resp === true) {
      const urlDeleteDay = `${apiConfig.api.url}/cuadre/delete/${id}`;
      httpHelper()
        .del(urlDeleteDay)
        .then(async (res) => {
          if (res.success) {
            await sumarHojasDiaAnterior();
            window.location.reload();
          }
        });
    }
  };

  const deleteCard = (id) => {
    httpHelper()
      .del(`${apiConfig.api.url}/cards/${id}`)
      .then((res) => {
        if (res.error) {
          setError(res);
        } else {
          setSuccess(res);
          setError({});
          setCards(cards.filter((card) => card.id !== id));
          setTimeout(() => {
            setSuccess({});
          }, 2000);
        }
      });
  };

  const data = {
    dbMensual,
    setDbMensual,
    error,
    setError,
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
    mesDelAño,
    handlerChangeSelectYear,
    mesSelectEtiqueta,
    handleTarget,
    addTargetToArray,
    cards,
    deleteCard,
  };

  return (
    <CuadreContext.Provider value={data}>{children}</CuadreContext.Provider>
  );
};

export { CuadreProvider };
export default CuadreContext;
