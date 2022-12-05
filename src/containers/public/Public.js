import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import {
  SidebarRight,
  SidebarLeft,
  Header,
  Player,
} from "../../components/index";
import { Loading } from "../../components/Loading";
export const Public = () => {
  const [show, setShow] = useState(false);
  const { isLoading } = useSelector((state) => state.music);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className="flex flex-col relative h-screen">
      {isLoading && (
        <div className="absolute inset-0 bg-black/50 z-[1200] flex items-center justify-center">
          <Loading></Loading>
        </div>
      )}
      <div className="flex flex-auto h-full">
        <div
          className={`transition-all w-[240px] flex-none xl:absolute xl:bg-white xl:border-r lg:z-[2000] h-full xl:-translate-x-[1000px] ${
            show ? "xl:translate-x-0" : ""
          }`}>
          <SidebarLeft handleShow={handleShow}></SidebarLeft>
        </div>
        <div className="flex-auto border h-full">
          <Header handleShow={handleShow}></Header>
          <Outlet></Outlet>
        </div>
        <div className="w-[320px] flex-none xl:hidden">
          <SidebarRight></SidebarRight>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 h-[90px] flex-none border bg-gray-500 z-[1100]">
        <Player></Player>
      </div>
    </div>
  );
};
