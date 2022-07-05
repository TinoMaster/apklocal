import { useContext, useState } from "react";
import EstadisticasContext from "../context/estadisticasContext";

let idHojas = {
  bn: null,
  color: null,
  id: 111111,
};

export const useForm = (setErrorsForm) => {
  const [form, setForm] = useState({});
  const [cantHojas, setCantHojas] = useState(idHojas);

  const { setModalCuadre, setResultForm } = useContext(EstadisticasContext);

  /* Funciones: */
  const validarForm = (form) => {
    let err = {};

    if (!form.miron) {
      err.name = `El campo "Total Miron" es requerido`;
      return err;
    } else if (!form.fondoAyer) {
      err.name = `El campo "Fondo Ayer" es requerido`;
      return err;
    } else if (!form.fondoHoy) {
      err.name = `El campo "Fondo Hoy" es requerido`;
      return err;
    } else if (!form.efectivo) {
      err.name = `El campo "Efectivo" es requerido`;
      return err;
    } else if (!form.turno) {
      err.name = `Eliga el turno de trabajo`;
      return err;
    } else if (!cantHojas.bn || !cantHojas.color) {
      err.name = `Complete las hojas`;
      return err;
    }

    return err;
  };
  const resultFinal = (form) => {
    if (form.turno.trabajador2 === "") {
      if (form.miron >= 2000) {
        form.salario1 = Math.round(form.miron * 0.15 + 174);
        form.salario2 = "";
      } else {
        form.salario1 = Math.round(form.miron * 0.1 + 174);
        form.salario2 = "";
      }
    } else {
      if (form.miron >= 2000) {
        form.salario1 = Math.round(form.miron * 0.1 + 174);
        form.salario2 = Math.round(form.miron * 0.1 + 150);
      } else if ((form.miron >= 1500) & (form.miron < 2000)) {
        form.salario1 = Math.round(form.miron * 0.075 + 174);
        form.salario2 = Math.round(form.miron * 0.075 + 150);
      } else {
        form.salario1 = Math.round(form.miron * 0.05 + 174);
        form.salario2 = Math.round(form.miron * 0.05 + 150);
      }
    }

    let diferenciaFondo = form.fondoHoy - form.fondoAyer;
    form.dueño = form.miron - form.salario1 - form.salario2 - diferenciaFondo;

    if (!form.deuda) {
      form.deuda = 0;
      form.diferencia =
        form.efectivo +
        form.deuda +
        form.fondoHoy -
        form.miron -
        form.fondoAyer;
    } else {
      form.diferencia =
        form.efectivo +
        form.deuda +
        form.fondoHoy -
        form.miron -
        form.fondoAyer;
    }

    form.testInyectores = cantHojas;

    setResultForm(form);
  };

  /* Handlers: */
  const handleChangeForm = (e) => {
    let { name, value } = e.target;
    setForm({ ...form, [name]: parseInt(value) });
  };

  const handleChangeInputRadio = (e) => {
    let turno = {};
    if (e.target.id === "bryam")
      turno = { trabajador1: "Bryam", trabajador2: "Nysaer" };
    else if (e.target.id === "jorge")
      turno = { trabajador1: "Jorge", trabajador2: "Nysaer" };
    else if (e.target.id === "Jorge")
      turno = { trabajador1: "Jorge(S)", trabajador2: "" };
    else if (e.target.id === "Bryam")
      turno = { trabajador1: "Bryam(S)", trabajador2: "" };
    else if (e.target.id === "Nysaer")
      turno = { trabajador1: "Nysaer(S)", trabajador2: "" };
    else if (e.target.id === "BJ")
      turno = { trabajador1: "Bryam", trabajador2: "Jorge" };
    setForm({ ...form, turno: turno });
  };

  const handleSubmitForm = () => {
    if (Object.keys(validarForm(form)).length === 0) {
      resultFinal(form);
      setModalCuadre(true);
      setErrorsForm({});
    } else {
      setErrorsForm(validarForm(form));
      setModalCuadre(false);
    }
  };

  /* Handlers de caja de hojas */
  const handlerChangeHojas = (e) => {
    const { name, value } = e.target;

    setCantHojas({ ...cantHojas, [name]: value });
  };

  return {
    handleSubmitForm,
    handleChangeForm,
    handleChangeInputRadio,
    form,
    setForm,
    handlerChangeHojas,
  };
};
