import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { httpHelper } from "../helpers/httpHelper";
import apiConfig from "../config/api.config.json";

const AuthContext = createContext();

const urlExistUser = `${apiConfig.api.url}/trabajadores`;
const urlLogin = `${apiConfig.api.url}/trabajadores/login`;
const urlRegister = `${apiConfig.api.url}/trabajadores/registro/worker`;

const IS_AUTH = "APP_KEY_SV";
const USER_IMAGE = "IM_USER";
const USER_NAME = "NAME_USER";
const USER_ROLE = "ROLE_USER";
const DARK_MODE = "DARK_MODE";

const USER = {
  name: window.localStorage.getItem(USER_NAME),
  image: "Pendiente",
  role: window.localStorage.getItem(USER_ROLE),
};

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(window.localStorage.getItem(IS_AUTH));
  const [user, setUser] = useState(USER);
  const [isConnected, setIsConnected] = useState(false);

  const [form, setForm] = useState({});
  const [registro, setRegistro] = useState({});
  const [opcion, setOpcion] = useState("inicio");
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState({});

  const [darkMode, setDarkMode] = useState(
    window.localStorage.getItem(DARK_MODE) === "true" ? true : false
  );
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    httpHelper()
      .get(urlExistUser)
      .then((res) => {
        if (res) {
          setIsConnected(true);
        }
        if (res.error) {
          setError(res);
          setOpcion("inicio");
        } else if (res.success && res.data.length > 0) {
          setError({});
          setOpcion("inicio");
        } else if (res.success && res.data.length === 0) {
          setError({});
          setOpcion("registro");
        } else {
          setError({ error: true, message: "Revise su conexion a internet" });
        }
      })
      .catch((error) => console.log(error));
  }, []);

  //Hadlers
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleChangeRegistro = (e) => {
    setRegistro({ ...registro, [e.target.name]: e.target.value });
  };

  const validarRegistroInicio = (data) => {
    return true;
  };

  const register = async () => {
    setLoader(true);
    const validation = await validarRegistroInicio(registro);
    if (!validation) {
      setLoader(false);
      setError({ error: true, message: "Debe llenar los campos" });
    } else {
      setError({});
      const options = {
        body: {
          ...registro,
          role: "admin",
          correo: registro.usuario,
          usuario: "Admin",
        },
        headers: { "content-type": "application/json" },
      };
      httpHelper()
        .post(urlRegister, options)
        .then((res) => {
          console.log(res);
          if (res.success) {
            setLoader(false);
            window.location.href = "/login";
          } else if (res.error) {
            setLoader(false);
            setError(res);
          } else {
            setLoader(false);
            console.log(res);
          }
        });
    }
  };

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

  const login = async () => {
    setLoader(true);

    const validacion = await validarLogin();

    if (!validacion) {
      setLoader(false);
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
            setLoader(false);
            onLogin(res);
          } else if (res.error) {
            setLoader(false);
            setError(res);
          } else {
            setLoader(false);
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
    darkMode,
    setDarkMode,
    DARK_MODE,
    isConnected,
    register,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;
