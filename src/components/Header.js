import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSearchParams, useNavigate } from "react-router-dom";
import { searchItemReduxThunk } from "../redux/actions/searchActions";
import icons from "../ultis/icons";
import { path } from "../ultis/path";
// import icons from "../../ultis/icons";
const { AiOutlineArrowRight, AiOutlineArrowLeft, AiOutlineBars } = icons;
export const Header = ({ handleShow }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  console.log("value", value);
  const handleClick = () => {
    handleShow();
  };
  const navigate = useNavigate();
  const handleSearch = (e) => {
    if (e.keyCode === 13) {
      dispatch(searchItemReduxThunk(value));
      navigate({
        pathname: `${path.SEARCH}/${path.SEARCH_ALL}`,
        search: createSearchParams({
          q: value,
        }).toString(),
      });
    }
  };

  return (
    <div className="w-full h-[70px] flex items-center px-[59px] relative bg-gray-300">
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
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="py-2 px-4 h-[40px] w-[380px] rounded-3xl placeholder:text-black text-gray-500 bg-transparent border border-gray-500 focus:bg-gray-300"
          placeholder="Tìm Kiếm bài hát, Nghệ sĩ"
          onKeyUp={(e) => handleSearch(e)}
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
