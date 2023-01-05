import React, { useState } from "react";
import { httpHelper } from "../../helpers/httpHelper";
import { PrimaryLoader } from "../loaders/primaryLoader";
import apiConfig from "../../config/api.config.json"

const urlChangePassword = `${apiConfig}/trabajadores/password/update`;

const ModalEditPassword = ({ setEditPassword, id }) => {
  const [dataPassword, setDataPassword] = useState({});
  const [error, setError] = useState({});
  const [success, setSuccess] = useState({});
  const [loader, setLoader] = useState(false);

  const handlerDataPassword = (e) => {
    const { name, value } = e.target;

    setDataPassword({ ...dataPassword, [name]: value });
  };

  const validateInputs = () => {
    if (
      dataPassword?.latest?.length &&
      dataPassword?.latest?.length &&
      dataPassword?.latest?.length
    ) {
      setError({});
      return true;
    } else {
      return false;
    }
  };

  const onSuccess = (res) => {
    setError({});
    setSuccess(res);
    setLoader(false);
    setTimeout(() => {
      setSuccess({});
      setEditPassword(false);
    }, 2000);
  };

  const onError = (el) => {
    setLoader(false);
    console.log(el);
    setError(el);
  };

  const changePassword = async () => {
    setLoader(true);
    const validation = await validateInputs();

    const options = {
      body: {
        id,
        latest: dataPassword.latest,
        password: dataPassword.password,
      },
      headers: { "content-type": "application/json" },
    };

    validation
      ? httpHelper()
          .post(urlChangePassword, options)
          .then((el) => {
            el.success ? onSuccess(el) : onError(el);
          })
      : onError({ error: true, message: "Debe completar todos los campos" });
  };

  return (
    <div className="absolute flex justify-center items-center z-20 w-full h-full bg-black/10">
      {!!error.error && (
        <p className="absolute px-2 py-1 bg-red-500 text-white -top-5 rounded-md">
          {error.message}
        </p>
      )}
      {!!success.success && (
        <p className="absolute px-2 py-1 bg-green-500 text-white self-center">
          {success.message}
        </p>
      )}
      {!!loader && (
        <div className="absolute bg-violet-600/40 rounded-md">
          <PrimaryLoader />
        </div>
      )}
      <div className="flex w-10/12 md:w-1/3 flex-wrap justify-center p-4 rounded-md bg-white">
        {/* Title */}
        <h3 className="w-full text-center text-xl font-serif mb-2 text-violet-600">
          Cambiar contraseña
        </h3>
        <div className="w-10/12 flex flex-col">
          <label htmlFor="" className="text-slate-600 ml-1">
            Antigua
          </label>
          <input
            onChange={handlerDataPassword}
            type="password"
            className="border-2 rounded-md focus:outline-none text-slate-600 px-2"
            name="latest"
          />
        </div>
        <div className="w-10/12 flex flex-col">
          <label htmlFor="" className="text-slate-600 ml-1">
            Nueva
          </label>
          <input
            onChange={handlerDataPassword}
            name="password"
            type="password"
            className="border-2 rounded-md focus:outline-none text-slate-600 px-2"
          />
        </div>
        <div className="w-10/12 flex flex-col">
          <label htmlFor="" className="text-slate-600 ml-1">
            Repetir nueva
          </label>
          <input
            onChange={handlerDataPassword}
            name="repeat"
            type="password"
            className="border-2 rounded-md focus:outline-none text-slate-600 px-2"
          />
        </div>
        <div className="flex w-full justify-center mt-2">
          <button
            onClick={() => changePassword()}
            className="px-2 m-2 bg-violet-500 text-white rounded-md shadow-md hover:shadow-black/30"
          >
            Cambiar
          </button>
          <button
            onClick={() => setEditPassword(false)}
            className="px-2 m-2 bg-red-500 text-white rounded-md shadow-md hover:shadow-black/30"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalEditPassword;
