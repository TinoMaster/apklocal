import { useEffect, useState } from "react";
import { httpHelper } from "../helpers/httpHelper";
import apiConfig from "../config/api.config.json";

const useHojasBlancas = () => {
  const [hojasBlancas, setHojasBlancas] = useState({});

  /* const api = httpHelper(); */

  useEffect(() => {
    httpHelper()
      .get(`${apiConfig.api.url}/inventario/hojas`)
      .then((data) => {
        if (!data.length) {
          setHojasBlancas({});
        } else {
          setHojasBlancas(data[0]);
        }
      });
  }, []);

  return {
    hojasBlancas,
  };
};

export default useHojasBlancas;
