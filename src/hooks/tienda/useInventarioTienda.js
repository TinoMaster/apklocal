import { useEffect, useState } from "react";
import apiConfig from "../../config/api.config.json";
import { httpHelper } from "../../helpers/httpHelper";

export const UseInventarioTienda = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState({});
  const [success, setSuccess] = useState({});

  const [change, setChange] = useState(true);

  useEffect(() => {
    setLoader(true);
    httpHelper()
      .get(`${apiConfig.api.url}/products`)
      .then((res) => {
        if (res.success) {
          setLoader(false);
          setError({});
          setProducts(res.data);
        } else if (res.error) {
          setLoader(false);
          setError(res);
        } else {
          setLoader(false);
          setError({ error: true, message: "Revise su conexion" });
        }
      });
  }, [change]);

  const deleteProduct = (id) => {
    const option = window.confirm("Seguro que desea eliminar el producto");

    if (option) {
      const urlDeleteProduct = `${apiConfig.api.url}/products/${id}`;
      httpHelper()
        .del(urlDeleteProduct)
        .then((el) => {
          if (el.success) {
            setSuccess(el);
            setError({});
            setChange(!change);
            setTimeout(() => {
              setSuccess({});
            }, 2000);
          } else {
            setError({ error: true, message: "Ah ocurrido un error" });
            setTimeout(() => {
              setError({});
            }, 2000);
          }
        });
    }
  };

  const productsAvailable = products.filter((el) => el.amount !== 0);
  const productsNotAvailable = products.filter((el) => el.amount === 0);

  const inventarioTienda = {
    products,
    error,
    productsAvailable,
    productsNotAvailable,
    loader,
    deleteProduct,
    success,
  };
  return { inventarioTienda };
};
