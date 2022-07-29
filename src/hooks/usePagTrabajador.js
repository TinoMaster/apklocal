import { useState } from "react";

export const usePagTrabajador = () => {
  const [modalWorker, setModalWorker] = useState(false);
  const [workerData, setWorkerData] = useState({});

  const handlerChangeWorker = (e) => {
    const { name, value } = e.target;

    setWorkerData({ ...workerData, [name]: value });
  };

  return {
    modalWorker,
    setModalWorker,
    handlerChangeWorker
  };
};
