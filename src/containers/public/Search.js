import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { menuSearch } from "../../ultis/menu";
export const Search = () => {
  const { keyword } = useSelector((state) => state.search);
  return (
    <div>
      <div className="px-[59px] mb-[28px] flex items-center h-[47px]">
        <div className="font-semibold pr-[20px] border-r border-gray-600 text-[20px]">
          Kết Quả Tìm Kiếm
        </div>
        <div className="pl-[20px] flex items-center gap-4 capitalize text-[14px] h-full">
          {menuSearch &&
            menuSearch.map((item) => {
              return (
                <NavLink
                  key={item.id}
                  to={`${item.path}?q=${keyword.replace("%20", "+")}`}
                  className={({ isActive }) =>
                    isActive === true
                      ? "py-[15px] font-medium cursor-pointer text-main-500"
                      : "py-[15px] font-medium cursor-pointer"
                  }>
                  {item?.text}
                </NavLink>
              );
            })}
        </div>
      </div>
      <div className="relative">
        <Outlet></Outlet>
      </div>
    </div>
  );
};
