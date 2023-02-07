import { useContext } from "react";
import img from "../../assets/img/suennovirtual.jpg";
import AuthContext from "../../context/authContext";
import { PrimaryLoader } from "../loaders/primaryLoader";

const Login = () => {
  const {
    handleChange,
    handleChangeRegistro,
    login,
    opcion,
    success,
    error,
    loader,
    register,
  } = useContext(AuthContext);

  return (
    <div className="w-screen relative h-screen flex flex-col overflow-auto items-center justify-center bg-gradient-to-br from-violet-600 to-purple-600">
      {error?.error && (
        <p className="p-2 top-20 z-10 text-red-500 bg-white text-xs md:text-sm rounded-lg absolute">
          {error.message}
        </p>
      )}
      {success?.succes && (
        <p className="p-2 top-20 text-green-500 bg-white text-xs md:text-sm rounded-lg absolute">
          {success.message}
        </p>
      )}

      <div className="w-11/12 md:w-2/4 overflow-hidden relative lg:w-2/5 xl:w-1/5 md:h-auto flex max-w-lg min-h-[600px] min-w-[350px] flex-col justify-around bg-white shadow-xl shadow-black/40 rounded-lg">
        {loader && (
          <div className="absolute w-full h-full bg-black/20 flex justify-center items-center">
            <PrimaryLoader />
          </div>
        )}
        <h3 className=" text-2xl text-center text-violet-600 font-semibold py-2">
          {opcion === "inicio" ? "Iniciar Session" : "Registrarse"}
        </h3>
        <div className="w-2/3 md:w-full m-auto flex items-center justify-center">
          <img src={img} alt="Logo" className="w-full h-full" />
        </div>

        <div className="w-full flex flex-col">
          {opcion === "registro" && (
            <label htmlFor="nombre" className="flex flex-col w-4/5 m-auto">
              <span className="font-serif text-slate-500 ml-1">Nombre:</span>
              <input
                id="nombre"
                type="text"
                name="nombre"
                placeholder="Escriba su nombre"
                className="w-full mx-auto border-2 placeholder:text-slate-400 text-violet-600 my-2 p-1 rounded-md focus:outline-violet-300"
                autoComplete="off"
                onChange={
                  opcion === "inicio" ? handleChange : handleChangeRegistro
                }
              />
            </label>
          )}

          <label htmlFor="email" className="flex flex-col w-4/5 m-auto">
            <span className="font-serif text-slate-500 ml-1">Correo:</span>
            <input
              id="email"
              type="email"
              name="usuario"
              placeholder="Correo"
              className="w-full mx-auto border-2 placeholder:text-slate-400 text-violet-600 my-2 p-1 rounded-md focus:outline-violet-300"
              autoComplete="off"
              onChange={
                opcion === "inicio" ? handleChange : handleChangeRegistro
              }
            />
          </label>

          <label htmlFor="pasword" className="flex flex-col w-4/5 m-auto">
            <span className="font-serif text-slate-500 ml-1">Contraseña:</span>
            <input
              id="pasword"
              type="password"
              name="contraseña"
              placeholder="Contraseña"
              className="w-full mx-auto border-2 placeholder:text-slate-400 text-violet-600 my-2 p-1 rounded-md focus:outline-violet-300"
              onChange={
                opcion === "inicio" ? handleChange : handleChangeRegistro
              }
            />
          </label>

          {opcion === "registro" && (
            <label htmlFor="repeat" className="flex flex-col w-4/5 m-auto">
              <span className="font-serif text-slate-500 ml-1">
                Repetir contraseña:
              </span>
              <input
                id="repeat"
                type="password"
                name="confirmacion"
                placeholder="Confirmar contraseña"
                className="w-full mx-auto border-2 placeholder:text-slate-400 text-violet-600 my-2 p-1 rounded-md focus:outline-violet-300"
                onChange={handleChangeRegistro}
              />
            </label>
          )}
          <input
            type="submit"
            value={opcion === "inicio" ? "Entrar" : "Registrar"}
            className="my-5 p-2 text-sm  bg-violet-600 text-white rounded-md shadow-md shadow-violet-500/75 hover:cursor-pointer hover:bg-violet-700 w-11/12 m-auto"
            onClick={(e) => (opcion === "inicio" ? login() : register())}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
