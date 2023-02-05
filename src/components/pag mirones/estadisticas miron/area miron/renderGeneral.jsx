import React from "react";

export const RenderGeneral = () => {
  return (
    <div className="w-full flex-col px-2 text-sm">
      {/* Dias de la semana de mayor venta */}
      <div className="w-full bg-white/5 shadow-md p-2 rounded-md">
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
        <div className="w-full flex justify-around">
          <p className="w-1/2 text-center py-1 outline-1 outline-black">
            Viernes
          </p>
          <p className="w-1/2 text-center py-1 outline-1 outline-black">
            $300000
          </p>
        </div>
        <div className="w-full flex justify-around">
          <p className="w-1/2 text-center py-1 outline-1 outline-black">
            Jueves
          </p>
          <p className="w-1/2 text-center py-1 outline-1 outline-black">
            $276000
          </p>
        </div>
        <div className="w-full flex justify-around">
          <p className="w-1/2 text-center py-1 outline-1 outline-black">
            Lunes
          </p>
          <p className="w-1/2 text-center py-1 outline-1 outline-black">
            $198054
          </p>
        </div>
        <div className="w-full flex justify-around">
          <p className="w-1/2 text-center py-1 outline-1 outline-black">
            Sabado
          </p>
          <p className="w-1/2 text-center py-1 outline-1 outline-black">
            $189245
          </p>
        </div>
        <div className="w-full flex justify-around">
          <p className="w-1/2 text-center py-1 outline-1 outline-black">
            Martes
          </p>
          <p className="w-1/2 text-center py-1 outline-1 outline-black">
            $166598
          </p>
        </div>
        <div className="w-full flex justify-around">
          <p className="w-1/2 text-center py-1 outline-1 outline-black">
            Miercoles
          </p>
          <p className="w-1/2 text-center py-1 outline-1 outline-black">
            $145122
          </p>
        </div>
        <div className="w-full flex justify-around">
          <p className="w-1/2 text-center py-1 outline-1 outline-black">
            Domingo
          </p>
          <p className="w-1/2 text-center py-1 outline-1 outline-black">
            $143554
          </p>
        </div>
      </div>
      {/* Dispositivos que mas copian */}
      <div className="w-full bg-white/5 shadow-md p-2 my-1 rounded-md">
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
        <div className="w-full overflow-auto max-h-[210px]">
          <div className="w-full flex justify-around">
            <p className="w-1/2 text-center py-1 rounded-tl-md">
              Samsung Galaxy A6
            </p>
            <p className="w-1/2 text-center py-1 rounded-tl-md">$3205</p>
          </div>
          <div className="w-full flex justify-around">
            <p className="w-1/2 text-center py-1 rounded-tl-md">
              Samsung Galaxy A6
            </p>
            <p className="w-1/2 text-center py-1 rounded-tl-md">$3205</p>
          </div>
          <div className="w-full flex justify-around">
            <p className="w-1/2 text-center py-1 rounded-tl-md">
              Samsung Galaxy A6
            </p>
            <p className="w-1/2 text-center py-1 rounded-tl-md">$3205</p>
          </div>
          <div className="w-full flex justify-around">
            <p className="w-1/2 text-center py-1 rounded-tl-md">
              Samsung Galaxy A6
            </p>
            <p className="w-1/2 text-center py-1 rounded-tl-md">$3205</p>
          </div>
          <div className="w-full flex justify-around">
            <p className="w-1/2 text-center py-1 rounded-tl-md">
              Samsung Galaxy A6
            </p>
            <p className="w-1/2 text-center py-1 rounded-tl-md">$3205</p>
          </div>
          <div className="w-full flex justify-around">
            <p className="w-1/2 text-center py-1 rounded-tl-md">
              Samsung Galaxy A6
            </p>
            <p className="w-1/2 text-center py-1 rounded-tl-md">$3205</p>
          </div>
          <div className="w-full flex justify-around">
            <p className="w-1/2 text-center py-1 rounded-tl-md">
              Samsung Galaxy A6
            </p>
            <p className="w-1/2 text-center py-1 rounded-tl-md">$3205</p>
          </div>
          <div className="w-full flex justify-around">
            <p className="w-1/2 text-center py-1 rounded-tl-md">
              Samsung Galaxy A6
            </p>
            <p className="w-1/2 text-center py-1 rounded-tl-md">$3205</p>
          </div>
          <div className="w-full flex justify-around">
            <p className="w-1/2 text-center py-1 rounded-tl-md">
              Samsung Galaxy A6
            </p>
            <p className="w-1/2 text-center py-1 rounded-tl-md">$3205</p>
          </div>
          <div className="w-full flex justify-around">
            <p className="w-1/2 text-center py-1 rounded-tl-md">
              Samsung Galaxy A6
            </p>
            <p className="w-1/2 text-center py-1 rounded-tl-md">$3205</p>
          </div>
          <div className="w-full flex justify-around">
            <p className="w-1/2 text-center py-1 rounded-tl-md">
              Samsung Galaxy A6
            </p>
            <p className="w-1/2 text-center py-1 rounded-tl-md">$3205</p>
          </div>
        </div>
      </div>
      {/* Dispositivos que mas visitan */}
      <div className="w-full bg-white/5 shadow-md p-2 my-1 rounded-md">
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
          <div className="w-full flex justify-around">
            <p className="w-1/2 text-center py-1 rounded-tl-md">
              Samsung Galaxy A6
            </p>
            <p className="w-1/2 text-center py-1 rounded-tl-md">20</p>
          </div>
          <div className="w-full flex justify-around">
            <p className="w-1/2 text-center py-1 rounded-tl-md">
              Samsung Galaxy A6
            </p>
            <p className="w-1/2 text-center py-1 rounded-tl-md">17</p>
          </div>
          <div className="w-full flex justify-around">
            <p className="w-1/2 text-center py-1 rounded-tl-md">
              Samsung Galaxy A6
            </p>
            <p className="w-1/2 text-center py-1 rounded-tl-md">15</p>
          </div>
          <div className="w-full flex justify-around">
            <p className="w-1/2 text-center py-1 rounded-tl-md">
              Samsung Galaxy A6
            </p>
            <p className="w-1/2 text-center py-1 rounded-tl-md">12</p>
          </div>
          <div className="w-full flex justify-around">
            <p className="w-1/2 text-center py-1 rounded-tl-md">
              Samsung Galaxy A6
            </p>
            <p className="w-1/2 text-center py-1 rounded-tl-md">10</p>
          </div>
        </div>
      </div>
    </div>
  );
};
