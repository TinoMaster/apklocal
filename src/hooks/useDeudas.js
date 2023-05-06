import { useEffect, useState } from "react";
import { httpHelper } from "../helpers/httpHelper";
import dbConfig from "../config/api.config.json";

export const useDeudas = () => {
  const [deudas, setDeudas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  useEffect(() => {
    setLoading(true);
    httpHelper()
      .get(`${dbConfig.api.url}/deudas`)
      .then((res) => {
        console.log(res);
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

  return { deudas, error, loading };
};
