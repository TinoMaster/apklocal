import { createContext, useEffect, useState } from "react";
import { httpHelper } from "../helpers/httpHelper";
import apiConfig from "../config/api.config.json";

const InventarioContext = createContext();

let fecha = new Date();

const InventarioProvider = ({ children }) => {
  const [error, setError] = useState({});
  const [insumos, setInsumos] = useState([]);
  const [insumoEdit, setInsumoEdit] = useState({});
  const [mediosBasicos, setMediosBasicos] = useState([]);
  const [mBasicoToEdit, setMBasicoToEdit] = useState({});

  const urlGetInsumos = `${apiConfig.api.url}/inventario/insumos`;
  const urlGetMediosBasicos = `${apiConfig.api.url}/inventario/mediosBasicos`;

  useEffect(() => {
    httpHelper()
      .get(`${apiConfig.api.url}/inventario/insumos`)
      .then((res) => {
        if (!res.length) {
          setError(res);
          setInsumos([]);
        } else {
          setError({});
          setInsumos(res);
        }
      });

    httpHelper()
      .get(`${apiConfig.api.url}/inventario/mediosBasicos`)
      .then((res) => {
        if (!res.length) {
          setError(res);
          setMediosBasicos([]);
        } else {
          setError({});
          setMediosBasicos(res);
        }
      });
  }, []);

  const handlerChangeInsumoToEdit = (e) => {
    let { name, value } = e.target;

    setInsumoEdit({ ...insumoEdit, [name]: value });
  };

  const handlerChangeMBasicoToEdit = (e) => {
    let { name, value } = e.target;

    setMBasicoToEdit({ ...mBasicoToEdit, [name]: value });
  };

  const EliminarData = async (id) => {
    const urlEliminar = `${apiConfig.api.url}/inventario/${id}`;
    console.log(id);

    await httpHelper().del(urlEliminar);
    httpHelper()
      .get(urlGetInsumos)
      .then((res) => {
        setInsumos(res);
      });
    httpHelper()
      .get(urlGetMediosBasicos)
      .then((res) => {
        setMediosBasicos(res);
      });
  };

  /* enviar edit de insumos */
  const sendDataToEdit = async (id) => {
    const urlEdit = `${apiConfig.api.url}/inventario/${id}`;

    const data = {
      id: insumoEdit.id,
      nombre: insumoEdit.nombre,
      serie: "",
      modelo: "",
      almacen: insumoEdit.almacen,
      local: insumoEdit.local,
      description: insumoEdit.description,
      tipo: "insumos",
      fecha: `${fecha.getDate()}-${
        fecha.getMonth() + 1
      }-${fecha.getFullYear()}`,
    };

    const options = {
      body: data,
      headers: { "Content-Type": "application/json" },
    };

    await httpHelper().put(urlEdit, options);
    httpHelper()
      .get(urlGetInsumos)
      .then((response) => {
        setInsumos(response);
      });
  };
  /* Enviar edit de Medios Basicos */
  const sendDataToEditMBasicos = async (id) => {
    const urlEdit = `${apiConfig.api.url}/inventario/${id}`;

    const data = {
      nombre: mBasicoToEdit.nombre,
      serie: mBasicoToEdit.serie,
      modelo: mBasicoToEdit.modelo,
      almacen: mBasicoToEdit.almacen,
      local: mBasicoToEdit.local,
      description: "",
      tipo: "medio-basico",
      fecha: `${fecha.getDate()}-${
        fecha.getMonth() + 1
      }-${fecha.getFullYear()}`,
    };

    const options = {
      body: data,
      headers: { "Content-Type": "application/json" },
    };

    await httpHelper()
      .put(urlEdit, options)
      .then((response) => {
        setMBasicoToEdit({});
      });
    httpHelper()
      .get(urlGetMediosBasicos)
      .then((response) => {
        setMediosBasicos(response);
      });
  };

  const data = {
    error,
    setError,
    insumos,
    handlerChangeInsumoToEdit,
    sendDataToEdit,
    insumoEdit,
    EliminarData,
    mediosBasicos,
    mBasicoToEdit,
    handlerChangeMBasicoToEdit,
    sendDataToEditMBasicos,
  };

  return (
    <InventarioContext.Provider value={data}>
      {children}
    </InventarioContext.Provider>
  );
};

export { InventarioProvider };
export default InventarioContext;
