import { useState } from "react";

export const usePagTrabajador = () => {
  const [modalWorker, setModalWorker] = useState(false);
  const [workerData, setWorkerData] = useState({});

  const handlerChangeWorker = (e) => {
    const { name, value } = e.target;

    setWorkerData({ ...workerData, [name]: value });
  };

  const validarData = ()=>{
    
  }

  return {
    modalWorker,
    setModalWorker,
    handlerChangeWorker
  };
};
