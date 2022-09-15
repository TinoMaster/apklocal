import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { usePagTrabajador } from "../../hooks/usePagTrabajador";
import { ModalPortal } from "../modalPortal/modalPortal";
import { ModalInsertTrabajador } from "./modalInsertTrabajador";
import Trabajador from "./trabajador";

const PagPersonal = () => {
  const { modalWorker, setModalWorker, handlerChangeWorker } =
    usePagTrabajador();

  return (
    <div className="flex max-w-1080p relative max-h-1080p justify-around flex-wrap w-full h-full overflow-auto">
      <button
        onClick={() => !modalWorker && setModalWorker(true)}
        className="w-10 h-10 bg-green-500 absolute rounded-full text-xl text-white bottom-5 md:bottom-10 right-5 shadow-lg shadow-green-600/40"
      >
        <FontAwesomeIcon icon={faCirclePlus} />
      </button>
      {modalWorker && (
        <ModalPortal>
          <ModalInsertTrabajador
            setModalWorker={setModalWorker}
            handlerChangeWorker={handlerChangeWorker}
          />
        </ModalPortal>
      )}
      <Trabajador />
      <Trabajador />
      <Trabajador />
    </div>
  );
};

export default PagPersonal;
