import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarRight, SidebarLeft, Header } from "../../components/index";
export const Public = () => {
  return (
    <div className="flex">
      <div className="border border-gray-500 w-[240px] flex-none">
        <SidebarLeft></SidebarLeft>
      </div>
      <div className="flex-auto border">
        <Header></Header>
        <Outlet></Outlet>
      </div>
      <div className="border border-gray-500 w-[320px] flex-none">
        <SidebarRight></SidebarRight>
      </div>
    </div>
  );
};
