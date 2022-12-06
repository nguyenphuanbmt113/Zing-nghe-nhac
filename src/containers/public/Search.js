import React from "react";
import { Outlet } from "react-router-dom";

export const Search = () => {
  return (
    <div>
      <div>BO may la nhat</div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};
