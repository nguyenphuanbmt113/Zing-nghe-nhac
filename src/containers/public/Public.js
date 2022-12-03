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
    <div className="flex flex-col relative h-screen">
      <div className="flex flex-auto h-full">
        <div className="w-[240px] flex-none xl:hidden">
          <SidebarLeft></SidebarLeft>
        </div>
        <div className="flex-auto border">
          <Header></Header>
          <Outlet></Outlet>
        </div>
        <div className="w-[320px] flex-none xl:hidden">
          <SidebarRight></SidebarRight>
        </div>
      </div>
      <div className="h-[90px] flex-none border bg-main-500 z-[100]">
        <Player></Player>
      </div>
    </div>
  );
};
