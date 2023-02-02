import { faCalendarDays, faFile } from "@fortawesome/free-regular-svg-icons";
import {
  faCashRegister,
  faDatabase,
  faDisplay,
  faMemory,
  faWeight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import AuthContext from "../../context/authContext";
import { ModalPortal } from "../modalPortal/modalPortal";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";

export const ModalViewMiron = ({
  setViewMiron,
  mirones,
  viewMiron,
  totalMirones,
}) => {
  const { darkMode } = useContext(AuthContext);

  const exportTxt = (jsonData) => {
    let text = "User Information\n";
    text += "Name: " + jsonData.name + "\n";
    text += "Age: " + jsonData.age + "\n";

    const element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(text)
    );
    element.setAttribute("download", "json-to-txt.txt");

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };

  const exportPdf = (jsonData) => {
    const doc = new jsPDF();
    doc.text("User Information", 10, 10);
    doc.text("Name: " + jsonData.name, 10, 20);
    doc.text("Fecha: " + jsonData.fecha, 10, 30);
    doc.text("Dispositivos: " + jsonData.cant_dispositivos, 10, 40);
    doc.text("Volumen: " + jsonData.volumen_copia, 10, 50);
    doc.text("Ficheros: " + jsonData.cant_ficheros, 10, 60);
    doc.text("Venta Total: " + jsonData.venta_total, 10, 70);
    /* jsonData?.dispositivos?.forEach((element, index) => {
      doc.text("Dispositivos: " + element.dispositivo, 20, (80 + index) * 10);
      doc.text("Tipo: " + element.tipo, 20, 86 + index * 10);
      doc.text("Hora: " + element.insercion, 20, 92 + index * 10);
    }); */
    doc.save("json-to-pdf.pdf");
  };
  return (
    <ModalPortal>
      <div
        className={`w-full h-full md:w-1/3 md:h-5/6 md:rounded p-2 font-serif text-sm ${
          !darkMode
            ? "bg-lightMode text-darkMode"
            : "bg-darkMode text-lightMode"
        }  overflow-auto shadow-xl shadow-black/80`}
      >
        {/* Caja de resultados */}
        <div className="w-full flex flex-wrap">
          {/* Atras */}
          <button
            onClick={() => setViewMiron("close")}
            className="sticky top-0 left-0 bg-black/10 p-1 rounded-md mb-2 z-20"
          >
            {"← Atras"}
          </button>
          {/* titulo pagina */}
          <h2 className="w-full text-center relative py-2 flex justify-center text-slate-100 items-center bg-primary/70 shadow-md rounded-md">
            <FontAwesomeIcon
              className="mr-1 p-1 rounded-md"
              icon={faDatabase}
            />{" "}
            Desglose Miron
          </h2>
          {/* Encabezado */}
          <div className="w-1/2 flex flex-wrap justify-center px-1">
            <p className="w-full flex items-center p-1">
              <FontAwesomeIcon
                className="mr-1 bg-teal-500 p-1 rounded-full text-slate-200 shadow shadow-black/50"
                icon={faDisplay}
              />
              {viewMiron === "pc1" && "PC1"}
              {viewMiron === "pc2" && "PC2"}
              {viewMiron === "pc1pc2" && "PC1 y PC2"}
            </p>
            <p className="w-full flex items-center p-1">
              <FontAwesomeIcon
                className="mr-1 bg-green-500 p-1 rounded-full text-slate-200 shadow shadow-black/50"
                icon={faCalendarDays}
              />
              {`Fecha: ${mirones?.pc1Reporte?.fecha}`}
            </p>
            <p className="w-full flex items-center p-1">
              <FontAwesomeIcon
                className="mr-1 bg-lime-500 p-1 rounded-full text-slate-200 shadow shadow-black/50"
                icon={faMemory}
              />
              Dispositivos:
              {viewMiron === "pc1" &&
                ` ${mirones?.pc1Reporte?.cant_dispositivos}`}
              {viewMiron === "pc2" &&
                ` ${mirones?.pc2Reporte?.cant_dispositivos}`}
              {viewMiron === "pc1pc2" &&
                ` ${
                  mirones?.pc1Reporte?.cant_dispositivos +
                  mirones?.pc2Reporte?.cant_dispositivos
                }`}
            </p>
            <p className="w-full flex items-center p-1">
              <FontAwesomeIcon
                className="mr-1 bg-yellow-500 p-1 rounded-full text-slate-200 shadow shadow-black/50"
                icon={faWeight}
              />{" "}
              Volumen:{" "}
              {viewMiron === "pc1" && ` ${mirones?.pc1Reporte?.volumen_copia}`}
              {viewMiron === "pc2" && ` ${mirones?.pc2Reporte?.volumen_copia}`}
              {viewMiron === "pc1pc2" &&
                ` ${
                  mirones?.pc1Reporte?.volumen_copia +
                  mirones?.pc2Reporte?.volumen_copia
                }`}{" "}
              GB
            </p>
            <p className="w-full flex items-center p-1">
              <FontAwesomeIcon
                className="mr-1 bg-orange-500 p-1 rounded-full text-slate-200 shadow shadow-black/50"
                icon={faFile}
              />{" "}
              Ficheros:{" "}
              {viewMiron === "pc1" && ` ${mirones?.pc1Reporte?.cant_ficheros}`}
              {viewMiron === "pc2" && ` ${mirones?.pc2Reporte?.cant_ficheros}`}
              {viewMiron === "pc1pc2" &&
                ` ${
                  mirones?.pc1Reporte?.cant_ficheros +
                  mirones?.pc2Reporte?.cant_ficheros
                }`}
            </p>
            <p className="w-full flex items-center p-1">
              <FontAwesomeIcon
                className="mr-1 bg-red-500 p-1 rounded-full text-slate-200 shadow shadow-black/50"
                icon={faCashRegister}
              />{" "}
              Venta total: ${" "}
              {viewMiron === "pc1" && ` ${mirones?.pc1Reporte?.venta_total}`}
              {viewMiron === "pc2" && ` ${mirones?.pc2Reporte?.venta_total}`}
              {viewMiron === "pc1pc2" &&
                ` ${
                  mirones?.pc1Reporte?.venta_total +
                  mirones?.pc2Reporte?.venta_total
                }`}
            </p>
          </div>
          {/* Botones */}
          <div className="w-1/2 flex flex-col py-3 px-1 text-darkMode items-end">
            <button className="p-2 mt-2 bg-green-200 rounded-md shadow hover:bg-green-300 w-full max-w-[400px] transition-colors">
              Imprimir
            </button>
            <button
              onClick={() => exportPdf(mirones.pc1Reporte)}
              className="p-2 mt-2 bg-red-200 rounded-md shadow hover:bg-red-300 w-full max-w-[400px] transition-colors"
            >
              Exportar a PDF
            </button>
            <button
              onClick={() => exportTxt(mirones.pc1Reporte)}
              className="p-2 mt-2 bg-slate-200 rounded-md shadow hover:bg-slate-300 w-full max-w-[400px] transition-colors"
            >
              Exportar a TXT
            </button>
          </div>
          {/* Caja de dispositivos */}
          <div className="w-full">
            {/* Encabezado lista */}
            <div className="w-full bg-white/5 flex flex-wrap shadow text-xs relative rounded-md">
              {viewMiron === "pc1" &&
                mirones?.pc1Reporte?.dispositivos?.length > 0 &&
                mirones?.pc1Reporte?.dispositivos?.map((disp) => (
                  <div
                    key={`${disp.dispositivo + disp.insercion}`}
                    className="w-full flex flex-wrap relative m-1 bg-white/5 shadow-md rounded-md"
                  >
                    <p className="w-full text-center py-1 text-green-500">
                      {disp.dispositivo}
                    </p>
                    <p className="w-1/3 py-1 text-center">{`Tipo: ${disp.tipo}`}</p>
                    <p className="py-1 absolute right-2 text-slate-700">
                      {disp.insercion}
                    </p>
                    <p className="w-1/3 py-1 text-center">{`Volumen: ${disp.tamano_copiados}`}</p>
                    <p className="w-1/3 py-1 text-center">
                      {`Copiados: ${disp.ficheros_copiados}`}
                    </p>
                    <p className="w-1/3 py-1 text-center">
                      {`Borrados: ${disp.ficheros_borrados}`}
                    </p>
                    <p className="w-1/3 py-1 text-center">{`Pago: ${disp.pago}$`}</p>
                    <p className="w-1/3 py-1 text-center">{`Cobro: ${disp.pago}$`}</p>
                    <p className="w-full text-center py-1">
                      {`"${disp.comentario}"`}
                    </p>
                  </div>
                ))}
              {viewMiron === "pc2" &&
                mirones?.pc2Reporte?.dispositivos?.length > 0 &&
                mirones?.pc2Reporte?.dispositivos?.map((disp) => (
                  <div
                    key={`${disp.dispositivo + disp.insercion}`}
                    className="w-full flex flex-wrap relative m-1 bg-white/5 shadow-md rounded-md"
                  >
                    <p className="w-full text-center py-1 text-green-500">
                      {disp.dispositivo}
                    </p>
                    <p className="w-1/3 py-1 text-center">{`Tipo: ${disp.tipo}`}</p>
                    <p className="py-1 absolute right-2 text-slate-700">
                      {disp.insercion}
                    </p>
                    <p className="w-1/3 py-1 text-center">{`Volumen: ${disp.tamano_copiados}`}</p>
                    <p className="w-1/3 py-1 text-center">
                      {`Copiados: ${disp.ficheros_copiados}`}
                    </p>
                    <p className="w-1/3 py-1 text-center">
                      {`Borrados: ${disp.ficheros_borrados}`}
                    </p>
                    <p className="w-1/3 py-1 text-center">{`Pago: ${disp.pago}$`}</p>
                    <p className="w-1/3 py-1 text-center">{`Cobro: ${disp.pago}$`}</p>
                    <p className="w-full text-center py-1">
                      {`"${disp.comentario}"`}
                    </p>
                  </div>
                ))}
              {viewMiron === "pc1pc2" &&
                totalMirones?.dispositivos?.length > 0 &&
                totalMirones.dispositivos?.map((disp) => (
                  <div
                    key={`${disp.dispositivo + disp.insercion}`}
                    className="w-full flex flex-wrap relative m-1 bg-white/5 shadow-md rounded-md"
                  >
                    <p className="w-full text-center py-1 text-green-500">
                      {disp.dispositivo}
                    </p>
                    <p className="w-1/3 py-1 text-center">{`Tipo: ${disp.tipo}`}</p>
                    <p className="py-1 absolute right-2 text-slate-700">
                      {disp.insercion}
                    </p>
                    <p className="w-1/3 py-1 text-center">{`Volumen: ${disp.tamano_copiados}`}</p>
                    <p className="w-1/3 py-1 text-center">
                      {`Copiados: ${disp.ficheros_copiados}`}
                    </p>
                    <p className="w-1/3 py-1 text-center">
                      {`Borrados: ${disp.ficheros_borrados}`}
                    </p>
                    <p className="w-1/3 py-1 text-center">{`Pago: ${disp.pago}$`}</p>
                    <p className="w-1/3 py-1 text-center">{`Cobro: ${disp.pago}$`}</p>
                    <p className="w-full text-center py-1">
                      {`"${disp.comentario}"`}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </ModalPortal>
  );
};
