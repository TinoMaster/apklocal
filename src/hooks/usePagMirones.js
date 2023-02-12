import { useEffect, useState } from "react";
import { httpHelper } from "../helpers/httpHelper";
import apiConfig from "../config/api.config.json";

const usePagMirones = () => {
  const [mirones, setMirones] = useState([]);
  const [loaderPageMiron, setLoaderPageMiron] = useState(false);
  const [errorPageMiron, setErrorPageMiron] = useState({});
  const [dispositivos, setDispositivos] = useState([]);

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
          ArrayDispositivos(res.data);
          setLoaderPageMiron(false);
        }
      });
  }, []);

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
    console.log(Object.entries(result).sort((a, b) => b[1].pago - a[1].pago));
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
  };
  const functions = {
    mejoresDiasSemana,
    dispositivosMasCopian,
    ArrayDispositivos,
  };
  return { states, functions };
};

export { usePagMirones };
