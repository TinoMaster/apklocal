import { useEffect, useState } from "react";
import { httpHelper } from "../helpers/httpHelper";
import dbConfig from "../config/api.config.json";

export const useDeudas = () => {
  /* General States */
  const [deudas, setDeudas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  /* Modal States */
  const [modalCreateCollection, setModalCreateCollection] = useState(false);

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
  }, []);

  const modales = { modalCreateCollection, setModalCreateCollection };

  return { deudas, error, loading, modales };
};
