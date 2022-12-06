import React, { useEffect } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { RightSongItems } from "../../components/RightSongItem";
import { searchItemReduxThunk } from "../../redux/actions/searchActions";
import { nFormatter } from "../../ultis/fn";

export const SearchAll = () => {
  const { top, songs, counter, artists } = useSelector((state) => state.search);
  console.log("artists", artists);
  const location = useLocation();
  const dispatch = useDispatch();
  const searchParams = new URLSearchParams(location.search).get("q");
  console.log("searchParams", searchParams);
  useEffect(() => {
    dispatch(searchItemReduxThunk(searchParams));
  }, [searchParams]);
  return (
    <Scrollbars style={{ width: "100%", height: "550px" }} autoHide>
      <div className="w-full flex flex-col">
        <div className="flex flex-col px-[59px] mb-[30px]">
          <span className="text-lg font-semibold mb-[20px]">Nổi Bật</span>
          <div className="grid grid-cols-3 gap-3 lg:grid-cols-2">
            {artists &&
              artists.length > 0 &&
              artists
                .filter((item, index) => index < 3)
                .map((item, i) => {
                  return (
                    <div className="flex items-center p-[10px] rounded-lg border border-gray-200 gap-2 hover:bg-gray-300 transition-all hover:border-0">
                      <div>
                        <img
                          src={item?.thumbnail}
                          alt=""
                          className={`rounded-full h-[84px] w-[84px] object-cover`}
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-gray-600">
                          Nghệ sĩ
                        </span>
                        <span className="text-[14px]">{item?.name}</span>
                        <span className="text-[10px] text-gray-600">
                          {nFormatter(item.totalFollow)} quan tâm
                        </span>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
        <div className="flex flex-col px-[59px] mb-[30px]">
          <span className="text-lg font-semibold mb-[20px]">Bài Hát</span>
          <div className="grid grid-cols-3 gap-3 lg:grid-cols-2">
            {songs &&
              songs.length > 0 &&
              songs.map((item) => {
                return (
                  <RightSongItems
                    key={item.encodeId}
                    data={item}
                    sid={item.encodeId}
                    rounded></RightSongItems>
                );
              })}
          </div>
        </div>
        <div className="h-[500px]"></div>
      </div>
    </Scrollbars>
  );
};
