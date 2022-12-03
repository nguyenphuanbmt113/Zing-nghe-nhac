import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailSong } from "../redux/actions/MusicActions";
import icons from "../ultis/icons";
const {
  AiOutlineHeart,
  BsVolumeUp,
  BsThreeDots,
  MdSkipNext,
  MdSkipPrevious,
  CiRepeat,
  BsPauseFill,
  CiShuffle,
  BiVolumeMute,
  ImPlay3,
  BsSuitHeartFill,
} = icons;
let iconStyles = { color: "white" };
export const Player = () => {
  const { curSongId, InfoSong } = useSelector((state) => state.music);
  console.log("InfoSong", InfoSong)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetailSong(curSongId));
  }, [curSongId]);
  return (
    <div className="h-full px-5 flex">
      <div className="w-[30%] flex gap-3 items-center justify-start">
        <div>
          <img
            src={InfoSong?.thumbnail}
            alt=""
            className="object-cover w-[64px] h-[64px]"
          />
        </div>
        <div className="flex flex-col gap-1 text-sm text-white">
          <span>{InfoSong?.title}</span>
          <span>{InfoSong?.artistsNames}</span>
        </div>
        <div className="">
          <AiOutlineHeart size={25} style={iconStyles}></AiOutlineHeart>
        </div>
        <div className="">
          <BsThreeDots size={25} style={iconStyles}></BsThreeDots>
        </div>
      </div>
      <div className="w-[40%] flex-auto flex items-center justify-center gap-4 flex-col py-2 border-x ">
        <div className="flex gap-8 justify-center items-center">
          <span className="cursor-pointer" title="Bật phát ngẫu nhiên">
            <CiShuffle size={25} style={iconStyles} />
          </span>
          <span className="cursor-pointer">
            <MdSkipPrevious size={25} style={iconStyles} />
          </span>
          <span className="p-2 border border-white cursor-pointer hover:text-main-500 rounded-full flex items-center justify-center">
            <BsPauseFill size={25} style={iconStyles} />
          </span>
          <span className="cursor-pointer">
            <MdSkipNext size={24} style={iconStyles} />
          </span>
          <span className="cursor-pointer" title="Bật phát lại tất cả">
            <CiRepeat size={24} style={iconStyles} />
          </span>
        </div>
        {/* <div className="w-full">
          <div className="bg-[rgba(0,0,0,0.1)] relative m-auto h-[3px] w-4/5 rounded-l-full rounded-r-full">
            <div
              id="thumb-progress"
              className="bg-[#0e8080] absolute top-0 left-0 h-[10px] rounded-l-full rounded-r-full"></div>
          </div>
        </div> */}
      </div>
      <div className="w-[30%] flex-auto flex items-center justify-center gap-5">
        <span>
          <BiVolumeMute size={20} style={iconStyles}></BiVolumeMute>
        </span>
        <span>
          <BsVolumeUp size={20} style={iconStyles}></BsVolumeUp>
        </span>
      </div>
    </div>
  );
};
