import { useEffect, useState } from "react";
import apiConfig from "../../config/api.config.json";
import { httpHelper } from "../../helpers/httpHelper";

export const UseInventarioTienda = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState({});

  useEffect(() => {
    httpHelper()
      .get(`${apiConfig.api.url}/products`)
      .then((res) => {
        if (res.success) {
          setError({});
          setProducts(res.data);
        } else if (res.error) {
          setError(res);
        } else setError({ error: true, message: "Revise su conexion" });
      });
  }, []);

  const productsAvailable = products.filter((el) => el !== 0);
    

  const inventarioTienda = {
    products,
    error,
    productsAvailable,
  };
  return { inventarioTienda };
};
