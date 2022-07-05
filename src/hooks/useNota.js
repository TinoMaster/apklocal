import { useState } from "react";

export const useNota = (modeloNota, dataToEdit) => {
  const [nota, setNota] = useState(modeloNota);

  const handleChangeNota = (e) => {
    let { name, value } = e.target;
    setNota({ ...nota, [name]: value });
  };

  const handlerSubmit = () => {
    let notaEditada = {};
    if (dataToEdit) {
      notaEditada = nota;
      if (nota.nombre === "") notaEditada.nombre = dataToEdit.nombre;
      if (nota.description === "")
        notaEditada.description = dataToEdit.description;
      if (nota.telefono === "") notaEditada.telefono = dataToEdit.telefono;
      notaEditada.fecha = dataToEdit.fecha;
      notaEditada.id = dataToEdit.id;

      setNota(notaEditada);
    }
  };

  return { nota, handleChangeNota, handlerSubmit };
};
