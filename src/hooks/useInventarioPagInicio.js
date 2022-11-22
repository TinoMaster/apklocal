import { useEffect, useState } from "react";
import { httpHelper } from "../helpers/httpHelper";
import apiConfig from "../config/api.config.json";

const testInicio = {
  bn: 0,
  color: 0,
  fecha: "",
};

const useInventarioPagInicio = () => {
  const [hojasBlancas, setHojasBlancas] = useState({});
  const [testInyectores, setTestInyectores] = useState(testInicio);

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

    httpHelper()
      .get(`${apiConfig.api.url}/testInyectores`)
      .then((data) => {
        if (!data.length) {
          console.log("No se ah cargado");
          setTestInyectores(testInicio);
        } else {
          setTestInyectores(data[0]);
        }
      });
  }, []);

  return {
    hojasBlancas,
    testInyectores,
  };
};

export default useInventarioPagInicio;
