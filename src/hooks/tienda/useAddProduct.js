import { useState } from "react";
import apiConfig from "../../config/api.config.json";
import { httpHelper } from "../../helpers/httpHelper";

export const UseAddProduct = () => {
  const [newCategory, setNewCategory] = useState(false);
  const [newProvider, setNewProvider] = useState(false);
  const [formToSend, setFormToSend] = useState({});
  const [error, setError] = useState({});
  const [success, setSuccess] = useState({});
  const [loader, setLoader] = useState(false);
  const [option, setOption] = useState("new");

  const urlSaveProduct = `${apiConfig.api.url}/products/addProduct`;

  const handlerInputTextForm = (e) => {
    setError({});
    const { name, value } = e.target;
    setFormToSend({ ...formToSend, [name]: value });
  };

  const handlerInputsProperties = (e) => {
    const { name, value } = e.target;
    setFormToSend({
      ...formToSend,
      properties: { ...formToSend?.properties, [name]: value },
    });
  };

  const validarFormToSend = (form) => {
    setError({});
    if (!form.name) {
      setError({ error: true, message: "Introduce el nombre del producto" });
      return false;
    } else if (!form.category) {
      setError({ error: true, message: "Introduce la categoria del producto" });
      return false;
    } else if (!form.provider) {
      setError({ error: true, message: "Introduce el proveedor del producto" });
      return false;
    } else if (!form.cost) {
      setError({ error: true, message: "Introduce el costo del producto" });
      return false;
    } else if (!form.sell) {
      setError({
        error: true,
        message: "Introduce el precio de venta del producto",
      });
      return false;
    } else if (!form.provider) {
      setError({ error: true, message: "Introduce el nombre del producto" });
      return false;
    }
    return true;
  };

  const sendForm = async () => {
    setLoader(true);
    const validator = await validarFormToSend(formToSend);
    console.log(validator);
    if (!!validator) {
      const options = {
        body: formToSend,
        headers: { "Content-Type": "application/json" },
      };
      httpHelper()
        .post(urlSaveProduct, options)
        .then((res) => {
          if (res.error) {
            setLoader(false);
            setSuccess({});
            setError(res);
          } else if (res.success) {
            setLoader(false);
            setError({});
            setSuccess(res);
          } else {
            setError({ error: true, message: "Revise su conexion"});
          }
        });
    }
  };

  const isNewCategory = (e) => {
    setNewCategory(e.target.checked);
  };
  const isNewProvider = (e) => {
    setNewProvider(e.target.checked);
  };

  const handlers = {
    handlerInputTextForm,
    handlerInputsProperties,
  };

  return {
    newCategory,
    newProvider,
    option,
    setOption,
    isNewCategory,
    isNewProvider,
    handlers,
    error,
    loader,
    sendForm,
    success,
  };
};
