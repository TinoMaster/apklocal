import React from "react";
import { PrimaryLoader } from "../../loaders/primaryLoader";

export const Form = ({
  option,
  isNewCategory,
  newCategory,
  isNewProvider,
  newProvider,
  handlers,
  loader,
  sendForm,
}) => {
  const inputProperties = [
    {
      title: "Cantidad",
      name: "amount",
      type: "number",
      className:
        "focus:outline-none border-2 rounded-md w-1/2 focus:border-green-200 shadow-inner pl-2 text-slate-700",
      function: handlers.handlerInputTextForm,
    },
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

  return (
    <form className="w-full my-5 flex flex-wrap justify-evenly" action="">
      {loader && (
        <div className="w-full h-full absolute flex justify-center items-center bg-black/5">
          <PrimaryLoader />
        </div>
      )}
      {/* Standard */}
      <fieldset className="w-full flex flex-wrap justify-center lg:w-2/5 border-2 p-3 focus-within:text-slate-600 text-slate-500 focus-within:bg-violet-50 rounded-lg shadow-lg transition-all">
        <legend className="text-lg font-semibold font-serif px-2 rounded-lg">
          Producto
        </legend>
        {/* Inputs */}
        <div className="flex flex-wrap my-2 w-full">
          <label
            className="font-medium items-center w-full focus-within:text-slate-600 text-slate-500 flex justify-between"
            htmlFor=""
          >
            <p className="text-lg mr-1 font-serif text-center w-1/4">Nombre:</p>
            <input
              name="name"
              onChange={handlers.handlerInputTextForm}
              className="focus:outline-none border-2 rounded-md w-3/4 focus:border-green-200 shadow-inner px-2 text-slate-700"
              type="text"
            />
          </label>
        </div>
        {/* Proveedor */}
        <div className="flex flex-wrap my-2 w-full">
          <label
            className="font-medium items-center w-full focus-within:text-slate-600 text-slate-500 flex justify-between"
            htmlFor=""
          >
            <p className="text-lg mr-1 font-serif text-center w-1/4">
              Proveedor:
            </p>
            {newProvider ? (
              <input
                name="provider"
                onChange={handlers.handlerInputTextForm}
                className="focus:outline-none border-2 rounded-md w-3/4 focus:border-green-200 shadow-inner px-2 text-slate-700"
                type="text"
              />
            ) : (
              <select
                name="provider"
                onChange={handlers.handlerInputTextForm}
                className="focus:outline-none border-2 rounded-md w-3/4 focus:border-green-200 shadow-inner px-2 text-slate-700"
                type="text"
                defaultValue={""}
              >
                <option value=""></option>
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
            className="font-medium items-center w-full focus-within:text-slate-600 text-slate-500 flex justify-between"
            htmlFor=""
          >
            <p className="text-lg mr-1 font-serif text-center w-1/4">
              Categoria:
            </p>
            {newCategory ? (
              <input
                name="category"
                onChange={handlers.handlerInputTextForm}
                className="focus:outline-none border-2 rounded-md w-3/4 focus:border-green-200 shadow-inner px-2 text-slate-700"
                type="text"
              />
            ) : (
              <select
                onChange={handlers.handlerInputTextForm}
                name="category"
                className="focus:outline-none border-2 rounded-md w-3/4 focus:border-green-200 shadow-inner px-2 text-slate-700"
                type="text"
              >
                <option value=""></option>
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
          <legend className="text-lg font-semibold font-serif px-4 rounded-lg">
            $
          </legend>
          <label
            className="font-medium items-center w-1/2 focus-within:text-slate-600 text-slate-500 flex justify-center"
            htmlFor=""
          >
            <p className="text-lg mr-1 font-serif text-center w-1/2 ">Costo:</p>
            <input
              name="cost"
              className="focus:outline-none border-2 rounded-md w-1/2 focus:border-green-200 shadow-inner pl-2 text-slate-700"
              type="number"
              onChange={handlers.handlerInputTextForm}
            />
          </label>
          <label
            className="font-medium items-center w-1/2 focus-within:text-slate-600 text-slate-500 flex justify-center"
            htmlFor=""
          >
            <p className="text-lg mr-1 font-serif text-center w-1/2">Venta:</p>
            <input
              name="sell"
              className="focus:outline-none border-2 rounded-md w-1/2 focus:border-green-200 shadow-inner pl-2 text-slate-700"
              type="number"
              onChange={handlers.handlerInputTextForm}
            />
          </label>
        </fieldset>
        {/* Propiedades */}
        <fieldset className="w-full  flex flex-wrap border-2 p-3 rounded-lg mb-5">
          <legend className="text-lg font-semibold font-serif px-4 rounded-lg">
            Propiedades
          </legend>
          {inputProperties?.map((input) => (
            <label
              key={input.name}
              className="font-medium items-center w-1/2 focus-within:text-slate-600 text-slate-500 flex justify-around my-2"
              htmlFor=""
            >
              <p className="text-lg mr-1 font-serif text-center w-1/2 ">
                {input.title}:
              </p>
              <input
                name={input.name}
                className="focus:outline-none border-2 rounded-md w-1/2 focus:border-green-200 shadow-inner pl-2 text-slate-700"
                type={input.type}
                onChange={input.function}
              />
            </label>
          ))}
        </fieldset>
        {/* Panel botones */}
        <div className="w-full flex justify-end px-5">
          <button className="p-2 mx-2 bg-slate-300 rounded-md shadow-md hover:bg-yellow-400/80 transition-all hover:text-slate-700">
            Resetear
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              sendForm();
            }}
            className="p-2 mx-2 bg-slate-300 rounded-md shadow-md hover:bg-green-400/80 transition-all hover:text-slate-700"
          >
            Guardar
          </button>
        </div>
      </fieldset>
    </form>
  );
};
