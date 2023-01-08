import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { UseAddProduct } from "../../../hooks/tienda/useAddProduct";
import { Form } from "./form";

export const AddProduct = () => {
  const {
    newCategory,
    isNewCategory,
    isNewProvider,
    newProvider,
    handlers,
    error,
    loader,
    sendForm,
    success,
    resetForm,
    providers,
    categories,
    formRef,
  } = UseAddProduct();
  return (
    <div className="flex flex-wrap justify-center items-start">
      <h2 className="p-2 text-xl font-serif font-semibold">Agregar Producto Nuevo</h2>
      {/* Error */}
      <div className="w-full flex justify-center mt-14 absolute">
        <p
          className={
            error.error
              ? "flex bg-red-300 py-2 px-4 rounded-md text-slate-100 transition-all shadow-md"
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
      {/* Success */}
      <div className="w-full flex justify-center mt-14 absolute">
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
          />
          {success.success && "Producto Guardado"}
        </p>
      </div>
      <div className="w-full">
        <Form
          isNewCategory={isNewCategory}
          newCategory={newCategory}
          newProvider={newProvider}
          isNewProvider={isNewProvider}
          handlers={handlers}
          loader={loader}
          sendForm={sendForm}
          resetForm={resetForm}
          providers={providers}
          categories={categories}
          formRef={formRef}
        />
      </div>
    </div>
  );
};
