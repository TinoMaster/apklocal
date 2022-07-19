import { useState } from "react";
import { httpHelper } from "../../helpers/httpHelper";
import img from "../../assets/img/suennovirtual.jpg";
import Cookies from "universal-cookie";

const Login = () => {
  const [form, setForm] = useState({});
  const [registro, setRegistro] = useState({});
  const [opcion, setOpcion] = useState("inicio");
  const [succes, setSucces] = useState(null);
  const [error, setError] = useState(null);

  const confirmarAdmin = async () => {
    await httpHelper()
      .get("http://localhost:5000/admin")
      .then((res) => {
        if (res.length) {
          setError(null);
          setOpcion("inicio");
        } else {
          setOpcion("registro");
          setError("No hay conexion con la base de datos");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  confirmarAdmin();

  //Hadlers
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleChangeRegistro = (e) => {
    setRegistro({ ...registro, [e.target.name]: e.target.value });
  };

  const handlerSubmit = async () => {
    let options = {
      body: form,
      headers: { "content-type": "application/json" },
    };
    await httpHelper()
      .post("http://localhost:5000/login", options)
      .then((el) => {
        if (el.length) {
          setError(null);
          const cookies = new Cookies();
          cookies.set("nombre", el[0].nombre, { path: "/" });
          cookies.set("correo", el[0].usuario, { path: "/" });
          window.location.href = "/inicio";
        } else {
          setError({ message: "Usuario o contraseña incorrecta" });
        }
      });
  };

  const enviarRagistro = async (e) => {
    const data = {
      nombre: registro.nombre,
      usuario: registro.usuario,
      contraseña: registro.contraseña,
    };

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    if (!error === null) {
      if (registro.contraseña === registro.confirmacion) {
        await httpHelper()
          .post("http://localhost:5000/registro", options)
          .then((res) => {
            setSucces("Usuario creado correctmente");
            setTimeout(() => {
              window.location.reload();
            }, 500);
          })
          .catch((err) => {
            setError(err);
          });
      } else setError("Las contraseñas no coinciden");
    } else {
      e.preventDefault();
    }
  };

  return (
    <div className="w-screen relative h-screen flex flex-col overflow-auto items-center justify-center bg-gradient-to-br from-violet-600 to-purple-600">
      {error && (
        <p className="p-2 top-20 text-red-500 bg-white text-xs md:text-sm rounded-lg absolute">
          {error}
        </p>
      )}
      {succes && (
        <p className="p-2 top-20 text-green-500 bg-white text-xs md:text-sm rounded-lg absolute">
          {succes}
        </p>
      )}

      <div className="w-11/12 overflow-hidden min-h-movil md:w-1/5 h-3/5 flex max-w-lg max-h-128 flex-col justify-around bg-white p-4 shadow-xl shadow-black/40 rounded-lg">
        <div className="w-2/3 md:w-full m-auto h-80 flex items-center justify-center">
          <img src={img} alt="Logo" />
        </div>

        <form className="w-full flex flex-col">
          <label htmlFor="nombre" className="flex flex-col w-3/5 m-auto">
            <span className="text-xs md:text-sm font-serif text-slate-500 ml-1">
              Nombre:
            </span>
            <input
              id="nombre"
              type="text"
              name="nombre"
              placeholder="Escriba su nombre"
              className="w-full mx-auto border-2 placeholder:text-slate-400 text-violet-600 text-xs md:text-sm my-2 p-1 rounded-md focus:outline-violet-300"
              autoComplete="off"
              onChange={
                opcion === "inicio" ? handleChange : handleChangeRegistro
              }
            />
          </label>
          {opcion === "registro" && (
            <label htmlFor="email" className="flex flex-col w-3/5 m-auto">
              <span className="text-xs md:text-sm font-serif text-slate-500 ml-1">
                Correo:
              </span>
              <input
                id="email"
                type="email"
                name="usuario"
                placeholder="Correo"
                className="w-full mx-auto border-2 placeholder:text-slate-400 text-violet-600 text-xs md:text-sm my-2 p-1 rounded-md focus:outline-violet-300"
                autoComplete="off"
                onChange={handleChangeRegistro}
              />
            </label>
          )}

          <label htmlFor="pasword" className="flex flex-col w-3/5 m-auto">
            <span className="text-xs md:text-sm font-serif text-slate-500 ml-1">
              Contraseña:
            </span>
            <input
              id="pasword"
              type="password"
              name="contraseña"
              placeholder="Contraseña"
              className="w-full mx-auto border-2 placeholder:text-slate-400 text-violet-600 text-xs md:text-sm my-2 p-1 rounded-md focus:outline-violet-300"
              onChange={
                opcion === "inicio" ? handleChange : handleChangeRegistro
              }
            />
          </label>

          {opcion === "registro" && (
            <label htmlFor="repeat" className="flex flex-col w-3/5 m-auto">
              <span className="text-xs md:text-sm font-serif text-slate-500 ml-1">
                Repetir contraseña:
              </span>
              <input
                id="repeat"
                type="password"
                name="confirmacion"
                placeholder="Confirmar contraseña"
                className="w-full mx-auto border-2 placeholder:text-slate-400 text-violet-600 text-xs md:text-sm my-2 p-1 rounded-md focus:outline-violet-300"
                onChange={handleChangeRegistro}
              />
            </label>
          )}
          <input
            type="submit"
            value={opcion === "inicio" ? "Entrar" : "Registrar"}
            className="my-5 p-2 text-sm  bg-violet-600 text-white rounded-md shadow-md shadow-violet-500/75 hover:cursor-pointer hover:bg-violet-700"
            onClick={opcion === "inicio" ? handlerSubmit : enviarRagistro}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
