import React from "react";
import { PrimaryLoader } from "./primaryLoader";

export const WaitingPage = () => {
  return (
    <div className="w-screen h-screen bg-black/20 absolute flex justify-center items-center">
      <div className="">
        <PrimaryLoader />
      </div>
    </div>
  );
};
