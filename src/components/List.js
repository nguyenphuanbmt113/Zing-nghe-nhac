import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux";
import { playingMusic, setCurrentSongId } from "../redux/actions/MusicActions";
// import { useDispatch } from "react-redux";
// import { addtoHistory } from "../redux/reducer/historySlide";
// import { setCurSongId, setIsPlaying } from "../redux/reducer/musicSlide";
import icons from "../ultis/icons";
const { BsMusicNoteBeamed } = icons;
export const List = ({ songData }) => {
  const dispatch = useDispatch();
  // const handleClickMusic = (item) => {
  //   dispatch(setCurSongId(item));
  //   dispatch(setIsPlaying(true));
  //   dispatch(addtoHistory(item));
  // };
  const handleClickItemAlbum = (sid) => {
    dispatch(setCurrentSongId(sid));
    dispatch(playingMusic(true));
  };

  return (
    <>
      <div
        className="flex justify-between items-center p-[10px] border-t border-[rgba(0,0,0,0.05)] hover:bg-[#DDE4E4] cursor-pointer"
        onClick={() => handleClickItemAlbum(songData?.encodeId)}>
        <div className="flex items-center gap-3 flex-1">
          <span>
            <BsMusicNoteBeamed />
          </span>
          <img
            src={songData?.thumbnailM}
            alt="thumbnailM"
            className="w-10 h-10 object-cover rounded-md"
          />
          <span className="flex flex-col w-full">
            <span className="text-sm font-medium overflow-hidden truncate w-[110px]">
              {songData?.title}
            </span>
            <span>{songData?.artistsNames}</span>
          </span>
        </div>
        <div className="flex-1 flex items-center justify-center">
          {songData?.album?.title?.length > 30
            ? `${songData?.album?.title?.slice(0, 30)}...`
            : songData?.album?.title}
        </div>
        <div className="flex-1 flex justify-end">
          {moment.utc(songData?.duration * 1000).format("mm:ss")}
        </div>
      </div>
    </>
  );
};
