import React from "react";
import { useNavigate } from "react-router-dom";
import { nFormatter } from "../ultis/fn";
import icons from "../ultis/icons";
const { AiOutlineUserAdd, AiOutlineShareAlt } = icons;
export const ArtistsSearch = ({ data, link }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(link);
  };
  return (
    <div>
      <div className="relative hover-group" onClick={() => handleClick()}>
        <div className="text-white absolute inset-0 hover:bg-gray-700/50 opacity-0 hover:opacity-100 rounded-full transition-opacity flex items-center justify-center z-[1000]">
          <AiOutlineShareAlt size={25}></AiOutlineShareAlt>
        </div>
        <img
          src={data?.thumbnailM}
          alt=""
          className="w-[266.4] h-[266.4] object-cover rounded-full"
        />
      </div>
      <div
        className="w-[160px] lg:w-[110px] truncate text-sm mb-[4px] text-center mt-[4px] hover:underline"
        onClick={() => handleClick()}>
        {data?.name}
      </div>
      <div className="text-[12px] text-gray-600 text-center">
        {nFormatter(data.totalFollow)} quan tâm
      </div>
      <div className="px-[19px] py-[6px] mt-[15px] flex border rounded-2xl items-center justify-center gap-2 bg-main-500 text-white">
        <span>
          <AiOutlineUserAdd size={20}></AiOutlineUserAdd>
        </span>
        <span className="text-sm uppercase">Quan Tâm</span>
      </div>
    </div>
  );
};
