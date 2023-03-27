import React, { useContext } from "react";
import AuthContext from "../../../context/authContext";
import { PrimaryLoader } from "../../loaders/primaryLoader";

export const Form = ({
  isNewCategory,
  newCategory,
  isNewProvider,
  newProvider,
  handlers,
  loader,
  sendForm,
  resetForm,
  providers,
  categories,
  formRef,
}) => {
  const inputProperties = [
    /* {
      title: "Cantidad",
      name: "amount",
      type: "number",
      className:
        "focus:outline-none border-2 rounded-md w-1/2 focus:border-green-200 shadow-inner pl-2 text-slate-700",
      function: handlers.handlerInputTextForm,
    }, */
    {
      title: "Color",
      name: "color",
      type: "color",
      className:
        "focus:outline-none border-2 rounded-md w-1/2 focus:border-green-200 shadow-inner pl-2 text-slate-700",
      function: handlers.handlerInputsProperties,
    },
    {
      title: "Peso",
      name: "weight",
      type: "text",
      className:
        "focus:outline-none border-2 rounded-md w-1/2 focus:border-green-200 shadow-inner pl-2 text-slate-700",
      function: handlers.handlerInputsProperties,
    },
    {
      title: "Sabor",
      name: "taste",
      type: "text",
      className:
        "focus:outline-none border-2 rounded-md w-1/2 focus:border-green-200 shadow-inner pl-2 text-slate-700",
      function: handlers.handlerInputsProperties,
    },
    {
      title: "Modelo",
      name: "model",
      type: "text",
      className:
        "focus:outline-none border-2 rounded-md w-1/2 focus:border-green-200 shadow-inner pl-2 text-slate-700",
      function: handlers.handlerInputsProperties,
    },
    {
      title: "Tamaño",
      name: "size",
      type: "text",
      className:
        "focus:outline-none border-2 rounded-md w-1/2 focus:border-green-200 shadow-inner pl-2 text-slate-700",
      function: handlers.handlerInputsProperties,
    },
    {
      title: "Material",
      name: "material",
      type: "text",
      className:
        "focus:outline-none border-2 rounded-md w-1/2 focus:border-green-200 shadow-inner pl-2 text-slate-700",
      function: handlers.handlerInputsProperties,
    },
    {
      title: "Vence",
      name: "expiration",
      type: "date",
      className:
        "focus:outline-none border-2 rounded-md w-1/2 focus:border-green-200 shadow-inner pl-2 text-slate-700",
      function: handlers.handlerInputsProperties,
    },
  ];
  const { darkMode } = useContext(AuthContext);

  return (
    <form
      ref={formRef}
      className="w-full my-5 flex flex-wrap justify-center"
      action=""
    >
      {/* Standard */}
      <fieldset className="w-full flex relative flex-wrap justify-center lg:w-2/5 border-2 p-3 bg-white/5  focus-within:bg-white/10 rounded-lg shadow-lg transition-all">
        {loader && (
          <div className="w-full h-full absolute flex justify-center items-center">
            <div className="inline bg-black/10 rounded-md">
              <PrimaryLoader />
            </div>
          </div>
        )}
        <legend className="font-semibold font-serif px-2 rounded-lg">
          Producto
        </legend>
        {/* Inputs */}
        <div className="flex flex-wrap my-2 w-full">
          <label
            className="font-medium items-center w-full  flex justify-between"
            htmlFor=""
          >
            <p className=" mr-1 font-serif text-center w-1/4">Nombre:</p>
            <input
              name="name"
              onChange={handlers.handlerInputTextForm}
              className="focus:outline-none p-1 rounded-md w-3/4 focus:border-green-200 bg-white/5 shadow-inner shadow-black/20 px-2"
              type="text"
            />
          </label>
        </div>
        {/* Proveedor */}
        <div className="flex flex-wrap my-2 w-full">
          <label
            className="font-medium items-center w-full  flex justify-between"
            htmlFor=""
          >
            <p className=" mr-1 font-serif text-center w-1/4">
              Proveedor:
            </p>
            {newProvider ? (
              <input
                name="provider"
                onChange={handlers.handlerInputTextForm}
                className="focus:outline-none p-1 rounded-md w-3/4 focus:border-green-200 bg-white/5 shadow-inner shadow-black/20 px-2"
                type="text"
              />
            ) : (
              <select
                name="provider"
                onChange={handlers.handlerInputTextForm}
                className="focus:outline-none p-1 rounded-md w-3/4 focus:border-green-200 bg-white/5 shadow-inner shadow-black/20 px-2"
                type="text"
                defaultValue={""}
              >
                <option value=""></option>
                {providers?.map((el) => (
                  <option
                    className={
                      darkMode
                        ? "font-semibold font-serif bg-darkMode"
                        : "font-semibold font-serif bg-lightMode"
                    }
                    key={el}
                    value={el}
                  >
                    {el}
                  </option>
                ))}
              </select>
            )}
          </label>
          <label className="w-full flex justify-end" htmlFor="newProvider">
            <p className="">Nuevo proveedor</p>
            <input
              className="mx-2"
              type="checkbox"
              name="newProvider"
              id="newCategory"
              onChange={isNewProvider}
            />
          </label>
        </div>
        <div className="flex flex-wrap my-2 w-full">
          <label
            className="font-medium items-center w-full  flex justify-between"
            htmlFor=""
          >
            <p className=" mr-1 font-serif text-center w-1/4">
              Categoria:
            </p>
            {newCategory ? (
              <input
                name="category"
                onChange={handlers.handlerInputTextForm}
                className="focus:outline-none p-1 rounded-md w-3/4 focus:border-green-200 bg-white/5 shadow-inner shadow-black/20 px-2"
                type="text"
              />
            ) : (
              <select
                onChange={handlers.handlerInputTextForm}
                name="category"
                className="focus:outline-none p-1 rounded-md w-3/4 focus:border-green-200 bg-white/5 shadow-inner shadow-black/20 px-2"
                type="text"
              >
                <option value=""></option>
                {categories?.map((el) => (
                  <option
                    className={
                      darkMode
                        ? "font-semibold font-serif bg-darkMode"
                        : "font-semibold font-serif bg-lightMode"
                    }
                    key={el}
                    value={el}
                  >
                    {el}
                  </option>
                ))}
              </select>
            )}
          </label>
          <label className="w-full flex justify-end" htmlFor="newCategory">
            <p className="">Nueva Categoria</p>
            <input
              className="mx-2"
              type="checkbox"
              name="newCategory"
              id="newCategory"
              onChange={isNewCategory}
            />
          </label>
        </div>
        {/* costo y precio */}
        <fieldset className="w-full  flex border-2 p-3 rounded-lg mb-5">
          <legend className=" font-semibold font-serif px-4 rounded-lg">
            $
          </legend>
          <label
            className="font-medium items-center w-1/2 flex justify-center"
            htmlFor=""
          >
            <p className=" mr-1 font-serif text-center w-1/2 ">Costo:</p>
            <input
              name="cost"
              className="focus:outline-none rounded-md w-1/2  bg-white/5 shadow-black/20 shadow-inner pl-2"
              type="number"
              onChange={handlers.handlerInputTextForm}
            />
          </label>
          <label
            className="font-medium items-center w-1/2 flex justify-center"
            htmlFor=""
          >
            <p className=" mr-1 font-serif text-center w-1/2">Venta:</p>
            <input
              name="sell"
              className="focus:outline-none rounded-md w-1/2 shadow-black/20  shadow-inner bg-white/5 pl-2"
              type="number"
              onChange={handlers.handlerInputTextForm}
            />
          </label>
        </fieldset>
        {/* Propiedades */}
        <fieldset className="w-full flex flex-wrap border-2 p-3 rounded-lg mb-5">
          <legend className=" font-semibold font-serif px-4 rounded-lg">
            Propiedades
          </legend>
          {inputProperties?.map((input) => (
            <label
              key={input.name}
              className="font-medium items-center w-1/2 flex justify-around my-2"
              htmlFor=""
            >
              <p className=" mr-1 font-serif text-center w-1/2 ">
                {input.title}:
              </p>
              <input
                name={input.name}
                className="focus:outline-none bg-white/5 shadow-black/20 rounded-md w-1/2  shadow-inner pl-2"
                type={input.type}
                onChange={input.function}
              />
            </label>
          ))}
        </fieldset>
        {/* Cantidades */}
        <fieldset className="w-full  flex border-2 p-3 rounded-lg mb-5">
          <legend className=" font-semibold font-serif px-4 rounded-lg">
            Cantidad
          </legend>
          <label
            className="font-medium items-center w-1/2 flex justify-center"
            htmlFor=""
          >
            <p className=" mr-1 font-serif text-center w-1/2 ">
              Almacen:
            </p>
            <input
              name="amount"
              className="focus:outline-none rounded-md w-1/2 bg-white/5 shadow-black/20 shadow-inner pl-2"
              type="number"
              onChange={handlers.handlerInputTextForm}
            />
          </label>
          <label
            className="font-medium items-center w-1/2 flex justify-center"
            htmlFor=""
          >
            <p className=" mr-1 font-serif text-center w-1/2">Local:</p>
            <input
              name="local_amount"
              className="focus:outline-none rounded-md w-1/2 bg-white/5 shadow-black/20 shadow-inner pl-2"
              type="number"
              onChange={handlers.handlerInputTextForm}
            />
          </label>
        </fieldset>
        {/* Panel botones */}
        <div className="w-full flex justify-end px-5">
          <input
            value={"Resetear"}
            onClick={resetForm}
            className="p-2 mx-2 bg-white/5 rounded-md shadow-md hover:bg-yellow-400/80 transition-all hover hover:cursor-pointer"
            type="reset"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              sendForm();
              resetForm();
            }}
            className="p-2 mx-2 bg-white/5 rounded-md shadow-md hover:bg-green-400/80 transition-all hover"
          >
            Guardar
          </button>
        </div>
      </fieldset>
    </form>
  );
};
