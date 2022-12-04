import React, { useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import icons from "../ultis/icons";
const active = "px-3 py-2 bg-gray-200 rounded-3xl text-main-500";
const noactive = "px-3 py-2 rounded-3xl text-main-500 border";
const { BsThreeDots, CiHeart, BsSuitHeartFill, RiDeleteBin2Line } = icons;
export const SidebarRight = () => {
  const [isActive, setIsActive] = useState(0);
  return (
    <>
      <div className="h-[70px] flex-auto py-[14px] px-[8px] border-b text-[13px]">
        <div className="flex items-center justify-between">
          <button
            className={isActive === 0 ? active : noactive}
            onClick={() => setIsActive(0)}>
            Danh Sánh Phát
          </button>
          <button
            className={isActive === 1 ? active : noactive}
            onClick={() => setIsActive(1)}>
            Phát Gần Đây
          </button>
          <div className="text-gray-500">
            <BsThreeDots size={25}></BsThreeDots>
          </div>
        </div>
      </div>
    </>
  );
};
