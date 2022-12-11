import React, { useEffect } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { ArtistsSearch } from "../../components/ArtistsSearch";
import { RightSongItems } from "../../components/RightSongItem";
import { searchItemReduxThunk } from "../../redux/actions/searchActions";
import { nFormatter, SliceWord } from "../../ultis/fn";

export const SearchAll = () => {
  const { songs, artists, playlists, keyword } = useSelector(
    (state) => state.search
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(searchItemReduxThunk(keyword));
  }, [keyword]);
  useEffect(() => {
    const query = searchParams.get("q");
    dispatch(searchItemReduxThunk(query));
  }, [dispatch, searchParams]);
  const handleClick = (item) => {
    let link = SliceWord(item?.link);
    navigate(`${link}`);
  };
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
                    <div
                      className="flex items-center p-[10px] rounded-lg gap-2 hover:bg-gray-300 transition-all hover:border-0"
                      key={i}>
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
        <div className="flex flex-col px-[59px] mb-[30px]">
          <span className="text-lg font-semibold mb-[20px]">
            PlayList/Album
          </span>
          <div className="grid grid-cols-5 gap-4">
            {playlists &&
              playlists
                .filter((item, index) => index < 5)
                .map((item, i) => {
                  return (
                    <div
                      onClick={() => handleClick(item)}
                      key={i}
                      className="cursor-pointer">
                      <div>
                        <img
                          src={item.thumbnailM}
                          alt=""
                          className="w-[266.4] h-[266.4] object-cover rounded-lg"
                        />
                      </div>
                      <div className="w-[160px] lg:w-[110px] truncate text-sm mb-[4px]">
                        {item.title}
                      </div>
                      <div className="text-[10px] text-gray-400">
                        {item.artistsNames}
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
        <div className="flex flex-col px-[59px] mb-[30px]">
          <span className="text-lg font-semibold mb-[20px]">Artists</span>
          <div className="grid grid-cols-5 gap-3">
            {artists &&
              artists
                .filter((item, index) => index < 5)
                .map((item, i) => {
                  return (
                    <ArtistsSearch
                      data={item}
                      link={item.link}
                      key={i}></ArtistsSearch>
                  );
                })}
          </div>
        </div>
        <div className="h-[500px]"></div>
      </div>
    </Scrollbars>
  );
};
