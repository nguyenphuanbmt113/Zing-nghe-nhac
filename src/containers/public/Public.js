import React from "react";
import { Outlet } from "react-router-dom";
import {
  SidebarRight,
  SidebarLeft,
  Header,
  Player,
} from "../../components/index";
export const Public = () => {
  return (
    <div className="flex relative h-screen">
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
      <div className="h-[90px] absolute bottom-0 right-0 left-0 border bg-gray-100">
        <Player></Player>
      </div>
    </div>
  );
};
