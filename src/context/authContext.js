import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { httpHelper } from "../helpers/httpHelper";
import apiConfig from "../config/api.config.json";

const AuthContext = createContext();

const urlExistUser = `${apiConfig.api.url}/trabajadores`;
const urlLogin = `${apiConfig.api.url}/trabajadores/login`;

const IS_AUTH = "APP_KEY_SV";
const USER_IMAGE = "IM_USER";
const USER_NAME = "NAME_USER";
const USER_ROLE = "ROLE_USER";

const USER = {
  name: window.localStorage.getItem(USER_NAME),
  image: window.localStorage.getItem(USER_IMAGE),
  role: window.localStorage.getItem(USER_ROLE),
};

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(window.localStorage.getItem(IS_AUTH));
  const [user, setUser] = useState(USER);

  const [form, setForm] = useState({});
  const [registro, setRegistro] = useState({});
  const [opcion, setOpcion] = useState("inicio");
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState({});

  const [loader, setLoader] = useState(false);

  useEffect(() => {
    httpHelper()
      .get(urlExistUser)
      .then((res) => {
        if (res.length > 0) {
          setError({});
          setOpcion("inicio");
        } else {
          setOpcion("registro");
        }
      });
  }, []);

  //Hadlers
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleChangeRegistro = (e) => {
    setRegistro({ ...registro, [e.target.name]: e.target.value });
  };

  const validarRegistro = () => {};

  const validarLogin = () => {
    let validator = false;
    if (form?.usuario?.length > 0 && form?.contraseña?.length > 0) {
      validator = true;
    }
    return validator;
  };

  const onLogin = (res) => {
    window.localStorage.setItem(IS_AUTH, "true");
    window.localStorage.setItem(USER_IMAGE, res?.dataToSend.image);
    window.localStorage.setItem(USER_ROLE, res?.dataToSend.role);
    window.localStorage.setItem(USER_NAME, res.dataToSend.name);
    setLoader(false);
    setError({});
    setSuccess({ success: true, message: "Inicio Correcto" });
    setTimeout(() => {
      setSuccess({});
      setIsAuth(true);
      window.location.href = "/";
    }, 2000);
  };

  const logout = () => {
    window.localStorage.removeItem(IS_AUTH);
    window.localStorage.removeItem(USER_IMAGE);
    window.localStorage.removeItem(USER_ROLE);
    window.localStorage.removeItem(USER_NAME);
    setUser({});

    window.location.href = "/";
  };

  const login = async (e) => {
    setLoader(true);
    e.preventDefault();
    const validacion = await validarLogin();

    if (!validacion) {
      setError({ error: true, message: "Debe llenar los campos" });
    } else {
      setError({});
      const options = {
        body: form,
        headers: { "content-type": "application/json" },
      };
      httpHelper()
        .post(urlLogin, options)
        .then((res) => {
          if (res.success) {
            onLogin(res);
          } else {
            console.log(res);
          }
        });
    }
  };

  const data = {
    handleChange,
    handleChangeRegistro,
    login,
    opcion,
    success,
    error,
    loader,
    user,
    isAuth,
    logout,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;