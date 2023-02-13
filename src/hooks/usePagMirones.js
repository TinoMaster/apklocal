import { useEffect, useState } from "react";
import { httpHelper } from "../helpers/httpHelper";
import apiConfig from "../config/api.config.json";

const fecha = new Date();
const añoActual = fecha.getFullYear();

const mesActual = () => {
  let mes = fecha.getMonth();

  switch (mes) {
    case 0:
      mes = `Enero`;
      break;
    case 1:
      mes = `Febrero`;
      break;
    case 2:
      mes = `Marzo`;
      break;
    case 3:
      mes = `Abril`;
      break;
    case 4:
      mes = `Mayo`;
      break;
    case 5:
      mes = `Junio`;
      break;
    case 6:
      mes = `Julio`;
      break;
    case 7:
      mes = `Agosto`;
      break;
    case 8:
      mes = `Septiembre`;
      break;
    case 9:
      mes = `Octubre`;
      break;
    case 10:
      mes = `Noviembre`;
      break;
    case 11:
      mes = `Diciembre`;
      break;

    default:
      mes = `Enero`;
      break;
  }
  return mes;
};

const usePagMirones = () => {
  const [mirones, setMirones] = useState([]);
  const [loaderPageMiron, setLoaderPageMiron] = useState(false);
  const [errorPageMiron, setErrorPageMiron] = useState({});
  const [dispositivos, setDispositivos] = useState([]);
  const [fechaMirones, setFechaMirones] = useState(`${mesActual()}`);
  const [añosDisponiblesMiron, setAñosDisponiblesMiron] = useState([]);

  useEffect(() => {
    setLoaderPageMiron(true);
    httpHelper()
      .get(`${apiConfig.api.url}/mirones`)
      .then(async (res) => {
        if (res.error) {
          setLoaderPageMiron(false);
          setErrorPageMiron(res);
        } else {
          await setMirones(res.data);
          añosDisponibles(res.data);
          ArrayDispositivos(res.data);
          setLoaderPageMiron(false);
        }
      });
  }, []);

  const añosDisponibles = (array) => {
    let result = [];
    result = array.reduce((arrayResult, element) => {
      !arrayResult.includes(`${añoActual}`) && arrayResult.push(`${añoActual}`);
      !arrayResult.includes(element.fecha.match(/\d{4}/)[0]) && arrayResult.push(element.fecha.match(/\d{4}/)[0])
      return arrayResult;
    }, []);
    setAñosDisponiblesMiron(result);
  };

  const mejoresDiasSemana = (bd) => {
    let result = {};

    result = bd?.reduce((objectResult, element) => {
      if (!objectResult[element.fecha.split(" ")[0]]) {
        objectResult[element.fecha.split(" ")[0]] = element.venta_total;
      } else objectResult[element.fecha.split(" ")[0]] += element.venta_total;
      return result;
    }, result);

    return Object.entries(result).sort((a, b) => b[1] - a[1]);
  };

  const dispositivosMasCopian = (bd) => {
    let result = {};
    result = bd?.reduce((objectResult, elementoutside) => {
      elementoutside?.dispositivos?.forEach((element) => {
        if (!objectResult[element.dispositivo]) {
          objectResult[element.dispositivo] = element.pago;
        } else objectResult[element.dispositivo] += element.pago;
      });
      return result;
    }, result);
    return Object.entries(result)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);
  };

  const ArrayDispositivos = async (bd) => {
    let result = {};
    result = await bd?.reduce((objectResult, elementoutside) => {
      elementoutside?.dispositivos?.forEach(async (element) => {
        if (!objectResult[element.dispositivo]) {
          objectResult[element.dispositivo] = {
            fechas: [`${elementoutside.fecha}`],
            horas: [`${elementoutside.fecha} (${element.insercion})`],
            cont: 1,
            pago: element.pago,
          };
        } else {
          let arrayProv = [];

          objectResult[element.dispositivo].cont += 1;
          objectResult[element.dispositivo].horas = [
            ...objectResult[element.dispositivo].horas,
            `${elementoutside.fecha} (${element.insercion})`,
          ];
          arrayProv = [
            ...objectResult[element.dispositivo].fechas,
            `${elementoutside.fecha}`,
          ];
          objectResult[element.dispositivo].fechas = arrayProv.filter(
            (val, index, array) => {
              return array.indexOf(val) === index;
            }
          );
          objectResult[element.dispositivo].pago += element.pago;
        }
      });
      return objectResult;
    }, {});
    setDispositivos(
      Object.entries(result).sort((a, b) => b[1].pago - a[1].pago)
    );
  };

  const states = {
    mirones,
    setMirones,
    loaderPageMiron,
    errorPageMiron,
    dispositivos,
    fechaMirones,
    setFechaMirones,
    añosDisponiblesMiron,
  };
  const functions = {
    mejoresDiasSemana,
    dispositivosMasCopian,
    ArrayDispositivos,
  };
  return { states, functions };
};

export { usePagMirones };
