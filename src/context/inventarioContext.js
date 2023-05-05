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
  const urlPostInsumos = `${apiConfig.api.url}/inventario`;
  /* const urlGetMediosBasicos = `${apiConfig.api.url}/inventario/mediosBasicos`; */

  const addDataToArray = (object) => {
    if (object.tipo === "insumos") {
      setInsumos([...insumos, object]);
    } else {
      setMediosBasicos([...mediosBasicos, object]);
    }
  };

  const createHojasBlancas = (array) => {
    const exist = array.some((item) => item.nombre === "Hojas Blancas");
    if (!exist) {
      const options = {
        body: {
          nombre: "Hojas Blancas",
          almacen: 0,
          local: 0,
          tipo: "insumos",
        },
        headers: { "content-type": "application/json" },
      };
      httpHelper()
        .post(urlPostInsumos, options)
        .then((res) => {
          if (res.error) {
            setError(res);
          } else if (res.success) {
            setError({});
            addDataToArray(res.data);
          }
        });
    }
  };

  useEffect(() => {
    httpHelper()
      .get(`${apiConfig.api.url}/inventario/insumos`)
      .then((res) => {
        if (res.error) {
          setError(res);
          setInsumos([]);
        } else {
          setError({});
          setInsumos(res.data);
          createHojasBlancas(res.data);
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

  const deleteFromArray = (object) => {
    if (object.tipo === "insumos") {
      setInsumos(insumos.filter((item) => item.id !== object.id));
    } else
      setMediosBasicos(mediosBasicos.filter((item) => item.id !== object.id));
  };

  const EliminarData = async (id) => {
    const urlEliminar = `${apiConfig.api.url}/inventario/${id}`;

    await httpHelper()
      .del(urlEliminar)
      .then((res) => {
        if (res.error) {
          setError(res);
        } else if (res.success) {
          setError({});
          deleteFromArray(res.data);
        } else setError({ error: true, message: "revise su conexion" });
      });
  };

  const editDataInArray = (object) => {
    if (object.tipo === "insumos") {
      setInsumos(
        insumos.map((item) => (item.id === object.id ? object : item))
      );
    } else {
      setMediosBasicos(
        mediosBasicos.map((item) => (item.id === object.id ? object : item))
      );
    }
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
      .then((res) => {
        if (res.error) {
          setError(res);
        } else if (res.success) {
          setError({});
          editDataInArray(res.data[0]);
        }
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
      .then((res) => {
        if (res.error) {
          setError(res);
        } else if (res.success) {
          setError({});
          editDataInArray(res.data[0]);
        }
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
