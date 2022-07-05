import { useEffect, useState } from "react";
import { httpHelper } from "../helpers/httpHelper";

const testInicio = {
  bn: 0,
  color: 0,
  fecha: "",
};

const useInventarioPagInicio = () => {
  const [hojasBlancas, setHojasBlancas] = useState({});
  const [testInyectores, setTestInyectores] = useState(testInicio);

  const api = httpHelper();

  useEffect(() => {
    api.get("http://localhost:5000/inventario/hojas").then((data) => {
      if (!data.length) {
        setHojasBlancas({});
      } else {
        setHojasBlancas(data[0]);
      }
    });

    api.get("http://localhost:5000/testInyectores").then((data) => {
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
