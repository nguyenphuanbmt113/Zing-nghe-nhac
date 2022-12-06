import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { searchApi } from "../service/webApi";
import icons from "../ultis/icons";
// import icons from "../../ultis/icons";
const { AiOutlineArrowRight, AiOutlineArrowLeft, AiOutlineBars } = icons;
export const Header = ({ handleShow }) => {
  const searchRef = useRef();
  const [value, setValue] = useState("");
  const handleClick = () => {
    handleShow();
  };
  const handleValue = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const handleSearch = (e) => {
      const fetchingSearchData = async () => {
        const res = await searchApi(value);
        console.log("res", res);
      };
      if (e.keyCode === 13) {
        fetchingSearchData();
      }
    };
    const curr = searchRef.current;
    curr.addEventListener("keyup", handleSearch);
    return () => {
      curr.removeEventListener("keyup", handleSearch);
    };
  }, [value]);

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
          ref={searchRef}
          type="text"
          value={value}
          onChange={(e) => handleValue(e)}
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
