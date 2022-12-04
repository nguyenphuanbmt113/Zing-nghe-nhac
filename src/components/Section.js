import _ from "lodash";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import icons from "../ultis/icons";
const { BiDotsHorizontalRounded, CiHeart, BsSuitHeartFill, BsPlay } = icons;

export const Section = (props) => {
  const [fill, setFill] = useState(false);
  const { data } = props;
  const navigate = useNavigate();
  const SliceWord = (string) => {
    const arrString = string.split(".");
    return arrString[0];
  };
  const handleClick = (item) => {
    let link = SliceWord(item?.link);
    navigate(`${link}`);
  };
  const handleHeart = (e) => {
    e.stopPropagation();
    setFill(!fill);
  };
  if (_.isEmpty(data)) {
    return <div>Some thing wrong with data</div>;
  }
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div className="font-medium text-lg capitalize font-mono">
          {data.title}
        </div>
        <div className="text-sm capitalize p-2 bg-gray-200 font-mono">
          Tất cả
        </div>
      </div>
      <div className="grid grid-cols-5 lg:grid-cols-3 md:grid-cols-3 gap-4 gap-y-6 text-sm">
        {data &&
          data?.items.length > 0 &&
          data?.items.filter((item, index)=>index <= 4)?.map((item) => {
            return (
              <div
                key={item.encodeId}
                className="flex flex-col gap-1"
                onClick={() => handleClick(item)}>
                <div className="relative">
                  <img src={item.thumbnailM} alt="avatar" />
                  <div className="opacity-0 absolute inset-0 bg-black/50 text-white flex items-center justify-center gap-3 w-full hover:opacity-100 transition-opacity ease-in">
                    <div className="" onClick={(e) => handleHeart(e)}>
                      {fill === false ? (
                        <CiHeart size={24}></CiHeart>
                      ) : (
                        <BsSuitHeartFill></BsSuitHeartFill>
                      )}
                    </div>
                    <div className="p-2 rounded-full border border-white flex items-center justify-center">
                      <BsPlay size={24}></BsPlay>
                    </div>
                    <div>
                      <BiDotsHorizontalRounded
                        size={24}></BiDotsHorizontalRounded>
                    </div>
                  </div>
                </div>
                <div className="truncate">{item.title}</div>
                <div className="truncate">{item.sortDescription}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
