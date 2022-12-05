import React from "react";
import icons from "../ultis/icons";
// import icons from "../../ultis/icons";
const { AiOutlineArrowRight, AiOutlineArrowLeft, AiOutlineBars } = icons;
export const Header = ({ handleShow }) => {
  const handleClick = () => {
    handleShow();
  };
  return (
    <div className="w-full h-[70px] flex items-center px-[59px] relative bg-gray-200">
      <div
        className="hidden lg:block lg:absolute left-3"
        onClick={() => handleClick()}>
        <AiOutlineBars size={22}></AiOutlineBars>
      </div>
      <div className="flex gap-2 mr-5">
        <div>
          <AiOutlineArrowLeft size="20px"></AiOutlineArrowLeft>
        </div>
        <div>
          <AiOutlineArrowRight size="20px"></AiOutlineArrowRight>
        </div>
      </div>
      <div className="text-sm">
        <input
          type="text"
          className="py-2 px-4 h-[40px] w-[380px] rounded-3xl placeholder:text-black text-gray-500 bg-transparent border border-gray-500 focus:bg-gray-300"
          placeholder="Tìm Kiếm bài hát, Nghệ sĩ"
        />
      </div>
      <div className="flex items-center gap-3 text-sm ml-auto">
        <button className="px-3 py-1 border border-gray-500  hover:bg-gray-300 rounded-3xl">
          Đăng Kí
        </button>
        <button className="px-3 py-1 border  border-gray-500  hover:bg-gray-300 rounded-3xl">
          Đăng Nhập
        </button>
      </div>
    </div>
  );
};
