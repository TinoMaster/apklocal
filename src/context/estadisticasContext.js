import { createContext, useEffect, useState } from "react";
import apiConfig from "../config/api.config.json";
import { httpHelper } from "../helpers/httpHelper";

const fecha = new Date();
const mesActual = () => {
  const fecha = new Date();
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
const añoActual = () => {
  let año = fecha.getFullYear();
  return año;
};

const url = `${apiConfig.api.url}/cuadre`;
const urlDelMes = `${apiConfig.api.url}/cuadre/${mesActual()}`;
const urlGetAño = `${apiConfig.api.url}/cuadre/${añoActual()}`;

const EstadisticasContext = createContext();

const EstadisticasProvider = ({ children }) => {
  const [bdCuadre, setBdCuadre] = useState({});
  const [esteMes, setEsteMes] = useState({});
  const [error, setError] = useState({});
  const [bdPorAño, setbdPorAño] = useState({});

  useEffect(() => {
    httpHelper()
      .get(url)
      .then((data) => {
        if (data.error) {
          setBdCuadre({});
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

    if (bd.length) {
      result = bd.reduce((object, element) => {
        const turno =
          element.turno.trabajador1 +
          (element.turno.trabajador2 !== ""
            ? " y " + element.turno.trabajador2
            : "");

        if (!object[turno]) {
          object[turno] = element.miron;
        } else {
          object[turno] += element.miron;
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

  const mejorYpeorMes = (bd) => {
    let allMonths = {};
    let sumaMeses = {};
    let mes = 0;
    let año = 0;
    let valorMejor = 0;
    let valorPeor = 500000;
    let mejorMes = "";
    let peorMes = "";

    if (!bd.length) {
      return 0;
    } else {
      bd.forEach((dia) => {
        let fecha = dia.id;
        let fechaSub = fecha.toString();
        let fechaString = fechaSub.substring(0, 5);
        allMonths = { ...allMonths, [fechaString]: {} };
      });
    }

    if (!bd.length) {
      return 0;
    } else {
      bd.forEach((dia) => {
        let fecha = dia.id;
        let fechaSub = fecha.toString();
        let fechaString = fechaSub.substring(0, 5);

        if (allMonths[fechaString]) {
          allMonths[fechaString] = {
            ...allMonths[fechaString],
            [fechaSub.substring(5, 7)]: dia,
          };
        }
      });
    }

    if (!bd.length) {
      return 0;
    } else {
      bd.forEach((dia) => {
        let fecha = dia.id;
        let fechaSub = fecha.toString();
        let fechaString = fechaSub.substring(0, 5);

        if (allMonths[fechaString]) {
          if (fechaSub.length === 7) {
            mes = fechaSub.substring(4, 5);
            año = fechaSub.substring(0, 4);
          } else {
            mes = fechaSub.substring(4, 6);
            año = fechaSub.substring(0, 4);
          }
          switch (mes) {
            case "0":
              mes = `enero-${año}`;
              break;
            case "1":
              mes = `febrero-${año}`;
              break;
            case "2":
              mes = `marzo-${año}`;
              break;
            case "3":
              mes = `abril-${año}`;
              break;
            case "4":
              mes = `mayo-${año}`;
              break;
            case "5":
              mes = `junio-${año}`;
              break;
            case "6":
              mes = `julio-${año}`;
              break;
            case "7":
              mes = `agosto-${año}`;
              break;
            case "8":
              mes = `septiembre-${año}`;
              break;
            case "9":
              mes = `octubre-${año}`;
              break;
            case "10":
              mes = `noviembre-${año}`;
              break;
            case "11":
              mes = `diciembre-${año}`;
              break;

            default:
              mes = "enero";
              break;
          }

          if (sumaMeses[mes] >= 0) {
            sumaMeses[mes] += dia.miron;
          } else {
            sumaMeses[mes] = 0;
            sumaMeses[mes] += dia.miron;
          }
        }
      });
    }

    for (const mes in sumaMeses) {
      if (sumaMeses[mes] >= 0 && sumaMeses[mes] >= valorMejor) {
        mejorMes = mes;
        valorMejor = sumaMeses[mes];
      }
      if (sumaMeses[mes] >= 0 && sumaMeses[mes] <= valorPeor) {
        peorMes = mes;
        valorPeor = sumaMeses[mes];
      }
    }

    return [mejorMes, valorMejor, peorMes, valorPeor];
  };

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
  };
  return (
    <EstadisticasContext.Provider value={data}>
      {children}
    </EstadisticasContext.Provider>
  );
};

export { EstadisticasProvider };
export default EstadisticasContext;
