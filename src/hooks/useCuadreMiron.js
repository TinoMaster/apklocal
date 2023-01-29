import { useContext, useEffect, useState } from "react";
import CuadreContext from "../context/cuadreContext";
import apiConfig from "../config/api.config.json";
import { httpHelper } from "../helpers/httpHelper";

let idHojas = {
  bn: null,
  color: null,
  id: 111111,
};

let defaultTurno = {
  trabajador1: "",
  trabajador2: "",
};

const urlGetWorkers = `${apiConfig.api.url}/trabajadores`;

export const UseCuadreMiron = (setErrorsForm) => {
  /* Este es lo mismo que useForm lo estoy convirtiendo para hacer nuevas pruebas para hacer dinamico el uso  de trabajadores */
  const [form, setForm] = useState({});
  const [turno, setTurno] = useState(defaultTurno);
  const [cantHojas, setCantHojas] = useState(idHojas);
  const [workers, setWorkers] = useState([]);
  const [restHojas, setRestHojas] = useState({ color: 0, bn: 0 });
  const [mirones, setMirones] = useState({});
  const [loaderMirones, setLoaderMirones] = useState(false);

  const { setModalCuadre, setResultForm } = useContext(CuadreContext);

  /* Funciones: */
  useEffect(() => {
    httpHelper()
      .get(urlGetWorkers)
      .then((docs) => {
        if (docs.success) {
          setWorkers(docs.data);
        } else {
          console.log(docs);
        }
      });
  }, []);

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
    } else if (turno?.trabajador1 === "") {
      err.name = `Eliga el turno de trabajo`;
      return err;
    } else if (!cantHojas.bn || !cantHojas.color) {
      err.name = `Complete las hojas`;
      return err;
    }

    return err;
  };

  const resultFinal = async (form) => {
    if (form?.turno?.trabajador2 === "") {
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

  const handlerChangeMirones = (e) => {
    setLoaderMirones(true);
    const { name, value } = e.target;
    setMirones({ ...mirones, [name]: value });
    setLoaderMirones(false);
  };

  /* Handlers: */
  const handleChangeForm = (e) => {
    let { name, value } = e.target;
    setForm({ ...form, [name]: parseInt(value) });
  };

  const handlerChoiceWorker = (e) => {
    const { name, value } = e.target;
    setTurno({ ...turno, [name]: value });
    setForm({ ...form, turno: { ...turno, [name]: value } });
  };

  const handleSubmitForm = async () => {
    if (Object.keys(validarForm(form)).length === 0) {
      await resultFinal(form);
      setModalCuadre(true);
      console.log(form);
      setErrorsForm({});
    } else {
      setErrorsForm(validarForm(form));
      setModalCuadre(false);
    }
  };

  /* Handlers de caja de hojas */
  const handlerChangeHojas = (e, testAnterior) => {
    const { name, value } = e.target;

    setCantHojas({ ...cantHojas, [name]: value });
    setRestHojas({ ...restHojas, [name]: value - testAnterior[name] });
  };

  return {
    handleSubmitForm,
    handleChangeForm,
    form,
    setForm,
    handlerChangeHojas,
    handlerChoiceWorker,
    turno,
    workers,
    restHojas,
    handlerChangeMirones,
    mirones,
    loaderMirones,
  };
};
