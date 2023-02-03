import React from "react";
import { usePagMirones } from "../../hooks/usePagMirones";
import { SecondaryLoader } from "../loaders/secondaryLoader";
import { ChoiceMonth } from "./choiceMonth";
import { TablaMirones } from "./tablaMirones";

export const PagMirones = () => {
  const { states } = usePagMirones();
  return (
    <div className="flex flex-wrap w-full max-w-1080p max-h-1080p m-auto overflow-auto h-full lg:py-6 rounded-lg relative ">
      {/* Caja mirones */}
      <div className="w-full h-full lg:w-1/3 bg-white/5 relative">
        {/* Loader */}
        {states?.loaderPageMiron && (
          <div className="w-full h-full absolute flex justify-center items-center">
            <div className="bg-black/10 rounded-md p-1">
              <SecondaryLoader />
            </div>
          </div>
        )}
        {/* Mirones */}
        <div className="w-full flex flex-col">
          {/* Select Month */}
          <ChoiceMonth />
          {/* Select Year */}
          <div className="flex">
            <select
              name=""
              id=""
              className="p-1 border-2 rounded-md ml-2  text-slate-700 focus:outline-none"
            ></select>
            <p className="self-center right-5 absolute block text-sm text-violet-400/80 font-serif"></p>
          </div>
          {/* Tabla de mirones */}
          <TablaMirones
            mirones={states.mirones}
            loader={states.loaderPageMiron}
          />
        </div>
      </div>
    </div>
  );
};
