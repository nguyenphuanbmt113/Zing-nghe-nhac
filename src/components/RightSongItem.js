import React from "react";
import { useDispatch } from "react-redux";
import { playingMusic, setCurrentSongId } from "../redux/actions/MusicActions";
export const RightSongItems = ({ data, sid, rounded }) => {
  // const [isLike, setIsLike] = useState(false);
  const dispatch = useDispatch();
  // const handleIcons = (e) => {
  //   e.stopPropagation();
  //   setIsLike(!isLike);
  // };
  const handleClickSongItem = () => {
    dispatch(setCurrentSongId(sid));
    dispatch(playingMusic(true));
  };
  return (
    <div
      className={`py-2 pl-2 pr-10 flex gap-2 hover:bg-gray-200 transition-all relative text-sm ${
        rounded ? "rounded-lg" : ""
      }`}
      onClick={() => handleClickSongItem()}>
      <div className="flex-none w-[60px] h-[60px]">
        <img
          src={data?.thumbnail}
          alt="avatar"
          className="w-full h-full object-cover rounded-md"
        />
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
