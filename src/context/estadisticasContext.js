import { createContext, useEffect, useState } from "react";
import apiConfig from "../config/api.config.json";
import { httpHelper } from "../helpers/httpHelper";

const fecha = new Date();
const añoActual = fecha.getFullYear();
const mesActual = () => {
  const fecha = new Date();
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

const url = `${apiConfig.api.url}/cuadre`;
const urlDelMes = `${apiConfig.api.url}/cuadre/getMonth/${mesActual()}`;
const urlGetAño = `${apiConfig.api.url}/cuadre/getYear/${añoActual}`;

const EstadisticasContext = createContext();

const EstadisticasProvider = ({ children }) => {
  const [bdCuadre, setBdCuadre] = useState([]);
  const [esteMes, setEsteMes] = useState({});
  const [error, setError] = useState({});
  const [bdPorAño, setbdPorAño] = useState({});

  useEffect(() => {
    httpHelper()
      .get(url)
      .then((data) => {
        if (data.error) {
          setBdCuadre([]);
          setError({
            name: data.error,
            status: data.statusCode,
            statusText: data.message,
          });
        } else {
          setError({});
          setBdCuadre(data);
        }
      });
    httpHelper()
      .get(urlDelMes)
      .then((data) => {
        if (!data.length) {
          setEsteMes({});
          setError({
            name: "error de conexion con la base de datos",
            status: 404,
            statusText: "Error de conexion",
          });
        } else {
          setError({});
          setEsteMes(data);
        }
      });
    httpHelper()
      .get(urlGetAño)
      .then((el) => {
        if (!el?.length) {
          setbdPorAño({});
          setError(el);
        } else {
          setbdPorAño(el);
          setError({});
        }
      });
  }, []);

  const totalRecaudado = (bd) => {
    if (!bd.length) {
      return 0;
    } else {
      let totalAño = 0;
      bd.forEach((dia) => (totalAño += dia.miron));
      return totalAño;
    }
  };

  const totalRecaudadoDueño = (bd) => {
    if (!bd.length) {
      return 0;
    } else {
      let totalAño = 0;
      bd.forEach((dia) => (totalAño += dia.dueño));
      return totalAño;
    }
  };

  const totalSalario = (bd) => {
    if (!bd.length) {
      return 0;
    } else {
      let totalSalario = 0;
      bd.forEach((dia) => (totalSalario += dia.salario1 + dia.salario2));
      return totalSalario;
    }
  };

  const ventaPorTurno = (bd) => {
    let result = {};

    if (bd?.length) {
      result = bd.reduce((object, element) => {
        const turno =
          element.turno.trabajador1 +
          (element.turno.trabajador2 !== ""
            ? " y " + element.turno.trabajador2
            : "");

        if (!object[turno]) {
          object[turno] = element.miron;
          object[`#${turno}`] = 1;
        } else {
          object[turno] += element.miron;
          object[`#${turno}`] += 1;
        }
        return result;
      }, result);
    }
    return Object.entries(result);
  };

  const mejorTurno = (bd) => {
    const array = ventaPorTurno(bd);
    const object = Object.fromEntries(array);
    let turno = "";
    let cont = 0;

    for (const i in object) {
      if (object[i] > cont) {
        cont = object[i];
        turno = i;
      }
    }
    return [turno, cont];
  };

  const mejorVenta = (bd) => {
    let result = {};
    let comp = 0;
    if (!bd.length) {
      return 0;
    } else {
      bd.forEach((dia) => {
        if (comp < dia.miron) {
          comp = dia.miron;
          result = dia;
        }
      });
      return result;
    }
  };

  const salarioTrabajador = (bd, worker) => {
    let salario = 0;
    if (!bd?.length) return 0;
    else {
      bd.forEach((dia) => {
        if (
          dia.turno.trabajador1 === worker ||
          dia.turno.trabajador1 === `${worker}(S)`
        ) {
          salario += dia.salario1;
        } else if (dia.turno.trabajador2 === worker) salario += dia.salario2;
      });
      return salario;
    }
  };

  const fondoAyer = (bd) => {
    let fondoAyer = 0;
    if (!bd.length) return 0;
    else {
      bd.forEach((dia) => (fondoAyer = dia.fondo));
    }
    return fondoAyer;
  };

  const hojas = (bd) => {
    let hojas = {
      bn: 0,
      color: 0,
      venta_bn: 0,
      venta_color: 0,
      venta_total: 0,
    };
    if (!bd.length) return hojas;
    else {
      const last = bd[bd.length - 1];
      hojas.bn = last.hojas.bn;
      hojas.color = last.hojas.color;
      hojas.venta_bn = last.hojas.rest_bn;
      hojas.venta_color = last.hojas.rest_color;
      hojas.venta_total = last.hojas.rest_bn + last.hojas.rest_color;
    }
    return hojas;
  };

  const whatMonthIs = (fecha) => {
    const mes = fecha?.split("-")[1];
    const año = fecha?.split("-")[2];

    switch (mes) {
      case "1":
        return `enero-${año}`;
      case "2":
        return `febrero-${año}`;
      case "3":
        return `marzo-${año}`;
      case "4":
        return `abril-${año}`;
      case "5":
        return `mayo-${año}`;
      case "6":
        return `junio-${año}`;
      case "7":
        return `julio-${año}`;
      case "8":
        return `agosto-${año}`;
      case "9":
        return `septiembre-${año}`;
      case "10":
        return `octubre-${año}`;
      case "11":
        return `noviembre-${año}`;
      case "12":
        return `diciembre-${año}`;

      default:
        return "0";
    }
  };

  const mejorYpeorMes = (bd) => {
    let result = [];
    let comp = 0;
    let meses;

    if (bd.length) {
      meses = bd?.reduce((objectResult, element, index, array) => {
        if (
          `${element.fecha.split("-")[1]}-${element.fecha.split("-")[2]}` !==
          mesActual()
        ) {
          if (Object.keys(objectResult).length === 0) {
            objectResult[whatMonthIs(element.fecha)] = element.miron;
          } else if (objectResult[whatMonthIs(element.fecha)]) {
            objectResult[whatMonthIs(element.fecha)] += element.miron;
          } else {
            objectResult[whatMonthIs(element.fecha)] = element.miron;
          }
        }

        return objectResult;
      }, {});
    }

    for (const key in meses) {
      const element = meses[key];
      if (element > comp) {
        comp = element;
        result[0] = key;
        result[1] = meses[key];
      }
    }
    for (const key in meses) {
      const element = meses[key];
      if (element < comp) {
        comp = element;
        result[2] = key;
        result[3] = meses[key];
      }
    }
    return result;
  };

  const existsYears = (bd) => {
    let result = [];

    if (bd.length > 0) {
      result = bd?.reduce((array, element) => {
        const año = element?.fecha?.split("-")[2];

        if (!array?.includes(año)) {
          array?.push(año);
        }
        return result;
      }, result);
    }

    return result?.sort((a, b) => b - a);
  };
  const years = existsYears(bdCuadre);

  const data = {
    error,
    totalRecaudado,
    totalRecaudadoDueño,
    totalSalario,
    mejorTurno,
    mejorVenta,
    salarioTrabajador,
    fondoAyer,
    bdCuadre,
    esteMes,
    mejorYpeorMes,
    bdPorAño,
    years,
    ventaPorTurno,
    hojas,
  };
  return (
    <EstadisticasContext.Provider value={data}>
      {children}
    </EstadisticasContext.Provider>
  );
};

export { EstadisticasProvider };
export default EstadisticasContext;
