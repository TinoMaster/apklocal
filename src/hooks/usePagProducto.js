import { useState } from "react";
import { httpHelper } from "../helpers/httpHelper";
import apiCofig from "../config/api.config.json";

const fecha = new Date();

export const usePagProducto = () => {
  const [error, setError] = useState("");
  const [insumo, setInsumo] = useState({});
  const [medioBasico, setMedioBasico] = useState({});

  const api = httpHelper();
  const urlSave = `${apiCofig.api.url}/inventario`;

  /* Insumos */
  const addZero = (num) => {
    let result = 0;
    if (num.toString().length === 1) {
      result = "0" + num;
      parseInt(result);
    } else result = num;
    return result;
  };

  const handlerSubmitSalvarInsumo = async () => {
    const data = {};

    data.id = parseInt(
      `${fecha.getFullYear()}${fecha.getMonth()}${addZero(fecha.getDate())}`
    );
    data.fecha = `${fecha.getDate()}-${
      fecha.getMonth() + 1
    }-${fecha.getFullYear()}`;

    data.nombre = insumo.nombre;
    data.almacen = insumo.almacen;
    data.local = insumo.local;
    data.tipo = "insumos";
    data.serie = "";
    data.modelo = "";
    data.description = "";

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    if (Object.keys(insumo).length === 0) {
      setError("Campo 'Nombre' y 'Almacen' requeridos");
    } else {
      await api.post(urlSave, options);
      window.location.reload();
    }
  };

  const handlerSubmitSalvarMBasico = async () => {
    const data = {};

    data.id = parseInt(
      `${fecha.getFullYear()}${fecha.getMonth()}${addZero(fecha.getDate())}`
    );
    data.fecha = `${fecha.getDate()}-${
      fecha.getMonth() + 1
    }-${fecha.getFullYear()}`;

    data.nombre = medioBasico.nombre;
    data.almacen = medioBasico.almacen;
    data.local = medioBasico.local;
    data.tipo = "medio-basico";
    data.serie = medioBasico.serie;
    data.modelo = medioBasico.modelo;
    data.description = "";

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    if (Object.keys(medioBasico).length === 0) {
      setError("Campo 'Nombre' , 'Almacen' y 'local' requeridos");
    } else {
      setError("");
      await api.post(urlSave, options);
      window.location.reload();
    }
  };

  const handlerChangeInsumo = (e) => {
    let { name, value } = e.target;

    setInsumo({ ...insumo, [name]: value });
  };

  const handlerChangeMBasico = (e) => {
    let { name, value } = e.target;

    setMedioBasico({ ...medioBasico, [name]: value });
  };

  return {
    handlerSubmitSalvarInsumo,
    error,
    handlerChangeInsumo,
    insumo,
    handlerChangeMBasico,
    handlerSubmitSalvarMBasico,
  };
};
