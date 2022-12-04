import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playingMusic } from "../redux/actions/MusicActions";
import { getSongInfo, getSourseMusicById } from "../service/webApi";
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
  // BsSuitHeartFill,
} = icons;
let iconStyles = { color: "white" };
export const Player = () => {
  const [audio, setAudio] = useState(new Audio());
  const { curSongId, isPlaying } = useSelector((state) => state.music);
  const [songInfo, setSongInfo] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchDetailSong = async () => {
      const [res1, res2] = await Promise.all([
        getSongInfo(curSongId),
        getSourseMusicById(curSongId),
      ]);
      if (res1.err === 0) {
        setSongInfo(res1.data);
      }
      if (res2.err === 0) {
        audio.pause();
        setAudio(new Audio(res2?.data["128"]));
      } else {
        audio.pause();
        setAudio(new Audio());
        dispatch(playingMusic(false));
      }
    };
    fetchDetailSong();
  }, [curSongId]);
  useEffect(() => {
    audio.pause();
    audio.load();
    if (isPlaying) {
      audio.play();
    }
  }, [audio]);
  const handleTogglePlayMusic = async () => {
    if (isPlaying) {
      audio.pause();
      dispatch(playingMusic(false));
    } else {
      audio.play();
      dispatch(playingMusic(true));
    }
  };
  return (
    <div className="h-full px-5 flex">
      <div className="w-[30%] flex gap-3 items-center justify-start">
        <div>
          <img
            src={songInfo?.thumbnail}
            alt=""
            className="object-cover w-[64px] h-[64px]"
          />
        </div>
        <div className="flex flex-col gap-1 text-sm text-white">
          <span>{songInfo?.title}</span>
          <span>{songInfo?.artistsNames}</span>
        </div>
        <div className="">
          <AiOutlineHeart size={25} style={iconStyles}></AiOutlineHeart>
        </div>
        <div className="">
          <BsThreeDots size={25} style={iconStyles}></BsThreeDots>
        </div>
      </div>
      <div className="w-[40%] flex-auto flex items-center justify-center gap-4 flex-col py-2">
        <div className="flex gap-8 justify-center items-center">
          <span className="cursor-pointer" title="Bật phát ngẫu nhiên">
            <CiShuffle size={25} style={iconStyles} />
          </span>
          <span className="cursor-pointer">
            <MdSkipPrevious size={25} style={iconStyles} />
          </span>
          <span
            className="p-2 border border-white cursor-pointer hover:text-main-500 rounded-full flex items-center justify-center"
            onClick={() => handleTogglePlayMusic()}>
            {isPlaying === true ? (
              <BsPauseFill size={30} style={iconStyles} />
            ) : (
              <ImPlay3 size={30} style={iconStyles}></ImPlay3>
            )}
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
