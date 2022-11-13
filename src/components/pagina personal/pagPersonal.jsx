import { faCircleInfo, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { usePagTrabajador } from "../../hooks/usePagTrabajador";
import { ModalPortal } from "../modalPortal/modalPortal";
import { ModalInsertTrabajador } from "./modalInsertTrabajador";
import { ModalUpdateTrabajador } from "./modalUpdateTrabajador";
import Trabajador from "./trabajador";

const PagPersonal = () => {
  const {
    modalInsertWorker,
    setModalInsertWorker,
    handlerChangeWorker,
    handlerChangeWorkerImage,
    imageModalWorker,
    uploadWorker,
    errorUploadWorker,
    setErrorUploadWorker,
    workers,
    setModalUpdateWorker,
    modalUpdateWorker,
    setDataToEdit,
    dataToEdit,
    handlerChangeUpdateWorker,
    updateWorker,
    success,
    error,
    roles,
  } = usePagTrabajador();

  return (
    <div className="flex max-w-1080p relative max-h-1080p justify-around flex-wrap w-full h-full overflow-auto">
      {/* Mensaje si es success */}
      <div
        className={
          !success?.success
            ? "absolute right-5 top-3 bg-transparent transition-all"
            : "absolute right-5 top-3 bg-green-300 p-2 text-white rounded z-20"
        }
      >
        {success?.success && (
          <p>
            <FontAwesomeIcon icon={faCircleInfo} /> {success.message}
          </p>
        )}
      </div>
      {/* Mensaje si es error */}
      <div
        className={
          !error?.error
            ? "absolute right-5 top-3 bg-transparent transition-all"
            : "absolute right-5 top-3 bg-red-300 p-2 text-white rounded z-20"
        }
      >
        {error?.error && (
          <p>
            <FontAwesomeIcon icon={faCircleInfo} /> {error.message}
          </p>
        )}
      </div>
      <button
        onClick={() => !modalInsertWorker && setModalInsertWorker(true)}
        className="w-10 h-10 bg-green-500 absolute rounded-full text-xl text-white bottom-5 md:bottom-10 right-5 shadow-lg shadow-green-600/40"
      >
        <FontAwesomeIcon icon={faCirclePlus} />
      </button>
      {modalInsertWorker && (
        <ModalPortal>
          <ModalInsertTrabajador
            setModalInsertWorker={setModalInsertWorker}
            handlerChangeWorker={handlerChangeWorker}
            handlerChangeWorkerImage={handlerChangeWorkerImage}
            imageModalWorker={imageModalWorker}
            uploadWorker={uploadWorker}
            errorUploadWorker={errorUploadWorker}
            setErrorUploadWorker={setErrorUploadWorker}
            roles={roles}
          />
        </ModalPortal>
      )}
      {modalUpdateWorker && (
        <ModalPortal>
          <ModalUpdateTrabajador
            dataToEdit={dataToEdit}
            setModalUpdateWorker={setModalUpdateWorker}
            handlerChangeUpdateWorker={handlerChangeUpdateWorker}
            handlerChangeWorkerImage={handlerChangeWorkerImage}
            errorUploadWorker={errorUploadWorker}
            imageModalWorker={imageModalWorker}
            updateWorker={updateWorker}
            roles={roles}
          />
        </ModalPortal>
      )}
      {workers.length > 0
        ? workers.map((worker) => (
            <Trabajador
              key={worker._id}
              worker={worker}
              setModalUpdateWorker={setModalUpdateWorker}
              setDataToEdit={setDataToEdit}
            />
          ))
        : "cargando..."}
    </div>
  );
};

export default PagPersonal;
