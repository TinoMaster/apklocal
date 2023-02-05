import React from "react";

export const RenderGeneral = ({
  mejoresDiasSemana,
  dispositivosMasCopian,
  mirones,
}) => {
  return (
    <div className="w-full h-full flex flex-col justify-between px-2 text-sm">
      {/* Dias de la semana de mayor venta */}
      <div className="w-full bg-white/5 shadow-md p-2 h-1/3 rounded-md">
        <div className="w-full">
          <h3 className="text-base ml-1 pb-1 text-green-400">
            Mejores dias de la semana
          </h3>
        </div>
        {/* Tabla de dias de la semana */}
        <div className="w-full flex justify-around">
          <p className="w-1/2 text-center py-1 bg-white/5 shadow-md shadow-green-400/30 rounded-tl-md">
            Dia
          </p>
          <p className="w-1/2 bg-white/5 shadow-md text-center py-1 shadow-green-400/30 rounded-tr-md">
            Volumen Venta
          </p>
        </div>
        {/* Render dias */}
        {mejoresDiasSemana(mirones)?.length > 0 &&
          mejoresDiasSemana(mirones)?.map((el, index) => (
            <div key={el[0]} className="w-full flex justify-around relative">
              <p className="absolute left-2">{`${index + 1}:`}</p>
              <p className="w-1/2 text-center py-1 outline-1 outline-black">
                {el[0]}
              </p>
              <p className="w-1/2 text-center py-1 outline-1 outline-black">
                {`$${el[1]}`}
              </p>
            </div>
          ))}
      </div>
      {/* Dispositivos que mas copian */}
      <div className="w-full h-1/3 bg-white/5 shadow-md p-2 my-1 rounded-md overflow-hidden">
        <h3 className="text-base ml-1 pb-1 text-yellow-400">
          Dispositivos que mas copian
        </h3>
        <div className="w-full flex justify-around">
          <p className="w-1/2 text-center py-1 bg-white/5 shadow-md shadow-yellow-400/30 rounded-tl-md">
            Dispositivo
          </p>
          <p className="w-1/2 text-center py-1 bg-white/5 shadow-md shadow-yellow-400/30 rounded-tl-md">
            Gasto
          </p>
        </div>
        {/* renderizado de dispositivos */}
        <div className="w-full overflow-auto max-h-[210px] pb-10">
          {dispositivosMasCopian(mirones)?.length > 0 &&
            dispositivosMasCopian(mirones)?.map((el, index) => (
              <div key={el[0]} className="w-full flex justify-around relative">
                <p className="absolute left-2">{`${index + 1}:`}</p>
                <p className="w-1/2 text-center py-1 rounded-tl-md">{el[0]}</p>
                <p className="w-1/2 text-center py-1 rounded-tl-md">{`$${el[1]}`}</p>
              </div>
            ))}
        </div>
      </div>
      {/* Dispositivos que mas visitan */}
      <div className="w-full bg-white/5 h-1/3 shadow-md p-2 my-1 rounded-md">
        <h3 className="text-base ml-1 pb-1 text-fuchsia-500">
          Dispositivos que mas visitan
        </h3>
        <div className="w-full flex justify-around">
          <p className="w-1/2 text-center py-1 bg-white/5 shadow-md shadow-fuchsia-400/30 rounded-tl-md">
            Dispositivo
          </p>
          <p className="w-1/2 text-center py-1 bg-white/5 shadow-md shadow-fuchsia-400/30 rounded-tl-md">
            Visitas
          </p>
        </div>
        {/* renderizado de dispositivos */}
        <div className="w-full overflow-auto max-h-[250px]">
          {/* <div className="w-full flex justify-around">
            <p className="w-1/2 text-center py-1 rounded-tl-md">
              Samsung Galaxy A6
            </p>
            <p className="w-1/2 text-center py-1 rounded-tl-md">20</p>
          </div> */}
          <p>Pendiente ...</p>
        </div>
      </div>
    </div>
  );
};
