import { useState } from "react";
import { httpHelper } from "../../helpers/httpHelper";
import img from "../../assets/img/suennovirtual.jpg";
import Cookies from "universal-cookie";

const Login = () => {
  const [form, setForm] = useState({});
  const [error, setError] = useState(null);

  //Hadlers
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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

  return (
    <div className="w-screen flex-col relative h-screen flex justify-center bg-violet-600 items-center">
      {error && <p className="p-2 top-36 text-red-500 bg-white rounded-lg absolute">{error.message}</p>}
      <div className="w-11/12 md:w-1/5 flex flex-col overflow-hidden bg-white p-6 shadow-lg rounded-lg">
        <div className="w-full h-80 flex items-center justify-center">
          <img src={img} alt="Logo" />
        </div>
        <input
          type="email"
          name="usuario"
          placeholder="Usuario"
          className="w-3/5 mx-auto my-2 shadow-md p-2 rounded-md focus:outline-violet-300"
          autoComplete="off"
          onChange={handleChange}
        />
        <input
          type="password"
          name="contraseña"
          placeholder="Contraseña"
          className="w-3/5 mx-auto my-2 shadow-md p-2 rounded-md focus:outline-violet-300"
          onChange={handleChange}
        />
        <input
          type="button"
          value="Guardar"
          className="mt-2 p-2 bg-violet-600 text-white rounded-md shadow-md shadow-violet-500/75 hover:cursor-pointer hover:bg-violet-700"
          onClick={handlerSubmit}
        />
      </div>
    </div>
  );
};

export default Login;
