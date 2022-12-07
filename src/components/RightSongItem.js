import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { playingMusic, setCurrentSongId } from "../redux/actions/MusicActions";
import { CiPlay1 } from "react-icons/ci";
export const RightSongItems = ({ data, sid, rounded }) => {
  const { curSongId } = useSelector((state) => state.music);

  const dispatch = useDispatch();
  //handle Song data
  const handleClickSongItem = () => {
    dispatch(setCurrentSongId(sid));
    dispatch(playingMusic(true));
  };
  return (
    <div
      className={`py-2 pl-2 pr-10 flex gap-2 hover:bg-gray-200 transition-all relative text-sm ${
        rounded ? "rounded-lg" : ""
      } ${sid === curSongId ? "bg-gray-300" : ""}`}
      onClick={() => handleClickSongItem()}>
      <div className={`flex-none w-[60px] h-[60px] relative `}>
        <img
          src={data?.thumbnail}
          alt="avatar"
          className="w-full h-full object-cover rounded-md"
        />
        <div
          className={`text-white absolute inset-0 bg-black/20 rounded-md opacity-0 ${
            sid === curSongId ? "opacity-100" : ""
          }`}>
          <div className="text-white flex items-center justify-center h-full">
            <CiPlay1 color={"#fff"} size={24}></CiPlay1>
          </div>
        </div>
      </div>
      <div className="flex-auto">
        <div className="flex flex-col">
          <span className="text-ellipsis overflow-hidden">{data?.title}</span>
          <span className="text-medium text-[12px] text-gray-400">
            {data?.artistsNames}
          </span>
        </div>
      </div>
    </div>
  );
};
