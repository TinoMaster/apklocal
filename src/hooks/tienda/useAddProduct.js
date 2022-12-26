import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiConfig from "../../config/api.config.json";
import { httpHelper } from "../../helpers/httpHelper";
import { UseInventarioTienda } from "./useInventarioTienda";

export const UseAddProduct = () => {
  const [newCategory, setNewCategory] = useState(false);
  const [newProvider, setNewProvider] = useState(false);
  const [formToSend, setFormToSend] = useState({});
  /* const [dataToEdit, setDataToEdit] = useState({}); */
  const [error, setError] = useState({});
  const [success, setSuccess] = useState({});
  const [loader, setLoader] = useState(false);
  const [option, setOption] = useState("new");

  const urlSaveProduct = `${apiConfig.api.url}/products/addProduct`;
  const urlUpdateProduct = `${apiConfig.api.url}/products/updateProduct`;

  const formRef = useRef(null);

  const { inventarioTienda } = UseInventarioTienda();

  const navigate = useNavigate();

  const providers = inventarioTienda.products.reduce((result, item) => {
    if (!result.includes(item.provider)) {
      result.push(item.provider);
    }
    return result;
  }, []);
  const categories = inventarioTienda.products.reduce((result, item) => {
    if (!result.includes(item.category)) {
      result.push(item.category);
    }
    return result;
  }, []);

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

  const validarFormToSend = (form, oldData = undefined) => {
    setError({});
    if (!form.name && !oldData?.name) {
      setError({ error: true, message: "Introduce el nombre del producto" });
      return false;
    } else if (!form.category && !oldData?.category) {
      setError({ error: true, message: "Introduce la categoria del producto" });
      return false;
    } else if (!form.provider && !oldData?.provider) {
      setError({ error: true, message: "Introduce el proveedor del producto" });
      return false;
    } else if (!form.cost && !oldData?.cost) {
      setError({ error: true, message: "Introduce el costo del producto" });
      return false;
    } else if (!form.sell && !oldData?.sell) {
      setError({
        error: true,
        message: "Introduce el precio de venta del producto",
      });
      return false;
    } else if (!form.amount && !oldData?.amount) {
      setError({ error: true, message: "Introduce la cantidad del producto" });
      return false;
    }
    return true;
  };

  const sendForm = async () => {
    setLoader(true);
    const validator = await validarFormToSend(formToSend);
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
            console.log(res);
            setLoader(false);
            setError({});
            setSuccess(res);
            formRef.current.reset();
            setTimeout(() => {
              setSuccess({});
            }, 2000);
          } else {
            setError({ error: true, message: "Revise su conexion" });
          }
        });
    } else {
      setLoader(false);
    }
  };

  const editForm = async (oldData) => {
    setLoader(true);
    const validator = await validarFormToSend(formToSend, oldData);

    if (!!validator) {
      const options = {
        body: { ...formToSend, _id: oldData._id },
        headers: { "Content-Type": "application/json" },
      };
      httpHelper()
        .put(urlUpdateProduct, options)
        .then((res) => {
          if (res.error) {
            setLoader(false);
            setSuccess({});
            setError(res);
          } else if (res.success) {
            console.log(res);
            setLoader(false);
            setError({});
            setSuccess(res);
            setSuccess({});
            navigate("/tienda/inventario");
          } else {
            setError({ error: true, message: "Revise su conexion" });
          }
        });
    } else {
      setLoader(false);
    }
  };

  const resetForm = () => {
    setFormToSend({});
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
    resetForm,
    providers,
    categories,
    formRef,
    editForm,
  };
};
