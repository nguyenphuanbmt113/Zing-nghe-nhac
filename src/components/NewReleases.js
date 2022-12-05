import React, { useState } from "react";
import { useSelector } from "react-redux";
import { SongItem } from "./SongItem";

const active = "px-2 py-1 rounded-3xl bg-gray-400 text-white text-sm";
const no_active = "px-2 py-1 rounded-3xl border text-gray-400 text-sm";
export const NewReleases = () => {
  const { newReleases } = useSelector((state) => state.app);
  const [isActive, setIsActive] = useState(0);
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="font-medium text-lg capitalize font-mono">
          {newReleases?.title}
        </div>
        <div className="text-sm capitalize font-mono">Tất cả</div>
      </div>
      <div className="flex items-center gap-3 mt-[18px]">
        <button
          className={isActive === 0 ? active : no_active}
          onClick={() => setIsActive(0)}>
          Việt Nam
        </button>
        <button
          className={isActive === 1 ? active : no_active}
          onClick={() => setIsActive(1)}>
          Quốc Tế
        </button>
      </div>
      {isActive === 0 ? (
        <div className="grid grid-cols-3 gap-2 lg:grid-cols- mt-[20px] text-[12px]">
          {newReleases?.items?.vPop.map((item, index) => {
            return (
              <SongItem
                data={item}
                key={item.encodeId}
                sid={item.encodeId}></SongItem>
            );
          })}
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4 lg:grid-cols-2 mt-[20px] text-[12px]">
          {newReleases?.items?.others.map((item, index) => {
            return (
              <SongItem
                data={item}
                key={item.encodeId}
                sid={item.encodeId}></SongItem>
            );
          })}
        </div>
      )}
    </div>
  );
};
