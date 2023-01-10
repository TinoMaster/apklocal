import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PrimaryLoader } from "../../loaders/primaryLoader";

export const FormEdit = ({
  isNewCategory,
  newCategory,
  isNewProvider,
  newProvider,
  handlers,
  loader,
  editForm,
  providers,
  categories,
  formRef,
}) => {
  const navigate = useNavigate();

  /*  const { id } = useParams(); */
  const location = useLocation();

  let product;
  if (location.state?._id) {
    product = location.state;
  }

  const inputProperties = [
    {
      title: "Color",
      name: "color",
      type: "color",
      className:
        "focus:outline-none border-2 rounded-md w-1/2 focus:border-green-200 shadow-inner pl-2 text-slate-700",
      function: handlers.handlerInputsProperties,
      defaultValue: product.properties?.color,
    },
    {
      title: "Peso",
      name: "weight",
      type: "text",
      className:
        "focus:outline-none border-2 rounded-md w-1/2 focus:border-green-200 shadow-inner pl-2 text-slate-700",
      function: handlers.handlerInputsProperties,
      defaultValue: product.properties?.weight,
    },
    {
      title: "Sabor",
      name: "taste",
      type: "text",
      className:
        "focus:outline-none border-2 rounded-md w-1/2 focus:border-green-200 shadow-inner pl-2 text-slate-700",
      function: handlers.handlerInputsProperties,
      defaultValue: product.properties?.taste,
    },
    {
      title: "Modelo",
      name: "model",
      type: "text",
      className:
        "focus:outline-none border-2 rounded-md w-1/2 focus:border-green-200 shadow-inner pl-2 text-slate-700",
      function: handlers.handlerInputsProperties,
      defaultValue: product.properties?.model,
    },
    {
      title: "Tamaño",
      name: "size",
      type: "text",
      className:
        "focus:outline-none border-2 rounded-md w-1/2 focus:border-green-200 shadow-inner pl-2 text-slate-700",
      function: handlers.handlerInputsProperties,
      defaultValue: product.properties?.size,
    },
    {
      title: "Material",
      name: "material",
      type: "text",
      className:
        "focus:outline-none border-2 rounded-md w-1/2 focus:border-green-200 shadow-inner pl-2 text-slate-700",
      function: handlers.handlerInputsProperties,
      defaultValue: product.properties?.material,
    },
    {
      title: "Vence",
      name: "expiration",
      type: "date",
      className:
        "focus:outline-none border-2 rounded-md w-1/2 focus:border-green-200 shadow-inner pl-2 text-slate-700",
      function: handlers.handlerInputsProperties,
      defaultValue: "",
      date: product.properties?.expiration,
    },
  ];

  return (
    <form
      ref={formRef}
      className="w-full my-5 flex flex-wrap justify-center"
      action=""
    >
      {/* Standard */}
      <fieldset className="w-full flex relative flex-wrap justify-center lg:w-2/5 border-2 p-3 focus-within:text-slate-600 text-slate-500 focus-within:bg-violet-50 rounded-lg shadow-lg transition-all">
        {loader && (
          <div className="w-full h-full absolute flex justify-center items-center">
            <div className="inline bg-black/10 rounded-md">
              <PrimaryLoader />
            </div>
          </div>
        )}
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
              defaultValue={product?.name}
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
            {!newProvider ? (
              <input
                name="provider"
                onChange={handlers.handlerInputTextForm}
                className="focus:outline-none border-2 rounded-md w-3/4 focus:border-green-200 shadow-inner px-2 text-slate-700"
                type="text"
                defaultValue={product.provider}
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
                {providers?.map((el) => (
                  <option
                    className="font-semibold font-serif text-slate-500"
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
            <p className="">Proveedor existente</p>
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
            {!newCategory ? (
              <input
                name="category"
                onChange={handlers.handlerInputTextForm}
                className="focus:outline-none border-2 rounded-md w-3/4 focus:border-green-200 shadow-inner px-2 text-slate-700"
                type="text"
                defaultValue={product.category}
              />
            ) : (
              <select
                onChange={handlers.handlerInputTextForm}
                name="category"
                className="focus:outline-none border-2 rounded-md w-3/4 focus:border-green-200 shadow-inner px-2 text-slate-700"
                type="text"
              >
                <option value=""></option>
                {categories?.map((el) => (
                  <option
                    className="font-semibold font-serif text-slate-500"
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
            <p className="">Categoria existente</p>
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
              defaultValue={product.cost}
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
              defaultValue={product.sell}
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
              className="font-medium items-center w-1/2 focus-within:text-slate-600 text-slate-500 flex justify-around my-2 relative"
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
                defaultValue={input?.defaultValue}
              />
              <p className="absolute -right-24">
                {input?.date &&
                  new Date(input?.date).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                  })}
              </p>
            </label>
          ))}
        </fieldset>
        {/* Cantidades */}
        <fieldset className="w-full  flex border-2 p-3 rounded-lg mb-5">
          <legend className="text-lg font-semibold font-serif px-4 rounded-lg">
            Cantidad
          </legend>
          <label
            className="font-medium items-center w-1/2 focus-within:text-slate-600 text-slate-500 flex justify-center"
            htmlFor=""
          >
            <p className="text-lg mr-1 font-serif text-center w-1/2 ">
              Almacen:
            </p>
            <input
              name="amount"
              className="focus:outline-none border-2 rounded-md w-1/2 focus:border-green-200 shadow-inner pl-2 text-slate-700"
              type="number"
              onChange={handlers.handlerInputTextForm}
              defaultValue={product.amount}
            />
          </label>
          <label
            className="font-medium items-center w-1/2 focus-within:text-slate-600 text-slate-500 flex justify-center"
            htmlFor=""
          >
            <p className="text-lg mr-1 font-serif text-center w-1/2">Local:</p>
            <input
              name="local_amount"
              className="focus:outline-none border-2 rounded-md w-1/2 focus:border-green-200 shadow-inner pl-2 text-slate-700"
              type="number"
              onChange={handlers.handlerInputTextForm}
              defaultValue={product.local_amount}
            />
          </label>
        </fieldset>
        {/* Panel botones */}
        <div className="w-full flex justify-end px-5">
          <input
            value={"Cancelar"}
            onClick={() => navigate("/tienda/inventario")}
            className="p-2 mx-2 bg-slate-300 z-20 rounded-md shadow-md hover:bg-red-400/80 transition-all hover:text-slate-700 hover:cursor-pointer"
            type="button"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              editForm(product);
            }}
            className="p-2 mx-2 bg-slate-300 rounded-md shadow-md hover:bg-yellow-400/80 transition-all hover:text-slate-700"
          >
            Editar
          </button>
        </div>
      </fieldset>
    </form>
  );
};
