import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { UseAddProduct } from "../../../hooks/tienda/useAddProduct";
import { Form } from "./form";

export const AddProduct = () => {
  const {
    option,
    setOption,
    newCategory,
    isNewCategory,
    isNewProvider,
    newProvider,
    handlers,
    error,
    loader,
    sendForm,
    success,
  } = UseAddProduct();
  return (
    <div className="flex flex-wrap h-full justify-center items-start">
      {/* Options */}
      <div className="">
        <label
          onClick={() => setOption("new")}
          className={
            option === "new"
              ? "p-2 bg-green-400 font-semibold rounded-l-md text-white inline-block shadow-md hover:cursor-pointer transition-all"
              : "p-2 bg-slate-400 rounded-l-md text-white inline-block shadow hover:cursor-pointer transition-all"
          }
          htmlFor="new"
        >
          Nuevo
          <input className="hidden" type="checkbox" name="exit?" id="new" />
        </label>
        <label
          onClick={() => setOption("exist")}
          className={
            option === "exist"
              ? "p-2 bg-yellow-400 font-semibold rounded-r-md text-white inline-block shadow-md hover:cursor-pointer transition-all"
              : "p-2 bg-slate-400 rounded-r-md text-white inline-block shadow hover:cursor-pointer transition-all"
          }
          htmlFor="exist"
        >
          Existente
          <input className="hidden" type="checkbox" name="exit?" id="exist" />
        </label>
      </div>
      <div className="w-full flex justify-center ">
        <p
          className={
            error.error
              ? "flex bg-red-300 py-2 px-4 rounded-md text-slate-100 transition-all"
              : "transition-all"
          }
        >
          <FontAwesomeIcon
            className={
              error.error
                ? "py-1 px-2 rounded-full text-red-200 bg-slate-200 mr-1"
                : "bg-transparent text-transparent"
            }
            icon={faExclamation}
          />{" "}
          {error.message}
        </p>
      </div>
      <div className="w-full flex justify-center ">
        <p
          className={
            success.success
              ? "flex bg-green-300 py-2 px-4 rounded-md text-slate-100 transition-all"
              : "transition-all"
          }
        >
          <FontAwesomeIcon
            className={
              success.success
                ? "py-1 px-2 rounded-full text-green-200 bg-slate-200 mr-1"
                : "bg-transparent text-transparent"
            }
            icon={faExclamation}
          />{" "}
          {error.message}
        </p>
      </div>
      <Form
        option={option}
        isNewCategory={isNewCategory}
        newCategory={newCategory}
        newProvider={newProvider}
        isNewProvider={isNewProvider}
        handlers={handlers}
        loader={loader}
        sendForm={sendForm}
      />
    </div>
  );
};
