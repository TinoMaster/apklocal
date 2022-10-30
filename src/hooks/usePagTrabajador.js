import axios from "axios";
import { useState } from "react";
import { httpHelper } from "../helpers/httpHelper";

const UrlRegisterImageWorker =
  "http://127.0.0.1:5000/trabajadores/registro/image";
const UrlRegisterWorker = "http://127.0.0.1:5000/trabajadores/registro/worker";

export const usePagTrabajador = () => {
  const [modalWorker, setModalWorker] = useState(false);
  const [workerData, setWorkerData] = useState({});
  const [imageModalWorker, setImageModalWorker] = useState(null);
  const [errorUploadWorker, setErrorUploadWorker] = useState({});

  const handlerChangeWorker = (e) => {
    const { name, value } = e.target;

    setWorkerData({ ...workerData, [name]: value });
  };
  const handlerChangeWorkerImage = async (e) => {
    await setImageModalWorker(e.target.files[0]);
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
    if (!workerData.nombre) {
      setErrorUploadWorker({
        error: true,
        message: "El campo nombre es requerido",
      });
      return false;
    }

    if (!workerData.municipio) {
      setErrorUploadWorker({
        error: true,
        message: "Tiene que completar el campo Municipio",
      });
      return false;
    }

    if (!workerData.direccion) {
      setErrorUploadWorker({
        error: true,
        message: "Tiene que completar el campo Direccion",
      });
      return false;
    }

    if (!workerData.telefono) {
      setErrorUploadWorker({
        error: true,
        message: "Tiene que completar el campo Telefono",
      });
      return false;
    }

    if (!workerData.id) {
      setErrorUploadWorker({
        error: true,
        message: "Tiene que completar el campo id",
      });
      return false;
    } else if (workerData.id.length !== 11) {
      console.log(workerData.id.length);
      return setErrorUploadWorker({
        error: true,
        message: "El campo id debe tener 11 caracteres",
      });
    }

    return workerData;
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
        console.log(workerData);
        const options = {
          body: workerData,
          headers: { "Content-Type": "application/json" },
        };
        httpHelper()
          .post(UrlRegisterWorker, options)
          .then((res) => {
            console.log(res);
          });
      }
    }
  };

  return {
    modalWorker,
    setModalWorker,
    handlerChangeWorker,
    handlerChangeWorkerImage,
    imageModalWorker,
    uploadWorker,
    errorUploadWorker,
  };
};
