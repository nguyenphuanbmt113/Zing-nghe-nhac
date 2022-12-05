import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAlbumRedux, getDetailSong } from "../redux/actions/MusicActions";
import icons from "../ultis/icons";
import { ListRight } from "./ListRight";
import { RightSongItems } from "./RightSongItem";
import Scrollbars from "react-custom-scrollbars-2";
const active = "px-3 py-2 bg-gray-200 rounded-3xl text-main-500";
const noactive = "px-3 py-2 rounded-3xl text-main-500 border";
const { BsThreeDots, CiHeart, BsSuitHeartFill, RiDeleteBin2Line } = icons;
export const SidebarRight = () => {
  const [isActive, setIsActive] = useState(0);
  const { curSongId, InfoSong, album, curAlbumId, watchRecentSong } =
    useSelector((state) => state.music);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetailSong(curSongId));
    dispatch(getAlbumRedux(curAlbumId));
  }, [curSongId, curAlbumId, dispatch]);
  // useEffect(() => {
  //   dispatch(getAlbumRedux(curAlbumId));
  // }, [curAlbumId]);
  return (
    <>
      <div className="h-[70px] flex-auto py-[14px] px-[8px] border-b text-[12px]">
        <div className="flex items-center gap-4">
          <button
            className={isActive === 0 ? active : noactive}
            onClick={() => setIsActive(0)}>
            Danh Sánh Phát
          </button>
          <button
            className={isActive === 1 ? active : noactive}
            onClick={() => setIsActive(1)}>
            Phát Gần Đây
          </button>
          <div className="text-gray-500">
            <BsThreeDots size={25}></BsThreeDots>
          </div>
        </div>
      </div>
      {isActive === 0 && (
        <div>
          <div className="border-b">
            <RightSongItems data={InfoSong} sid={curSongId}></RightSongItems>
          </div>
          <div className="p-[8px] text-sm text-gray-500 flex flex-col">
            <span className="text-[12px] text-gray-400">từ playlist</span>
            <span className="text-green-500 font-semibold font-mono">
              {album?.title}
            </span>
          </div>
          <Scrollbars style={{ width: "100%", height: "500px" }}>
            <div className="grid grid-cols-1">
              {album &&
                album?.song?.items.length > 0 &&
                album?.song?.items.map((item, index) => {
                  return (
                    <RightSongItems
                      data={item}
                      key={item.encodeId}></RightSongItems>
                  );
                })}
            </div>
          </Scrollbars>
        </div>
      )}
      {isActive === 1 && (
        <Scrollbars style={{ width: "100%", height: "500px" }}>
          <div className="grid grid-cols-1">
            {watchRecentSong &&
              watchRecentSong.length > 0 &&
              watchRecentSong.map((item, index) => {
                return (
                  <RightSongItems data={item} key={index}></RightSongItems>
                );
              })}
          </div>
        </Scrollbars>
      )}
    </>
  );
};
