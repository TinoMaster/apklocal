import { useEffect, useState } from "react";
import { httpHelper } from "../helpers/httpHelper";
import dbConfig from "../config/api.config.json";

const initialState = {
  name: "",
  creador: "",
  deudor: [],
  acreedor: [],
  deuda: 0,
  fecha: "",
  pagada: {
    isDone: false,
    fecha: "",
  },
  pagos: [],
  comentario: [],
};

export const useDeudas = () => {
  /* General States */
  const [deudas, setDeudas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [workers, setWorkers] = useState([]);
  /* Data to send */
  const [createDeuda, setCreateDeuda] = useState(initialState);
  /* Modal States */
  const [modalCreateCollection, setModalCreateCollection] = useState(false);
  const [modalCreateDebt, setModalCreateDebt] = useState(true);

  useEffect(() => {
    setLoading(true);
    httpHelper()
      .get(`${dbConfig.api.url}/deudas`)
      .then((res) => {
        if (!res.success) {
          setLoading(false);
          setError(res);
        } else {
          setError({});
          setLoading(false);
          setDeudas(res.data);
        }
      });
    httpHelper()
      .get(`${dbConfig.api.url}/trabajadores`)
      .then((res) => {  
        if (!res.success) {
          setLoading(false);
          setError(res);
        } else {
          setError({});
          setLoading(false);
          setWorkers(res.data);
        }
      });
  }, []);

  const handlerCreateDebt = (e) => {
    const { name, value } = e.target;
    setCreateDeuda({ ...createDeuda, [name]: value });
  };

  const modales = {
    modalCreateCollection,
    setModalCreateCollection,
    setModalCreateDebt,
    modalCreateDebt,
  };
  const handlerFunctions = { handlerCreateDebt };

  return { deudas, error, workers, loading, modales, handlerFunctions };
};
