import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createSearchParams, useNavigate } from "react-router-dom";
import {
  searchItemReduxThunk,
  setValueSearch,
} from "../redux/actions/searchActions";
import icons from "../ultis/icons";
import { path } from "../ultis/path";
// import icons from "../../ultis/icons";
const { AiOutlineArrowRight, AiOutlineArrowLeft, AiOutlineBars } = icons;
export const Header = ({ handleshow }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const handleClick = () => {
    handleshow();
  };
  const navigate = useNavigate();

  //handleSearch
  const handleSearch = (e) => {
    if (e.keyCode === 13) {
      dispatch(setValueSearch(value.replace(" ", "+")));
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
    <div className="w-full h-[70px] flex items-center px-[59px] relative shadow-sm bg-gray-100">
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
          className="py-2 px-4 h-[40px] w-[380px] rounded-3xl placeholder:text-gray-400 text-gray-500 bg-transparent border border-gray-300 focus:bg-gray-300"
          placeholder="Tìm Kiếm bài hát, Nghệ sĩ"
          onKeyUp={(e) => handleSearch(e)}
        />
      </div>
      <div className="flex items-center gap-3 text-[14px] ml-auto text-gray-500">
        <button className="px-3 py-1 border border-gray-200  hover:bg-gray-300 rounded-3xl">
          Đăng Kí
        </button>
        <button className="px-3 py-1 border  border-gray-200  hover:bg-gray-300 rounded-3xl">
          Đăng Nhập
        </button>
      </div>
    </div>
  );
};
