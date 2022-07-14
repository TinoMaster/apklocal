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
          setOpcion("inicio");
        } else {
          setOpcion("registro");
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

  const enviarRagistro = async () => {
    const data = {
      nombre: registro.nombre,
      usuario: registro.usuario,
      contraseña: registro.contraseña,
    };

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

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
  };

  return (
    <div className="w-screen relative h-screen flex flex-col items-center justify-center bg-violet-600">
      {error && (
        <p className="p-2 top-36 text-red-500 bg-white rounded-lg absolute">
          {error.message}
        </p>
      )}
      {succes && (
        <p className="p-2 top-36 text-green-500 bg-white rounded-lg absolute">
          {succes}
        </p>
      )}

      <div className="w-11/12 md:w-1/5 h-3/5 flex max-w-lg max-h-128 flex-col justify-around overflow-hidden bg-white p-6 shadow-xl shadow-black/40 rounded-lg">
        <div className="w-full h-80 flex items-center justify-center">
          <img src={img} alt="Logo" />
        </div>

        <div className="w-full flex flex-col">
          <input
            type="email"
            name="nombre"
            placeholder="Nombre"
            className="w-3/5 mx-auto my-2 shadow-md p-2 rounded-md focus:outline-violet-300"
            autoComplete="off"
            onChange={opcion === "inicio" ? handleChange : handleChangeRegistro}
          />
          {opcion === "registro" && (
            <input
              type="email"
              name="usuario"
              placeholder="Correo"
              className="w-3/5 mx-auto my-2 shadow-md p-2 rounded-md focus:outline-violet-300"
              autoComplete="off"
              onChange={handleChangeRegistro}
            />
          )}

          <input
            type="password"
            name="contraseña"
            placeholder="Contraseña"
            className="w-3/5 mx-auto my-2 shadow-md p-2 rounded-md focus:outline-violet-300"
            onChange={opcion === "inicio" ? handleChange : handleChangeRegistro}
          />
          {opcion === "registro" && (
            <input
              type="password"
              name="confirmacion"
              placeholder="Confirmar contraseña"
              className="w-3/5 mx-auto my-2 shadow-md p-2 rounded-md focus:outline-violet-300"
              onChange={handleChangeRegistro}
            />
          )}
        </div>

        <input
          type="button"
          value={opcion === "inicio" ? "Entrar" : "Registrar"}
          className="mt-2 p-2 bg-violet-600 text-white rounded-md shadow-md shadow-violet-500/75 hover:cursor-pointer hover:bg-violet-700"
          onClick={opcion === "inicio" ? handlerSubmit : enviarRagistro}
        />
      </div>
    </div>
  );
};

export default Login;
