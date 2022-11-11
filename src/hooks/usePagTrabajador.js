import axios from "axios";
import { useEffect, useState } from "react";
import { httpHelper } from "../helpers/httpHelper";

const UrlRegisterImageWorker =
  "http://127.0.0.1:5000/trabajadores/registro/image";
const UrlRegisterWorker = "http://127.0.0.1:5000/trabajadores/registro/worker";
const UrlGetWorkers = "http://127.0.0.1:5000/trabajadores";
const UrlGetRoles = "http://127.0.0.1:5000/roles";
const UrlUpdateWorker = "http://127.0.0.1:5000/trabajadores/update";

export const usePagTrabajador = () => {
  const [modalInsertWorker, setModalInsertWorker] = useState(false);
  const [inputWorkerData, setInputWorkerData] = useState({});
  const [imageModalWorker, setImageModalWorker] = useState(null);
  const [errorUploadWorker, setErrorUploadWorker] = useState({});
  const [success, setSuccess] = useState({});
  const [error, setError] = useState({});
  const [workers, setWorkers] = useState([]);
  const [roles, setRoles] = useState([]);

  const [modalUpdateWorker, setModalUpdateWorker] = useState(false);
  const [dataToEdit, setDataToEdit] = useState({});

  const handlerChangeWorker = (e) => {
    setErrorUploadWorker(false);
    const { name, value } = e.target;

    setInputWorkerData({ ...inputWorkerData, [name]: value });
  };
  const handlerChangeWorkerImage = async (e) => {
    setErrorUploadWorker(false);
    await setImageModalWorker(e.target.files[0]);
  };

  const handlerChangeUpdateWorker = (e) => {
    const { name, value } = e.target;

    setDataToEdit({ ...dataToEdit, [name]: value });
  };

  const validarData = () => {
    setErrorUploadWorker({});
    if (!imageModalWorker) {
      setErrorUploadWorker({
        error: true,
        message: "Debe seleccionar una imagen",
      });
      return false;
    }
    if (!inputWorkerData.nombre) {
      setErrorUploadWorker({
        error: true,
        message: "El campo nombre es requerido",
      });
      return false;
    }

    if (!inputWorkerData.municipio) {
      setErrorUploadWorker({
        error: true,
        message: "Tiene que completar el campo Municipio",
      });
      return false;
    }

    if (!inputWorkerData.direccion) {
      setErrorUploadWorker({
        error: true,
        message: "Tiene que completar el campo Direccion",
      });
      return false;
    }

    if (!inputWorkerData.telefono) {
      setErrorUploadWorker({
        error: true,
        message: "Tiene que completar el campo Telefono",
      });
      return false;
    }

    if (!inputWorkerData.id) {
      setErrorUploadWorker({
        error: true,
        message: "Tiene que completar el campo id",
      });
      return false;
    } else if (inputWorkerData.id.length !== 11) {
      console.log(inputWorkerData.id.length);
      return setErrorUploadWorker({
        error: true,
        message: "El campo id debe tener 11 caracteres",
      });
    }

    return true;
  };

  const validarDataToUpdate = () => {
    setErrorUploadWorker({});

    if (!dataToEdit.nombre) {
      setErrorUploadWorker({
        error: true,
        message: "El campo nombre es requerido",
      });
      return false;
    }

    if (!dataToEdit.municipio) {
      setErrorUploadWorker({
        error: true,
        message: "Tiene que completar el campo Municipio",
      });
      return false;
    }

    if (!dataToEdit.direccion) {
      setErrorUploadWorker({
        error: true,
        message: "Tiene que completar el campo Direccion",
      });
      return false;
    }

    if (!dataToEdit.telefono) {
      setErrorUploadWorker({
        error: true,
        message: "Tiene que completar el campo Telefono",
      });
      return false;
    }

    if (!dataToEdit.id) {
      setErrorUploadWorker({
        error: true,
        message: "Tiene que completar el campo id",
      });
      return false;
    } else if (dataToEdit.id.length !== 11) {
      console.log(dataToEdit.id.length);
      return setErrorUploadWorker({
        error: true,
        message: "El campo id debe tener 11 caracteres",
      });
    }

    return true;
  };

  const uploadWorker = async () => {
    const validacion = await validarData();
    if (!validacion) {
      return false;
    } else {
      const formData = new FormData();
      await formData.append("image", imageModalWorker);
      const res = await axios.post(UrlRegisterImageWorker, formData);
      if (!res.data.success) {
        setErrorUploadWorker({
          error: true,
          message: "No se ah podido subir la imagen",
        });
      } else {
        setErrorUploadWorker({});
        console.log(inputWorkerData);
        const options = {
          body: inputWorkerData,
          headers: { "Content-Type": "application/json" },
        };
        httpHelper()
          .post(UrlRegisterWorker, options)
          .then((res) => {
            if (res.error) {
              setError(res);
            } else {
              setError({});
              setSuccess(res);
              setModalInsertWorker(false);
              setTimeout(() => {
                setSuccess({});
              }, 3000);
            }
          });
      }
    }
  };

  const updateWorker = async () => {
    const validation = await validarDataToUpdate();

    if (!validation) {
      return false;
    } else {
      const options = {
        body: dataToEdit,
        headers: { "Content-Type": "application/json" },
      };
      httpHelper()
        .put(UrlUpdateWorker, options)
        .then((res) => {
          if (!res?.success) {
            setError({
              error: true,
              message: "Ah ocurrido un error",
            });
          } else {
            setModalUpdateWorker(false);
            setSuccess({
              success: true,
              message: "El usuario ah sido actualizado",
            });
            setTimeout(() => {
              setSuccess({});
            }, 2000);
          }
        });
    }
  };

  useEffect(() => {
    httpHelper()
      .get(UrlGetWorkers)
      .then((el) => {
        setWorkers(el);
      });
    httpHelper()
      .get(UrlGetRoles)
      .then((el) => {
        if (el.success) {
          setRoles(el.data);
        }
      });
  }, [success]);

  return {
    modalInsertWorker,
    setModalInsertWorker,
    handlerChangeWorker,
    handlerChangeWorkerImage,
    imageModalWorker,
    uploadWorker,
    errorUploadWorker,
    setErrorUploadWorker,
    workers,
    setModalUpdateWorker,
    modalUpdateWorker,
    setDataToEdit,
    dataToEdit,
    handlerChangeUpdateWorker,
    updateWorker,
    success,
    error,
    roles,
  };
};
