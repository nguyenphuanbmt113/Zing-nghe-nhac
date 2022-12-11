import moment from "moment";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playingMusic, setCurrentSongId } from "../redux/actions/MusicActions";
import { GrPlay } from "react-icons/gr";
import { CiPlay1 } from "react-icons/ci";
export const SongItem = ({ data, icon, iconAfter, sid }) => {
  const [isLike, setIsLike] = useState(false);
  const { curSongId } = useSelector((state) => state.music);
  const dispatch = useDispatch();
  const handleIcons = (e) => {
    e.stopPropagation();
    setIsLike(!isLike);
  };
  const handleClickSongItem = () => {
    dispatch(setCurrentSongId(sid));
    dispatch(playingMusic(true));
  };
  return (
    <div
      className={`py-2 pl-2 pr-10 flex gap-2 rounded-xl hover:bg-gray-200 transition-all relative text-sm ${
        data.encodeId === curSongId ? "bg-gray-200" : ""
      }`}
      onClick={() => handleClickSongItem()}>
      <div className="flex-none w-[60px] h-[60px] relative">
        <img
          src={data?.thumbnail}
          alt="avatar"
          className="w-full h-full object-cover rounded-md"
        />
        <div
          className={`text-white absolute inset-0 bg-black/20 rounded-md opacity-0 ${
            data.encodeId === curSongId ? "opacity-100" : ""
          }`}>
          <div className="text-white flex items-center justify-center h-full">
            <CiPlay1 color={"#fff"} size={24}></CiPlay1>
          </div>
        </div>
      </div>
      <div className="flex-auto">
        <div className="flex flex-col">
          <span className="w-[140px] truncate">{data?.title}</span>
          <span className="text-medium text-[12px] text-gray-400">
            {data?.artistsNames}
          </span>
          <span className="text-[10px] text-gray-400">
            {moment(data?.releaseDate * 1000).fromNow()}
          </span>
        </div>
      </div>
      <div
        className="text-lg absolute top-[5%] right-[5%]"
        onClick={(e) => handleIcons(e)}>
        {isLike ? iconAfter : icon}
      </div>
    </div>
  );
};
