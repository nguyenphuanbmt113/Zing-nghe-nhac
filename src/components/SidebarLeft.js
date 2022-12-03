import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { sidebarMenu } from "../ultis/menu";
export const SidebarLeft = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <div
        className="h-[70px] mx-[28px] flex items-center justify-start"
        onClick={() => handleClick()}>
        <img
          src="https://static-zmp3.zmdcdn.me/skins/zmp3-v5.1/images/logo.png"
          alt="Logo"
          className="object-cover w-[120px] h-10"
        />
      </div>
      <div className="flex flex-col">
        {sidebarMenu.length > 0 &&
          sidebarMenu.map((item) => {
            return (
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive === true
                    ? "py-2 px-[25px] font-medium text-primary flex gap-3 items-center hover:bg-gray-200 bg-gray-200"
                    : "py-2 px-[25px] font-medium text-[#32323d] flex gap-3 items-center hover:bg-gray-200"
                }
                key={item.id}>
                {item.icon}
                <span>{item.text}</span>
              </NavLink>
            );
          })}
      </div>
    </>
  );
};
