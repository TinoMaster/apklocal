import React from "react";
import { Outlet } from "react-router-dom";

export const Container = () => {
  return (
    <div className="w-full md:w-4/5 p-2 h-full">
      <div className="w-full h-full overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};
